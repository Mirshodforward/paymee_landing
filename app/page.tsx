import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { getTelegramBotUrl, siteConfig } from "@/lib/site";

const telegramBotUrl = getTelegramBotUrl();

const faqs = [
  {
    question: "StarsPaymee nima va qayerda ochiladi?",
    answer:
      "StarsPaymee — Telegram ichida ishlaydigan Mini App (WebApp): siz akkaunt orqali kirib, Telegram Stars sotib olish, Telegram Premium obunasini uzaytirish yoki Telegram Gift jo‘natishni bitta joydan bajarolasiz. Interfeys @twa-dev/sdk va Telegram WebApp API bilan moslangan.",
  },
  {
    question: "Qanday to‘lov vositalari qo‘llab-quvvatlanadi?",
    answer:
      "Asosiy oqim O‘zbekiston bank kartalari — UzCard va HUMO orqali so‘m (UZS) da to‘lov. Buyurtmadan keyin backend buyurtmani tekshiradi va tasdiqlangach Stars, Premium yoki Gift yuboriladi.",
  },
  {
    question: "Eski yoki cheklangan muddatli Telegram giftlar bilan nima qilish mumkin?",
    answer:
      "Platforma Telegramning ruxsat etilgan mexanizmalaridan foydalanib: cheklangan (limited), avvalgi sessiyadagi yoki endi oddiy koleksiya sifatida saqlanmayotgan giftlarni yulduz (Stars) balansiga yo‘naltirish yoki Telegram qoidalariga mos holda qayta ishlash bo‘yicha yo‘l-yo‘riq beradi. Aniq funksiya Mini App ichidagi Gift bo‘limida ko‘rsatiladi.",
  },
  {
    question: "Xavfsizlik va akkaunt tekshiruvi qanday?",
    answer:
      "Telegram WebApp initData HMAC-SHA256 bilan serverda tekshiriladi; CORS faqat ruxsat etilgan domenlar uchun; rate limiting va Helmet kabi HTTP xavfsizlik sarlavhalari qo‘llaniladi. Bu loyiha arxitekturasida server-to-server ichki kalitlar bilan himoyalangan.",
  },
  {
    question: "Referral va chegirmalar bormi?",
    answer:
      "Ha: referral havola orqali kelgan foydalanuvchilar xarid qilganda referrerga bonus yulduzlar hisoblanadi; chegirma paketlari va promokodlar Stars, Premium va Gift buyurtmalarida ishlatilishi mumkin.",
  },
] as const;

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const services = [
  {
    emoji: "⭐",
    title: "Telegram Stars",
    body: "Kerakli miqdorda yulduz tanlang — slot asosidagi narx, buyurtma holati polling orqali: to‘lov → yuborish → tasdiqlangan.",
    tag: "/stars",
  },
  {
    emoji: "💎",
    title: "Telegram Premium",
    body: "3, 6 yoki 12 oy obuna. Foydalanuvchini qidirish, Premium mavjudligi tekshiruvi va promokoddan keyingi buyurtma oqimi.",
    tag: "/premium",
  },
  {
    emoji: "🎁",
    title: "Telegram Gift",
    body: "Katalogdan sovg‘a tanlash, anonim yuborish, izoh va TGS ko‘rinishi — jo‘natish Telegram sendGift akasi orqali.",
    tag: "/gift",
  },
  {
    emoji: "✨",
    title: "Eski va limited giftlar",
    body: "Muddati o‘tgan yoki koleksiyasiz qolgan Telegram giftlar bilan ishlash: ularni Stars formatiga o‘tkazish va akkaunt bo‘ylab boshqarish uchun qulay interfeys.",
    tag: "Gift va Stars",
  },
] as const;

