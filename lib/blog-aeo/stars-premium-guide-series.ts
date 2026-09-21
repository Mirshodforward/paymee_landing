/**
 * SEO seriyasi (2-to‘lqin): Stars va Premium bo‘yicha kengaytirilgan
 * qo‘llanmalar — narx, sovg‘a, botlar, xavfsizlik, taqqoslash va
 * mintaqaviy (O‘zbekiston) so‘rovlar.
 *
 * Birinchi to‘lqin — `stars-premium-series.ts` (kalit so‘z = slug pillar
 * sahifalari). Bu ro‘yxat ularni to‘ldiradi, almashtirmaydi.
 */
export const starsPremiumGuideSeriesSlugs = [
  "telegram-yulduz-kerak",
  "telegram-stars-narxi",
  "telegram-gifts-qanday-yuboriladi-qollanma",
  "telegram-stars-kartasiz-sotib-olish",
  "telegram-premium-kerak",
  "telegram-premium-narxi",
  "telegram-premium-narxi-ozbekistonda-2026",
  "telegram-premium-sovga-username-orqali",
  "telegram-stars-xavfsizmi",
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegramda-4gb-fayl-yuborish",
  "ishonchli-stars-xizmatini-tanlash",
] as const;

export type StarsPremiumGuideSeriesSlug = (typeof starsPremiumGuideSeriesSlugs)[number];
