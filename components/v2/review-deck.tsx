"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { accentFor, cleanName, initialOf, productLabel, Stars } from "@/components/v2/review-card";
import type { Review } from "@/lib/reviews";

const CYCLE_MS = 3600;
const VISIBLE = 4;

/**
 * 3D koloda: kartalar bir-birining orqasida, perspektivada. Oldingi karta
 * to'liq, orqadagilarning faqat sarlavhasi ko'rinadi. Har 4 soniyada oldingi
 * karta orqaga o'tadi; hover/fokusda to'xtaydi; orqadagi kartani bossangiz —
 * oldinga chiqadi. `prefers-reduced-motion` da avtomatik aylanish yo'q.
 */
export function ReviewDeck({
  reviews,
  verified,
  locale,
}: {
  reviews: Review[];
  verified: string;
  locale: string;
}) {
  const n = reviews.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (n < 2 || paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % n), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [n, paused]);

  if (!n) return null;

  return (
    <div className="rev-deck-wrap">
      <div
        className="rev-deck"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="rev-deck-inner">
          {reviews.map((r, i) => {
            const depth = (i - active + n) % n; // 0 — oldinda
            const hidden = depth >= VISIBLE;
            const name = cleanName(r.name, locale);
            const bought = productLabel(r.product, locale);
            return (
              <button
                type="button"
                key={r.id}
                className={`rev-deck-card${depth === 0 ? " front" : ""}`}
                style={{ "--depth": depth } as CSSProperties}
                aria-hidden={hidden || undefined}
                tabIndex={depth === 0 ? 0 : -1}
                onClick={() => setActive(i)}
              >
                <div className="rev-deck-head">
                  <span className="rev-deck-ava" style={{ background: accentFor(name) }}>
                    {initialOf(name)}
                  </span>
                  <span className="rev-deck-title">
                    <b>{name}</b>
                    <Stars n={r.rating} small />
                  </span>
                </div>
                <p className="rev-deck-text">{r.text}</p>
                <div className="rev-deck-foot">
                  <span className="rev-deck-dot" />
                  {r.verified ? `${bought ? `${bought} · ` : ""}${verified}` : r.date}
                  {r.verified ? <time dateTime={r.date}> · {r.date}</time> : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {n > 1 ? (
        <div className="rev-deck-dots" role="tablist" aria-label="reviews">
          {reviews.map((r, i) => (
            <button
              type="button"
              key={r.id}
              role="tab"
              aria-selected={i === active}
              aria-label={`${i + 1}/${n}`}
              className={`rev-deck-dotbtn${i === active ? " on" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
