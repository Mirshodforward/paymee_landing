/**
 * Mijoz sharhlari — bot backend'idan jonli o'qiladi.
 *
 * ⚠️ MUHIM: bu yerda hech qanday qo'lda yozilgan sharh yoki reyting YO'Q va
 * bo'lmaydi. Manba — botdagi `reviews` jadvali: yulduzlar tasdiqlangan
 * xaridordan, matnlar moderatsiyadan o'tgan. Backend ishlamasa bo'lim
 * yashirinadi, hech qanday «zaxira» sharh ko'rsatilmaydi.
 *
 * Yangilanish: ISR 15 daqiqa + bot tasdiqlaganda `/api/revalidate` webhook
 * (`reviews` tegi) — shunda keyingi tashrifda darhol yangi ro'yxat chiqadi.
 */

import { PUBLIC_API_BASE } from "@/lib/site";

export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  locale: string;
  source: "bot" | "web";
  /** Bot orqali, yetkazilgan buyurtmaga bog'langan — tasdiqlangan xaridor. */
  verified: boolean;
  /** Nima sotib olgani — botdagi haqiqiy buyurtmadan (`orders.order_type`, `type_amount`). */
  product?: { type: string; amount: number | null } | null;
  /** ISO yyyy-mm-dd */
  date: string;
};

/** «300 Stars», «Premium · 6 oy» — karta ustidagi tasdiqlangan xarid belgisi. */
export function productLabel(p: Review["product"], locale: string): string | null {
  if (!p) return null;
  const t = p.type.toLowerCase();
  const mo = locale === "ru" ? "мес" : locale === "en" ? "mo" : "oy";
  if (t.startsWith("stars")) return p.amount ? `${p.amount.toLocaleString("en-US").replace(/,/g, " ")} Stars` : "Stars";
  if (t.startsWith("premium")) return p.amount ? `Premium · ${p.amount} ${mo}` : "Premium";
  if (t.startsWith("boost")) return "Boost";
  if (t.includes("gift")) return locale === "ru" ? "Подарок" : locale === "en" ? "Gift" : "Sovg‘a";
  return null;
}

export type RatingSummary = {
  /** O'rtacha, masalan 4.8. */
  value: number;
  /** Barcha tasdiqlangan baholar (matnsizlar ham). */
  count: number;
};

export type ReviewsData = { rating: RatingSummary; reviews: Review[] };

export const REVIEWS_TAG = "reviews";
export const REVALIDATE_SECONDS = 900;
/** Shundan kam baho bilan AggregateRating schema chiqarilmaydi — 1 ta 5.0 hech narsani anglatmaydi. */
export const MIN_RATING_COUNT = 10;

const EMPTY: ReviewsData = { rating: { value: 0, count: 0 }, reviews: [] };
const TIMEOUT_MS = 4000;

function apiBase(): string {
  return (process.env.STATS_API_URL || PUBLIC_API_BASE).replace(/\/+$/, "");
}

export async function getReviews(limit = 24): Promise<ReviewsData> {
  try {
    const res = await fetch(`${apiBase()}/api/public/reviews?limit=${limit}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [REVIEWS_TAG] },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return EMPTY;
    const raw = (await res.json()) as Partial<ReviewsData> & { ok?: boolean };
    if (raw.ok === false || !Array.isArray(raw.reviews)) return EMPTY;
    const reviews = raw.reviews
      .filter((r) => r && typeof r.text === "string" && r.rating >= 1 && r.rating <= 5)
      .map((r) => ({ ...r, rating: Math.round(r.rating) }));
    const value = Number(raw.rating?.value) || 0;
    const count = Number(raw.rating?.count) || 0;
    return { rating: { value, count }, reviews };
  } catch {
    // Tarmoq/timeout — bo'lim jimgina yashirinadi; build buzilmaydi.
    return EMPTY;
  }
}

export function hasRating(r: RatingSummary): boolean {
  return r.count >= MIN_RATING_COUNT && r.value > 0;
}

/** Product/Organization ichiga qo'yish uchun — faqat yetarli baho bo'lsa. */
export function aggregateRatingLd(r: RatingSummary): Record<string, unknown> | null {
  if (!hasRating(r)) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: r.value.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: r.count,
  };
}

/**
 * `Product.review` — sahifada ko'rinadigan oxirgi sharhlar (Google talabi:
 * sxemadagi sharh sahifada ham bo'lishi shart — bizda sharhlar bo'limi
 * o'sha sahifada). `aggregateRating` bilan bir xil shart: 10+ baho.
 */
export function reviewsLd(data: ReviewsData, limit = 5): Record<string, unknown>[] {
  if (!hasRating(data.rating)) return [];
  return data.reviews.slice(0, limit).map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
  }));
}
