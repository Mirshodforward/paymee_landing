"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * `/instagram` dagi raqamlar — ANIQ va JONLI (egasining so'rovi, 2026-09-27).
 *
 * Server sahifani aniq son bilan chizadi (yaxlitlanmaydi, «+» yo'q), keyin
 * brauzer botning ochiq API'sidan (`/api/public/stats`, CORS www.starstg.uz ga
 * ochiq) sahifa ochilganda va har 30 soniyada yangisini oladi. Son o'zgarsa —
 * eskisidan yangisiga sanab o'tadi va bir lahza yonadi.
 *
 * QANCHALIK JONLI: bot javobni o'zi 10 daqiqa keshlaydi (`PUBLIC_STATS_TTL_MS`,
 * server.js). Ya'ni bu yerda so'rov 30 soniyada ketsa ham, yangi son ko'pi bilan
 * 10 daqiqada ko'rinadi. Tezroq kerak bo'lsa — bot keshini qisqartirish kerak.
 *
 * Xato bo'lsa (tarmoq, CORS — masalan localhost'da) server chizgan son qoladi.
 * Yashirin varaqda so'rov yuborilmaydi.
 */

export type LiveStatId = "stars" | "orders" | "users" | "years";
export type LiveStatTile = { id: LiveStatId; value: number; label: string };

/** API maydoni va aql bovar qiladigan yuqori chegara (lib/live-stats.ts bilan bir xil). */
const FIELDS: Record<Exclude<LiveStatId, "years">, { key: string; max: number }> = {
  stars: { key: "starsDelivered", max: 100_000_000_000 },
  orders: { key: "ordersCompleted", max: 1_000_000_000 },
  users: { key: "users", max: 1_000_000_000 },
};

const POLL_MS = 30_000;
const COUNT_MS = 900;

/** `formatStatNumber` (lib/live-stats.ts) bilan aynan bir xil — server va brauzer matni mos kelsin. */
function fmt(value: number, locale: string): string {
  const text = value.toLocaleString("en-US").replace(/,/g, " ");
  return locale !== "en" ? text.replace(".", ",") : text;
}

/** Yangi son kelganda eskisidan unga sanab o'tadi; harakat o'chirilgan bo'lsa — darhol. */
function useCountUp(target: number): number {
  const [shown, setShown] = useState(target);
  const shownRef = useRef(target);

  useEffect(() => {
    const start = shownRef.current;
    if (start === target) return;
    // Harakat o'chirilgan bo'lsa — birinchi kadrdayoq yangi son
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : COUNT_MS;
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const k = duration ? Math.min(1, (now - t0) / duration) : 1;
      const eased = 1 - (1 - k) ** 3;
      const v = Math.round(start + (target - start) * eased);
      shownRef.current = v;
      setShown(v);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return shown;
}

function Stat({ value, label, locale }: { value: number; label: string; locale: string }) {
  const shown = useCountUp(value);
  // Son o'zgarganini render paytida aniqlaymiz (effect'da emas) — bir lahza yonadi
  const [prev, setPrev] = useState(value);
  const [bump, setBump] = useState(false);
  if (value !== prev) {
    setPrev(value);
    setBump(true);
  }

  return (
    <div className="ig-stat">
      <b className={bump ? "is-bump" : undefined} onAnimationEnd={() => setBump(false)}>
        {fmt(shown, locale)}
      </b>
      <span>{label}</span>
    </div>
  );
}

export function LiveStats({
  tiles,
  locale,
  apiBase,
  ariaLabel,
  className,
  style,
}: {
  tiles: LiveStatTile[];
  locale: string;
  apiBase: string;
  ariaLabel: string;
  className?: string;
  style?: CSSProperties;
}) {
  const [values, setValues] = useState<Partial<Record<LiveStatId, number>>>(() =>
    Object.fromEntries(tiles.map((t) => [t.id, t.value])),
  );

  useEffect(() => {
    let alive = true;
    const pull = async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const res = await fetch(`${apiBase}/api/public/stats`, {
          cache: "no-store",
          headers: { accept: "application/json" },
        });
        if (!res.ok) return;
        const raw = (await res.json()) as Record<string, unknown>;
        if (!alive) return;
        setValues((prev) => {
          const next = { ...prev };
          for (const id of Object.keys(FIELDS) as (keyof typeof FIELDS)[]) {
            if (!(id in prev)) continue;
            const n = Number(raw[FIELDS[id].key]);
            if (Number.isFinite(n) && n > 0 && n < FIELDS[id].max) next[id] = Math.floor(n);
          }
          return next;
        });
      } catch {
        // Tarmoq yoki CORS xatosi — server chizgan son qoladi.
      }
    };

    pull();
    const timer = window.setInterval(pull, POLL_MS);
    document.addEventListener("visibilitychange", pull);
    return () => {
      alive = false;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", pull);
    };
  }, [apiBase]);

  return (
    <section className={className} style={style} aria-label={ariaLabel}>
      {tiles.map((t) => (
        <Stat key={t.id} value={values[t.id] ?? t.value} label={t.label} locale={locale} />
      ))}
    </section>
  );
}
