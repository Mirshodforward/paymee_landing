import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-nft-investitsiya";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram NFT investitsiya</strong> — xavfli: narx tushishi, likvidlik pastligi va qoidalar o‘zgarishi
      mumkin. Kolleksiya sifatida qiziqish mumkin, lekin «tez boyish» va’dasi bilan kirish tavsiya etilmaydi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <h2>Risklar</h2>
      <ul>
        <li>Bozor beqarorligi</li>
        <li>Firibgar «guaranteed profit»</li>
        <li>Qonun va soliq noaniqligi</li>
      </ul>
      <p>
        Qanday gift tanlash: <Link href="/blog/telegram-nft-gift-nima">Limited Edition</Link>,{" "}
        <Link href="/blog/telegram-gifts-kolleksiya-rare-sovgalar">kolleksiya strategiyasi</Link>.
      </p>
      <InlineCta text="Faqat kolleksiya uchun xarid qiling — Gift Market so‘mda." />
      <NftGiftSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Инвестиции в Telegram NFT рискованны — нет гарантии дохода.</p>;
}
function RuBody() {
  return <NftGiftSeriesNav locale="ru" />;
}

function EnAnswer() {
  return (
    <p>
      Treating <strong>Telegram NFT gifts as an investment</strong> is risky: prices fall, liquidity is thin and the
      rules can change. They can be interesting to collect, but going in on a promise of quick profit is a bad idea
      — no such promise is credible.
    </p>
  );
}
function EnBody() {
  return (
    <>
      <h2>The risks, stated plainly</h2>
      <ul>
        <li>A volatile market — a rare copy can lose value as easily as gain it</li>
        <li>Thin liquidity — there may simply be no buyer at your price</li>
        <li>&laquo;Guaranteed profit&raquo; offers, which are the clearest sign of a scam</li>
        <li>Unclear legal and tax treatment in many countries</li>
      </ul>
      <h2>A saner way to think about it</h2>
      <p>
        Buy what you would be happy to keep if the price never moved. Study the run size before paying, and compare
        against copies with the same model, backdrop and symbol —{" "}
        <Link href="/blog/telegram-gift-price">how a gift&rsquo;s price is formed</Link> covers that. Collecting
        strategy is in building a collection.
      </p>
      <InlineCta text="Buy for the collection, not for a promised return." />
      <NftGiftSeriesNav locale="en" />
    </>
  );
}

const faqUz = [
  { question: "NFT investitsiyami?", answer: "Rasmiy investitsiya emas — spekulyativ kolleksiya bo‘lishi mumkin." },
  { question: "Risklari qanday?", answer: "Narx tushishi, likvidlik, firibgarlik." },
  { question: "Qanday gift olish kerak?", answer: "O‘zingiz yoqtirgan kolleksiya + tirajni o‘rganing." },
];

const faqRu = [{ question: "Это инвестиция?", answer: "Высокий риск, без гарантий." }];

const faqEn = [
  { question: "Is a Telegram NFT an investment?", answer: "Not a regulated one. At best a speculative collectible, with real downside." },
  { question: "What are the risks?", answer: "Falling prices, thin liquidity, fraud and unclear legal treatment." },
  { question: "Does rarity guarantee a price rise?", answer: "No. If demand falls, a small-run copy gets cheaper too." },
  { question: "Which gift should I pick?", answer: "One you would keep regardless. Study the run size and the attributes first." },
  { question: "Someone promises guaranteed profit.", answer: "That is a scam signal. No one can guarantee a return on a collectible." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Gifts",
  type: "info",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: ["telegram nft invest", "telegram gift invest", "telegram digital assets", "telegram nft trading"],
  locales: {
    uz: {
      title: "Telegram NFT investitsiya qilish mumkinmi?",
      excerpt: "Risklar, realistik kutish, kolleksiya vs spekulyatsiya.",
      metaTitle: "Telegram NFT investitsiya | Risklar 2026",
      metaDescription: "Telegram NFT investitsiya mumkinmi, risklari va qanday gift tanlash. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Ehtiyotkorlik",
      ctaBody: "Faqat ishonchli market.",
      faq: faqUz,
    },
    ru: {
      title: "Инвестиции в Telegram NFT",
      excerpt: "Риски.",
      metaTitle: "Telegram NFT инвестиции",
      metaDescription: "Можно ли инвестировать в Telegram NFT.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Осторожно",
      ctaBody: "Бот",
      faq: faqRu,
    },
    en: {
      title: "Are Telegram NFT gifts a sensible investment?",
      excerpt: "The real risks, what rarity does and does not guarantee, and a saner way to approach collecting.",
      metaTitle: "Telegram NFT as investment | Risks 2026",
      metaDescription: "Can you invest in Telegram NFT gifts? The risks, why rarity guarantees nothing, and how to choose sensibly.",
      answerTitle: "Short answer",
      Answer: EnAnswer,
      Body: EnBody,
      ctaHeading: "Buy carefully",
      ctaBody: "@StarsPaymee_bot — an open catalogue with prices in so\u2018m.",
      faq: faqEn,
    },
  },
};
