import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InfoGrid, InfoCard, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-gift-price";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram gift narxi</strong> tiraj, noyob model, raqam (masalan #7/1000), bozor kayfiyati va Gift Market
      talabiga bog‘liq o‘zgaradi. <strong>telegram nft narxi</strong> doim oshib boradi degan xato umiddan saqlaning.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2>Qaysi gift qimmatlashadi?</h2>
      <InfoGrid>
        <InfoCard emoji="🔢" title="Past raqam">Kichik seriya raqami.</InfoCard>
        <InfoCard emoji="⏳" title="Kam tiraj">Limited Edition.</InfoCard>
        <InfoCard emoji="🔥" title="Hype">Trend kolleksiyalar.</InfoCard>
        <InfoCard emoji="💱" title="Bozor">Gift Market talabi.</InfoCard>
      </InfoGrid>
      <p>
        <Link href="/blog/telegram-nft-investitsiya">Investitsiya haqida</Link>,{" "}
        <Link href="/blog/top-telegram-rare-gifts">top rare</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Цена подарка зависит от редкости и спроса на Gift Market.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Qaysi gift qimmatlashadi?", answer: "Kam tiraj, noyob atribut va yuqori talabli kolleksiyalar." },
  { question: "Narx nima asosida oshadi?", answer: "Taklif-talab, hype, TON bozori (Fragment)." },
];

const faqRu = [{ question: "Почему растёт цена?", answer: "Спрос и редкость." }];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: ["telegram gift narxi", "telegram nft narxi", "limited gift price", "telegram gift investment"],
  locales: {
    uz: {
      title: "Telegram Gift narxlari nima uchun oshadi?",
      excerpt: "Narx omillari va bozor mantig‘i.",
      metaTitle: "Telegram Gift narxi | Nima uchun oshadi",
      metaDescription: "Telegram gift narxi qanday shakllanadi, qaysi gift qimmatlashadi. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Joriy narxlar",
      ctaBody: "Gift Market botda.",
      faq: faqUz,
    },
    ru: {
      title: "Почему растёт цена Telegram Gift",
      excerpt: "Факторы цены.",
      metaTitle: "Цена Telegram Gift",
      metaDescription: "Почему растёт цена NFT gift.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Цены",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
