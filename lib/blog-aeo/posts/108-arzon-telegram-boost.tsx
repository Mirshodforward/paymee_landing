import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "arzon-telegram-boost";

function UzAnswer() {
  return (
    <p>
      <strong>Arzon telegram boost</strong> — past byudjetda kanal levelini sinash: kam boost (masalan 1–10), qisqa muddat
      (1–7 kun) yoki uzoq muddatdagi kunlik chegirma. Eng arzon variant har doim eng yaxshi emas — ishonchli{" "}
      <Link href="/blog/starspaymee-boost-market">Boost Market</Link> va aniq{" "}
      <Link href="/blog/telegram-boost-narxlari">narx jadvali</Link> muhim. Buyurtma:{" "}
      <Link href="/blog/telegram-kanalga-boost-sotib-olish">kanalga boost sotib olish</Link>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#arzon", label: "Arzon paket" },
          { href: "#sifat", label: "Narx vs sifat" },
          { href: "#maslahat", label: "Maslahat" },
        ]}
      />
      <h2 id="arzon">Qanday arzon boost topiladi?</h2>
      <ul>
        <li>Bot kalkulyatorida eng kichik paketni tanlang.</li>
        <li>Qisqa muddat — test kampaniyasi uchun.</li>
        <li>Uzoq muddat — kuniga narx pastroq bo‘lishi mumkin (30 kun).</li>
      </ul>
      <p>
        <Link href="/blog/telegram-boost-ijarasi">Boost ijarasi</Link> bozorida juda past narxli shubhali reklamalardan
        saqlaning. <Link href="/blog/telegram-kanal-boost-nima">Rasmiy boost</Link> bepul, lekin Premium talab qiladi.
      </p>
      <h2 id="sifat">Arzon = xavfli?</h2>
      <p>
        Noma’lum botlar va noto‘g‘ri kanal manzili — pul yo‘qotish. StarsPaymee: so‘m,{" "}
        <Link href="/blog/telegram-boost-avtomatik">avtomatik yetkazish</Link>, o‘zbekcha qo‘llab-quvvatlash.
      </p>
      <h2 id="maslahat">Arzon boost maslahatlari</h2>
      <ol>
        <li>Avval kichik paket bilan sinab ko‘ring.</li>
        <li>Level maqsadini aniqlang — keraksiz boost sarf qilmang.</li>
        <li>
          <Link href="/blog/telegram-kanal-rivojlantirish">Rivojlantirish</Link> bilan birga rejalashtiring.
        </li>
      </ol>
      <InlineCta text="Arzon boost — Boost Market, shaffof narx so‘mda." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Дешёвый boost — малые пакеты и срок; заказывайте в проверенном Boost Market.</p>;
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Eng arzon telegram boost qayerda?", answer: "Kichik paketlar Boost Market kalkulyatorida — @StarsPaymee_bot." },
  { question: "1 kunlik boost bormi?", answer: "Ha, muddat 1–30 kun oralig‘ida tanlanadi." },
  { question: "Juda arzon reklama ishonchlimi?", answer: "Shubhali — rasmiy bot va aniq shartlarni tanlang." },
  { question: "Arzon boost level beradimi?", answer: "Ha, boost soni levelga ta’sir qiladi — maqsadga qarab son tanlang." },
  { question: "To‘lov so‘mda?", answer: "Ha, UzCard, HUMO, Click, Payme." },
  { question: "Premium arzonroq emasmi?", answer: "Premium boost bepul, lekin faqat Premium obunachi beradi — ijarа boshqa xizmat." },
];

const faqRu = [
  { question: "Где дешёвый boost?", answer: "Малые пакеты в Boost Market." },
  { question: "Оплата?", answer: "В сумах в боте." },
  { question: "Безопасно ли?", answer: "Используйте официальный бот StarsPaymee." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "cta",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: [
    "arzon telegram boost",
    "telegram boost arzon",
    "eng arzon boost",
    "arzon kanal boost",
    "telegram boost uzbekistan arzon",
  ],
  locales: {
    uz: {
      title: "Arzon telegram boost — narx, sifat va xavfsizlik 2026",
      excerpt: "Arzon paketlar qanday tanlanadi, shubhali takliflardan saqlanish, StarsPaymee.",
      metaTitle: "Arzon telegram boost | Eng yaxshi narx",
      metaDescription: "Arzon telegram boost: qayerdan olish, 1–30 kun, so‘mda to‘lov, xavfsizlik. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Arzon boost",
      ctaBody: "Boost Market — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Дешёвый boost Telegram — 2026",
      excerpt: "Цена и безопасность.",
      metaTitle: "Дешёвый boost Telegram",
      metaDescription: "Где купить дешёвый boost для канала в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Заказать",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
