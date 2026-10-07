/**
 * StarsPaymee mahsulot va narxlari — yagona manba (single source of truth).
 * Narxlar so‘mda (UZS). Matnlar i18n da, raqamlar shu yerda.
 */

/**
 * Telegram Stars — dona narxi TO‘LOV USULIGA bog‘liq, shuning uchun saytda
 * Stars narxi hech qachon usulsiz yozilmaydi: yo ikkala narx, yo «karta
 * o‘tkazmasi» belgisi bilan. 2026-10-05 da bot bazasi, env va kodidan
 * tekshirildi.
 *
 * `STARS_PER_UNIT_UZS` (220) — KARTA O‘TKAZMASI: bot ko‘rsatgan Uzcard/Humo
 * kartaga istalgan ilovadan o‘tkazma (Click/Payme ichidagi «Kartaga o‘tkazma»
 * ham shu) yoki balansdan to‘lov. Bot env `STARS_PRICE_PER_UNIT=220`. Haqiqiy
 * karta buyurtmalari 218–220 so‘m/dona (oxirgi 7 kunda 356 ta): o‘tkazmani
 * summa bo‘yicha tanib olish uchun bot summani 50 so‘mlik qadamlar bilan
 * biroz kamaytiradi. Bazaviy paket 50 ⭐ = 11 000 so‘m.
 */
export const STARS_PER_UNIT_UZS = 220;
/**
 * `STARS_PER_UNIT_GATEWAY_UZS` (240) — botdagi ONLAYN TO‘LOV tugmalari:
 * Click, Payme, Uzum, Paynet. Bot `payment_methods.stars_unit_price = 240`,
 * Stars buyurtmasi `dona × 240` bo‘lib narxlanadi
 * (`modules/paymentMethods/pricing.js`). Oxirgi 7 kunda 240 da to‘langan:
 * payme 179, click 153, paynet 28, uzum 26.
 *
 * Bot tarifi o‘zgarsa — ikkala konstantani VA raqami qo‘lda yozilgan
 * matnlarni yangilang (bitta grep: `220`, `240`, `11 000`, `12 000`):
 *  - messages/{uz,ru,en}.json: landing.stars (metaTitle, metaDescription,
 *    intro, bullets), starsPage (metaTitle, metaDescription, lead, badges,
 *    finalSub, faq), home.faqItems («Narxlar qancha?»);
 *  - lib/blog-aeo/posts/180-naqd-pul-bilan-telegram-stars-sotib-olish.tsx
 *    (karta o‘tkazmasi misolida 11 000).
 * Komponentlar va boshqa maqolalar raqamni shu yerdan oladi
 * (`STARS_PACKS`, `formatStarsPrice`).
 */
export const STARS_PER_UNIT_GATEWAY_UZS = 240;
export const STARS_BASE = { amount: 50, priceUzs: 11_000 } as const;

/** Karta o‘tkazmasi yoki balansdan: `amount` dona Stars narxi. */
export function starsPrice(amount: number): number {
  return Math.round(amount * STARS_PER_UNIT_UZS);
}

/** Click, Payme, Uzum yoki Paynet (onlayn to‘lov) orqali: `amount` dona Stars narxi. */
export function starsGatewayPrice(amount: number): number {
  return Math.round(amount * STARS_PER_UNIT_GATEWAY_UZS);
}

export const STARS_PACK_AMOUNTS = [50, 75, 100, 150, 250, 500, 1000, 2500, 5000, 10_000] as const;

export type StarsPack = {
  amount: number;
  /** Karta o‘tkazmasi yoki balansdan (`STARS_PER_UNIT_UZS`). */
  priceUzs: number;
  /** Click, Payme, Uzum, Paynet orqali (`STARS_PER_UNIT_GATEWAY_UZS`). */
  gatewayPriceUzs: number;
  popular?: boolean;
};

export const STARS_PACKS: StarsPack[] = STARS_PACK_AMOUNTS.map((amount) => ({
  amount,
  priceUzs: starsPrice(amount),
  gatewayPriceUzs: starsGatewayPrice(amount),
  popular: amount === 100,
}));

/**
 * Telegram Premium — «username bilan» oqimi: akkauntga kirish shart emas,
 * faqat username yetarli, 5 soniyada avtomatik faollashadi.
 */
export type PremiumPlan = { months: 1 | 3 | 6 | 12; priceUzs: number; popular?: boolean };

/**
 * 3/6/12 oy — botdagi narx bilan aynan bir xil: server .env `VITE_PREMIUM_3/6/12`
 * (2026-10-05 da tekshirildi: 159 900 / 216 000 / 388 000) va `pricing.js` dagi
 * `FLAT_PRICED_TYPES` — Premium HAMMA to'lov usulida (karta, Click, Payme, Uzum, Paynet)
 * bir xil narxda, ustamasiz. Bot narxi o'zgarsa — shu yerni ham.
 */
export const PREMIUM_PLANS: PremiumPlan[] = [
  { months: 1, priceUzs: 45_000 },
  { months: 3, priceUzs: 159_900 },
  { months: 6, priceUzs: 216_000, popular: true },
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
  deliverySeconds: 5,
  activeUsers: 4000,
  orders: 100_000,
  yearsInService: 1.5,
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
 * Qo‘llab-quvvatlanadigan to‘lov usullari (llms.txt ro‘yxati).
 *
 * Click, Payme, Uzum, Paynet — botdagi onlayn to‘lov usullari (shlyuz):
 * to‘lov avtomatik tasdiqlanadi; 2026-10-05 da to‘rttasi ham
 * `payment_methods` da yoqilgan. Paynet invoice’ini Paynet ilovasi yoki
 * terminalida to‘lash mumkin (bot tavsifi: «Paynet ilovasi yoki terminali
 * orqali»). UzCard/HUMO — bot ko‘rsatgan kartaga o‘tkazma. Terminalda naqd
 * pul bilan BALANSNI to‘ldirish rejimi (`PAYNET_CASH_MODE`) bundan alohida
 * va hozircha yopiq. Naqd yo‘l: /blog/naqd-pul-bilan-telegram-stars-sotib-olish
 */
export const PAYMENT_METHODS = ["Click", "Payme", "Uzum", "Paynet", "UzCard", "HUMO"] as const;

/** so‘m summasini joriy tilga mos bo‘sh joy bilan ajratib formatlash. */
export function formatUzs(value: number, locale: string): string {
  const grouped = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US")
    .format(value)
    .replace(/,/g, " ");
  const suffix = locale === "ru" ? "сум" : locale === "en" ? "UZS" : "so‘m";
  return `${grouped} ${suffix}`;
}

/**
 * Matn ichidagi Stars narxi — `amount` dona, tanlangan usul bo‘yicha, joriy
 * til formatida: `formatStarsPrice(50, "uz", "gateway")` → «12 000 so‘m».
 * Maqolalar raqamni qo‘lda yozmasin — tarif o‘zgarsa matn ham o‘zgaradi.
 */
export function formatStarsPrice(
  amount: number,
  locale: string,
  method: "card" | "gateway" = "card",
): string {
  return formatUzs(method === "gateway" ? starsGatewayPrice(amount) : starsPrice(amount), locale);
}
