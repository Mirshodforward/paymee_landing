import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "top-telegram-rare-gifts";

function UzAnswer() {
  return (
    <p>
      <strong>Eng qimmat Telegram giftlar</strong> odatda collectible, past raqamli va cheklangan tirajli modellardir.
      To‘liq reyting: <Link href="/blog/eng-qimmat-telegram-sovgalari-reytingi">eng qimmat sovg‘alar reytingi</Link> +
      Gift Marketdagi joriy narxlar.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2>Eng mashhur kolleksiyalar</h2>
      <p>LibertyFigure, MoodPack va boshqa seriyalar Gift Marketda filtrlash orqali ko‘rinadi.</p>
      <p>
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Rare sovg‘alar</Link>,{" "}
        <Link href="/blog/telegram-gift-price">narx omillari</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Топ дорогих gifts — см. рейтинг на сайте и Gift Market.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Eng qimmat gift qaysi?", answer: "Vaqt o‘tishi bilan o‘zgaradi — collectible va Fragment narxlari." },
  { question: "Eng mashhur giftlar?", answer: "Cheklangan kolleksiyalar va trend modelllar." },
];

const faqRu = [{ question: "Самый дорогой gift?", answer: "Зависит от рынка." }];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: ["rare telegram gifts", "top telegram nft", "telegram expensive gifts", "best telegram gifts"],
  locales: {
    uz: {
      title: "Telegram Rare Gifts reytingi — 2026",
      excerpt: "Qimmat va mashhur kolleksion sovg‘alar.",
      metaTitle: "Top Telegram Rare Gifts | 2026",
      metaDescription: "Eng qimmat va mashhur Telegram rare gifts. Reyting va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Market",
      ctaBody: "Botda ko‘ring.",
      faq: faqUz,
    },
    ru: {
      title: "Рейтинг rare Telegram gifts",
      excerpt: "Дорогие подарки.",
      metaTitle: "Top rare Telegram gifts",
      metaDescription: "Рейтинг редких подарков Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Market",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
