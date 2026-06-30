/**
 * Mijozlar sharhlari va reytingi — YAGONA MANBA.
 *
 * ⚠️ MUHIM: Bu yerga FAQAT real, tasdiqlangan ma'lumot qo'shiladi.
 * Yolg'on sharh yoki o'ylab topilgan reyting QAT'IY TAQIQLANADI
 * (E-E-A-T va Google'ning sharh-spam siyosati buzilishi — jarima xavfi).
 *
 * REVIEWS bo'sh bo'lsa — bosh sahifada sharhlar bo'limi ham, Review/AggregateRating
 * schema ham KO'RINMAYDI. Real ma'lumot qo'shilishi bilan ikkalasi avtomatik yoqiladi.
 */

export type Review = {
  /** Sharh muallifi (real ism yoki @username). */
  author: string;
  /** Reyting 1..5. */
  rating: number;
  /** Sharh matni (real). */
  text: string;
  /** ISO yyyy-mm-dd (ixtiyoriy). */
  date?: string;
  /** Manba: masalan "Telegram", yoki havola (ixtiyoriy). */
  source?: string;
  /** Sharh tili (ixtiyoriy). */
  locale?: "uz" | "ru" | "en";
};

export type AggregateRating = {
  /** O'rtacha reyting, masalan 4.9. */
  ratingValue: number;
  /** Jami sharhlar/baholar soni. */
  reviewCount: number;
  /** Maksimal qiymat (odatda 5). */
  bestRating?: number;
  /** Reyting manbasi (qayerdan olingani — shaffoflik uchun). */
  source?: string;
};

/**
 * Real mijoz sharhlari. Misol format (real ma'lumot bilan to'ldiring):
 *
 *   { author: "Ali", rating: 5, text: "...", date: "2026-06-20", source: "Telegram", locale: "uz" },
 */
export const REVIEWS: Review[] = [];

/**
 * Real, tasdiqlangan umumiy reyting. Manba ko'rsatilishi shart.
 * Misol: { ratingValue: 4.9, reviewCount: 1280, bestRating: 5, source: "Telegram bot baholari" }
 */
export const RATING: AggregateRating | null = null;

export function hasReviews(): boolean {
  return REVIEWS.length > 0;
}

export function hasRating(): boolean {
  return RATING != null && RATING.reviewCount > 0 && RATING.ratingValue > 0;
}
