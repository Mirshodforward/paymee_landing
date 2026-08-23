import { Fragment, type CSSProperties } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { V2Shell } from "@/components/v2/v2-shell";
import { V2Nav } from "@/components/v2/v2-nav";
import { V2Footer } from "@/components/v2/v2-footer";
import { V2NftMarketSection } from "@/components/v2/v2-nft-market-section";
import { V2BoostMarketSection } from "@/components/v2/v2-boost-market-section";
import {
  ArrowIcon,
  BoltIcon,
  CheckIcon,
  ClockIcon,
  GiftIcon,
  PremiumStarIcon,
  ShieldIcon,
  StarIcon,
  TelegramIcon,
  VerifiedIcon,
} from "@/components/v2/icons";
import { getTelegramBotUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import { getFeaturedSummaries } from "@/lib/blog/all";
import {
  PAYMENT_METHODS,
  PREMIUM_LOGIN_PLANS,
  PREMIUM_PLANS,
  STARS_PER_UNIT_UZS,
  STARS_PACKS,
  STATS,
  formatUzs,
} from "@/lib/products";

type FaqItem = { question: string; answer: string };

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2");
  const th = await getTranslations("home");
  const featured = getFeaturedSummaries(locale, 8);
  const botUrl = getTelegramBotUrl();
  const supportUrl = getTelegramSupportUrl();

  const nf = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US");
  const grp = (n: number) => nf.format(n).replace(/,/g, " ");
  const money = (n: number) => formatUzs(n, locale);
  const unitMonth = th("unitMonth");
  const unitYear = th("unitYear");
  const periodLabel = (months: number) =>
    months === 12 ? `1 ${unitYear}` : `${months} ${unitMonth}`;

  const faqItems = th.raw("faqItems") as FaqItem[];
  const marquee = t.raw("marquee") as string[];
  const prodStarsB = t.raw("prodStarsB") as string[];
  const prodPremiumB = t.raw("prodPremiumB") as string[];
  const prodGiftsB = t.raw("prodGiftsB") as string[];
  const nftBullets = t.raw("nftBullets") as string[];
  const boostBullets = t.raw("boostBullets") as string[];

  const navLabels = {
    why: t("navWhy"),
    products: t("navProducts"),
    how: t("navHow"),
    faq: t("navFaq"),
    home: t("navHome"),
    blog: t("blogTitle"),
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
        nav={<V2Nav labels={navLabels} botUrl={botUrl} variant="home" />}
        footer={<V2Footer labels={footerLabels} botUrl={botUrl} supportUrl={supportUrl} />}
      >
        {/* ===== Hero ===== */}
        <section className="hero">
          <div className="wrap">
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
                href={botUrl}
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

            {/* 3D telefon sahnasi */}
            <div className="stage rv-scale rv" style={{ "--d": ".25s" } as CSSProperties} data-v2-stage>
              <div
                className="phone"
                data-v2-phone
                data-v2-sim
                data-pay-done={t("phonePayDone")}
                data-pay-wait={t("phonePayWait")}
              >
                <div className="screen">
                  <div className="isl" />
                  <div className="ch-head">
                    <span className="ch-ava">
                      <StarIcon />
                    </span>
                    <div>
                      <div className="ch-name">
                        StarsPaymee_bot
                        <VerifiedIcon />
                      </div>
                      <div className="ch-status">{t("phoneMode")}</div>
                    </div>
                  </div>
                  <div className="ch-body">
                    <div className="bbl bbl-in" data-sim-m1>
                      {t("phoneGreet")}
                    </div>
                    <div className="bbl bbl-out" data-sim-m2>
                      {t("phoneOrder")}
                    </div>
                    <div className="bbl bbl-in pay-row" data-sim-m3>
                      <span className="pr-ic" data-sim-payic>
                        💳
                      </span>
                      <span>
                        {t("phonePayInfo")}
                        <small data-sim-paytxt>{t("phonePayWait")}</small>
                      </span>
                    </div>
                    <div className="ph-timer" data-sim-timer>
                      <div className="pht-num" data-sim-num>
                        00.00<span> s</span>
                      </div>
                      <div className="pht-bar">
                        <div className="pht-fill" data-sim-fill />
                      </div>
                      <div className="pht-lbl">{t("phoneDeliverLabel")}</div>
                    </div>
                    <div className="bbl bbl-in" data-sim-m4>
                      ✅ <b>{t("phoneDeliveredTitle")}</b>
                      <br />
                      <span className="mut">{t("phoneDeliveredSub")}</span>
                    </div>
                    <div className="ph-burst" data-sim-burst />
                  </div>
                  <div className="ch-foot">
                    <span>{t("phoneAvg")}</span>
                    <span>{t("phoneMode")}</span>
                  </div>
                </div>
              </div>
              <div className="chips" aria-hidden>
                <span className="chip c1" data-depth="22">
                  <span className="cd" style={{ background: "#3D8BFD" }} />
                  UzCard <small>8600</small>
                </span>
                <span className="chip c2" data-depth="30">
                  <span className="cd" style={{ background: "#1BC9B7" }} />
                  HUMO <small>9860</small>
                </span>
                <span className="chip c3" data-depth="26">
                  <span className="cd" style={{ background: "#00A6FF" }} />
                  Click
                </span>
                <span className="chip c4" data-depth="34">
                  <span className="cd" style={{ background: "#33CCBE" }} />
                  Payme
                </span>
                <span className="chip c5" data-depth="18">
                  ⚡ {t("phoneAvg").replace(/^.*?:\s*/, "")}
                </span>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="marquee" aria-hidden>
            <div className="mq-track">
              {[0, 1].map((dup) => (
                <div className="mq-in" key={dup}>
                  {marquee.map((m, i) => (
                    <Fragment key={`${dup}-${i}`}>
                      <span className="mq-it">{m}</span>
                      <span className="mq-sep" />
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Statistika ===== */}
        <section className="sec" style={{ paddingTop: 54, paddingBottom: 30 }}>
          <div className="wrap">
            <div className="stats-wrap rv">
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={STATS.yearsInService} data-suffix="">
                    0
                  </span>
                  <span className="u">{t("statYearsU")}</span>
                </div>
                <div className="stat-lbl">{t("statYearsLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={STATS.deliverySeconds}>
                    0
                  </span>
                  <span className="u">{t("statSecU")}</span>
                </div>
                <div className="stat-lbl">{t("statSecLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={STATS.activeUsers}>
                    0
                  </span>
                  <span className="u">{t("statUsersU")}</span>
                </div>
                <div className="stat-lbl">{t("statUsersLbl")}</div>
              </div>
              <div className="stat">
                <div className="stat-num">
                  <span className="cnt" data-target={STATS.orders}>
                    0
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
                  <span className="bp bp-uz">
                    <span className="cd" style={{ background: "#3D8BFD" }} />
                    UZCARD
                  </span>
                  <span className="bp bp-hu">
                    <span className="cd" style={{ background: "#1BC9B7" }} />
                    HUMO
                  </span>
                  <span className="bp bp-cl">
                    <span className="cd" style={{ background: "#00A6FF" }} />
                    CLICK
                  </span>
                  <span className="bp bp-pa">
                    <span className="cd" style={{ background: "#33CCBE" }} />
                    PAYME
                  </span>
                  <span className="bp bp-pn">
                    <span className="cd" style={{ background: "#F59E0B" }} />
                    PAYNET
                  </span>
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
                  href={botUrl}
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

        <V2NftMarketSection
          kicker={t("nftKicker")}
          title={t("nftTitle")}
          subtitle={t("nftSub")}
          balanceLabel={t("nftBalance")}
          myGifts={t("nftMyGifts")}
          ctaBot={t("nftCtaBot")}
          ctaBlog={t("nftCtaBlog")}
          blogHref="/blog/telegram-nft-gift-nima"
          botUrl={botUrl}
          newBadge={t("nftNewBadge")}
          bullets={nftBullets}
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
          botUrl={botUrl}
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
                  href={botUrl}
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
              href={botUrl}
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
                  href={botUrl}
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
                  href={botUrl}
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

        {/* ===== Mashhur qo‘llanmalar — blogga ichki linklar ===== */}
        {featured.length > 0 ? (
          <section className="sec" id="qollanmalar" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <div className="sec-head center rv">
                <div className="kicker">{t("blogBadge")}</div>
                <h2 className="h2">{t("blogH1")}</h2>
                <p className="sec-sub">{t("blogSubtitle")}</p>
              </div>
              <ul className="home-guides">
                {featured.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="home-guide rv">
                      <span className="home-guide-title">{post.title}</span>
                      <ArrowIcon />
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
              <Link className="btn btn-grad mag" href="/business">
                {t("bizCta")}
                <ArrowIcon style={{ stroke: "#fff" }} />
              </Link>
            </div>
          </div>
        </section>

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
              href={botUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              {t("ctaButton")}
            </a>
            <p className="cta-tg">
              <a href={botUrl} target="_blank" rel="noopener noreferrer">
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
