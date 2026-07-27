import { Link } from "@/i18n/navigation";
import { InlineCta, Toc } from "@/components/blog/aeo-blocks";
import type { AeoPost } from "@/lib/blog-aeo/types";
import { GrowthSeriesAside } from "./_growth-shared";

const SLUG = "telegram-username-sotib-olish";

function UzAnswer() {
  return (
    <p>
      <strong>Telegram username (@nom)</strong> odatda bepul tanlanadi, lekin qisqa va ommabop nomlar{" "}
      <strong>Fragment</strong> bozorida TON evaziga sotiladi. «Username sotib olish» — Fragment yoki rasmiy
      auksionlar; firibgar «arzon @nom» reklamalaridan ehtiyot bo‘ling.
    </p>
  );
}

function UzBody() {
  return (
    <>
      <Toc label="Mundarija" items={[{ href: "#fragment", label: "Fragment" }, { href: "#xavf", label: "Xavf" }]} />
      <h2 id="fragment">Fragment va TON</h2>
      <p>
        Fragment — Telegram ekotizimining rasmiy aktivlar maydoni. Username, raqam va ba’zi sovg‘alar shu yerda
        savdolashiladi. TON hamyon kerak; O‘zbekistonda ko‘pchilik uchun oddiy @username bepul yetarli.
      </p>
      <p>
        Premium hadya orqali username:{" "}
        <Link href="/blog/telegram-premium-sovga-username-orqali">Premium sovga username</Link>.
      </p>
      <h2 id="xavf">Xavfsizlik</h2>
      <ul>
        <li>Faqat fragment.com va rasmiy Telegram jarayonlari</li>
        <li>Parolni hech kimga bermang</li>
        <li>Arzon «tayyor @nom» — ko‘pincha firibgarlik</li>
      </ul>
      <InlineCta text="Premium yoki Stars — username orqali, so‘mda: @StarsPaymee_bot." />
      <GrowthSeriesAside locale="uz" />
    </>
  );
}

function RuAnswer() {
  return (
    <p>
      Короткие @имена продаются на <strong>Fragment</strong> за TON. Остерегайтесь мошенников; Premium можно подарить по
      username через StarsPaymee.
    </p>
  );
}

function RuBody() {
  return (
    <>
      <GrowthSeriesAside locale="ru" />
    </>
  );
}

const faqUz = [
  { question: "Username bepulmi?", answer: "Ko‘p nomlar bepul; band bo‘lsa boshqa variant tanlang." },
  { question: "Fragment nima?", answer: "Rasmiy TON bozori — username va aktivlar." },
  { question: "StarsPaymee username sotadimi?", answer: "Yo‘q — Stars, Premium, Gifts; @nom Fragment orqali." },
  { question: "Qisqa @nom qancha?", answer: "Bozorga bog‘liq, TON da." },
];

const faqRu = [
  { question: "Где купить @имя?", answer: "Официально — Fragment." },
];

export const post: AeoPost = {
  slug: SLUG,
  category: "Telegram",
  type: "info",
  datePublished: "2026-07-24",
  dateModified: "2026-07-24",
  keywords: ["telegram username sotib olish", "fragment username", "qisqa username telegram"],
  locales: {
    uz: {
      title: "Telegram username sotib olish — Fragment va xavfsizlik",
      excerpt: "Qisqa @nom, Fragment, TON va firibgarlikdan saqlanish.",
      metaTitle: "Telegram username sotib olish | Fragment",
      metaDescription: "Telegram username qanday sotib olinadi: Fragment, TON, xavfsizlik. FAQ 2026.",
      answerTitle: "Qisqa javob",
      Answer: UzAnswer,
      Body: UzBody,
      ctaHeading: "Premium / Stars",
      ctaBody: "Username orqali hadya — botda.",
      faq: faqUz,
    },
    ru: {
      title: "Купить username Telegram — Fragment",
      excerpt: "Короткие имена, TON, безопасность.",
      metaTitle: "Купить username Telegram | 2026",
      metaDescription: "Покупка @username: Fragment, TON, мошенничество. FAQ.",
      answerTitle: "Краткий ответ",
      Answer: RuAnswer,
      Body: RuBody,
      ctaHeading: "Premium / Stars",
      ctaBody: "@StarsPaymee_bot",
      faq: faqRu,
    },
  },
};
