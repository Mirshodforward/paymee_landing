import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingTopicArticle } from "@/components/landing/landing-topic-article";
import { buildLandingMetadata } from "@/lib/landing-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildLandingMetadata(locale, "gifts");
}

export default async function GiftsLandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LandingTopicArticle locale={locale} topic="gifts" />;
}
