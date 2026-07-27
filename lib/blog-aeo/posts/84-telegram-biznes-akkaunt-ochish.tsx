import { Link } from "@/i18n/navigation";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-biznes-akkaunt-ochish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram biznes akkaunti</strong> — Telegram Business / kanal yoki bot orqali mijozlar bilan ishlash:
      jadval, tezkor javoblar, manzil va kontakt. Oddiy akkauntdan farqi — biznes profil va avtomatlashtirish; ochish
      uchun avvalo oddiy akkaunt va telefon raqami kerak.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#qadamlar", label: "Ochish" }, { href: "#api", label: "API" }]} />
      <h2 id="qadamlar">Biznes profilni qanday yoqish?</h2>
      <ol>
        <li>Telegram → Sozlamalar → Business (mavjud bo‘lsa)</li>
        <li>Ish vaqti, manzil, havolalar to‘ldiring</li>
        <li>Kanal yoki bot bilan bog‘lang</li>
      </ol>
      <p>
        Batafsil: <Link href="/blog/telegram-business-nima">Telegram Business nima?</Link> va{" "}
        <Link href="/blog/telegram-business-api-umumiy-faq">Business API FAQ</Link>.
      </p>
      <h2 id="api">Stars, to‘lov va API</h2>
      <p>
        Biznes uchun Stars to‘lovlari va avtomatik Premium/Gifts —{" "}
        <Link href="/blog/telegram-stars-api-nima-ulanish">Stars API</Link>,{" "}
        <Link href="/blog/payment-api-uzbekistan-tolov-integratsiya">O‘zbekiston to‘lov API</Link>.
      </p>
      <InlineCta text="Mijozlarga Premium yoki Stars sotish — StarsPaymee Business integratsiyasi." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      <strong>Бизнес-аккаунт Telegram</strong> — профиль для клиентов, часы работы, быстрые ответы. Нужен обычный
      аккаунт с номером; подробнее в статье <Link href="/blog/telegram-business-nima">Telegram Business</Link>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>Настройка Business и связь с API — в связанных статьях серии.</p>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Biznes akkaunt bepulmi?", answer: "Telegram Business funksiyalari obuna talab qilishi mumkin — rasmiy e’lonlarni tekshiring." },
  { question: "Raqam kerakmi?", answer: "Ha, asosiy akkaunt telefon bilan bog‘langan bo‘lishi kerak." },
  { question: "Kanal alohidami?", answer: "Kanal biznes aloqasi uchun alohida, lekin bir ekotizimda ishlaydi." },
];

const faqRu = [
  { question: "Нужен номер?", answer: "Да, для базового аккаунта." },
  { question: "Где про Business?", answer: "Статья «Telegram Business nima» на сайте." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "howto",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: ["telegram biznes akkaunt", "telegram business", "biznes profil telegram"],
  locales: {
    uz: {
      title: "Telegram biznes akkaunti ochish — 2026 qo‘llanma",
      excerpt: "Business profil, kanal, bot va to‘lov API. Raqam va xavfsizlik.",
      metaTitle: "Telegram biznes akkaunt ochish | 2026",
      metaDescription: "Telegram biznes akkaunti qanday ochiladi: Business profil, API, Stars. Qo‘llanma va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Biznes uchun Stars",
      ctaBody: "API va mahalliy to‘lov — blogdagi Business maqolalar.",
      faq: faqUz,
    },
    ru: {
      title: "Открыть бизнес-аккаунт Telegram — 2026",
      excerpt: "Business-профиль, канал и API.",
      metaTitle: "Бизнес-аккаунт Telegram | 2026",
      metaDescription: "Как открыть бизнес-аккаунт Telegram: профиль, API, Stars.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Stars для бизнеса",
      ctaBody: "Интеграции в блоге.",
      faq: faqRu,
    },
  },
};
