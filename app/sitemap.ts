import type { MetadataRoute } from "next";
import { allBlogSlugInfos } from "@/lib/blog/all";
import { sitemapChangeFreqForBlog, sitemapPriorityForBlog } from "@/lib/seo/blog-discoverability";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const out: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    out.push({
      url: `${base}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
    out.push({
      url: `${base}/${locale}/stars`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/premium`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/gifts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    });
    out.push({
      url: `${base}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
    out.push({
      url: `${base}/${locale}/business`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    out.push({
      url: `${base}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.88,
    });
    for (const p of allBlogSlugInfos()) {
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
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.75,
    },
    {
      url: `${base}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.72,
    },
  );

  return out;
}
