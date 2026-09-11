import { STATS } from "@/lib/products";

/**
 * Landingdagi statistika raqamlarini bot backend'idan olish.
 *
 * NIMA UCHUN: raqamlar `lib/products.ts` dagi `STATS` da qo'lda yozilgan edi.
 * Ular bir marta kiritilib, keyin haqiqatdan ajralib qolardi — sayt «4000
 * foydalanuvchi» deb turardi, bazada esa boshqa son bo'lishi mumkin.
 *
 * QANDAY ISHLAYDI: sahifa server tomonida render qilinganda bu funksiya
 * `/api/public/stats` ni o'qiydi. Natija Next keshida `REVALIDATE_SECONDS`
 * davomida turadi, ya'ni har bir tashrif backendga so'rov yubormaydi.
 *
 * ZAXIRA: backend yetib bormasa, javob buzuq bo'lsa yoki raqam mantiqsiz
 * bo'lsa — `STATS` dagi qiymat ishlatiladi. Ya'ni API o'chib qolsa ham
 * landing eski raqam bilan ishlashda davom etadi, bo'sh joy chiqmaydi.
 */

export type LandingStats = {
  yearsInService: number;
  deliverySeconds: number;
  activeUsers: number;
  orders: number;
  /** Qaysi maydonlar haqiqiy backend'dan kelgani — diagnostika uchun. */
  live: {
    yearsInService: boolean;
    deliverySeconds: boolean;
    activeUsers: boolean;
    orders: boolean;
  };
  /** Backend raqamlarni qachon yangilagani (ISO). Zaxirada `null`. */
  updatedAt: string | null;
};

/** Bot backend'ining bazasi. Deploy paytida o'zgarishi mumkin. */
const API_BASE = (process.env.STATS_API_URL || "https://starspaymee.starstg.uz").replace(/\/+$/, "");

/** Next keshi: 15 daqiqa. Backend o'zi ham 10 daqiqa keshlaydi. */
const REVALIDATE_SECONDS = 900;

/** Backend sekinlashsa, build yoki sahifa render'i muddatsiz kutib turmasin. */
const TIMEOUT_MS = 4000;

type RawStats = {
  ok?: boolean;
  users?: unknown;
  ordersCompleted?: unknown;
  starsDelivered?: unknown;
  avgDeliverySeconds?: unknown;
  yearsInService?: unknown;
  since?: unknown;
  updatedAt?: unknown;
};

/**
 * Raqamni qabul qilish shartlari: butun, musbat va mantiqiy chegarada.
 *
 * `max` chegarasi ataylab bor: baza qayta tiklanayotganda yoki so'rov
 * kutilmagan natija bergan paytda landingda bema'ni raqam chiqmasligi kerak.
 * Shart bajarilmasa — zaxira qiymat ishlatiladi.
 */
function acceptNumber(value: unknown, max: number): number | null {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return null;
  const rounded = Math.floor(n);
  if (rounded <= 0 || rounded > max) return null;
  return rounded;
}

export async function getLandingStats(): Promise<LandingStats> {
  const fallback: LandingStats = {
    yearsInService: STATS.yearsInService,
    deliverySeconds: STATS.deliverySeconds,
    activeUsers: STATS.activeUsers,
    orders: STATS.orders,
    live: { yearsInService: false, deliverySeconds: false, activeUsers: false, orders: false },
    updatedAt: null,
  };

  let raw: RawStats | null = null;
  try {
    const res = await fetch(`${API_BASE}/api/public/stats`, {
      // Next keshi — har bir tashrifda emas, 15 daqiqada bir marta o'qiladi.
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return fallback;
    raw = (await res.json()) as RawStats;
  } catch {
    // Tarmoq xatosi, timeout yoki buzuq JSON — jim zaxiraga tushamiz.
    // Bu yo'l build paytida ham ishlaydi: API o'chiq bo'lsa build buzilmaydi.
    return fallback;
  }

  if (!raw || raw.ok === false) return fallback;

  // Chegaralar: hozirgi qiymatdan ancha yuqori, lekin cheksiz emas.
  const users = acceptNumber(raw.users, 100_000_000);
  const orders = acceptNumber(raw.ordersCompleted, 1_000_000_000);
  const seconds = acceptNumber(raw.avgDeliverySeconds, 3600);
  const years = acceptNumber(raw.yearsInService, 50);

  return {
    yearsInService: years ?? fallback.yearsInService,
    deliverySeconds: seconds ?? fallback.deliverySeconds,
    activeUsers: users ?? fallback.activeUsers,
    orders: orders ?? fallback.orders,
    live: {
      yearsInService: years !== null,
      deliverySeconds: seconds !== null,
      activeUsers: users !== null,
      orders: orders !== null,
    },
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null,
  };
}

/**
 * Raqamni landing uslubida formatlash: 100000 → «100 000».
 *
 * `v2-effects.tsx` dagi hisoblagich ham xuddi shu formatdan foydalanadi —
 * shuning uchun JS yuklanmaganda ham, yuklangandan keyin ham bir xil
 * ko'rinadi va raqam «sakramaydi».
 */
export function formatStatNumber(value: number): string {
  return value.toLocaleString("en-US").replace(/,/g, " ");
}
