import { Link } from "@/i18n/navigation";
import {
  BoostMarketPriceBoard,
  BoostMarketFactsUz,
} from "@/components/blog/boost-market-price-board";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, KeyFacts, Steps, Step, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "starspaymee-boost-market";

function UzAnswer() {
  return (
    <p>
      <strong>StarsPaymee Boost Market</strong> — O‘zbekistonda Telegram kanal uchun <strong>boost ijarasi</strong>:
      @StarsPaymee_bot ichida kanal linki, <strong>1–100 boost</strong>, <strong>1–30 kun</strong>, to‘lov{" "}
      <strong>so‘mda</strong> (UzCard, HUMO, Click, Payme) va avtomatik yetkazish. Rasmiy{" "}
      <Link href="/blog/telegram-premium-boost">Premium boost</Link>dan farqli xizmat —{" "}
      <Link href="/blog/telegram-kanal-boost-nima">boost nima</Link> va{" "}
      <Link href="/blog/telegram-kanalga-boost-sotib-olish">to‘liq qo‘llanma</Link>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "StarsPaymee" },
          { href: "#buyurtma", label: "Buyurtma" },
          { href: "#narx", label: "Narxlar" },
          { href: "#faq", label: "Nima uchun" },
        ]}
      />
      <h2 id="nima">StarsPaymee Boost Market nima?</h2>
      <p>
        StarsPaymee ekotizimining bir qismi: Stars, Premium, Gifts va kanal <strong>Boost Market</strong>. Maqsad —
        <strong> telegram boost uzbekistan</strong> auditoriyasi uchun mahalliy to‘lov va tez xizmat.
      </p>
      <KeyFacts label="Boost Market">
        <li>Kanal: t.me/link yoki @username</li>
        <li>Muddat va son slider orqali</li>
        <li>So‘mda narx — bot kalkulyatori</li>
        <li>
          <Link href="/blog/telegram-boost-avtomatik">Avtomatik qo‘shilish</Link>
        </li>
      </KeyFacts>
      <BoostMarketFactsUz />
      <h2 id="buyurtma">Qanday buyurtma beriladi?</h2>
      <Steps>
        <Step title="Bot">@StarsPaymee_bot ni oching.</Step>
        <Step title="Bo‘lim">Kanal Boost arenda / Boost Market.</Step>
        <Step title="Parametr">Boost soni va kunlar.</Step>
        <Step title="To‘lov">Mahalliy kartalar.</Step>
        <Step title="Tayyor">Boost kanal reytingiga qo‘shiladi.</Step>
      </Steps>
      <h2 id="narx">Joriy boost narxlari (namuna)</h2>
      <BoostMarketPriceBoard locale="uz" />
      <p>
        Batafsil solishtirish: <Link href="/blog/telegram-boost-narxlari">boost narxlari</Link>,{" "}
        <Link href="/blog/arzon-telegram-boost">arzon boost</Link>,{" "}
        <Link href="/blog/telegram-boost-ijarasi">boost ijarasi</Link>.
      </p>
      <h2 id="faq">Nima uchun StarsPaymee?</h2>
      <ul>
        <li>O‘zbek tilidagi blog va qo‘llab-quvvatlash.</li>
        <li>Shaffof paketlar va muddat.</li>
        <li>
          <Link href="/blog/telegram-kanal-rivojlantirish">Kanal rivojlantirish</Link> seriyasi bilan bog‘langan
          kontent.
        </li>
      </ul>
      <InlineCta text="Boost Market — hozir @StarsPaymee_bot da oching." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      StarsPaymee Boost Market — аренда boost для канала в @StarsPaymee_bot, 1–100 boost, 1–30 дней, оплата в сумах.
    </p>
  );
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
  { question: "StarsPaymee nima?", answer: "Telegram Stars, Premium, Gifts va Boost Market — mahalliy to‘lov xizmati." },
  { question: "Boost Market qayerda?", answer: "@StarsPaymee_bot → Kanal Boost arenda." },
  { question: "Qanday buyurtma beriladi?", answer: "Kanal linki, boost soni, kun, so‘mda to‘lov — avtomatik yetkazish." },
  { question: "To‘lov qanday amalga oshiriladi?", answer: "UzCard, HUMO, Click, Payme, Paynet — so‘mda." },
  { question: "Boost avtomatik qo‘shiladimi?", answer: "Ha, to‘lov tasdiqlangach tizim ishlaydi." },
  { question: "30 kunlik boost bormi?", answer: "Ha, 1–30 kun oralig‘ida tanlanadi." },
  { question: "Telegram Premium kerakmi?", answer: "Ijara xizmati uchun sizga shaxsiy Premium shart emas." },
  { question: "Nima uchun StarsPaymee tanlash kerak?", answer: "So‘m, tez xizmat, o‘zbekcha qo‘llab-quvvatlash, aniq paketlar." },
];

const faqRu = [
  { question: "Что такое StarsPaymee?", answer: "Сервис Stars, Premium и Boost Market в сумах." },
  { question: "Как заказать boost?", answer: "Бот → Boost Market → канал → оплата." },
  { question: "Автодоставка?", answer: "Да, после подтверждения оплаты." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Biznes",
  type: "cta",
  datePublished: "2026-07-25",
  dateModified: "2026-07-25",
  keywords: [
    "StarsPaymee boost",
    "boost market uzbekistan",
    "telegram boost uzbekistan",
    "starspaymee boost market",
    "kanal boost bot",
  ],
  locales: {
    uz: {
      title: "StarsPaymee Boost Market — kanal boost O‘zbekistonda",
      excerpt: "Bot, buyurtma, narxlar jadvali, avtomatik yetkazish va to‘liq FAQ.",
      metaTitle: "StarsPaymee Boost Market | Kanal boost UZ",
      metaDescription:
        "StarsPaymee Boost Market: qanday buyurtma, to‘lov so‘mda, 1–30 kun, avtomatik boost. Telegram boost Uzbekistan FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Boost Market",
      ctaBody: "@StarsPaymee_bot — kanal boost so‘mda.",
      faq: faqUz,
    },
    ru: {
      title: "StarsPaymee Boost Market — boost канала",
      excerpt: "Маркет и цены в сумах.",
      metaTitle: "StarsPaymee Boost Market",
      metaDescription: "Boost Market StarsPaymee: заказ, оплата, авто-доставка.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Market",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
