import {
  boostMarketDemoChannel,
  boostMarketLimits,
  boostPricePackages,
  formatBoostUzs,
} from "@/lib/telegram-boost-market";

/** Blogda Boost narx jadvali. */
export function BoostMarketPriceBoard({ locale = "uz" }: { locale?: "uz" | "ru" }) {
  const head =
    locale === "ru"
      ? "Примерные пакеты (сум) — актуально в боте"
      : "Namunaviy paketlar (so‘m) — joriy narx botda";
  const cols =
    locale === "ru"
      ? ["Бусты", "Дней", "Цена"]
      : ["Boost", "Kun", "Narx"];
  const note =
    locale === "ru"
      ? "Точная сумма при оформлении в @StarsPaymee_bot → Boost Market."
      : "Aniq summa @StarsPaymee_bot → Kanal Boost arenda bo‘limida hisoblanadi.";

  return (
    <div className="boost-blog-board" role="region" aria-label={head}>
      <div className="boost-blog-head">{head}</div>
      <div className="boost-blog-row boost-blog-cols">
        {cols.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      {boostPricePackages.map((p) => (
        <div key={`${p.boosts}-${p.days}`} className="boost-blog-row">
          <span>{p.boosts}</span>
          <span>{p.days}</span>
          <span className="boost-blog-price">{formatBoostUzs(p.totalUzs)}</span>
        </div>
      ))}
      <p className="tn-note">{note}</p>
    </div>
  );
}

export function BoostMarketFactsUz() {
  return (
    <ul style={{ margin: "1em 0", paddingLeft: "1.2em", color: "var(--muted)", lineHeight: 1.65 }}>
      <li>
        Mavjud zaxira: <strong>{boostMarketLimits.availableNow}</strong> ta boost
      </li>
      <li>
        Muddat: <strong>{boostMarketLimits.minDays}</strong>–{boostMarketLimits.maxDays} kun
      </li>
      <li>
        Boost soni: 1–{boostMarketLimits.maxBoosts} (slider)
      </li>
      <li>
        Kanal: link yoki @username (masalan {boostMarketDemoChannel.link})
      </li>
    </ul>
  );
}
