import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "@/components/v2/icons";
import {
  boostMarketDemoChannel,
  boostMarketLimits,
  estimateBoostTotalUzs,
  formatBoostUzs,
} from "@/lib/telegram-boost-market";

type Props = {
  kicker: string;
  title: string;
  subtitle: string;
  availableLabel: string;
  channelLabel: string;
  boostsLabel: string;
  durationLabel: string;
  days30: string;
  ctaBot: string;
  ctaBlog: string;
  blogHref: string;
  botUrl: string;
  newBadge: string;
  bullets: string[];
};

/** Bosh sahifa: Kanal Boost arenda (1–30 kun, avtomatik). */
export function V2BoostMarketSection({
  kicker,
  title,
  subtitle,
  availableLabel,
  channelLabel,
  boostsLabel,
  durationLabel,
  days30,
  ctaBot,
  ctaBlog,
  blogHref,
  botUrl,
  newBadge,
  bullets,
}: Props) {
  const sampleTotal = estimateBoostTotalUzs(1, 30);
  const ch = boostMarketDemoChannel;

  return (
    <section className="sec boost-market-sec" id="boost-market">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="kicker">
            {kicker}
            <span className="boost-new-pill">{newBadge}</span>
          </div>
          <h2 className="h2">{title}</h2>
          <p className="sec-sub">{subtitle}</p>
        </div>

        <div className="boost-market-layout rv">
          <div className="boost-phone" aria-hidden>
            <div className="boost-phone-in">
              <div className="boost-hero">
                <span className="boost-rocket">🚀</span>
                <div>
                  <strong>Kanal Boost arenda</strong>
                  <p>1 kundan 30 kungacha · avtomatik</p>
                </div>
              </div>
              <div className="boost-stock">
                <span className="boost-dot" />
                {availableLabel}: <b>{boostMarketLimits.availableNow}</b> ta boost
              </div>
              <label className="boost-lbl">{channelLabel}</label>
              <div className="boost-input-row">
                <span className="boost-input">{ch.link}</span>
                <span className="boost-search">🔍</span>
              </div>
              <div className="boost-card">
                <div className="boost-ch">
                  <span className="boost-ch-ic">🚀</span>
                  <div>
                    <b>{ch.title}</b>
                    <small>
                      {ch.level}-daraja · {ch.boostCount} boost
                    </small>
                  </div>
                </div>
                <div className="boost-row">
                  <span className="boost-lbl">{boostsLabel}</span>
                  <span className="boost-step">
                    <span>−</span>
                    <b>1</b>
                    <span>+</span>
                  </span>
                </div>
                <div className="boost-slider" />
                <div className="boost-row">
                  <span className="boost-lbl">
                    {durationLabel}: <b>30 kun</b>
                  </span>
                </div>
                <div className="boost-slider on" />
                <div className="boost-days">
                  <span>1 kun</span>
                  <span>16 kun</span>
                  <span className="on">{days30}</span>
                </div>
                <div className="boost-total">
                  ~{formatBoostUzs(sampleTotal)} <small>(1×30 kun, taxminiy)</small>
                </div>
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
