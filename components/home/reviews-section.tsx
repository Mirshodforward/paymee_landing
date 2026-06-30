import type { CSSProperties } from "react";
import { REVIEWS, RATING, hasReviews, hasRating } from "@/lib/reviews";

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <span className="rv-stars" aria-label={`${value} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "on" : "off"} aria-hidden>
          ★
        </span>
      ))}
    </span>
  );
}

/**
 * Bosh sahifa sharhlar bo'limi. REVIEWS bo'sh bo'lsa — hech narsa ko'rsatmaydi
 * (real ma'lumot qo'shilgach avtomatik paydo bo'ladi). Yolg'on kontent yo'q.
 */
export function ReviewsSection({
  badge,
  title,
  ratingSuffix,
}: {
  badge: string;
  title: string;
  /** Reyting yonidagi matn, masalan "sharh asosida". */
  ratingSuffix: string;
}) {
  if (!hasReviews()) return null;

  return (
    <section className="sec" id="sharhlar">
      <div className="wrap">
        <div className="sec-head center rv">
          <div className="kicker">{badge}</div>
          <h2 className="h2">{title}</h2>
          {hasRating() && RATING ? (
            <p className="sec-sub" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <Stars value={RATING.ratingValue} />
              <b style={{ color: "var(--text)" }}>{RATING.ratingValue.toFixed(1)}</b>
              <span>
                / {RATING.bestRating ?? 5} · {RATING.reviewCount.toLocaleString()} {ratingSuffix}
              </span>
            </p>
          ) : null}
        </div>

        <div className="reviews rv">
          {REVIEWS.map((r, i) => (
            <figure className="review-card" key={i} style={{ "--d": `${Math.min(i, 6) * 0.05}s` } as CSSProperties}>
              <Stars value={r.rating} />
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="rv-author">{r.author}</span>
                {r.source ? <span className="rv-src"> · {r.source}</span> : null}
                {r.date ? (
                  <time dateTime={r.date} className="rv-date">
                    {" "}
                    · {r.date}
                  </time>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
