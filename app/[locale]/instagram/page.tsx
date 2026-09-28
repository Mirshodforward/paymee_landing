import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, CircleCheck, CreditCard, Headset, LayoutGrid, Play } from "lucide-react";
import { TelegramIcon } from "@/components/v2/icons";
import { InstagramIcon, YoutubeIcon } from "@/components/insta/insta-icons";
import { LiveStats, type LiveStatTile } from "@/components/insta/live-stats";
import { ReviewCard } from "@/components/v2/review-card";
import { getLandingStats } from "@/lib/live-stats";
import { STATS } from "@/lib/products";
import { getReviews, hasRating, ratingRows } from "@/lib/reviews";
import { PUBLIC_API_BASE, SOCIAL_LINKS, getSiteUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";
import { botDeepLink, type DeepLinkPlacement } from "@/lib/telegram-deeplink";

/**
 * `/instagram` — Instagram reklamasi uchun bitta sahifali landing.
 *
 * ATAYLAB IXCHAM. Reklamadan kelgan odam telefonda, Instagram ichidagi
 * brauzerda bir necha soniyada qaror qiladi. Sahifada faqat taklif, ishonch
 * (reyting, raqamlar, to'lov usullari), mahsulotlar va tugma qoladi — uzun
 * tushuntirishlar yo'q (egasining so'rovi, 2026-09-26).
 *
 * NEGA BUNDAY YENGIL:
 *   - `V2Shell` ishlatilmagan: undagi foizli preloader kontentni kechiktiradi,
 *     `V2Effects` esa ortiqcha JS. Mijoz JS'i faqat jonli raqamlarda
 *     (`LiveStats`), qolgan animatsiya — CSS.
 *   - Navigatsiya yo'q, yagona maqsad — botni ochish.
 *   - `noindex` va sitemap'da yo'q: bosh sahifa bilan qidiruvda raqobatlashmasin.
 *   - Ikonkalar oldindan WebP'ga o'girilgan va optimizatorsiz beriladi
 *     (`unoptimized`): dev optimizatori 96px o'lchamda osilib qolardi, jami
 *     9 ta ikonka 23 KB.
 *
 * RAQAMLAR ANIQ VA JONLI (2026-09-27 dan). Stars, buyurtma va foydalanuvchi soni
 * bot backend'idan, yaxlitlanmaydi; brauzer har 30 soniyada yangilaydi
 * (`components/insta/live-stats.tsx`). Javob bo'lmasa plitka chiqmaydi
 * (`STATS.orders = 100 000` zaxirasi bu yerda ATAYLAB ishlatilmaydi).
 *
 * KUZATUV: tugmalarda `data-cta` bor, `TelegramClickTracker` uni «bot_open»
 * hodisasiga yozadi. Deep-link manbasi — `w_instagram_<joy>`.
 */

type Props = { params: Promise<{ locale: string }> };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insta" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const url = `${getSiteUrl()}/${locale}/instagram`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/${locale}/instagram` },
    robots: { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ",
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/**
 * Botdagi BARCHA mahsulotlar — bosh ekran tartibida, keyin «O'yinlar» (GamPay) bo'limi.
 * Rasmlar bot Mini App'ining o'zidan (frontend/src/assets): bosh ekran
 * plitkalaridan faqat illyustratsiya kesib olingan (plitkadagi o'zbekcha matnsiz —
 * nom kartada o'z tilida yoziladi), o'yinlar — ilovadagi ikonkalar. 2026-09-27.
 * `emoji` — shaffof ikonka (o'z rangidagi fon beriladi), `cover` — kvadrat rasm, butun katakni
 * to'ldiradi. Rasmlar 2× (208px) va zich kesilgan: asl ikonkalarning oq yumaloq burchaklari
 * olib tashlangan, Steam doirasi atrofi o'z gradienti bilan to'ldirilgan.
 */
const PRODUCTS: { key?: string; name?: string; img: string; kind: "emoji" | "cover" }[] = [
  // Stars va Premium — botdagi o'z ikonkasi (stars.gif / premium_gif.gif ning 1-kadri), sovg'a — botdagi ayiq
  { key: "pStars", img: "p-stars", kind: "emoji" },
  { key: "pPremium", img: "p-premium", kind: "emoji" },
  { key: "pGift", img: "p-gift", kind: "emoji" },
  { key: "pNumber", img: "number", kind: "cover" },
  { key: "pScheduled", img: "scheduled", kind: "cover" },
  { key: "pRent", img: "rent", kind: "cover" },
  { key: "pUsername", img: "username", kind: "cover" },
  { key: "pBoost", img: "boost", kind: "cover" },
  { key: "pNft", img: "nft", kind: "cover" },
  // O'yinlar va Steam — botning «O'yinlar» bo'limi; nomlar lib/games.ts dagidek
  { name: "PUBG Mobile", img: "g-pubg", kind: "cover" },
  { name: "Mobile Legends", img: "g-mlbb", kind: "cover" },
  { name: "Free Fire", img: "g-ff", kind: "cover" },
  { name: "Call of Duty Mobile", img: "g-codm", kind: "cover" },
  { name: "Honor of Kings", img: "g-hok", kind: "cover" },
  { name: "Magic Chess: Go Go", img: "g-mcgg", kind: "cover" },
  { name: "Delta Force", img: "g-delta", kind: "cover" },
  { name: "Asphalt 9", img: "g-asphalt", kind: "cover" },
  { name: "Bigo Live", img: "g-bigo", kind: "cover" },
  { name: "Steam", img: "g-steam", kind: "cover" },
];

/** Botda xarid yo'li — to'rt qadam. */
const STEPS = [
  { key: "step1", Icon: Play },
  { key: "step2", Icon: LayoutGrid },
  { key: "step3", Icon: CreditCard },
  { key: "step4", Icon: CircleCheck },
] as const;

/** Gradient tugma — hero, oxiri va pastki doimiy qatorda bir xil. */
function BotButton({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a className={`ig-cta ${className}`.trim()} href={href} target="_blank" rel="noopener noreferrer">
      <TelegramIcon className="ig-cta-tg" />
      <span>{label}</span>
      <ArrowRight className="ig-cta-arrow" strokeWidth={2.4} />
    </a>
  );
}

export default async function InstagramPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, tv2, stats, reviews] = await Promise.all([
    getTranslations({ locale, namespace: "insta" }),
    getTranslations({ locale, namespace: "v2" }),
    getLandingStats(),
    getReviews(locale),
  ]);

  const link = (placement: DeepLinkPlacement) => botDeepLink({ page: "instagram", placement });

  // Reyting aniq — ikki xona (4,82), yulduzlar ham shu ulushda to'ladi
  const showRating = hasRating(reviews.rating);
  const ratingNum = reviews.rating.value.toFixed(2);
  const ratingValue = locale === "en" ? ratingNum : ratingNum.replace(".", ",");
  const ratingFill = `${Math.min(100, (reviews.rating.value / 5) * 100).toFixed(1)}%`;
  const starRows = ratingRows(reviews);
  const starMax = Math.max(1, ...starRows.map((r) => r.count));

  // Sharhlar lentasi: sahifa tilidagi (getReviews shuni filtrlaydi) eng yangi 12 ta
  // TASDIQLANGAN XARIDLI matnli sharh — reklama sahifasida faqat haqiqiy xaridorlar
  // (botdagi yetkazilgan buyurtmaga bog'langan). Hech narsa to'qilmaydi yoki
  // tahrirlanmaydi. Kam bo'lsa takrorlanadi — aks holda lenta ekranni to'ldirmasdi.
  // «50 Stars olgan mijoz» — botdagi haqiqiy buyurtmadan; «Premium · 6 oy» → «Premium 6 oy»
  const buyerLabel = (bought: string | null) =>
    bought ? t("revBought", { product: bought.replace(" · ", " ") }) : t("revBuyer");
  const revPool = reviews.reviews.filter((r) => r.verified && r.text.trim().length >= 10).slice(0, 12);
  const revSet =
    revPool.length && revPool.length < 6
      ? Array.from({ length: Math.ceil(6 / revPool.length) }, () => revPool).flat()
      : revPool;

  // Faqat backend'dan kelgan raqamlar, aniq — zaxira son hech qachon ko'rinmaydi.
  const tiles: LiveStatTile[] = [];
  if (stats.starsDelivered) tiles.push({ id: "stars", value: stats.starsDelivered, label: t("statStars") });
  if (stats.live.orders) tiles.push({ id: "orders", value: stats.orders, label: t("statOrders") });
  if (stats.live.activeUsers) tiles.push({ id: "users", value: stats.activeUsers, label: t("statUsers") });
  tiles.push({ id: "years", value: STATS.yearsInService, label: t("statYears") });

  // Bo'sh havolali tarmoq ko'rsatilmaydi (lib/site.ts dagi izohga qarang).
  const social = [
    { href: SOCIAL_LINKS.telegram, label: t("socialTelegram"), Icon: TelegramIcon, cls: "tg" },
    { href: SOCIAL_LINKS.instagram, label: t("socialInstagram"), Icon: InstagramIcon, cls: "ig" },
    { href: SOCIAL_LINKS.youtube, label: t("socialYoutube"), Icon: YoutubeIcon, cls: "yt" },
    { href: getTelegramSupportUrl(), label: t("socialSupport"), Icon: Headset, cls: "sp" },
  ].filter((s) => s.href);

  return (
    <div className="v2 ig">
      <div className="ig-wrap">
        <header className="ig-top">
          <span className="ig-brand">
            <Image
              src="/logo-mark-clear.png"
              alt=""
              width={120}
              height={120}
              sizes="40px"
              loading="eager"
              className="ig-brand-mark"
            />
            <span className="ig-brand-name">
              <span className="gt">Stars</span>Paymee
            </span>
          </span>
          <span className="ig-live">
            <span className="ig-live-dot" aria-hidden />
            {t("live")}
          </span>
        </header>

        <main>
          {/* ── Taklif: Stars va Premium plitkalari, «5 soniyada», reyting ── */}
          <section className="ig-hero">
            <h1 className="ig-h1">
              {/* Matn o'rniga ikki ilova-plitka; alt — sarlavhaning o'qiladigan qismi */}
              <span className="ig-h1-icons ig-in" style={{ "--d": "0s" } as React.CSSProperties}>
                <span className="ig-tile is-stars">
                  <Image src="/insta/p-stars.webp" alt={t("iconStars")} width={132} height={132} unoptimized priority />
                </span>
                <span className="ig-tile is-premium">
                  <Image src="/insta/p-premium.webp" alt={t("iconPremium")} width={132} height={132} unoptimized priority />
                </span>
              </span>
              <span className="ig-in gt" style={{ "--d": ".08s" } as React.CSSProperties}>
                {t("h1c")}
              </span>
            </h1>
          </section>

          {/* ── Mahsulotlar: bitta qator, o'ngdan chapga uzluksiz suriladi.
                 Ikkinchi to'plam — birinchisining nusxasi (halqa choksiz bo'lishi
                 uchun); ekran o'quvchi va Tab uni o'tkazib yuboradi. ── */}
          <section className="ig-sec" data-cta="ig-card">
            <h2 className="ig-h2">{t("productsTitle")}</h2>
            <div className="ig-marquee">
              <div className="ig-track" style={{ "--n": PRODUCTS.length } as React.CSSProperties}>
                {[false, true].map((dup) => (
                  <div key={String(dup)} className="ig-set" aria-hidden={dup || undefined}>
                    {PRODUCTS.map((p, i) => (
                      // Matnsiz: kartaning o'zi — ikonka. Nom faqat ekran o'quvchi va qidiruv uchun.
                      <a
                        key={p.img}
                        className={`ig-card is-${p.kind} t-${p.img}`}
                        href={link("card")}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={dup ? -1 : undefined}
                        aria-label={p.key ? t(p.key) : p.name}
                        style={{ "--i": i } as React.CSSProperties}
                      >
                        <Image src={`/insta/${p.img}.webp`} alt="" width={132} height={132} unoptimized />
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Xarid yo'li: sarlavha + to'rt qadam. 1-qadam botni ochadi,
                 faol belgi 1 → 4 bo'ylab yuradi. ── */}
          <section className="ig-block ig-in" style={{ "--d": ".2s" } as React.CSSProperties} aria-labelledby="ig-t-how">
            <h2 className="ig-h2" id="ig-t-how">{t("stepsTitle")}</h2>
            <div className="ig-panel ig-how">
              <ol className="ig-steps">
                {STEPS.map(({ key, Icon }, i) => {
                  const body = (
                    <>
                      <span className="ig-step-ic" aria-hidden>
                        <Icon strokeWidth={2.2} />
                        <em>{i + 1}</em>
                      </span>
                      <b>{t(key)}</b>
                    </>
                  );
                  return (
                    <li key={key} className="ig-step" style={{ "--i": i } as React.CSSProperties}>
                      {i === 0 ? (
                        <a
                          className="ig-step-go"
                          href={link("hero")}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cta="ig-step"
                        >
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>

          {/* ── To'lov usullari — alohida blok ── */}
          <section className="ig-block ig-in" style={{ "--d": ".24s" } as React.CSSProperties} aria-labelledby="ig-t-pay">
            <h2 className="ig-h2" id="ig-t-pay">{t("payTitle")}</h2>
            <div className="ig-panel ig-paybox">
              <div className="ig-pay">
                <span className="ig-pay-logo is-click">
                  <Image src="/pay/click.png" alt="Click" width={230} height={72} sizes="72px" />
                </span>
                <span className="ig-pay-logo is-payme">
                  <Image src="/pay/payme.png" alt="Payme" width={78} height={72} sizes="26px" />
                </span>
                <span className="ig-pay-logo is-paynet">
                  <Image src="/pay/paynet.png" alt="Paynet" width={248} height={72} sizes="64px" />
                </span>
                <span className="ig-pay-chip is-uzum">
                  <Image src="/pay/uzum.webp" alt="" width={96} height={96} unoptimized />
                  Uzum
                </span>
                <span className="ig-pay-chip">Uzcard</span>
                <span className="ig-pay-chip">HUMO</span>
              </div>
            </div>
          </section>

          {/* ── Jonli raqamlar — aniq son, brauzer 30 soniyada yangilaydi ── */}
          <section className="ig-block ig-in" style={{ "--d": ".28s" } as React.CSSProperties} aria-labelledby="ig-t-stats">
            <h2 className="ig-h2" id="ig-t-stats">
              <span className="ig-live-dot" aria-hidden />
              {t("statsTitle")}
            </h2>
            <LiveStats
              tiles={tiles}
              locale={locale}
              apiBase={PUBLIC_API_BASE}
              ariaLabel={t("statsLabel")}
              className="ig-panel ig-stats"
            />
          </section>

          {/* ── Reyting: aniq ball, ulushda to'lgan yulduzlar va har yulduz bo'yicha soni ── */}
          {showRating ? (
            <section className="ig-block" aria-labelledby="ig-t-rate">
              <h2 className="ig-h2" id="ig-t-rate">{t("ratingTitle")}</h2>
              <div className="ig-panel ig-rate">
                <div className="ig-rate-score">
                  <b>{ratingValue}</b>
                  <span
                    className="ig-rate-stars"
                    role="img"
                    aria-label={t("ratingOf", { value: ratingValue })}
                    style={{ "--fill": ratingFill } as React.CSSProperties}
                  >
                    <span aria-hidden>★★★★★</span>
                    <i aria-hidden>★★★★★</i>
                  </span>
                  <small>{t("ratingCount", { count: reviews.rating.count })}</small>
                </div>
                <ul className="ig-rate-rows">
                  {starRows.map((r, i) => (
                    <li key={r.star} className="ig-rate-row">
                      <span className="ig-rate-star">{r.star}★</span>
                      <span className="ig-bar" aria-hidden>
                        <i
                          style={
                            { "--w": `${((r.count / starMax) * 100).toFixed(1)}%`, "--r": i } as React.CSSProperties
                          }
                        />
                      </span>
                      <b>{r.count}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {/* ── Sharhlar: reytingdan keyin, chapdan o'ngga uzluksiz suriladi (mahsulotlarga
                 teskari yo'nalish). Ikkinchi to'plam — nusxa, ekran o'quvchidan yashirin. ── */}
          {revSet.length ? (
            <section className="ig-block" aria-labelledby="ig-t-revs">
              <h2 className="ig-h2" id="ig-t-revs">{t("reviewsTitle")}</h2>
              <div className="ig-revs">
                <div className="ig-rev-track" style={{ "--n": revSet.length } as React.CSSProperties}>
                  {[false, true].map((dup) => (
                    <div key={String(dup)} className="ig-rev-set" aria-hidden={dup || undefined}>
                      {revSet.map((r, i) => (
                        <ReviewCard
                          key={`${r.id}-${i}`}
                          r={r}
                          verified={tv2("reviewsVerified")}
                          locale={locale}
                          dup={dup}
                          buyerLabel={buyerLabel}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Desktop uchun oxirgi tugma — telefonda pastki doimiy tugma bor */}
          <div className="ig-final" data-cta="ig-final">
            <BotButton href={link("cta")} label={t("cta")} className="ig-cta-lg" />
          </div>
        </main>

        <footer className="ig-foot" data-cta="ig-social">
          <nav className="ig-social" aria-label={t("socialTitle")}>
            {social.map(({ href, label, Icon, cls }) => (
              <a key={cls} className={`ig-soc ig-soc-${cls}`} href={href} target="_blank" rel="noopener noreferrer">
                <span className="ig-soc-ic">
                  <Icon />
                </span>
                <span className="ig-soc-l">{label}</span>
              </a>
            ))}
          </nav>
        </footer>
      </div>

      {/* Telefonda doimiy pastki tugma — yuqorida tugma yo'q, shuning uchun darhol chiqadi */}
      <div className="ig-sticky" data-cta="ig-sticky">
        <BotButton href={link("sticky")} label={t("sticky")} className="ig-cta-sticky" />
      </div>
    </div>
  );
}
