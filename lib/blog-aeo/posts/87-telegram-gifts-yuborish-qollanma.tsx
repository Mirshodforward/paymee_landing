import { Link } from "@/i18n/navigation";
import { InlineCta, Step, Steps, Toc } from "@/components/blog/aeo-blocks";
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

function EnAnswer() {
  return (
    <p>
      <strong>Telegram Gifts</strong> are digital presents sent for Stars and shown on the recipient&rsquo;s profile.
      Top up Stars through @StarsPaymee_bot, then pick a gift inside Telegram — or buy the gift itself in so&lsquo;m
      in the bot. The full walkthrough is in{" "}
      <Link href="/blog/telegram-gifts-qanday-yuboriladi-qollanma">how to send a gift</Link>.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <Toc label="Contents" items={[{ href: "#qadamlar", label: "The steps" }, { href: "#narx", label: "Price" }]} />
      <h2 id="qadamlar">Sending a gift</h2>
      <Steps>
        <Step title="Stars balance">Buy Stars in the bot, or use the balance you already hold.</Step>
        <Step title="Pick the gift">In a Telegram chat via Gifts, or from the bot&rsquo;s catalogue.</Step>
        <Step title="Name the recipient">Your friend&rsquo;s @username — copy it from their profile.</Step>
      </Steps>
      <p>
        Buying the gift directly in so&lsquo;m skips the Stars step entirely, which is usually the simpler route for
        anyone without an international card.
      </p>
      <h2 id="narx">Price and collections</h2>
      <p>
        See the <Link href="/gifts">Gifts page</Link>,{" "}
        <Link href="/blog/telegram-gifts-narxlari-royxati">the price list</Link> and{" "}
        rare gifts.
      </p>
      <InlineCta text="Stars and Gifts in one bot, paid in so\u2018m." />
      <GrowthSeriesAside locale="en" />
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

const faqEn = [
  { question: "How are Telegram gifts sent?", answer: "For Stars inside Telegram, or bought directly in so\u2018m through the bot." },
  { question: "Do I need Stars first?", answer: "Only for the in-app route. Buying the gift in the bot needs no Stars." },
  { question: "What does the recipient need?", answer: "Just a Telegram account with a username." },
  { question: "Can it be anonymous?", answer: "Yes — choose anonymity before paying; it cannot be changed after." },
  { question: "Can the recipient convert it?", answer: "Ordinary gifts can be converted back into Stars." },
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
    en: {
      title: "Sending Telegram Gifts — a short guide",
      excerpt: "The two routes, what the recipient needs and where to check prices.",
      metaTitle: "Send Telegram Gifts | Guide 2026",
      metaDescription: "How to send Telegram gifts: for Stars inside the app or bought in so\u2018m through the bot. Steps, prices and collections.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Send a gift",
      ctaBody: "@StarsPaymee_bot — Stars and Gifts, paid in so\u2018m.",
      faq: faqEn,
    },
  },
};
