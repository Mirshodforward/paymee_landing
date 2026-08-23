import type { Metadata } from "next";
import type { ReactNode } from "react";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Viewport } from "next";
import { Geist, Syne, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TelegramClickTracker } from "@/components/analytics/telegram-click-tracker";
import { JsonLd } from "@/components/seo/json-ld";
import { routing } from "@/i18n/routing";
import {
  getSiteUrl,
  getTelegramBotUrl,
  getTelegramSupportUrl,
  siteConfig,
  SITE_VERIFICATION,
} from "@/lib/site";
import "../globals.css";

const brandLogoPath = "/logo-512.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// V2 «Aurora» dizayni uchun display va mono fontlar.
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/** HTML `lang` atributi uchun til kodi. */
function htmlLangFor(locale: string): string {
  return locale === "ru" ? "ru" : locale === "en" ? "en" : "uz";
}

/** Faqat to‘ldirilgan kodlar uchun verification meta-teglarini chiqaradi. */
function buildVerification(): Metadata["verification"] {
  const v: NonNullable<Metadata["verification"]> = {};
  if (SITE_VERIFICATION.google) v.google = SITE_VERIFICATION.google;
  if (SITE_VERIFICATION.yandex) v.yandex = SITE_VERIFICATION.yandex;
  if (SITE_VERIFICATION.bing) v.other = { "msvalidate.01": SITE_VERIFICATION.bing };
  return v;
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      // Umumiy `robots` direktivasi — Yandex, Bing va AI kraulerlari (GPTBot,
      // ClaudeBot, PerplexityBot) aynan shuni o‘qiydi. Cheklovsiz snippet va
      // katta rasm — to‘liq iqtibos va rich natijalar uchun.
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    verification: buildVerification(),
    icons: {
      icon: [
        { url: "/logo-32.png", type: "image/png", sizes: "32x32" },
        { url: "/logo-48.png", type: "image/png", sizes: "48x48" },
        { url: "/logo-128.png", type: "image/png", sizes: "128x128" },
        { url: "/logo-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [{ url: "/apple-icon-180.png", type: "image/png", sizes: "180x180" }],
      shortcut: "/logo-128.png",
    },
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
    <html
      lang={htmlLangFor(locale)}
      className={`${geistSans.variable} ${syne.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      {/* RSS discovery — React 19 buni <head> ga ko‘taradi (barcha sahifalarda). */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="StarsPaymee — Blog"
        href="/rss.xml"
      />
      <link rel="author" type="text/plain" title="LLMs.txt" href="/llms.txt" />
      <body className="min-h-screen bg-background font-sans text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <JsonLd data={rootGraphLd} />
          {children}
        </NextIntlClientProvider>
        {/* Vercel Web Analytics — tashriflar va sahifa ko‘rishlarini sanaydi. */}
        <Analytics />
        {/* Botga bosishlarni konversiya hodisasi sifatida yozadi. */}
        <TelegramClickTracker />
        {/* Speed Insights — real foydalanuvchilarda Core Web Vitals (LCP/CLS/INP). */}
        <SpeedInsights />
      </body>
    </html>
  );
}
