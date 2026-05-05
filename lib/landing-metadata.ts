import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { LandingTopic } from "@/components/landing/landing-topic-article";
import { hreflangAlternates } from "@/lib/hreflang-alternates";
import { getSiteUrl, siteConfig } from "@/lib/site";

const topicPath: Record<LandingTopic, `/${string}`> = {
  stars: "/stars",
  premium: "/premium",
  gifts: "/gifts",
  about: "/about",
};

export async function buildLandingMetadata(locale: string, topic: LandingTopic): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "landing" });
  const metaTitle = t(`${topic}.metaTitle`);
  const metaDescription = t(`${topic}.metaDescription`);
  const path = topicPath[topic];
  const siteUrl = getSiteUrl();
  const ogLocale = locale === "ru" ? "ru_RU" : locale === "en" ? "en_US" : "uz_UZ";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: hreflangAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: `${siteUrl}/${locale}${path}`,
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
