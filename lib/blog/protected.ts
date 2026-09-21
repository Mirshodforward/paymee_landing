/**
 * Blog konsolidatsiyasida TEGILMAYDIGAN sahifalar va aralashtirilmaydigan niyatlar.
 *
 * NIMA UCHUN: maqolalarni birlashtirish (`lib/blog/redirects.ts`) qidiruv
 * signalini bitta URLga yig‘adi, lekin noto‘g‘ri tanlangan juftlik trafikni
 * yo‘qotadi. Ikki xil xato bor:
 *
 *   1. Trafik olayotgan sahifani yopish — takror mazmun bo‘lsa ham, sahifa
 *      allaqachon pozitsiya va klik to‘plagan bo‘ladi. Avval GSC’dagi
 *      so‘rovlarini ko‘rmasdan yopish — tayyor natijani tashlash.
 *   2. Vazifasi boshqa sahifalarni qo‘shib yuborish — «Gift sotib olish» va
 *      «Gift sotish» bir mavzuda, lekin foydalanuvchining niyati qarama-qarshi.
 *      Birlashtirilsa, ikkala so‘rov uchun ham javob yomonlashadi.
 *
 * Shu sababli ro‘yxatlar kodda turadi va `npm run verify:seo` ularni
 * tekshiradi: himoyalangan slug redirect’ga tushsa yoki bir guruhning ikki
 * xil vazifasi bir-biriga yo‘naltirilsa, tekshiruv yiqiladi.
 *
 * Manba: sayt egasi bergan trafik eksporti va 2026-09-18 dagi qaror.
 */

/**
 * Hozircha birlashtirilmaydigan maqolalar (2-qadam ro‘yxati).
 *
 * Bularda takror mazmun bor, lekin trafik ham bor. Keyin GSC’dagi qidiruv
 * so‘rovlari bo‘yicha alohida baholanadi. Hozircha ruxsat etilgan yagona
 * o‘zgartirish — narx yoki xizmat holatidagi xatoni tuzatish.
 */
export const protectedBlogSlugs = [
  // Stars
  "telegram-yulduz-kerak",
  "telegram-stars-kartasiz-sotib-olish",
  "yulduz-olish",
  // Premium narxi
  "telegram-premium-narxi",
  // Premium foydalari
  "telegram-premium-arziydimi-foydalari",
  // Ishonch
  "ishonchli-stars-xizmatini-tanlash",
] as const;

/**
 * Alohida vazifali sahifalar: kalit — `guruh/vazifa`.
 *
 * QOIDA: bitta guruh ichidagi IKKI XIL vazifani bir-biriga birlashtirish
 * mumkin emas. Bir vazifaning ichidagi slug’lar (masalan, sovg‘a sotishning
 * ikki nusxasi) esa bir-biriga birlashtirilishi mumkin — ular haqiqatan ham
 * bir xil ehtiyojga javob beradi.
 */
export const separateIntentTasks: Record<string, readonly string[]> = {
  // To‘lov usullari — har biri o‘z so‘rovi bilan keladi («click orqali», «payme orqali», «naqd»)
  "tolov/click": ["click-payme-orqali-telegram-stars-sotib-olish"],
  "tolov/payme": ["payme-orqali-stars-va-premium-sotib-olish"],
  "tolov/naqd": ["naqd-pul-bilan-telegram-stars-sotib-olish"],

  // Premium: xarid, narx, bir oylik va sovg‘a — to‘rt xil vazifa
  "premium/xarid": ["telegram-premium-eng-oson-usul"],
  "premium/narx": ["telegram-premium-narxi", "telegram-premium-narxi-ozbekistonda-2026"],
  "premium/bir-oylik": ["ozbekistonda-oylik-premium-uza-humo"],
  "premium/sovga": ["telegram-premium-sovga-username-orqali"],

  // Stars: muammoni tekshirish, balansni ko‘rish va xarid — uch xil vazifa
  "stars/kelmadi": ["telegram-stars-kelmadi-nima-qilish"],
  "stars/balans": ["telegram-stars-balans-qanday-korish-2026"],
  "stars/xarid": [
    "ozbekistonda-telegram-stars-sotib-olish",
    "telegram-stars-qayerdan-sotib-olish-2026",
  ],

  // Gifts: xarid, yuborish, sotish, upgrade va konvertatsiya — besh xil vazifa
  "gift/xarid": ["telegram-sovga-va-nft-sovga-sotib-olish", "telegram-gifts-narxlari-royxati"],
  "gift/yuborish": ["telegram-gifts-qanday-yuboriladi-qollanma"],
  "gift/sotish": ["telegram-gift-sotish"],
  "gift/konvertatsiya": ["telegram-gift-stars-ga-aylantirish"],

  // Har bir o‘yin alohida maqola bo‘lib qoladi — Player ID, valyuta va narx har xil
  "oyin/hub": ["oyin-hisobini-toldirish"],
  "oyin/pubgm": ["pubg-mobile-uc-sotib-olish"],
  "oyin/mlbb": ["mobile-legends-olmos-sotib-olish"],
  "oyin/freefire": ["free-fire-olmos-sotib-olish"],
  "oyin/codm": ["call-of-duty-mobile-cp-sotib-olish"],
  "oyin/hok": ["honor-of-kings-token-sotib-olish"],
  "oyin/magicchess": ["magic-chess-gogo-olmos-sotib-olish"],
  "oyin/deltaforce": ["delta-force-coins-sotib-olish"],
  "oyin/asphalt9": ["asphalt-9-token-sotib-olish"],
  "oyin/bigo": ["bigo-live-olmos-sotib-olish"],
};

/** Slug himoyalanganmi (hozircha birlashtirilmaydimi)? */
export function isProtectedBlogSlug(slug: string): boolean {
  return (protectedBlogSlugs as readonly string[]).includes(slug);
}

/** Slug qaysi `guruh/vazifa` kalitiga tegishli (bo‘lmasa — undefined). */
export function intentTaskOf(slug: string): string | undefined {
  for (const [key, slugs] of Object.entries(separateIntentTasks)) {
    if (slugs.includes(slug)) return key;
  }
  return undefined;
}
