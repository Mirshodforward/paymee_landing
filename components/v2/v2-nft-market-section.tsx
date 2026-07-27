import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/v2/icons";
import {
  formatGiftPriceUzs,
  nftGiftCollections,
  nftGiftListings,
  nftGiftMarketSampleBalanceUzs,
} from "@/lib/nft-gift-market";

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  balanceLabel: string;
  myGifts: string;
  ctaBot: string;
  ctaBlog: string;
  blogHref: string;
  botUrl: string;
  newBadge: string;
  bullets: string[];
};

/** Bosh sahifada Gift Market (NFT kolleksion sovg‘alar, so‘mda) tanituvi. */
export function V2NftMarketSection({
  kicker,
  title,
  subtitle,
  balanceLabel,
  myGifts,
  ctaBot,
  ctaBlog,
  blogHref,
  botUrl,
  newBadge,
  bullets,
}: Props) {
  const featured = nftGiftListings.find((g) => g.featured) ?? nftGiftListings[0];
  const grid = nftGiftListings.filter((g) => !g.featured).slice(0, 2);

  return (
    <section className="sec nft-market-sec" id="nft-market">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="kicker">
            {kicker}
            <span className="nft-new-pill">{newBadge}</span>
          </div>
          <h2 className="h2">{title}</h2>
          <p className="sec-sub">{subtitle}</p>
        </div>

        <div className="nft-market-layout rv">
          <div className="nft-phone" aria-hidden>
            <div className="nft-phone-in">
              <div className="nft-top">
                <span className="nft-shop-ic">🏪</span>
                <div>
                  <div className="nft-title-row">
                    <strong>Gift Market</strong>
                    <span className="nft-my">{myGifts}</span>
                  </div>
                  <p className="nft-sub">{subtitle}</p>
                </div>
              </div>
              <div className="nft-balance">
                {balanceLabel}:{" "}
                <span>{formatGiftPriceUzs(nftGiftMarketSampleBalanceUzs)}</span>
              </div>
              <div className="nft-chips">
                {nftGiftCollections.map((c, i) => (
                  <span key={c.id} className={`nft-chip${i === 0 ? " on" : ""}`}>
                    {c.name} {c.id !== "all" ? c.count : nftGiftCollections[0].count}
                  </span>
                ))}
              </div>
              <div className="nft-sort">
                <span className="on">Yangi</span>
                <span>Arzon</span>
                <span>Qimmat</span>
                <span>Sotuvda</span>
              </div>
              {featured ? (
                <div className="nft-card feat">
                  {featured.featuredLabelUz ? (
                    <span className="nft-ribbon">{featured.featuredLabelUz}</span>
                  ) : null}
                  <div className="nft-art">{featured.emoji}</div>
                  <div className="nft-card-body">
                    <b>{featured.title}</b>
                    {featured.tags ? (
                      <div className="nft-tags">
                        {featured.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    ) : null}
                    <div className="nft-price">{formatGiftPriceUzs(featured.priceUzs)}</div>
                  </div>
                </div>
              ) : null}
              <div className="nft-grid2">
                {grid.map((g) => (
                  <div key={g.id} className="nft-card sm">
                    <div className="nft-art sm">{g.emoji}</div>
                    <b>{g.title}</b>
                    <div className="nft-price sm">{formatGiftPriceUzs(g.priceUzs)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nft-copy">
            <ul className="nft-bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="nft-actions">
              <a className="btn btn-grad mag" href={botUrl} target="_blank" rel="noopener noreferrer">
                {ctaBot}
                <ArrowIcon style={{ stroke: "#fff" }} />
              </a>
              <Link className="btn btn-ghost mag" href={blogHref}>
                {ctaBlog}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
