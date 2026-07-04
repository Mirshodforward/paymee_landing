import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { AnswerBox, BlogFaq } from "@/components/blog/aeo-blocks";
import { ArrowIcon, TelegramIcon } from "@/components/v2/icons";
import { getSiteUrl, getTelegramBotUrl, siteConfig } from "@/lib/site";
import type { AeoPost, AeoUiLocale } from "@/lib/blog-aeo/types";
import { resolveAeoContent } from "@/lib/blog-aeo/types";
import { getAeoUi } from "@/lib/blog-aeo/ui";
import type { BlogCategory } from "@/lib/blog-posts";

export type RelatedItem = { slug: string; title: string; excerpt: string };

function toUiLocale(locale: string): AeoUiLocale {
  return locale === "ru" ? "ru" : locale === "en" ? "en" : "uz";
}

export async function AeoArticle({
  post,
  locale,
  related,
}: {
  post: AeoPost;
  locale: string;
  related: RelatedItem[];
}) {
  const ui = toUiLocale(locale);
  const c = resolveAeoContent(post, ui);
  const labels = getAeoUi(ui);
  const base = getSiteUrl();
  const url = `${base}/${locale}/blog/${post.slug}`;
  const botUrl = getTelegramBotUrl();
  const tc = await getTranslations("categories");

  const Body = c.Body;
  const Answer = c.Answer;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.title,
    description: c.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ",
    author: { "@type": "Organization", name: siteConfig.name, url: base },
    publisher: { "@type": "Organization", name: siteConfig.name, url: base, logo: `${base}/logo-512.png` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.category, "Telegram", siteConfig.name, ...post.keywords].join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: labels.home, item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: labels.blog, item: `${base}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: c.title, item: url },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "ru" ? "ru-RU" : locale === "en" ? "en-US" : "uz-UZ",
    mainEntity: c.faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  const howToLd =
    post.howToSteps && post.howToSteps.length
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: c.title,
          description: c.metaDescription,
          step: post.howToSteps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }
      : null;

  return (
    <section className="sec v2-blog-page">
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={faqLd} />
      {howToLd ? <JsonLd data={howToLd} /> : null}

      <article
        className="wrap"
        style={{ maxWidth: 820 }}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="headline" content={c.title} />
        <meta itemProp="datePublished" content={post.datePublished} />
        <meta itemProp="dateModified" content={post.dateModified} />

        <nav
          aria-label="Breadcrumb"
          className="rv"
          style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", fontSize: 13.5, color: "var(--muted)" }}
        >
          <Link href="/">{labels.home}</Link>
          <span>/</span>
          <Link href="/blog">{labels.blog}</Link>
          <span>/</span>
          <span style={{ color: "var(--text)", fontWeight: 600 }}>{c.title}</span>
        </nav>

        <header className="rv" style={{ marginTop: 30 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
            <span className="btag">{tc(post.category as BlogCategory)}</span>
            <time
              dateTime={post.datePublished}
              style={{ fontFamily: "var(--mono2)", fontSize: 12, color: "var(--muted)" }}
            >
              {labels.published}: {post.datePublished}
            </time>
            {post.dateModified !== post.datePublished ? (
              <span style={{ fontFamily: "var(--mono2)", fontSize: 12, color: "var(--muted)" }}>
                · {labels.updated}: {post.dateModified}
              </span>
            ) : null}
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
            {c.title}
          </h1>
          <p className="sec-sub" style={{ marginTop: 18 }}>
            {c.excerpt}
          </p>
        </header>

        <div style={{ marginTop: 26 }}>
          <AnswerBox label={c.answerTitle}>
            <Answer />
          </AnswerBox>
        </div>

        <div className="prose-v2 rv" style={{ marginTop: 30 }}>
          <Body />
        </div>

        <BlogFaq heading={labels.faqHeading} items={c.faq} />

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
          <h2 className="h3" style={{ fontFamily: "var(--disp)", fontWeight: 700, fontSize: 21 }}>
            {c.ctaHeading}
          </h2>
          <p style={{ marginTop: 8, color: "var(--muted)", fontSize: 14.5 }}>{c.ctaBody}</p>
          <a
            className="btn btn-grad mag"
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 20 }}
          >
            <TelegramIcon />
            {labels.openBot}
          </a>
        </section>

        {related.length > 0 ? (
          <section className="rv" style={{ marginTop: 48 }} aria-labelledby="aeo-related">
            <h2 id="aeo-related" className="h3" style={{ fontFamily: "var(--disp)", fontWeight: 700, fontSize: 19, marginBottom: 16 }}>
              {labels.relatedHeading}
            </h2>
            <ul style={{ listStyle: "none", display: "grid", gap: 14, padding: 0, gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
              {related.map((r, i) => (
                <li key={r.slug} style={{ height: "100%" }}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="bcard spot"
                    style={{ "--d": `${Math.min(i, 4) * 0.05}s` } as CSSProperties}
                  >
                    <h3 className="h3" style={{ fontFamily: "var(--disp)", fontWeight: 700, fontSize: 16.5, lineHeight: 1.3, marginBottom: 8 }}>
                      {r.title}
                    </h3>
                    <p style={{ flex: 1, color: "var(--muted)", fontSize: 13.5, lineHeight: 1.55 }}>{r.excerpt}</p>
                    <span className="prod-link" style={{ color: "var(--fuch)", marginTop: 14 }}>
                      {labels.read} <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <footer style={{ marginTop: 48, borderTop: "1px solid var(--line)", paddingTop: 34 }}>
          <Link href="/blog" className="prod-link" style={{ color: "var(--fuch)" }}>
            <ArrowIcon style={{ transform: "rotate(180deg)" }} />
            {labels.back}
          </Link>
        </footer>
      </article>
    </section>
  );
}
