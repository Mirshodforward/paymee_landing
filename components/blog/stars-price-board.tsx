import { STARS_PACKS, STARS_PER_UNIT_UZS, formatUzs } from "@/lib/products";

type Loc = "uz" | "ru" | "en";

const COPY: Record<Loc, { head: string; cols: [string, string]; note: string }> = {
  uz: {
    head: "Stars paketlari va narxlari (so‘m)",
    cols: ["Yulduz", "Narx"],
    note: `1 dona Stars — ${STARS_PER_UNIT_UZS} so‘m. Aniq summa @StarsPaymee_bot da buyurtma paytida ko‘rsatiladi.`,
  },
  ru: {
    head: "Пакеты Stars и цены (сум)",
    cols: ["Звёзды", "Цена"],
    note: `1 Stars — ${STARS_PER_UNIT_UZS} сум. Точная сумма показывается при оформлении в @StarsPaymee_bot.`,
  },
  en: {
    head: "Stars packages and prices (UZS)",
    cols: ["Stars", "Price"],
    note: `1 Stars — ${STARS_PER_UNIT_UZS} UZS. The exact total is shown when ordering in @StarsPaymee_bot.`,
  },
};

/**
 * Blog maqolalarida Stars narx jadvali. Raqamlar `lib/products.ts` dan
 * o‘qiladi — sayt narxi o‘zgarsa maqolalar ham avtomatik yangilanadi.
 */
export function StarsPriceBoard({ locale = "uz" }: { locale?: Loc }) {
  const t = COPY[locale] ?? COPY.uz;

  return (
    <div className="boost-blog-board cols-2" role="region" aria-label={t.head}>
      <div className="boost-blog-head">{t.head}</div>
      <div className="boost-blog-row boost-blog-cols">
        <span>{t.cols[0]}</span>
        <span className="boost-blog-price">{t.cols[1]}</span>
      </div>
      {STARS_PACKS.map((p) => (
        <div key={p.amount} className="boost-blog-row">
          <span>
            {p.amount} ⭐{p.popular ? <em className="pack-hot"> ★</em> : null}
          </span>
          <span className="boost-blog-price">{formatUzs(p.priceUzs, locale)}</span>
        </div>
      ))}
      <p className="tn-note">{t.note}</p>
    </div>
  );
}
