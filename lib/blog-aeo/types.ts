import type { ComponentType } from "react";
import type { BlogCategory } from "@/lib/blog-posts";

/** AEO blog tarkibi qo‘llab-quvvatlaydigan tillar. */
export type AeoUiLocale = "uz" | "ru" | "en";

/** Maqola janri — JSON-LD turini va kategoriya yorlig‘ini tanlashga yordam beradi. */
export type AeoType = "howto" | "comparison" | "info" | "problem" | "trust" | "cta";

export type FaqItem = { question: string; answer: string };

/** HowTo schema uchun bosqich (matn — sof string, schemaga mos). */
export type HowToStep = { name: string; text: string };

export type AeoLocaleContent = {
  /** H1 + ro‘yxat kartochkasi sarlavhasi. */
  title: string;
  /** Kartochka tavsifi + meta description zaxirasi. */
  excerpt: string;
  /** <title> teg matni (≤60 belgi, kalit so‘z oldinda). */
  metaTitle: string;
  /** Meta description (140–160 belgi). */
  metaDescription: string;
  /** AnswerBox yorlig‘i, masalan «Qisqa javob». */
  answerTitle: string;
  /** AnswerBox tanasi — to‘g‘ridan-to‘g‘ri 40–60 so‘zlik javob. */
  Answer: ComponentType;
  /** Maqolaning to‘liq tanasi (H2/H3, jadval, kartochka, ichki CTA, manbalar). */
  Body: ComponentType;
  /** FAQ — FAQPage schema va ko‘rinadigan akkordeon uchun. */
  faq: FaqItem[];
  /** Yakuniy CTA sarlavhasi. */
  ctaHeading: string;
  /** Yakuniy CTA matni. */
  ctaBody: string;
};

export type AeoPost = {
  slug: string;
  category: BlogCategory;
  type: AeoType;
  /** ISO yyyy-mm-dd */
  datePublished: string;
  /** ISO yyyy-mm-dd */
  dateModified: string;
  /** Qo‘shimcha SEO kalit so‘zlar. */
  keywords: string[];
  /** Mavjud bo‘lsa — HowTo JSON-LD uchun bosqichlar. */
  howToSteps?: HowToStep[];
  locales: {
    uz: AeoLocaleContent;
    ru: AeoLocaleContent;
    en?: AeoLocaleContent;
  };
};

/** Til bo‘yicha tarkibni en→uz zaxira bilan tanlaydi. */
export function resolveAeoContent(post: AeoPost, locale: AeoUiLocale): AeoLocaleContent {
  return post.locales[locale] ?? post.locales.uz;
}
