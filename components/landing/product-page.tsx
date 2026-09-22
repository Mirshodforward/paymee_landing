import type { CSSProperties, ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowIcon } from "@/components/v2/icons";
import { V2ReviewsSection } from "@/components/v2/v2-reviews-section";
import { reviewSectionProps } from "@/components/v2/review-section-props";
import { getBlogSummaries } from "@/lib/blog/all";
import { formatStatNumber, getLandingStats } from "@/lib/live-stats";
import { aggregateRatingLd, reviewsLd } from "@/lib/reviews";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { botDeepLink, type DeepLinkPage } from "@/lib/telegram-deeplink";

type Item = { t: string; d: string };
type Faq = { q: string; a: string };
type Trust = { v: string; t: string; d: string };

export type ProductOffer = { name: string; price: number; url: string };

export type ProductPageProps = {
  locale: string;
  /** Tarjima nomi: `premiumPage` | `starsPage`. */
  ns: string;
  path: `/${string}`;
  deepLinkPage: DeepLinkPage;
  /** Breadcrumb va schema uchun: «Telegram Premium». */
  productName: string;
  featureIcons: string[];
  guideSlugs: string[];
  /** Narx jadvali — mahsulotga xos, chaqiruvchi yasaydi. */
  priceTable: ReactNode;
  /** `pricesNote` ichidagi o'zgaruvchilar ({diff}, {perStar}…). */
  priceNoteValues?: Record<string, string | number>;
  offers: ProductOffer[];
  /** Hero tugmasi — mahsulot bilan deep link. */
  primaryHref: string;
};

/** To'lov usullari ranglari — `messages.productPage.payMethods` tartibida. */
const PAY_COLORS = ["#3D8BFD", "#1BC9B7", "#00A6FF", "#33CCBE", "#F43F5E", "#7C4DFF", "#2F6BFF", "#12B886", "#F2C94C"];

/**
 * Pul keltiradigan mahsulot sahifasi — Premium va Stars bir xil skeletda:
 * hero → narx jadvali → imkoniyatlar → 3 qadam (HowTo) → 9 ta to'lov usuli
 * (har biri H3, umumiy `productPage` manbasidan) → kafolat → 10 FAQ
 * (FAQPage) → jonli sharhlar + forma → qo'llanmalar → CTA.
 *
 * Buyurtma soni va sharhlar bot backend'idan jonli. AggregateRating faqat
 * 10+ baho bo'lganda schema'ga kiradi.
 */
