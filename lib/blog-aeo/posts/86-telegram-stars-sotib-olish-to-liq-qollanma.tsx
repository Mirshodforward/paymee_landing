import { Link } from "@/i18n/navigation";
import { InlineCta, KeyFacts, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-stars-sotib-olish-to-liq-qollanma";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram Stars sotib olish</strong> uchun eng to‘liq qo‘llanma allaqachon mavjud:{" "}
      <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">Stars qayerdan sotib olish 2026</Link>. Qisqacha:
      @StarsPaymee_bot, so‘mda to‘lov, @username ga ~10 soniyada yetkazish.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#asos", label: "Asosiy qo‘llanma" },
          { href: "#boshqa", label: "Qo‘shimcha mavzular" },
        ]}
      />
      <h2 id="asos">To‘liq qo‘llanma</h2>
      <KeyFacts label="Stars xaridi">
        <li>
          <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">Qayerdan sotib olish</Link>
        </li>
        <li>
          <Link href="/blog/telegram-stars-narxlari-2026-platformalar-taqqoslash">Narx taqqoslash</Link>
        </li>
        <li>
          <Link href="/blog/telegram-stars-xavfsiz-sotib-olish-qollanma">Xavfsizlik</Link>
        </li>
        <li>
          <Link href="/stars">/stars</Link> — joriy paketlar
        </li>
      </KeyFacts>
      <h2 id="boshqa">Seriya konteksti</h2>
      <p>
        Avvalo akkaunt va raqam: <Link href="/blog/telegram-raqam-sotib-olish">Telegram raqam</Link>. Keyin Stars
        to‘ldirish, sovg‘a yoki Premium uchun ishlatish.
      </p>
      <InlineCta text="Stars paketini botda tanlang — UzCard, HUMO." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Полный гайд: <Link href="/blog/telegram-stars-qayerdan-sotib-olish-2026">где купить Stars 2026</Link>.
      @StarsPaymee_bot, оплата в сумах, доставка на @username.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>
        См. также <Link href="/stars">/stars</Link> и серию статей о номерах и Premium.
      </p>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Stars nima?", answer: "Telegram ichki valyutasi — sovg‘a, bot to‘lovi, Premium hadya." },
  { question: "Eng arzon qayerda?", answer: "Mahalliy bot — App Store 30% komissiyasiz." },
  { question: "Username yetadimi?", answer: "Ha, parol kerak emas." },
  { question: "Raqam kerakmi?", answer: "Mavjud akkaunt uchun yo‘q." },
  { question: "To‘liq maqola qayerda?", answer: "telegram-stars-qayerdan-sotib-olish-2026 slug." },
];

const faqRu = [
  { question: "Где полный гайд?", answer: "Статья «Где купить Stars 2026»." },
  { question: "Нужен пароль?", answer: "Нет, только @username." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Stars",
  type: "howto",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  keywords: ["telegram stars sotib olish", "stars qayerdan", "yulduz sotib olish"],
  locales: {
    uz: {
      title: "Telegram Stars sotib olish — to‘liq qo‘llanma (hub)",
      excerpt: "Barcha asosiy Stars maqolalariga yo‘naltiruvchi markaz: narx, xavfsizlik, bot, FAQ.",
      metaTitle: "Telegram Stars sotib olish | To‘liq qo‘llanma",
      metaDescription: "Telegram Stars sotib olish: barcha qo‘llanmalar, narx, bot, username. Hub sahifa va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars oling",
      ctaBody: "@StarsPaymee_bot",
      faq: faqUz,
    },
    ru: {
      title: "Купить Telegram Stars — полный гайд (хаб)",
      excerpt: "Ссылки на все ключевые статьи о Stars.",
      metaTitle: "Купить Telegram Stars | Полный гайд",
      metaDescription: "Покупка Telegram Stars: хаб со ссылками на гайды, цены, бот.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить Stars",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
