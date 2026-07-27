import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta, Steps, Step, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-gift-sotib-olish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram NFT Gift sotib olish</strong> uchun @StarsPaymee_bot ichidagi <strong>Gift Market</strong>ni
      oching: kolleksiyani tanlang, narxni so‘mda ko‘ring, balansni to‘ldiring (UzCard, HUMO, Click, Payme). Ba’zi
      sovg‘alar avvalo <Link href="/stars">Stars</Link> talab qiladi — botda ikkalasi ham mavjud.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#qayerdan", label: "Qayerdan" }, { href: "#tolov", label: "To‘lov" }]} />
      <h2 id="qayerdan">Qayerdan NFT gift olish mumkin?</h2>
      <p>
        Telegram ichida Stars bilan yangi gift, yoki <strong>Gift Market</strong>da tayyor kolleksion nusxa. O‘zbekiston
        uchun qulay: <Link href="/blog/telegram-nft-gift-nima">NFT Gift nima?</Link>,{" "}
        <Link href="/blog/starspaymee-nft-market">StarsPaymee NFT Market</Link>.
      </p>
      <h2 id="tolov">To‘lov va Stars</h2>
      <Steps>
        <Step title="Bot">@StarsPaymee_bot → Gift Market.</Step>
        <Step title="Tanlash">Kolleksiya va narx (so‘m).</Step>
        <Step title="To‘lov">Mahalliy kartalar.</Step>
        <Step title="Profil">Sovg‘a akkauntingizga tushadi yoki sotuvda qo‘yasiz.</Step>
      </Steps>
      <InlineCta text="Hozir xarid qiling — Gift Market so‘mda." />
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Купить NFT Gift: @StarsPaymee_bot → Gift Market, оплата в сумах.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Qayerdan NFT olish mumkin?", answer: "StarsPaymee Gift Market yoki Telegram ichida Stars bilan gift." },
  { question: "Qanday to‘lov qilinadi?", answer: "So‘mda: UzCard, HUMO, Click, Payme, Paynet." },
  { question: "Stars kerakmi?", answer: "Ba’zi xaridlar Stars balansini talab qiladi — botda to‘ldirasiz." },
  { question: "Telegram Premium kerakmi?", answer: "NFT gift uchun shart emas." },
  { question: "O‘zbekistonda mumkinmi?", answer: "Ha, telegram nft uzbekistan bo‘yicha mahalliy to‘lov." },
];

const faqRu = [
  { question: "Где купить?", answer: "Gift Market в @StarsPaymee_bot." },
  { question: "Оплата?", answer: "В сумах, карты Узбекистана." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "howto",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: ["telegram nft sotib olish", "telegram gift sotib olish", "telegram nft uzbekistan", "telegram gifts market"],
  locales: {
    uz: {
      title: "Telegram NFT Gift sotib olish — O‘zbekiston 2026",
      excerpt: "Gift Market, to‘lov usullari, Stars va Premium talablari.",
      metaTitle: "Telegram NFT Gift sotib olish | 2026",
      metaDescription: "Telegram NFT gift qayerdan sotib olinadi, to‘lov so‘mda, Stars kerakmi? FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Xarid",
      ctaBody: "Gift Market — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Купить Telegram NFT Gift — 2026",
      excerpt: "Gift Market и оплата в сумах.",
      metaTitle: "Купить Telegram NFT Gift | 2026",
      metaDescription: "Где купить NFT gift, оплата, Stars. FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Купить",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
