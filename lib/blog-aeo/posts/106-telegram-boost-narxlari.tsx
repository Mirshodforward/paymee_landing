import { Link } from "@/i18n/navigation";
import { BoostMarketPriceBoard } from "@/components/blog/boost-market-price-board";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-boost-narxlari";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram boost narxlari</strong> boost soni va <strong>kun</strong> (1–30) ga bog‘liq: ko‘proq boost va
      uzoq muddat — yuqori summa, ba’zi paketlarda kuniga chegirma. Aniq narx @StarsPaymee_bot kalkulyatorida; quyida
      namunaviy jadval. Buyurtma:{" "}
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
          { href: "#omil", label: "Narx omillari" },
          { href: "#jadval", label: "Jadval" },
          { href: "#arzon", label: "Arzon tanlash" },
        ]}
      />
      <h2 id="omil">Narx nimaga bog‘liq?</h2>
      <ul>
        <li>Boost soni (1–100).</li>
        <li>Muddat: 1–30 kun.</li>
        <li>Zaxira va kampaniya (botdagi joriy taklif).</li>
      </ul>
      <p>
        <Link href="/blog/telegram-boost-ijarasi">Boost ijarasi</Link> — xizmat turi;{" "}
        <Link href="/blog/telegram-kanal-boost-nima">rasmiy Premium boost</Link> bepul (obuna ichida).
      </p>
      <h2 id="jadval">Namunaviy boost narxlari (so‘m)</h2>
      <BoostMarketPriceBoard locale="uz" />
      <p>
        Jadval taxminiy; to‘lov oldidan botdagi summani tasdiqlang.{" "}
        <Link href="/blog/telegram-boost-avtomatik">Avtomatik yetkazish</Link> narxdan alohida — standart xizmat
        ichida.
      </p>
      <h2 id="arzon">Arzon boost qanday topiladi?</h2>
      <p>
        Qisqa muddat + kam boost — test uchun; uzoq muddat — kuniga arzonroq bo‘lishi mumkin. Batafsil:{" "}
        <Link href="/blog/arzon-telegram-boost">arzon telegram boost</Link>,{" "}
        <Link href="/blog/starspaymee-boost-market">StarsPaymee Boost Market</Link>.
      </p>
      <InlineCta text="Joriy narxlar — Boost Market, so‘mda." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Цены на аренду boost зависят от числа boost и дней; актуально в @StarsPaymee_bot.</p>;
}

function RuBody() {
  return (
    <>
      <BoostMarketPriceBoard locale="ru" />
      <BoostSeriesNav locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "1 boost qancha turadi?", answer: "Paketga bog‘liq — bot kalkulyatorida ko‘ring." },
  { question: "30 kunlik boost narxi?", answer: "Boost soni bilan ko‘payadi; jadvalda namuna bor." },
  { question: "To‘lov qanday?", answer: "UzCard, HUMO, Click, Payme — so‘mda." },
  { question: "Narx o‘zgaradimi?", answer: "Ha, zaxira va kampaniyaga qarab — buyurtma oldidan tekshiring." },
  { question: "Arzonroq paket bormi?", answer: "Kam boost va qisqa muddat — pastroq summa." },
  { question: "Rasmiy boost pullikmi?", answer: "Premium obunachi uchun boost bepul; ijarа alohida xizmat." },
];

const faqRu = [
  { question: "От чего цена?", answer: "От числа boost и срока в днях." },
  { question: "Где актуальные цены?", answer: "Boost Market в боте." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: [
    "telegram boost narxlari",
    "boost narxi",
    "telegram boost narxi uzbekistan",
    "30 kunlik boost narxi",
    "kanal boost narxi",
  ],
  locales: {
    uz: {
      title: "Telegram boost narxlari — 1 va 30 kun paketlar 2026",
      excerpt: "Narx omillari, namunaviy jadval so‘mda, arzon paket tanlash.",
      metaTitle: "Telegram boost narxlari | So‘mda jadval",
      metaDescription: "Telegram kanal boost narxlari: 1–30 kun, 1–100 boost, namuna jadval va bot kalkulyatori. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Narxni ko‘rish",
      ctaBody: "@StarsPaymee_bot",
      faq: faqUz,
    },
    ru: {
      title: "Цены на boost Telegram — 2026",
      excerpt: "Пакеты и таблица в сумах.",
      metaTitle: "Цены boost Telegram | Пакеты",
      metaDescription: "Сколько стоит аренда boost: дни, пакеты, бот.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Цены",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
