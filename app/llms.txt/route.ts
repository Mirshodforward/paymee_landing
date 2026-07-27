import { getBlogSummaries, getBlogCount } from "@/lib/blog/all";
import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
import { telegramGrowthSeriesSlugs } from "@/lib/blog-aeo/growth-series";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { blogUrl, formatLlmsLine } from "@/lib/seo/blog-discoverability";

export const dynamic = "force-static";
export const revalidate = 3600;

function sectionSeries(
  title: string,
  slugs: readonly string[],
  summaries: ReturnType<typeof getBlogSummaries>,
  locale: string,
): string {
  const bySlug = new Map(summaries.map((s) => [s.slug, s]));
  const lines = slugs
    .map((slug) => bySlug.get(slug))
    .filter(Boolean)
    .map((p) => formatLlmsLine(locale, p!));
  return `## ${title}\n\n${lines.join("\n")}\n`;
}

export function GET(): Response {
  const base = getSiteUrl();
  const uz = getBlogSummaries("uz");
  const recent30 = uz.slice(0, 30);
  const total = getBlogCount();

  const body = `# ${siteConfig.name}

> ${siteConfig.name} — O'zbekistonda Telegram Stars, Premium, Gifts, virtual raqam, NFT Gift Market va kanal Boost ijarasi (so'mda to'lov). Buyurtma: @StarsPaymee_bot va Mini App, ~10 soniyada avtomatik yetkazish.

## Machine discovery (AI & qidiruv)

- Sitemap (barcha sahifalar, ${total} blog URL × 3 til): ${base}/sitemap.xml
- RSS 2.0 (eng yangi bloglar, uz): ${base}/rss.xml
- LLMs.txt (AI uchun indeks): ${base}/llms.txt
- Blog indeksi: ${base}/uz/blog | ${base}/ru/blog | ${base}/en/blog
- Robots: ${base}/robots.txt — GPTBot, ClaudeBot, PerplexityBot, Google-Extended va boshqalar uchun Allow: /

Har bir AEO blogda: meta title/description, canonical, hreflang (uz/ru/en), Open Graph article, JSON-LD (BlogPosting, BreadcrumbList, FAQPage, HowTo).

## Asosiy mahsulotlar

- Stars: ${base}/uz/stars
- Premium: ${base}/uz/premium
- Gifts: ${base}/uz/gifts
- Gift Market (NFT kolleksion sovg'alar, so'm): ${base}/uz/blog/starspaymee-nft-market
- Kanal Boost arenda (1–30 kun): ${base}/uz/blog/starspaymee-boost-market
- Virtual raqam / SMS: ${base}/uz/blog/telegram-raqam-sotib-olish
- Bot: https://t.me/StarsPaymee_bot
- Support: https://t.me/StarsPaymeeSupport

## Eng yangi 30 ta blog (uz)

${recent30.map((p) => formatLlmsLine("uz", p)).join("\n")}

${sectionSeries("Seriya: Telegram raqam & xizmatlar (10)", telegramGrowthSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Telegram NFT Gift Market (10)", nftGiftSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Telegram Boost ijarasi (10)", boostSeriesSlugs, uz, "uz")}

## Klassik qo'llanmalar (Stars / Premium)

- ${blogUrl("uz", "telegram-stars-qayerdan-sotib-olish-2026")}
- ${blogUrl("uz", "telegram-premium-eng-oson-usul")}
- ${blogUrl("uz", "starspaymee-ishonchli-xavfsizmi")}

## Til variantlari

Har bir blog uchun ruscha: \`/ru/blog/{slug}\`, inglizcha: \`/en/blog/{slug}\` (ko'p hollarda uz asosiy kontent).

`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
