import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-kolleksiya";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram gift kolleksiya</strong> — profilda va marketda yig‘ilgan noyob sovg‘alar to‘plami. Maqsad:
      Limited Edition seriyalarni to‘plash, rare atributlarni topish va Gift Marketda qiymatni kuzatish.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <p>
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">Rare kolleksiya maqolasi</Link>,{" "}
        <Link href="/blog/limited-edition-telegram-gifts">Limited Edition</Link>,{" "}
        <Link href="/blog/top-telegram-rare-gifts">reyting</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Коллекция подарков Telegram — редкие серии и Gift Market.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Kolleksiya nima?", answer: "Siz yig‘gan noyob giftlar to‘plami." },
  { question: "Noyob giftlar qanday topiladi?", answer: "Limited tiraj, market filtrlari, upgrade." },
];

const faqRu = [{ question: "Что такое коллекция?", answer: "Набор редких gifts." }];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  keywords: ["telegram collection", "telegram nft collection", "rare gifts", "limited collection"],
  locales: {
    uz: {
      title: "Telegram Gifts kolleksiya qilish",
      excerpt: "To‘plash strategiyasi va noyoblik.",
      metaTitle: "Telegram Gift kolleksiya | 2026",
      metaDescription: "Telegram gifts kolleksiya qilish, noyob giftlar. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Boshlash",
      ctaBody: "Gift Market.",
      faq: faqUz,
    },
    ru: {
      title: "Коллекционирование Telegram Gifts",
      excerpt: "Стратегия.",
      metaTitle: "Коллекция Telegram Gifts",
      metaDescription: "Как собирать коллекцию gifts.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Начать",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
