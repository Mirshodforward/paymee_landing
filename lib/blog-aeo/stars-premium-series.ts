/**
 * SEO seriyasi: Stars va Premium xaridi — o‘zbekcha yuqori chastotali
 * so‘rovlar («stars olish», «yulduz olish», «visa kartasiz premium olish» …).
 * Har bir slug kalit so‘zning o‘ziga mos: /blog/stars-olish, /blog/yulduz-olish.
 */
export const starsPremiumSeriesSlugs = [
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegram-stars-eng-yaxshi-botlar-2026",
  "yulduz-olish",
  "telegram-premium-eng-oson-usul",
  "ozbekistonda-oylik-premium-uza-humo",
] as const;

export type StarsPremiumSeriesSlug = (typeof starsPremiumSeriesSlugs)[number];
