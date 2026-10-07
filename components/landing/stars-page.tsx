import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { ProductPage } from "@/components/landing/product-page";
import { STARS_PACKS, STARS_PER_UNIT_GATEWAY_UZS, STARS_PER_UNIT_UZS, formatUzs } from "@/lib/products";
import { botDeepLink } from "@/lib/telegram-deeplink";

/** «Qo'shimcha qo'llanmalar» — mavjud maqolalar, tartib muhim. */
const GUIDE_SLUGS = [
  "ozbekistonda-telegram-stars-sotib-olish",
  "telegram-stars-narxi",
  "telegram-stars-qanday-ishlaydi",
  "telegram-stars-nima-uchun-ishlatiladi-usullar",
  "click-payme-orqali-telegram-stars-sotib-olish",
  "telegram-stars-kartasiz-sotib-olish",
  "telegram-stars-kelmadi-nima-qilish",
  "telegram-stars-xavfsizmi",
];
const FEATURE_ICONS = ["🎁", "🤖", "🔓", "⭐", "✉️", "💎"];

/** Onlayn to‘lov tugmalari — Offer nomida, uchala tilda bir xil. */
const GATEWAY_METHODS = "Click, Payme, Uzum, Paynet";

/*
 * Uch ustun 320–390px telefonga gorizontal aylantirishsiz sig‘ishi uchun:
 * katak chetidagi bo‘shliq va narx shrifti ekran kengligiga qarab kichrayadi
 * (720px da 12px, kompyuterda 20px va 17px — globals.css dagi qiymatlar).
 * Katakda faqat raqam, bitta qatorda: valyuta ustun sarlavhasida turadi
 * («220 so‘m/dona»), aks holda tor ekranda bir ustunda «so‘m» pastga tushib,
 * ikkinchisida tushmay, jadval notekis ko‘rinardi.
 */
const CELL: CSSProperties = { paddingLeft: "clamp(6px, 1.7vw, 20px)", paddingRight: "clamp(6px, 1.7vw, 20px)" };
const PRICE_CELL: CSSProperties = {
  ...CELL,
  fontFamily: "var(--mono2)",
  fontWeight: 700,
  fontSize: "clamp(13px, 4vw, 17px)",
  whiteSpace: "nowrap",
};
const NOWRAP: CSSProperties = { whiteSpace: "nowrap" };
const LINK: CSSProperties = { color: "inherit", textDecoration: "none" };

function num(n: number): string {
  return n.toLocaleString("en-US").replace(/,/g, " ");
}

/** «2 200 000 so‘m» → «2 200 000»: valyuta ustun sarlavhasida, katakda faqat raqam. */
function Price({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  return <span style={NOWRAP}>{i > 0 ? text.slice(0, i) : text}</span>;
}

/**
 * /stars — umumiy `ProductPage` skeleti + Stars'ga xos narx jadvali:
 * paket / karta o‘tkazmasi / Click·Payme·Uzum·Paynet. Har bir narx usuli
 * bilan birga turadi — dona narxi usulga bog‘liq (`STARS_PER_UNIT_UZS` va
 * `STARS_PER_UNIT_GATEWAY_UZS`), miqdorga esa qat'iy proporsional.
 */
export async function StarsPage({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "starsPage" });
  const link = (amount?: number) =>
    botDeepLink({ page: "stars", placement: "price", product: amount ? { kind: "stars", amount } : undefined });
  const money = (n: number) => formatUzs(n, locale);
  const cardUnit = money(STARS_PER_UNIT_UZS);
  const gatewayUnit = money(STARS_PER_UNIT_GATEWAY_UZS);

  const priceTable = (
    <table className="pp-table">
      <thead>
        <tr>
          <th scope="col" style={CELL}>
            {t("colPack")}
          </th>
          <th scope="col" style={CELL}>
            {t("colCard", { price: cardUnit })}
          </th>
          <th scope="col" style={CELL}>
            {t("colGateway", { price: gatewayUnit })}
          </th>
        </tr>
      </thead>
      <tbody>
        {STARS_PACKS.map((p) => (
          <tr key={p.amount} className={p.popular ? "best" : undefined}>
            <td style={CELL}>
              <span style={NOWRAP}>{num(p.amount)}</span> {t("unit")}
              {p.popular ? <span className="pp-tag">{t("popular")}</span> : null}
            </td>
            <td style={PRICE_CELL}>
              <a href={link(p.amount)} target="_blank" rel="noopener noreferrer" style={LINK}>
                <Price text={money(p.priceUzs)} />
              </a>
            </td>
            <td style={PRICE_CELL}>
              <a href={link(p.amount)} target="_blank" rel="noopener noreferrer" style={LINK}>
                <Price text={money(p.gatewayPriceUzs)} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <ProductPage
      locale={locale}
      ns="starsPage"
      path="/stars"
      deepLinkPage="stars"
      productName="Telegram Stars"
      featureIcons={FEATURE_ICONS}
      guideSlugs={GUIDE_SLUGS}
      priceTable={priceTable}
      priceNoteValues={{ card: cardUnit, gateway: gatewayUnit }}
      offers={STARS_PACKS.flatMap((p) => [
        {
          name: `Telegram Stars — ${num(p.amount)} ${t("unit")} (${t("cardMethod")})`,
          price: p.priceUzs,
          url: link(p.amount),
        },
        {
          name: `Telegram Stars — ${num(p.amount)} ${t("unit")} (${GATEWAY_METHODS})`,
          price: p.gatewayPriceUzs,
          url: link(p.amount),
        },
      ])}
      primaryHref={botDeepLink({ page: "stars", placement: "hero", product: { kind: "stars", amount: 100 } })}
    />
  );
}
