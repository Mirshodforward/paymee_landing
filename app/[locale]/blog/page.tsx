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

  // Seriyalar ro‘yxatda alohida blok sifatida chiqmaydi — har bir maqola
  // umumiy panjarada o‘z kartochkasi bilan turadi. ItemList faqat qidiruv
  // tizimlari uchun ichki bog‘lanish signali sifatida qoladi.
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
          style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", fontSize: 13.5, color: "var(--muted)" }}
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

        <div className="blog-cat-filters rv" role="tablist">
          <FilterPill active={active === "hammasi"} href="/blog">
            {t("blogAll")}
          </FilterPill>
          {blogCategories.map((c) => (
            <FilterPill key={c} active={active === c} href={`/blog?cat=${encodeURIComponent(c)}`}>
              {tc(c)}
            </FilterPill>
          ))}
        </div>

        <ul className="v2-blog-grid">
          {listed.map((post, i) => (
            <li key={post.slug} style={{ height: "100%" }}>
              <Link
                href={`/blog/${post.slug}`}
                className="bcard rv spot"
                style={{ "--d": `${Math.min(i, 6) * 0.05}s` } as CSSProperties}
              >
                <div className="bcard-meta">
                  <span className="btag">{tc(post.category)}</span>
                  <time dateTime={post.datePublished} className="bcard-date">
                    {post.datePublished}
                  </time>
                </div>
                <h2 className="h3 bcard-title">{post.title}</h2>
                <p className="bcard-excerpt">{post.excerpt}</p>
                <span className="prod-link bcard-more">
                  {t("blogRead")} <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="blog-total">{t("blogTotal", { count: getBlogCount() })}</p>
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
