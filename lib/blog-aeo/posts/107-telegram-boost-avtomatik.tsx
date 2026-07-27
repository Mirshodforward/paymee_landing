import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, Steps, Step, Toc, Yes } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-boost-avtomatik";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram boost avtomatik</strong> — to‘lov tasdiqlangach tizim boostlarni kanalga qo‘shadi, qo‘lda
      kutishsiz. StarsPaymee <strong>Boost Market</strong>da buyurtma: kanal, son, muddat → to‘lov → avtomatik faollashish.
      Boshlang: <Link href="/blog/telegram-kanalga-boost-sotib-olish">boost sotib olish qo‘llanmasi</Link>.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#qanday", label: "Qanday ishlaydi" },
          { href: "#vaqt", label: "Vaqt" },
          { href: "#xato", label: "Muammolar" },
        ]}
      />
      <h2 id="qanday">Avtomatik boost qanday ishlaydi?</h2>
      <Steps>
        <Step title="Buyurtma">@StarsPaymee_bot → Boost Market.</Step>
        <Step title="Kanal">t.me/... yoki @username.</Step>
        <Step title="To‘lov">So‘m — tasdiq.</Step>
        <Step title="Avto">Tizim boostni kanalga bog‘laydi.</Step>
      </Steps>
      <p>
        Bu <Link href="/blog/telegram-boost-ijarasi">boost ijarasi</Link> xizmatining yetkazish usuli;{" "}
        <Link href="/blog/telegram-kanal-boost-nima">rasmiy Premium boost</Link> foydalanuvchi tugmasi orqali qo‘lda
        beriladi.
      </p>
      <h2 id="vaqt">Qancha vaqt kutish kerak?</h2>
      <p>
        Odatda daqiqalar ichida — to‘lov provayderi va navbatga bog‘liq. Muddat tugaguncha{" "}
        <Link href="/blog/telegram-kanal-reytingi">reyting</Link> saqlanadi (xizmat shartlariga qarab).
      </p>
      <h2 id="xato">Boost tushmadi — nima qilish?</h2>
      <ul>
        <li>Kanal linki va admin huquqlarini tekshiring.</li>
        <li>To‘lov holati (muvaffaqiyatli) ni tasdiqlang.</li>
        <li>Bot qo‘llab-quvvatlashiga buyurtma ID bilan murojaat.</li>
      </ul>
      <p>
        Narxlari: <Link href="/blog/telegram-boost-narxlari">boost narxlari</Link>. Avtomatik = tez: <Yes />{" "}
        <Link href="/blog/starspaymee-boost-market">StarsPaymee Boost Market</Link>.
      </p>
      <InlineCta text="Avtomatik boost — hozir buyurtma bering." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Авто-доставка boost после оплаты в Boost Market @StarsPaymee_bot.</p>;
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Boost avtomatik qo‘shiladimi?", answer: "Ha, to‘lov tasdiqlangach tizim ishlaydi." },
  { question: "Qo‘lda yozish kerakmi?", answer: "Yo‘q — botda buyurtma yetarli." },
  { question: "Neancha daqiqada?", answer: "Odatda tez; ba’zan to‘lov tasdiqini kutish kerak." },
  { question: "Noto‘g‘ri kanal?", answer: "Buyurtmadan oldin @username yoki linkni tekshiring." },
  { question: "30 kun avtomatik yangilanadimi?", answer: "Muddat buyurtmada; uzaytirish — yangi buyurtma." },
];

const faqRu = [
  { question: "Автоматически ли boost?", answer: "Да, после подтверждения оплаты." },
  { question: "Куда заказать?", answer: "Boost Market в боте." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: ["telegram boost avtomatik", "boost avtomatik qo'shilish", "avtomatik kanal boost", "boost tez yetkazish"],
  locales: {
    uz: {
      title: "Telegram boost avtomatik — tez yetkazish 2026",
      excerpt: "To‘lovdan keyin avtomatik qo‘shilish, vaqt, muammolarni hal qilish.",
      metaTitle: "Telegram boost avtomatik | Tez yetkazish",
      metaDescription: "Boost avtomatik qanday qo‘shiladi: StarsPaymee, vaqt, FAQ. Kanal boost uzbekistan.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Avtomatik boost",
      ctaBody: "Bot — Boost Market.",
      faq: faqUz,
    },
    ru: {
      title: "Автоматический boost Telegram — 2026",
      excerpt: "Доставка после оплаты.",
      metaTitle: "Авто boost Telegram",
      metaDescription: "Как работает автоматическая доставка boost.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Заказать",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
