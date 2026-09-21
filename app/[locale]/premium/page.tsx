import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PremiumPage } from "@/components/landing/premium-page";
import { buildLandingMetadata } from "@/lib/landing-metadata";

type Props = { params: Promise<{ locale: string }> };

/** Bosh sahifa bilan bir xil: 15 daqiqada bir qayta quriladi. */
export const revalidate = 900;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildLandingMetadata(locale, "premium");
}

/**
 * Statistika va sharhlar bot backend'idan `fetch` (revalidate 15 daqiqa) bilan
 * keladi — sahifa ISR: CDN keshlaydi, ma'lumot muntazam yangilanadi.
 */
export default async function PremiumLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PremiumPage locale={locale} />;
}
