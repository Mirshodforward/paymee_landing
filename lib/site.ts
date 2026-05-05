/** Yakuniy sayt manzili (envsiz, loyiha konfiguratsiyasi). Trailing slash qo‘shilmaydi. */
export const SITE_URL_PUBLIC = "https://starstg.uz";

/** Telegram bot / Mini App havolasi. */
export const TELEGRAM_BOT_URL_PUBLIC = "https://t.me/StarsPaymee_bot";

export function getSiteUrl(): string {
  return SITE_URL_PUBLIC.replace(/\/$/, "");
}

export function getTelegramBotUrl(): string {
  return TELEGRAM_BOT_URL_PUBLIC.replace(/\/$/, "");
}

export const siteConfig = {
  name: "StarsPaymee",
  titleDefault: "StarsPaymee — Telegram Stars, Premium va Giftlar | Mini App",
  description:
    "StarsPaymee — Telegram ichida ishlaydigan Mini App: Telegram Stars sotib olish, Telegram Premium obunasi (3/6/12 oy), Telegram Gift yuborish va eski yoki cheklangan muddatli giftlarni yulduzlarga yo‘naltirish. To‘lov: UzCard va HUMO (so‘m).",
  locale: "uz_UZ",
} as const;
