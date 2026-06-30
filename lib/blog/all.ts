import { blogPosts, type BlogCategory } from "@/lib/blog-posts";
import { aeoPosts } from "@/lib/blog-aeo";
import { resolveAeoContent, type AeoUiLocale } from "@/lib/blog-aeo/types";

/**
 * Eski «flat» bloglar va yangi AEO maqolalarini birlashtiruvchi qatlam.
 * Blog ro‘yxati, sitemap va static params shu yerdan oziqlanadi.
 */
export type BlogSummary = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  datePublished: string;
  dateModified: string;
  source: "flat" | "aeo";
};

function uiLoc(locale: string): AeoUiLocale {
  return locale === "ru" ? "ru" : locale === "en" ? "en" : "uz";
}

function byDateDesc(a: { datePublished: string }, b: { datePublished: string }): number {
  return a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0;
}

/** Berilgan til uchun barcha bloglarning ro‘yxat kartochkasi ma’lumoti. */
export function getBlogSummaries(locale: string): BlogSummary[] {
  const ui = uiLoc(locale);
  const flat: BlogSummary[] = blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    datePublished: p.datePublished,
    dateModified: p.datePublished,
    source: "flat",
  }));
  const aeo: BlogSummary[] = aeoPosts.map((p) => {
    const c = resolveAeoContent(p, ui);
    return {
      slug: p.slug,
      title: c.title,
      excerpt: c.excerpt,
      category: p.category,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
      source: "aeo",
    };
  });
  // AEO maqolalar avval — ular yangiroq va boyroq; keyin sana bo‘yicha umumiy tartib.
  return [...aeo, ...flat].sort(byDateDesc);
}

export function getBlogSummariesByCategory(
  locale: string,
  cat: BlogCategory | "hammasi",
): BlogSummary[] {
  const all = getBlogSummaries(locale);
  if (cat === "hammasi") return all;
  return all.filter((s) => s.category === cat);
}

export function getBlogCount(): number {
  return aeoPosts.length + blogPosts.length;
}

/** O‘xshash maqolalar: avval bir xil kategoriya, keyin eng yangilari. */
export function getRelatedSummaries(locale: string, slug: string, category: BlogCategory, limit = 3): BlogSummary[] {
  const all = getBlogSummaries(locale).filter((s) => s.slug !== slug);
  const sameCat = all.filter((s) => s.category === category);
  const rest = all.filter((s) => s.category !== category);
  return [...sameCat, ...rest].slice(0, limit);
}

export type BlogSlugInfo = { slug: string; datePublished: string; dateModified: string };

/** Sitemap va static params uchun barcha bloglarning slug + sana ma’lumoti. */
export function allBlogSlugInfos(): BlogSlugInfo[] {
  return [
    ...aeoPosts.map((p) => ({ slug: p.slug, datePublished: p.datePublished, dateModified: p.dateModified })),
    ...blogPosts.map((p) => ({ slug: p.slug, datePublished: p.datePublished, dateModified: p.datePublished })),
  ];
}
