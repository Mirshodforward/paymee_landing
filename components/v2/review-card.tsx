import type { Review } from "@/lib/reviews";

/** «300 Stars», «Premium · 6 oy» — karta ustidagi tasdiqlangan xarid belgisi. */
export function productLabel(p: Review["product"], locale: string): string | null {
  if (!p) return null;
  const t = p.type.toLowerCase();
  const mo = locale === "ru" ? "мес" : locale === "en" ? "mo" : "oy";
  if (t.startsWith("stars")) return p.amount ? `${p.amount.toLocaleString("en-US").replace(/,/g, " ")} Stars` : "Stars";
  if (t.startsWith("premium")) return p.amount ? `Premium · ${p.amount} ${mo}` : "Premium";
  if (t.startsWith("boost")) return "Boost";
  if (t.includes("gift")) return locale === "ru" ? "Подарок" : locale === "en" ? "Gift" : "Sovg‘a";
  return null;
}

/** Avatar fonlari — ism bo'yicha barqaror tanlanadi, tasodifiy emas. */
const ACCENTS = [
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #0ea5e9, #22d3ee)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #10b981, #84cc16)",
  "linear-gradient(135deg, #6366f1, #0ea5e9)",
  "linear-gradient(135deg, #f43f5e, #f59e0b)",
];

export function accentFor(name: string): string {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return ACCENTS[h % ACCENTS.length];
}

export function Stars({ n, small }: { n: number; small?: boolean }) {
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

/**
 * Bitta sharh kartasi — lentada ham, ro'yxatda ham bir xil.
 * Server va klient komponentlari ikkalasi ishlatadi (holatsiz).
 */
export function ReviewCard({
  r,
  verified,
  locale,
  dup,
  style,
}: {
  r: Review;
  verified: string;
  locale: string;
  dup?: boolean;
  style?: React.CSSProperties;
}) {
  const bought = productLabel(r.product, locale);
  return (
    <figure className="rev-card" aria-hidden={dup || undefined} style={style}>
      <div className="rev-head">
        <span className="rev-ava" style={{ background: accentFor(r.name) }}>
          {r.name.slice(0, 1).toUpperCase()}
        </span>
        <div className="rev-who">
          <b>{r.name}</b>
          <small>
            {r.verified ? (
              <span className="rev-verified">
                ✓ {bought ? `${bought} · ` : ""}
                {verified}
              </span>
            ) : null}
            <time dateTime={r.date}>{r.date}</time>
          </small>
        </div>
        <Stars n={r.rating} small />
      </div>
      <blockquote className="rev-text">{r.text}</blockquote>
    </figure>
  );
}
