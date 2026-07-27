import { Link } from "@/i18n/navigation";
import { InlineCta, Steps, Step, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-gifts-yuborish-qollanma";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram Gifts (sovg‘alar)</strong> Stars evaziga yuboriladi: profilda ko‘rinadigan raqamli sovg‘a.
      @StarsPaymee_bot orqali Stars to‘ldiring, keyin Telegram ichida sovg‘a tanlang yoki botdan Gifts xizmatidan
      foydalaning. Batafsil: <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">qanday yuboriladi</Link>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#qadamlar", label: "Qadamlar" }, { href: "#narx", label: "Narx" }]} />
      <h2 id="qadamlar">Sovg‘a yuborish</h2>
      <Steps>
        <Step title="Stars balans">Botda Stars sotib oling yoki mavjud balans.</Step>
        <Step title="Sovg‘a tanlash">Telegram chat → Gifts yoki bot katalogi.</Step>
        <Step title="Qabul qiluvchi">Do‘stingiz @username.</Step>
      </Steps>
      <h2 id="narx">Narx va kolleksiya</h2>
      <p>
        <Link href="/gifts">/gifts</Link>,{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">narxlari ro‘yxati</Link>,{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">rare sovg‘alar</Link>.
      </p>
      <InlineCta text="Stars + Gifts — bir botda, so‘mda." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Gifts отправляются за Stars. Пополните через @StarsPaymee_bot — см.{" "}
      <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">как отправить подарок</Link>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>
        <Link href="/gifts">/gifts</Link>
      </p>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Gifts uchun nima kerak?", answer: "Telegram Stars balansi." },
  { question: "Stars qayerdan?", answer: "StarsPaymee bot, username bilan." },
  { question: "Anonim yuborish?", answer: "Telegram sozlamalarida anonim opsiya bo‘lishi mumkin." },
];

const faqRu = [
  { question: "Что нужно для Gifts?", answer: "Баланс Stars." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  keywords: ["telegram gifts", "telegram sovg'a", "gifts yuborish", "stars sovg'a"],
  locales: {
    uz: {
      title: "Telegram Gifts yuborish — to‘liq qo‘llanma 2026",
      excerpt: "Sovg‘a yuborish, Stars balans, narxlar va kolleksiya.",
      metaTitle: "Telegram Gifts yuborish | 2026 qo‘llanma",
      metaDescription: "Telegram sovg‘alar qanday yuboriladi: Stars, bot, narx. FAQ va ichki havolalar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Stars to‘ldiring",
      ctaBody: "Gifts uchun avvalo Stars.",
      faq: faqUz,
    },
    ru: {
      title: "Отправка Telegram Gifts — гайд 2026",
      excerpt: "Подарки за Stars, бот, цены.",
      metaTitle: "Telegram Gifts отправка | 2026",
      metaDescription: "Как отправить Telegram Gifts: Stars, бот, FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Пополнить Stars",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
