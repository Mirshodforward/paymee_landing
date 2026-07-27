import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { KeyFacts, InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-kanal-reytingi";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram kanal reytingi</strong> (level) kanal olgan <strong>boost</strong>lar soniga bog‘liq. Yuqori
      level Stories, giveaway, vizual imkoniyatlar ochadi. Reytingni oshirish: Premium obunachilar rasmiy boost yoki{" "}
      <Link href="/blog/telegram-kanalga-boost-sotib-olish">boost ijarasi</Link>. Asos:{" "}
      <Link href="/blog/telegram-kanal-boost-nima">boost nima</Link>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#level", label: "Level" },
          { href: "#oshirish", label: "Oshirish" },
          { href: "#kuzatish", label: "Kuzatish" },
        ]}
      />
      <h2 id="level">Kanal level va reyting qanday hisoblanadi?</h2>
      <p>
        Telegram kanal profilida boost soni va daraja ko‘rinadi. Har bir yangi level qo‘shimcha funksiyalar beradi — aniq
        chegaralar Telegram yangilanishlariga qarab o‘zgarishi mumkin.
      </p>
      <KeyFacts label="Level foydasi (umumiy)">
        <li>Stories va kengaytirilgan formatlar</li>
        <li>Giveaway o‘tkazish huquqi (ma’lum darajadan)</li>
        <li>Vizual ajratish (rang, belgilar)</li>
      </KeyFacts>
      <h2 id="oshirish">Reytingni tez oshirish</h2>
      <ul>
        <li>
          Jamoangizdan <Link href="/blog/telegram-premium-boost">Premium boost</Link> so‘rang.
        </li>
        <li>
          <Link href="/blog/telegram-kanalni-boost-qilish">Kanalni boost qilish</Link> rejasini tuzing.
        </li>
        <li>
          Muddatli <Link href="/blog/telegram-boost-ijarasi">boost ijarasi</Link> — maqsadli kampaniya uchun.
        </li>
      </ul>
      <h2 id="kuzatish">Reytingni kuzatish</h2>
      <p>
        Boost tugagach level tushishi mumkin — uzoq muddatli o‘sish uchun kontent va organik jamoa muhim.{" "}
        <Link href="/blog/telegram-kanal-rivojlantirish">Kanal rivojlantirish</Link> strategiyasi bilan birga qiling.
      </p>
      <InlineCta text="Level uchun boost — Boost Market, so‘mda." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Рейтинг (level) канала зависит от числа boost; повышение — Premium-подписчики или аренда.</p>;
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Kanal reytingi nima?", answer: "Boost asosidagi level — Telegram kanal profilidagi daraja." },
  { question: "Level nima beradi?", answer: "Stories, giveaway, qo‘shimcha limitlar — darajaga qarab." },
  { question: "Reyting qanday oshadi?", answer: "Ko‘proq boost: rasmiy yoki ijarа orqali." },
  { question: "Boost tugasa level tushadimi?", answer: "Ha, faol boost kamayganda daraja pasayishi mumkin." },
  { question: "Obunachi soni levelga ta’sir qiladimi?", answer: "Asosiy ko‘rsatkich — boost; obunachi alohida metrika." },
];

const faqRu = [
  { question: "Что такое level?", answer: "Уровень канала по числу boost." },
  { question: "Как поднять?", answer: "Premium boost или аренда." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: ["telegram kanal reytingi", "kanal level telegram", "telegram boost level", "kanal darajasi"],
  locales: {
    uz: {
      title: "Telegram kanal reytingi va level — qanday oshiriladi 2026",
      excerpt: "Boost va level bog‘liqligi, imkoniyatlar, reytingni oshirish usullari.",
      metaTitle: "Telegram kanal reytingi / level | 2026",
      metaDescription: "Telegram kanal reytingi nima, level qanday oshadi, boost va giveaway. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Level oshirish",
      ctaBody: "Boost Market.",
      faq: faqUz,
    },
    ru: {
      title: "Рейтинг канала Telegram — level 2026",
      excerpt: "Как растёт level.",
      metaTitle: "Рейтинг канала Telegram | Level",
      metaDescription: "Level канала и boost: как повысить рейтинг.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Boost",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
