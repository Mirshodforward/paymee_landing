import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",
  localePrefix: "always",
  /** Birinchi ochilishda har doim `/uz`; brauzer tiliga qarab avtomatik yo‘naltirish yo‘q */
  localeDetection: false,
});
