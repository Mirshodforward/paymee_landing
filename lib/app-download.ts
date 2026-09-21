/**
 * Android ilovasining yuklab olish manbasi.
 *
 * MUHIM: `URL` — serverdagi simvolik havola (starspaymee.apk →
 * starspaymee-<versiya>.apk). Yangi versiya chiqqanda serverda faqat havola
 * ko'chiriladi, bu yerdagi manzil o'zgarmaydi — shuning uchun landing qayta
 * deploy qilinmaydi. Faqat `VERSION` va `SIZE_MB` yangilanadi.
 */
export const ANDROID_APK = {
  url: "https://starspaymee.starstg.uz/dl/starspaymee.apk",
  version: "1.0.1",
  /** Fayl hajmi — Content-Length: 61 040 052 bayt. */
  sizeMb: 58,
} as const;
