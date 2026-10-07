import { nftGiftListings, formatGiftPriceUzs } from "@/lib/nft-gift-market";

/** Blogda Gift Market namuna kartochkalari (so‘mda). */
export function NftGiftMarketBoard({ locale = "uz" }: { locale?: "uz" | "ru" | "en" }) {
  const note =
    locale === "ru"
      ? "Образец (иллюстрация). Актуальные объявления и цены — в @StarsPaymee_bot → NFT Market: цена зависит от курса TON, купить можно NFT стоимостью до 300 000 сумов."
      : locale === "en"
        ? "Sample (illustration). Live listings and prices are in @StarsPaymee_bot → NFT Market: the price follows the TON rate, and NFTs priced up to 300,000 so‘m can be bought."
        : "Namuna (illustratsiya). Jonli e’lonlar va narxlar — @StarsPaymee_bot → NFT Market bo‘limida: narx TON kursiga bog‘liq, 300 000 so‘mgacha bo‘lgan NFT sotib olinadi.";

  return (
    <div className="nft-blog-board" role="region" aria-label="Gift Market">
      {nftGiftListings.map((g) => (
        <div key={g.id} className={`nft-blog-row${g.featured ? " feat" : ""}`}>
          <span className="nft-blog-emoji" aria-hidden>
            {g.emoji}
          </span>
          <div>
            <strong>{g.title}</strong>
            {g.tags ? (
              <div className="nft-blog-tags">
                {g.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ) : null}
          </div>
          <span className="nft-blog-price">{formatGiftPriceUzs(g.priceUzs)}</span>
        </div>
      ))}
      <p className="tn-note">{note}</p>
    </div>
  );
}
