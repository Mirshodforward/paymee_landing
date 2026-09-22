/**
 * Sharh muallifining ismini tozalash.
 *
 * Kartochka ham, JSON-LD sxemasi ham shu bitta funksiyadan foydalanadi —
 * aks holda sahifada «Mijoz», sxemada esa «.» yoki «-» chiqib qolardi va
 * Google'ning «muallif ismi noto'g'ri» ogohlantirishi kelardi.
 */

/**
 * Telegram ismlari ko'pincha bezakli: «𝙰𝚋𝚍𝚞𝚕𝚊𝚣𝚒𝚣», «꧁𝕬𝖎𝖉𝖊𝖓꧂», «🅑🅔🅖🅘».
 * NFKC matematik harflarni oddiy harfga qaytaradi, qolgan bezak/emoji
 * olib tashlanadi. Bo'sh qolsa — «Mijoz». Surrogat juftlik yarmi (buzilgan
 * belgi) chiqmasligi uchun harflar `Array.from` bilan olinadi.
 */
export function cleanName(raw: string, locale: string): string {
  const fallback = locale === "ru" ? "Клиент" : locale === "en" ? "Customer" : "Mijoz";
  const norm = (raw || "").normalize("NFKC");
  const kept = Array.from(norm)
    .filter((ch) => /[\p{L}\p{N}\s'’\-.]/u.test(ch))
    .join("")
    .replace(/\s+/g, " ")
    .trim();
  // Harfsiz ism («1114», «...») — ism emas.
  if (!kept || !/\p{L}/u.test(kept)) return fallback;
  return kept.length > 24 ? kept.slice(0, 24).trim() : kept;
}

/** Avatar harfi — birinchi HARF (belgi emas), katta. */
export function initialOf(name: string): string {
  const first = Array.from(name).find((ch) => /\p{L}/u.test(ch));
  return (first || "•").toUpperCase();
}
