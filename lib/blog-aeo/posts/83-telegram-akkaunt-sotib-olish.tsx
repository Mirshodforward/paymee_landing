import { Link } from "@/i18n/navigation";
import { CompareTable, InlineCta, Toc, Yes, No } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-akkaunt-sotib-olish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram akkaunt sotib olish</strong> — tayyor ro‘yxatdan o‘tgan akkauntni sotib olish yoki o‘zingiz{" "}
      <Link href="/blog/telegram-raqam-sotib-olish">virtual raqam</Link> bilan yangi akkaunt ochish. Xavfsiz yo‘l —
      o‘zingiz ro‘yxatdan o‘ting, 2FA qo‘ying; tayyor akkauntlarda parol o‘zgarishi va blok xavfi yuqori.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#farq", label: "Tayyor vs yangi" }, { href: "#xavf", label: "Xavflar" }]} />
      <h2 id="farq">Tayyor akkaunt yoki yangi ochish?</h2>
      <CompareTable
        headers={["Usul", "Tezlik", "Xavfsizlik", "Tavsiya"]}
        rows={[
          ["Virtual raqam + o‘zingiz ochish", "O‘rtacha", <Yes key="1" />, "Eng yaxshi"],
          ["Tayyor akkaunt sotib olish", "Tez", <No key="2" />, "Faqat ishonchli manba"],
          ["Raqamsiz (mavjud akkaunt)", "—", <Yes key="3" />, "Premium/Stars uchun yetarli"],
        ]}
      />
      <h2 id="xavf">Xavflar</h2>
      <p>
        Sotilgan akkauntlarda eski egasi tiklashga urinishi, spam tarixidagi blok yoki noqonuniy kontent bo‘lishi mumkin.
        <Link href="/blog/telegram-akkauntni-ogirlashdan-himoya-2fa">2FA</Link> va email qo‘shish shart.
      </p>
      <InlineCta text="Yangi akkaunt uchun virtual raqam — botda 100+ davlat." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Покупка готового аккаунта Telegram быстрее, но рискованнее. Безопаснее зарегистрироваться сами с{" "}
      <Link href="/blog/telegram-raqam-sotib-olish">виртуальным номером</Link> и включить 2FA.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <p>Сравните риски готового аккаунта и самостоятельной регистрации.</p>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Telegram akkaunt sotib olish xavflimi?", answer: "Tayyor akkauntlarda tiklash va blok xavfi yuqori; o‘zingiz ochish afzal." },
  { question: "Ikkinchi akkaunt qanday ochiladi?", answer: "Yangi raqam + yangi ro‘yxatdan o‘tish." },
  { question: "Raqam qayerdan?", answer: "@StarsPaymee_bot katalogi." },
  { question: "Premium alohidami?", answer: "Ha, mavjud akkauntga username bilan ulanadi." },
  { question: "Parol sotib olinadimi?", answer: "Shubhali — rasmiy yo‘l emas." },
];

const faqRu = [
  { question: "Опасно ли покупать аккаунт?", answer: "Да, риск блокировки и восстановления продавцом." },
  { question: "Как второй аккаунт?", answer: "Новый номер и регистрация." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  keywords: ["telegram akkaunt sotib olish", "tayyor telegram akkaunt", "ikkinchi telegram akkaunt"],
  locales: {
    uz: {
      title: "Telegram akkaunt sotib olish — xavflar va alternativalar",
      excerpt: "Tayyor akkaunt vs virtual raqam bilan ochish. Xavfsizlik, 2FA va StarsPaymee raqamlari.",
      metaTitle: "Telegram akkaunt sotib olish | Xavfsizlik 2026",
      metaDescription: "Telegram akkaunt sotib olish xavflari, ikkinchi akkaunt, virtual raqam. Alternativa va FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Yangi akkaunt uchun raqam",
      ctaBody: "Botda davlat tanlang — so‘mda.",
      faq: faqUz,
    },
    ru: {
      title: "Купить аккаунт Telegram — риски и альтернативы",
      excerpt: "Готовый аккаунт vs регистрация с виртуальным номером.",
      metaTitle: "Купить аккаунт Telegram | 2026",
      metaDescription: "Риски покупки аккаунта Telegram и безопасная альтернатива.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Номер для регистрации",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
