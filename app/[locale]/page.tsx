import { type CSSProperties } from "react";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { V2Shell } from "@/components/v2/v2-shell";
import { V2Nav } from "@/components/v2/v2-nav";
import { V2Footer } from "@/components/v2/v2-footer";
import { V2NftRentSection } from "@/components/v2/v2-nft-rent-section";
import { V2ReviewsSection } from "@/components/v2/v2-reviews-section";
import { reviewSectionProps } from "@/components/v2/review-section-props";
import { V2BoostMarketSection } from "@/components/v2/v2-boost-market-section";
import {
  AppleIcon,
  ArrowIcon,
  BoltIcon,
  CheckIcon,
  ClockIcon,
  GiftIcon,
  GooglePlayIcon,
  PremiumStarIcon,
  ShieldIcon,
  StarIcon,
  TelegramIcon,
} from "@/components/v2/icons";
import { GEMPAY_URL, TELEGRAM_API_BOT_URL, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import { getFeaturedSummaries } from "@/lib/blog/all";
import { formatStatNumber, getLandingStats } from "@/lib/live-stats";
import { GAMES } from "@/lib/games";
import { botDeepLink } from "@/lib/telegram-deeplink";
import {
  PREMIUM_LOGIN_PLANS,
  PREMIUM_PLANS,
  STARS_PER_UNIT_UZS,
  STARS_PACKS,
  formatUzs,
} from "@/lib/products";

type FaqItem = { question: string; answer: string };

type PageProps = { params: Promise<{ locale: string }> };

/**
 * Statistika raqamlari bot backend'idan kelganligi uchun sahifa ISR bilan
 * qayta generatsiya qilinadi: 15 daqiqada bir marta yangi raqam olinadi,
 * qolgan vaqtda statik HTML beriladi. Deploy qilish shart emas.
 */
export const revalidate = 900;

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2");
  const th = await getTranslations("home");
  const featured = getFeaturedSummaries(locale, 6);
  const tg = await getTranslations("landing");
  const tc = await getTranslations("categories");
  // Har bir CTA o‘z manbasini olib boradi — bot foydalanuvchi qaysi bo‘limdan
  // kelganini biladi va mahsulotni oldindan tanlab qo‘yadi.
  const link = (placement: Parameters<typeof botDeepLink>[0]["placement"], product?: Parameters<typeof botDeepLink>[0]["product"]) =>
    botDeepLink({ page: "home", placement, product });
  const supportUrl = getTelegramSupportUrl();
  // Haqiqiy raqamlar bot backend'idan; API yetib bormasa `STATS` zaxirasi.
  const stats = await getLandingStats();

  const nf = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US");
  const grp = (n: number) => nf.format(n).replace(/,/g, " ");
  const money = (n: number) => formatUzs(n, locale);
  const unitMonth = th("unitMonth");
  const unitYear = th("unitYear");
  const periodLabel = (months: number) =>
    months === 12 ? `1 ${unitYear}` : `${months} ${unitMonth}`;

  const faqItems = th.raw("faqItems") as FaqItem[];
  /* Hero ostidagi to'lov lentasi — bitta manbadan, ikki marta takrorlanadi. */
  /* Ilova do'konlari. Manzil berilmaguncha nishon havola emas — saytda
     hech qachon «hech qayerga olib bormaydigan» link turmasligi uchun. */
  const APP_STORE_URL = "";
  const PLAY_STORE_URL = "";
  const stores = [
    { url: APP_STORE_URL, small: t("appStoreSmall"), name: "App Store", icon: <AppleIcon /> },
    { url: PLAY_STORE_URL, small: t("playStoreSmall"), name: "Google Play", icon: <GooglePlayIcon /> },
  ];

  /* Qabul qilinadigan to'lov usullari — «To'lov» blokidagi yagona ro'yxat.
     `color` ham nuqta rangi, ham hover porlashi uchun ishlatiladi. */
  const payMethods: {
    label: string;
    color: string;
    logo?: string;
    lw?: number;
    withText?: boolean;
  }[] = [
    { label: "UzCard", color: "#3D8BFD" },
    { label: "HUMO", color: "#1BC9B7" },
    { label: "Click", color: "#00A6FF", logo: "/pay/click.png", lw: 230 },
    { label: "Payme", color: "#33CCBE", logo: "/pay/payme.png", lw: 78, withText: true },
    { label: "Paynet", color: "#F43F5E", logo: "/pay/paynet.png", lw: 248 },
    { label: "Uzum Bank", color: "#7C4DFF" },
    { label: "Beepul", color: "#2F6BFF" },
    { label: "Alif", color: "#12B886" },
    { label: t("chipCash"), color: "#F2C94C" },
  ];
  const prodStarsB = t.raw("prodStarsB") as string[];
  const prodPremiumB = t.raw("prodPremiumB") as string[];
  const prodGiftsB = t.raw("prodGiftsB") as string[];
  const rentBullets = t.raw("rentBullets") as string[];
  // Sharhlar — bot backend'idan jonli; bo'sh bo'lsa bo'lim faqat formani ko'rsatadi.
  const reviews = await reviewSectionProps(locale);
  const boostBullets = t.raw("boostBullets") as string[];

  const navLabels = {
    why: t("navWhy"),
    products: t("navProducts"),
    how: t("navHow"),
    faq: t("navFaq"),
    home: t("navHome"),
    blog: t("blogTitle"),
    app: t("navApp"),
    openBot: t("openBot"),
  };
  const footerLabels = {
    tagline: t("footerTagline"),
    sections: t("footerSections"),
    products: th("starsTitle"),
    premium: th("premiumTitle"),
    gifts: th("giftsTitle"),
    blog: t("blogTitle"),
    support: t("footerSupport"),
    rights: t("footerRights"),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const offersLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${siteConfig.name} — Telegram Stars, Premium & Gifts`,
    serviceType: "Telegram Stars, Premium and gifts purchasing",
    areaServed: { "@type": "Country", name: "Uzbekistan" },
    provider: { "@type": "Organization", name: siteConfig.name },
    offers: [
      {
        "@type": "Offer",
        name: `${th("starsTitle")} — ${grp(STARS_PACKS[0].amount)} ${t("starsAmountUnit")}`,
        price: STARS_PACKS[0].priceUzs,
        priceCurrency: "UZS",
        category: th("starsTitle"),
      },
      ...PREMIUM_PLANS.map((p) => ({
        "@type": "Offer",
        name: `${th("premiumTitle")} ${periodLabel(p.months)}`,
        price: p.priceUzs,
        priceCurrency: "UZS",
        category: th("premiumTitle"),
      })),
    ],
  };

  const products = [
    {
      cls: "p-st",
      icon: <StarIcon />,
      title: th("starsTitle"),
      desc: t("prodStarsDesc"),
      bullets: prodStarsB,
    },
    {
      cls: "p-pr",
      icon: <PremiumStarIcon />,
      title: th("premiumTitle"),
      desc: t("prodPremiumDesc"),
      bullets: prodPremiumB,
    },
    {
      cls: "p-gf",
      icon: <GiftIcon />,
      title: th("giftsTitle"),
      desc: t("prodGiftsDesc"),
      bullets: prodGiftsB,
    },
  ];

  const steps = [
    { n: "01", title: t("step1Title"), body: t("step1Body") },
    { n: "02", title: t("step2Title"), body: t("step2Body") },
    { n: "03", title: t("step3Title"), body: t("step3Body") },
  ];

  const trust = [
    { icon: <ShieldIcon />, title: t("trust1Title"), body: t("trust1Body") },
    { icon: <StarIcon />, title: t("trust2Title"), body: t("trust2Body") },
    { icon: <BoltIcon />, title: t("trust3Title"), body: t("trust3Body") },
  ];

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={offersLd} />
      <V2Shell
        nav={<V2Nav labels={navLabels} botUrl={link("nav")} variant="home" />}
        footer={<V2Footer labels={footerLabels} botUrl={link("footer")} supportUrl={supportUrl} />}
      >
        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <div className="hero-badge rv">
                <span className="pulse" />
                {t("heroBadge")}
              </div>
              <h1 className="hero-h rv" style={{ "--d": ".05s" } as CSSProperties}>
                {t("heroTitleLead")} <span className="gt">{t("heroTitleAccent")}</span>{" "}
                {t("heroTitleTail")}
              </h1>
              <p className="hero-sub rv" style={{ "--d": ".15s" } as CSSProperties}>
                {t("heroSub")}
              </p>
              <div className="hero-cta rv" style={{ "--d": ".25s" } as CSSProperties}>
                <a
                  className="btn btn-grad mag"
                  href={link("hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon />
                  {t("heroCtaBot")}
                </a>
                <a className="btn btn-ghost mag" href="#qanday">
                  {t("heroCtaHow")}
                </a>
              </div>
            </div>

            {/* 3D telefon sahnasi */}
            <div className="stage rv-scale rv" style={{ "--d": ".25s" } as CSSProperties} data-v2-stage>
              <div className="panel-cta">
                <p className="panel-cta-lead">{t("appLead")}</p>
                <div className="store-badges">
                  {stores.map((st) => {
                    const inner = (
                      <>
                        <span className="store-ic">{st.icon}</span>
                        <span className="store-txt">
                          <small>{st.small}</small>
                          <b>{st.name}</b>
                        </span>
                      </>
                    );
                    return st.url ? (
                      <a
                        key={st.name}
                        className="store-badge"
                        href={st.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span key={st.name} className="store-badge" aria-disabled="true">
                        {inner}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="phone-duo">
                <div className="phone" data-v2-phone>
                  <div className="screen">
                    <span className="isl" aria-hidden />
                    <Image
                      className="screen-shot"
                      src="/app-screen.png"
                      alt={t("appShotAlt")}
                      width={640}
                      height={1387}
                      sizes="320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ===== Statistika ===== */}
        <section className="sec" style={{ paddingTop: 54, paddingBottom: 30 }}>
          <div className="wrap">
            {/*
              Raqamlar server tomonida yoziladi (ilgari «0» turardi va uni
              faqat JS almashtirardi — qidiruv botlari nolni ko'rardi).
              `data-target` saqlanadi, chunki v2-effects.tsx hisoblagichi
              shundan foydalanadi va bir xil formatni chiqaradi.
            */}
            <div className="stats-wrap rv">
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={stats.yearsInService} data-suffix="">
                    {formatStatNumber(stats.yearsInService, locale)}
                  </span>
                  <span className="u">{t("statYearsU")}</span>
                </div>
                <div className="stat-lbl">{t("statYearsLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={stats.deliverySeconds}>
                    {formatStatNumber(stats.deliverySeconds, locale)}
                  </span>
                  <span className="u">{t("statSecU")}</span>
                </div>
                <div className="stat-lbl">{t("statSecLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={stats.activeUsers}>
                    {formatStatNumber(stats.activeUsers, locale)}
                  </span>
                  <span className="u">{t("statUsersU")}</span>
                </div>
                <div className="stat-lbl">{t("statUsersLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={stats.orders}>
                    {formatStatNumber(stats.orders, locale)}
                  </span>
                  <span className="u">{t("statOrdersU")}</span>
                </div>
                <div className="stat-lbl">{t("statOrdersLbl")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Afzalliklar (bento) ===== */}
        <section className="sec" id="afzallik">
          <div className="wrap">
            <div className="sec-head rv">
              <div className="kicker">{t("kickerAdvantages")}</div>
              <h2 className="h2">{t("advTitle")}</h2>
              <p className="sec-sub">{t("advSub")}</p>
            </div>
            <div className="bento">
              <div className="cell cell-a spot rv">
                <div className="cell-tag">{t("advSpeedTag")}</div>
                <h3 className="h3">{t("advSpeedTitle")}</h3>
                <p>{t("advSpeedBody")}</p>
                <div className="ring-wrap">
                  <div className="ring" data-v2-ring>
                    <svg viewBox="0 0 200 200">
                      <circle className="track" cx="100" cy="100" r="86" />
                      <circle className="bar" data-v2-ring-bar cx="100" cy="100" r="86" />
                    </svg>
                    <div className="ring-c">
                      <div>
                        <div className="ring-num" data-v2-ring-num>
                          0.00
                        </div>
                        <div className="ring-lbl">{t("ringLabel")}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell cell-b spot rv" style={{ "--d": ".08s" } as CSSProperties}>
                <div className="big-ic">
                  <BoltIcon />
                </div>
                <div className="cell-tag">{t("advBonusTag")}</div>
                <h3 className="h3">{t("advBonusTitle")}</h3>
                <p>{t("advBonusBody")}</p>
              </div>
              <div className="cell cell-c spot rv" style={{ "--d": ".14s" } as CSSProperties}>
                <div className="big-ic ic-cyan">
                  <ClockIcon />
                </div>
                <div className="cell-tag">{t("advModeTag")}</div>
                <h3 className="h3">{t("advModeTitle")}</h3>
                <p>{t("advModeBody")}</p>
              </div>
              <div className="cell cell-d spot rv" style={{ "--d": ".2s" } as CSSProperties}>
                <div className="big-ic ic-vio">
                  <ShieldIcon />
                </div>
                <div className="cell-tag">{t("advSecTag")}</div>
                <h3 className="h3">{t("advSecTitle")}</h3>
                <p>{t("advSecBody")}</p>
              </div>
              <div className="cell cell-e spot rv" style={{ "--d": ".26s" } as CSSProperties}>
                <div style={{ maxWidth: 380 }}>
                  <div className="cell-tag">{t("advPayTag")}</div>
                  <h3 className="h3">{t("advPayTitle")}</h3>
                  <p>{t("advPayBody")}</p>
                </div>
                <div className="bank-pills">
                  {payMethods.map((m) => (
                    <span
                      key={m.label}
                      className="bp"
                      style={{ "--bc": m.color, "--bcg": `${m.color}73` } as CSSProperties}
                    >
                      {m.logo ? (
                        <>
                          <Image
                            className="bp-logo"
                            src={m.logo}
                            alt=""
                            width={m.lw ?? 72}
                            height={72}
                          />
                          {m.withText ? m.label : null}
                        </>
                      ) : (
                        <>
                          <span className="cd" style={{ background: m.color }} />
                          {m.label}
                        </>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Mahsulotlar ===== */}
        <section className="sec" id="mahsulotlar">
          <div className="wrap">
            <div className="sec-head rv">
              <div className="kicker">{t("kickerProducts")}</div>
              <h2 className="h2">{t("prodTitle")}</h2>
              <p className="sec-sub">{t("prodSub")}</p>
            </div>
            <div className="prod-grid">
              {products.map((p, i) => (
                <a
                  key={p.title}
                  className={`prod ${p.cls} spot rv`}
                  style={{ "--d": `${i * 0.1}s` } as CSSProperties}
                  href={link("card")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="prod-ic">{p.icon}</span>
                  <h3 className="h3">{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.bullets.map((b) => (
                      <li key={b}>
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="prod-link">
                    {t("prodLink")} <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <V2NftRentSection
          kicker={t("rentKicker")}
          title={t("rentTitle")}
          subtitle={t("rentSub")}
          newBadge={t("rentNewBadge")}
          catalogNote={t("rentCatalogNote")}
          durationLabel={t("rentDuration")}
          approxNote={t("rentApprox")}
          activeTitle={t("rentActive")}
          extendLabel={t("rentExtend")}
          daysLeft={t("rentDaysLeft")}
          ctaBot={t("rentCtaBot")}
          ctaBlog={t("rentCtaBlog")}
          blogHref="/blog/telegram-nft-sovga-ijarasi"
          botUrl={link("card")}
          bullets={rentBullets}
        />

        <V2BoostMarketSection
          kicker={t("boostKicker")}
          title={t("boostTitle")}
          subtitle={t("boostSub")}
          availableLabel={t("boostAvailable")}
          channelLabel={t("boostChannel")}
          boostsLabel={t("boostCount")}
          durationLabel={t("boostDuration")}
          days30={t("boostDays30")}
          ctaBot={t("boostCtaBot")}
          ctaBlog={t("boostCtaBlog")}
          blogHref="/blog/telegram-kanalga-boost-sotib-olish"
          botUrl={link("card")}
          newBadge={t("boostNewBadge")}
          bullets={boostBullets}
        />

        {/* ===== Stars narxlari ===== */}
        <section className="sec" id="stars-narx" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="kicker">{t("kickerPricesStars")}</div>
              <h2 className="h2">{t("starsTitle")}</h2>
              <p className="sec-sub">{t("starsLead", { price: money(STARS_PER_UNIT_UZS) })}</p>
            </div>
            <div className="rv price-pack-grid">
              {STARS_PACKS.map((p, i) => (
                <a
                  key={p.amount}
                  className={`pcard${p.popular ? " popular" : ""}`}
                  style={{ "--d": `${i * 0.04}s` } as CSSProperties}
                  href={link("price", { kind: "stars", amount: p.amount })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.popular ? <span className="pop-tag">{t("starsPopular")}</span> : null}
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <StarIcon style={{ width: 18, height: 18, fill: "#FBBF24" }} />
                    <b style={{ fontFamily: "var(--disp)", fontSize: 22 }}>{grp(p.amount)}</b>
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: ".5px",
                      color: "var(--muted)",
                    }}
                  >
                    {t("starsAmountUnit")}
                  </span>
                  <span style={{ marginTop: 4, fontWeight: 700, color: "#FBBF24" }}>
                    {money(p.priceUzs)}
                  </span>
                </a>
              ))}
            </div>
            <a
              className="btn btn-grad mag rv"
              href={link("cta")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 34 }}
            >
              {t("starsCta")}
              <ArrowIcon style={{ stroke: "#fff" }} />
            </a>
          </div>
        </section>

        {/* ===== Premium narxlari ===== */}
        <section className="sec" id="premium-narx" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="kicker">{t("kickerPricesPremium")}</div>
              <h2 className="h2">{t("premiumTitle")}</h2>
              <p className="sec-sub">{t("premiumLead")}</p>
            </div>

            {/* Username bilan */}
            <div className="rv" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
              <h3 className="h3" style={{ fontFamily: "var(--disp)", fontSize: 19 }}>
                {t("premiumAutoTitle")}
              </h3>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 13px",
                  borderRadius: 100,
                  background: "rgba(52,211,153,.12)",
                  color: "#34D399",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                <ClockIcon style={{ width: 13, height: 13, fill: "#34D399" }} />
                {t("premiumAutoBadge")}
              </span>
            </div>
            <div className="rv premium-pack-grid">
              {PREMIUM_PLANS.map((p, i) => (
                <a
                  key={p.months}
                  className={`pcard${p.popular ? " popular-pr" : ""}`}
                  style={{ "--d": `${i * 0.08}s`, alignItems: "flex-start", textAlign: "left", padding: "26px 24px" } as CSSProperties}
                  href={link("price", { kind: "premium", months: p.months })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.popular ? <span className="pop-tag tag-pr">{t("premiumPopular")}</span> : null}
                  <span style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", color: "var(--muted)" }}>
                    {periodLabel(p.months)}
                  </span>
                  <b style={{ fontFamily: "var(--disp)", fontSize: 26, marginTop: 6 }}>{money(p.priceUzs)}</b>
                  <span style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>
                    {money(Math.round(p.priceUzs / p.months))} / {t("perMonth")}
                  </span>
                  <span className="prod-link" style={{ color: "#A78BFA", marginTop: 16 }}>
                    {t("premiumCta")} <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>

            {/* Login bilan */}
            <div className="rv" style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", margin: "34px 0 18px" }}>
              <h3 className="h3" style={{ fontFamily: "var(--disp)", fontSize: 19 }}>
                {t("premiumLoginTitle")}
              </h3>
              <span className="btag">{t("premiumLoginBadge")}</span>
            </div>
            <div className="rv premium-pack-grid">
              {PREMIUM_LOGIN_PLANS.map((p, i) => (
                <a
                  key={p.months}
                  className="pcard"
                  style={{ "--d": `${i * 0.08}s`, alignItems: "flex-start", textAlign: "left", padding: "26px 24px" } as CSSProperties}
                  href={link("price", { kind: "premium", months: p.months })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px", color: "var(--muted)" }}>
                    {periodLabel(p.months)}
                  </span>
                  <b style={{ fontFamily: "var(--disp)", fontSize: 26, marginTop: 6 }}>{money(p.priceUzs)}</b>
                  <span className="prod-link" style={{ color: "#22D3EE", marginTop: 16 }}>
                    {t("premiumCta")} <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Qanday ishlaydi ===== */}
        <section className="sec" id="qanday">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">{t("kickerProcess")}</div>
              <h2 className="h2">{t("processTitle")}</h2>
              <p className="sec-sub">{t("processSub")}</p>
            </div>
            <div className="tl rv" data-v2-tl>
              <div className="tl-track">
                <div className="tl-fill" />
              </div>
              {steps.map((s) => (
                <div className="tstep" key={s.n}>
                  <div className="tnode">{s.n}</div>
                  <div>
                    <h3 className="h3">{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Ishonch banneri ===== */}
        <section className="sec" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="trust-band rv">
              {trust.map((item) => (
                <div className="tb-it" key={item.title}>
                  <span className="tb-ic">{item.icon}</span>
                  <div>
                    <h3 className="h3">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="sec" id="faq">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">{t("kickerFaq")}</div>
              <h2 className="h2">{t("faqTitle")}</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item, i) => (
                <div
                  className="faq-it rv"
                  key={item.question}
                  style={{ "--d": `${i * 0.06}s` } as CSSProperties}
                >
                  <button className="faq-q" type="button" aria-expanded="false">
                    {item.question}
                    <span className="fx">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-a">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GamPay — o‘yin to‘ldirish bo‘limi =====
             Botda bu 9 o‘yin + Steam’dan iborat alohida vertikal, lekin
             marketing saytida umuman ko‘rinmasdi. Bosh sahifadan havola
             bo‘lmasa, /gampay sahifasi ichki link olmay qolardi. */}
        <section className="sec" id="gampay" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <a
              href={GEMPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-gampay rv"
            >
              <span className="home-gampay__icon" aria-hidden>🎮</span>
              <span className="home-gampay__text">
                <span className="home-gampay__title">{tg("gampay.h1")}</span>
                <span className="home-gampay__sub">
                  {GAMES.slice(0, 5).map((g) => g.title).join(" · ")} · Steam
                </span>
              </span>
              <ArrowIcon />
            </a>
          </div>
        </section>

        {/* ===== Mashhur qo‘llanmalar — blogga ichki linklar ===== */}
        {featured.length > 0 ? (
          <section className="sec" id="qollanmalar" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <div className="sec-head center rv">
                <div className="kicker">{t("blogBadge")}</div>
                <h2 className="h2">{t("blogH1")}</h2>
                <p className="sec-sub">{t("blogSubtitle")}</p>
              </div>
              <ul className="v2-blog-grid home-blog-grid">
                {featured.map((post, i) => (
                  <li key={post.slug} style={{ height: "100%" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="bcard rv spot"
                      style={{ "--d": `${Math.min(i, 5) * 0.05}s` } as CSSProperties}
                    >
                      <div className="bcard-meta">
                        <span className="btag">{tc(post.category)}</span>
                        <time dateTime={post.datePublished} className="bcard-date">
                          {post.datePublished}
                        </time>
                      </div>
                      <h3 className="h3 bcard-title">{post.title}</h3>
                      <p className="bcard-excerpt">{post.excerpt}</p>
                      <span className="prod-link bcard-more">
                        {t("blogRead")} <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="center rv" style={{ marginTop: 26 }}>
                <Link href="/blog" className="prod-link">
                  {t("blogTitle")} <ArrowIcon />
                </Link>
              </p>
            </div>
          </section>
        ) : null}

        {/* ===== Business / API teaser ===== */}
        <section className="sec" id="business">
          <div className="wrap">
            <div
              className="rv"
              style={{
                borderRadius: 28,
                border: "1px solid var(--line)",
                background: "linear-gradient(135deg, rgba(34,158,217,.10), rgba(168,85,247,.08))",
                padding: "40px 32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
              }}
            >
              <div style={{ maxWidth: 620 }}>
                <div className="kicker">{t("bizKicker")}</div>
                <h2 className="h2" style={{ marginTop: 6 }}>
                  {t("bizTitle")}
                </h2>
                <p className="sec-sub" style={{ marginTop: 12 }}>
                  {t("bizBody")}
                </p>
              </div>
              <a
                className="btn btn-grad mag"
                href={TELEGRAM_API_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("bizCta")}
                <ArrowIcon style={{ stroke: "#fff" }} />
              </a>
            </div>
          </div>
        </section>

        <V2ReviewsSection {...reviews} variant="deck" />

        {/* ===== Yakuniy CTA ===== */}
        <section className="cta-final" id="boshlash">
          {[1, 2, 3, 4].map((n) => (
            <StarIcon key={n} className={`fs fs${n}`} style={{ fill: "url(#starGrad)" }} />
          ))}
          <div className="cta-burst" data-v2-cta-burst aria-hidden />
          <div className="wrap rv">
            <h2 className="h2">
              {t("ctaTitle").replace(t("ctaAccent"), "")}
              <span className="gt">{t("ctaAccent")}</span>
            </h2>
            <p className="sec-sub">{t("ctaSub")}</p>
            <a
              className="btn btn-grad btn-xl mag"
              data-v2-cta-btn
              href={link("cta")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              {t("ctaButton")}
            </a>
            <p className="cta-tg">
              <a href={link("cta")} target="_blank" rel="noopener noreferrer">
                @StarsPaymee_bot
              </a>{" "}
              · {t("ctaTgLine")}
            </p>
          </div>
        </section>
      </V2Shell>
    </>
  );
}
