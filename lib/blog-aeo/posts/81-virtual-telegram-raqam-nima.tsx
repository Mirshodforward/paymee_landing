import { Link } from "@/i18n/navigation";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { BotNumberCtaRu, BotNumberCtaUz, GrowthSeriesAside } from "./_growth-shared";

const SLUG = "virtual-telegram-raqam-nima";

function UzAnswer() {
  return (
    <p>
      <strong>Virtual Telegram raqam</strong> — fizik SIMsiz, onlayn xizmat orqali vaqtincha olinadigan telefon
      raqami bo‘lib, Telegram SMS/OTP kodini qabul qilish uchun ishlatiladi. U bir martalik yoki qisqa muddatli bo‘lishi
      mumkin; narxi davlatga qarab <strong>6 600</strong> dan <strong>56 300 so‘m</strong>gacha farq qiladi.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#farq", label: "Oddiy SIM dan farqi" },
          { href: "#qachon", label: "Qachon kerak" },
          { href: "#xavf", label: "Xavflar" },
        ]}
      />
      <h2 id="farq">Oddiy SIM dan farqi</h2>
      <p>
        Oddiy SIM doimiy raqam beradi; virtual raqam ko‘pincha faqat kod olish uchun. Xizmatlar 5sim, SMS-Activate
        kabi global nomlar bilan ham tanilgan. O‘zbekistonda so‘mda qulay variant —{" "}
        <Link href="/blog/telegram-raqam-sotib-olish">Telegram raqam sotib olish</Link> qo‘llanmasi.
      </p>
      <h2 id="qachon">Qachon virtual raqam tanlanadi?</h2>
      <ul>
        <li>Ikkinchi Telegram akkaunt ochish</li>
        <li>Chet el kodli raqam talab qilinsa</li>
        <li>Mahalliy operator SMS yetkazmasa</li>
        <li>Vaqtinchalik loyiha yoki test akkaunt</li>
      </ul>
      <BotNumberCtaUz />
      <h2 id="xavf">Xavflar va maslahatlar</h2>
      <p>
        Virtual raqamni yo‘qotib qo‘ysangiz, tiklash qiyinlashadi — muhim akkauntlarda doimiy raqam va{" "}
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA</Link> qo‘ying. Firibgarlar «tayyor akkaunt»
        bilan chalkashtirmasligi uchun faqat ishonchli botdan foydalaning.
      </p>
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      <strong>Виртуальный номер для Telegram</strong> — временный онлайн-номер без SIM для приёма SMS/OTP при
      регистрации. Цена зависит от страны — от ~6 600 до ~56 300 сум в каталоге StarsPaymee.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <h2>Отличие от обычной SIM</h2>
      <p>
        SIM даёт постоянный номер; виртуальный чаще только для кода. Подробнее о покупке:{" "}
        <Link href="/blog/telegram-raqam-sotib-olish">купить номер для Telegram</Link>.
      </p>
      <BotNumberCtaRu />
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Virtual raqam qonuniymi?", answer: "Qonuniy maqsadda ro‘yxatdan o‘tish odatda ruxsat etiladi; spam va firibgarlik taqiqlanadi." },
  { question: "Bir raqam necha marta ishlatiladi?", answer: "Xizmatga bog‘liq — ko‘pincha bir marta yoki qisqa muddat." },
  { question: "Telegram virtual raqam narxi?", answer: "Botda davlat bo‘yicha — arzon segment ~6 600 so‘mdan." },
  { question: "eSIM ham virtualmi?", answer: "eSIM fizik raqamning raqamli ko‘rinishi; virtual SMS-xizmatdan farq qiladi." },
  { question: "Qayerdan olish?", answer: "@StarsPaymee_bot raqamlar bo‘limi." },
];

const faqRu = [
  { question: "Это законно?", answer: "Для регистрации в легальных целях — да; спам запрещён." },
  { question: "Сколько стоит?", answer: "Смотрите каталог бота по странам." },
  { question: "Где купить?", answer: "@StarsPaymee_bot → номера." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-27",
  dateModified: "2026-07-27",
  keywords: ["virtual telegram raqam", "virtual number", "bir martalik raqam", "telegram otp", "sms activate"],
  locales: {
    uz: {
      title: "Virtual Telegram raqam nima? 2026 qo‘llanma",
      excerpt: "Virtual raqam tushunchasi, qachon kerak, narxlar, xavfsizlik va StarsPaymee botidagi katalog.",
      metaTitle: "Virtual Telegram raqam nima? | 2026",
      metaDescription: "Virtual Telegram raqam nima, qanday ishlaydi, narxi va xavflari. SMS/OTP, arzon davlatlar, bot orqali olish.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Raqam katalogi",
      ctaBody: "Davlat va narxni botda tanlang — so‘mda to‘lov.",
      faq: faqUz,
    },
    ru: {
      title: "Что такое виртуальный номер Telegram?",
      excerpt: "Виртуальный номер: зачем нужен, цены, риски и каталог в боте.",
      metaTitle: "Виртуальный номер Telegram | 2026",
      metaDescription: "Что такое виртуальный номер для Telegram, как работает SMS/OTP и где купить в сумах.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Каталог номеров",
      ctaBody: "Выберите страну в @StarsPaymee_bot.",
      faq: faqRu,
    },
  },
};
