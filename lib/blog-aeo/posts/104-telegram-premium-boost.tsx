import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, KeyFacts, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-premium-boost";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram Premium boost</strong> — faqat <strong>Premium obuna</strong> egasi bo‘lgan foydalanuvchi
      o‘z obunasidan bir kanalga «ovoz» berishi. Bu bepul (obuna ichida) va rasmiy Telegram funksiyasi.{" "}
      <Link href="/blog/telegram-boost-ijarasi">Boost ijarasi</Link> esa alohida xizmat —{" "}
      <Link href="/blog/telegram-kanal-boost-nima">boost nima</Link> maqolasida ikkala tur farqi bor.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#shart", label: "Shartlar" },
          { href: "#qadamlar", label: "Qadamlar" },
          { href: "#ijara", label: "Ijara farqi" },
        ]}
      />
      <h2 id="shart">Premium boost uchun nima kerak?</h2>
      <KeyFacts label="Premium boost">
        <li>Faol Telegram Premium obunasi</li>
        <li>Boost qilinadigan kanalga obuna</li>
        <li>Kanal profilidagi «Boost qilish» tugmasi</li>
      </KeyFacts>
      <p>
        Premium sotib olish: <Link href="/premium">Telegram Premium</Link> yoki{" "}
        <Link href="/blog/telegram-premium-sotib-olish-2026">Premium qo‘llanma 2026</Link> (so‘mda, bot).
      </p>
      <h2 id="qadamlar">Premium boost qanday beriladi?</h2>
      <ol>
        <li>Kanalni oching va profilga kiring.</li>
        <li>«Boost qilish» ni tanlang.</li>
        <li>Tasdiqlang — boost kanal reytingiga qo‘shiladi.</li>
      </ol>
      <h2 id="ijara">Premium boost vs ijarа</h2>
      <p>
        Kanal egasi Premium bo‘lmasa ham <Link href="/blog/telegram-kanalga-boost-sotib-olish">boost ijarasi</Link>{" "}
        orqali level oshirishi mumkin — bu Premium obunachining ovozi emas.{" "}
        <Link href="/blog/telegram-kanal-reytingi">Kanal reytingi</Link> ikkala manbadan ham o‘sishi mumkin (Telegram
        qoidalariga muvofiq).
      </p>
      <InlineCta text="Premium kerakmi? Username bilan, so‘mda — botda." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Premium boost — официальный голос подписчика с Telegram Premium, не путать с арендой boost.</p>;
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Premium boost nima?", answer: "Premium foydalanuvchining kanalga rasmiy ovozi." },
  { question: "Pul kerakmi?", answer: "Boost bepul; Premium obuna pullik." },
  { question: "Bir nechta kanalga boost?", answer: "Telegram qoidalariga qarab — odatda cheklovlar bor." },
  { question: "Ijara bilan birga ishlatiladi?", answer: "Turli manbalar; maqsad va siyosatga qarab rejalashtiring." },
  { question: "Premium bo‘lmasam kanalni qanday ko‘taraman?", answer: "Obunachilardan boost so‘rang yoki ijarа xizmati." },
];

const faqRu = [
  { question: "Что такое Premium boost?", answer: "Официальная поддержка канала подписчиком с Premium." },
  { question: "Это аренда?", answer: "Нет, это встроенная функция Telegram." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-28",
  dateModified: "2026-07-28",
  keywords: ["telegram premium boost", "premium boost nima", "telegram boost premium", "kanal premium boost"],
  locales: {
    uz: {
      title: "Telegram Premium boost — rasmiy tizim 2026",
      excerpt: "Premium obunachi boosti: shartlar, qadamlar va ijaradan farqi.",
      metaTitle: "Telegram Premium boost | Rasmiy qo‘llanma",
      metaDescription: "Telegram Premium boost nima, qanday beriladi, boost ijarasidan farqi. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium",
      ctaBody: "@StarsPaymee_bot",
      faq: faqUz,
    },
    ru: {
      title: "Premium boost в Telegram — 2026",
      excerpt: "Официальный boost от Premium.",
      metaTitle: "Telegram Premium boost",
      metaDescription: "Что такое Premium boost и чем отличается от аренды.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Premium",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
