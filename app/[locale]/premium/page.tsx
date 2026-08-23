import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingTopicArticle } from "@/components/landing/landing-topic-article";
import { buildLandingMetadata } from "@/lib/landing-metadata";

type Props = { params: Promise<{ locale: string }> };

/** Statik prerender — sahifa tarkibi so‘rovga bog‘liq emas, CDN keshlay oladi. */
export const dynamic = "force-static";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildLandingMetadata(locale, "premium");
}

export default async function PremiumLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LandingTopicArticle locale={locale} topic="premium" />;
}
