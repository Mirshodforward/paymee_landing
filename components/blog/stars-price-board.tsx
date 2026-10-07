import type { CSSProperties } from "react";
import {
  STARS_PACKS,
  STARS_PER_UNIT_GATEWAY_UZS,
  STARS_PER_UNIT_UZS,
  formatUzs,
  type StarsPack,
} from "@/lib/products";

type Loc = "uz" | "ru" | "en";
/** Qaysi narx ustuni birinchi turadi: karta o‘tkazmasi yoki onlayn to‘lov. */
type Method = "card" | "gateway";

/** Onlayn to‘lov ustuni — tugma nomlari, uchala tilda bir xil. */
const GATEWAY_COL = "Click · Payme · Uzum · Paynet";

const COPY: Record<Loc, { head: string; stars: string; card: string; note: string }> = {
  uz: {
    head: "Stars narxlari — to‘lov usuli bo‘yicha (so‘m)",
    stars: "Yulduz",
    card: "Karta o‘tkazmasi",
    note: `Karta o‘tkazmasi — botdagi Uzcard/Humo kartaga istalgan ilovadan yoki balansdan: ${STARS_PER_UNIT_UZS} so‘m/dona. Click, Payme, Uzum, Paynet — botdagi onlayn to‘lov: ${STARS_PER_UNIT_GATEWAY_UZS} so‘m/dona. Yakuniy summa @StarsPaymee_bot da to‘lovdan oldin ko‘rsatiladi.`,
  },
  ru: {
    head: "Цены Stars по способу оплаты (сум)",
    stars: "Звёзды",
    card: "Перевод на карту",
    note: `Перевод на карту — на карту Uzcard/Humo, которую показывает бот, из любого приложения или оплата с баланса: ${STARS_PER_UNIT_UZS} сум за штуку. Click, Payme, Uzum, Paynet — онлайн-оплата в боте: ${STARS_PER_UNIT_GATEWAY_UZS} сум за штуку. Итоговая сумма показывается в @StarsPaymee_bot до оплаты.`,
  },
  en: {
    head: "Stars prices by payment method (UZS)",
    stars: "Stars",
    card: "Card transfer",
    note: `Card transfer — to the bot’s Uzcard/Humo card from any app, or from your balance: ${STARS_PER_UNIT_UZS} UZS per star. Click, Payme, Uzum, Paynet — online payment in the bot: ${STARS_PER_UNIT_GATEWAY_UZS} UZS per star. The final total is shown in @StarsPaymee_bot before you pay.`,
  },
};

/*
 * Uch ustun: yulduz | birinchi usul | ikkinchi usul. `cols-2` sinfi narx
 * ustunlarini o‘ngga tekislaydi va mobil uslubda ham saqlaydi; ustunlar
 * soni shu yerda beriladi (globals.css da faqat 2 ustunli variant bor).
 * Har bir qator alohida grid — shuning uchun ustunlar `auto` emas, ulushda:
 * aks holda qatorlar orasida ustunlar siljiydi. 390px ekranda ham sig‘adi.
 */
const ROW: CSSProperties = {
  gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, 1fr)",
  columnGap: 8,
};
const PRICE: CSSProperties = { whiteSpace: "nowrap", fontSize: "clamp(11px, 3.2vw, 13px)" };
/** Sarlavha — «Yulduz» bilan bir xil uslubda, faqat o‘ngga tekislangan. */
const HEAD_PRICE: CSSProperties = { textAlign: "right" };

/**
 * Blog maqolalarida Stars narx jadvali: har bir paket uchun IKKI narx —
 * karta o‘tkazmasi (`STARS_PER_UNIT_UZS`) va Click, Payme, Uzum, Paynet
 * orqali onlayn to‘lov (`STARS_PER_UNIT_GATEWAY_UZS`). Raqamlar
 * `lib/products.ts` dan o‘qiladi — tarif o‘zgarsa maqolalar ham avtomatik
 * yangilanadi. Click/Payme haqidagi maqola `first="gateway"` beradi.
 */
export function StarsPriceBoard({ locale = "uz", first = "card" }: { locale?: Loc; first?: Method }) {
  const t = COPY[locale] ?? COPY.uz;
  const order: Method[] = first === "gateway" ? ["gateway", "card"] : ["card", "gateway"];
  const label = (m: Method) => (m === "gateway" ? GATEWAY_COL : t.card);
  const price = (p: StarsPack, m: Method) => (m === "gateway" ? p.gatewayPriceUzs : p.priceUzs);

  return (
    <div className="boost-blog-board cols-2" role="region" aria-label={t.head}>
      <div className="boost-blog-head">{t.head}</div>
      <div className="boost-blog-row boost-blog-cols" style={ROW}>
        <span>{t.stars}</span>
        {order.map((m) => (
          <span key={m} style={HEAD_PRICE}>
            {label(m)}
          </span>
        ))}
      </div>
      {STARS_PACKS.map((p) => (
        <div key={p.amount} className="boost-blog-row" style={ROW}>
          <span>
            {p.amount} ⭐{p.popular ? <em className="pack-hot"> ★</em> : null}
          </span>
          {order.map((m) => (
            <span key={m} className="boost-blog-price" style={PRICE}>
              {formatUzs(price(p, m), locale)}
            </span>
          ))}
        </div>
      ))}
      <p className="tn-note">{t.note}</p>
    </div>
  );
}
