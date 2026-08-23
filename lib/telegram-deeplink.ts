/**
 * Telegram Mini App deep-link'lari — qaysi bo'limdan kelganini bot biladi.
 *
 * MUAMMO: sayt barcha CTA'larni `https://t.me/StarsPaymee_bot` ga yuborardi.
 * Bot foydalanuvchi qayerdan kelganini bilmasdi, mahsulot ham oldindan
 * tanlanmasdi — odam botda qaytadan bo'lim qidirishi kerak edi. Vercel
 * Analytics esa faqat chiqib ketilganini ko'radi, konversiyani emas.
 *
 * YECHIM: bot frontend'idagi mavjud `startapp` payload formatidan
 * foydalanamiz (`starspaymeebot/frontend/src/utils/startParam.js`):
 *
 *     <mahsulot>-<qabul qiluvchi>-<referral>
 *       s100-doston-ab12cd34    → 100 stars, @doston uchun
 *       p3-0-0                  → Premium 3 oy
 *       gtort-doston-0          → «tort» sovg'asi
 *       ref-0-0                 → shunchaki bot havolasi
 *     Bo'sh qism «0» bilan belgilanadi.
 *
 * Biz TO'RTINCHI qismni qo'shamiz — manba:
 *
 *     s100-0-0-w_stars_hero
 *
 * ORQAGA MOSLIK: botdagi parser `const [a, b, c] = parts` bilan faqat
 * dastlabki uchtasini oladi, ortiqchasini e'tiborsiz qoldiradi. Ya'ni bu
 * havolalar bot hozirgi holatida ham to'g'ri ishlaydi — mahsulot ochiladi,
 * manba esa bot yangilangach yozila boshlaydi. Saytni oldin deploy qilish
 * xavfsiz.
 *
 * Telegram `start_param` uchun faqat `A-Za-z0-9_-` ruxsat etiladi va uzunligi
 * 64 belgidan oshmasligi kerak — shuning uchun manba yorlig'ida ajratgich
 * sifatida pastki chiziq ishlatiladi.
 */

import { getTelegramBotUrl } from "@/lib/site";

/** Mini App qisqa nomi — bot backend'idagi TELEGRAM_MINI_APP_REFERRAL_BASE bilan bir xil. */
const MINI_APP_SHORT_NAME = "starspaymee";

/** Payloadda bo'sh qismni belgilash uchun. */
const EMPTY = "0";

/** Telegram `start_param` uzunlik chegarasi. */
const MAX_PAYLOAD_LENGTH = 64;

export type DeepLinkProduct =
  | { kind: "stars"; amount: number }
  | { kind: "premium"; months: number }
  | { kind: "gift"; slug: string }
  | { kind: "open" };

/** Sayt bo'limlari — manba yorlig'ining birinchi qismi. */
export type DeepLinkPage =
  | "home"
  | "stars"
  | "premium"
  | "gifts"
  | "gampay"
  | "business"
  | "about"
  | "blog";

/** CTA sahifaning qayerida turgani — manba yorlig'ining ikkinchi qismi. */
export type DeepLinkPlacement =
  | "nav"
  | "hero"
  | "price"
  | "cta"
  | "footer"
  | "article"
  | "card"
  | "sticky";

export type DeepLinkOptions = {
  page: DeepLinkPage;
  placement: DeepLinkPlacement;
  product?: DeepLinkProduct;
  /** Sovg'a/Stars qabul qiluvchi @username (prefiksiz). */
  recipient?: string;
};

/** Telegram ruxsat bergan belgilardan tashqarisini olib tashlaydi. */
function sanitize(value: string): string {
  return value.replace(/[^A-Za-z0-9_]/g, "").slice(0, 24);
}

function encodeProduct(product: DeepLinkProduct | undefined): string {
  if (!product) return "ref";
  switch (product.kind) {
    case "stars":
      return Number.isFinite(product.amount) && product.amount > 0
        ? `s${Math.floor(product.amount)}`
        : "ref";
    case "premium":
      return Number.isFinite(product.months) && product.months > 0
        ? `p${Math.floor(product.months)}`
        : "ref";
    case "gift":
      return product.slug ? `g${sanitize(product.slug)}` : "ref";
    case "open":
    default:
      return "ref";
  }
}

/**
 * Manba yorlig'i: `w_<sahifa>_<joylashuv>`.
 * `w` — «web», ya'ni bu tashrif marketing saytidan kelgan. Bot ichidagi
 * havolalar va reklama kampaniyalari boshqa prefiks ishlatishi mumkin.
 */
export function deepLinkSource(page: DeepLinkPage, placement: DeepLinkPlacement): string {
  return `w_${page}_${placement}`;
}

/** `startapp` payloadini yig'adi. */
export function buildStartPayload(options: DeepLinkOptions): string {
  const product = encodeProduct(options.product);
  const recipient = options.recipient ? sanitize(options.recipient.replace(/^@/, "")) : "";
  const source = deepLinkSource(options.page, options.placement);

  const payload = [product, recipient || EMPTY, EMPTY, source].join("-");

  // Chegaradan oshsa — manbani yo'qotgandan ko'ra mahsulotni saqlash muhimroq,
  // chunki mahsulot foydalanuvchi ko'radigan natijaga ta'sir qiladi.
  if (payload.length <= MAX_PAYLOAD_LENGTH) return payload;
  const shorter = [product, recipient || EMPTY, EMPTY, `w_${options.page}`].join("-");
  return shorter.length <= MAX_PAYLOAD_LENGTH ? shorter : [product, EMPTY, EMPTY].join("-");
}

/**
 * Mini App deep-link'i.
 *
 * Nega `t.me/<bot>` emas, `t.me/<bot>/<app>`: birinchisi shunchaki chat
 * ochadi va odam bo'limni qaytadan qidiradi; ikkinchisi kerakli ekranni
 * to'ldirilgan holda ochadi. Har ikkalasi ham `start_param` ni uzatadi.
 */
export function botDeepLink(options: DeepLinkOptions): string {
  const base = getTelegramBotUrl();
  const payload = buildStartPayload(options);
  return `${base}/${MINI_APP_SHORT_NAME}?startapp=${encodeURIComponent(payload)}`;
}
