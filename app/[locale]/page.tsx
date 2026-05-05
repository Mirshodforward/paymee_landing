import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Gem,
  Gift,
  Gauge,
  KeyRound,
  LayoutGrid,
  Send,
  Shield,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { GiftDashboardIcon } from "@/components/icons/gift-dashboard-icon";
import { GiftStickerShowcase } from "@/components/tgs/gift-sticker-showcase";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";

const serviceIcons = [Star, Gem, Gift, Sparkles] as const;
const stepIcons = [Smartphone, LayoutGrid, CreditCard] as const;
const trustIcons = [KeyRound, Gauge, Shield, ClipboardList] as const;

type SvcItem = { title: string; body: string; tag: string };
type StepItem = { title: string; desc: string };
type TrustItem = { label: string; detail: string };
type FaqItem = { question: string; answer: string };

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const telegramBotUrl = getTelegramBotUrl();
  const t = await getTranslations("home");
  const seo = await getTranslations({ locale, namespace: "seo" });

  const svcItems = t.raw("svcItems") as SvcItem[];
  const steps = t.raw("steps") as StepItem[];
  const trustItems = t.raw("trustItems") as TrustItem[];
  const faqItems = t.raw("faqItems") as FaqItem[];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const services: { Icon: LucideIcon; title: string; body: string; tag: string }[] = svcItems.map(
    (s, i) => ({
      Icon: serviceIcons[i] ?? Star,
      title: s.title,
      body: s.body,
      tag: s.tag,
    }),
  );

  const stepsWithIcon = steps.map((s, i) => ({
    k: String(i + 1),
    Icon: stepIcons[i] ?? Smartphone,
    title: s.title,
    desc: s.desc,
  }));

  const trustWithIcon = trustItems.map((tr, i) => ({
    Icon: trustIcons[i] ?? Shield,
    label: tr.label,
    detail: tr.detail,
  }));

  return (
    <>
      <JsonLd data={faqLd} />
      <a
        href="#asosiy"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#229ED9] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t("skipToMain")}
      </a>
      <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(34,158,217,0.22),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,165,36,0.06),transparent_40%)]"
        />

        <SiteHeader />

        <main id="asosiy">
          <section
            className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:pt-28"
            aria-labelledby="hero-heading"
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
                <p className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#229ED9] sm:text-sm">
                  <Send className="size-4 shrink-0 opacity-90" aria-hidden strokeWidth={2} />
                  <span>{t("heroBadgeTelegram")}</span>
                  <span className="hidden text-slate-400 sm:inline" aria-hidden>
                    ·
                  </span>
                  <CreditCard className="size-4 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden strokeWidth={2} />
                  <span className="text-slate-600 dark:text-slate-400">{t("heroBadgeCards")}</span>
                </p>
                <h1
                  id="hero-heading"
                  className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] dark:text-white"
                >
                  {t.rich("heroHeadline", {
                    stars: (chunks) => <span className="text-[#229ED9]">{chunks}</span>,
                    premium: (chunks) => <span className="dark:text-amber-300/95">{chunks}</span>,
                    gift: (chunks) => <span className="text-fuchsia-600 dark:text-fuchsia-400">{chunks}</span>,
                  })}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{seo("description")}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={telegramBotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition hover:bg-[#1e8dc4]"
                  >
                    {t("heroCtaMiniApp")}
                    <ArrowRight className="size-4 shrink-0" aria-hidden strokeWidth={2} />
                  </a>
                  <a
                    href="#xizmatlar"
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500"
                  >
                    {t("heroCtaServices")}
                  </a>
                </div>
                <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden strokeWidth={2} />
                    {t("bulletTransparent")}
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden strokeWidth={2} />
                    {t("bulletOldGifts")}
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden strokeWidth={2} />
                    {t("bulletReferral")}
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#229ED9]/15 via-transparent to-fuchsia-500/10 blur-2xl" aria-hidden />
                <article
                  className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-900/[0.06] backdrop-blur dark:border-slate-700/90 dark:bg-slate-900/90"
                  aria-label={t("cardAria")}
                >
                  <header className="flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-slate-700">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#229ED9]/15 text-[#229ED9] dark:bg-[#229ED9]/20">
                      <Smartphone className="size-6" aria-hidden strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {t("cardLiveFlow")}
                      </p>
                      <p className="flex flex-wrap items-center gap-1 font-semibold text-slate-900 dark:text-white">
                        {t("cardDashboardFlow")}{" "}
                        <ArrowRight className="mx-0.5 size-4 shrink-0 text-slate-400" aria-hidden strokeWidth={2} /> Stars / Premium /
                        Gift
                      </p>
                    </div>
                  </header>
                  <dl className="mt-6 space-y-5 text-sm">
                    <div className="flex justify-between gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
                      <dt className="text-slate-500 dark:text-slate-400">{t("starsOrder")}</dt>
                      <dd className="flex items-center justify-end gap-1 font-medium text-right text-slate-900 dark:text-slate-100">
                        {t.rich("ddPriceSlot", {
                          arrow: () => <ArrowLeftRight className="mx-1 size-3.5 shrink-0 text-slate-400" aria-hidden strokeWidth={2} />,
                        })}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
                      <dt className="text-slate-500 dark:text-slate-400">{t("premiumLabelShort")}</dt>
                      <dd className="font-medium text-right text-slate-900 dark:text-slate-100">{t("premiumDd")}</dd>
                    </div>
                    <div className="flex justify-between gap-4 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400">{t("giftLimitedLabel")}</dt>
                      <dd className="font-medium text-right text-slate-900 dark:text-slate-100">{t("giftDd")}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-700">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t("heroQuickActions")}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={telegramBotUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("buyStarsShort")}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3 py-4 text-center transition hover:border-amber-400/50 hover:shadow-md active:scale-[0.99] dark:border-slate-700 dark:from-slate-900 dark:to-slate-950 dark:hover:border-amber-400/35"
                      >
                        <GiftDashboardIcon color="#FFDA03" size={92} className="transition group-hover:scale-[1.04]" />
                        <span className="text-xs font-semibold leading-tight text-slate-800 sm:text-[13px] dark:text-slate-100">
                          {t("buyStarsShort")}
                        </span>
                      </a>
                      <a
                        href={telegramBotUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("buyPremiumShort")}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3 py-4 text-center transition hover:border-[#219cfb]/50 hover:shadow-md active:scale-[0.99] dark:border-slate-700 dark:from-slate-900 dark:to-slate-950 dark:hover:border-[#219cfb]/45"
                      >
                        <GiftDashboardIcon color="#219cfb" size={92} className="transition group-hover:scale-[1.04]" />
                        <span className="text-xs font-semibold leading-tight text-slate-800 sm:text-[13px] dark:text-slate-100">
                          {t("buyPremiumShort")}
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section
            id="xizmatlar"
            className="relative border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-900/35"
            aria-labelledby="svc-heading"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 id="svc-heading" className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t("svcHeading")}
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{t("svcIntro")}</p>
              <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-[#229ED9]/35 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-[#229ED9]/35 dark:hover:bg-slate-950"
                  >
                    <s.Icon className="size-8 text-[#229ED9]" strokeWidth={1.85} aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
                    <p className="mt-4 font-mono text-xs text-[#229ED9] opacity-80">{s.tag}</p>
                  </li>
                ))}
              </ul>
              <GiftStickerShowcase heading={t("giftStickerHeading")} caption={t("giftStickerCaption")} />
            </div>
          </section>

          <section id="jarayon" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t("processHeading")}
            </h2>
            <ol className="mt-14 grid gap-8 md:grid-cols-3">
              {stepsWithIcon.map((s) => (
                <li
                  key={s.k}
                  className="relative rounded-2xl border border-slate-200 bg-white p-8 pt-10 dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="absolute -top-3 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#229ED9] text-sm font-bold text-white shadow-md">
                    {s.k}
                  </span>
                  <div className="flex justify-end">
                    <s.Icon className="size-7 text-[#229ED9]/80" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">{s.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="ishonch"
            className="border-y border-slate-200 bg-slate-100/80 py-20 dark:border-slate-800 dark:bg-slate-900/55"
            aria-labelledby="trust-heading"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 id="trust-heading" className="text-3xl font-bold text-slate-900 dark:text-white">
                {t("trustHeading")}
              </h2>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {trustWithIcon.map((tr) => (
                  <li
                    key={tr.label}
                    className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <tr.Icon className="size-7 text-[#229ED9]" strokeWidth={1.85} aria-hidden />
                    <span className="mt-3 block text-sm font-bold text-slate-900 dark:text-white">{tr.label}</span>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tr.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="cta-mid-heading">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#229ED9] px-8 py-16 text-white shadow-2xl sm:px-14">
              <h2 id="cta-mid-heading" className="max-w-xl text-2xl font-bold leading-tight sm:text-4xl">
                {t("ctaHeading")}
              </h2>
              <p className="mt-5 max-w-lg text-white/85">{t("ctaBody")}</p>
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sky-800 shadow-xl transition hover:bg-slate-100"
              >
                {t("ctaButton", { brand: siteConfig.name })}
                <ArrowRight className="size-4" aria-hidden strokeWidth={2.5} />
              </a>
            </div>
          </section>

          <section id="faq" className="bg-white pb-24 pt-4 dark:bg-slate-950" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 dark:text-white">
                {t("faqHeading")}
              </h2>
              <div className="mt-12 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition open:border-[#229ED9]/35 open:bg-white open:shadow-md dark:border-slate-800 dark:bg-slate-900/55 dark:open:bg-slate-900"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 outline-none marker:content-none [&::-webkit-details-marker]:hidden dark:text-white">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.question}</span>
                        <ChevronDown
                          className="mt-0.5 size-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180 dark:text-slate-500"
                          aria-hidden
                          strokeWidth={2}
                        />
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
