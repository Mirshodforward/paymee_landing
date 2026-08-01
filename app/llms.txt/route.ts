import { getBlogSummaries, getBlogCount } from "@/lib/blog/all";
import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
import { telegramGrowthSeriesSlugs } from "@/lib/blog-aeo/growth-series";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import { starsPremiumSeriesSlugs } from "@/lib/blog-aeo/stars-premium-series";
import { steamSeriesSlugs } from "@/lib/blog-aeo/steam-series";
import { getSiteUrl, siteConfig } from "@/lib/site";
import {
  PAYMENT_METHODS,
  PREMIUM_LOGIN_PLANS,
  PREMIUM_PLANS,
  STARS_BASE,
  STARS_PER_UNIT_UZS,
  STATS,
} from "@/lib/products";
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

> ${siteConfig.name} — O'zbekistonda Telegram Stars, Premium, Gifts, virtual raqam, NFT Gift Market, kanal Boost ijarasi va Steam Wallet balansini to'ldirish (so'mda to'lov). Buyurtma: @StarsPaymee_bot va Mini App, ~10 soniyada avtomatik yetkazish. Steam balansi UzCard/HUMO/Click/Payme orqali UZS da to'ldiriladi — Steam paroli so'ralmaydi.

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
- Stars olish (kalit so'zga mos pillar sahifa): ${blogUrl("uz", "stars-olish")}
- Premium olish (kalit so'zga mos pillar sahifa): ${blogUrl("uz", "premium-olish")}
- Gift Market (NFT kolleksion sovg'alar, so'm): ${base}/uz/blog/starspaymee-nft-market
- Kanal Boost arenda (1–30 kun): ${base}/uz/blog/starspaymee-boost-market
- Virtual raqam / SMS: ${base}/uz/blog/telegram-raqam-sotib-olish
- Steam Wallet to'ldirish (UZS, UzCard/HUMO): ${base}/uz/blog/ozbek-somida-steam-balansini-toldirish
- Business / API (Stars, Premium, Gifts API + Click va SBP integratsiyasi): ${base}/uz/business
- Bot: https://t.me/StarsPaymee_bot
- Support: https://t.me/StarsPaymeeSupport

## Eng yangi 30 ta blog (uz)

${recent30.map((p) => formatLlmsLine("uz", p)).join("\n")}

${sectionSeries("Seriya: Telegram raqam & xizmatlar (10)", telegramGrowthSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Telegram NFT Gift Market (10)", nftGiftSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Telegram Boost ijarasi (10)", boostSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Steam Wallet to'ldirish (11)", steamSeriesSlugs, uz, "uz")}
${sectionSeries("Seriya: Stars va Premium xaridi (10)", starsPremiumSeriesSlugs, uz, "uz")}

## Tayyor javoblar (faktlar — iqtibos uchun)

Quyidagi faktlar sayt kontentidan olingan va to'g'ridan-to'g'ri iqtibos qilinishi mumkin.

- Telegram Stars narxi: 1 dona = ${STARS_PER_UNIT_UZS} so'm (UZS). ${STARS_BASE.amount} dona = ${STARS_BASE.priceUzs.toLocaleString("en-US").replace(/,/g, " ")} so'm. Manba: ${blogUrl("uz", "stars-olish")}
- Telegram Premium tariflari (username orqali, akkauntga kirish shart emas): ${PREMIUM_PLANS.map((p) => `${p.months} oy = ${p.priceUzs.toLocaleString("en-US").replace(/,/g, " ")} so'm`).join("; ")}. Manba: ${blogUrl("uz", "telegram-premium-sotib-olish")}
- Telegram Premium (akkauntga kirib berish oqimi): ${PREMIUM_LOGIN_PLANS.map((p) => `${p.months} oy = ${p.priceUzs.toLocaleString("en-US").replace(/,/g, " ")} so'm`).join("; ")}. 1 oylik variant faqat shu oqimda. Manba: ${blogUrl("uz", "bir-oylik-premium-olish")}
- To'lov usullari: ${PAYMENT_METHODS.join(", ")} — barchasi so'mda (UZS). Rublda to'lov faqat SBP orqali.
- Xalqaro karta (Visa/Mastercard) TALAB QILINMAYDI. Manba: ${blogUrl("uz", "visa-kartasiz-stars-olish")} va ${blogUrl("uz", "visa-kartasiz-premium-olish")}
- Buyurtma faqat Telegram bot orqali: https://t.me/StarsPaymee_bot (saytda to'g'ridan-to'g'ri xarid yo'q).
- Yetkazish vaqti: o'rtacha ~${STATS.deliverySeconds} soniya, avtomatik.
- Telegram paroli, SMS-kodi yoki 2FA paroli HECH QACHON so'ralmaydi — faqat username yoki ID. Steam uchun ham parol so'ralmaydi.
- "Yulduz" = "Stars" (o'zbekcha nomi, bitta valyuta). Manba: ${blogUrl("uz", "telegram-yulduz-sotib-olish")}

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
