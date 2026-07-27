import { Link } from "@/i18n/navigation";
import { InlineCta, KeyFacts, Steps, Step, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-premium-sotib-olish-2026";

function UzAnswer() {
  return (
    <p>
      O‘zbekistonda <strong>Telegram Premium</strong>ni eng qulay <strong>@StarsPaymee_bot</strong> orqali so‘mda
      sotib olish mumkin: UzCard, HUMO, Click, Payme. Ko‘p paketlarda faqat <strong>@username</strong> kerak — parol
      so‘ralmaydi, o‘rtacha <strong>10 soniyada</strong> faollashadi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#narx", label: "Narxlar" },
          { href: "#usul", label: "Sotib olish usuli" },
          { href: "#faq-link", label: "Bog‘liq maqolalar" },
        ]}
      />
      <h2 id="narx">Telegram Premium narxlari (2026)</h2>
      <KeyFacts label="StarsPaymee Premium">
        <li>3 / 6 / 12 oy paketlar — <Link href="/premium">/premium</Link> sahifasida joriy narx</li>
        <li>Mahalliy kartalar — Click, Payme, UzCard, HUMO</li>
        <li>Username bilan yetkazish — login talab qilinmaydi</li>
      </KeyFacts>
      <h2 id="usul">Qanday sotib olish?</h2>
      <Steps>
        <Step title="Botni oching">@StarsPaymee_bot → Premium.</Step>
        <Step title="Muddatni tanlang">3, 6 yoki 12 oy.</Step>
        <Step title="Username kiriting">@username qabul qiluvchining.</Step>
        <Step title="To‘lang">So‘mda, kartadan.</Step>
      </Steps>
      <InlineCta text="Premium hozir kerakmi? Botda 10 soniyada faollashadi." />
      <h2 id="faq-link">Qo‘shimcha o‘qish</h2>
      <p>
        <Link href="/blog/telegram-premium-eng-oson-usul">Eng oson usul</Link>,{" "}
        <Link href="/blog/telegram-premium-narxi-ozbekistonda-2026">narx O‘zbekistonda</Link>,{" "}
        <Link href="/blog/telegram-premium-vs-stars-farqi">Premium vs Stars</Link>.
      </p>
      <p>
        Avvalo raqam kerak bo‘lsa: <Link href="/blog/telegram-raqam-sotib-olish">Telegram raqam sotib olish</Link>.
      </p>
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      В Узбекистане <strong>Telegram Premium</strong> удобно купить через <strong>@StarsPaymee_bot</strong> в сумах:
      UzCard, HUMO, Click, Payme. Часто достаточно <strong>@username</strong> — без пароля, ~10 секунд активации.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2>Цены и покупка</h2>
      <p>
        Пакеты на <Link href="/premium">/premium</Link>. Подробнее:{" "}
        <Link href="/blog/telegram-premium-eng-oson-usul">самый простой способ</Link>.
      </p>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Premium uchun karta kerakmi?", answer: "O‘zbekiston bank kartasi yetadi; Visa shart emas." },
  { question: "Parol so‘raladimi?", answer: "Username oqimida yo‘q — bu xavfsizlik uchun muhim." },
  { question: "Sovg‘a qilish mumkinmi?", answer: "Ha, do‘stingiz @username ini kiriting." },
  { question: "Premium va Stars farqi?", answer: "Premium obuna; Stars ichki valyuta — alohida maqola." },
  { question: "Raqam kerakmi?", answer: "Mavjud akkaunt uchun yo‘q; yangi akkaunt uchun raqam kerak bo‘ladi." },
];

const faqRu = [
  { question: "Нужна ли зарубежная карта?", answer: "Нет, подходят UzCard/HUMO и локальные системы." },
  { question: "Нужен пароль?", answer: "В потоке по username — нет." },
  { question: "Можно подарить?", answer: "Да, укажите @username друга." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Premium",
  type: "howto",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: ["telegram premium sotib olish", "telegram premium narxi", "premium o'zbekiston", "username premium"],
  howToSteps: [
    { name: "Bot", text: "@StarsPaymee_bot → Premium." },
    { name: "Paket", text: "Muddatni tanlang." },
    { name: "To‘lov", text: "So‘mda to‘lang." },
  ],
  locales: {
    uz: {
      title: "Telegram Premium sotib olish 2026 — O‘zbekiston qo‘llanmasi",
      excerpt: "Premium narxi, username bilan faollashish, UzCard/Click/Payme va 10 soniyada yetkazish.",
      metaTitle: "Telegram Premium sotib olish 2026 | O‘zbekiston",
      metaDescription: "Telegram Premium qanday sotib olinadi: narx, bot, username, mahalliy to‘lov. FAQ va qadamlar 2026.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium oling",
      ctaBody: "@StarsPaymee_bot — username bilan, so‘mda.",
      faq: faqUz,
    },
    ru: {
      title: "Купить Telegram Premium 2026 — Узбекистан",
      excerpt: "Цена, активация по username, оплата картой.",
      metaTitle: "Купить Telegram Premium 2026 | Узбекистан",
      metaDescription: "Как купить Telegram Premium: цена, бот, username, оплата в сумах. FAQ 2026.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить Premium",
      ctaBody: "@StarsPaymee_bot в сумах.",
      faq: faqRu,
    },
  },
};
