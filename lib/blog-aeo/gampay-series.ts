/** SEO seriyasi: GamPay — o‘yin hisobini O‘zbek so‘mida to‘ldirish. */
export const gampaySeriesSlugs = [
  "oyin-hisobini-toldirish",
  "pubg-mobile-uc-sotib-olish",
  "mobile-legends-olmos-sotib-olish",
  "free-fire-olmos-sotib-olish",
  "call-of-duty-mobile-cp-sotib-olish",
  "honor-of-kings-token-sotib-olish",
  "magic-chess-gogo-olmos-sotib-olish",
  "delta-force-coins-sotib-olish",
  "asphalt-9-token-sotib-olish",
  "bigo-live-olmos-sotib-olish",
] as const;

export type GamPaySeriesSlug = (typeof gampaySeriesSlugs)[number];
