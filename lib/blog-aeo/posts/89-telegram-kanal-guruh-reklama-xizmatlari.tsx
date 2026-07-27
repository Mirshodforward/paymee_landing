import { Link } from "@/i18n/navigation";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-kanal-guruh-reklama-xizmatlari";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram kanal va guruh reklamasi</strong> — Telegram Ads (rasmiy), post orasidagi reklama, admin orqali
      integratsiya va kanal sotib olish bozori. O‘zbekiston biznesi uchun mahalliy auditoriya, til va to‘lov muhim;
      Stars bilan ichki to‘lovlar alohida mavzu.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#ads", label: "Telegram Ads" },
          { href: "#boshqa", label: "Boshqa usullar" },
        ]}
      />
      <h2 id="ads">Telegram Ads</h2>
      <p>
        Rasmiy reklama kabineti orqali kanallarga targeting. Talablar va minimal byudjet Telegram qoidalariga bog‘liq.
        Reklamani o‘chirish: <Link href="/blog/telegramda-reklamani-ochirish">reklamani o‘chirish</Link>.
      </p>
      <h2 id="boshqa">Kanal monetizatsiyasi</h2>
      <p>
        <Link href="/blog/telegram-kanal-stars-monetizatsiya">Kanal Stars monetizatsiyasi</Link>,{" "}
        <Link href="/blog/telegram-pulli-xabarlar-paid-messages">pulli xabarlar</Link>,{" "}
        <Link href="/blog/telegram-affiliate-dasturi">affiliate</Link>. Kanal boost:{" "}
        <Link href="/blog/telegram-kanal-boost-nima">boost nima</Link>.
      </p>
      <p>
        Auditoriya o‘sishi uchun kontent + ba’zan <Link href="/blog/telegram-raqam-sotib-olish">akkaunt/raqam</Link>{" "}
        masalalari alohida — spam qilmang.
      </p>
      <InlineCta text="Stars va Premium — auditoriyangizga hadya yoki sotuv." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Реклама в Telegram: официальные Ads, монетизация Stars и платные посты. См. статьи о монетизации канала на сайте.
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
  { question: "Telegram Ads O‘zbekistonda bormi?", answer: "Rasmiy Ads mavjudligi va to‘lov usullari Telegram e’lonlariga qarab o‘zgaradi — kabinetda tekshiring." },
  { question: "Guruhda reklama qanday?", answer: "Admin ruxsati, qoidalar va spamdan saqlanish muhim." },
  { question: "Stars bilan reklama?", answer: "Ichki ekotizim — sponsor postlar va bot to‘lovlari alohida." },
  { question: "Kanal sotib olish?", answer: "Yuqori xavf — qonun va Telegram TOS ni o‘qing." },
];

const faqRu = [
  { question: "Что такое Telegram Ads?", answer: "Официальная рекламная платформа Telegram." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "info",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  keywords: ["telegram reklama", "kanal reklama", "telegram ads", "guruh reklama"],
  locales: {
    uz: {
      title: "Telegram kanal va guruh reklama xizmatlari — 2026",
      excerpt: "Telegram Ads, monetizatsiya, pulli postlar va xavfsizlik.",
      metaTitle: "Telegram kanal reklama | 2026",
      metaDescription: "Telegram kanal va guruh reklamasi: Ads, Stars monetizatsiya, FAQ va ichki havolalar.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Monetizatsiya",
      ctaBody: "Stars va Premium — blogdagi biznes maqolalar.",
      faq: faqUz,
    },
    ru: {
      title: "Реклама в каналах и группах Telegram — 2026",
      excerpt: "Ads, монетизация Stars.",
      metaTitle: "Реклама Telegram канал | 2026",
      metaDescription: "Реклама в Telegram: Ads, монетизация, FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Монетизация",
      ctaBody: "Статьи о Stars для канала.",
      faq: faqRu,
    },
  },
};
