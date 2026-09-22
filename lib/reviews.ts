/**
 * Mijoz sharhlari — bot backend'idan jonli o'qiladi.
 *
 * ⚠️ MUHIM: bu yerda hech qanday qo'lda yozilgan sharh yoki reyting YO'Q va
 * bo'lmaydi. Manba — botdagi `reviews` jadvali: yulduzlar tasdiqlangan
 * xaridordan, matnlar moderatsiyadan o'tgan. Backend ishlamasa bo'lim
 * yashirinadi, hech qanday «zaxira» sharh ko'rsatilmaydi.
 *
 * Yangilanish WEBHOOK orqali: bot sharhni tasdiqlaganda `/api/revalidate` ni
 * chaqiradi va `reviews` tegi yangilanadi. Sahifa har tashrifda backend'ga
 * bormaydi — kesh uzoq (`REVALIDATE_SECONDS`), u faqat webhook ishlamay
 * qolgan holatga zaxira.
 *
 * Til bo'yicha filtr: o'zbekcha sahifada o'zbekcha sharhlar, ruschada —
 * ruscha. Til matnning o'zidan aniqlanadi (`lib/review-lang.ts`), chunki
 * botdagi `locale` — foydalanuvchi interfeysi tili, matnning tili emas.
 */

import { detectReviewLang, type ReviewLang } from "@/lib/review-lang";
import { cleanName } from "@/lib/review-name";
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
  /** Matndan aniqlangan til — sahifa tiliga moslash uchun. */
  lang?: ReviewLang;
};

export type RatingSummary = {
  /** O'rtacha, masalan 4.8. */
  value: number;
  /** Barcha tasdiqlangan baholar (matnsizlar ham). */
  count: number;
  /** 1–5 yulduz bo'yicha soni — backend beradi; bo'lmasa matnli sharhlardan taxminan. */
  distribution?: Record<"1" | "2" | "3" | "4" | "5", number>;
};

export type StarRow = { star: 1 | 2 | 3 | 4 | 5; count: number; pct: number };

/** Play Market uslubidagi taqsimot qatorlari (5 → 1). */
export function ratingRows(data: ReviewsData): StarRow[] {
  const dist = data.rating.distribution;
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  if (dist) {
    for (const k of [1, 2, 3, 4, 5] as const) counts[k] = Number(dist[String(k) as keyof typeof dist]) || 0;
  } else {
    for (const r of data.reviews) counts[r.rating] = (counts[r.rating] || 0) + 1;
  }
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  return ([5, 4, 3, 2, 1] as const).map((star) => ({ star, count: counts[star], pct: Math.round((counts[star] / total) * 100) }));
}

export type ReviewsData = { rating: RatingSummary; reviews: Review[] };

export const REVIEWS_TAG = "reviews";
/**
 * Zaxira muddati. Asosiy yangilanish — webhook (`revalidateTag`). Bu son
 * faqat webhook ishlamay qolsa sahifa muzlab qolmasligi uchun.
 */
export const REVALIDATE_SECONDS = 21_600; // 6 soat
/** Backend'dan so'raladigan matnli sharhlar soni (tilga bo'linishidan oldin). */
const FETCH_LIMIT = 300;
/** Shundan kam baho bilan AggregateRating schema chiqarilmaydi — 1 ta 5.0 hech narsani anglatmaydi. */
export const MIN_RATING_COUNT = 10;

const EMPTY: ReviewsData = { rating: { value: 0, count: 0 }, reviews: [] };
const TIMEOUT_MS = 4000;

function apiBase(): string {
  return (process.env.STATS_API_URL || PUBLIC_API_BASE).replace(/\/+$/, "");
}

/**
 * Sharhlarni o'qiydi va sahifa tiliga mos kelganlarini qaytaradi.
 *
 * @param locale sahifa tili. Berilmasa — filtrsiz (hamma til).
 *
 * Filtr qoidalari:
 *  - matnda harf bo'lmasa (faqat emoji) — ko'rsatilmaydi;
 *  - matn tili sahifa tiliga teng bo'lishi kerak;
 *  - reyting (o'rtacha va soni) filtrlanmaydi — u barcha xaridorlarniki.
 */
export async function getReviews(locale?: string): Promise<ReviewsData> {
  try {
    const res = await fetch(`${apiBase()}/api/public/reviews?limit=${FETCH_LIMIT}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [REVIEWS_TAG] },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return EMPTY;
    const raw = (await res.json()) as Partial<ReviewsData> & { ok?: boolean };
    if (raw.ok === false || !Array.isArray(raw.reviews)) return EMPTY;
    const reviews = raw.reviews
      .filter((r) => r && typeof r.text === "string" && r.rating >= 1 && r.rating <= 5)
      .map((r) => ({ ...r, rating: Math.round(r.rating), lang: detectReviewLang(r.text, r.locale) ?? undefined }))
      // Harfsiz matn (faqat emoji/raqam) hech narsa aytmaydi.
      .filter((r) => r.lang)
      // Sahifa tiliga mos kelmaganlari boshqa tildagi sahifada chiqadi.
      .filter((r) => !locale || r.lang === locale);
    const value = Number(raw.rating?.value) || 0;
    const count = Number(raw.rating?.count) || 0;
    const distribution = raw.rating?.distribution;
    return { rating: { value, count, ...(distribution ? { distribution } : {}) }, reviews };
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
export function reviewsLd(data: ReviewsData, locale: string, limit = 5): Record<string, unknown>[] {
  if (!hasRating(data.rating)) return [];
  return data.reviews.slice(0, limit).map((r) => ({
    "@type": "Review",
    // Sahifadagi ism bilan bir xil bo'lishi shart: Google sxemadagi qiymat
    // ekranda ko'rinishini talab qiladi. Tozalanmagan «.» / «-» ism emas.
    author: { "@type": "Person", name: cleanName(r.name, locale) },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
  }));
}
