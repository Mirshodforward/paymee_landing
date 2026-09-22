import { cleanName, initialOf } from "@/lib/review-name";
import type { Review } from "@/lib/reviews";

export { cleanName, initialOf };

/**
 * «300 Stars», «Premium · 6 oy», «Virtual raqam» — karta ustidagi tasdiqlangan
 * xarid belgisi. Bot `orders.order_type` qiymatlari: stars, stars_usdt,
 * stars_paymee, premium, premium_usdt, gift, nft_buy, nft_market, gift_rent,
 * boost, tg_number, steam_topup, game_topup, giftcard.
 */
export function productLabel(p: Review["product"], locale: string): string | null {
  if (!p) return null;
  const t = p.type.toLowerCase();
  const L = (uz: string, ru: string, en: string) => (locale === "ru" ? ru : locale === "en" ? en : uz);
  const num = (n: number) => n.toLocaleString("en-US").replace(/,/g, " ");
  const mo = L("oy", "мес", "mo");
  if (t.startsWith("stars")) return p.amount ? `${num(p.amount)} Stars` : "Stars";
  if (t.startsWith("premium")) return p.amount ? `Premium · ${p.amount} ${mo}` : "Premium";
  if (t.startsWith("boost")) return p.amount ? `Boost · ${num(p.amount)}` : "Boost";
  if (t === "gift_rent") return L("NFT ijara", "Аренда NFT", "NFT rental");
  if (t.startsWith("nft")) return L("NFT sovg‘a", "NFT-подарок", "NFT gift");
  if (t.includes("gift") && t !== "giftcard") return L("Sovg‘a", "Подарок", "Gift");
  if (t === "giftcard") return "Gift Card";
  if (t === "tg_number") return L("Virtual raqam", "Виртуальный номер", "Virtual number");
  if (t.startsWith("steam")) return L("Steam hamyon", "Кошелёк Steam", "Steam wallet");
  if (t.startsWith("game")) return L("O‘yin to‘ldirish", "Пополнение игры", "Game top-up");
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
  const name = cleanName(r.name, locale);
  return (
    <figure className="rev-card" aria-hidden={dup || undefined} style={style}>
      <div className="rev-head">
        <span className="rev-ava" style={{ background: accentFor(name) }}>
          {initialOf(name)}
        </span>
        <div className="rev-who">
          <b>{name}</b>
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
