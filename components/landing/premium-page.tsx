import { getTranslations } from "next-intl/server";
import { ProductPage } from "@/components/landing/product-page";
import { PREMIUM_PLANS } from "@/lib/products";
import { botDeepLink } from "@/lib/telegram-deeplink";

/** «Qo'shimcha qo'llanmalar» — mavjud maqolalar, tartib muhim. */
const GUIDE_SLUGS = [
  "telegram-premium-eng-oson-usul",
  "telegram-premium-narxi-ozbekistonda-2026",
  "ozbekistonda-oylik-premium-uza-humo",
  "telegram-premium-sovga-username-orqali",
  "premium-bor-odamga-premium-sovga",
  "telegram-premium-tugasa-nima-boladi",
  "telegram-premium-arziydimi-foydalari",
  "telegram-premium-bepul-olish-haqiqat",
];
const FEATURE_ICONS = ["📁", "⚡", "🚫", "✨", "👤", "🌐"];

function num(n: number): string {
  return n.toLocaleString("en-US").replace(/,/g, " ");
}

/**
 * /premium — umumiy `ProductPage` skeleti + Premium'ga xos narx jadvali
 * (muddat / oyiga / jami, «eng foydali» belgisi) va Offer ro'yxati.
 */
export async function PremiumPage({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "premiumPage" });
  const link = (months?: number) =>
    botDeepLink({ page: "premium", placement: "price", product: months ? { kind: "premium", months } : undefined });

  const perMonth = (p: (typeof PREMIUM_PLANS)[number]) => Math.round(p.priceUzs / p.months);
  const best = PREMIUM_PLANS.reduce((a, b) => (perMonth(b) < perMonth(a) ? b : a));
  const monthly = PREMIUM_PLANS.find((p) => p.months === 1);
  const diff = monthly ? Math.round((perMonth(monthly) - perMonth(best)) / 100) * 100 : 0;

  const priceTable = (
    <table className="pp-table">
      <thead>
        <tr>
          <th scope="col">{t("colTerm")}</th>
          <th scope="col">{t("colPerMonth")}</th>
          <th scope="col">{t("colTotal")}</th>
        </tr>
      </thead>
      <tbody>
        {PREMIUM_PLANS.map((p) => (
          <tr key={p.months} className={p.months === best.months ? "best" : undefined}>
            <td>
              {p.months} {t("monthUnit")}
              {p.months === best.months ? <span className="pp-tag">{t("bestValue")}</span> : null}
              {p.popular && p.months !== best.months ? <span className="pp-tag">{t("popular")}</span> : null}
            </td>
            <td className="per">~{num(perMonth(p))} so‘m</td>
            <td>
              <a href={link(p.months)} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
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
      ns="premiumPage"
      path="/premium"
      deepLinkPage="premium"
      productName="Telegram Premium"
      featureIcons={FEATURE_ICONS}
      guideSlugs={GUIDE_SLUGS}
      priceTable={priceTable}
      priceNoteValues={{ diff: num(diff) }}
      offers={PREMIUM_PLANS.map((p) => ({
        name: `Telegram Premium — ${p.months} ${t("monthUnit")}`,
        price: p.priceUzs,
        url: link(p.months),
      }))}
      primaryHref={botDeepLink({ page: "premium", placement: "hero", product: { kind: "premium", months: 3 } })}
    />
  );
}
