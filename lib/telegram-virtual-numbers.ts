/**
 * StarsPaymee Mini App dagi virtual raqam katalogi uchun namunaviy narx/zaxira ma’lumoti.
 * Botdagi real qiymatlar vaqt o‘tishi bilan o‘zgarishi mumkin — maqolada «joriy narx botda» deb ko‘rsatiladi.
 */

export type VirtualNumberTier = "budget" | "mid" | "premium";

export type VirtualNumberCountry = {
  code: string;
  nameUz: string;
  nameRu: string;
  priceUzs: number;
  /** Taxminiy mavjud akkaunt/raqam soni (bot UI dagi «ta mavjud»). */
  stock: number;
  tier: VirtualNumberTier;
};

/** O‘zbekistonda eng ko‘p qidiriladigan davlatlar + arzon va qimmat segmentlar. */
export const virtualNumberCatalog: VirtualNumberCountry[] = [
  { code: "BD", nameUz: "Bangladesh", nameRu: "Бангладеш", priceUzs: 6_600, stock: 180, tier: "budget" },
  { code: "CA", nameUz: "Kanada", nameRu: "Канада", priceUzs: 6_600, stock: 1027, tier: "budget" },
  { code: "CO", nameUz: "Kolumbiya", nameRu: "Колумбия", priceUzs: 6_600, stock: 1479, tier: "budget" },
  { code: "IN", nameUz: "Hindiston", nameRu: "Индия", priceUzs: 6_600, stock: 916, tier: "budget" },
  { code: "US", nameUz: "AQSh", nameRu: "США", priceUzs: 6_600, stock: 580, tier: "budget" },
  { code: "ID", nameUz: "Indoneziya", nameRu: "Индонезия", priceUzs: 7_200, stock: 640, tier: "budget" },
  { code: "PH", nameUz: "Filippin", nameRu: "Филиппины", priceUzs: 7_200, stock: 420, tier: "budget" },
  { code: "IR", nameUz: "Eron", nameRu: "Иран", priceUzs: 7_500, stock: 160, tier: "mid" },
  { code: "KE", nameUz: "Keniya", nameRu: "Кения", priceUzs: 8_400, stock: 3, tier: "mid" },
  { code: "VN", nameUz: "Vyetnam", nameRu: "Вьетнам", priceUzs: 9_800, stock: 210, tier: "mid" },
  { code: "MY", nameUz: "Malayziya", nameRu: "Малайзия", priceUzs: 12_500, stock: 88, tier: "mid" },
  { code: "GB", nameUz: "Buyuk Britaniya", nameRu: "Великобритания", priceUzs: 18_900, stock: 45, tier: "mid" },
  { code: "DE", nameUz: "Germaniya", nameRu: "Германия", priceUzs: 22_400, stock: 62, tier: "mid" },
  { code: "AW", nameUz: "Aruba", nameRu: "Аруба", priceUzs: 37_500, stock: 105, tier: "premium" },
  { code: "LT", nameUz: "Litva", nameRu: "Литва", priceUzs: 43_100, stock: 182, tier: "premium" },
  { code: "QA", nameUz: "Qatar", nameRu: "Катар", priceUzs: 46_900, stock: 243, tier: "premium" },
  { code: "BH", nameUz: "Bahrayn", nameRu: "Бахрейн", priceUzs: 56_300, stock: 72, tier: "premium" },
  { code: "NU", nameUz: "Niue", nameRu: "Ниуэ", priceUzs: 56_300, stock: 39, tier: "premium" },
  { code: "SG", nameUz: "Singapur", nameRu: "Сингапур", priceUzs: 56_300, stock: 38, tier: "premium" },
  { code: "KR", nameUz: "Janubiy Koreya", nameRu: "Южная Корея", priceUzs: 56_300, stock: 94, tier: "premium" },
];

export function formatUzsShort(n: number): string {
  return `${n.toLocaleString("uz-UZ")} so‘m`;
}

export function catalogByTier(tier: VirtualNumberTier): VirtualNumberCountry[] {
  return virtualNumberCatalog.filter((c) => c.tier === tier);
}

export const virtualNumberStats = {
  countryCount: "100+",
  sortOptionsUz: ["A-Z", "Arzon", "Qimmat", "Ko‘p zaxira"] as const,
  sortOptionsRu: ["A-Z", "Дешёвые", "Дорогие", "Больше в наличии"] as const,
};
