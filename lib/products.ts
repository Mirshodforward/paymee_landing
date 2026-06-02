/**
 * StarsPaymee mahsulot va narxlari — yagona manba (single source of truth).
 * Narxlar so‘mda (UZS). Matnlar i18n da, raqamlar shu yerda.
 */

/** Telegram Stars: donasi shu narxdan; bazaviy paket 50 ⭐ = 11 000 so‘m. */
export const STARS_PER_UNIT_UZS = 220;
export const STARS_BASE = { amount: 50, priceUzs: 11_000 } as const;

export function starsPrice(amount: number): number {
  return Math.round(amount * STARS_PER_UNIT_UZS);
}

export const STARS_PACK_AMOUNTS = [50, 75, 100, 150, 250, 500, 1000, 2500, 5000, 10_000] as const;

export type StarsPack = { amount: number; priceUzs: number; popular?: boolean };

export const STARS_PACKS: StarsPack[] = STARS_PACK_AMOUNTS.map((amount) => ({
  amount,
  priceUzs: starsPrice(amount),
  popular: amount === 100,
}));

/**
 * Telegram Premium — «username bilan» oqimi: akkauntga kirish shart emas,
 * faqat username yetarli, 10 soniyada avtomatik faollashadi.
 */
export type PremiumPlan = { months: 3 | 6 | 12; priceUzs: number; popular?: boolean };

export const PREMIUM_PLANS: PremiumPlan[] = [
  { months: 3, priceUzs: 172_000 },
  { months: 6, priceUzs: 232_000, popular: true },
  { months: 12, priceUzs: 422_000 },
];

/**
 * Premium — «akkauntga kirib berish» oqimi (alohida xizmat).
 * Login orqali rasmiy faollashtirish.
 */
export type PremiumLoginPlan = { months: 1 | 12; priceUzs: number };

export const PREMIUM_LOGIN_PLANS: PremiumLoginPlan[] = [
  { months: 1, priceUzs: 50_000 },
  { months: 12, priceUzs: 300_000 },
];

/** Marketing statistikasi (hero / stats band). */
export const STATS = {
  deliverySeconds: 10,
  activeUsers: 4000,
  orders: 100_000,
  yearsInService: 1,
} as const;

/** Qo‘llab-quvvatlanadigan to‘lov usullari. */
export const PAYMENT_METHODS = ["Click", "Payme", "Paynet", "UzCard", "HUMO"] as const;

/** so‘m summasini joriy tilga mos bo‘sh joy bilan ajratib formatlash. */
export function formatUzs(value: number, locale: string): string {
  const grouped = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US")
    .format(value)
    .replace(/,/g, " ");
  const suffix = locale === "ru" ? "сум" : locale === "en" ? "UZS" : "so‘m";
  return `${grouped} ${suffix}`;
}
