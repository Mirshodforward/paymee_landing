"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ReviewCard } from "@/components/v2/review-card";
import type { Review } from "@/lib/reviews";

export type ReviewsListLabels = { all: string; hide: string; more: string };

const PAGE = 10;

/**
 * «Barcha sharhlar (N)» — lentadan tashqari to'liq ro'yxat, ochilganda
 * elementlar ketma-ket jonlanib chiqadi (CSS `rev-pop`, `--d` kechikish).
 * 10 tadan, «Yana ko'rsatish» bilan.
 */
export function ReviewsList({
  reviews,
  labels,
  verified,
  locale,
}: {
  reviews: Review[];
  labels: ReviewsListLabels;
  verified: string;
  locale: string;
}) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(PAGE);

  // `/uz#sharhlar` — ro'yxat ochiq holda ochiladi (botdagi «sharhlarni ko'ring» havolasi uchun).
  useEffect(() => {
    // Sinxron setState emas — hydration'dan keyin va hash o'zgarganda.
    const openFromHash = () => {
      // `#sharhlar` (skroll bilan) yoki `?sharhlar=1` (skrollsiz) — ikkalasi ham ochadi.
      if (window.location.hash === "#sharhlar" || new URLSearchParams(window.location.search).has("sharhlar")) setOpen(true);
    };
    const id = window.setTimeout(openFromHash, 0);
    window.addEventListener("hashchange", openFromHash);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("hashchange", openFromHash);
    };
  }, []);
  if (!reviews.length) return null;

  const visible = open ? reviews.slice(0, shown) : [];

  return (
    <div className="rev-listwrap" id="sharhlar">
      <button
        type="button"
        className={`btn btn-ghost mag rev-toggle${open ? " open" : ""}`}
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v);
          setShown(PAGE);
        }}
      >
        {open ? labels.hide : `${labels.all} (${reviews.length})`}
        <span className="rev-chev" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div className="rev-list" role="list">
          {visible.map((r, i) => (
            <div role="listitem" key={r.id} className="rev-list-item" style={{ "--d": `${(i % PAGE) * 0.05}s` } as CSSProperties}>
              <ReviewCard r={r} verified={verified} locale={locale} />
            </div>
          ))}
          {shown < reviews.length ? (
            <button type="button" className="btn btn-ghost mag rev-more" onClick={() => setShown((n) => n + PAGE)}>
              {labels.more} ({reviews.length - shown})
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
