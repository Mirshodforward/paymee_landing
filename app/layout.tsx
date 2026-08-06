import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Syne, Space_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl, SITE_VERIFICATION } from "@/lib/site";
import "./globals.css";

/** Faqat to‘ldirilgan kodlar uchun verification meta-teglarini chiqaradi. */
function buildVerification(): Metadata["verification"] {
  const v: NonNullable<Metadata["verification"]> = {};
  if (SITE_VERIFICATION.google) v.google = SITE_VERIFICATION.google;
  if (SITE_VERIFICATION.yandex) v.yandex = SITE_VERIFICATION.yandex;
  if (SITE_VERIFICATION.bing) v.other = { "msvalidate.01": SITE_VERIFICATION.bing };
  return v;
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "StarsPaymee",
  description: "Telegram Stars platformasi",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const h = await headers();
  const loc = (h.get("x-next-intl-locale") as "uz" | "ru" | "en" | null) ?? "uz";
  const htmlLang = loc === "ru" ? "ru" : loc === "en" ? "en" : "uz";

  return (
    <html
      lang={htmlLang}
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
        {children}
        {/* Vercel Web Analytics — tashriflar va sahifa ko‘rishlarini sanaydi. */}
        <Analytics />
        {/* Speed Insights — real foydalanuvchilarda Core Web Vitals (LCP/CLS/INP). */}
        <SpeedInsights />
      </body>
    </html>
  );
}
