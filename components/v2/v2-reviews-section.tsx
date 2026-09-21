import { StarIcon } from "@/components/v2/icons";
import { ReviewForm, type ReviewFormLabels } from "@/components/v2/review-form";
import type { Review, ReviewsData } from "@/lib/reviews";

type Labels = {
  /** Tayyor formatlangan: «4,8 / 5 · 57 ta baho». */
  ratingLine: string;
  verified: string;
  empty: string;
};

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  data: ReviewsData;
  locale: string;
  labels: Labels;
  form: ReviewFormLabels;
};

/** Avatar fonlari — ism bo'yicha barqaror tanlanadi, tasodifiy emas. */
const ACCENTS = [
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #0ea5e9, #22d3ee)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #10b981, #84cc16)",
  "linear-gradient(135deg, #6366f1, #0ea5e9)",
  "linear-gradient(135deg, #f43f5e, #f59e0b)",
];

function accentFor(name: string): string {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return ACCENTS[h % ACCENTS.length];
}

function Stars({ n, small }: { n: number; small?: boolean }) {
  return (
    <span className={`rev-stars${small ? " sm" : ""}`} aria-label={`${n}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= n ? "on" : undefined}>
          ★
        </span>
      ))}
    </span>
  );
}

function Card({ r, verified, dup }: { r: Review; verified: string; dup?: boolean }) {
  return (
    <figure className="rev-card" aria-hidden={dup || undefined}>
      <div className="rev-head">
        <span className="rev-ava" style={{ background: accentFor(r.name) }}>
          {r.name.slice(0, 1).toUpperCase()}
        </span>
        <div className="rev-who">
          <b>{r.name}</b>
          <small>
            {r.verified ? <span className="rev-verified">✓ {verified}</span> : null}
            <time dateTime={r.date}>{r.date}</time>
          </small>
        </div>
        <Stars n={r.rating} small />
      </div>
      <blockquote className="rev-text">{r.text}</blockquote>
    </figure>
  );
}

/**
 * Mijoz sharhlari — bot backend'idan jonli (`lib/reviews.ts`).
 *
 * 8+ sharh: ikki qator qarama-qarshi lenta; 4–7: bitta lenta; 1–3: oddiy
 * to'r; 0: «birinchi bo'ling» matni. Forma har doim turadi. Lenta ichida
 * ro'yxat ikki marta chiqadi va aynan yarmiga (-50%) suriladi — uzluksiz
 * aylanish uchun; nusxa `aria-hidden`.
 */
export function V2ReviewsSection({ kicker, title, subtitle, data, locale, labels, form }: Props) {
  const { rating, reviews } = data;
  const rounded = Math.round(rating.value);

  let rows: Review[][];
  if (reviews.length >= 8) {
    const half = Math.ceil(reviews.length / 2);
    rows = [reviews.slice(0, half), reviews.slice(half)];
  } else if (reviews.length >= 4) {
    rows = [reviews];
  } else {
    rows = [];
  }

  return (
    <section className="sec rev-sec" id="izohlar">
      <div className="wrap">
        <div className="sec-head center rv">
          <div className="kicker">
            {kicker}
            <StarIcon />
          </div>
          <h2 className="h2">{title}</h2>
          <p className="sec-sub">{subtitle}</p>
          {rating.count > 0 ? (
            <div className="rev-summary">
              <Stars n={rounded} />
              <span>{labels.ratingLine}</span>
            </div>
          ) : null}
        </div>
      </div>

      {rows.length ? (
        <div className="rev-rows">
          {rows.map((row, ri) => (
            <div className={`rev-row${ri === 1 ? " rev-row-rev" : ""}`} key={ri}>
              <div className="rev-track">
                {row.map((r) => (
                  <Card key={r.id} r={r} verified={labels.verified} />
                ))}
                {row.map((r) => (
                  <Card key={`${r.id}-dup`} r={r} verified={labels.verified} dup />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : reviews.length ? (
        <div className="wrap">
          <div className="rev-grid rv">
            {reviews.map((r) => (
              <Card key={r.id} r={r} verified={labels.verified} />
            ))}
          </div>
        </div>
      ) : (
        <div className="wrap">
          <p className="rev-empty rv">{labels.empty}</p>
        </div>
      )}

      <div className="wrap">
        <div className="rev-form-wrap rv">
          <ReviewForm labels={form} locale={locale} />
        </div>
      </div>
    </section>
  );
}
