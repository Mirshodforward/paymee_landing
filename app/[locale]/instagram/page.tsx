import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Headset, ShieldCheck, Wallet, Zap } from "lucide-react";
import { V2Background } from "@/components/v2/v2-background";
import { TelegramIcon } from "@/components/v2/icons";
import { InstagramIcon, YoutubeIcon } from "@/components/insta/insta-icons";
import { formatStatNumber, getLandingStats } from "@/lib/live-stats";
import { STATS } from "@/lib/products";
import { getReviews, hasRating } from "@/lib/reviews";
import { SOCIAL_LINKS, getSiteUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import { botDeepLink, type DeepLinkPlacement } from "@/lib/telegram-deeplink";

/**
 * `/instagram` — Instagram reklamasi uchun bitta sahifali landing.
 *
 * NEGA ALOHIDA SAHIFA VA NEGA BUNDAY YENGIL:
 *   - Reklamadan kelgan odam Instagram ichidagi brauzerda, telefonda ochadi va
 *     bir necha soniyada qaror qiladi. Shuning uchun `V2Shell` ISHLATILMAGAN:
 *     undagi foiz hisoblagichli preloader kontentni kechiktiradi, `V2Effects`
 *     esa ortiqcha JS. Bu sahifada mijoz JS'i YO'Q — hamma animatsiya CSS.
 *   - Navigatsiya yo'q: reklama sahifasida chiqish yo'llari kam bo'lgani yaxshi,
 *     yagona maqsad — botni ochish.
 *   - `noindex`: bosh sahifa matnini takrorlaydi; qidiruvda u bilan
 *     raqobatlashmasin. Sitemap'ga ham qo'shilmagan.
 *
 * RAQAMLAR FAQAT JONLI. Stars soni, buyurtma va foydalanuvchi — bot
 * backend'idan; javob bo'lmasa o'sha plitka umuman chiqmaydi (zaxiradagi
 * `STATS.orders = 100 000` ni bu yerda ATAYLAB ishlatmaymiz — baza uni
 * tasdiqlamaydi). Sonlar pastga yaxlitlanadi: 8 372 → «8 000+».
 *
 * KUZATUV: har bir tugmada `data-cta` bor, `TelegramClickTracker` uni
 * «bot_open» hodisasiga yozadi. Deep-link manbasi — `w_instagram_<joy>`.
 */

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insta" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const url = `${getSiteUrl()}/${locale}/instagram`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/${locale}/instagram` },
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ",
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Botdagi haqiqiy bo'limlar — tartib va ikonkalar ilova ekranidagidek. */
const PRODUCTS = [
  { key: "pStars", img: "stars" },
  { key: "pPremium", img: "premium" },
  { key: "pGift", img: "gift" },
  { key: "pNumber", img: "number" },
  { key: "pScheduled", img: "scheduled" },
  { key: "pRent", img: "rent" },
  { key: "pUsername", img: "username" },
  { key: "pBoost", img: "boost" },
  { key: "pNft", img: "nft" },
] as const;

/** Telefon atrofida suzib yuradigan ikonkalar (joy — CSS klassida). */
const ORBIT = ["stars", "premium", "gift", "nft", "boost", "rent"] as const;

/** Pastga yaxlitlash: haqiqiy sondan oshirib ko'rsatmaslik uchun. */
function floorNice(n: number): number {
  if (n >= 1_000) return Math.floor(n / 1_000) * 1_000;
  return n;
}

/**
 * Plitkadagi raqam. Million — ixcham («1 mln+»): Syne shrifti juda keng,
 * «1 000 000+» telefonda plitkaga sig'masdi (390px da 177px matn, 142px joy).
 * Doim PASTGA yaxlitlanadi: 1 042 717 → «1 mln+», hech qachon oshirilmaydi.
 */
function statText(n: number, locale: string): string {
  if (n >= 1_000_000) {
    const millions = Math.floor(n / 100_000) / 10;
    const unit = locale === "ru" ? "млн" : locale === "en" ? "M" : "mln";
    const num = formatStatNumber(millions, locale);
    return locale === "en" ? `${num}${unit}+` : `${num} ${unit}+`;
  }
  return `${formatStatNumber(floorNice(n), locale)}+`;
}

export default async function InstagramPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, stats, reviews] = await Promise.all([
    getTranslations({ locale, namespace: "insta" }),
    getLandingStats(),
    getReviews(locale),
  ]);

  const link = (placement: DeepLinkPlacement) => botDeepLink({ page: "instagram", placement });
  const supportUrl = getTelegramSupportUrl();

  const ratingValue = reviews.rating.value;
  const ratingCount = reviews.rating.count;
  const showRating = hasRating(reviews.rating);
  const ratingText = t("rating", {
    value: locale === "en" ? ratingValue.toFixed(1) : ratingValue.toFixed(1).replace(".", ","),
    count: ratingCount,
  });

  // Faqat backend'dan kelgan raqamlar — zaxira son hech qachon ko'rinmaydi.
  const tiles: { value: string; label: string }[] = [];
  if (stats.starsDelivered) {
    tiles.push({ value: statText(stats.starsDelivered, locale), label: t("statStars") });
  }
  if (stats.live.orders) {
    tiles.push({ value: statText(stats.orders, locale), label: t("statOrders") });
  }
  if (stats.live.activeUsers) {
    tiles.push({ value: statText(stats.activeUsers, locale), label: t("statUsers") });
  }
  tiles.push({ value: formatStatNumber(STATS.yearsInService, locale), label: t("statYears") });

  const why = [
    { Icon: Zap, title: t("w1"), body: t("w1D") },
    { Icon: Wallet, title: t("w2"), body: t("w2D") },
    { Icon: ShieldCheck, title: t("w3"), body: t("w3D") },
    { Icon: Headset, title: t("w4"), body: t("w4D") },
  ];
  const steps = [
    { title: t("s1"), body: t("s1D") },
    { title: t("s2"), body: t("s2D") },
    { title: t("s3"), body: t("s3D") },
  ];

  // Bo'sh havolali tarmoq ko'rsatilmaydi (lib/site.ts dagi izohga qarang).
  const social = [
    { href: SOCIAL_LINKS.telegram, label: t("socialTelegram"), Icon: TelegramIcon, cls: "tg" },
    { href: SOCIAL_LINKS.instagram, label: t("socialInstagram"), Icon: InstagramIcon, cls: "ig" },
    { href: SOCIAL_LINKS.youtube, label: t("socialYoutube"), Icon: YoutubeIcon, cls: "yt" },
    { href: supportUrl, label: t("socialSupport"), Icon: Headset, cls: "sp" },
  ].filter((s) => s.href);

  return (
    <div className="v2 ig">
      <V2Background />

      <div className="ig-wrap">
        {/* ── Yuqori qator: brend ── */}
        <header className="ig-top">
          <span className="ig-brand">
            <Image
              src="/logo-mark-clear.png"
              alt=""
              width={120}
              height={120}
              sizes="40px"
              loading="eager"
              className="ig-brand-mark"
            />
            <span className="ig-brand-name">
              <span className="gt">Stars</span>Paymee
            </span>
          </span>
          <span className="ig-live">
            <span className="ig-live-dot" aria-hidden />
            {t("live")}
          </span>
        </header>

        <main>
        {/* ── Hero ── */}
        <section className="ig-hero">
          <div className="ig-hero-text">
            {showRating ? (
              <div className="ig-chip ig-in" style={{ "--d": "0s" } as React.CSSProperties}>
                <span className="ig-stars" aria-hidden>
                  ★★★★★
                </span>
                {ratingText}
              </div>
            ) : null}

            <h1 className="ig-h1">
              <span className="ig-in" style={{ "--d": ".06s" } as React.CSSProperties}>
                {t("h1a")}
              </span>
              <span className="ig-in" style={{ "--d": ".12s" } as React.CSSProperties}>
                {t("h1b")}
              </span>
              <span className="ig-in gt" style={{ "--d": ".18s" } as React.CSSProperties}>
                {t("h1c")}
              </span>
            </h1>

            <p className="ig-sub ig-in" style={{ "--d": ".26s" } as React.CSSProperties}>
              {t("sub")}
            </p>

            <div className="ig-cta-row ig-in" style={{ "--d": ".34s" } as React.CSSProperties} data-cta="ig-hero">
              <a className="ig-cta" href={link("hero")} target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="ig-cta-tg" />
                <span>{t("cta")}</span>
                <ArrowRight className="ig-cta-arrow" strokeWidth={2.4} />
              </a>
              <span className="ig-cta-note">{t("ctaNote")}</span>
            </div>

            <div className="ig-pay ig-in" style={{ "--d": ".42s" } as React.CSSProperties}>
              <span className="ig-pay-logo is-click">
                <Image src="/pay/click.png" alt="Click" width={230} height={72} sizes="72px" />
              </span>
              <span className="ig-pay-logo is-payme">
                <Image src="/pay/payme.png" alt="Payme" width={78} height={72} sizes="26px" />
              </span>
              <span className="ig-pay-chip">Uzcard</span>
              <span className="ig-pay-chip">HUMO</span>
            </div>
          </div>

          <div className="ig-hero-visual" aria-hidden>
            <div className="ig-glow" />
            <div className="ig-phone">
              <span className="ig-phone-notch" />
              <Image
                src="/app-screen.png"
                alt=""
                width={640}
                height={1387}
                sizes="(min-width: 900px) 300px, 240px"
                priority
                className="ig-phone-img"
              />
            </div>
            {ORBIT.map((k, i) => (
              <span key={k} className={`ig-orb ig-orb-${i + 1}`}>
                <Image src={`/insta/${k}.png`} alt="" width={128} height={128} sizes="72px" />
              </span>
            ))}
          </div>
        </section>

        {/* ── Jonli raqamlar ── */}
        <section className="ig-stats">
          {tiles.map((s, i) => (
            <div key={s.label} className="ig-stat ig-in" style={{ "--d": `${0.05 * i}s` } as React.CSSProperties}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── Mahsulotlar ── */}
        <section className="ig-sec" data-cta="ig-card">
          <div className="ig-head">
            <span className="ig-kicker">{t("productsKicker")}</span>
            <h2 className="ig-h2">{t("productsTitle")}</h2>
          </div>
          <div className="ig-grid">
            {PRODUCTS.map((p, i) => (
              <a
                key={p.key}
                className="ig-card"
                href={link("card")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span className="ig-card-ic">
                  <Image src={`/insta/${p.img}.png`} alt="" width={128} height={128} sizes="64px" />
                </span>
                <b>{t(p.key)}</b>
                <span>{t(`${p.key}D`)}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Nega biz ── */}
        <section className="ig-sec">
          <div className="ig-head">
            <span className="ig-kicker">{t("whyKicker")}</span>
            <h2 className="ig-h2">{t("whyTitle")}</h2>
          </div>
          <div className="ig-why">
            {why.map(({ Icon, title, body }) => (
              <div key={title} className="ig-why-item">
                <span className="ig-why-ic">
                  <Icon strokeWidth={2.2} />
                </span>
                <div>
                  <b>{title}</b>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3 qadam ── */}
        <section className="ig-sec">
          <div className="ig-head">
            <span className="ig-kicker">{t("stepsKicker")}</span>
            <h2 className="ig-h2">{t("stepsTitle")}</h2>
          </div>
          <ol className="ig-steps">
            {steps.map((s, i) => (
              <li key={s.title} className="ig-step">
                <span className="ig-step-n">{i + 1}</span>
                <b>{s.title}</b>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Yakuniy CTA ── */}
        <section className="ig-final" data-cta="ig-final">
          <h2 className="ig-h2">{t("finalTitle")}</h2>
          <p>{t("finalSub")}</p>
          <a className="ig-cta ig-cta-lg" href={link("cta")} target="_blank" rel="noopener noreferrer">
            <TelegramIcon className="ig-cta-tg" />
            <span>{t("cta")}</span>
            <ArrowRight className="ig-cta-arrow" strokeWidth={2.4} />
          </a>
        </section>
        </main>

        {/* ── Ijtimoiy tarmoqlar va aloqa ── */}
        <footer className="ig-foot" data-cta="ig-social">
          <span className="ig-foot-t">{t("socialTitle")}</span>
          <nav className="ig-social" aria-label={t("socialTitle")}>
            {social.map(({ href, label, Icon, cls }) => (
              <a key={cls} className={`ig-soc ig-soc-${cls}`} href={href} target="_blank" rel="noopener noreferrer">
                <span className="ig-soc-ic">
                  <Icon />
                </span>
                <span className="ig-soc-l">{label}</span>
              </a>
            ))}
          </nav>
          <p className="ig-disclaimer">{t("disclaimer")}</p>
          <p className="ig-rights">© {new Date().getFullYear()} StarsPaymee · starstg.uz</p>
        </footer>
      </div>

      {/* Telefonda doim ko'rinadigan pastki tugma — reklama sahifasining asosiy CTA'si */}
      <div className="ig-sticky" data-cta="ig-sticky">
        <a className="ig-cta ig-cta-sticky" href={link("sticky")} target="_blank" rel="noopener noreferrer">
          <TelegramIcon className="ig-cta-tg" />
          <span>{t("sticky")}</span>
          <ArrowRight className="ig-cta-arrow" strokeWidth={2.4} />
        </a>
      </div>
    </div>
  );
}
