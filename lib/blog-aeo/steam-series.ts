/** SEO seriyasi: Steam Wallet balansini O‘zbekistonda so‘mda to‘ldirish. */
export const steamSeriesSlugs = [
  "steam-wallet-nima",
  "steam-login-nima",
  "steam-balansi-tushmadi",
  "steam-wallet-xavfsizmi",
  "steam-hisobini-himoya-qilish-10-maslahat",
] as const;

export type SteamSeriesSlug = (typeof steamSeriesSlugs)[number];
