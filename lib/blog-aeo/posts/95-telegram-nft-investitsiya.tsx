import { Link } from "@/i18n/navigation";
import { NftGiftSeriesNav } from "@/components/blog/nft-gift-series-nav";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
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
        Qanday gift tanlash: <Link href="/blog/limited-edition-telegram-gifts">Limited Edition</Link>,{" "}
        <Link href="/blog/telegram-gift-kolleksiya">kolleksiya strategiyasi</Link>.
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

const faqUz = [
  { question: "NFT investitsiyami?", answer: "Rasmiy investitsiya emas — spekulyativ kolleksiya bo‘lishi mumkin." },
  { question: "Risklari qanday?", answer: "Narx tushishi, likvidlik, firibgarlik." },
  { question: "Qanday gift olish kerak?", answer: "O‘zingiz yoqtirgan kolleksiya + tirajni o‘rganing." },
];

const faqRu = [{ question: "Это инвестиция?", answer: "Высокий риск, без гарантий." }];

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
  },
};
