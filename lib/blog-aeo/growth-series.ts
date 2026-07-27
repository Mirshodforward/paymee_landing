/**
 * 2026 SEO seriyasi: Telegram raqam, akkaunt, Premium, Stars, reklama va boshqalar.
 * Blog indeksida alohida blok va ichki linking uchun.
 */
export const telegramGrowthSeriesSlugs = [
  "telegram-raqam-sotib-olish",
  "virtual-telegram-raqam-nima",
  "telegram-premium-sotib-olish-2026",
  "telegram-akkaunt-sotib-olish",
  "telegram-biznes-akkaunt-ochish",
  "telegram-kanal-boost-olish-qollanma",
  "telegram-stars-sotib-olish-to-liq-qollanma",
  "telegram-gifts-yuborish-qollanma",
  "telegram-username-sotib-olish",
  "telegram-kanal-guruh-reklama-xizmatlari",
] as const;

export type TelegramGrowthSeriesSlug = (typeof telegramGrowthSeriesSlugs)[number];
