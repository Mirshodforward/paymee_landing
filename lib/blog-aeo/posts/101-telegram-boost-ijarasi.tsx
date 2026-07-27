import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { CompareTable, InlineCta, Toc, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-boost-ijarasi";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram boost ijarasi</strong> — kanal reytingi (level) uchun boost birliklarini ma’lum muddatga ijaraga
      olish xizmati. Rasmiy <strong>Premium boost</strong> (obunachining bepul ovozi) bilan aralashmasligi kerak. O‘zbekiston
      uchun <Link href="/blog/telegram-kanalga-boost-sotib-olish">kanalga boost sotib olish</Link> qo‘llanmasida StarsPaymee
      Boost Market: 1–100 boost, 1–30 kun, so‘mda to‘lov.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#nima", label: "Ijara nima" },
          { href: "#farq", label: "Rasmiy boost" },
          { href: "#qachon", label: "Qachon kerak" },
        ]}
      />
      <h2 id="nima">Boost ijarasi nima?</h2>
      <p>
        Kanal egasi yoki admin tashqi xizmat orqali boost «zaxirasini» vaqtinchalik kanalga bog‘laydi — level va reyting
        ko‘rsatkichlari oshishi mumkin. Bu organik obunachilar o‘rnini bosmaydi;{" "}
        <Link href="/blog/telegram-kanal-boost-nima">Telegram kanal boost nima?</Link> maqolasida rasmiy mexanizm
        tushuntirilgan.
      </p>
      <h2 id="farq">Ijara vs Premium boost</h2>
      <CompareTable
        headers={["", "Premium boost", "Boost ijarasi"]}
        rows={[
          ["Kim beradi", "Premium obunachi", "Boost Market xizmati"],
          ["To‘lov", "Obuna ichida", "So‘m, muddatli"],
          ["StarsPaymee", <No key="n" />, <Yes key="y" />],
        ]}
      />
      <h2 id="qachon">Qachon ijaradan foydalaniladi?</h2>
      <p>
        Giveaway ochish, Stories yoki tez level ko‘tarish kerak bo‘lganda — lekin faqat ishonchli provayder va aniq kanal
        manzili bilan. Narxlari: <Link href="/blog/telegram-boost-narxlari">boost narxlari</Link>,{" "}
        <Link href="/blog/arzon-telegram-boost">arzon boost</Link>.
      </p>
      <InlineCta text="Boost ijarasi — @StarsPaymee_bot Boost Market, so‘mda." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Аренда boost — временная поддержка рейтинга канала через сервис, не путать с официальным Premium boost. Заказ в
      Boost Market.
    </p>
  );
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Boost ijarasi nima?", answer: "Kanalga vaqtinchalik boost birliklari ulash xizmati — muddat va son buyurtmada." },
  { question: "Rasmiy boostdan farqi nima?", answer: "Premium obunachi bepul ovoz beradi; ijarada xizmat provayderi boostni taqdim etadi." },
  { question: "Qancha muddat?", answer: "Odatda 1 dan 30 kungacha — botda tanlanadi." },
  { question: "Premium kerakmi?", answer: "Ijara xizmati uchun sizning shaxsiy Premiumingiz shart emas." },
  { question: "Qayerdan buyurtma?", answer: "@StarsPaymee_bot → Kanal Boost arenda / Boost Market." },
  { question: "Xavfsizmi?", answer: "Rasmiy bot, to‘g‘ri kanal linki; shubhali «super arzon» reklamalardan saqlaning." },
];

const faqRu = [
  { question: "Что такое аренда boost?", answer: "Временная поддержка level канала через сервис." },
  { question: "Чем отличается от Premium?", answer: "Premium — голос подписчика; аренда — платный сервис." },
  { question: "Где заказать?", answer: "Boost Market в @StarsPaymee_bot." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: ["boost ijarasi", "telegram boost ijarasi", "kanal boost ijarasi", "telegram boost uzbekistan", "boost arenda"],
  locales: {
    uz: {
      title: "Telegram boost ijarasi nima? — Premiumdan farqi 2026",
      excerpt: "Boost ijarasi mexanikasi, rasmiy Premium boost bilan solishtirish, qachon kerak va xavfsizlik.",
      metaTitle: "Telegram boost ijarasi nima? | 2026",
      metaDescription: "Telegram kanal boost ijarasi: nima, Premium boostdan farqi, muddat, StarsPaymee Boost Market. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Ijara buyurtma",
      ctaBody: "Boost Market — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Аренда boost Telegram — что это 2026",
      excerpt: "Аренда vs Premium boost.",
      metaTitle: "Аренда boost Telegram | 2026",
      metaDescription: "Что такое аренда boost канала, отличие от Premium, заказ в боте.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Заказать",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
