import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

/** Til alternativalari uchun to‘liq URLlar (pathname `/stars` va hokazo, locale prefixesiz). */
export function hreflangAlternates(pathSegments: string): Record<string, string> {
  const base = getSiteUrl();
  const path = pathSegments.startsWith("/") ? pathSegments : `/${pathSegments}`;
  return Object.fromEntries(routing.locales.map((locale) => [locale, `${base}/${locale}${path}`]));
}
