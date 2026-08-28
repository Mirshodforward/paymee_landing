import { nftGiftListings, formatGiftPriceUzs } from "@/lib/nft-gift-market";

/** Blogda Gift Market namuna kartochkalari (so‘mda). */
export function NftGiftMarketBoard({ locale = "uz" }: { locale?: "uz" | "ru" | "en" }) {
  const note =
    locale === "ru"
      ? "Цены и список обновляются в @StarsPaymee_bot → Gift Market."
      : locale === "en"
        ? "Prices and the listing are refreshed in @StarsPaymee_bot → Gift Market."
        : "Narx va ro‘yxat @StarsPaymee_bot → Gift Market bo‘limida yangilanadi.";

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