const steps = [
  {
    k: "1",
    title: "Botda oching",
    desc: "Telegramda havolani bosing va StarsPaymee Mini App ni ishga tushiring — profilingiz Telegram orqali avtomatik aniqlanadi.",
  },
  {
    k: "2",
    title: "Xizmatni tanlang",
    desc: "Stars, Premium yoki Gift: qabul qiluvchini tasdiqlang, miqdorni tanlang va narxni so‘mda ko‘ring.",
  },
  {
    k: "3",
    title: "To‘lang va qabul qiling",
    desc: "UzCard/HUMO bilan to‘lang; buyurtma tarixi va statuslar History bo‘limida — muvaffaqiyatda yulduz yoki Premium yoki Gift hisoblanadi.",
  },
] as const;

const trust = [
  { label: "initData HMAC", detail: "Serverda Telegram imzosini tekshirish" },
  { label: "Rate limit", detail: "IP bo‘yicha so‘rovlar cheklangan" },
  { label: "CORS va Helmet", detail: "Faqat ruxsat etilgan domenlar" },
  { label: "Buyurtma kuzatuv", detail: "ID bo‘yicha status API" },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd} />
      <a
        href="#asosiy"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-[#229ED9] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Asosiy kontentga o‘tish
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

        <header className="relative z-10 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75">
          <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#229ED9] text-lg text-white shadow-sm"
              >
                ★
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <nav
              aria-label="Asosiy navigatsiya"
              className="hidden items-center gap-6 text-sm font-medium md:flex"
            >
              <a href="#xizmatlar" className="text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]">
                Xizmatlar
              </a>
              <a href="#jarayon" className="text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]">
                Jarayon
              </a>
              <a href="#ishonch" className="text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]">
                Ishonch
              </a>
              <a href="#faq" className="text-slate-600 hover:text-[#229ED9] dark:text-slate-400 dark:hover:text-[#229ED9]">
                FAQ
              </a>
            </nav>
            <a
              href={telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#229ED9] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#1e8dc4] md:px-5"
            >
              Telegramda ochish
            </a>
          </div>
        </header>

        <main id="asosiy">
          <section
            className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:pt-28"
            aria-labelledby="hero-heading"
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center">
              <div>
                <p className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#229ED9] sm:text-sm">
                  <span>Telegram Mini App</span>
                  <span className="hidden text-slate-400 sm:inline" aria-hidden>
                    ·
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">UzCard · HUMO</span>
                </p>
                <h1
                  id="hero-heading"
                  className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] dark:text-white"
                >
                  Telegram{" "}
                  <span className="text-[#229ED9]">Stars</span>,{" "}
                  <span className="dark:text-amber-300/95">Premium</span> va{" "}
                  <span className="text-fuchsia-600 dark:text-fuchsia-400">Gift</span>{" "}
                  — bitta platformada
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  {siteConfig.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={telegramBotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition hover:bg-[#1e8dc4]"
                  >
                    Mini App ni ochish
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#xizmatlar"
                    className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-500"
                  >
                    Xizmatlar
                  </a>
                </div>
                <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400" aria-hidden>
                      ●
                    </span>
                    So‘mda shaffof narxlash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400" aria-hidden>
                      ●
                    </span>
                    Eskirgan giftlar bilan ishlash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400" aria-hidden>
                      ●
                    </span>
                    Referral bonuslari
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#229ED9]/15 via-transparent to-fuchsia-500/10 blur-2xl" aria-hidden />
                <article
                  className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-900/[0.06] backdrop-blur dark:border-slate-700/90 dark:bg-slate-900/90"
                  aria-label="StarsPaymee xizmatlari qisqacha"
                >
                  <header className="flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-slate-700">
                    <span className="text-3xl" aria-hidden>
                      📱
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Live flow
                      </p>
                      <p className="font-semibold text-slate-900 dark:text-white">Dashboard → Stars / Premium / Gift</p>
                    </div>
                  </header>
                  <dl className="mt-6 space-y-5 text-sm">
                    <div className="flex justify-between gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
                      <dt className="text-slate-500 dark:text-slate-400">Stars buyurtmasi</dt>
                      <dd className="font-medium text-right text-slate-900 dark:text-slate-100">
                        narxi ↔ slot / polling
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-slate-100 pb-5 dark:border-slate-800">
                      <dt className="text-slate-500 dark:text-slate-400">Premium</dt>
                      <dd className="font-medium text-right text-slate-900 dark:text-slate-100">
                        qidiruv + 3|6|12 oy
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 pb-2">
                      <dt className="text-slate-500 dark:text-slate-400">Gift + limited</dt>
                      <dd className="font-medium text-right text-slate-900 dark:text-slate-100">
                        TGS tanlash va jo‘natish
                      </dd>
                    </div>
                  </dl>
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
              <h2
                id="svc-heading"
                className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Nimalarni qilish mumkin?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                Loyiha modullari Telegram bot + Express REST + Postgres va React (Vite) Mini App tuzilmasida ishlaydi;
                asosiy sahifalar: boshqaruv paneli, Stars, Premium, Gift, tarix va referral — bularning barchasi
                marketing uchun quyidagi ustunvorlik bilan ifodalangan.
              </p>
              <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-[#229ED9]/35 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-[#229ED9]/35 dark:hover:bg-slate-950"
                  >
                    <span className="text-4xl drop-shadow-sm" aria-hidden>
                      {s.emoji}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {s.body}
                    </p>
                    <p className="mt-4 font-mono text-xs text-[#229ED9] opacity-80">{s.tag}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="jarayon"
            className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
            aria-labelledby="process-heading"
          >
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Uch bosqichda
            </h2>
            <ol className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.k} className="relative rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900/40">
                  <span className="absolute -top-3 left-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#229ED9] text-sm font-bold text-white shadow-md">
                    {s.k}
                  </span>
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
                Texnik ishonch
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                Backend va frontend qatlamidagi asosiy himoya choralari landingda ham ravshan ko‘rinadi —
                SEO uchun mazmun bilan birga EEAT tayanchi bo‘la oladi.
              </p>
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {trust.map((t) => (
                  <li
                    key={t.label}
                    className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <span className="text-sm font-bold text-[#229ED9]">{t.label}</span>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="cta-mid-heading">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#229ED9] px-8 py-16 text-white shadow-2xl sm:px-14">
              <h2 id="cta-mid-heading" className="max-w-xl text-2xl font-bold leading-tight sm:text-4xl">
                Telegramda sahifani yuklang va birinchi Stars yoki Premium buyurtmangizni qiling
              </h2>
              <p className="mt-5 max-w-lg text-white/85">
                Chegirmalar va promokodlar, referral balansidan yechib olish — barchasi Mini App navigatsiyasida mavjud.
              </p>
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sky-800 shadow-xl transition hover:bg-slate-100"
              >
                {siteConfig.name} · Telegram
              </a>
            </div>
          </section>

          <section id="faq" className="bg-white pb-24 pt-4 dark:bg-slate-950" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 dark:text-white">
                Ko‘p so‘raladigan savollar
              </h2>
              <div className="mt-12 space-y-3">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition open:border-[#229ED9]/35 open:bg-white open:shadow-md dark:border-slate-800 dark:bg-slate-900/55 dark:open:bg-slate-900"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 outline-none marker:content-none [&::-webkit-details-marker]:hidden dark:text-white">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.question}</span>
                        <span
                          aria-hidden
                          className="mt-1 shrink-0 text-slate-400 transition-transform group-open:rotate-180 dark:text-slate-500"
                        >
                          ▼
                        </span>
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

        <footer className="border-t border-slate-200 bg-slate-900 py-14 text-slate-300 dark:border-slate-800">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-lg font-bold text-white">{siteConfig.name}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed opacity-90">
                Telegram Stars, Premium, Gift va eski giftlar bilan ishlash — O‘zbekiston kartalari bilan so‘m to‘lov.
              </p>
            </div>
            <address id="aloqa" className="not-italic">
              <p className="text-xs uppercase tracking-wider text-slate-500">Mini App havolasi</p>
              <a
                href={telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-[#229ED9] hover:text-sky-300"
              >
                {telegramBotUrl.replace(/^https?:\/\//, "")}
              </a>
            </address>
          </div>
        </footer>
      </div>
    </>
  );
}
