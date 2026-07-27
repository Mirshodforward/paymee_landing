import { blogPosts, type BlogCategory } from "@/lib/blog-posts";
import { aeoPosts } from "@/lib/blog-aeo";
import { telegramGrowthSeriesSlugs } from "@/lib/blog-aeo/growth-series";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
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

/** SEO seriyasi: telegram raqam + 9 ta bog‘liq mavzu (tartib saqlanadi). */
export function getGrowthSeriesSummaries(locale: string): BlogSummary[] {
  const all = getBlogSummaries(locale);
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  return telegramGrowthSeriesSlugs.map((slug) => bySlug.get(slug)).filter((s): s is BlogSummary => Boolean(s));
}

/** NFT Gift / Gift Market SEO seriyasi (10 ta). */
export function getNftGiftSeriesSummaries(locale: string): BlogSummary[] {
  const all = getBlogSummaries(locale);
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  return nftGiftSeriesSlugs.map((slug) => bySlug.get(slug)).filter((s): s is BlogSummary => Boolean(s));
}

/** Boost Market SEO seriyasi (10 ta). */
export function getBoostSeriesSummaries(locale: string): BlogSummary[] {
  const all = getBlogSummaries(locale);
  const bySlug = new Map(all.map((s) => [s.slug, s]));
  return boostSeriesSlugs.map((slug) => bySlug.get(slug)).filter((s): s is BlogSummary => Boolean(s));
}

/** O‘xshash maqolalar: avval bir xil kategoriya, keyin eng yangilari. */
export function getRelatedSummaries(locale: string, slug: string, category: BlogCategory, limit = 3): BlogSummary[] {
  const all = getBlogSummaries(locale).filter((s) => s.slug !== slug);
  const sameCat = all.filter((s) => s.category === category);
  const rest = all.filter((s) => s.category !== category);
  return [...sameCat, ...rest].slice(0, limit);
}

export type BlogSlugInfo = { slug: string; datePublished: string; dateModified: string };

/** Sitemap va static params uchun barcha bloglarning slug + sana ma’lumoti (AEO ustun). */
export function allBlogSlugInfos(): BlogSlugInfo[] {
  const map = new Map<string, BlogSlugInfo>();
  for (const p of aeoPosts) {
    map.set(p.slug, {
      slug: p.slug,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    });
  }
  for (const p of blogPosts) {
    if (!map.has(p.slug)) {
      map.set(p.slug, {
        slug: p.slug,
        datePublished: p.datePublished,
        dateModified: p.datePublished,
      });
    }
  }
  return [...map.values()];
}

/** RSS / llms.txt uchun eng yangi N ta maqola. */
export function getRecentBlogSummaries(locale: string, limit: number): BlogSummary[] {
  return getBlogSummaries(locale).slice(0, limit);
}
