import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowIcon } from "@/components/v2/icons";
import { blogCategories, type BlogCategory } from "@/lib/blog-posts";
import { getBlogSummariesByCategory, getBlogCount, getGrowthSeriesSummaries, getNftGiftSeriesSummaries, getBoostSeriesSummaries } from "@/lib/blog/all";
import { routing } from "@/i18n/routing";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { setRequestLocale, getTranslations } from "next-intl/server";

function normalizeCat(cat: string | undefined): BlogCategory | "hammasi" {
  if (!cat) return "hammasi";
  if (blogCategories.includes(cat as BlogCategory)) return cat as BlogCategory;
  return "hammasi";
}

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ cat?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2" });
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const siteUrl = getSiteUrl();
  const title = t("blogTitle");
  const desc = t("blogSubtitle");

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${siteUrl}/${l}/blog`])),
    },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description: desc,
      url: `${siteUrl}/${locale}/blog`,
      locale: tSeo("ogLocale"),
    },
  };
}

export default async function BlogPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const resolved = await searchParams;
  const active = normalizeCat(resolved?.cat);
  const listed = getBlogSummariesByCategory(locale, active);
  const series = getGrowthSeriesSummaries(locale);
  const nftSeries = getNftGiftSeriesSummaries(locale);
  const boostSeries = getBoostSeriesSummaries(locale);
  const base = getSiteUrl();

  const t = await getTranslations("v2");
  const tc = await getTranslations("categories");

  const blogIndexLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}/${locale}/blog`,
    name: `${siteConfig.name} — ${t("blogTitle")}`,
    description: t("blogSubtitle"),
    url: `${base}/${locale}/blog`,
    inLanguage: locale,
    blogPost: listed.slice(0, 50).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${base}/${locale}/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    })),
  };

  const seriesItemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "StarsPaymee blog SEO seriyalari",
    itemListElement: [
      ...getGrowthSeriesSummaries(locale).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/${locale}/blog/${p.slug}`,
        name: p.title,
      })),
      ...getNftGiftSeriesSummaries(locale).map((p, i) => ({
        "@type": "ListItem",
        position: 10 + i + 1,
        url: `${base}/${locale}/blog/${p.slug}`,
        name: p.title,
      })),
      ...getBoostSeriesSummaries(locale).map((p, i) => ({
        "@type": "ListItem",
        position: 20 + i + 1,
        url: `${base}/${locale}/blog/${p.slug}`,
        name: p.title,
      })),
    ],
  };

  return (
    <section className="sec v2-blog-page">
      <JsonLd data={blogIndexLd} />
      <JsonLd data={seriesItemListLd} />
      <div className="wrap">
        <nav
          aria-label="Breadcrumb"
          className="rv"
          style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13.5, color: "var(--muted)" }}
        >
          <Link href="/" style={{ transition: "color .25s" }}>
            {t("blogHome")}
          </Link>
          <span>/</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{t("blogTitle")}</span>
        </nav>

        <div className="sec-head rv" style={{ marginTop: 26, marginBottom: 36 }}>
          <div className="kicker">{t("blogBadge")}</div>
          <h1 className="h2">{t("blogTitle")}</h1>
          <p className="sec-sub">{t("blogSubtitle")}</p>
        </div>

        <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }} role="tablist">
          <FilterPill active={active === "hammasi"} href="/blog">
            {t("blogAll")}
          </FilterPill>
          {blogCategories.map((c) => (
            <FilterPill key={c} active={active === c} href={`/blog?cat=${encodeURIComponent(c)}`}>
              {tc(c)}
            </FilterPill>
          ))}
        </div>

        {active === "hammasi" && series.length > 0 ? (
          <div className="blog-series rv" style={{ marginBottom: 40 }}>
            <div className="kicker">{t("blogSeriesBadge")}</div>
            <h2 className="h3" style={{ marginTop: 8, marginBottom: 6 }}>
              {t("blogSeriesTitle")}
            </h2>
            <p className="sec-sub" style={{ marginBottom: 0, fontSize: 14, maxWidth: 720 }}>
              {t("blogSeriesSubtitle")}
            </p>
            <ul className="blog-series-grid" style={{ listStyle: "none", padding: 0, marginTop: 18 }}>
              {series.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="blog-series-card">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="prod-link" style={{ color: "var(--fuch)" }}>
                      {t("blogRead")} <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {active === "hammasi" && nftSeries.length > 0 ? (
          <div className="blog-series rv" style={{ marginBottom: 40, borderColor: "rgba(245,158,11,0.35)" }}>
            <div className="kicker">
              {t("blogNftSeriesBadge")}
            </div>
            <h2 className="h3" style={{ marginTop: 8, marginBottom: 6 }}>
              {t("blogNftSeriesTitle")}
            </h2>
            <p className="sec-sub" style={{ marginBottom: 0, fontSize: 14, maxWidth: 720 }}>
              {t("blogNftSeriesSubtitle")}
            </p>
            <ul className="blog-series-grid" style={{ listStyle: "none", padding: 0, marginTop: 18 }}>
              {nftSeries.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="blog-series-card">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="prod-link" style={{ color: "var(--fuch)" }}>
                      {t("blogRead")} <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {active === "hammasi" && boostSeries.length > 0 ? (
          <div className="blog-series rv" style={{ marginBottom: 40, borderColor: "rgba(139,92,246,0.4)" }}>
            <div className="kicker">{t("blogBoostSeriesBadge")}</div>
            <h2 className="h3" style={{ marginTop: 8, marginBottom: 6 }}>
              {t("blogBoostSeriesTitle")}
            </h2>
            <p className="sec-sub" style={{ marginBottom: 0, fontSize: 14, maxWidth: 720 }}>
              {t("blogBoostSeriesSubtitle")}
            </p>
            <ul className="blog-series-grid" style={{ listStyle: "none", padding: 0, marginTop: 18 }}>
              {boostSeries.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="blog-series-card">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="prod-link" style={{ color: "var(--fuch)" }}>
                      {t("blogRead")} <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <ul className="v2-blog-grid">
          {listed.map((post, i) => (
            <li key={post.slug} style={{ height: "100%" }}>
              <Link
                href={`/blog/${post.slug}`}
                className="bcard rv spot"
                style={{ "--d": `${Math.min(i, 6) * 0.05}s` } as CSSProperties}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span className="btag">{tc(post.category)}</span>
                  <time
                    dateTime={post.datePublished}
                    style={{ fontFamily: "var(--mono2)", fontSize: 11.5, color: "var(--muted)" }}
                  >
                    {post.datePublished}
                  </time>
                </div>
                <h2
                  className="h3"
                  style={{ fontFamily: "var(--disp)", fontWeight: 700, fontSize: 19, lineHeight: 1.3, marginBottom: 10 }}
                >
                  {post.title}
                </h2>
                <p style={{ flex: 1, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{post.excerpt}</p>
                <span className="prod-link" style={{ color: "var(--fuch)", marginTop: 18 }}>
                  {t("blogRead")} <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: 44, textAlign: "center", color: "var(--muted)", fontSize: 13.5 }}>
          {t("blogTotal", { count: getBlogCount() })}
        </p>
      </div>
    </section>
  );
}

function FilterPill({
  active,
  href,
  children,
}: {
  active: boolean;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      role="tab"
      aria-selected={active}
      prefetch={false}
      className={`fpill${active ? " active" : ""}`}
    >
      {children}
    </Link>
  );
}
