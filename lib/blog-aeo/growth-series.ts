/**
 * 2026 SEO seriyasi: Telegram raqam, akkaunt, Premium, Stars, reklama va boshqalar.
 * Blog indeksida alohida blok va ichki linking uchun.
 */
export const telegramGrowthSeriesSlugs = [
  "telegram-raqam-sotib-olish",
  "telegram-premium-eng-oson-usul",
  "telegram-akkaunt-sotib-olish",
  "telegram-biznes-akkaunt-ochish",
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegram-gifts-qanday-yuboriladi-qollanma",
  "telegram-username-sotib-olish",
] as const;

export type TelegramGrowthSeriesSlug = (typeof telegramGrowthSeriesSlugs)[number];
