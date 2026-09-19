import { Link } from "@/i18n/navigation";
import { hasTranslation } from "@/lib/blog/all";
import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

const labels: Record<AeoUiLocale, Record<(typeof boostSeriesSlugs)[number], { title: string; blurb: string }>> = {
  uz: {
    "telegram-kanalga-boost-sotib-olish": { title: "Kanalga boost sotib olish", blurb: "To‘liq qo‘llanma, narxlar." },
    "telegram-boost-ijarasi": { title: "Boost ijarasi nima?", blurb: "Ijara vs rasmiy boost." },
    "telegram-kanal-reytingi": { title: "Kanal reytingi / level", blurb: "Level qanday oshadi." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Rasmiy Premium tizimi." },
    "telegram-kanal-rivojlantirish": { title: "Kanal rivojlantirish", blurb: "Tez o‘sish strategiyasi." },
    "telegram-kanal-boost-nima": { title: "Boost nima", blurb: "Level, Stories, giveaway." },
    "telegram-boost-narxlari": { title: "Boost narxlari", blurb: "1 va 30 kun paketlar." },
  },
  ru: {
    "telegram-kanalga-boost-sotib-olish": { title: "Купить boost каналу", blurb: "Полный гайд." },
    "telegram-boost-ijarasi": { title: "Аренда boost", blurb: "Что это." },
    "telegram-kanal-reytingi": { title: "Рейтинг канала", blurb: "Level." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Официально." },
    "telegram-kanal-rivojlantirish": { title: "Развитие канала", blurb: "Рост." },
    "telegram-kanal-boost-nima": { title: "Что такое boost", blurb: "Уровень и Stories." },
    "telegram-boost-narxlari": { title: "Цены boost", blurb: "Пакеты." },
  },
  en: {
    "telegram-kanalga-boost-sotib-olish": { title: "Buy channel boost", blurb: "Full guide." },
    "telegram-boost-ijarasi": { title: "Boost rental", blurb: "What it is." },
    "telegram-kanal-reytingi": { title: "Channel rating", blurb: "Level up." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Official system." },
    "telegram-kanal-rivojlantirish": { title: "Channel growth", blurb: "Strategy." },
    "telegram-boost-narxlari": { title: "Boost prices", blurb: "Packages." },
    "telegram-kanal-boost-nima": { title: "What a boost is", blurb: "Level and Stories." },
  },
};

export function BoostSeriesNav({ locale }: { locale: AeoUiLocale }) {
  const L = labels[locale] ?? labels.uz;
  return (
    <aside className="blog-series" aria-label="Boost seriyasi" style={{ marginTop: "2em" }}>
      <div className="kicker">Boost</div>
      <h2 className="h3" style={{ marginTop: 8 }}>
        Telegram Boost — 10 ta maqola
      </h2>
      <div className="blog-series-grid">
        {/* Shu tilda tarjimasi yo‘q maqola noindex bo‘ladi — indekslanadigan
            sahifadan unga havola qo‘yish Google uchun zid signal. */}
        {boostSeriesSlugs
          .filter((slug) => hasTranslation(slug, locale))
          .map((slug) => (
          <Link key={slug} href={`/blog/${slug}`} className="blog-series-card">
            <h3>{L[slug].title}</h3>
            <p>{L[slug].blurb}</p>
            </Link>
          ))}
      </div>
    </aside>
  );
}
