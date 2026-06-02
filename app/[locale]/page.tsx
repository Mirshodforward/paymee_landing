import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Clock,
  CreditCard,
  Crown,
  Gauge,
  Gift,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { Link } from "@/i18n/navigation";
import { GiftTgsShowcase } from "@/components/home/gift-tgs-showcase";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";
import {
  PAYMENT_METHODS,
  PREMIUM_LOGIN_PLANS,
  PREMIUM_PLANS,
  STARS_PACKS,
  STATS,
  formatUzs,
} from "@/lib/products";

type WhyItem = { title: string; body: string };
type StepItem = { title: string; desc: string };
type FaqItem = { question: string; answer: string };

const whyIcons = [Gauge, Tag, ShieldCheck, UserCheck, Wallet, Users] as const;

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const botUrl = getTelegramBotUrl();
  const t = await getTranslations("home");

  const nf = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US");
  const grp = (n: number) => nf.format(n).replace(/,/g, " ");
  const money = (n: number) => formatUzs(n, locale);

  const unitMonth = t("unitMonth");
  const unitYear = t("unitYear");
  const periodLabel = (months: number) =>
    months === 12 ? `1 ${unitYear}` : `${months} ${unitMonth}`;

  const heroBullets = t.raw("heroBullets") as string[];
  const giftsBullets = t.raw("giftsBullets") as string[];
  const whyItems = t.raw("whyItems") as WhyItem[];
  const steps = t.raw("steps") as StepItem[];
  const faqItems = t.raw("faqItems") as FaqItem[];

  const stats = [
    { value: `~${STATS.deliverySeconds}s`, label: t("statsDelivery") },
    { value: `${grp(STATS.activeUsers)}+`, label: t("statsUsers") },
    { value: `${grp(STATS.orders)}+`, label: t("statsOrders") },
    { value: t("statsYearsValue"), label: t("statsYears") },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const offersLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${siteConfig.name} — Telegram Stars, Premium & Gifts`,
    serviceType: "Telegram Stars, Premium and gifts purchasing",
    areaServed: { "@type": "Country", name: "Uzbekistan" },
    provider: { "@type": "Organization", name: siteConfig.name },
    offers: [
      {
        "@type": "Offer",
        name: `${t("starsTitle")} — ${grp(STARS_PACKS[0].amount)} ${t("starsAmountUnit")}`,
        price: STARS_PACKS[0].priceUzs,
        priceCurrency: "UZS",
        category: t("starsTitle"),
      },
      ...PREMIUM_PLANS.map((p) => ({
        "@type": "Offer",
        name: `${t("premiumTitle")} ${periodLabel(p.months)}`,
        price: p.priceUzs,
        priceCurrency: "UZS",
        category: t("premiumTitle"),
      })),
    ],
  };

  const btnPrimary =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#229ED9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition hover:bg-[#1e8dc4] active:scale-[0.98]";
  const btnGhost =
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500";

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={offersLd} />
      <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(34,158,217,0.22),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(245,165,36,0.08),transparent_42%)]"
        />

        <SiteHeader />

        <main id="asosiy">
          {/* HERO */}
          <section
            className="relative mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24"
            aria-labelledby="hero-heading"
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.92fr)] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[#229ED9]/25 bg-[#229ED9]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1c84b8] dark:border-[#229ED9]/30 dark:bg-[#229ED9]/12 dark:text-sky-300">
                  <Sparkles className="size-3.5 shrink-0" aria-hidden strokeWidth={2} />
                  {t("heroBadge")}
                </p>
                <h1
                  id="hero-heading"
                  className="mt-5 text-[2.05rem] font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.3rem] dark:text-white"
                >
                  {t.rich("heroHeadline", {
                    stars: (chunks) => <span className="text-amber-500 dark:text-amber-300">{chunks}</span>,
                    premium: (chunks) => <span className="text-[#229ED9]">{chunks}</span>,
                    gift: (chunks) => <span className="text-fuchsia-600 dark:text-fuchsia-400">{chunks}</span>,
                  })}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {t("heroSubtitle")}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={botUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    <Send className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                    {t("heroCtaBot")}
                  </a>
                  <a href="#narxlar" className={btnGhost}>
                    {t("heroCtaPrices")}
                  </a>
                </div>
                <ul className="mt-10 flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {heroBullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <BadgeCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#229ED9]/15 via-transparent to-fuchsia-500/10 blur-2xl" aria-hidden />
                <GiftTgsShowcase
                  hideUntilVisible
                  className="relative w-full overflow-hidden rounded-3xl border border-fuchsia-200/45 bg-gradient-to-br from-white/90 via-white/80 to-fuchsia-50/45 p-4 shadow-xl shadow-fuchsia-500/[0.08] ring-1 ring-fuchsia-100/55 backdrop-blur-sm dark:border-fuchsia-900/35 dark:from-slate-900/85 dark:via-slate-900/75 dark:to-fuchsia-950/28 dark:ring-fuchsia-900/35"
                />
              </div>
            </div>

            {/* STATS */}
            <dl className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-5 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-[#229ED9] sm:text-3xl">{s.value}</dd>
                  <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </dl>
          </section>

          {/* PAYMENTS */}
          <section className="border-y border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-900/35" aria-labelledby="pay-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 id="pay-heading" className="flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <CreditCard className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                {t("paymentsTitle")}
              </h2>
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {PAYMENT_METHODS.map((m) => (
                  <li
                    key={m}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">{t("paymentsNote")}</p>
            </div>
          </section>

          {/* STARS PRICING */}
          <section id="narxlar" className="relative scroll-mt-20 mx-auto max-w-6xl px-4 py-18 pt-16 sm:px-6 sm:py-20" aria-labelledby="stars-heading">
            <div className="flex items-start gap-3">
              <Star className="mt-1 size-7 shrink-0 text-amber-500 dark:text-amber-300" aria-hidden strokeWidth={1.8} />
              <div>
                <h2 id="stars-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("starsTitle")}</h2>
                <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t("starsLead")}</p>
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {STARS_PACKS.map((p) => (
                <li key={p.amount}>
                  <a
                    href={botUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex h-full flex-col items-center justify-center gap-1 rounded-2xl border bg-white px-3 py-5 text-center transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-900/60 ${
                      p.popular
                        ? "border-amber-400/70 ring-1 ring-amber-300/50 dark:border-amber-400/50"
                        : "border-slate-200 hover:border-amber-400/50 dark:border-slate-800 dark:hover:border-amber-400/35"
                    }`}
                  >
                    {p.popular ? (
                      <span className="absolute -top-2.5 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                        {t("starsPopular")}
                      </span>
                    ) : null}
                    <span className="flex items-center gap-1 text-xl font-bold text-slate-900 dark:text-white">
                      <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                      {grp(p.amount)}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{t("starsAmountUnit")}</span>
                    <span className="mt-1 text-sm font-semibold text-[#229ED9]">{money(p.priceUzs)}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={botUrl} target="_blank" rel="noopener noreferrer" className={`mt-9 ${btnPrimary}`}>
              {t("starsCta")}
              <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
            </a>
          </section>

          {/* PREMIUM PRICING */}
          <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 sm:py-20" aria-labelledby="premium-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex items-start gap-3">
                <Crown className="mt-1 size-7 shrink-0 text-[#229ED9]" aria-hidden strokeWidth={1.8} />
                <div>
                  <h2 id="premium-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("premiumTitle")}</h2>
                  <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t("premiumLead")}</p>
                </div>
              </div>

              {/* Auto (username) flow */}
              <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t("premiumAutoTitle")}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  <Clock className="size-3 shrink-0" aria-hidden strokeWidth={2.2} />
                  {t("premiumAutoBadge")}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{t("premiumAutoDesc")}</p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {PREMIUM_PLANS.map((p) => (
                  <li key={p.months}>
                    <a
                      href={botUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex h-full flex-col rounded-2xl border bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-slate-950/50 ${
                        p.popular
                          ? "border-[#229ED9]/70 ring-1 ring-[#229ED9]/40"
                          : "border-slate-200 hover:border-[#229ED9]/45 dark:border-slate-800"
                      }`}
                    >
                      {p.popular ? (
                        <span className="absolute -top-2.5 left-6 rounded-full bg-[#229ED9] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                          {t("premiumPopular")}
                        </span>
                      ) : null}
                      <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {periodLabel(p.months)}
                      </span>
                      <span className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{money(p.priceUzs)}</span>
                      <span className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {money(Math.round(p.priceUzs / p.months))} / {t("perMonth")}
                      </span>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#229ED9] group-hover:gap-2.5">
                        {t("premiumCta")}
                        <ArrowRight className="size-4 shrink-0 transition-all" aria-hidden strokeWidth={2} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Login flow */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/40">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t("premiumLoginTitle")}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {t("premiumLoginBadge")}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{t("premiumLoginDesc")}</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {PREMIUM_LOGIN_PLANS.map((p) => (
                    <li
                      key={p.months}
                      className="flex items-baseline gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
                    >
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{periodLabel(p.months)}</span>
                      <span className="text-base font-bold text-slate-900 dark:text-white">{money(p.priceUzs)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* GIFTS */}
          <section
            id="giftlar"
            aria-labelledby="gifts-heading"
            className="relative scroll-mt-20 border-b border-fuchsia-200/55 bg-gradient-to-b from-fuchsia-50/90 via-white to-slate-50 py-16 dark:border-fuchsia-900/35 dark:from-fuchsia-950/35 dark:via-slate-950 dark:to-slate-950 sm:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/75 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-900 dark:border-fuchsia-700/60 dark:bg-fuchsia-950/45 dark:text-fuchsia-100">
                    <Gift className="size-3.5 text-fuchsia-600 dark:text-fuchsia-300" strokeWidth={2} aria-hidden />
                    Telegram Gifts
                  </p>
                  <h2 id="gifts-heading" className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                    {t("giftsTitle")}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{t("giftsLead")}</p>
                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {giftsBullets.map((line) => (
                      <li key={line} className="flex gap-2">
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-fuchsia-600 dark:text-fuchsia-400" aria-hidden strokeWidth={2} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/gifts"
                      className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/55 bg-white px-6 py-3 text-sm font-semibold text-fuchsia-950 shadow-sm transition hover:border-fuchsia-500 hover:bg-fuchsia-50/90 dark:border-fuchsia-600/55 dark:bg-slate-950 dark:text-fuchsia-50 dark:hover:bg-fuchsia-950/40"
                    >
                      {t("giftsCta")}
                      <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                    </Link>
                    <a href={botUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <Send className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                      {t("heroCtaBot")}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <GiftTgsShowcase
                    compact
                    hideUntilVisible
                    className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/60 bg-white/55 p-4 shadow-lg shadow-fuchsia-500/10 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/55"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* WHY US */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("whyTitle")}</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t("whyLead")}</p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((w, i) => {
                const Icon = whyIcons[i] ?? Sparkles;
                return (
                  <li
                    key={w.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#229ED9]/35 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
                  >
                    <Icon className="size-8 text-[#229ED9]" strokeWidth={1.85} aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{w.body}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* PROCESS */}
          <section className="border-y border-slate-200 bg-slate-100/80 py-16 dark:border-slate-800 dark:bg-slate-900/55 sm:py-20" aria-labelledby="process-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("processTitle")}</h2>
              <ol className="mt-12 grid gap-8 md:grid-cols-3">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-8 pt-10 dark:border-slate-700 dark:bg-slate-900/60">
                    <span className="absolute -top-3 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#229ED9] text-sm font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400">{s.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* CTA */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="cta-heading">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#229ED9] px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-16">
              <h2 id="cta-heading" className="max-w-xl text-2xl font-bold leading-tight sm:text-4xl">{t("ctaTitle")}</h2>
              <p className="mt-5 max-w-lg text-white/85">{t("ctaBody")}</p>
              <a
                href={botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sky-800 shadow-xl transition hover:bg-slate-100 active:scale-[0.98]"
              >
                <Send className="size-4 shrink-0" aria-hidden strokeWidth={2.4} />
                {t("ctaButton", { brand: siteConfig.name })}
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white pb-24 pt-4 dark:bg-slate-950" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("faqTitle")}</h2>
              <div className="mt-10 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition open:border-[#229ED9]/35 open:bg-white open:shadow-md dark:border-slate-800 dark:bg-slate-900/55 dark:open:bg-slate-900"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 outline-none marker:content-none [&::-webkit-details-marker]:hidden dark:text-white">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.question}</span>
                        <ChevronDown className="mt-0.5 size-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180 dark:text-slate-500" aria-hidden strokeWidth={2} />
                      </span>
                    </summary>
                    <div className="border-t border-slate-100 px-6 pb-5 pt-1 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
