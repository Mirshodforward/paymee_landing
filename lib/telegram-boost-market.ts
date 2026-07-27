/**
 * StarsPaymee «Kanal Boost arenda» — namunaviy narx va limitlar.
 * Joriy narxlar botda yangilanadi; bu jadval SEO va landing uchun asos.
 */

export const boostMarketLimits = {
  minDays: 1,
  maxDays: 30,
  minBoosts: 1,
  maxBoosts: 100,
  availableNow: 100,
  quickDays: [1, 16, 30] as const,
};

export type BoostPriceRow = {
  boosts: number;
  days: number;
  totalUzs: number;
  noteUz?: string;
};

/** Kunlik stavka (1 boost / 1 kun) — uzoq muddatda chegirma qo‘llanadi. */
export const BOOST_UZS_PER_BOOST_PER_DAY = 1_200;

export function estimateBoostTotalUzs(boosts: number, days: number): number {
  const base = boosts * days * BOOST_UZS_PER_BOOST_PER_DAY;
  let discount = 1;
  if (days >= 30) discount = 0.88;
  else if (days >= 16) discount = 0.93;
  if (boosts >= 50) discount *= 0.95;
  else if (boosts >= 10) discount *= 0.97;
  return Math.round(base * discount);
}

/** Blog va landing uchun tayyor paketlar (taxminiy). */
export const boostPricePackages: BoostPriceRow[] = [
  { boosts: 1, days: 1, totalUzs: estimateBoostTotalUzs(1, 1), noteUz: "Sinov uchun" },
  { boosts: 1, days: 30, totalUzs: estimateBoostTotalUzs(1, 30), noteUz: "1 oylik ijarа" },
  { boosts: 10, days: 7, totalUzs: estimateBoostTotalUzs(10, 7), noteUz: "Haftalik kampaniya" },
  { boosts: 25, days: 16, totalUzs: estimateBoostTotalUzs(25, 16), noteUz: "O‘rta kanallar" },
  { boosts: 50, days: 30, totalUzs: estimateBoostTotalUzs(50, 30), noteUz: "Katta kanallar" },
  { boosts: 100, days: 30, totalUzs: estimateBoostTotalUzs(100, 30), noteUz: "Maksimal paket" },
];

export const boostMarketDemoChannel = {
  title: "StarsPaymee",
  username: "@StarsPaymee",
  link: "https://t.me/StarsPaymee",
  level: 8,
  boostCount: 127,
};

export function formatBoostUzs(n: number): string {
  return `${n.toLocaleString("uz-UZ")} so‘m`;
}
