/**
 * StarsPaymee Mini App «Gift Market» — kolleksion NFT giftlar (namunaviy katalog).
 * Narxlar so‘mda (UZS); botdagi real ro‘yxat vaqt bilan yangilanadi.
 */

export type NftGiftCollection = {
  id: string;
  name: string;
  count: number;
};

export type NftGiftListing = {
  id: string;
  title: string;
  collectionId: string;
  priceUzs: number;
  tags?: string[];
  featured?: boolean;
  featuredLabelUz?: string;
  emoji: string;
};

export const nftGiftMarketMeta = {
  titleUz: "Gift Market",
  titleRu: "Gift Market",
  subtitleUz: "Kolleksion NFT giftlar — sotib oling, sotang, yeching",
  subtitleRu: "Коллекционные NFT-подарки — купить, продать, вывести",
  sortUz: ["Yangi", "Arzon", "Qimmat", "Sotuvda"] as const,
  filterAllUz: "Barchasi",
};

export const nftGiftCollections: NftGiftCollection[] = [
  { id: "all", name: "Barchasi", count: 13 },
  { id: "liberty", name: "LibertyFigure", count: 4 },
  { id: "mood", name: "MoodPack", count: 3 },
];

export const nftGiftListings: NftGiftListing[] = [
  {
    id: "liberty-figure",
    title: "Liberty Figure",
    collectionId: "liberty",
    priceUzs: 220_000,
    tags: ["Miss USA", "Celtic Wolf"],
    featured: true,
    featuredLabelUz: "Tanlangan",
    emoji: "🗽",
  },
  {
    id: "aqua-backpack",
    title: "Aqua Backpack",
    collectionId: "mood",
    priceUzs: 194_000,
    emoji: "🎒",
  },
  {
    id: "shark-backpack",
    title: "Shark Backpack",
    collectionId: "mood",
    priceUzs: 195_000,
    emoji: "🦈",
  },
  {
    id: "mood-core",
    title: "Mood Pack Core",
    collectionId: "mood",
    priceUzs: 168_000,
    emoji: "💠",
  },
];

export const nftGiftMarketSampleBalanceUzs = 7_000;

export function formatGiftPriceUzs(n: number): string {
  return `${n.toLocaleString("uz-UZ")} so‘m`;
}
