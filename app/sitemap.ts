import type { MetadataRoute } from "next";
import { blogSlugInfosForLocale } from "@/lib/blog/all";
import { sitemapChangeFreqForBlog, sitemapPriorityForBlog } from "@/lib/seo/blog-discoverability";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

/**
 * Statik sahifalarning oxirgi jiddiy o‘zgarish sanasi. `new Date()` ishlatilsa
 * har bir buildda «hozir» deb ko‘rsatiladi va Google `lastmod` ga ishonishni
 * to‘xtatadi — shuning uchun qo‘lda boshqariladi.
 */
const LANDING_LAST_MODIFIED = new Date("2026-08-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const out: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    out.push({
      url: `${base}/${locale}`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    });
    out.push({
      url: `${base}/${locale}/stars`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/premium`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/gifts`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/about`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    });
    out.push({
      url: `${base}/${locale}/business`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    });
    out.push({
      url: `${base}/${locale}/blog`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 0.88,
    });
    // Faqat shu tilda haqiqiy tarkibi bor maqolalar — tarjimasizlari
    // `noindex` oladi va sitemapga tushmaydi (dublikat kontentning oldini olish).
    for (const p of blogSlugInfosForLocale(locale)) {
      out.push({
        url: `${base}/${locale}/blog/${p.slug}`,
        lastModified: new Date(p.dateModified),
        changeFrequency: sitemapChangeFreqForBlog(p),
        priority: sitemapPriorityForBlog(p),
      });
    }
  }

  out.push(
    {
      url: `${base}/rss.xml`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "daily",
      priority: 0.75,
    },
    {
      url: `${base}/llms.txt`,
      lastModified: LANDING_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.72,
    },
  );

  return out;
}
