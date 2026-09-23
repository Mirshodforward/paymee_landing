import { getTranslations } from "next-intl/server";
import { getReviews, type ReviewsData } from "@/lib/reviews";
import type { ReviewFormLabels } from "@/components/v2/review-form";
import type { ReviewsListLabels } from "@/components/v2/reviews-list";
import type { ReviewStatsLabels } from "@/components/v2/review-stats";

export type ReviewSectionProps = {
  kicker: string;
  title: string;
  subtitle: string;
  data: ReviewsData;
  locale: string;
  labels: { ratingLine: string; verified: string; empty: string; list: ReviewsListLabels; stats: ReviewStatsLabels };
  form: ReviewFormLabels;
};

/**
 * Sharhlar bo'limi uchun tarjima + jonli ma'lumot — bosh sahifa va Premium
 * sahifasi bir xil ishlatadi. Bo'lim ostidagi «Botga o'tish» CTA olib
 * tashlangani uchun bu yerda bot havolasi ham kerak emas. `ratingLine` shu yerda formatlanadi: kasr
 * ajratgich tilga qarab («4,8» / «4.8»).
 *
 * Sharhlar sahifa tiliga qarab filtrlanadi: `/uz` da o'zbekcha, `/ru` da
 * ruscha. Reyting (o'rtacha va baholar soni) filtrlanmaydi — u barcha
 * xaridorlarning bahosi, tilga bog'liq emas.
 */
export async function reviewSectionProps(locale: string): Promise<ReviewSectionProps> {
  const [t, data] = await Promise.all([
    getTranslations({ locale, namespace: "v2" }),
    getReviews(locale),
  ]);
  const value = data.rating.value.toFixed(1);
  return {
    kicker: t("reviewsKicker"),
    title: t("reviewsTitle"),
    subtitle: t("reviewsSub"),
    data,
    locale,
    labels: {
      ratingLine: t("reviewsRatingLine", {
        value: locale === "en" ? value : value.replace(".", ","),
        count: data.rating.count,
      }),
      verified: t("reviewsVerified"),
      empty: t("reviewsEmpty"),
      list: { all: t("reviewsAll"), hide: t("reviewsHide"), more: t("reviewsMore") },
      stats: {
        count: t("reviewsStatsCount", { count: data.rating.count }),
        verified: t("reviewsVerified"),
        source: t("reviewsStatsSource"),
      },
    },
    form: {
      title: t("reviewFormTitle"),
      hint: t("reviewFormHint"),
      name: t("reviewFormName"),
      namePh: t("reviewFormNamePh"),
      rating: t("reviewFormRating"),
      text: t("reviewFormText"),
      textPh: t("reviewFormTextPh"),
      submit: t("reviewFormSubmit"),
      sending: t("reviewFormSending"),
      ok: t("reviewFormOk"),
      errGeneric: t("reviewFormErrGeneric"),
      errRate: t("reviewFormErrRate"),
      errShort: t("reviewFormErrShort"),
      errLong: t("reviewFormErrLong"),
      errName: t("reviewFormErrName"),
      note: t("reviewFormNote"),
    },
  };
}
