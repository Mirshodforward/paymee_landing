import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Headset } from "lucide-react";
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
 * ATAYLAB IXCHAM. Reklamadan kelgan odam telefonda, Instagram ichidagi
 * brauzerda bir necha soniyada qaror qiladi. Sahifada faqat taklif, ishonch
 * (reyting, raqamlar, to'lov usullari), mahsulotlar va tugma qoladi — uzun
 * tushuntirishlar yo'q (egasining so'rovi, 2026-09-26).
 *
 * NEGA BUNDAY YENGIL:
 *   - `V2Shell` ishlatilmagan: undagi foizli preloader kontentni kechiktiradi,
 *     `V2Effects` esa ortiqcha JS. Sahifada mijoz JS'i yo'q, animatsiya — CSS.
 *   - Navigatsiya yo'q, yagona maqsad — botni ochish.
 *   - `noindex` va sitemap'da yo'q: bosh sahifa bilan qidiruvda raqobatlashmasin.
 *   - Ikonkalar oldindan WebP'ga o'girilgan va optimizatorsiz beriladi
 *     (`unoptimized`): dev optimizatori 96px o'lchamda osilib qolardi, jami
 *     9 ta ikonka 23 KB.
 *
 * RAQAMLAR FAQAT JONLI. Stars, buyurtma va foydalanuvchi soni bot backend'idan;
 * javob bo'lmasa plitka chiqmaydi (`STATS.orders = 100 000` zaxirasi bu yerda
 * ATAYLAB ishlatilmaydi). Hammasi pastga yaxlitlanadi.
 *
 * KUZATUV: tugmalarda `data-cta` bor, `TelegramClickTracker` uni «bot_open»
 * hodisasiga yozadi. Deep-link manbasi — `w_instagram_<joy>`.
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

/** Brend belgisi atrofida suzib yuradigan ikonkalar (joy — CSS klassida). */
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

/** Gradient tugma — hero, oxiri va pastki doimiy qatorda bir xil. */
function BotButton({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a className={`ig-cta ${className}`.trim()} href={href} target="_blank" rel="noopener noreferrer">
      <TelegramIcon className="ig-cta-tg" />
      <span>{label}</span>
      <ArrowRight className="ig-cta-arrow" strokeWidth={2.4} />
    </a>
  );
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

  const showRating = hasRating(reviews.rating);
  const ratingValue = reviews.rating.value.toFixed(1);
  const ratingText = t("rating", {
    value: locale === "en" ? ratingValue : ratingValue.replace(".", ","),
    count: reviews.rating.count,
  });

  // Faqat backend'dan kelgan raqamlar — zaxira son hech qachon ko'rinmaydi.
  const tiles: { value: string; label: string }[] = [];
  if (stats.starsDelivered) tiles.push({ value: statText(stats.starsDelivered, locale), label: t("statStars") });
  if (stats.live.orders) tiles.push({ value: statText(stats.orders, locale), label: t("statOrders") });
  if (stats.live.activeUsers) tiles.push({ value: statText(stats.activeUsers, locale), label: t("statUsers") });
  tiles.push({ value: formatStatNumber(STATS.yearsInService, locale), label: t("statYears") });

  // Bo'sh havolali tarmoq ko'rsatilmaydi (lib/site.ts dagi izohga qarang).
  const social = [
    { href: SOCIAL_LINKS.telegram, label: t("socialTelegram"), Icon: TelegramIcon, cls: "tg" },
    { href: SOCIAL_LINKS.instagram, label: t("socialInstagram"), Icon: InstagramIcon, cls: "ig" },
    { href: SOCIAL_LINKS.youtube, label: t("socialYoutube"), Icon: YoutubeIcon, cls: "yt" },
    { href: getTelegramSupportUrl(), label: t("socialSupport"), Icon: Headset, cls: "sp" },
  ].filter((s) => s.href);

  return (
    <div className="v2 ig">
      <V2Background />

      <div className="ig-wrap">
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
          {/* ── Taklif va tugma ── */}
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

              <p className="ig-sub ig-in" style={{ "--d": ".24s" } as React.CSSProperties}>
                {t("sub")}
              </p>

              <div className="ig-cta-row ig-in" style={{ "--d": ".3s" } as React.CSSProperties} data-cta="ig-hero">
                <BotButton href={link("hero")} label={t("cta")} />
              </div>

              <div className="ig-pay ig-in" style={{ "--d": ".36s" } as React.CSSProperties}>
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

            {/* Markazda brend belgisi, atrofida botdagi mahsulotlar suzib yuradi */}
            <div className="ig-hero-visual" aria-hidden>
              <div className="ig-glow" />
              <span className="ig-ring ig-ring-1" />
              <span className="ig-ring ig-ring-2" />
              <span className="ig-core">
                <Image
                  src="/logo-mark-clear.png"
                  alt=""
                  width={512}
                  height={512}
                  sizes="(min-width: 900px) 180px, 132px"
                  priority
                  className="ig-core-img"
                />
              </span>
              {ORBIT.map((k, i) => (
                <span key={k} className={`ig-orb ig-orb-${i + 1}`}>
                  <Image src={`/insta/${k}.webp`} alt="" width={132} height={132} unoptimized />
                </span>
              ))}
            </div>
          </section>

          {/* ── Jonli raqamlar ── */}
          <section className="ig-stats" aria-label={t("statsLabel")}>
            {tiles.map((s, i) => (
              <div key={s.label} className="ig-stat ig-in" style={{ "--d": `${0.05 * i}s` } as React.CSSProperties}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </section>

          {/* ── Mahsulotlar: ikonka va nomi, ortiqcha matnsiz ── */}
          <section className="ig-sec" data-cta="ig-card">
            <h2 className="ig-h2">{t("productsTitle")}</h2>
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
                    <Image src={`/insta/${p.img}.webp`} alt="" width={132} height={132} unoptimized />
                  </span>
                  <b>{t(p.key)}</b>
                </a>
              ))}
            </div>
          </section>

          {/* Desktop uchun oxirgi tugma — telefonda pastki doimiy tugma bor */}
          <div className="ig-final" data-cta="ig-final">
            <BotButton href={link("cta")} label={t("cta")} className="ig-cta-lg" />
          </div>
        </main>

        <footer className="ig-foot" data-cta="ig-social">
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

      {/* Telefonda hero tugmasi ko'rinmay qolgach chiqadigan pastki tugma */}
      <div className="ig-sticky" data-cta="ig-sticky">
        <BotButton href={link("sticky")} label={t("sticky")} className="ig-cta-sticky" />
      </div>
    </div>
  );
}
