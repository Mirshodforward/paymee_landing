import {
  catalogByTier,
  formatUzsShort,
  virtualNumberCatalog,
  type VirtualNumberCountry,
} from "@/lib/telegram-virtual-numbers";

type Locale = "uz" | "ru";

function Row({ c, locale }: { c: VirtualNumberCountry; locale: Locale }) {
  const name = locale === "ru" ? c.nameRu : c.nameUz;
  const stockLabel =
    locale === "ru" ? `${c.stock.toLocaleString("ru-RU")} в наличии` : `${c.stock.toLocaleString("uz-UZ")} ta mavjud`;

  return (
    <div className="tn-row">
      <div className="tn-code" aria-hidden>
        {c.code}
      </div>
      <div className="tn-meta">
        <div className="tn-name">{name}</div>
        <div className="tn-stock">{stockLabel}</div>
      </div>
      <div className="tn-price">{formatUzsShort(c.priceUzs)}</div>
    </div>
  );
}

/** Blog maqolalarida botdagi virtual raqam katalogiga o‘xshash narx jadvali. */
export function TelegramNumberPriceBoard({
  locale = "uz",
  variant = "full",
}: {
  locale?: Locale;
  variant?: "full" | "budget" | "premium";
}) {
  const title =
    locale === "ru"
      ? variant === "budget"
        ? "Бюджетные страны (от ~6 600 сум)"
        : variant === "premium"
          ? "Премиум-страны (до ~56 300 сум)"
          : "Примеры цен по странам"
      : variant === "budget"
        ? "Arzon davlatlar (taxminan 6 600 so‘mdan)"
        : variant === "premium"
          ? "Qimmat davlatlar (taxminan 56 300 so‘mgacha)"
          : "Davlatlar bo‘yicha namunaviy narxlar";

  const items =
    variant === "budget"
      ? catalogByTier("budget")
      : variant === "premium"
        ? catalogByTier("premium")
        : virtualNumberCatalog;

  const note =
    locale === "ru"
      ? "Цены и остатки меняются в реальном времени — актуальный каталог в @StarsPaymee_bot → раздел номеров."
      : "Narx va zaxira real vaqtda o‘zgaradi — joriy katalog @StarsPaymee_bot → raqamlar bo‘limida.";

  return (
    <div className="tn-board" role="region" aria-label={title}>
      <div className="tn-board-head">
        <span className="tn-board-title">{title}</span>
        <span className="tn-board-pill">{locale === "ru" ? "UZS" : "so‘m"}</span>
      </div>
      <div className="tn-list">
        {items.map((c) => (
          <Row key={c.code} c={c} locale={locale} />
        ))}
      </div>
      <p className="tn-note">{note}</p>
    </div>
  );
}
