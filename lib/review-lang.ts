/**
 * Sharh matnining tilini aniqlash.
 *
 * Nega kerak: botdagi `locale` — bu foydalanuvchining bot interfeysi tili,
 * matnning tili emas. Haqiqiy ma'lumotda ular tez-tez mos kelmaydi:
 *   «Хизмат курсатиш яхши» → locale `ru`, aslida o'zbekcha (kirill)
 *   «Prosto ishonchli va tez» → locale `ru`, aslida o'zbekcha (lotin)
 *   «Ваше зор ишончли ва тезкор» → locale `uz`, kirill o'zbekcha
 *
 * Shuning uchun til matnning o'zidan aniqlanadi: o'zbek kirillining
 * o'ziga xos harflari (ў, қ, ғ, ҳ) va ikkala tilning eng ko'p uchraydigan
 * so'zlari sanaladi. Hech qanday signal bo'lmasa — saqlangan `locale`.
 */

export type ReviewLang = "uz" | "ru" | "en";

/** Faqat o'zbek kirillida bor harflar — eng kuchli dalil. */
const UZ_CYRILLIC_ONLY = /[ўқғҳЎҚҒҲ]/;

/** Kuchli o'zbek belgilari (2 ball) — ruschada umuman uchramaydi. */
const UZ_STRONG = [
  "зор", "зўр", "зур", "яхши", "ишончли", "ишончи", "хаммаси", "ҳаммаси",
  "рахмат", "раҳмат", "арзон", "тезкор", "халол", "ҳалол", "хизмат",
  "курсатиш", "кўрсатиш", "сифатли", "яхширок", "яхшироқ",
];

/** Oddiy o'zbek so'zlari (1 ball). */
const UZ_CYR = [
  "тез", "осон", "учун", "булса", "бўлса", "керак", "олиш", "олишни", "олдим",
  "оламан", "олганимдан", "килиш", "қилиш", "буларди", "бўларди", "факат",
  "фақат", "кейн", "кейин", "мухум", "муҳим", "омад", "яна", "хали", "ҳали",
  "бор", "йук", "йўқ", "мен", "сиз", "биз", "ва", "бу", "жуда", "дакика",
  "дақиқа", "тушди", "болгани", "бўлгани", "алданиб", "колмадим", "қолмадим",
  "ойлиги", "премиум", "старс",
];

/** Rus tilining eng ko'p uchraydigan so'zlari (1 ball). */
const RU = [
  "очень", "быстро", "спасибо", "все", "всё", "это", "хороший", "хорошая",
  "хорошо", "лучший", "лучшие", "лучше", "сервис", "звезды", "звёзды",
  "можно", "нравится", "купить", "покупка", "мне", "вас", "вам", "вы",
  "тут", "здесь", "дешевле", "дешево", "дёшево", "удобно", "надежный",
  "надёжный", "работает", "работу", "приходят", "приходит", "помогает",
  "поддержка", "потдержка", "сайт", "магаз", "имба", "цены", "цена",
  "деньги", "безопасно", "качественно", "советую", "рекомендую", "просто",
  "когда", "потому", "что", "как", "для", "при", "без", "есть", "нет",
  "который", "очень", "самый", "самые", "такого", "через", "бот", "боту",
];

/** Ingliz tili belgilari. */
const EN = [
  "nice", "good", "great", "best", "very", "fast", "thanks", "thank",
  "service", "love", "the", "and", "is", "it", "this", "for", "with",
  "you", "are", "was", "my", "me", "everything", "works", "cheap",
];

/** Lotin yozuvidagi o'zbek so'zlari. */
const UZ_LAT = [
  "zor", "zo'r", "zoʻr", "zõr", "yaxshi", "tez", "ishonchli", "ishonchi",
  "ishonchle", "hammasi", "rahmat", "raxmat", "uchun", "juda", "qulay",
  "arzon", "narx", "narxlar", "narhlar", "menga", "men", "sizlar", "silarga",
  "ham", "sotib", "olish", "yoqdi", "gap", "yoq", "yo'q", "kerak", "xizmat",
  "ekan", "bilan", "har", "doim", "eng", "boladi", "bo'ladi", "bolsa",
  "yordam", "tezlik", "ishlaydi", "aldash", "aldanib", "sifatli", "ishonsa",
  "bormi", "qilib", "yana", "faqat", "lekin", "bir", "shu", "ва",
];

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\s'’ʻ]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function score(list: string[], ws: string[], weight = 1): number {
  let n = 0;
  for (const w of ws) if (list.includes(w)) n += weight;
  return n;
}

/**
 * Matndan tilni aniqlaydi. Harflar umuman bo'lmasa (faqat emoji/raqam)
 * `null` qaytadi — bunday «sharh» ko'rsatilmaydi.
 */
export function detectReviewLang(text: string, storedLocale?: string): ReviewLang | null {
  const ws = words(text);
  if (!ws.length) return null;

  const hasCyrillic = /[Ѐ-ӿ]/.test(text);
  const hasLatin = /[A-Za-z]/.test(text);

  if (hasCyrillic) {
    // O'zbek kirilliga xos harf bo'lsa — boshqa dalil kerak emas.
    if (UZ_CYRILLIC_ONLY.test(text)) return "uz";
    const uz = score(UZ_STRONG, ws, 2) + score(UZ_CYR, ws);
    const ru = score(RU, ws);
    if (uz > ru) return "uz";
    if (ru > uz) return "ru";
    return storedLocale === "uz" ? "uz" : "ru";
  }

  if (hasLatin) {
    const uz = score(UZ_LAT, ws);
    const en = score(EN, ws);
    if (uz > en) return "uz";
    if (en > uz) return "en";
    // Signal yo'q: lotin yozuvi O'zbekistonda deyarli doim o'zbekcha.
    return storedLocale === "en" ? "en" : "uz";
  }

  return null;
}
