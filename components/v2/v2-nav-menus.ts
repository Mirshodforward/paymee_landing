/**
 * Headerdagi mahsulot menyulari — Stars, Premium, NFT.
 *
 * Bu yerda faqat tuzilma: qaysi guruhda qaysi band, qayerga olib boradi va
 * qaysi ikonka. Matnlar `messages/*.json` dagi `v2.nav*` kalitlaridan.
 *
 * `hash: true` — bosh sahifadagi bo'limga havola. Bosh sahifada `#nft-rent`,
 * ichki sahifalarda `/#nft-rent` bo'lib chiqadi (`V2Nav` hal qiladi).
 * Havolalarning barchasi tekshirilgan: `/stars`, `/premium`, `/gifts`
 * sahifalari va `#stars-narx`, `#premium-narx`, `#boost-market`, `#nft-rent`
 * bo'limlari bor; ikkita blog maqolasi uchala tilda ham mavjud.
 */

import { AtSign, Crown, Gem, Gift, Rocket, Star, Store, Tag, type LucideIcon } from "lucide-react";
import { GAMES } from "@/lib/games";
import { GEMPAY_URL } from "@/lib/site";

export type NavMenuItem = {
  /** `messages` dagi kalit: sarlavha uchun shu, tavsif uchun `${key}Desc`. */
  key: string;
  href: string;
  /** Bosh sahifadagi bo'limga havola bo'lsa `true`. */
  hash?: boolean;
  Icon: LucideIcon;
};

export type NavMenu = {
  /** Tugma matni uchun kalit. */
  key: string;
  /** `aria-controls` va holat uchun barqaror id. */
  id: string;
  items: readonly NavMenuItem[];
};

export const NAV_MENUS: readonly NavMenu[] = [
  {
    key: "navStars",
    id: "stars",
    items: [
      { key: "navStarsBuy", href: "/stars", Icon: Star },
      { key: "navStarsPrices", href: "#stars-narx", hash: true, Icon: Tag },
      { key: "navStarsBoost", href: "#boost-market", hash: true, Icon: Rocket },
    ],
  },
  {
    key: "navPremium",
    id: "premium",
    items: [
      { key: "navPremiumBuy", href: "/premium", Icon: Crown },
      { key: "navPremiumPrices", href: "#premium-narx", hash: true, Icon: Tag },
      { key: "navPremiumGift", href: "/gifts", Icon: Gift },
    ],
  },
  {
    key: "navNft",
    id: "nft",
    items: [
      { key: "navNftRent", href: "#nft-rent", hash: true, Icon: Gem },
      { key: "navNftUsername", href: "/blog/telegram-username-sotib-olish", Icon: AtSign },
      { key: "navNftMarket", href: "/blog/starspaymee-nft-market", Icon: Store },
    ],
  },
];

/**
 * «O'yinlar» menyusi — ikki ustunli keng panel.
 *
 * MANBA: `lib/games.ts` (u bot katalogini aks ettiradi). Bu yerda qo'lda
 * yozilgan o'yin nomi YO'Q — ro'yxat o'zi shakllanadi, shuning uchun
 * katalogga yangi o'yin qo'shilsa menyuda ham chiqadi.
 *
 * HAVOLALAR: xarid gempay.uz da bo'ladi, shuning uchun sahifasi bor
 * o'yinlar o'sha yerga ketadi (`gempaySlug` — gempay sitemap'idan
 * tekshirilgan 10 ta sahifa). Faqat botda bor ilovalar (IMO, Likee) va
 * gift card (Roblox) botga yuboriladi, chunki ular uchun sahifa yo'q.
 */
export type NavGameRow = {
  /** Ko'rinadigan nom — atoqli ot, tarjima qilinmaydi. */
  title: string;
  emoji: string;
  href: string;
  /** O'ng tomondagi yorliq uchun `messages` kaliti. */
  badgeKey: string;
  /** `true` — havola o'rniga botga yuboriladi (`V2Nav` `botUrl` ni qo'yadi). */
  bot?: boolean;
};

const gempay = (slug: string) => `${GEMPAY_URL.replace(/\/+$/, "")}/oyinlar/${slug}`;

const unitKey: Record<string, string> = {
  uc: "navUnitUc",
  diamond: "navUnitDiamond",
  cp: "navUnitCp",
  token: "navUnitToken",
  coin: "navUnitCoin",
  wallet: "navUnitWallet",
};

const fromCatalog = (category?: "app") =>
  GAMES.filter((g) => g.gempaySlug && g.category === category).map<NavGameRow>((g) => ({
    title: g.title,
    emoji: g.emoji,
    href: gempay(g.gempaySlug as string),
    badgeKey: unitKey[g.unitGroup] ?? "navUnitToken",
  }));

/** Chap ustun: ID bo'yicha to'ldiriladigan o'yinlar. */
export const NAV_GAMES: readonly NavGameRow[] = fromCatalog(undefined);

/**
 * O'ng ustun: Steam (gempay'da alohida xizmat), ilovalar va gift card.
 * Steam `lib/games.ts` da yo'q — u o'yin to'ldirish emas, hamyon to'ldirish,
 * shuning uchun bu yerda qo'lda turadi.
 */
export const NAV_GAME_APPS: readonly NavGameRow[] = [
  { title: "Steam", emoji: "🎮", href: gempay("steam"), badgeKey: "navUnitWallet" },
  ...fromCatalog("app"),
  { title: "IMO", emoji: "📱", href: "", bot: true, badgeKey: "navGameBot" },
  { title: "Likee", emoji: "▶️", href: "", bot: true, badgeKey: "navGameBot" },
  { title: "Roblox", emoji: "🧸", href: "", bot: true, badgeKey: "navGameGiftcard" },
];

/** Menyu ostidagi yig'ma havola. */
export const NAV_GAMES_ALL = `${GEMPAY_URL.replace(/\/+$/, "")}/oyinlar`;

/** «O'yinlar» tugmasi — `NAV_MENUS` dan keyin, keng panel bilan chiziladi. */
export const NAV_GAMES_ID = "games";
