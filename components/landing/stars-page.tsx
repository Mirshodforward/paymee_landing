import { getTranslations } from "next-intl/server";
import { ProductPage } from "@/components/landing/product-page";
import { STARS_PACKS, STARS_PER_UNIT_UZS } from "@/lib/products";
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

function num(n: number): string {
  return n.toLocaleString("en-US").replace(/,/g, " ");
}

/**
 * /stars — umumiy `ProductPage` skeleti + Stars'ga xos narx jadvali
 * (paket / donasi / narx; narx miqdorga qat'iy proporsional — `STARS_PER_UNIT_UZS`).
 */
export async function StarsPage({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "starsPage" });
  const link = (amount?: number) =>
    botDeepLink({ page: "stars", placement: "price", product: amount ? { kind: "stars", amount } : undefined });

  const priceTable = (
    <table className="pp-table">
      <thead>
        <tr>
          <th scope="col">{t("colPack")}</th>
          <th scope="col">{t("colPerStar")}</th>
          <th scope="col">{t("colTotal")}</th>
        </tr>
      </thead>
      <tbody>
        {STARS_PACKS.map((p) => (
          <tr key={p.amount} className={p.popular ? "best" : undefined}>
            <td>
              {num(p.amount)} {t("unit")}
              {p.popular ? <span className="pp-tag">{t("popular")}</span> : null}
            </td>
            <td className="per">{num(STARS_PER_UNIT_UZS)} so‘m</td>
            <td>
              <a href={link(p.amount)} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                {num(p.priceUzs)} so‘m
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
      priceNoteValues={{ perStar: num(STARS_PER_UNIT_UZS) }}
      offers={STARS_PACKS.map((p) => ({
        name: `Telegram Stars — ${num(p.amount)} ${t("unit")}`,
        price: p.priceUzs,
        url: link(p.amount),
      }))}
      primaryHref={botDeepLink({ page: "stars", placement: "hero", product: { kind: "stars", amount: 100 } })}
    />
  );
}
