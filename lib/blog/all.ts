import { blogPosts, type BlogCategory } from "@/lib/blog-posts";
import { aeoPosts, getAeoPostBySlug } from "@/lib/blog-aeo";
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

/**
 * Maqolaning shu til uchun HAQIQIY tarjimasi bormi.
 *
 * AEO maqolalarda `locales.en` ixtiyoriy — bo‘lmasa `resolveAeoContent`
 * jimgina o‘zbekchaga qaytadi. Eski «flat» maqolalar esa umuman tarjima
 * qilinmagan: `localizeBlogPost` uchala til uchun ham bitta matn qaytaradi.
 * Ikkala holatda ham natija — boshqa til nomi ostidagi o‘zbekcha nusxa, ya’ni
 * qidiruv tizimlari uchun dublikat. Shuning uchun bunday sahifalar ro‘yxatlarga
 * ham, sitemapga ham tushmaydi va `noindex` oladi.
 */
export function hasTranslation(slug: string, locale: string): boolean {
  const aeo = getAeoPostBySlug(slug);
  if (aeo) return Boolean(aeo.locales[uiLoc(locale)]);
  return uiLoc(locale) === "uz";
}

function byDateDesc(a: { datePublished: string }, b: { datePublished: string }): number {
  return a.datePublished < b.datePublished ? 1 : a.datePublished > b.datePublished ? -1 : 0;
}

/** Berilgan til uchun barcha bloglarning ro‘yxat kartochkasi ma’lumoti. */
export function getBlogSummaries(locale: string): BlogSummary[] {
  const ui = uiLoc(locale);
  // Tarjimasi yo‘q maqolalar shu til ro‘yxatida ko‘rinmaydi.
  const flat: BlogSummary[] = (ui === "uz" ? blogPosts : []).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    datePublished: p.datePublished,
    dateModified: p.datePublished,
    source: "flat",
  }));
  const aeo: BlogSummary[] = aeoPosts.filter((p) => Boolean(p.locales[ui])).map((p) => {
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

/** Shu tilda o‘qish mumkin bo‘lgan maqolalar soni. */
export function getBlogCount(locale = "uz"): number {
  return getBlogSummaries(locale).length;
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


/**
 * Bosh sahifadagi «mashhur qo‘llanmalar» bloki uchun tanlangan maqolalar.
 *
 * Ilgari bosh sahifada blogga atigi 2 ta havola bor edi, ya’ni 183 ta maqola
 * saytdagi eng nufuzli sahifadan deyarli hech qanday ichki link olmasdi.
 * Ro‘yxat tijoriy qidiruv niyati bo‘yicha qo‘lda tanlangan; tarjimasi yo‘q
 * maqolalar avtomatik tushib qoladi, shuning uchun har uchala tilda ishlaydi.
 */
const FEATURED_SLUGS = [
  "telegram-stars-qayerdan-sotib-olish-2026",
  "telegram-premium-narxi-ozbekistonda-2026",
  "telegram-stars-necha-som-kalkulyator",
  "telegram-stars-kartasiz-sotib-olish",
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegram-stars-narxlari-2026-platformalar-taqqoslash",
  "telegram-premium-sotib-olish-2026",
  "telegram-stars-xavfsizmi",
  "telegram-gifts-narxlari-royxati",
  "visa-kartasiz-stars-olish",
] as const;

export function getFeaturedSummaries(locale: string, limit = 8): BlogSummary[] {
  const bySlug = new Map(getBlogSummaries(locale).map((s) => [s.slug, s]));
  return FEATURED_SLUGS.map((slug) => bySlug.get(slug))
    .filter((s): s is BlogSummary => Boolean(s))
    .slice(0, limit);
}

export type BlogSlugInfo = { slug: string; datePublished: string; dateModified: string };

/** Sitemap uchun: shu tilda haqiqiy tarkibi bor maqolalar. */
export function blogSlugInfosForLocale(locale: string): BlogSlugInfo[] {
  return allBlogSlugInfos().filter((p) => hasTranslation(p.slug, locale));
}

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
