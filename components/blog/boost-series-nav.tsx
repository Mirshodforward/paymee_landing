import { Link } from "@/i18n/navigation";
import { boostSeriesSlugs } from "@/lib/blog-aeo/boost-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

const labels: Record<AeoUiLocale, Record<(typeof boostSeriesSlugs)[number], { title: string; blurb: string }>> = {
  uz: {
    "telegram-kanalga-boost-sotib-olish": { title: "Kanalga boost sotib olish", blurb: "To‘liq qo‘llanma, narxlar." },
    "telegram-boost-ijarasi": { title: "Boost ijarasi nima?", blurb: "Ijara vs rasmiy boost." },
    "telegram-kanalni-boost-qilish": { title: "Kanalni boost qilish", blurb: "Usullar va marketing." },
    "telegram-kanal-reytingi": { title: "Kanal reytingi / level", blurb: "Level qanday oshadi." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Rasmiy Premium tizimi." },
    "telegram-kanal-rivojlantirish": { title: "Kanal rivojlantirish", blurb: "Tez o‘sish strategiyasi." },
    "telegram-boost-narxlari": { title: "Boost narxlari", blurb: "1 va 30 kun paketlar." },
    "telegram-boost-avtomatik": { title: "Avtomatik boost", blurb: "Tez yetkazish." },
    "arzon-telegram-boost": { title: "Arzon telegram boost", blurb: "Narx va sifat." },
    "starspaymee-boost-market": { title: "StarsPaymee Boost Market", blurb: "Bot va buyurtma." },
  },
  ru: {
    "telegram-kanalga-boost-sotib-olish": { title: "Купить boost каналу", blurb: "Полный гайд." },
    "telegram-boost-ijarasi": { title: "Аренда boost", blurb: "Что это." },
    "telegram-kanalni-boost-qilish": { title: "Boost канала", blurb: "Методы." },
    "telegram-kanal-reytingi": { title: "Рейтинг канала", blurb: "Level." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Официально." },
    "telegram-kanal-rivojlantirish": { title: "Развитие канала", blurb: "Рост." },
    "telegram-boost-narxlari": { title: "Цены boost", blurb: "Пакеты." },
    "telegram-boost-avtomatik": { title: "Авто boost", blurb: "Доставка." },
    "arzon-telegram-boost": { title: "Дешёвый boost", blurb: "Цена/качество." },
    "starspaymee-boost-market": { title: "StarsPaymee Boost", blurb: "Маркет." },
  },
  en: {
    "telegram-kanalga-boost-sotib-olish": { title: "Buy channel boost", blurb: "Full guide." },
    "telegram-boost-ijarasi": { title: "Boost rental", blurb: "What it is." },
    "telegram-kanalni-boost-qilish": { title: "Boost your channel", blurb: "Methods." },
    "telegram-kanal-reytingi": { title: "Channel rating", blurb: "Level up." },
    "telegram-premium-boost": { title: "Premium boost", blurb: "Official system." },
    "telegram-kanal-rivojlantirish": { title: "Channel growth", blurb: "Strategy." },
    "telegram-boost-narxlari": { title: "Boost prices", blurb: "Packages." },
    "telegram-boost-avtomatik": { title: "Auto boost", blurb: "Delivery." },
    "arzon-telegram-boost": { title: "Cheap boost", blurb: "Value." },
    "starspaymee-boost-market": { title: "StarsPaymee Boost", blurb: "Market." },
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
        {boostSeriesSlugs.map((slug) => (
          <Link key={slug} href={`/blog/${slug}`} className="blog-series-card">
            <h3>{L[slug].title}</h3>
            <p>{L[slug].blurb}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
