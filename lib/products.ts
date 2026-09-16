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
export type PremiumPlan = { months: 1 | 3 | 6 | 12; priceUzs: number; popular?: boolean };

export const PREMIUM_PLANS: PremiumPlan[] = [
  { months: 1, priceUzs: 45_000 },
  { months: 3, priceUzs: 160_000 },
  { months: 6, priceUzs: 215_000, popular: true },
  { months: 12, priceUzs: 388_000 },
];

/**
 * Premium — «akkauntga kirib berish» oqimi (alohida xizmat).
 *
 * MUHIM: 2026-yil sentabridan boshlab 1, 3, 6 va 12 oylik tariflarning
 * HAMMASI username oqimida beriladi (`PREMIUM_PLANS`). Login oqimi faqat
 * nostandart holatlar uchun qoldi va uning narxi ommaviy e'lon qilinmaydi —
 * shartlar qo'llab-quvvatlash orqali aniqlanadi.
 *
 * Ro'yxat ataylab bo'sh: eskirgan narxni ko'rsatgandan ko'ra, ko'rsatmagan
 * ma'qul. `PremiumPlanBoard` bo'sh ro'yxatda jadval o'rniga izoh chiqaradi.
 */
export type PremiumLoginPlan = { months: number; priceUzs: number };

export const PREMIUM_LOGIN_PLANS: PremiumLoginPlan[] = [];

/** Marketing statistikasi (hero / stats band). */
export const STATS = {
  deliverySeconds: 10,
  activeUsers: 4000,
  orders: 100_000,
  yearsInService: 1,
} as const;

/**
 * Steam hamyonini to‘ldirish — qat’iy kurs va eng kichik summa.
 *
 * NIMA UCHUN shu yerda: kurs bir necha maqolada takrorlanadi. Qo‘lda
 * yozilsa, kurs o‘zgarganda maqolalar bir-biriga zid bo‘lib qoladi —
 * shuning uchun raqam bitta manbadan o‘qiladi.
 */
export const STEAM_RATE_UZS_PER_USD = 12_900;
export const STEAM_MIN_USD = 1;
/** Bitta buyurtmada eng ko'p to'ldiriladigan summa. */
export const STEAM_MAX_USD = 400;

/** Berilgan dollar summasining so‘mdagi qiymati. */
export function steamPriceUzs(usd: number): number {
  return Math.round(usd * STEAM_RATE_UZS_PER_USD);
}

/**
 * Qo‘llab-quvvatlanadigan to‘lov usullari.
 *
 * ESLATMA: bu ro‘yxatda ilgari «Paynet» ham bor edi, lekin botda Paynet
 * alohida to‘lov usuli sifatida turmaydi — u naqd pulni kartaga yoki
 * Click/Payme hamyoniga o‘tkazish vositasi. Naqd yo‘l hujjatlangan:
 * /blog/naqd-pul-bilan-telegram-stars-sotib-olish
 */
export const PAYMENT_METHODS = ["Click", "Payme", "Uzum", "UzCard", "HUMO"] as const;

/** so‘m summasini joriy tilga mos bo‘sh joy bilan ajratib formatlash. */
export function formatUzs(value: number, locale: string): string {
  const grouped = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US")
    .format(value)
    .replace(/,/g, " ");
  const suffix = locale === "ru" ? "сум" : locale === "en" ? "UZS" : "so‘m";
  return `${grouped} ${suffix}`;
}
