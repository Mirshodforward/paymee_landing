import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ArrowIcon, TelegramIcon } from "@/components/v2/icons";
import { getPostBySlug, type BlogCategory } from "@/lib/blog-posts";
import { routing } from "@/i18n/routing";
import { getSiteUrl, getTelegramBotUrl, siteConfig } from "@/lib/site";
import { localizeBlogPost } from "@/lib/blog-i18n";
import { getAeoPostBySlug } from "@/lib/blog-aeo";
import { resolveAeoContent } from "@/lib/blog-aeo/types";
import { AeoArticle } from "@/components/blog/aeo-article";
import { allBlogSlugInfos, getRelatedSummaries, hasTranslation } from "@/lib/blog/all";
import { blogHreflangAlternates } from "@/lib/hreflang-alternates";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Statik prerender — maqola tarkibi so‘rovga bog‘liq emas, CDN keshlay oladi. */
export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allBlogSlugInfos().map(({ slug }) => ({ locale, slug })),
  );
}

/**
 * Tarjimasi yo‘q maqola shu tilda o‘zbekcha nusxani ko‘rsatadi — bu dublikat.
 * Sahifa ochiq qoladi (mavjud havolalar buzilmasin), lekin indekslanmaydi.
 */
function blogAlternatesAndRobots(slug: string, locale: string): Pick<Metadata, "alternates" | "robots"> {
  const translated = routing.locales.filter((l) => hasTranslation(slug, l));
  const indexable = hasTranslation(slug, locale);
  return {
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: blogHreflangAlternates(slug, translated),
    },
    robots: indexable
      ? undefined
      : { index: false, follow: true, googleBot: { index: false, follow: true } },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const aeo = getAeoPostBySlug(slug);
  if (aeo) {
    const c = resolveAeoContent(aeo, locale === "ru" ? "ru" : locale === "en" ? "en" : "uz");
    const siteUrl = getSiteUrl();
    return {
      title: c.metaTitle,
      description: c.metaDescription,
      keywords: [siteConfig.name, "Telegram", aeo.category, ...aeo.keywords],
      ...blogAlternatesAndRobots(slug, locale),
      openGraph: {
        type: "article",
        publishedTime: aeo.datePublished,
        modifiedTime: aeo.dateModified,
        locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ",
        title: `${c.title} — ${siteConfig.name}`,
        description: c.metaDescription,
        url: `${siteUrl}/${locale}/blog/${slug}`,
      },
    };
  }

  const post = getPostBySlug(slug);
  if (!post) return { title: "404" };

  const ui = localizeBlogPost(post);
  const siteUrl = getSiteUrl();

  return {
    title: ui.title,
    description: ui.excerpt,
    keywords: [
      siteConfig.name,
      "Telegram",
      "Mini App",
      "Telegram Stars",
      "Telegram Premium",
      "Telegram Gifts",
      "UzCard",
      "HUMO",
      post.category,
      ...(post.seoKeywords ?? []),
    ],
    ...blogAlternatesAndRobots(slug, locale),
    openGraph: {
      type: "article",
      publishedTime: post.datePublished,
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ",
      title: `${ui.title} — ${siteConfig.name}`,
      description: ui.excerpt,
      url: `${siteUrl}/${locale}/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const aeoPost = getAeoPostBySlug(slug);
  if (aeoPost) {
    const related = getRelatedSummaries(locale, slug, aeoPost.category, 3).map((r) => ({
      slug: r.slug,
      title: r.title,
      excerpt: r.excerpt,
    }));
    return <AeoArticle post={aeoPost} locale={locale} related={related} />;
  }

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const copy = localizeBlogPost(post);
  const base = getSiteUrl();
  const url = `${base}/${locale}/blog/${post.slug}`;
  const telegramBotUrl = getTelegramBotUrl();

  const t = await getTranslations("v2");
  const tc = await getTranslations("categories");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: copy.title,
    description: copy.excerpt,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: locale,
    author: { "@type": "Organization", name: siteConfig.name, url: base },
    publisher: { "@type": "Organization", name: siteConfig.name, url: base },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.category, "Telegram", siteConfig.name, ...(post.seoKeywords ?? [])].join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("blogHome"), item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("blogTitle"), item: `${base}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: copy.title, item: url },
    ],
  };

  return (
    <section className="sec v2-blog-page">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />

      <article
        className="wrap"
        style={{ maxWidth: 820 }}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="headline" content={copy.title} />
        <meta itemProp="datePublished" content={post.datePublished} />

        <nav
          aria-label="Breadcrumb"
          className="rv"
          style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", fontSize: 13.5, color: "var(--muted)" }}
        >
          <Link href="/">{t("blogHome")}</Link>
          <span>/</span>
          <Link href="/blog">{t("blogTitle")}</Link>
          <span>/</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{copy.title}</span>
        </nav>

        <header className="rv" style={{ marginTop: 30 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <span className="btag">{tc(post.category as BlogCategory)}</span>
            <time
              dateTime={post.datePublished}
              style={{ fontFamily: "var(--mono2)", fontSize: 12, color: "var(--muted)" }}
              itemProp="datePublished"
            >
              {post.datePublished}
            </time>
          </div>
          <h1
            style={{
              fontFamily: "var(--disp)",
              fontWeight: 800,
              fontSize: "clamp(1.9rem,4vw,2.8rem)",
              lineHeight: 1.15,
              letterSpacing: "-.01em",
              marginTop: 22,
            }}
          >
            {copy.title}
          </h1>
          <p className="sec-sub" itemProp="description" style={{ marginTop: 18 }}>
            {copy.excerpt}
          </p>
        </header>

        <div className="prose-v2 rv" style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 22 }}>
          {copy.paragraphs.map((p, i) => (
            <p key={i} itemProp="articleBody">
              {p}
            </p>
          ))}
        </div>

        <section
          className="rv"
          style={{
            marginTop: 48,
            borderRadius: 24,
            border: "1px solid var(--line)",
            background: "rgba(217,70,239,.05)",
            padding: "30px 28px",
          }}
        >
          <h2 className="h3" style={{ fontFamily: "var(--disp)", fontWeight: 700, fontSize: 19 }}>
            {t("blogTryTitle")}
          </h2>
          <p style={{ marginTop: 8, color: "var(--muted)", fontSize: 14.5 }}>{t("blogTryBody")}</p>
          <a
            className="btn btn-grad mag"
            data-cta="article" href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 20 }}
          >
            <TelegramIcon />
            {t("openBot")}
          </a>
        </section>

        <footer style={{ marginTop: 48, borderTop: "1px solid var(--line)", paddingTop: 34 }}>
          <Link href="/blog" className="prod-link" style={{ color: "var(--fuch)" }}>
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
            {t("blogBack")}
          </Link>
        </footer>
      </article>
    </section>
  );
}
