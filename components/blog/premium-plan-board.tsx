import { PREMIUM_LOGIN_PLANS, PREMIUM_PLANS, formatUzs } from "@/lib/products";

type Loc = "uz" | "ru" | "en";
type Flow = "username" | "login";

const COPY: Record<Loc, {
  headUsername: string;
  headLogin: string;
  cols: [string, string];
  month: (n: number) => string;
  noteUsername: string;
  noteLogin: string;
}> = {
  uz: {
    headUsername: "Premium — username orqali (kirish shart emas)",
    headLogin: "Premium — akkauntga kirib berish orqali",
    cols: ["Muddat", "Narx"],
    month: (n) => `${n} oy`,
    noteUsername: "Faqat username yetarli, parol so‘ralmaydi. Joriy narx @StarsPaymee_bot da.",
    noteLogin: "Rasmiy faollashtirish uchun alohida xizmat — 1 oylik variant shu oqimda mavjud.",
  },
  ru: {
    headUsername: "Premium — по username (без входа в аккаунт)",
    headLogin: "Premium — со входом в аккаунт",
    cols: ["Срок", "Цена"],
    month: (n) => `${n} мес.`,
    noteUsername: "Достаточно username, пароль не запрашивается. Актуальная цена — в @StarsPaymee_bot.",
    noteLogin: "Отдельная услуга с официальной активацией — вариант на 1 месяц доступен здесь.",
  },
  en: {
    headUsername: "Premium — by username (no account login)",
    headLogin: "Premium — with account login",
    cols: ["Term", "Price"],
    month: (n) => `${n} mo`,
    noteUsername: "Only a username is needed; no password is requested. Current price in @StarsPaymee_bot.",
    noteLogin: "A separate service with official activation — the 1-month option lives in this flow.",
  },
};

/**
 * Premium tariflari jadvali. `flow="username"` — 3/6/12 oy, akkauntga kirmasdan;
 * `flow="login"` — 1/12 oy, rasmiy faollashtirish. Narxlar `lib/products.ts` dan.
 */
export function PremiumPlanBoard({
  locale = "uz",
  flow = "username",
}: {
  locale?: Loc;
  flow?: Flow;
}) {
  const t = COPY[locale] ?? COPY.uz;
  const isLogin = flow === "login";
  const plans = isLogin ? PREMIUM_LOGIN_PLANS : PREMIUM_PLANS;
  const head = isLogin ? t.headLogin : t.headUsername;
  const note = isLogin ? t.noteLogin : t.noteUsername;

  return (
    <div className="boost-blog-board cols-2" role="region" aria-label={head}>
      <div className="boost-blog-head">{head}</div>
      <div className="boost-blog-row boost-blog-cols">
        <span>{t.cols[0]}</span>
        <span className="boost-blog-price">{t.cols[1]}</span>
      </div>
      {plans.map((p) => (
        <div key={p.months} className="boost-blog-row">
          <span>
            {t.month(p.months)}
            {"popular" in p && p.popular ? <em className="pack-hot"> ★</em> : null}
          </span>
          <span className="boost-blog-price">{formatUzs(p.priceUzs, locale)}</span>
        </div>
      ))}
      <p className="tn-note">{note}</p>
    </div>
  );
}
