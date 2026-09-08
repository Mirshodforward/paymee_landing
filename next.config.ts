import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { blogRedirects } from "./lib/blog/redirects";
import { routing } from "./i18n/routing";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Rasm optimizatsiyasi: AVIF/WebP (kichikroq hajm), uzoq muddatli kesh.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 kun — logotip kabi o‘zgarmas rasmlar uchun
  },

  /**
   * Birlashtirilgan bloglarning eski URL’lari — doimiy yo‘naltirish.
   *
   * Ro‘yxat `lib/blog/redirects.ts` da; shu bitta manbadan ham HTTP
   * redirect, ham sitemap/RSS filtri oziqlanadi. Har bir slug uchun uchala
   * til alohida yoziladi, chunki `localePrefix: "always"` — URL doim
   * `/uz/...`, `/ru/...` yoki `/en/...` bilan boshlanadi va yo‘naltirish
   * til ichida qoladi.
   *
   * Bu redirect’lar Proxy’dan (next-intl middleware) OLDIN ishlaydi, ya’ni
   * eski havola bitta qadamda yakuniy URL’ga tushadi — zanjir hosil
   * bo‘lmaydi.
   */
  async redirects() {
    return routing.locales.flatMap((locale) =>
      blogRedirects.map(({ from, to }) => ({
        source: `/${locale}/blog/${from}`,
        destination: `/${locale}/blog/${to}`,
        permanent: true,
      })),
    );
  },
};

export default withNextIntl(nextConfig);
