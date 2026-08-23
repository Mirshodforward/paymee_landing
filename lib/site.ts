/**
 * Yakuniy sayt manzili (envsiz, loyiha konfiguratsiyasi). Trailing slash qo‘shilmaydi.
 *
 * MUHIM: bu qiymat saytga xizmat qilayotgan host bilan aynan bir xil bo‘lishi shart.
 * Vercel apex domenni (starstg.uz) www‘ga yo‘naltiradi, shuning uchun kanonik host — www.
 * Nomuvofiqlik sitemapdagi har bir manzilni redirect‘ga aylantiradi va Google ularni
 * «Page with redirect» deb indeksdan chiqaradi.
 */
export const SITE_URL_PUBLIC = "https://www.starstg.uz";

/** Telegram bot / Mini App havolasi. */
export const TELEGRAM_BOT_URL_PUBLIC = "https://t.me/StarsPaymee_bot";

/** Qo‘llab-quvvatlash (support) Telegram havolasi. */
export const TELEGRAM_SUPPORT_URL_PUBLIC = "https://t.me/StarsPaymeeSupport";

export function getSiteUrl(): string {
  return SITE_URL_PUBLIC.replace(/\/$/, "");
}

export function getTelegramBotUrl(): string {
  return TELEGRAM_BOT_URL_PUBLIC.replace(/\/$/, "");
}

export function getTelegramSupportUrl(): string {
  return TELEGRAM_SUPPORT_URL_PUBLIC.replace(/\/$/, "");
}

export const siteConfig = {
  name: "StarsPaymee",
  titleDefault: "StarsPaymee",
  description: "Telegram Stars platformasi",
  locale: "uz_UZ",
} as const;

/**
 * Qidiruv tizimlari uchun tasdiqlash (verification) kodlari.
 * Har bir panel «HTML tag» usulini bersa, faqat `content="..."` qiymatini qo‘ying.
 * Bo‘sh qoldirilgan qiymat uchun hech qanday meta-teg chiqmaydi.
 *
 * - google:  Search Console → Settings → Ownership verification → HTML tag
 * - bing:    Bing Webmaster Tools → HTML Meta Tag (msvalidate.01)
 * - yandex:  Yandex Webmaster → Meta tag (yandex-verification)
 */
export const SITE_VERIFICATION = {
  google: "",
  bing: "",
  yandex: "",
} as const;
