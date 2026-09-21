import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { StarsPage } from "@/components/landing/stars-page";
import { buildLandingMetadata } from "@/lib/landing-metadata";

type Props = { params: Promise<{ locale: string }> };

/** Bosh sahifa bilan bir xil: 15 daqiqada bir qayta quriladi. */
export const revalidate = 900;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildLandingMetadata(locale, "stars");
}

/**
 * Statistika va sharhlar bot backend'idan `fetch` (revalidate 15 daqiqa) bilan
 * keladi — sahifa ISR: CDN keshlaydi, ma'lumot muntazam yangilanadi.
 */
export default async function StarsLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StarsPage locale={locale} />;
}
