/**
 * Blog konsolidatsiyasi: birlashtirilgan maqolalarning eski URL’lari.
 *
 * NIMA UCHUN: mavzusi ustma-ust tushgan ikki maqola bir-birining qidiruv
 * signalini yeydi (keyword cannibalization). Yechim — foydali matnni
 * qoladigan maqolaga ko‘chirish va eski URL’dan unga doimiy yo‘naltirish
 * qo‘yish. Oddiy o‘chirib 404 chiqarish emas: 404 to‘plangan havola va
 * pozitsiyani yo‘qotadi, redirect esa ularni qoladigan sahifaga o‘tkazadi.
 *
 * TARTIB (muhim): avval `to` maqolasi yaxshilanadi, keyin `from` ro‘yxatga
 * qo‘shiladi. Bo‘sh yoki yomon sahifaga yo‘naltirish redirectning ma’nosini
 * yo‘qotadi.
 *
 * Bu ro‘yxat ikki joyda ishlatiladi:
 *   1. `next.config.ts` — HTTP darajasida 308 (doimiy) yo‘naltirish;
 *   2. `lib/blog/all.ts` — himoya filtri, ya’ni yo‘naltirilgan slug
 *      sitemap, RSS, llms.txt va blog kartochkalarida qayta paydo
 *      bo‘lmasligi uchun (maqola fayli indeksdan olib tashlanmay qolsa ham).
 *
 * ESLATMA: Next.js `permanent: true` uchun 301 emas, 308 qaytaradi — bu
 * so‘rov metodini saqlaydigan zamonaviy ekvivalenti va qidiruv tizimlari
 * uni ham doimiy yo‘naltirish deb qabul qiladi.
 */
export type BlogRedirect = {
  /** Eski slug — /{locale}/blog/{from} */
  from: string;
  /** Qoladigan slug — /{locale}/blog/{to} */
  to: string;
  /** Qachon birlashtirilgani (ISO yyyy-mm-dd) — audit uchun. */
  merged: string;
  /** Nega birlashtirildi — keyingi tekshiruvlarda kontekst bo‘lsin. */
  reason: string;
};

export const blogRedirects: BlogRedirect[] = [
  {
    from: "telegram-premium-sotib-olish",
    to: "telegram-premium-eng-oson-usul",
    merged: "2026-09-08",
    reason:
      "Ikkalasida ham tarif jadvali, username/login oqimi va xarid qadamlari takrorlanardi; qoladigan sahifada tashrif signali kuchliroq.",
  },
  {
    from: "bir-oylik-premium-olish",
    to: "ozbekistonda-oylik-premium-uza-humo",
    merged: "2026-09-08",
    reason:
      "Bitta ehtiyoj — bir oylik Premium. Odam kirayotgan URL saqlandi, matn esa to‘liq qayta yozildi (login oqimi, 1 oy = 50 000 so‘m).",
  },
  {
    from: "telegram-premium-sovga-qilish",
    to: "telegram-premium-sovga-username-orqali",
    merged: "2026-09-08",
    reason:
      "Sovg‘a xaridining umumiy qadamlari takrorlanardi; muqobil usullar qoladigan maqolada alohida bo‘lim qilindi.",
  },
  {
    from: "click-payme-telegram-stars-2026",
    to: "click-payme-orqali-telegram-stars-sotib-olish",
    merged: "2026-09-08",
    reason:
      "Bir mavzu — Click/Payme orqali Stars. Qoladigan maqola batafsilroq, uch tilda va vazifasi aniqroq.",
  },
];

/** Yo‘naltirilgan (endi ko‘rsatilmaydigan) slug’lar — tez tekshirish uchun. */
export const redirectedBlogSlugs: ReadonlySet<string> = new Set(
  blogRedirects.map((r) => r.from),
);

/** Slug birlashtirilganmi? Ro‘yxat va sitemap filtrlarida ishlatiladi. */
export function isRedirectedBlogSlug(slug: string): boolean {
  return redirectedBlogSlugs.has(slug);
}
