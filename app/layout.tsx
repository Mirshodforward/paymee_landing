import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
};

/**
 * O‘tkazgich root layout — `<html>` va `<body>` `app/[locale]/layout.tsx` da.
 *
 * Sabab: `<html lang>` tilga bog‘liq. Ilgari u root layout‘da `await headers()`
 * orqali aniqlanardi, lekin `headers()` — dinamik API va root layout‘da turgani
 * uchun BUTUN saytni statik generatsiyadan chiqarardi (579 route‘dan 6 tasi
 * statik edi, qolgani har so‘rovda qaytadan render qilinardi va CDN hech nimani
 * keshlamasdi). Locale segmenti `params` orqali kelgani uchun `[locale]` layout
 * tilni dinamik API‘siz biladi.
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
