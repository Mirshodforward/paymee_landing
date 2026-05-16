import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  ChevronRight,
  Gem,
  Gift,
  Send,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategories, blogPosts, getPostsByCategory, type BlogCategory } from "@/lib/blog-posts";
import { routing } from "@/i18n/routing";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

function normalizeCat(cat: string | undefined): BlogCategory | "hammasi" {
  if (!cat) return "hammasi";
  if (blogCategories.includes(cat as BlogCategory)) return cat as BlogCategory;
  return "hammasi";
}

const categoryBlogIcons: Record<BlogCategory, LucideIcon> = {
  Stars: Star,
  Premium: Gem,
  Gifts: Gift,
  Biznes: BriefcaseBusiness,
  Telegram: Send,
  Xavfsizlik: Shield,
};

const categoryBlogIconWrap: Record<BlogCategory, string> = {
  Stars: "bg-amber-500/[0.14] text-amber-600 ring-amber-600/15 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-400/20",
  Premium: "bg-violet-500/[0.14] text-violet-600 ring-violet-600/15 dark:bg-violet-500/15 dark:text-violet-400 dark:ring-violet-400/20",
  Gifts: "bg-fuchsia-500/[0.14] text-fuchsia-600 ring-fuchsia-600/15 dark:bg-fuchsia-500/15 dark:text-fuchsia-400 dark:ring-fuchsia-400/20",
  Biznes: "bg-slate-500/[0.12] text-slate-600 ring-slate-500/15 dark:bg-slate-400 dark:ring-slate-400/25",
  Telegram: "bg-[#229ED9]/15 text-[#229ED9] ring-[#229ED9]/25",
  Xavfsizlik:
    "bg-emerald-500/[0.14] text-emerald-600 ring-emerald-600/15 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-400/20",
};

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ cat?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogIndex" });
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const siteUrl = getSiteUrl();
  const title = t("title");
  const desc = t("subtitle");

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
  const listed = getPostsByCategory(active);
  const base = getSiteUrl();

  const t = await getTranslations("blogIndex");
  const tc = await getTranslations("categories");

  const blogIndexLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}/${locale}/blog`,
    name: `${siteConfig.name} — ${t("title")}`,
    description: t("subtitle"),
    url: `${base}/${locale}/blog`,
    inLanguage: locale,
    blogPost: listed.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${base}/${locale}/blog/${post.slug}`,
      datePublished: post.datePublished,
    })),
  };

  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:pb-28">
      <JsonLd data={blogIndexLd} />
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400"
      >
        <Link href="/" className="transition hover:text-[#229ED9]">
          {t("breadcrumbHome")}
        </Link>
        <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />
        <span className="font-medium text-slate-900 dark:text-white">{t("title")}</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="flex flex-wrap items-center gap-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          <span className="flex size-11 items-center justify-center rounded-xl bg-[#229ED9]/15 text-[#229ED9] dark:bg-[#229ED9]/20">
            <BookOpenText className="size-6" strokeWidth={2} aria-hidden />
          </span>
          {t("title")}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{t("subtitle")}</p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label={t("filterAria")}>
        <FilterPill active={active === "hammasi"} href="/blog">
          {t("filterAll")}
        </FilterPill>
        {blogCategories.map((c) => (
          <FilterPill key={c} active={active === c} href={`/blog?cat=${encodeURIComponent(c)}`}>
            {tc(c)}
          </FilterPill>
        ))}
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {listed.map((post) => {
          const Icon = categoryBlogIcons[post.category];
          const iconWrap = categoryBlogIconWrap[post.category];
          return (
          <li key={post.slug} className="h-full">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#229ED9]/35 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/55 dark:hover:border-[#229ED9]/35"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="rounded-full bg-sky-100 px-3 py-0.5 font-semibold uppercase tracking-wide text-sky-800 dark:bg-sky-950/70 dark:text-sky-300">
                  {tc(post.category)}
                </span>
                <time dateTime={post.datePublished} className="text-slate-500 dark:text-slate-400">
                  {post.datePublished}
                </time>
              </div>
              <h2 className="mt-4 flex items-start gap-3 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-[#229ED9] dark:text-white dark:group-hover:text-[#229ED9]">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 dark:ring-white/[0.08] ${iconWrap}`}
                  aria-hidden
                >
                  <Icon className="size-[1.35rem]" strokeWidth={2} />
                </span>
                <span className="min-w-0 flex-1 leading-snug">{post.title}</span>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
              <p className="mt-5 flex items-center gap-1.5 font-semibold text-[#229ED9] dark:text-[#229ED9]">
                {t("read")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden strokeWidth={2} />
              </p>
            </Link>
          </li>
          );
        })}
      </ul>

      <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-500">
        {t("totalPostsSuffix", { count: blogPosts.length })} · {t("footerNote")}
      </p>
    </main>
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
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-[#229ED9] bg-[#229ED9] text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600"
      }`}
    >
      {children}
    </Link>
  );
}
