import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

/**
 * Til alternativalari uchun to‘liq URLlar (pathname `/stars` va hokazo, locale prefixesiz).
 *
 * `x-default` — qaysi til so‘ralganini aniqlab bo‘lmaganda ko‘rsatiladigan
 * versiya. Usiz Google o‘zi tanlaydi; asosiy auditoriya O‘zbekistonda bo‘lgani
 * uchun standart til `uz` qilib belgilangan.
 */
export function hreflangAlternates(pathSegments: string): Record<string, string> {
  const base = getSiteUrl();
  const path = pathSegments.startsWith("/") ? pathSegments : `/${pathSegments}`;
  return {
    ...Object.fromEntries(routing.locales.map((locale) => [locale, `${base}/${locale}${path}`])),
    "x-default": `${base}/${routing.defaultLocale}${path}`,
  };
}

/**
 * Blog maqolasi uchun til alternativalari — faqat tarjimasi bor tillar.
 * Tarjimasiz sahifani `hreflang` bilan e’lon qilish Google uchun noto‘g‘ri
 * signal: manzil «inglizcha» deyiladi, ichida esa o‘zbekcha matn turadi.
 */
export function blogHreflangAlternates(
  slug: string,
  translatedLocales: readonly string[],
): Record<string, string> {
  const base = getSiteUrl();
  const langs = Object.fromEntries(
    translatedLocales.map((locale) => [locale, `${base}/${locale}/blog/${slug}`]),
  );
  const fallback = translatedLocales.includes(routing.defaultLocale)
    ? routing.defaultLocale
    : translatedLocales[0];
  return fallback ? { ...langs, "x-default": `${base}/${fallback}/blog/${slug}` } : langs;
}
