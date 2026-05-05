import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, getTelegramBotUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const telegramUrl = getTelegramBotUrl();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Brauzer yorlig‘i va PWA uchun logo ( `/public/starspaymeelogo.jpg` ). */
const brandLogoPath = "/starspaymeelogo.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: brandLogoPath, type: "image/jpeg" }],
    apple: [{ url: brandLogoPath, type: "image/jpeg" }],
  },
  title: {
    default: siteConfig.titleDefault,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: {
      uz: "/",
      ru: "/",
    },
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
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.titleDefault,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleDefault,
    description: siteConfig.description,
  },
  keywords: [
    "StarsPaymee",
    "Telegram Stars",
    "Telegram Stars sotib olish",
    "Telegram Premium",
    "Telegram Premium O‘zbekiston",
    "Telegram Gift",
    "Telegram Gift yuborish",
    "eski Telegram gift",
    "gift yulduzga",
    "Telegram Mini App",
    "UzCard",
    "HUMO",
    "so‘m bilan Stars",
    "Telegram WebApp",
  ],
  category: "finance",
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
};

const rootGraphLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.name,
      url: siteUrl,
      logo: `${siteUrl}${brandLogoPath}`,
      description: siteConfig.description,
      sameAs: telegramUrl.startsWith("http") ? [telegramUrl] : undefined,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      url: siteUrl,
      description: siteConfig.description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["uz", "ru"],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#miniapp`,
      name: `${siteConfig.name} — Telegram Mini App`,
      url: siteUrl,
      description: siteConfig.description,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      browserRequirements:
        "JavaScript ishlaydi. Telegram ilovasida StarsPaymee Mini App sifatida ochiladi.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <JsonLd data={rootGraphLd} />
        {children}
      </body>
    </html>
  );
}
