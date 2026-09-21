/**
 * StarsPaymee «NFT gift ijarasi» — landing uchun namunaviy ma'lumot.
 *
 * Haqiqiy katalog va narx botda: `modules/giftRent` Marketapp API'dan
 * ro'yxatni oladi va narxni jonli TON kursi bilan hisoblaydi:
 *
 *   tannarx_ton = komissiya + kunlik_narx_ton × kun
 *   so'm        = tannarx_ton × TON_kursi × (1 + ustama%)  → yuqoriga yaxlitlash
 *
 * Shuning uchun bu yerdagi summalar — TAXMINIY, landingdagi mockup uchun.
 * Mockup ham «taxminiy» deb belgilanadi; jonli narx faqat botda ko'rinadi.
 */

export const giftRentLimits = {
  minDays: 1,
  maxDays: 30,
  quickDays: [1, 7, 30] as const,
  /** Katalog fon jarayonida yangilanadi (refresher, 5 daqiqalik kesh). */
  refreshMinutes: 5,
};

export type RentGiftSample = {
  id: string;
  title: string;
  /** Model / backdrop — Marketapp katalogidagi filtrlar bilan bir xil. */
  tags?: string[];
  perDayUzs: number;
  emoji: string;
};

/** Bir ijaraga bir marta qo'shiladigan tarmoq komissiyasi (so'mda, taxminiy). */
export const RENT_FEE_UZS = 4_000;

/** Kun soni bo'yicha jami — botdagi `computeRentSom` ning soddalashtirilgan aksi. */
export function estimateRentTotalUzs(perDayUzs: number, days: number): number {
  const d = Math.max(giftRentLimits.minDays, Math.floor(days));
  const raw = RENT_FEE_UZS + perDayUzs * d;
  return Math.ceil(raw / 500) * 500;
}

export const rentGiftSamples: RentGiftSample[] = [
  { id: "plush-pepe", title: "Plush Pepe", tags: ["Neon", "Onyx Black"], perDayUzs: 2_600, emoji: "🐸" },
  { id: "durovs-cap", title: "Durov's Cap", tags: ["Classic"], perDayUzs: 2_100, emoji: "🧢" },
  { id: "eternal-rose", title: "Eternal Rose", tags: ["Ruby"], perDayUzs: 1_400, emoji: "🌹" },
];

export const rentGiftCollections = ["Plush Pepe", "Durov's Cap", "Eternal Rose"] as const;

export function formatRentUzs(n: number): string {
  return `${n.toLocaleString("uz-UZ")} so‘m`;
}
