import { getBlogSummaries } from "@/lib/blog/all";
import { getSiteUrl, siteConfig } from "@/lib/site";

/**
 * RSS 2.0 feed — blog maqolalari (o‘zbekcha, asosiy til).
 * Manzil: https://starstg.uz/rss.xml
 * AEO/qidiruv va kontent-agregatorlar uchun qo‘shimcha kanal.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

const LOCALE = "uz";
const MAX_ITEMS = 50;

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  const base = getSiteUrl();
  const feedUrl = `${base}/rss.xml`;
  const blogUrl = `${base}/${LOCALE}/blog`;

  const posts = getBlogSummaries(LOCALE).slice(0, MAX_ITEMS);

  const items = posts
    .map((p) => {
      const link = `${base}/${LOCALE}/blog/${p.slug}`;
      const pubDate = new Date(p.datePublished).toUTCString();
      return [
        "    <item>",
        `      <title>${escapeXml(p.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <description>${escapeXml(p.excerpt)}</description>`,
        `      <category>${escapeXml(p.category)}</category>`,
        `      <pubDate>${pubDate}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Blog</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(siteConfig.name)}: Telegram Stars, Premium va Gifts bo‘yicha qo‘llanmalar va yangiliklar.</description>
    <language>${LOCALE}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
