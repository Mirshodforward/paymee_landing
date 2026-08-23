import { Link } from "@/i18n/navigation";
import { gampaySeriesSlugs } from "@/lib/blog-aeo/gampay-series";
import type { AeoUiLocale } from "@/lib/blog-aeo/types";

type Entry = { title: string; blurb: string };

const labels: Record<AeoUiLocale, Record<(typeof gampaySeriesSlugs)[number], Entry>> = {
  uz: {
    "oyin-hisobini-toldirish": { title: "O‘yin hisobini to‘ldirish", blurb: "Umumiy qo‘llanma, 9 o‘yin." },
    "pubg-mobile-uc-sotib-olish": { title: "PUBG Mobile UC", blurb: "Player ID bilan, so‘mda." },
    "mobile-legends-olmos-sotib-olish": { title: "Mobile Legends olmos", blurb: "User ID + Server ID." },
    "free-fire-olmos-sotib-olish": { title: "Free Fire olmos", blurb: "Player ID bilan." },
    "call-of-duty-mobile-cp-sotib-olish": { title: "CODM CP", blurb: "Garena SG/MY hisobi." },
    "honor-of-kings-token-sotib-olish": { title: "Honor of Kings token", blurb: "Player ID bilan." },
    "magic-chess-gogo-olmos-sotib-olish": { title: "Magic Chess olmos", blurb: "MCGG uchun." },
    "delta-force-coins-sotib-olish": { title: "Delta Force coins", blurb: "Delta Coins." },
    "asphalt-9-token-sotib-olish": { title: "Asphalt 9 token", blurb: "Platforma tanlanadi." },
    "bigo-live-olmos-sotib-olish": { title: "Bigo Live olmos", blurb: "Bigo ID bilan." },
  },
  ru: {
    "oyin-hisobini-toldirish": { title: "Пополнение игр", blurb: "Общий гайд, 9 игр." },
    "pubg-mobile-uc-sotib-olish": { title: "PUBG Mobile UC", blurb: "По Player ID, в сумах." },
    "mobile-legends-olmos-sotib-olish": { title: "Алмазы Mobile Legends", blurb: "User ID + Server ID." },
    "free-fire-olmos-sotib-olish": { title: "Алмазы Free Fire", blurb: "По Player ID." },
    "call-of-duty-mobile-cp-sotib-olish": { title: "CP для CODM", blurb: "Аккаунт Garena SG/MY." },
    "honor-of-kings-token-sotib-olish": { title: "Токены Honor of Kings", blurb: "По Player ID." },
    "magic-chess-gogo-olmos-sotib-olish": { title: "Алмазы Magic Chess", blurb: "Для MCGG." },
    "delta-force-coins-sotib-olish": { title: "Delta Force coins", blurb: "Delta Coins." },
    "asphalt-9-token-sotib-olish": { title: "Токены Asphalt 9", blurb: "С выбором платформы." },
    "bigo-live-olmos-sotib-olish": { title: "Алмазы Bigo Live", blurb: "По Bigo ID." },
  },
  en: {
    "oyin-hisobini-toldirish": { title: "Game top-up", blurb: "General guide, 9 games." },
    "pubg-mobile-uc-sotib-olish": { title: "PUBG Mobile UC", blurb: "By Player ID, in so‘m." },
    "mobile-legends-olmos-sotib-olish": { title: "Mobile Legends diamonds", blurb: "User ID + Server ID." },
    "free-fire-olmos-sotib-olish": { title: "Free Fire diamonds", blurb: "By Player ID." },
    "call-of-duty-mobile-cp-sotib-olish": { title: "CODM CP", blurb: "Garena SG/MY account." },
    "honor-of-kings-token-sotib-olish": { title: "Honor of Kings tokens", blurb: "By Player ID." },
    "magic-chess-gogo-olmos-sotib-olish": { title: "Magic Chess diamonds", blurb: "For MCGG." },
    "delta-force-coins-sotib-olish": { title: "Delta Force coins", blurb: "Delta Coins." },
    "asphalt-9-token-sotib-olish": { title: "Asphalt 9 tokens", blurb: "Platform is selected." },
    "bigo-live-olmos-sotib-olish": { title: "Bigo Live diamonds", blurb: "By Bigo ID." },
  },
};

const heading: Record<AeoUiLocale, string> = {
  uz: "GamPay — o‘yin to‘ldirish seriyasi",
  ru: "GamPay — серия про пополнение игр",
  en: "GamPay — game top-up series",
};

export function GamPaySeriesNav({ locale }: { locale: AeoUiLocale }) {
  const L = labels[locale] ?? labels.uz;
  return (
    <aside className="blog-series" aria-label="GamPay seriyasi" style={{ marginTop: "2em" }}>
      <div className="kicker">GamPay</div>
      <h2 className="h3" style={{ marginTop: 8 }}>
        {heading[locale] ?? heading.uz}
      </h2>
      <div className="blog-series-grid">
        {gampaySeriesSlugs.map((slug) => (
          <Link key={slug} href={`/blog/${slug}`} className="blog-series-card">
            <h3>{L[slug].title}</h3>
            <p>{L[slug].blurb}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
