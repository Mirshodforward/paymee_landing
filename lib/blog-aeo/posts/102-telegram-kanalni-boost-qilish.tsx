import { Link } from "@/i18n/navigation";
import { BoostSeriesNav } from "@/components/blog/boost-series-nav";
import { InlineCta, Steps, Step, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";

const SLUG = "telegram-kanalni-boost-qilish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram kanalni boost qilish</strong> ikki yo‘l bilan: (1) Premium obunachilar rasmiy «Boost qilish»
      tugmasi orqali; (2) kanal egasi <Link href="/blog/telegram-boost-ijarasi">boost ijarasi</Link> xizmatidan
      foydalanadi. Ikkalasi ham <Link href="/blog/telegram-kanal-reytingi">kanal reytingi</Link> va levelga ta’sir
      qiladi — maqsad va byudjetga qarab tanlang.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc
        label="Mundarija"
        items={[
          { href: "#rasmiy", label: "Rasmiy usul" },
          { href: "#ijara", label: "Ijara" },
          { href: "#marketing", label: "Marketing" },
        ]}
      />
      <h2 id="rasmiy">Obunachilar orqali boost qilish</h2>
      <Steps>
        <Step title="Premium">Obunachi Telegram Premium bo‘lishi kerak.</Step>
        <Step title="Kanal profili">«Boost qilish» tugmasini bosing.</Step>
        <Step title="Tasdiq">Ovoz kanal leveliga qo‘shiladi.</Step>
      </Steps>
      <p>
        Batafsil: <Link href="/blog/telegram-kanal-boost-nima">kanal boost nima</Link>,{" "}
        <Link href="/blog/telegram-premium-boost">Premium boost</Link>.
      </p>
      <h2 id="ijara">Admin sifatida tez boost</h2>
      <p>
        Premium obunachilar yetarli bo‘lmasa —{" "}
        <Link href="/blog/telegram-kanalga-boost-sotib-olish">kanalga boost sotib olish</Link> (ijara): kanal linki,
        son va kun, so‘mda to‘lov.
      </p>
      <h2 id="marketing">Kanalni boost qilish strategiyasi</h2>
      <ul>
        <li>Giveaway e’lonida boost so‘rash (qoidalarga muvofiq).</li>
        <li>Level maqsadini aniqlang — Stories yoki giveaway uchun kerakli daraja.</li>
        <li>
          <Link href="/blog/telegram-kanal-rivojlantirish">Kanal rivojlantirish</Link> bilan birga kontent va reklama.
        </li>
      </ul>
      <InlineCta text="Kanalni boost qilish — botda 1–30 kun ijarа." />
      <BoostSeriesNav locale="uz" />
    </>
  );
}

function RuAnswer() {
  return <p>Boost канала: официально через Premium-подписчиков или аренда boost в Boost Market.</p>;
}

function RuBody() {
  return <BoostSeriesNav locale="ru" />;
}

const faqUz = [
  { question: "Kanalni qanday boost qilaman?", answer: "Premium obunachilar rasmiy tugma orqali yoki ijara xizmati orqali." },
  { question: "Premium bo‘lmasam?", answer: "Ijara xizmati — sizga shaxsiy Premium shart emas." },
  { question: "Bir kunda nechta boost?", answer: "Rasmiyda Premium qoidalariga bog‘liq; ijara — buyurtma parametrlariga." },
  { question: "Boost qancha vaqt saqlanadi?", answer: "Rasmiy boost obunachi faol bo‘lguncha; ijara — tanlangan kunlar." },
  { question: "Noto‘g‘ri kanalga boost tushadimi?", answer: "Link/@username ni ikki marta tekshiring." },
];

const faqRu = [
  { question: "Как boost канал?", answer: "Premium-подписчики или аренда в боте." },
  { question: "Нужен ли Premium владельцу?", answer: "Для аренды — не обязательно." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "howto",
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  keywords: ["telegram kanalni boost qilish", "kanal boost qilish", "telegram boost qilish", "kanalga boost berish"],
  locales: {
    uz: {
      title: "Telegram kanalni boost qilish — usullar va strategiya 2026",
      excerpt: "Rasmiy Premium boost, ijarа xizmati va marketing maslahatlari.",
      metaTitle: "Telegram kanalni boost qilish | Qo‘llanma",
      metaDescription: "Kanalni qanday boost qilish: Premium obunachilar, boost ijarasi, reyting. FAQ.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Boost",
      ctaBody: "@StarsPaymee_bot",
      faq: faqUz,
    },
    ru: {
      title: "Как boost канал в Telegram — 2026",
      excerpt: "Официальный и арендный способ.",
      metaTitle: "Как boost канал Telegram",
      metaDescription: "Способы boost канала: Premium и аренда.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Boost",
      ctaBody: "Бот",
      faq: faqRu,
    },
  },
};
