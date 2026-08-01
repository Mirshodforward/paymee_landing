import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
import { telegramGrowthSeriesSlugs } from "@/lib/blog-aeo/growth-series";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import { starsPremiumSeriesSlugs } from "@/lib/blog-aeo/stars-premium-series";
import { steamSeriesSlugs } from "@/lib/blog-aeo/steam-series";
import type { BlogSlugInfo, BlogSummary } from "@/lib/blog/all";
import { getSiteUrl } from "@/lib/site";

/** Oxirgi 90 kun — sitemapda yuqoriroq priority. */
const RECENT_DAYS = 90;

export const NEW_BLOG_SERIES_SLUGS = [
  ...telegramGrowthSeriesSlugs,
  ...nftGiftSeriesSlugs,
  ...boostSeriesSlugs,
  ...steamSeriesSlugs,
  ...starsPremiumSeriesSlugs,
] as const;

/**
 * Kalit so‘zga to‘g‘ridan-to‘g‘ri mos keluvchi «pillar» sahifalar — qidiruv
 * so‘rovi bilan URL bir xil bo‘lgani uchun sitemapda eng yuqori priority.
 */
const PILLAR_BLOG_SLUGS: readonly string[] = starsPremiumSeriesSlugs;

export function isRecentBlogPost(dateModified: string, now = new Date()): boolean {
  const d = new Date(dateModified);
  if (Number.isNaN(d.getTime())) return false;
  const diff = now.getTime() - d.getTime();
  return diff >= 0 && diff <= RECENT_DAYS * 24 * 60 * 60 * 1000;
}

export function sitemapPriorityForBlog(p: BlogSlugInfo): number {
  if (PILLAR_BLOG_SLUGS.includes(p.slug)) return 0.85;
  if (isRecentBlogPost(p.dateModified)) return 0.82;
  if ((NEW_BLOG_SERIES_SLUGS as readonly string[]).includes(p.slug)) return 0.8;
  return 0.7;
}

export function sitemapChangeFreqForBlog(p: BlogSlugInfo): "weekly" | "monthly" {
  if (PILLAR_BLOG_SLUGS.includes(p.slug)) return "weekly";
  return isRecentBlogPost(p.dateModified) ? "weekly" : "monthly";
}

export function blogUrl(locale: string, slug: string): string {
  return `${getSiteUrl()}/${locale}/blog/${slug}`;
}

export function formatLlmsLine(locale: string, post: BlogSummary): string {
  return `- ${post.title}: ${blogUrl(locale, post.slug)} — ${post.excerpt.replace(/\s+/g, " ").slice(0, 200)}`;
}
