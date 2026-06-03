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
  Zap,
} from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { Link } from "@/i18n/navigation";
import { GiftTgsShowcase } from "@/components/home/gift-tgs-showcase";
import { HeroDecor } from "@/components/home/hero-decor";
import { TiltCard } from "@/components/home/tilt-card";
import { StickyCta } from "@/components/home/sticky-cta";
import { getTelegramBotUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import {
  PAYMENT_METHODS,
  PREMIUM_LOGIN_PLANS,
  PREMIUM_PLANS,
  STARS_PER_UNIT_UZS,
  STARS_PACKS,
  STATS,
  formatUzs,
} from "@/lib/products";

type WhyItem = { title: string; body: string };
type StepItem = { title: string; desc: string };
type FaqItem = { question: string; answer: string };

const whyIcons = [Gauge, Tag, ShieldCheck, UserCheck, Wallet, Users] as const;

/** Bento panjarasi uchun katak o‘lchamlari (6 ta «nega biz» element). */
const whyBentoSpan = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2",
  "",
  "",
  "sm:col-span-2",
  "sm:col-span-2",
] as const;

/** Har bir bento katagi uchun aksent ranglar (ikon plitkasi). */
const whyAccent = [
  "from-[#229ED9] to-sky-400 shadow-[#229ED9]/30",
  "from-amber-400 to-orange-400 shadow-amber-500/30",
  "from-emerald-400 to-teal-400 shadow-emerald-500/30",
  "from-violet-500 to-indigo-400 shadow-violet-500/30",
  "from-fuchsia-500 to-pink-400 shadow-fuchsia-500/30",
  "from-rose-400 to-red-400 shadow-rose-500/30",
] as const;

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const botUrl = getTelegramBotUrl();
  const t = await getTranslations("home");
  const lg = await getTranslations("landing");

  const nf = new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US");
  const grp = (n: number) => nf.format(n).replace(/,/g, " ");
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
    "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#229ED9] to-[#1c84b8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/30 transition hover:shadow-xl hover:shadow-[#229ED9]/40 hover:-translate-y-0.5 active:scale-[0.98] motion-safe:animate-glow";
  const btnGhost =
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-[#229ED9]/50 hover:text-[#229ED9] hover:-translate-y-0.5 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-[#229ED9]/60";

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
            <HeroDecor />
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.92fr)] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-[#229ED9]/25 bg-[#229ED9]/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1c84b8] motion-safe:animate-rise dark:border-[#229ED9]/30 dark:bg-[#229ED9]/12 dark:text-sky-300">
                  <Sparkles className="size-3.5 shrink-0 motion-safe:animate-twinkle" aria-hidden strokeWidth={2} />
                  {t("heroBadge")}
                </p>
                <h1
                  id="hero-heading"
                  className="mt-5 text-[2.05rem] font-bold leading-[1.08] tracking-tight text-slate-900 motion-safe:animate-rise [animation-delay:80ms] sm:text-5xl lg:text-[3.3rem] dark:text-white"
                >
                  {t.rich("heroHeadline", {
                    stars: (chunks) => <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 bg-clip-text text-transparent">{chunks}</span>,
                    premium: (chunks) => <span className="bg-gradient-to-r from-[#229ED9] to-sky-400 bg-clip-text text-transparent">{chunks}</span>,
                    gift: (chunks) => <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">{chunks}</span>,
                  })}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 motion-safe:animate-rise [animation-delay:160ms] dark:text-slate-400">
                  {t("heroSubtitle")}
                </p>
                <div className="mt-9 flex flex-wrap gap-3 motion-safe:animate-rise [animation-delay:240ms]">
                  <a href={botUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2} />
                    {t("heroCtaBot")}
                  </a>
                  <a href="#narxlar" className={btnGhost}>
                    {t("heroCtaPrices")}
                  </a>
                </div>
                <ul className="mt-10 flex flex-col gap-2.5 text-sm text-slate-600 motion-safe:animate-rise [animation-delay:320ms] dark:text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {heroBullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <BadgeCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative motion-safe:animate-rise [animation-delay:200ms]">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#229ED9]/15 via-transparent to-fuchsia-500/10 blur-2xl motion-safe:animate-aurora" aria-hidden />
                <GiftTgsShowcase
                  hideUntilVisible
                  className="relative w-full overflow-hidden rounded-3xl border border-fuchsia-200/45 bg-gradient-to-br from-white/90 via-white/80 to-fuchsia-50/45 p-4 shadow-xl shadow-fuchsia-500/[0.08] ring-1 ring-fuchsia-100/55 backdrop-blur-sm dark:border-fuchsia-900/35 dark:from-slate-900/85 dark:via-slate-900/75 dark:to-fuchsia-950/28 dark:ring-fuchsia-900/35"
                />

                {/* Suzuvchi xizmat chiplari — Stars · Premium · Gift */}
                <div
                  className="absolute -left-3 -top-4 z-10 flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-white/90 py-1.5 pl-1.5 pr-3 shadow-lg shadow-amber-500/20 backdrop-blur-md motion-safe:animate-float dark:border-amber-400/30 dark:bg-slate-900/90"
                  aria-hidden
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-inner">
                    <Star className="size-4 fill-white" strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-100">Stars</span>
                </div>

                <div
                  className="absolute -right-3 top-1/2 z-10 flex -translate-y-1/2 items-center gap-1.5 rounded-full border border-[#229ED9]/30 bg-white/90 py-1.5 pl-1.5 pr-3 shadow-lg shadow-[#229ED9]/20 backdrop-blur-md motion-safe:animate-float-slow dark:border-[#229ED9]/40 dark:bg-slate-900/90"
                  aria-hidden
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#229ED9] to-sky-500 text-white shadow-inner">
                    <Crown className="size-4" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-100">Premium</span>
                </div>

                <div
                  className="absolute -bottom-4 right-8 z-10 flex items-center gap-1.5 rounded-full border border-fuchsia-200/70 bg-white/90 py-1.5 pl-1.5 pr-3 shadow-lg shadow-fuchsia-500/20 backdrop-blur-md motion-safe:animate-float-delayed dark:border-fuchsia-400/30 dark:bg-slate-900/90"
                  aria-hidden
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-inner">
                    <Gift className="size-4" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-bold tracking-tight text-slate-800 dark:text-slate-100">{lg("nav.gifts")}</span>
                </div>
              </div>
            </div>

            {/* STATS */}
            <dl className="mt-14 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className="reveal group rounded-2xl border border-white/60 bg-white/70 px-5 py-5 text-center shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#229ED9]/35 hover:shadow-xl hover:shadow-[#229ED9]/10 dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="bg-gradient-to-r from-[#229ED9] to-sky-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent transition group-hover:scale-105 sm:text-3xl">{s.value}</dd>
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
                {PAYMENT_METHODS.map((m, i) => (
                  <li
                    key={m}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className="reveal rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#229ED9]/40 hover:text-[#229ED9] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
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
              <span className="relative mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 ring-1 ring-amber-400/25">
                <Star className="size-6 fill-amber-400 text-amber-500 motion-safe:animate-twinkle dark:text-amber-300" aria-hidden strokeWidth={1.8} />
              </span>
              <div>
                <h2 id="stars-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("starsTitle")}</h2>
                <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t("starsLead")}</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-400/12 px-3.5 py-1.5 text-sm font-semibold text-amber-700 ring-1 ring-amber-400/25 dark:text-amber-300">
                  <Zap className="size-4 shrink-0" aria-hidden strokeWidth={2.2} />
                  {t("starsUnitBadge", { price: money(STARS_PER_UNIT_UZS) })}
                </p>
              </div>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {STARS_PACKS.map((p, i) => (
                <li key={p.amount} style={{ animationDelay: `${i * 50}ms` }} className="reveal">
                  <a
                    href={botUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sheen group relative flex h-full flex-col items-center justify-center gap-1 rounded-2xl border bg-white/80 px-3 py-5 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 dark:bg-slate-900/60 ${
                      p.popular
                        ? "border-amber-400/70 ring-1 ring-amber-300/50 dark:border-amber-400/50"
                        : "border-slate-200/70 hover:border-amber-400/50 dark:border-slate-800 dark:hover:border-amber-400/35"
                    }`}
                  >
                    {p.popular ? (
                      <span className="absolute -top-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                        {t("starsPopular")}
                      </span>
                    ) : null}
                    <span className="flex items-center gap-1 text-xl font-bold text-slate-900 dark:text-white">
                      <Star className="size-4 fill-amber-400 text-amber-400 transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden />
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
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden strokeWidth={2} />
            </a>
          </section>

          {/* PREMIUM PRICING */}
          <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 sm:py-20" aria-labelledby="premium-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex items-start gap-3">
                <span className="relative mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#229ED9]/12 ring-1 ring-[#229ED9]/25">
                  <Crown className="size-6 text-[#229ED9] motion-safe:animate-float" aria-hidden strokeWidth={1.8} />
                </span>
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
                {PREMIUM_PLANS.map((p, i) => (
                  <li key={p.months} style={{ animationDelay: `${i * 90}ms` }} className="reveal">
                    <TiltCard className="h-full">
                      <a
                        href={botUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`sheen group relative flex h-full flex-col rounded-2xl border bg-white/85 p-6 backdrop-blur-xl transition-shadow hover:shadow-xl hover:shadow-[#229ED9]/10 dark:bg-slate-950/55 ${
                          p.popular
                            ? "border-[#229ED9]/70 ring-1 ring-[#229ED9]/40"
                            : "border-slate-200/70 hover:border-[#229ED9]/45 dark:border-slate-800"
                        }`}
                      >
                        {p.popular ? (
                          <span className="absolute -top-2.5 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#229ED9] to-sky-400 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                            <Sparkles className="size-2.5" aria-hidden strokeWidth={2.5} />
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
                    </TiltCard>
                  </li>
                ))}
              </ul>
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
                    <Gift className="size-3.5 text-fuchsia-600 motion-safe:animate-float dark:text-fuchsia-300" strokeWidth={2} aria-hidden />
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
                      className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/55 bg-white px-6 py-3 text-sm font-semibold text-fuchsia-950 shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-500 hover:bg-fuchsia-50/90 dark:border-fuchsia-600/55 dark:bg-slate-950 dark:text-fuchsia-50 dark:hover:bg-fuchsia-950/40"
                    >
                      {t("giftsCta")}
                      <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                    </Link>
                    <a href={botUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                      <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2} />
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

          {/* WHY US — bento */}
          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{t("whyTitle")}</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t("whyLead")}</p>
            <ul className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 sm:grid-cols-4">
              {whyItems.map((w, i) => {
                const Icon = whyIcons[i] ?? Sparkles;
                const big = i === 0;
                return (
                  <li
                    key={w.title}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#229ED9]/10 dark:border-slate-700/60 dark:bg-slate-900/55 ${whyBentoSpan[i] ?? ""} ${big ? "sm:p-8" : ""}`}
                  >
                    {big ? (
                      <Star aria-hidden className="pointer-events-none absolute -right-4 -top-4 size-24 fill-amber-300/10 text-amber-300/20 motion-safe:animate-float" strokeWidth={1} />
                    ) : null}
                    <span className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition group-hover:scale-110 ${whyAccent[i] ?? whyAccent[0]} ${big ? "size-16" : "size-12"}`}>
                      <Icon className={big ? "size-8" : "size-6"} strokeWidth={1.85} aria-hidden />
                    </span>
                    <h3 className={`relative mt-4 font-semibold text-slate-900 dark:text-white ${big ? "text-2xl" : "text-lg"}`}>{w.title}</h3>
                    <p className={`relative mt-2 leading-relaxed text-slate-600 dark:text-slate-400 ${big ? "text-base" : "text-sm"}`}>{w.body}</p>
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
                  <li key={s.title} style={{ animationDelay: `${i * 110}ms` }} className="reveal relative rounded-2xl border border-white/60 bg-white/80 p-8 pt-10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/60">
                    <span className="absolute -top-3 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#229ED9] to-sky-500 text-sm font-bold text-white shadow-md ring-4 ring-slate-100/80 dark:ring-slate-900/80">
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
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#229ED9] px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-16">
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-white/10 blur-2xl motion-safe:animate-aurora" />
              <Star aria-hidden className="pointer-events-none absolute right-10 top-10 size-10 fill-white/20 text-white/30 motion-safe:animate-float" strokeWidth={1.4} />
              <Crown aria-hidden className="pointer-events-none absolute bottom-8 right-24 hidden size-8 text-white/25 motion-safe:animate-float-slow sm:block" strokeWidth={1.4} />
              <h2 id="cta-heading" className="relative max-w-xl text-2xl font-bold leading-tight sm:text-4xl">{t("ctaTitle")}</h2>
              <p className="relative mt-5 max-w-lg text-white/85">{t("ctaBody")}</p>
              <a
                href={botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sky-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-100 active:scale-[0.98]"
              >
                <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden strokeWidth={2.4} />
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
        <StickyCta botUrl={botUrl} botLabel={t("heroCtaBot")} pricesLabel={t("heroCtaPrices")} />
      </div>
    </>
  );
}
