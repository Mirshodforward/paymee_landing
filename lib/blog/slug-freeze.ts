import { allBlogSlugInfos } from "@/lib/blog/all";
import { blogRedirects, redirectedBlogSlugs } from "@/lib/blog/redirects";

/**
 * URL MUZLATISH — 2026-09-21 dan 60 kun.
 *
 * NIMA UCHUN: 8–21 sentyabrda ~120 ta blog URL o'zgardi (birlashtirish,
 * o'chirish, 404). Google indeksi eskirib, sayt har kelganda boshqa manzara
 * ko'rsatdi — bu reytingning tushish sabablaridan biri. Endi Google barqaror
 * manzara ko'rishi kerak: `FREEZE_UNTIL` gacha birorta mavjud maqola
 * o'chirilmaydi, slug'i o'zgartirilmaydi va yangi birlashtirish qilinmaydi.
 *
 * QANDAY ISHLAYDI: `app/sitemap.ts` build vaqtida `assertBlogSlugFreeze()`
 * ni chaqiradi. Ro'yxatdagi slug yo'qolsa (redirect ham qo'yilmagan) yoki
 * redirect soni o'zgarsa — build yiqiladi, deploy bo'lmaydi.
 *
 * RUXSAT ETILGAN: mavjud maqola matnini tahrirlash, yangi maqola qo'shish.
 * Yangi maqola ro'yxatga qo'shilishi shart emas (faqat yo'qolish tekshiriladi).
 *
 * MUDDATDAN KEYIN yoki ongli qaror bilan o'zgartirish kerak bo'lsa:
 * `FROZEN_REDIRECT_COUNT` ni yangi songa o'zgartiring va o'chirilgan slug'ni
 * `lib/blog/redirects.ts` ga yozing — 404 emas, 308.
 */
export const FREEZE_UNTIL = "2026-11-20";

/** Bugungi holat: 104 ta redirect. Yangi birlashtirish = ongli ravishda shu sonni oshirish. */
export const FROZEN_REDIRECT_COUNT = 104;

