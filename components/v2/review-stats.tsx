import { Stars } from "@/components/v2/review-card";
import { ratingRows, type ReviewsData } from "@/lib/reviews";

export type ReviewStatsLabels = {
  /** «268 ta baho» */
  count: string;
  /** «tasdiqlangan xarid» */
  verified: string;
  /** «Botdagi buyurtmalardan» */
  source: string;
};

/**
 * Play Market uslubidagi reyting paneli: katta o'rtacha, yulduzlar, soni,
 * 5→1 taqsimot chiziqlari (ko'rinishga kelganda o'sadi — `.rv.in`),
 * tasdiqlangan xaridlar ulushi.
 */
export function ReviewStats({ data, locale, labels }: { data: ReviewsData; locale: string; labels: ReviewStatsLabels }) {
  const { rating, reviews } = data;
  const value = rating.value.toFixed(1);
  const shown = locale === "en" ? value : value.replace(".", ",");
  const rows = ratingRows(data);
  // Backend taqsimot bermasa (eski versiya) — chiziqlar matnli sharhlardan taxminiy;
  // shunda son emas, foiz ko'rsatiladi, aks holda jami bilan mos kelmaydi.
  const exact = Boolean(rating.distribution);
  const verifiedPct = reviews.length ? Math.round((reviews.filter((r) => r.verified).length / reviews.length) * 100) : 0;

  return (
    <div className="rev-stats rv">
      <div className="rev-stats-top">
        <div className="rev-stats-num">{shown}</div>
        <div className="rev-stats-meta">
          <Stars n={Math.round(rating.value)} />
          <span>{labels.count}</span>
        </div>
      </div>
      <ul className="rev-bars" aria-label={labels.count}>
        {rows.map((r) => (
          <li key={r.star} className="rev-bar">
            <span className="rev-bar-star">{r.star}</span>
            <span className="rev-bar-track">
              <span className="rev-bar-fill" style={{ "--w": `${r.pct}%` } as React.CSSProperties} />
            </span>
            <span className="rev-bar-n">{exact ? r.count : `${r.pct}%`}</span>
          </li>
        ))}
      </ul>
      <div className="rev-stats-foot">
        <span className="rev-verified">✓ {verifiedPct}% {labels.verified}</span>
        <span>{labels.source}</span>
      </div>
    </div>
  );
}
