import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BusinessArticle } from "@/components/landing/business-article";
import { hreflangAlternates } from "@/lib/hreflang-alternates";
import { getSiteUrl, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing" });
  const metaTitle = t("business.metaTitle");
  const metaDescription = t("business.metaDescription");
  const siteUrl = getSiteUrl();
  const ogLocale = locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/${locale}/business`,
      languages: hreflangAlternates("/business"),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${siteUrl}/${locale}/business`,
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

export default async function BusinessLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BusinessArticle locale={locale} />;
}
