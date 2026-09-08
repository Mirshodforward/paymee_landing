/**
 * SEO seriyasi: Stars va Premium xaridi — o‘zbekcha yuqori chastotali
 * so‘rovlar («stars olish», «yulduz olish», «visa kartasiz premium olish» …).
 * Har bir slug kalit so‘zning o‘ziga mos: /blog/stars-olish, /blog/yulduz-olish.
 */
export const starsPremiumSeriesSlugs = [
  "stars-olish",
  "stars-sotib-olish",
  "som-evaziga-stars-olish",
  "telegram-yulduz-sotib-olish",
  "yulduz-olish",
  "visa-kartasiz-stars-olish",
  "premium-olish",
  "telegram-premium-eng-oson-usul",
  "visa-kartasiz-premium-olish",
  "ozbekistonda-oylik-premium-uza-humo",
] as const;

export type StarsPremiumSeriesSlug = (typeof starsPremiumSeriesSlugs)[number];
