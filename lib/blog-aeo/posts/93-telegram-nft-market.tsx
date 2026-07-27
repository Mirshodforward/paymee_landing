import { Link } from "@/i18n/navigation";
import { NftGiftMarketBoard } from "@/components/blog/nft-gift-market-board";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-market";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram NFT Market (Gift Market)</strong> — kolleksion sovg‘alarni sotib olish va sotish maydoni: narxlar
      talab/zaxiraga qarab, StarsPaymee’da <strong>so‘mda</strong> va filtrlash (Yangi, Arzon, Qimmat, Sotuvda) bilan.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#nima", label: "Market" }, { href: "#narx", label: "Narx" }]} />
      <h2 id="nima">NFT Market nima?</h2>
      <p>
        Bu <strong>telegram marketplace</strong>ning bir qismi: sotuvchilar — foydalanuvchilar yoki tizim zaxirasi;
        xaridorlar — kolleksionerlar. Fragment — TON bozori; StarsPaymee — mahalliy so‘m interfeysi.
      </p>
      <h2 id="narx">Narxlar qanday belgilanadi?</h2>
      <NftGiftMarketBoard locale="uz" />
      <p>
        <Link href="/blog/telegram-gift-sotish">Sotish</Link>,{" "}
        <Link href="/blog/telegram-nft-gift-sotib-olish">sotib olish</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Gift Market — торговая площадка коллекционных подарков, в StarsPaymee цены в сумах.</p>;
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
  { question: "NFT Market nima?", answer: "Kolleksion Telegram giftlarni sotish/sotib olish platformasi." },
  { question: "Kim sotadi?", answer: "Foydalanuvchilar va market zaxirasi." },
  { question: "Narxlar qanday belgilanadi?", answer: "Taklif/talab, noyoblik, tiraj." },
];

const faqRu = [{ question: "Что такое NFT Market?", answer: "Площадка для collectible gifts." }];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: ["telegram nft market", "gift market", "telegram marketplace", "telegram gift trading"],
  locales: {
    uz: {
      title: "Telegram NFT Market qanday ishlaydi?",
      excerpt: "Gift Market mexanikasi, narxlar so‘mda, savdo.",
      metaTitle: "Telegram NFT Market | Gift Market 2026",
      metaDescription: "Telegram NFT market qanday ishlaydi: kim sotadi, narxlar, so‘mda Gift Market. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Market",
      ctaBody: "@StarsPaymee_bot",
      faq: faqUz,
    },
    ru: {
      title: "Как работает Telegram NFT Market",
      excerpt: "Gift Market в сумах.",
      metaTitle: "Telegram NFT Market | 2026",
      metaDescription: "Как работает NFT market Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Market",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
