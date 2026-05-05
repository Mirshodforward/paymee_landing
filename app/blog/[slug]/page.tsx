import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getPostBySlug, type BlogCategory } from "@/lib/blog-posts";
import { getSiteUrl, getTelegramBotUrl, siteConfig } from "@/lib/site";

const categoryBadge: Record<BlogCategory, string> = {
  Stars: "Stars",
  Premium: "Premium",
  Gifts: "Gifts",
  Biznes: "Biznes",
  Telegram: "Telegram",
  Xavfsizlik: "Xavfsizlik",
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Maqola topilmadi" };

  const title = post.title;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.datePublished,
      title: `${title} — ${siteConfig.name}`,
      description: post.excerpt,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const base = getSiteUrl();
  const url = `${base}/blog/${post.slug}`;
  const telegramBotUrl = getTelegramBotUrl();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: { "@type": "Organization", name: siteConfig.name, url: base },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: base,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.category, "Telegram", "StarsPaymee", "O‘zbekiston"].join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: base },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd} />

      <article className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="datePublished" content={post.datePublished} />

        <nav aria-label="Yo‘lak" className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-[#229ED9]">
            Bosh sahifa
          </Link>
          <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />
          <Link href="/blog" className="hover:text-[#229ED9]">
            Blog
          </Link>
          <ChevronRight className="size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />
          <span className="line-clamp-2 font-medium text-slate-800 dark:text-slate-200">{post.title}</span>
        </nav>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <span className="rounded-full bg-sky-100 px-3 py-0.5 font-semibold uppercase tracking-wide text-sky-800 dark:bg-sky-950/70 dark:text-sky-300">
              {categoryBadge[post.category]}
            </span>
            <time dateTime={post.datePublished} className="text-slate-500 dark:text-slate-400" itemProp="datePublished">
              {post.datePublished}
            </time>
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400" itemProp="description">
            {post.excerpt}
          </p>
        </header>

        <div className="prose-blog mt-12 space-y-6 text-[1.05rem] leading-[1.75] text-slate-700 dark:text-slate-300">
          {post.paragraphs.map((p, i) => (
            <p key={i} itemProp="articleBody">
              {p}
            </p>
          ))}
        </div>

        <section
          className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white px-6 py-8 dark:border-slate-800 dark:from-slate-900/70 dark:to-slate-900"
          aria-label="StarsPaymee Mini App"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Amaliyotda sinab ko‘ring</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            StarsPaymee Mini App orqali Stars, Premium va Gifts bo‘yicha buyurtmani bir joyda yarating va statusni kuzating.
          </p>
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e8dc4]"
          >
            Mini App ochish
            <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
          </a>
        </section>

        <footer className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#229ED9] hover:text-[#1e8dc4] dark:text-[#229ED9]"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden strokeWidth={2} />
            Barcha maqolalar
          </Link>
        </footer>
      </article>
    </>
  );
}
