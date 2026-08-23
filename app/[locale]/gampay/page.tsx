import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { GamPayArticle } from "@/components/landing/gampay-article";
import { hreflangAlternates } from "@/lib/hreflang-alternates";
import { getSiteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

/** Statik prerender — sahifa tarkibi so‘rovga bog‘liq emas, CDN keshlay oladi. */
export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing" });
  const metaTitle = t("gampay.metaTitle");
  const metaDescription = t("gampay.metaDescription");
  const siteUrl = getSiteUrl();
  const ogLocale = locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/${locale}/gampay`,
      languages: hreflangAlternates("/gampay"),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${siteUrl}/${locale}/gampay`,
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default async function GamPayLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GamPayArticle locale={locale} />;
}
