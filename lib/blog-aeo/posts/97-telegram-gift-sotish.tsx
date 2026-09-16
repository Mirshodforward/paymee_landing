import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { Step, Steps, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-sotish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram gift sotish</strong> — collectible sovg‘ani Gift Marketga qo‘yish yoki TON/Fragment orqali
      uzatish. StarsPaymee Gift Marketda sotuvchi balans <strong>so‘mda</strong> yechilishi mumkin (bot qoidalariga
      qarab).
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2>Giftni qanday sotaman?</h2>
      <Steps>
        <Step title="Collectible">Faqat collectible uzatiladi.</Step>
        <Step title="Market">Gift Market → sotuvga qo‘yish.</Step>
        <Step title="Narx">Raqobatbardosh narx belgilang.</Step>
        <Step title="Balans">Sotuvdan keyin balansni boshqaring.</Step>
      </Steps>
      <p>
        <Link href="/blog/telegram-sovgani-sotish-mumkinmi">Sotish mumkinmi?</Link>,{" "}
        <Link href="/blog/telegram-nft-market">NFT market</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Продажа через Gift Market в боте.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

function EnAnswer() {
  return (
    <p>
      <strong>Selling a Telegram gift</strong> means listing a collectible on a gift market or transferring it over
      TON. Only <strong>collectible</strong> gifts can be transferred — ordinary ones cannot be resold, they can
      only be converted back to Stars.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <h2>How do I sell a gift?</h2>
      <Steps>
        <Step title="Check it is collectible">Ordinary gifts cannot be transferred or resold.</Step>
        <Step title="Check the dates">Some gifts carry an earliest resale date — it is shown on the gift card.</Step>
        <Step title="Set a price">Compare with copies that share the same model, backdrop and symbol.</Step>
        <Step title="Account for commission">Resale carries a fee, so your net is below the listed price.</Step>
      </Steps>
      <p>
        If the listing does not go through, or nobody buys, the causes are covered in{" "}
        why a gift is not selling. See also{" "}
        <Link href="/blog/telegram-gift-price">what a gift&rsquo;s price depends on</Link>.
      </p>
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  { question: "Giftni qanday sotaman?", answer: "Gift Market interfeysida sotuvga qo‘ying." },
  { question: "Komissiya bormi?", answer: "Platforma qoidalariga qarab — botda ko‘rsatiladi." },
  { question: "Pulni qanday olaman?", answer: "Balans so‘mda, mahalliy to‘lov usullariga yechish." },
];

const faqRu = [{ question: "Как продать?", answer: "Через Gift Market." }];

const faqEn = [
  { question: "How do I sell a gift?", answer: "List the collectible on a gift market, or transfer it over TON." },
  { question: "Can ordinary gifts be sold?", answer: "No. They can only be converted back into Stars." },
  { question: "Is there a commission?", answer: "Yes, resale carries a fee, so you receive less than the listed price." },
  { question: "Why can I not list my gift?", answer: "There may be an earliest resale date, or a price limit — check the gift card." },
  { question: "How fast will it sell?", answer: "Nobody can promise that. It depends on demand and on your price." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: ["telegram gift sell", "telegram nft sell", "telegram gift marketplace"],
  locales: {
    uz: {
      title: "Telegram Gifts sotish — Gift Market qo‘llanmasi",
      excerpt: "Sotuv, komissiya, pul yechish.",
      metaTitle: "Telegram Gift sotish | Market 2026",
      metaDescription: "Telegram gift qanday sotiladi, komissiya, balans. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Sotish",
      ctaBody: "Gift Market.",
      faq: faqUz,
    },
    ru: {
      title: "Продать Telegram Gift",
      excerpt: "Gift Market.",
      metaTitle: "Продажа Telegram Gift",
      metaDescription: "Как продать gift в Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Продать",
      ctaBody: "Бот",
      faq: faqRu,
    },
    en: {
      title: "Selling a Telegram gift — the market guide",
      excerpt: "What can be sold, the resale rules, commission and how to price a copy.",
      metaTitle: "Sell a Telegram Gift | Market 2026",
      metaDescription: "How to sell a Telegram gift: collectibles only, resale dates, commission and pricing against comparable copies.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — browse the catalogue.",
      faq: faqEn,
    },
  },
};
