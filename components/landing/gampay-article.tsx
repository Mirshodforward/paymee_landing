import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogSummaries } from "@/lib/blog/all";
import { GAMES, STEAM_IN_GAMPAY } from "@/lib/games";
import { getSiteUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import { botDeepLink } from "@/lib/telegram-deeplink";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

type Step = { title: string; body: string };

function uiLocale(locale: string): AeoUiLocale {
  return locale === "ru" ? "ru" : locale === "en" ? "en" : "uz";
}

/**
 * GamPay — o'yin to'ldirish bo'limi.
 *
 * Nega alohida sahifa: bot ichida bu butun boshli vertikal (9 o'yin + Steam),
 * lekin marketing saytida umuman yo'q edi. «PUBG UC sotib olish» va «MLBB
 * olmos» kabi so'rovlar O'zbekistonda katta hajmga ega va ular Stars/Premium
 * sahifalariga umuman tushmaydi — o'z sahifasi bo'lmasa, bu trafik butunlay
 * yo'qoladi.
 *
 * Narx ataylab ko'rsatilmagan: bot narxi provayder katalogi va USDT kursidan
 * hisoblanadi, statik saytdagi raqam esa bir haftada eskirib, noto'g'ri
 * va'daga aylanadi. Buning o'rniga o'zgarmaydigan ma'lumot beriladi — nima
 * sotib olinadi, qanday ID kerak va qancha vaqt ketadi.
 */
export async function GamPayArticle({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "landing" });
  const ui = uiLocale(locale);
  const base = getSiteUrl();
  const canonical = `${base}/${locale}/gampay`;
  const botUrl = botDeepLink({ page: "gampay", placement: "cta" });
  const supportUrl = getTelegramSupportUrl();

  const steps = (t.raw("gampay.steps") as Step[]) ?? [];
  const why = (t.raw("gampay.why") as Step[]) ?? [];

  // O'yin qo'llanmalari — tarjimasi bor maqolalargina ro'yxatga tushadi.
  const summaryBySlug = new Map(getBlogSummaries(locale).map((s) => [s.slug, s]));
  const guides = [...GAMES.map((g) => g.blogSlug), STEAM_IN_GAMPAY.blogSlug]
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => summaryBySlug.get(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: `${siteConfig.name} GamPay`,
    serviceType: t("gampay.h1"),
    description: t("gampay.metaDescription"),
    provider: { "@type": "Organization", name: siteConfig.name, url: base },
    areaServed: { "@type": "Country", name: "Uzbekistan" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: canonical,
      availableLanguage: ["uz", "ru", "en"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("gampay.gamesHeading"),
      itemListElement: GAMES.map((g, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: `${g.title} — ${g.unit}`,
          category: "Game top-up",
        },
        priceCurrency: "UZS",
        availability: "https://schema.org/InStock",
      })),
    },
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("gampay.howHeading"),
    description: t("gampay.intro"),
    inLanguage: locale,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: siteConfig.name, item: `${base}/${locale}` },
      { "@type": "ListItem", position: 2, name: "GamPay", item: canonical },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 pb-[max(6rem,env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:pb-28 sm:pt-10">
      <JsonLd data={serviceLd} />
      <JsonLd data={howToLd} />
      <JsonLd data={breadcrumbLd} />

      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
      >
        <Link href="/" className="transition hover:text-[#229ED9]">
          {siteConfig.name}
        </Link>
        <span aria-hidden>/</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">GamPay</span>
      </nav>

      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#229ED9]">
          {t("gampay.kicker")}
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t("gampay.h1")}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {t("gampay.intro")}
        </p>
        <a
          data-cta="gampay"
          href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b8cc0]"
        >
          {t("gampay.ctaButton")}
        </a>
      </header>

      {/* ===== Qadamlar ===== */}
      <section className="mt-14" aria-labelledby="gampay-how">
        <h2
          id="gampay-how"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {t("gampay.howHeading")}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <span className="font-mono text-xs font-semibold text-[#229ED9]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== O'yinlar jadvali ===== */}
      <section className="mt-16" aria-labelledby="gampay-games">
        <h2
          id="gampay-games"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {t("gampay.gamesHeading")}
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                <th className="px-4 py-3 font-medium">{t("gampay.tableGame")}</th>
                <th className="px-4 py-3 font-medium">{t("gampay.tableUnit")}</th>
                <th className="px-4 py-3 font-medium">{t("gampay.tableId")}</th>
                <th className="px-4 py-3 font-medium">{t("gampay.tableEta")}</th>
              </tr>
            </thead>
            <tbody>
              {GAMES.map((g) => (
                <tr
                  key={g.code}
                  className="border-t border-slate-200 align-top dark:border-slate-800"
                >
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                      <span aria-hidden>{g.emoji}</span>
                      {g.blogSlug ? (
                        <Link href={`/blog/${g.blogSlug}`} className="hover:text-[#229ED9]">
                          {g.title}
                        </Link>
                      ) : (
                        g.title
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{g.unit}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {g.idLabel}
                    </span>
                    <span className="mt-0.5 block text-xs">{g.idHint[ui]}</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">
                    {g.eta[ui]}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-slate-200 align-top dark:border-slate-800">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <span aria-hidden>{STEAM_IN_GAMPAY.emoji}</span>
                    <Link
                      href={`/blog/${STEAM_IN_GAMPAY.blogSlug}`}
                      className="hover:text-[#229ED9]"
                    >
                      {STEAM_IN_GAMPAY.title}
                    </Link>
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                  {STEAM_IN_GAMPAY.unit}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Steam Login</td>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">
                  —
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {t("gampay.gamesNote")}
        </p>
      </section>

      {/* ===== Nega biz ===== */}
      <section className="mt-16" aria-labelledby="gampay-why">
        <h2
          id="gampay-why"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {t("gampay.whyHeading")}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {why.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Xavfsizlik ===== */}
      <section className="mt-16 rounded-3xl border border-amber-300/40 bg-amber-50/60 p-7 sm:p-8 dark:border-amber-500/25 dark:bg-amber-500/[0.07]">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t("gampay.safetyHeading")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {t("gampay.safetyBody")}
        </p>
      </section>

      {/* ===== Qo'llanmalar ===== */}
      {guides.length > 0 ? (
        <section className="mt-16" aria-labelledby="gampay-guides">
          <h2
            id="gampay-guides"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            {t("gampay.articlesHeading")}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/blog/${g.slug}`}
                  className="flex h-full flex-col gap-1.5 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[#229ED9] dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {g.title}
                  </span>
                  <span className="line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {g.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ===== CTA ===== */}
      <section className="mt-16 rounded-3xl border border-[#229ED9]/20 bg-[#229ED9]/[0.06] p-8 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {t("gampay.ctaHeading")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {t("gampay.ctaBody")}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            data-cta="gampay"
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b8cc0]"
          >
            {t("gampay.ctaButton")}
          </a>
          <a
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#229ED9] hover:text-[#229ED9] dark:border-slate-700 dark:text-slate-200"
          >
            @StarsPaymeeSupport
          </a>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {t("gampay.footnote")}
        </p>
      </section>
    </main>
  );
}
