import { ArrowRight, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, siteConfig } from "@/lib/site";
import { botDeepLink, type DeepLinkPage } from "@/lib/telegram-deeplink";
import { PREMIUM_LOGIN_PLANS, PREMIUM_PLANS, STARS_PACKS } from "@/lib/products";

export type LandingTopic = "stars" | "premium" | "gifts" | "about";

const topicPath: Record<LandingTopic, `/${string}`> = {
  stars: "/stars",
  premium: "/premium",
  gifts: "/gifts",
  about: "/about",
};

type Props = {
  locale: string;
  topic: LandingTopic;
};

export async function LandingTopicArticle({ locale, topic }: Props) {
  const t = await getTranslations({ locale, namespace: "landing" });
  const tHome = await getTranslations({ locale, namespace: "blogIndex" });
  // Har bir mavzu sahifasi o‘z manbasini botga uzatadi.
  const telegramBotUrl = botDeepLink({
    page: topic as DeepLinkPage,
    placement: "cta",
    product:
      topic === "stars" ? { kind: "stars", amount: 100 }
      : topic === "premium" ? { kind: "premium", months: 3 }
      : undefined,
  });
  const base = getSiteUrl();
  const path = topicPath[topic];
  const canonical = `${base}/${locale}${path}`;

  const bullets = (t.raw(`${topic}.bullets`) as string[]) ?? [];
  const navKey = topic === "about" ? "about" : topic;
  const crumbCurrent = t(`nav.${navKey}`);

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonical,
    name: t(`${topic}.h1`),
    description: t(`${topic}.metaDescription`),
    url: canonical,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: base,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tHome("breadcrumbHome"), item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: crumbCurrent, item: canonical },
    ],
  };

  // Mahsulot sahifalari uchun Product + AggregateOffer (real narxlar lib/products.ts dan).
  const productLd =
    topic === "stars"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: t("stars.h1"),
          description: t("stars.metaDescription"),
          brand: { "@type": "Brand", name: siteConfig.name },
          category: "Telegram Stars",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "UZS",
            lowPrice: Math.min(...STARS_PACKS.map((p) => p.priceUzs)),
            highPrice: Math.max(...STARS_PACKS.map((p) => p.priceUzs)),
            offerCount: STARS_PACKS.length,
            availability: "https://schema.org/InStock",
            url: canonical,
            seller: { "@type": "Organization", name: siteConfig.name },
          },
        }
      : topic === "premium"
        ? {
            "@context": "https://schema.org",
            "@type": "Product",
            name: t("premium.h1"),
            description: t("premium.metaDescription"),
            brand: { "@type": "Brand", name: siteConfig.name },
            category: "Telegram Premium",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "UZS",
              lowPrice: Math.min(
                ...PREMIUM_PLANS.map((p) => p.priceUzs),
                ...PREMIUM_LOGIN_PLANS.map((p) => p.priceUzs),
              ),
              highPrice: Math.max(
                ...PREMIUM_PLANS.map((p) => p.priceUzs),
                ...PREMIUM_LOGIN_PLANS.map((p) => p.priceUzs),
              ),
              offerCount: PREMIUM_PLANS.length + PREMIUM_LOGIN_PLANS.length,
              availability: "https://schema.org/InStock",
              url: canonical,
              seller: { "@type": "Organization", name: siteConfig.name },
            },
          }
        : null;

  const schemas = [webPageLd, breadcrumbLd, ...(productLd ? [productLd] : [])];

  return (
    <main className="mx-auto max-w-3xl px-4 pb-[max(6rem,env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      {schemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400"
      >
        <Link href="/" className="transition hover:text-[#229ED9]">
          {tHome("breadcrumbHome")}
        </Link>
        <ChevronRight className="size-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
        <span className="font-medium text-slate-900 dark:text-white">{crumbCurrent}</span>
      </nav>

      <article className="mt-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t(`${topic}.h1`)}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{t(`${topic}.intro`)}</p>

        {bullets.length > 0 ? (
          <ul className="mt-8 list-inside list-disc space-y-3 text-slate-700 dark:text-slate-300">
            {bullets.map((b) => (
              <li key={b} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            data-cta="landing" href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/20 transition hover:bg-[#1e8dc4]"
          >
            {t("ctaMiniApp")}
            <ArrowRight className="size-4" aria-hidden strokeWidth={2} />
          </a>
          <Link
            href="/#narxlar"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
          >
            {t("backHome")}
          </Link>
        </div>

        <p className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
          {t(`${topic}.footnote`)}
        </p>
      </article>
    </main>
  );
}
