import { Link } from "@/i18n/navigation";
import { telegramGrowthSeriesSlugs } from "@/lib/blog-aeo/growth-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

const labels: Record<
  AeoUiLocale,
  Record<(typeof telegramGrowthSeriesSlugs)[number], { title: string; blurb: string }>
> = {
  uz: {
    "telegram-raqam-sotib-olish": {
      title: "Telegram raqam sotib olish",
      blurb: "Virtual va haqiqiy raqamlar, narxlar, SMS qabul qilish.",
    },
    "virtual-telegram-raqam-nima": {
      title: "Virtual Telegram raqam nima?",
      blurb: "Bir martalik raqam, OTP va xavfsizlik.",
    },
    "telegram-premium-sotib-olish-2026": {
      title: "Telegram Premium sotib olish",
      blurb: "So‘mda to‘lov, username bilan faollashish.",
    },
    "telegram-akkaunt-sotib-olish": {
      title: "Telegram akkaunt sotib olish",
      blurb: "Tayyor akkaunt vs o‘zingiz ochish — farqlar.",
    },
    "telegram-biznes-akkaunt-ochish": {
      title: "Telegram biznes akkaunti",
      blurb: "Business profil, API va mijozlar bilan ishlash.",
    },
    "telegram-kanal-boost-olish-qollanma": {
      title: "Kanal uchun boost olish",
      blurb: "Level, Stories va giveaway imkoniyatlari.",
    },
    "telegram-stars-sotib-olish-to-liq-qollanma": {
      title: "Telegram Stars sotib olish",
      blurb: "To‘liq qo‘llanma: narx, bot, xavfsizlik.",
    },
    "telegram-gifts-yuborish-qollanma": {
      title: "Telegram Gifts yuborish",
      blurb: "Sovg‘a tanlash, narx va yetkazish.",
    },
    "telegram-username-sotib-olish": {
      title: "Telegram username sotib olish",
      blurb: "Fragment, qisqa @nom va ehtiyot choralari.",
    },
    "telegram-kanal-guruh-reklama-xizmatlari": {
      title: "Kanal va guruh reklamasi",
      blurb: "Telegram Ads, post va targeting.",
    },
  },
  ru: {
    "telegram-raqam-sotib-olish": {
      title: "Купить номер для Telegram",
      blurb: "Виртуальные номера, цены, приём SMS.",
    },
    "virtual-telegram-raqam-nima": {
      title: "Что такое виртуальный номер?",
      blurb: "Одноразовый номер, OTP и безопасность.",
    },
    "telegram-premium-sotib-olish-2026": {
      title: "Купить Telegram Premium",
      blurb: "Оплата в сумах, активация по username.",
    },
    "telegram-akkaunt-sotib-olish": {
      title: "Купить аккаунт Telegram",
      blurb: "Готовый аккаунт vs регистрация сами.",
    },
    "telegram-biznes-akkaunt-ochish": {
      title: "Бизнес-аккаунт Telegram",
      blurb: "Business-профиль, API и клиенты.",
    },
    "telegram-kanal-boost-olish-qollanma": {
      title: "Boost для канала",
      blurb: "Уровни, Stories и giveaway.",
    },
    "telegram-stars-sotib-olish-to-liq-qollanma": {
      title: "Купить Telegram Stars",
      blurb: "Полный гайд: цена, бот, безопасность.",
    },
    "telegram-gifts-yuborish-qollanma": {
      title: "Отправка Telegram Gifts",
      blurb: "Выбор подарка, цена и доставка.",
    },
    "telegram-username-sotib-olish": {
      title: "Купить username Telegram",
      blurb: "Fragment, короткие @имена и риски.",
    },
    "telegram-kanal-guruh-reklama-xizmatlari": {
      title: "Реклама в каналах и группах",
      blurb: "Telegram Ads, посты и таргетинг.",
    },
  },
  en: {
    "telegram-raqam-sotib-olish": {
      title: "Buy a Telegram number",
      blurb: "Virtual numbers, prices, SMS reception.",
    },
    "virtual-telegram-raqam-nima": {
      title: "What is a virtual Telegram number?",
      blurb: "Disposable numbers, OTP and safety.",
    },
    "telegram-premium-sotib-olish-2026": {
      title: "Buy Telegram Premium",
      blurb: "Pay in UZS, activate by username.",
    },
    "telegram-akkaunt-sotib-olish": {
      title: "Buy a Telegram account",
      blurb: "Ready-made vs self-registration.",
    },
    "telegram-biznes-akkaunt-ochish": {
      title: "Telegram business account",
      blurb: "Business profile, API and clients.",
    },
    "telegram-kanal-boost-olish-qollanma": {
      title: "Channel boost guide",
      blurb: "Levels, Stories and giveaways.",
    },
    "telegram-stars-sotib-olish-to-liq-qollanma": {
      title: "Buy Telegram Stars",
      blurb: "Full guide: price, bot, safety.",
    },
    "telegram-gifts-yuborish-qollanma": {
      title: "Send Telegram Gifts",
      blurb: "Pick a gift, price and delivery.",
    },
    "telegram-username-sotib-olish": {
      title: "Buy a Telegram username",
      blurb: "Fragment, short @names and risks.",
    },
    "telegram-kanal-guruh-reklama-xizmatlari": {
      title: "Channel & group ads",
      blurb: "Telegram Ads, posts and targeting.",
    },
  },
};

export function GrowthSeriesNav({ locale }: { locale: AeoUiLocale }) {
  const L = labels[locale] ?? labels.uz;
  const heading =
    locale === "ru" ? "10 maqoladan iborat seriya" : locale === "en" ? "10-article series" : "10 ta SEO maqola seriyasi";
  const sub =
    locale === "ru"
      ? "Telegram raqam, akkaunt, Premium, Stars va reklama — har biri alohida URL va FAQ bilan."
      : locale === "en"
        ? "Numbers, accounts, Premium, Stars and ads — each with its own URL and FAQ."
        : "Telegram raqam, akkaunt, Premium, Stars va reklama — har biri alohida slug va FAQ bilan.";

  return (
    <aside className="blog-series" aria-label={heading}>
      <div className="kicker">{locale === "ru" ? "Seriya" : "Seriya"}</div>
      <h2 className="h3" style={{ marginTop: 8, marginBottom: 6 }}>
        {heading}
      </h2>
      <p className="sec-sub" style={{ marginBottom: 0, fontSize: 14 }}>
        {sub}
      </p>
      <div className="blog-series-grid">
        {telegramGrowthSeriesSlugs.map((slug) => (
          <Link key={slug} href={`/blog/${slug}`} className="blog-series-card">
            <h3>{L[slug].title}</h3>
            <p>{L[slug].blurb}</p>
            <span className="prod-link" style={{ color: "var(--fuch)" }}>
              {locale === "ru" ? "Читать →" : "O‘qish →"}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
