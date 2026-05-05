import type { BlogPost } from "@/lib/blog-posts";

export type UiLocale = "uz" | "ru" | "en";

export function resolveUiLocale(locale: string): UiLocale {
  if (locale === "ru" || locale === "en") return locale;
  return "uz";
}

/** Mazmun uchun (keyingi ravishda i18n maydonlari qo‘shilishi mumkin) hozircha bitta nusxa. */
export function localizeBlogPost(post: BlogPost): {
  title: string;
  excerpt: string;
  paragraphs: string[];
} {
  return {
    title: post.title,
    excerpt: post.excerpt,
    paragraphs: post.paragraphs,
  };
}
