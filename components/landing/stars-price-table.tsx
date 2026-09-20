import { getTranslations } from "next-intl/server";
import { PAYMENT_METHODS, STARS_PACKS, formatUzs } from "@/lib/products";
import { botDeepLink } from "@/lib/telegram-deeplink";

/**
 * /stars sahifasidagi paketlar va narxlar jadvali.
 *
 * NIMA UCHUN: sahifada faqat bazaviy 50 yulduz narxi ko‘rinardi va odam
 * «100, 500, 1000 qancha?» degan savoli bilan botga o‘tishga majbur edi.
 * Raqiblarda bu jadval xarid sahifasining o‘zida turadi.
 *
 * MUHIM: narxlar `lib/products.ts` dan o‘qiladi — bot hisobi bilan bitta
 * manba. Tarif o‘zgarsa, shu fayl emas, `products.ts` tahrirlanadi va jadval
 * avtomatik yangilanadi.
 *
 * Server komponenti: jadval sahifaning boshlang‘ich HTML’ida bo‘ladi, ya’ni
 * qidiruv tizimi ham, JS yuklanmagan foydalanuvchi ham narxni ko‘radi.
 */

type Props = { locale: string };

/** Yulduz sonini bo‘sh joy bilan ajratib yozadi: 10000 → «10 000». */
function formatAmount(amount: number, locale: string): string {
  return new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US")
    .format(amount)
    .replace(/,/g, " ");
}

export async function StarsPriceTable({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "landing.starsTable" });

  return (
    <section id="narxlar" className="mt-12 scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        {t("heading")}
      </h2>
      <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{t("lead")}</p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
        <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
          <thead className="bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-2 py-3 font-semibold sm:px-5">
                {t("colPack")}
              </th>
              <th scope="col" className="px-2 py-3 text-right font-semibold sm:px-5">
                {t("colPrice")}
              </th>
              <th scope="col" className="px-2 py-3 text-right font-semibold sm:px-5">
                {t("colAction")}
              </th>
            </tr>
          </thead>
          <tbody>
            {STARS_PACKS.map((pack) => {
              const amount = formatAmount(pack.amount, locale);
              return (
                <tr
                  key={pack.amount}
                  className="border-t border-slate-200 dark:border-slate-800"
                >
                  <th
                    scope="row"
                    className="px-2 py-3 font-medium whitespace-nowrap text-slate-900 sm:px-5 dark:text-white"
                  >
                    <span aria-hidden>⭐</span> {amount}{" "}
                    <span className="sr-only font-normal text-slate-500 sm:not-sr-only dark:text-slate-400">
                      {t("unit")}
                    </span>
                    {pack.popular ? (
                      <span className="ml-2 hidden rounded-full bg-[#229ED9]/10 px-2 py-0.5 text-[11px] font-semibold text-[#1b7fae] sm:inline dark:bg-[#229ED9]/15 dark:text-[#6fc4e8]">
                        {t("popular")}
                      </span>
                    ) : null}
                  </th>
                  <td className="px-2 py-3 text-right font-semibold whitespace-nowrap tabular-nums text-slate-900 sm:px-5 dark:text-white">
                    {formatUzs(pack.priceUzs, locale)}
                  </td>
                  <td className="px-2 py-3 text-right sm:px-5">
                    <a
                      data-cta="stars-price-table"
                      href={botDeepLink({
                        page: "stars",
                        placement: "price",
                        product: { kind: "stars", amount: pack.amount },
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("buyAria", { amount })}
                      className="inline-flex items-center justify-center rounded-full bg-[#229ED9] px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white transition hover:bg-[#1e8dc4] sm:px-4 sm:text-sm"
                    >
                      {t("buy")}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {t("noteFee")} {t("notePay", { methods: PAYMENT_METHODS.join(", ") })} {t("noteConfirm")}
      </p>
    </section>
  );
}
