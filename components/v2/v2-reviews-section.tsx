import { StarIcon, ArrowIcon } from "@/components/v2/icons";
import { ReviewForm, type ReviewFormLabels } from "@/components/v2/review-form";
import { ReviewCard, Stars } from "@/components/v2/review-card";
import { ReviewsList, type ReviewsListLabels } from "@/components/v2/reviews-list";
import { ReviewDeck } from "@/components/v2/review-deck";
import { ReviewStats, type ReviewStatsLabels } from "@/components/v2/review-stats";
import type { Review, ReviewsData } from "@/lib/reviews";

type Labels = {
  /** Tayyor formatlangan: «4,8 / 5 · 57 ta baho». */
  ratingLine: string;
  verified: string;
  empty: string;
  list: ReviewsListLabels;
  botCta: string;
  botSub: string;
  stats: ReviewStatsLabels;
};

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  data: ReviewsData;
  locale: string;
  labels: Labels;
  form: ReviewFormLabels;
  botUrl: string;
  /** `wall` — barcha sharhlar qiya varaqlar devori (bosh sahifa); `marquee` — lenta + ro'yxat. */
  variant?: "marquee" | "wall" | "deck";
};

/**
 * Mijoz sharhlari — bot backend'idan jonli (`lib/reviews.ts`).
 *
 * `deck` (bosh sahifa): 3D koloda — oxirgi 24 sharh, avtomatik aylanadi;
 * ostida «Barcha sharhlar (N)» ro'yxati.
 * `wall`: barcha sharhlar qiya varaqlar devori — hover'da
 * varaq to'g'rilanadi, ko'tariladi, matn to'liq ochiladi (CSS).
 * `marquee`: sarlavha + o'rtacha baho → lenta (8+: ikki qator qarama-qarshi,
 * 4–7: bitta, 1–3: to'r) → «Barcha sharhlar (N)» ro'yxati (klient) →
 * forma → «Botga o'tish» CTA. 0 sharh: «birinchi bo'ling» + forma + CTA.
 * Lentada ro'yxat ikki marta chiqadi va aynan yarmiga (-50%) suriladi;
 * nusxa `aria-hidden`.
 */
export function V2ReviewsSection({ kicker, title, subtitle, data, locale, labels, form, botUrl, variant = "marquee" }: Props) {
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
          {rating.count > 0 && variant !== "deck" ? (
            <div className="rev-summary">
              <Stars n={rounded} />
              <span>{labels.ratingLine}</span>
            </div>
          ) : null}
        </div>
      </div>

      {variant === "deck" && reviews.length ? (
        <div className="wrap">
          <div className="rev-layout">
            <ReviewStats data={data} locale={locale} labels={labels.stats} />
            <div className="rv">
              <ReviewDeck reviews={reviews.slice(0, 24)} verified={labels.verified} locale={locale} />
            </div>
          </div>
        </div>
      ) : variant === "wall" && reviews.length ? (
        <div className="wrap">
          <div className="rev-wall rv">
            {reviews.map((r, i) => (
              <div
                className="rev-tile"
                key={r.id}
                style={{ "--rot": `${(((i * 7) % 5) - 2) * 1.5}deg`, "--d": `${Math.min(i, 14) * 0.04}s` } as React.CSSProperties}
              >
                <ReviewCard r={r} verified={labels.verified} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      ) : rows.length ? (
        <div className="rev-rows rv">
          {rows.map((row, ri) => (
            <div className={`rev-row${ri === 1 ? " rev-row-rev" : ""}`} key={ri}>
              <div className="rev-track">
                {row.map((r) => (
                  <ReviewCard key={r.id} r={r} verified={labels.verified} locale={locale} />
                ))}
                {row.map((r) => (
                  <ReviewCard key={`${r.id}-dup`} r={r} verified={labels.verified} locale={locale} dup />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : reviews.length ? (
        <div className="wrap">
          <div className="rev-grid rv">
            {reviews.map((r, i) => (
              <ReviewCard key={r.id} r={r} verified={labels.verified} locale={locale} style={{ "--d": `${i * 0.08}s` } as React.CSSProperties} />
            ))}
          </div>
        </div>
      ) : (
        <div className="wrap">
          <p className="rev-empty rv">{labels.empty}</p>
        </div>
      )}

      <div className="wrap">
        {variant !== "wall" ? (
          <div className="rv" style={{ textAlign: "center" }}>
            <ReviewsList reviews={reviews} labels={labels.list} verified={labels.verified} locale={locale} />
          </div>
        ) : null}

        <div className="rev-form-wrap rv">
          <ReviewForm labels={form} locale={locale} />
        </div>

        <div className="rev-cta rv">
          <p>{labels.botSub}</p>
          <a className="btn btn-grad mag" href={botUrl} target="_blank" rel="noopener noreferrer">
            {labels.botCta}
            <ArrowIcon style={{ stroke: "#fff" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
