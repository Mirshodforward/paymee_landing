import { Link } from "@/i18n/navigation";
import { hasTranslation } from "@/lib/blog/all";
import { nftGiftSeriesSlugs } from "@/lib/blog-aeo/nft-gift-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

const labels: Record<AeoUiLocale, Record<(typeof nftGiftSeriesSlugs)[number], { title: string; blurb: string }>> = {
  uz: {
    "telegram-nft-gift-nima": { title: "Telegram NFT Gift nima?", blurb: "Limited Edition va collectible tushunchasi." },
    "telegram-sovga-va-nft-sovga-sotib-olish": { title: "Sovg‘a va NFT sovg‘a xaridi", blurb: "Qayerdan, qanday to‘lov, Stars." },
    "kolleksion-gift-bot-orqali-olinmaydi": { title: "Limited sovg‘alar va bot: nima o‘zgardi", blurb: "NFT Market, ijara va upgrade yo‘li." },
    "telegram-gift-price": { title: "Gift narxi nima uchun oshadi", blurb: "Omillar va trendlar." },
    "telegram-nft-investitsiya": { title: "NFT investitsiya", blurb: "Risk va realistik kutish." },
    "telegram-gifts-kolleksiya-rare-sovgalar": { title: "Kolleksiya va rare sovg‘alar", blurb: "Qimmat va mashhur sovg‘alar." },
    "telegram-gift-sotish": { title: "Gift sotish", blurb: "Marketda sotuv, komissiya." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "So‘mda NFT market O‘zbekistonda." },
  },
  ru: {
    "telegram-nft-gift-nima": { title: "Что такое NFT Gift?", blurb: "Limited Edition и collectible." },
    "telegram-sovga-va-nft-sovga-sotib-olish": { title: "Покупка подарков и NFT", blurb: "Где, оплата, Stars." },
    "kolleksion-gift-bot-orqali-olinmaydi": { title: "Limited-подарки и бот: что изменилось", blurb: "NFT Market, аренда и апгрейд." },
    "telegram-gift-price": { title: "Почему растёт цена", blurb: "Факторы." },
    "telegram-nft-investitsiya": { title: "Инвестиции в NFT", blurb: "Риски." },
    "telegram-gifts-kolleksiya-rare-sovgalar": { title: "Коллекция и редкие подарки", blurb: "Дорогие подарки." },
    "telegram-gift-sotish": { title: "Продать gift", blurb: "Маркет и комиссия." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "NFT market в сумах." },
  },
  en: {
    "telegram-nft-gift-nima": { title: "What is NFT Gift?", blurb: "Limited Edition collectibles." },
    "telegram-sovga-va-nft-sovga-sotib-olish": { title: "Buying gifts and NFT gifts", blurb: "Payment and Stars." },
    "kolleksion-gift-bot-orqali-olinmaydi": { title: "Limited gifts and the bot: what changed", blurb: "NFT Market, rental and upgrades." },
    "telegram-gift-price": { title: "Why gift prices rise", blurb: "Factors." },
    "telegram-nft-investitsiya": { title: "NFT investing", blurb: "Risks." },
    "telegram-gifts-kolleksiya-rare-sovgalar": { title: "Collection and rare gifts", blurb: "Top expensive gifts." },
    "telegram-gift-sotish": { title: "Sell a gift", blurb: "Marketplace fees." },
    "starspaymee-nft-market": { title: "StarsPaymee Gift Market", blurb: "UZS NFT market." },
  },
};

export function NftGiftSeriesNav({ locale }: { locale: AeoUiLocale }) {
  const L = labels[locale] ?? labels.uz;
  const heading = locale === "ru" ? "Серия NFT Gift" : locale === "en" ? "NFT Gift series" : "NFT Gift blog seriyasi";
  return (
    <aside className="blog-series" aria-label={heading} style={{ marginTop: "2em" }}>
      <div className="kicker">NFT</div>
      <h2 className="h3" style={{ marginTop: 8 }}>
        {heading}
      </h2>
      <div className="blog-series-grid">
        {/* Shu tilda tarjimasi yo‘q maqola noindex bo‘ladi — indekslanadigan
            sahifadan unga havola qo‘yish Google uchun zid signal. */}
        {nftGiftSeriesSlugs
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
