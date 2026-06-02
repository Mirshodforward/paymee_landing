import type { Metadata } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Viewport } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import { getSiteUrl, getTelegramBotUrl, getTelegramSupportUrl, siteConfig } from "@/lib/site";

const brandLogoPath = "/starspaymeelogo.jpg";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const siteUrl = getSiteUrl();

  const titleDefault = tSeo("titleDefault");
  const description = tSeo("description");
  const ogLocale = tSeo("ogLocale");
  const kw = (tSeo.raw("keywordsList") as string[]) ?? [];

  const altLocales: Record<string, string> = {
    uz: `${siteUrl}/uz`,
    ru: `${siteUrl}/ru`,
    en: `${siteUrl}/en`,
  };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: titleDefault,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: altLocales,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => {
        if (l === "uz") return "uz_UZ";
        if (l === "ru") return "ru_RU";
        return "en_US";
      }),
      url: `${siteUrl}/${locale}`,
      siteName: siteConfig.name,
      title: titleDefault,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description,
    },
    keywords: kw,
    category: "finance",
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
  };
}

type Props = Readonly<{ children: ReactNode; params: Promise<{ locale: string }> }>;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  const siteUrl = getSiteUrl();
  const telegramUrl = getTelegramBotUrl();
  const supportUrl = getTelegramSupportUrl();

  const tSeo = await getTranslations({ locale, namespace: "seo" });

  const rootGraphLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: `${siteUrl}${brandLogoPath}`,
        description: tSeo("description"),
        sameAs: [telegramUrl, supportUrl].filter((u) => u.startsWith("http")),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: supportUrl,
          availableLanguage: ["uz", "ru", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteConfig.name,
        url: siteUrl,
        description: tSeo("description"),
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["uz", "ru", "en"],
      },
      {
        "@type": "WebApplication",
        "@id": `${siteUrl}/#miniapp`,
        name: `${siteConfig.name} — Telegram Mini App`,
        url: siteUrl,
        description: tSeo("description"),
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        browserRequirements:
          locale === "en"
            ? "Requires JavaScript. Launched inside Telegram as a Mini App."
            : locale === "ru"
              ? "Требуется JavaScript; открывается в Telegram как Mini App."
              : "JavaScript ishlaydi. Telegram ichida StarsPaymee Mini App sifatida ochiladi.",
      },
    ],
  };

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <JsonLd data={rootGraphLd} />
      {children}
    </NextIntlClientProvider>
  );
}
