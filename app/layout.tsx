import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Stars X Premium",
  description: "Telegram Stars platformasi",
  icons: {
    icon: [{ url: "/starspaymeelogo.jpg", type: "image/jpeg", sizes: "any" }],
    apple: [{ url: "/starspaymeelogo.jpg", type: "image/jpeg", sizes: "180x180" }],
    shortcut: "/starspaymeelogo.jpg",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const h = await headers();
  const loc = (h.get("x-next-intl-locale") as "uz" | "ru" | "en" | null) ?? "uz";
  const htmlLang = loc === "ru" ? "ru" : loc === "en" ? "en" : "uz";

  return (
    <html lang={htmlLang} className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
