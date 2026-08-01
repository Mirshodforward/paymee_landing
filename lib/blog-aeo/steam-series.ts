/** SEO seriyasi: Steam Wallet balansini O‘zbekistonda so‘mda to‘ldirish. */
export const steamSeriesSlugs = [
  "ozbek-somida-steam-balansini-toldirish",
  "steam-wallet-nima",
  "steam-hisobini-qanday-toldirish-mumkin",
  "steam-login-nima",
  "steam-wallet-uzcard-orqali-toldirish",
  "steam-wallet-humo-orqali-toldirish",
  "steam-wallet-narxlari",
  "steam-balansi-tushmadi",
  "steam-wallet-xavfsizmi",
  "steam-hisobini-himoya-qilish-10-maslahat",
  "steam-gift-card-nima",
] as const;

export type SteamSeriesSlug = (typeof steamSeriesSlugs)[number];
