import { StarIcon } from "@/components/v2/icons";
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
  stats: ReviewStatsLabels;
};

/** Lentada ko'rsatiladigan eng ko'p sharh (har biri nusxa bilan ikki marta chiziladi). */
const MARQUEE_MAX = 16;

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  data: ReviewsData;
  locale: string;
  labels: Labels;
  form: ReviewFormLabels;
  /** `wall` — barcha sharhlar qiya varaqlar devori (bosh sahifa); `marquee` — lenta + ro'yxat. */
  variant?: "marquee" | "wall" | "deck";
};

/**
 * Mijoz sharhlari — bot backend'idan jonli (`lib/reviews.ts`).
 *
 * `deck` (bosh sahifa): sarlavha ostida markazda keng reyting paneli;
 * pastda chapda 3D koloda (oxirgi 24 sharh, o'ngga qiya, avtomatik aylanadi),
 * o'ngda sharh formasi; so'ng «Barcha sharhlar (N)» ro'yxati.
 * `wall`: barcha sharhlar qiya varaqlar devori — hover'da
 * varaq to'g'rilanadi, ko'tariladi, matn to'liq ochiladi (CSS).
 * `marquee`: sarlavha + o'rtacha baho → lenta (8+: ikki qator qarama-qarshi,
 * 4–7: bitta, 1–3: to'r) → «Barcha sharhlar (N)» ro'yxati (klient) →
 * forma. 0 sharh: «birinchi bo'ling» + forma.
 * Lentada ro'yxat ikki marta chiqadi va aynan yarmiga (-50%) suriladi;
 * nusxa `aria-hidden`.
 */
export function V2ReviewsSection({ kicker, title, subtitle, data, locale, labels, form, variant = "marquee" }: Props) {
  const { rating, reviews } = data;
  const rounded = Math.round(rating.value);

  // Lentada hamma sharh emas — HTML og'irlashmasligi uchun eng yangi MARQUEE_MAX.
  // Qolganlari «Barcha sharhlar» ro'yxatida (u faqat bosilganda chiziladi).
  const marquee = reviews.slice(0, MARQUEE_MAX);
  let rows: Review[][];
  if (marquee.length >= 8) {
    const half = Math.ceil(marquee.length / 2);
    rows = [marquee.slice(0, half), marquee.slice(half)];
  } else if (marquee.length >= 4) {
    rows = [marquee];
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
          <div className="rev-stats-wrap">
            <ReviewStats data={data} locale={locale} labels={labels.stats} wide />
          </div>
          <div className="rev-layout">
            <div className="rv rev-layout-deck">
              <ReviewDeck reviews={reviews.slice(0, 24)} verified={labels.verified} locale={locale} />
            </div>
            <div className="rv rev-layout-side">
              <ReviewForm labels={form} locale={locale} />
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
      ) : marquee.length ? (
        <div className="wrap">
          <div className="rev-grid rv">
            {marquee.map((r, i) => (
              <ReviewCard key={r.id} r={r} verified={labels.verified} locale={locale} style={{ "--d": `${i * 0.08}s` } as React.CSSProperties} />
            ))}
          </div>
        </div>
      ) : rating.count > 0 ? (
        // Shu tilda matnli sharh yo'q (masalan /en), lekin baholar bor —
        // «birinchi bo'ling» yolg'on bo'lardi, shuning uchun reyting paneli.
        <div className="wrap">
          <div className="rev-stats-wrap">
            <ReviewStats data={data} locale={locale} labels={labels.stats} wide />
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

        {variant !== "deck" || !reviews.length ? (
          <div className="rev-form-wrap rv">
            <ReviewForm labels={form} locale={locale} />
          </div>
        ) : null}

      </div>
    </section>
  );
}
