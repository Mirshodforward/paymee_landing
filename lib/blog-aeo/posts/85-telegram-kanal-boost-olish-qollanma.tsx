import { Link } from "@/i18n/navigation";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-kanal-boost-olish-qollanma";

function UzAnswer() {
  return (
    <p>
      <strong>Kanal boost olish</strong> — Premium obunachilarning kanalga «ovoz» berishi orqali kanal darajasini
      oshirish. Bu pul bilan sotib olinadigan xizmat emas; lekin boost uchun ko‘pincha{" "}
      <Link href="/premium">Telegram Premium</Link> kerak. Kanal egasi giveaway va Stories uchun level ko‘tarishi mumkin.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#asos", label: "Asosiy" }, { href: "#premium", label: "Premium" }]} />
      <h2 id="asos">Boost qanday ishlaydi?</h2>
      <p>
        To‘liq tushuntirish: <Link href="/blog/telegram-kanal-boost-nima">Telegram kanal boost nima?</Link> — level,
        Stories, giveaway huquqlari.
      </p>
      <h2 id="premium">Premium sotib olish</h2>
      <p>
        Obunachilaringiz Premium bo‘lsa, ular kanalni boost qila oladi. O‘zingiz uchun Premium:{" "}
        <Link href="/blog/telegram-premium-sotib-olish-2026">Premium sotib olish 2026</Link>.
      </p>
      <InlineCta text="Premium kerakmi? Username bilan, so‘mda — @StarsPaymee_bot." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Boost канала — голоса Premium-подписчиков, не покупка за деньги. Подробнее:{" "}
      <Link href="/blog/telegram-kanal-boost-nima">что такое boost</Link>.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Boost pul bilan sotib olinadimi?", answer: "Rasmiy boost — Premium foydalanuvchi ixtiyori; alohida «boost sotib olish» bozori shubhali bo‘lishi mumkin." },
  { question: "Kanal level nima beradi?", answer: "Stories, giveaway, vizual imkoniyatlar — boost maqolasida." },
  { question: "Premium qayerdan?", answer: "StarsPaymee bot, username bilan." },
];

const faqRu = [
  { question: "Покупается ли boost?", answer: "Официально — голоса Premium, не прямая покупка level." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  keywords: ["telegram kanal boost", "boost olish", "kanal level telegram"],
  locales: {
    uz: {
      title: "Telegram kanali uchun boost olish — qo‘llanma 2026",
      excerpt: "Boost mexanikasi, Premium talabi, level va giveaway. Bog‘liq maqolalar.",
      metaTitle: "Telegram kanal boost olish | 2026",
      metaDescription: "Telegram kanal boost qanday olinadi: Premium, level, Stories. Qo‘llanma va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium oling",
      ctaBody: "Boost qilish uchun Premium kerak bo‘lishi mumkin.",
      faq: faqUz,
    },
    ru: {
      title: "Boost для канала Telegram — гайд 2026",
      excerpt: "Как работает boost и Premium.",
      metaTitle: "Boost канала Telegram | 2026",
      metaDescription: "Как получить boost канала: Premium, уровни, FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Premium",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
