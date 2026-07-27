import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { KeyFacts, InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "starspaymee-nft-market";

function UzAnswer() {
  return (
    <p>
      <strong>StarsPaymee NFT Market (Gift Market)</strong> — O‘zbekistonda Telegram kolleksion giftlarni{" "}
      <strong>so‘mda</strong> sotib olish va sotish interfeysi: LibertyFigure, MoodPack, filtrlash va balans. Bot:{" "}
      @StarsPaymee_bot.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#nima", label: "StarsPaymee" }, { href: "#xarid", label: "Xarid" }]} />
      <h2 id="nima">StarsPaymee nima?</h2>
      <p>
        Stars, Premium, Gifts va endi <strong>Gift Market</strong> — bitta ekotizim. Mahalliy to‘lov, tez yetkazish,
        o‘zbek tilidagi qo‘llab-quvvatlash.
      </p>
      <KeyFacts label="Gift Market">
        <li>Narxlar so‘mda (masalan 194 000 – 220 000+)</li>
        <li>Kolleksiya chipalari va saralash</li>
        <li>«Mening giftlarim» va balans</li>
        <li>
          <Link href="/blog/telegram-nft-gift-nima">NFT Gift qo‘llanmasi</Link>
        </li>
      </KeyFacts>
      <NftGiftMarketBoard locale="uz" />
      <h2 id="xarid">Qanday xarid qilaman?</h2>
      <ol>
        <li>@StarsPaymee_bot ni oching</li>
        <li>Gift Market bo‘limiga o‘ting</li>
        <li>Sovg‘ani tanlang va so‘mda to‘lang</li>
      </ol>
      <InlineCta text="Gift Market — hozir oching." />
      <p>
        Nima uchun tanlash: <strong>telegram marketplace uzbekistan</strong> uchun so‘m, mahalliy karta, blog
        seriyasi.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>StarsPaymee Gift Market — NFT-подарки в сумах в @StarsPaymee_bot.</p>;
}
function RuBody() {
  return (
    <>
      <NftGiftMarketBoard locale="ru" />
      <NftGiftSeriesNav locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "StarsPaymee nima?", answer: "Telegram Stars, Premium, Gifts va Gift Market xizmati." },
  { question: "Qanday giftlar mavjud?", answer: "Kolleksion NFT giftlar — joriy ro‘yxat botda." },
  { question: "To‘lov qanday amalga oshiriladi?", answer: "UzCard, HUMO, Click, Payme, Paynet — so‘mda." },
  { question: "Qanday qilib xarid qilaman?", answer: "Bot → Gift Market → tanlash → to‘lov." },
  { question: "Nima uchun StarsPaymee tanlash kerak?", answer: "Mahalliy to‘lov, so‘mda narx, o‘zbekcha kontent." },
];

const faqRu = [
  { question: "Что такое StarsPaymee?", answer: "Сервис Stars, Premium и Gift Market в сумах." },
  { question: "Как купить?", answer: "Бот → Gift Market." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "cta",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: [
    "StarsPaymee NFT",
    "gift market uzbekistan",
    "telegram nft uzbekistan",
    "telegram collectibles uzbekistan",
    "telegram gifts shop",
  ],
  locales: {
    uz: {
      title: "StarsPaymee NFT Market — Gift Market O‘zbekistonda",
      excerpt: "So‘mda kolleksion giftlar, to‘lov, xarid qadamlari va FAQ.",
      metaTitle: "StarsPaymee NFT Market | Gift Market UZ",
      metaDescription: "StarsPaymee Gift Market: qanday giftlar, to‘lov so‘mda, xarid qilish. Telegram NFT Uzbekistan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — NFT giftlar so‘mda.",
      faq: faqUz,
    },
    ru: {
      title: "StarsPaymee NFT Market — Gift Market",
      excerpt: "Подарки в сумах.",
      metaTitle: "StarsPaymee NFT Market",
      metaDescription: "Gift Market StarsPaymee в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Market",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
