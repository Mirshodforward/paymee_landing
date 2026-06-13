import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Syne, Space_Mono } from "next/font/google";
import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "StarsPaymee",
  description: "Telegram Stars platformasi",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/starspaymeelogo.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: [{ url: "/starspaymeelogo.jpg", type: "image/jpeg", sizes: "180x180" }],
    shortcut: "/icon.svg",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
