/**
 * SEO seriyasi (2-to‘lqin): Stars va Premium bo‘yicha kengaytirilgan
 * qo‘llanmalar — narx, sovg‘a, botlar, xavfsizlik, taqqoslash va
 * mintaqaviy (O‘zbekiston) so‘rovlar.
 *
 * Birinchi to‘lqin — `stars-premium-series.ts` (kalit so‘z = slug pillar
 * sahifalari). Bu ro‘yxat ularni to‘ldiradi, almashtirmaydi.
 */
export const starsPremiumGuideSeriesSlugs = [
  "telegram-stars-qanday-olinadi",
  "telegram-stars-kerak",
  "telegram-yulduz-kerak",
  "stars-olish-tez-usul",
  "telegram-stars-narxi",
  "stars-orqali-sovga-yuborish",
  "telegram-botlar-uchun-stars",
  "telegram-stars-kartasiz-sotib-olish",
  "telegram-premium-kerak",
  "telegram-premium-narxi",
  "telegram-premium-imkoniyatlari",
  "premium-va-oddiy-hisob-farqi",
  "arzon-telegram-premium",
  "telegram-premium-sovga-qilish",
  "stars-va-premium-farqi",
  "telegram-stars-xavfsizmi",
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegram-premium-fayl-yuklash",
  "kanal-egalari-uchun-stars",
  "ishonchli-stars-xizmatini-tanlash",
] as const;

export type StarsPremiumGuideSeriesSlug = (typeof starsPremiumGuideSeriesSlugs)[number];
