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