/** 2026-09-21 dagi barcha jonli blog slug'lari (101). */
export const FROZEN_BLOG_SLUGS: readonly string[] = [
  "asphalt-9-token-sotib-olish",
  "bigo-live-olmos-sotib-olish",
  "botga-tolov-api-ulash-qollanma",
  "call-of-duty-mobile-cp-sotib-olish",
  "click-payme-orqali-telegram-stars-sotib-olish",
  "delta-force-coins-sotib-olish",
  "eng-arzon-telegram-api-xizmati-ozbekiston",
  "eng-qimmat-telegram-sovgalari-reytingi",
  "farzandingiz-stars-sorasa-ota-onalar",
  "free-fire-olmos-sotib-olish",
  "honor-of-kings-token-sotib-olish",
  "ishonchli-stars-xizmatini-tanlash",
  "kolleksion-gift-bot-orqali-olinmaydi",
  "magic-chess-gogo-olmos-sotib-olish",
  "mobile-legends-olmos-sotib-olish",
  "naqd-pul-bilan-telegram-stars-sotib-olish",
  "nega-telegram-hammasini-stars-ga-otkazmoqda",
  "onlayn-tolovda-karta-xavfsizligi",
  "oyin-hisobini-toldirish",
  "ozbekistonda-oylik-premium-uza-humo",
  "ozbekistonda-telegram-stars-sotib-olish",
  "payme-orqali-stars-va-premium-sotib-olish",
  "premium-bor-odamga-premium-sovga",
  "pubg-mobile-uc-sotib-olish",
  "sbp-tolov-tizimi-qanday-ishlaydi",
  "starspaymee-ishonchli-xavfsizmi",
  "starspaymee-nft-market",
  "steam-balansi-tushmadi",
  "steam-hisobini-himoya-qilish-10-maslahat",
  "steam-login-nima",
  "steam-wallet-nima",
  "steam-wallet-xavfsizmi",
  "taymer-bilan-sovga-yuborish",
  "telegram-akkaunt-sotib-olish",
  "telegram-akkauntni-ogirlashdan-himoya-2fa",
  "telegram-biznes-akkaunt-ochish",
  "telegram-boost-narxlari",
  "telegram-botga-stars-tolovini-ulash",
  "telegram-business-nima",
  "telegram-emoji-status-ornatish",
  "telegram-gift-havolasini-tekshirish",
  "telegram-gift-price",
  "telegram-gift-sotilmayapti",
  "telegram-gift-sotish",
  "telegram-gift-stars-ga-aylantirish",
  "telegram-gift-yuborilmayapti",
  "telegram-gifts-api-avtomatik-sovga",
  "telegram-gifts-kolleksiya-rare-sovgalar",
  "telegram-gifts-narxlari-royxati",
  "telegram-gifts-qanday-yuboriladi-qollanma",
  "telegram-kanal-boost-nima",
  "telegram-kanal-reytingi",
  "telegram-kanal-rivojlantirish",
  "telegram-kanal-stars-monetizatsiya",
  "telegram-kanalga-boost-sotib-olish",
  "telegram-nft-gift-nima",
  "telegram-nft-investitsiya",
  "telegram-nft-sovga-ijarasi",
  "telegram-premium-arziydimi-foydalari",
  "telegram-premium-avtomatik-tarjima",
  "telegram-premium-avtotolovni-ochirish",
  "telegram-premium-bepul-olish-haqiqat",
  "telegram-premium-bir-nechta-akkaunt",
  "telegram-premium-eng-oson-usul",
  "telegram-premium-kerak",
  "telegram-premium-kompyuterdan-sotib-olish",
  "telegram-premium-muddati-yangilash-2026",
  "telegram-premium-narxi",
  "telegram-premium-narxi-ozbekistonda-2026",
  "telegram-premium-sovga-qilishdi-nima-qilish",
  "telegram-premium-sovga-username-orqali",
  "telegram-premium-tugasa-nima-boladi",
  "telegram-premium-yashirin-funksiyalari",
  "telegram-pulli-xabarlar-paid-messages",
  "telegram-raqam-sotib-olish",
  "telegram-reseller-dasturi-qanday-boshlash",
  "telegram-sms-kod-kelmayotganda",
  "telegram-sovga-va-nft-sovga-sotib-olish",
  "telegram-sovgani-profilga-qoyish",
  "telegram-stars-api-nima-ulanish",
  "telegram-stars-api-webhook-integratsiya",
  "telegram-stars-app-store-narx-farqi",
  "telegram-stars-balans-qanday-korish-2026",
  "telegram-stars-bepul-olish-mumkinmi",
  "telegram-stars-daromad-qilish-mumkinmi",
  "telegram-stars-eng-kam-nechta",
  "telegram-stars-eng-yaxshi-botlar-2026",
  "telegram-stars-kartasiz-sotib-olish",
  "telegram-stars-kelmadi-nima-qilish",
  "telegram-stars-narxi",
  "telegram-stars-nima-uchun-ishlatiladi-usullar",
  "telegram-stars-qanday-ishlaydi",
  "telegram-stars-sotib-olishda-xatolar",
  "telegram-stars-xavfsizmi",
  "telegram-username-sotib-olish",
  "telegram-xabar-yuborish-stars",
  "telegram-yulduz-kerak",
  "telegramda-4gb-fayl-yuborish",
  "telegramda-reklamani-ochirish",
  "telegramga-kirishda-premium-sms-tolov",
  "yulduz-olish",
];

export type FreezeViolation = { kind: "missing" | "redirect-count"; detail: string };

/** Sof tekshiruv — test va build ikkalasi shu funksiyani ishlatadi. */
export function findFreezeViolations(
  frozen: readonly string[],
  present: ReadonlySet<string>,
  redirected: ReadonlySet<string>,
  redirectCount: number,
  today: string = new Date().toISOString().slice(0, 10),
): FreezeViolation[] {
  const out: FreezeViolation[] = [];
  for (const slug of frozen) {
    if (!present.has(slug) && !redirected.has(slug)) {
      out.push({ kind: "missing", detail: `"${slug}" yo'qolgan — na maqola, na redirect` });
    }
  }
  if (today < FREEZE_UNTIL && redirectCount !== FROZEN_REDIRECT_COUNT) {
    out.push({
      kind: "redirect-count",
      detail: `redirect soni ${redirectCount}, muzlatilgan ${FROZEN_REDIRECT_COUNT} (muddat: ${FREEZE_UNTIL})`,
    });
  }
  return out;
}

/** Build vaqtida chaqiriladi (`app/sitemap.ts`). Buzilish bo'lsa — throw. */
export function assertBlogSlugFreeze(): void {
  const present = new Set(allBlogSlugInfos().map((p) => p.slug));
  const violations = findFreezeViolations(FROZEN_BLOG_SLUGS, present, redirectedBlogSlugs, blogRedirects.length);
  if (violations.length) {
    const lines = violations.map((v) => `  - [${v.kind}] ${v.detail}`).join("\n");
    throw new Error(
      `BLOG URL MUZLATISH BUZILDI (${FREEZE_UNTIL} gacha):\n${lines}\n` +
        `Qarang: lib/blog/slug-freeze.ts — o'chirish o'rniga redirects.ts ga 308 qo'shing.`,
    );
  }
}
