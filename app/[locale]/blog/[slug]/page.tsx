import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getPostBySlug, type BlogCategory } from "@/lib/blog-posts";
import { routing } from "@/i18n/routing";
import { getSiteUrl, getTelegramBotUrl, siteConfig } from "@/lib/site";
import { localizeBlogPost } from "@/lib/blog-i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
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
    ],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteUrl}/${l}/blog/${slug}`]),
      ),
    },
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

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const copy = localizeBlogPost(post);
  const base = getSiteUrl();
  const url = `${base}/${locale}/blog/${post.slug}`;
  const telegramBotUrl = getTelegramBotUrl();

  const tblog = await getTranslations("blogIndex");
  const tArt = await getTranslations("blogArticle");
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
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: base,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.category, "Telegram", siteConfig.name].join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tblog("breadcrumbHome"), item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: tblog("title"), item: `${base}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: copy.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />

      <article
        className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="headline" content={copy.title} />
        <meta itemProp="datePublished" content={post.datePublished} />

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400"
        >
          <Link href="/" className="hover:text-[#229ED9]">
            {tblog("breadcrumbHome")}
          </Link>
          <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />
          <Link href="/blog" className="hover:text-[#229ED9]">
            {tblog("title")}
          </Link>
          <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />
          <span className="line-clamp-2 font-medium text-slate-800 dark:text-slate-200">{copy.title}</span>
        </nav>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <span className="rounded-full bg-sky-100 px-3 py-0.5 font-semibold uppercase tracking-wide text-sky-800 dark:bg-sky-950/70 dark:text-sky-300">
              {tc(post.category as BlogCategory)}
            </span>
            <time
              dateTime={post.datePublished}
              className="text-slate-500 dark:text-slate-400"
              itemProp="datePublished"
            >
              {post.datePublished}
            </time>
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {copy.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400" itemProp="description">
            {copy.excerpt}
          </p>
        </header>

        <div className="prose-blog mt-12 space-y-6 text-[1.05rem] leading-[1.75] text-slate-700 dark:text-slate-300">
          {copy.paragraphs.map((p, i) => (
            <p key={i} itemProp="articleBody">
              {p}
            </p>
          ))}
        </div>

        <section
          className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white px-6 py-8 dark:border-slate-800 dark:from-slate-900/70 dark:to-slate-900"
          aria-label={siteConfig.name}
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{tArt("tryTitle")}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tArt("tryBody")}</p>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e8dc4]"
          >
            {tArt("openMiniApp")}
            <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </section>

        <footer className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#229ED9] hover:text-[#1e8dc4] dark:text-[#229ED9]"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden strokeWidth={2} />
            {tArt("backList")}
          </Link>
        </footer>
      </article>
    </>
  );
}
