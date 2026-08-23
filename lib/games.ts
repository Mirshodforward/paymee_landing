/**
 * GamPay o'yin katalogi — marketing sayti uchun.
 *
 * MANBA: bot backend'idagi `modules/gameTopup/catalog.js` → `GAME_META`.
 * Ikkalasi bir xil turishi kerak: bu yerdagi `code` bot marshrutida
 * (`/games/:code`) ishlatiladi, shuning uchun nomlarni o'zboshimchalik bilan
 * o'zgartirmang.
 *
 * NARX QO'YILMAGAN — bilib turib. Bot narxi provayder katalogidan jonli
 * keladi va USDT kursiga bog'liq (`modules/gameTopup/pricing.js`). Statik
 * saytga yozilgan raqam bir haftada eskiradi va noto'g'ri va'da bo'lib qoladi,
 * shuning uchun bu yerda faqat o'zgarmaydigan ma'lumot: valyuta birligi,
 * qanday ID kerakligi va o'rtacha yetkazish vaqti.
 */

export type GameUnitGroup = "uc" | "diamond" | "cp" | "token" | "coin" | "wallet";

export type GameInfo = {
  /** Bot marshrutidagi kod — `/games/<code>` */
  code: string;
  title: string;
  short: string;
  emoji: string;
  /** Nima sotib olinadi: UC, Olmos, CP, Token… */
  unit: string;
  unitGroup: GameUnitGroup;
  accent: string;
  /** Buyurtma uchun nima so'raladi */
  idLabel: string;
  /** Foydalanuvchi ID sini qayerdan topadi */
  idHint: { uz: string; ru: string; en: string };
  /** O'rtacha yetkazish vaqti */
  eta: { uz: string; ru: string; en: string };
  /** Blog maqolasi slug'i (mavjud bo'lsa) */
  blogSlug?: string;
};

const eta = (min: string) => ({
  uz: `~${min} daqiqa`,
  ru: `~${min} мин`,
  en: `~${min} min`,
});

export const GAMES: GameInfo[] = [
  {
    code: "pubgm",
    title: "PUBG Mobile",
    short: "PUBG",
    emoji: "🔫",
    unit: "UC",
    unitGroup: "uc",
    accent: "#f5a524",
    idLabel: "Player ID",
    idHint: {
      uz: "O‘yinda: profil → ismingiz ostidagi ID raqami",
      ru: "В игре: профиль → номер ID под вашим именем",
      en: "In game: profile → the ID number under your name",
    },
    eta: eta("2"),
    blogSlug: "pubg-mobile-uc-sotib-olish",
  },
  {
    code: "mlbb_global",
    title: "Mobile Legends",
    short: "MLBB",
    emoji: "⚔️",
    unit: "Olmos",
    unitGroup: "diamond",
    accent: "#5b8def",
    idLabel: "User ID + Server ID",
    idHint: {
      uz: "O‘yinda: profil → ID (qavs ichidagi raqam — Server ID)",
      ru: "В игре: профиль → ID (число в скобках — Server ID)",
      en: "In game: profile → ID (the number in brackets is the Server ID)",
    },
    eta: eta("1"),
    blogSlug: "mobile-legends-olmos-sotib-olish",
  },
  {
    code: "freefire_global",
    title: "Free Fire",
    short: "FF",
    emoji: "🔥",
    unit: "Olmos",
    unitGroup: "diamond",
    accent: "#f97316",
    idLabel: "Player ID",
    idHint: {
      uz: "O‘yinda: profil → ismingiz ostidagi Player ID",
      ru: "В игре: профиль → Player ID под вашим именем",
      en: "In game: profile → the Player ID under your name",
    },
    eta: eta("2"),
    blogSlug: "free-fire-olmos-sotib-olish",
  },
  {
    code: "codm_sgmy",
    title: "Call of Duty Mobile",
    short: "CODM",
    emoji: "🎯",
    unit: "CP",
    unitGroup: "cp",
    accent: "#f43f5e",
    idLabel: "Player ID",
    idHint: {
      uz: "O‘yinda: profil → ID raqami (Garena SG/MY hisobi)",
      ru: "В игре: профиль → номер ID (аккаунт Garena SG/MY)",
      en: "In game: profile → ID number (Garena SG/MY account)",
    },
    eta: eta("3"),
    blogSlug: "call-of-duty-mobile-cp-sotib-olish",
  },
  {
    code: "hok",
    title: "Honor of Kings",
    short: "HOK",
    emoji: "👑",
    unit: "Token",
    unitGroup: "token",
    accent: "#eab308",
    idLabel: "Player ID",
    idHint: {
      uz: "O‘yinda: profil → ID raqami",
      ru: "В игре: профиль → номер ID",
      en: "In game: profile → ID number",
    },
    eta: eta("3"),
    blogSlug: "honor-of-kings-token-sotib-olish",
  },
  {
    code: "magic_chess_gogo",
    title: "Magic Chess: Go Go",
    short: "MCGG",
    emoji: "♟️",
    unit: "Olmos",
    unitGroup: "diamond",
    accent: "#a855f7",
    idLabel: "User ID + Server ID",
    idHint: {
      uz: "O‘yinda: profil → ID (qavs ichidagi raqam — Server ID)",
      ru: "В игре: профиль → ID (число в скобках — Server ID)",
      en: "In game: profile → ID (the number in brackets is the Server ID)",
    },
    eta: eta("2"),
    blogSlug: "magic-chess-gogo-olmos-sotib-olish",
  },
  {
    code: "deltaforce",
    title: "Delta Force",
    short: "Delta",
    emoji: "🎖️",
    unit: "Delta Coins",
    unitGroup: "coin",
    accent: "#84cc16",
    idLabel: "Player ID",
    idHint: {
      uz: "O‘yinda: profil → ID raqami",
      ru: "В игре: профиль → номер ID",
      en: "In game: profile → ID number",
    },
    eta: eta("5"),
    blogSlug: "delta-force-coins-sotib-olish",
  },
  {
    code: "asphalt9",
    title: "Asphalt 9",
    short: "A9",
    emoji: "🏎️",
    unit: "Token",
    unitGroup: "token",
    accent: "#ef4444",
    idLabel: "Player ID + platforma",
    idHint: {
      uz: "O‘yinda: profil → Player ID. Platformani ham tanlang.",
      ru: "В игре: профиль → Player ID. Также выберите платформу.",
      en: "In game: profile → Player ID. Also pick the platform.",
    },
    eta: eta("5"),
    blogSlug: "asphalt-9-token-sotib-olish",
  },
  {
    code: "bigo",
    title: "Bigo Live",
    short: "Bigo",
    emoji: "💎",
    unit: "Olmos",
    unitGroup: "diamond",
    accent: "#22d3ee",
    idLabel: "Bigo ID",
    idHint: {
      uz: "Ilovada: Me → ismingiz ostidagi Bigo ID",
      ru: "В приложении: Me → Bigo ID под вашим именем",
      en: "In the app: Me → the Bigo ID under your name",
    },
    eta: eta("3"),
    blogSlug: "bigo-live-olmos-sotib-olish",
  },
];

export const GAME_BY_CODE = new Map(GAMES.map((g) => [g.code, g]));

/** Steam GamPay javonida ham turadi, lekin o'yin emas — alohida xizmat. */
export const STEAM_IN_GAMPAY = {
  title: "Steam",
  emoji: "🎮",
  unit: "Hamyon",
  accent: "#1b2838",
  blogSlug: "ozbek-somida-steam-balansini-toldirish",
} as const;
