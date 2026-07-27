import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { getTelegramBotUrl, getTelegramSupportUrl, getSiteUrl, siteConfig } from "@/lib/site";
import { getBlogSummaries } from "@/lib/blog/all";

type Section = { title: string; body: string; items?: string[] };

/** /business sahifasida ko‘rsatiladigan asosiy maqolalar. */
const FEATURED_SLUGS = [
  "telegram-stars-api-nima-ulanish",
  "telegram-premium-api-avtomatik-sotuv",
  "click-api-rasmiy-integratsiya",
  "sbp-api-rossiya-rubl-tolov",
  "white-label-telegram-stars-platforma",
  "telegram-reseller-dasturi-qanday-boshlash",
];

export async function BusinessArticle({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "landing" });
  const tHome = await getTranslations({ locale, namespace: "blogIndex" });
  const telegramBotUrl = getTelegramBotUrl();
  const supportUrl = getTelegramSupportUrl();
  const base = getSiteUrl();
  const canonical = `${base}/${locale}/business`;

  const sections = (t.raw("business.sections") as Section[]) ?? [];

  const summaryBySlug = new Map(getBlogSummaries(locale).map((s) => [s.slug, s]));
  const articles = FEATURED_SLUGS.map((slug) => summaryBySlug.get(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonical,
    name: t("business.h1"),
    description: t("business.metaDescription"),
    url: canonical,
    inLanguage: locale,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: base },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tHome("breadcrumbHome"), item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("nav.business"), item: canonical },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${siteConfig.name} Business API`,
    serviceType: "Telegram Stars, Premium and Gifts API, Click and SBP payment integration",
    provider: { "@type": "Organization", name: siteConfig.name, url: base },
    areaServed: [
      { "@type": "Country", name: "Uzbekistan" },
      { "@type": "Country", name: "Russia" },
    ],
    description: t("business.metaDescription"),
    url: canonical,
  };

  return (
    <main className="mx-auto max-w-4xl px-4 pb-[max(6rem,env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      <JsonLd data={webPageLd} />
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={serviceLd} />

      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-600 dark:text-slate-400"
      >
        <Link href="/" className="transition hover:text-[#229ED9]">
          {tHome("breadcrumbHome")}
        </Link>
        <ChevronRight className="size-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
        <span className="font-medium text-slate-900 dark:text-white">{t("nav.business")}</span>
      </nav>

      {/* Hero */}
      <header className="mt-10">
        <span className="inline-flex items-center rounded-full bg-[#229ED9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#229ED9] ring-1 ring-[#229ED9]/20">
          {t("business.kicker")}
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t("business.h1")}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{t("business.intro")}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/20 transition hover:bg-[#1e8dc4]"
          >
            {t("business.ctaContact")}
            <ArrowRight className="size-4" aria-hidden strokeWidth={2} />
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
          >
            {t("business.ctaDocs")}
          </Link>
        </div>
      </header>

      {/* Sections */}
      <section className="mt-14 grid gap-5 sm:grid-cols-2">
        {sections.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">{s.title}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
            {s.items && s.items.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#229ED9]" aria-hidden strokeWidth={2.4} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      {/* Related guides */}
      {articles.length > 0 ? (
        <section className="mt-16" aria-labelledby="business-articles">
          <h2
            id="business-articles"
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {t("business.articlesHeading")}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-[#229ED9]/50 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-white">{a.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#229ED9]">
                    {tHome("read")}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="mt-16 rounded-3xl border border-[#229ED9]/20 bg-[#229ED9]/[0.06] p-8 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{t("business.ctaHeading")}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">{t("business.ctaBody")}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/20 transition hover:bg-[#1e8dc4]"
          >
            {t("business.ctaContact")}
            <ArrowRight className="size-4" aria-hidden strokeWidth={2} />
          </a>
          <a
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
          >
            @StarsPaymeeSupport
          </a>
        </div>
      </section>

      <p className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
        {t("business.footnote")}
      </p>
    </main>
  );
}