export async function ProductPage({
  locale,
  ns,
  path,
  deepLinkPage,
  productName,
  featureIcons,
  guideSlugs,
  priceTable,
  priceNoteValues,
  offers,
  primaryHref,
}: ProductPageProps) {
  const [t, tp, stats, reviews] = await Promise.all([
    getTranslations({ locale, namespace: ns }),
    getTranslations({ locale, namespace: "productPage" }),
    getLandingStats(),
    reviewSectionProps(locale),
  ]);

  const base = getSiteUrl();
  const canonical = `${base}/${locale}${path}`;
  const ctaHref = botDeepLink({ page: deepLinkPage, placement: "cta" });

  const badges = t.raw("badges") as string[];
  const features = t.raw("features") as Item[];
  const steps = t.raw("steps") as Item[];
  const payMethods = tp.raw("payMethods") as Item[];
  const trust = t.raw("trust") as Trust[];
  const faq = t.raw("faq") as Faq[];
  const all = getBlogSummaries(locale);
  const guides = guideSlugs
    .map((s) => all.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const ordersText = formatStatNumber(stats.orders, locale);
  const prices = offers.map((o) => o.price);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("crumbHome"), item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: productName, item: canonical },
    ],
  };
  const rating = aggregateRatingLd(reviews.data.rating);
  const reviewItems = reviewsLd(reviews.data);
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t("h1"),
    description: t("metaDescription"),
    brand: { "@type": "Brand", name: siteConfig.name },
    category: productName,
    url: canonical,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "UZS",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: offers.length,
      availability: "https://schema.org/InStock",
      url: canonical,
      offers: offers.map((o) => ({
        "@type": "Offer",
        name: o.name,
        price: o.price,
        priceCurrency: "UZS",
        availability: "https://schema.org/InStock",
        url: o.url,
      })),
    },
    ...(rating ? { aggregateRating: rating } : {}),
    ...(reviewItems.length ? { review: reviewItems } : {}),
  };
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("stepsTitle"),
    description: t("stepsSub"),
    totalTime: "PT3M",
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const delay = (i: number, step = 0.05) => ({ "--d": `${i * step}s` }) as CSSProperties;

  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={productLd} />
      <JsonLd data={howToLd} />
      <JsonLd data={faqLd} />

      {/* ===== Hero ===== */}
      <section className="pp-hero" id="top">
        <div className="wrap">
          <nav className="pp-crumbs rv" aria-label="breadcrumb">
            <Link href="/">{t("crumbHome")}</Link>
            <span aria-hidden>/</span>
            <span>{productName}</span>
          </nav>
          <div className="kicker rv">{t("kicker")}</div>
          <h1 className="rv">{t("h1")}</h1>
          <p className="pp-lead rv">{t("lead")}</p>
          <div className="pp-badges rv">
            {badges.map((b) => (
              <span className="pp-badge" key={b}>
                {b}
              </span>
            ))}
          </div>
          <div className="pp-actions rv">
            <a className="btn btn-grad mag" href={primaryHref} target="_blank" rel="noopener noreferrer">
              {t("ctaPrimary")}
              <ArrowIcon style={{ stroke: "#fff" }} />
            </a>
            <a className="btn btn-ghost mag" href="#narxlar">
              {t("ctaPrices")}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ===== Narxlar ===== */}
      <section className="sec" id="narxlar" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="kicker">{t("pricesKicker")}</div>
            <h2 className="h2">{t("pricesTitle")}</h2>
            <p className="sec-sub">{t("pricesSub")}</p>
          </div>
          <div className="rv" style={{ overflowX: "auto" }}>
            {priceTable}
          </div>
          <p className="pp-note rv">{t("pricesNote", priceNoteValues)}</p>
        </div>
      </section>

      {/* ===== Imkoniyatlar ===== */}
      <section className="sec" id="imkoniyatlar" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="kicker">{t("featuresKicker")}</div>
            <h2 className="h2">{t("featuresTitle")}</h2>
            <p className="sec-sub">{t("featuresSub")}</p>
          </div>
          <div className="pp-grid">
            {features.map((f, i) => (
              <div className="pp-card rv" key={f.t} style={delay(i)}>
                <h3>
                  <span className="pp-ic" aria-hidden>
                    {featureIcons[i % featureIcons.length]}
                  </span>
                  {f.t}
                </h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Qanday sotib olinadi ===== */}
      <section className="sec" id="qanday" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="kicker">{t("stepsKicker")}</div>
            <h2 className="h2">{t("stepsTitle")}</h2>
            <p className="sec-sub">{t("stepsSub")}</p>
          </div>
          <div className="pp-steps">
            {steps.map((s, i) => (
              <div className="pp-step rv" key={s.t} style={delay(i, 0.08)}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="pp-actions rv">
            <a className="btn btn-grad mag" href={ctaHref} target="_blank" rel="noopener noreferrer">
              {t("stepsCta")}
              <ArrowIcon style={{ stroke: "#fff" }} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== To'lov usullari — 9 ta, har biri H3 (umumiy manba) ===== */}
      <section className="sec pp-pay" id="tolov" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ maxWidth: 820 }}>
            <div className="kicker">{tp("payKicker")}</div>
            <h2 className="h2">{tp("payTitle")}</h2>
            <p className="sec-sub">{tp("paySub")}</p>
          </div>
          <div className="pp-grid">
            {payMethods.map((m, i) => (
              <div
                className="pp-card rv"
                key={m.t}
                style={{ ...delay(i, 0.04), "--bc": PAY_COLORS[i], "--bcg": `${PAY_COLORS[i]}26` } as CSSProperties}
              >
                <h3>
                  <span className="pp-ic" aria-hidden />
                  {m.t}
                </h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
          <p className="pp-note rv">{tp("payNote")}</p>
        </div>
      </section>

      {/* ===== Kafolat ===== */}
      <section className="sec" id="kafolat" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div className="kicker">{t("trustKicker")}</div>
            <h2 className="h2">{t("trustTitle")}</h2>
            <p className="sec-sub">{t("trustSub")}</p>
          </div>
          <div className="pp-trust">
            {trust.map((x, i) => (
              <div className="pp-trust-it rv" key={x.t} style={delay(i, 0.06)}>
                <b>{x.v.replace("{orders}", `${ordersText}+`)}</b>
                <strong>{x.t}</strong>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
          <p className="pp-disclosure rv">{t("disclosure")}</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="sec" id="faq" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="sec-head center rv">
            <div className="kicker">{t("faqKicker")}</div>
            <h2 className="h2">{t("faqTitle")}</h2>
          </div>
          <div className="faq-list">
            {faq.map((f, i) => (
              <div className="faq-it rv" key={f.q} style={delay(i)}>
                <button className="faq-q" type="button" aria-expanded="false">
                  {f.q}
                  <span className="fx">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Sharhlar (jonli) ===== */}
      <V2ReviewsSection {...reviews} />

      {/* ===== Qo'llanmalar ===== */}
      {guides.length ? (
        <section className="sec" id="qollanmalar" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <div className="sec-head rv">
              <div className="kicker">{t("guidesKicker")}</div>
              <h2 className="h2">{t("guidesTitle")}</h2>
            </div>
            <div className="pp-guides">
              {guides.map((g, i) => (
                <Link className="pp-guide rv" href={`/blog/${g.slug}`} key={g.slug} style={delay(i, 0.04)}>
                  {g.title}
                  <ArrowIcon />
                </Link>
              ))}
            </div>
            <div className="pp-actions rv">
              <Link className="btn btn-ghost mag" href="/blog">
                {t("guidesAll")}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ===== Yakuniy CTA ===== */}
      <section className="cta-final" id="boshlash">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 className="h2 rv">{t("finalTitle")}</h2>
          <p className="sec-sub rv" style={{ margin: "14px auto 0", maxWidth: 560 }}>
            {t("finalSub")}
          </p>
          <div className="pp-actions rv" style={{ justifyContent: "center" }}>
            <a className="btn btn-grad mag" href={ctaHref} target="_blank" rel="noopener noreferrer">
              {t("finalCta")}
              <ArrowIcon style={{ stroke: "#fff" }} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
