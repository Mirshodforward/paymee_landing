import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { blogCategories, blogPosts, getPostsByCategory, type BlogCategory } from "@/lib/blog-posts";
import { getSiteUrl, siteConfig } from "@/lib/site";

const categoryLabels: Record<BlogCategory, string> = {
  Stars: "Stars",
  Premium: "Premium",
  Gifts: "Gifts",
  Biznes: "Biznes",
  Telegram: "Telegram",
  Xavfsizlik: "Xavfsizlik",
};

function normalizeCat(cat: string | undefined): BlogCategory | "hammasi" {
  if (!cat) return "hammasi";
  if (blogCategories.includes(cat as BlogCategory)) return cat as BlogCategory;
  return "hammasi";
}

const blogPageDescription =
  "Telegram Stars, Premium va Gifts haqida foydali maqolalar — StarsPaymee jamoasi tahriri. O‘zbekiston foydalanuvchilari uchun qo‘llanmalar va biznes tushunchalari.";

export const metadata: Metadata = {
  title: "Blog",
  description: blogPageDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${siteConfig.name}`,
    description:
      "Telegram Stars, Premium va Gifts haqida foydali maqolalar — qo‘llanmalar, taqqoslashlar va xavfsizlik maslahatlari.",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ cat?: string }>;
}) {
  const resolved = await searchParams;
  const active = normalizeCat(resolved?.cat);
  const listed = getPostsByCategory(active);
  const base = getSiteUrl();

  const blogIndexLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${base}/blog`,
    name: `${siteConfig.name} blogi`,
    description: blogPageDescription,
    url: `${base}/blog`,
    blogPost: listed.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${base}/blog/${post.slug}`,
      datePublished: post.datePublished,
    })),
  };

  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:pb-28">
      <JsonLd data={blogIndexLd} />
      <nav aria-label="Yo‘lak" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
        <Link href="/" className="transition hover:text-[#229ED9]">
          Bosh sahifa
        </Link>
        <span aria-hidden className="text-slate-400">
          /
        </span>
        <span className="font-medium text-slate-900 dark:text-white">Blog</span>
      </nav>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Blog</h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Telegram Stars, Premium va Gifts haqida yangiliklar va qo‘llanmalar — O‘zbekistonda kartadan toʻlovlar,
          reseller va xavfsizlik mavzulari.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Turkum">
        <FilterPill active={active === "hammasi"} href="/blog">
          Hammasi
        </FilterPill>
        {blogCategories.map((c) => (
          <FilterPill key={c} active={active === c} href={`/blog?cat=${encodeURIComponent(c)}`}>
            {categoryLabels[c]}
          </FilterPill>
        ))}
      </div>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {listed.map((post) => (
          <li key={post.slug} className="h-full">
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#229ED9]/35 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/55 dark:hover:border-[#229ED9]/35"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="rounded-full bg-sky-100 px-3 py-0.5 font-semibold uppercase tracking-wide text-sky-800 dark:bg-sky-950/70 dark:text-sky-300">
                  {categoryLabels[post.category]}
                </span>
                <time dateTime={post.datePublished} className="text-slate-500 dark:text-slate-400">
                  {post.datePublished}
                </time>
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900 group-hover:text-[#229ED9] dark:text-white dark:group-hover:text-[#229ED9]">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
              <p className="mt-5 font-semibold text-[#229ED9] dark:text-[#229ED9]">
                O‘qish{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-500">
        Jami {blogPosts.length} ta maqola · Yangilanishi doimiy
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
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      role="tab"
      aria-selected={active}
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
