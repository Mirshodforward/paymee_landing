import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
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
      url: `${base}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
    for (const p of blogPosts) {
      out.push({
        url: `${base}/${locale}/blog/${p.slug}`,
        lastModified: new Date(p.datePublished),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return out;
}
