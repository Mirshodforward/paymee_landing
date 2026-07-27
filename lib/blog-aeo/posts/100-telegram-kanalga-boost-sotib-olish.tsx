import { Link } from "@/i18n/navigation";
import { BoostMarketPriceBoard, BoostMarketFactsUz } from "@/components/blog/boost-market-price-board";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { CompareTable, InlineCta, Steps, Step, Toc, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-kanalga-boost-sotib-olish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram kanaliga boost sotib olish</strong> (ijara) — @StarsPaymee_bot <strong>Boost Market</strong> orqali:
      kanal linki yoki @username, <strong>1–100 boost</strong>, <strong>1–30 kun</strong> muddat, so‘mda to‘lov va avtomatik
      qo‘shilish. Bu organik obunachilar o‘rnini bosmaydi — kanal <strong>reytingi va level</strong> uchun qo‘shimcha vosita.
      Rasmiy Telegram <strong>Premium boost</strong> (obunachilarning ovozi) bilan aralashmasligi kerak —{" "}
      <Link href="/blog/telegram-kanal-boost-nima">boost nima</Link> maqolasida farq bor.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#farq", label: "Rasmiy boost vs ijarа" },
          { href: "#buyurtma", label: "Buyurtma berish" },
          { href: "#narx", label: "Narxlar" },
          { href: "#xavf", label: "Xavfsizlik" },
        ]}
      />
      <h2 id="farq">Rasmiy Premium boost va StarsPaymee boost ijarasi</h2>
      <CompareTable
        headers={["Tur", "Kim beradi", "To‘lov", "StarsPaymee"]}
        rows={[
          ["Premium boost", "Premium obunachi", "Bepul (obuna ichida)", <No key="1" />],
          ["Boost ijarasi (xizmat)", "Boost Market", "So‘m, 1–30 kun", <Yes key="2" />],
        ]}
      />
      <h2 id="buyurtma">StarsPaymee orqali qanday buyurtma beriladi?</h2>
      <Steps>
        <Step title="Bot">@StarsPaymee_bot → Kanal Boost arenda.</Step>
        <Step title="Kanal">t.me/link yoki @username kiriting.</Step>
        <Step title="Parametrlar">Boost soni (1–100) va muddat (1–30 kun).</Step>
        <Step title="To‘lov">UzCard, HUMO, Click, Payme.</Step>
        <Step title="Avtomatik">Tasdiqdan keyin boost qo‘shiladi — <Link href="/blog/telegram-boost-avtomatik">batafsil</Link>.</Step>
      </Steps>
      <BoostMarketFactsUz />
      <h2 id="narx">Telegram boost narxlari (namuna)</h2>
      <p>
        Aniq summa boost soni va kuniga bog‘liq; uzoq muddatda chegirma qo‘llanishi mumkin. Jadval — taxminiy; buyurtma
        oldidan botdagi kalkulyatorni ko‘ring. Batafsil:{" "}
        <Link href="/blog/telegram-boost-narxlari">boost narxlari</Link>,{" "}
        <Link href="/blog/arzon-telegram-boost">arzon boost</Link>.
      </p>
      <BoostMarketPriceBoard locale="uz" />
      <InlineCta text="Boost Marketni oching — telegram boost uzbekistan, so‘mda." />
      <h2 id="xavf">Boost xavfsizmi? Premium kerakmi?</h2>
      <p>
        Xizmatdan faqat ishonchli bot orqali foydalaning. <strong>Telegram Premium</strong> sizning shaxsiy akkauntingiz
        uchun alohida — kanal boost ijarasi uchun har doim Premium shart emas. Kanal siyosatiga va Telegram qoidalariga
        rioya qiling.
      </p>
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Аренда boost для канала — @StarsPaymee_bot Boost Market: 1–100 boost, 1–30 дней, оплата в сумах, авто-доставка.
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

const FAQ_UZ = [
  { question: "Telegram Boost nima?", answer: "Kanal reytingini oshiradigan «ovoz» birligi; rasmiy Premium boost yoki ijarа xizmati orqali." },
  { question: "Boost kanalga nima beradi?", answer: "Level o‘sishi, Stories, giveaway va boshqa level imkoniyatlari — Telegram qoidalariga qarab." },
  { question: "Boost qancha vaqt ishlaydi?", answer: "Buyurtmadagi muddat: 1 dan 30 kungacha." },
  { question: "Boost avtomatik qo‘shiladimi?", answer: "Ha, to‘lov tasdiqlangach tizim avtomatik ishlaydi." },
  { question: "30 kunlik boost nima?", answer: "30 kun davomida tanlangan boostlar kanalga ijarа qilinadi." },
  { question: "Boost xavfsizmi?", answer: "Rasmiy bot va aniq kanal manzili bilan — shubhali «super arzon» reklamalardan saqlaning." },
  { question: "Telegram Premium kerakmi?", answer: "Ijara xizmati uchun sizga Premium shart emas; Premium boost — boshqa mexanizm." },
  { question: "StarsPaymee orqali qanday buyurtma beriladi?", answer: "Bot → Boost Market → kanal → son/kun → to‘lov." },
];

const FAQ_RU = [
  { question: "Что такое boost?", answer: "Единица поддержки рейтинга канала." },
  { question: "Как заказать?", answer: "Boost Market в @StarsPaymee_bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  keywords: [
    "telegram boost",
    "telegram kanal boost",
    "kanalga boost",
    "telegram boost sotib olish",
    "telegram boost arzon",
    "boost ijarasi",
    "telegram boost uzbekistan",
    "telegram kanal rivojlantirish",
  ],
  howToSteps: [
    { name: "Bot", text: "Boost Market ochish." },
    { name: "Kanal", text: "Link yoki @username." },
    { name: "To‘lov", text: "So‘mda." },
  ],
  locales: {
    uz: {
      title: "Telegram kanaliga Boost sotib olish — to‘liq qo‘llanma 2026",
      excerpt: "Boost ijarasi 1–30 kun, avtomatik yetkazish, narxlar jadvali, Premium farqi va FAQ.",
      metaTitle: "Telegram kanaliga Boost sotib olish | Arzon xizmat",
      metaDescription:
        "Telegram kanalingiz uchun 1–30 kun boost ijarasi, arzon narxlar, avtomatik faollashtirish. StarsPaymee Boost Market — FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Boost buyurtma",
      ctaBody: "@StarsPaymee_bot — Kanal Boost arenda.",
      faq: FAQ_UZ,
    },
    ru: {
      title: "Купить Boost для канала Telegram — гайд 2026",
      excerpt: "Аренда boost, цены, авто-доставка.",
      metaTitle: "Купить Boost для Telegram-канала",
      metaDescription: "Аренда boost 1–30 дней, StarsPaymee Boost Market.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Заказать",
      ctaBody: "Бот",
      faq: FAQ_RU,
    },
  },
};
