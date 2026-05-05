/** Base URL — productionda `.env.local` ichida NEXT_PUBLIC_SITE_URL ni o‘rnating */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url?.trim()) return url.replace(/\/$/, "");
  return "http://localhost:3000";
}

/**
 * Telegram bot yoki Mini App ochiladigan havola.
 * Masalan: https://t.me/sizning_bot
 */
export function getTelegramBotUrl(): string {
  const u = process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL?.trim();
  if (u) return u.replace(/\/$/, "");
  return "https://t.me/StarsPaymee_bot";
}

export const siteConfig = {
  name: "StarsPaymee",
  titleDefault: "StarsPaymee — Telegram Stars, Premium va Giftlar | Mini App",
  description:
    "StarsPaymee — Telegram ichida ishlaydigan Mini App: Telegram Stars sotib olish, Telegram Premium obunasi (3/6/12 oy), Telegram Gift yuborish va eski yoki cheklangan muddatli giftlarni yulduzlarga yo‘naltirish. To‘lov: UzCard va HUMO (so‘m).",
  locale: "uz_UZ",
} as const;
