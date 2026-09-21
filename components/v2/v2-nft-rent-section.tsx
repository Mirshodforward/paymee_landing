import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/v2/icons";
import {
  estimateRentTotalUzs,
  formatRentUzs,
  giftRentLimits,
  rentGiftCollections,
  rentGiftSamples,
} from "@/lib/nft-gift-rent";

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  newBadge: string;
  catalogNote: string;
  durationLabel: string;
  approxNote: string;
  activeTitle: string;
  extendLabel: string;
  /** «%n kun qoldi» — ICU `{n}` emas: mockup uchun oddiy almashtirish. */
  daysLeft: string;
  ctaBot: string;
  ctaBlog: string;
  blogHref: string;
  botUrl: string;
  bullets: string[];
};

/**
 * Bosh sahifa: NFT gift ijarasi.
 *
 * Telefon — botdagi ijara oqimining namunasi: katalog → gift tanlash →
 * muddat → jami. Summalar TAXMINIY (jonli narx TON kursiga bog'liq,
 * `lib/nft-gift-rent.ts` ga qarang), shuning uchun mockup ichida ham
 * «taxminiy» deb belgilanadi.
 *
 * Boost bo'limining oynasi bilan bir xil korpus ishlatiladi, lekin
 * telefon o'ngda — ikki bo'lim ketma-ket kelganda tartib almashadi.
 */
export function V2NftRentSection({
  kicker,
  title,
  subtitle,
  newBadge,
  catalogNote,
  durationLabel,
  approxNote,
  activeTitle,
  extendLabel,
  daysLeft,
  ctaBot,
  ctaBlog,
  blogHref,
  botUrl,
  bullets,
}: Props) {
  const sampleDays = 7;
  const picked = rentGiftSamples[0];
  const total = estimateRentTotalUzs(picked.perDayUzs, sampleDays);

  return (
    <section className="sec rent-sec" id="nft-rent">
      <div className="wrap">
        <div className="rent-layout rv">
          <div className="rent-copy">
            <div className="kicker">
              {kicker}
              <span className="rent-new-pill">{newBadge}</span>
            </div>
            <h2 className="h2">{title}</h2>
            <p className="sec-sub">{subtitle}</p>
            <ul className="rent-bullets">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="rent-actions">
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

          <div className="rent-phone" aria-hidden>
            <span className="isl" />
            <div className="rent-phone-in">
              <div className="rent-hero">
                <span className="rent-gem">💎</span>
                <div>
                  <strong>Gift ijarasi</strong>
                  <p>
                    {giftRentLimits.minDays} kundan {giftRentLimits.maxDays} kungacha · avtomatik
                  </p>
                </div>
              </div>

              <div className="rent-stock">
                <span className="rent-dot" />
                {catalogNote}
              </div>

              <div className="rent-tabs">
                <span className="on">Gift</span>
                <span>Username</span>
              </div>

              <div className="rent-chips">
                {rentGiftCollections.map((c, i) => (
                  <span key={c} className={`rent-chip${i === 0 ? " on" : ""}`}>
                    {c}
                  </span>
                ))}
              </div>

              <div className="rent-card">
                <div className="rent-pick">
                  <span className="rent-pick-ic">{picked.emoji}</span>
                  <div>
                    <b>{picked.title}</b>
                    <div className="rent-tags">
                      {picked.tags?.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rent-row">
                  <span className="rent-lbl">
                    {durationLabel}: <b>{sampleDays} kun</b>
                  </span>
                </div>
                <div className="rent-slider" />
                <div className="rent-days">
                  {giftRentLimits.quickDays.map((d) => (
                    <span key={d} className={d === sampleDays ? "on" : undefined}>
                      {d} kun
                    </span>
                  ))}
                </div>

                <div className="rent-total">
                  ~{formatRentUzs(total)} <small>{approxNote}</small>
                </div>
              </div>

              <div className="rent-active">
                <div className="rent-active-head">{activeTitle}</div>
                {rentGiftSamples.slice(1).map((g, i) => (
                  <div key={g.id} className="rent-active-row">
                    <span className="rent-active-ic">{g.emoji}</span>
                    <div className="rent-active-body">
                      <b>{g.title}</b>
                      <small>{daysLeft.replace("%n", String(i === 0 ? 3 : 11))}</small>
                    </div>
                    <span className="rent-extend">{extendLabel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
