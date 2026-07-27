import { Link } from "@/i18n/navigation";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

const labels: Record<AeoUiLocale, Record<(typeof nftGiftSeriesSlugs)[number], { title: string; blurb: string }>> = {
  uz: {
    "telegram-nft-gift-nima": { title: "Telegram NFT Gift nima?", blurb: "Limited Edition va collectible tushunchasi." },
    "telegram-nft-gift-sotib-olish": { title: "NFT Gift sotib olish", blurb: "Qayerdan, qanday to‘lov, Stars." },
    "limited-edition-telegram-gifts": { title: "Limited Edition Gifts", blurb: "Tiraj, noyoblik, narx o‘sishi." },
    "telegram-nft-market": { title: "NFT Market qanday ishlaydi", blurb: "Gift Market, savdo, auksion." },
    "telegram-gift-price": { title: "Gift narxi nima uchun oshadi", blurb: "Omillar va trendlar." },
    "telegram-nft-investitsiya": { title: "NFT investitsiya", blurb: "Risk va realistik kutish." },
    "top-telegram-rare-gifts": { title: "Rare Gifts reytingi", blurb: "Qimmat va mashhur sovg‘alar." },
    "telegram-gift-sotish": { title: "Gift sotish", blurb: "Marketda sotuv, komissiya." },
    "telegram-gift-kolleksiya": { title: "Kolleksiya qilish", blurb: "To‘plash strategiyasi." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "So‘mda NFT market O‘zbekistonda." },
  },
  ru: {
    "telegram-nft-gift-nima": { title: "Что такое NFT Gift?", blurb: "Limited Edition и collectible." },
    "telegram-nft-gift-sotib-olish": { title: "Купить NFT Gift", blurb: "Где, оплата, Stars." },
    "limited-edition-telegram-gifts": { title: "Limited Edition", blurb: "Тираж и цена." },
    "telegram-nft-market": { title: "Как работает NFT Market", blurb: "Gift Market и торговля." },
    "telegram-gift-price": { title: "Почему растёт цена", blurb: "Факторы." },
    "telegram-nft-investitsiya": { title: "Инвестиции в NFT", blurb: "Риски." },
    "top-telegram-rare-gifts": { title: "Рейтинг rare gifts", blurb: "Дорогие подарки." },
    "telegram-gift-sotish": { title: "Продать gift", blurb: "Маркет и комиссия." },
    "telegram-gift-kolleksiya": { title: "Коллекционирование", blurb: "Стратегия." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "NFT market в сумах." },
  },
  en: {
    "telegram-nft-gift-nima": { title: "What is NFT Gift?", blurb: "Limited Edition collectibles." },
    "telegram-nft-gift-sotib-olish": { title: "Buy NFT Gift", blurb: "Payment and Stars." },
    "limited-edition-telegram-gifts": { title: "Limited Edition", blurb: "Supply and price." },
    "telegram-nft-market": { title: "NFT Market how it works", blurb: "Gift Market trading." },
    "telegram-gift-price": { title: "Why gift prices rise", blurb: "Factors." },
    "telegram-nft-investitsiya": { title: "NFT investing", blurb: "Risks." },
    "top-telegram-rare-gifts": { title: "Rare gifts ranking", blurb: "Top expensive gifts." },
    "telegram-gift-sotish": { title: "Sell a gift", blurb: "Marketplace fees." },
    "telegram-gift-kolleksiya": { title: "Collecting gifts", blurb: "Strategy." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "UZS NFT market." },
  },
};

export function NftGiftSeriesNav({ locale }: { locale: AeoUiLocale }) {
  const L = labels[locale] ?? labels.uz;
  const heading = locale === "ru" ? "NFT Gift seriyasi" : "NFT Gift blog seriyasi";
  return (
    <aside className="blog-series" aria-label={heading} style={{ marginTop: "2em" }}>
      <div className="kicker">NFT</div>
      <h2 className="h3" style={{ marginTop: 8 }}>
        {heading}
      </h2>
      <div className="blog-series-grid">
        {nftGiftSeriesSlugs.map((slug) => (
          <Link key={slug} href={`/blog/${slug}`} className="blog-series-card">
            <h3>{L[slug].title}</h3>
            <p>{L[slug].blurb}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
