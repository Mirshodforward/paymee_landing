import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { KeyFacts, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "limited-edition-telegram-gifts";

function UzAnswer() {
  return (
    <p>
      <strong>Limited Edition Telegram Gifts</strong> — cheklangan sonli chiqarilgan sovg‘a seriyasi. Tiraj kam bo‘lsa,
      kolleksionerlar talabi oshishi va <strong>telegram gift narxi</strong> ko‘tarilishi mumkin (kafolat emas).
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#tiraj", label: "Tiraj" }, { href: "#narx", label: "Narx" }]} />
      <h2 id="tiraj">Qancha dona chiqariladi?</h2>
      <KeyFacts label="Limited Edition">
        <li>Har bir model uchun alohida tiraj e’lon qilinadi</li>
        <li>Raqamlangan nusxa: masalan 47/1000</li>
        <li>Tugagach yangi nusxa olish qiyinlashadi</li>
      </KeyFacts>
      <h2 id="narx">Nega narxi oshadi?</h2>
      <p>
        <Link href="/blog/telegram-gift-price">Gift narxi omillari</Link>,{" "}
        <Link href="/blog/top-telegram-rare-gifts">rare reyting</Link>,{" "}
        <Link href="/blog/eng-qimmat-telegram-sovgalari-reytingi">eng qimmat sovg‘alar</Link>.
      </p>
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Limited Edition — ограниченный тираж подарков Telegram.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

function EnAnswer() {
  return (
    <p>
      <strong>Limited Edition Telegram Gifts</strong> are gift series released in a capped quantity. When the run is
      small, collector demand can push the price up — though that is a possibility, never a guarantee.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <Toc label="Contents" items={[{ href: "#tiraj", label: "Supply" }, { href: "#narx", label: "Price" }]} />
      <h2 id="tiraj">How many copies are released?</h2>
      <KeyFacts label="Limited Edition">
        <li>Each model has its own announced run size</li>
        <li>Copies are numbered — for example 47/1000</li>
        <li>Once the run ends, getting a new copy becomes harder</li>
      </KeyFacts>
      <h2 id="narx">Why does the price rise?</h2>
      <p>
        A capped supply meeting steady demand is what moves the price. But the market is volatile: a limited copy
        can lose value just as easily. See{" "}
        <Link href="/blog/telegram-gift-price">what a gift&rsquo;s price depends on</Link> and{" "}
        the rare gifts ranking.
      </p>
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  { question: "Limited Edition nima?", answer: "Cheklangan tirajli sovg‘a chiqarilishi." },
  { question: "Qancha dona chiqariladi?", answer: "Modelga qarab — Telegram/ekotizim e’lonlariga qarang." },
  { question: "Nega narxi oshadi?", answer: "Kam zaxira + talab; bozor beqaror." },
];

const faqRu = [{ question: "Что такое Limited Edition?", answer: "Ограниченный тираж." }];

const faqEn = [
  { question: "What is a Limited Edition gift?", answer: "A gift released in a capped quantity, with numbered copies." },
  { question: "How many are made?", answer: "It depends on the model — check Telegram's own announcements." },
  { question: "Why does the price go up?", answer: "A small supply plus demand; the market is volatile and can fall too." },
  { question: "Is a limited gift a good investment?", answer: "Rarity guarantees nothing. Treat it as a collectible, not an asset." },
  { question: "Can I buy one through the bot?", answer: "Sold-out collectibles are not delivered through the bot at the moment." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: ["limited edition telegram", "rare telegram gifts", "exclusive telegram gifts", "limited nft"],
  locales: {
    uz: {
      title: "Limited Edition Telegram Gifts nima?",
      excerpt: "Tiraj, noyoblik va narx dinamikasi.",
      metaTitle: "Limited Edition Telegram Gifts | 2026",
      metaDescription: "Limited Edition Telegram gifts: tiraj, narx o‘sishi, rare sovg‘alar. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Market",
      ctaBody: "Gift Market — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Limited Edition Telegram Gifts",
      excerpt: "Тираж и цена.",
      metaTitle: "Limited Edition Telegram Gifts",
      metaDescription: "Что такое Limited Edition подарков Telegram.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Market",
      ctaBody: "Бот",
      faq: faqRu,
    },
    en: {
      title: "What are Limited Edition Telegram Gifts?",
      excerpt: "Run size, rarity and how the price actually moves.",
      metaTitle: "Limited Edition Telegram Gifts | 2026",
      metaDescription: "Limited Edition Telegram gifts: run size, numbering, why prices move and what rarity does not guarantee.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Gift Market",
      ctaBody: "@StarsPaymee_bot — the catalogue, priced in so\u2018m.",
      faq: faqEn,
    },
  },
};
