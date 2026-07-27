import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { Steps, Step, Toc } from "@/components/blog/aeo-blocks";
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

const faqUz = [
  { question: "Giftni qanday sotaman?", answer: "Gift Market interfeysida sotuvga qo‘ying." },
  { question: "Komissiya bormi?", answer: "Platforma qoidalariga qarab — botda ko‘rsatiladi." },
  { question: "Pulni qanday olaman?", answer: "Balans so‘mda, mahalliy to‘lov usullariga yechish." },
];

const faqRu = [{ question: "Как продать?", answer: "Через Gift Market." }];

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
  },
};
