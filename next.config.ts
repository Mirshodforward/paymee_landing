import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { blogRedirects } from "./lib/blog/redirects";
import { routing } from "./i18n/routing";
import { GEMPAY_URL } from "./lib/site";

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
    return [
      /**
       * Apex → www, 308 (doimiy). Vercel domen sozlamasi bu redirectni
       * chekkada o'zi qiladi va odatda 307 beradi — dashboard'da 308 ga
       * o'tkazilsa yoki apex ham loyihaga to'g'ridan-to'g'ri ulansa, shu
       * qoida ishlaydi va kod Vercel sozlamasiga bog'liq bo'lmay qoladi.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: "starstg.uz" }],
        destination: "https://www.starstg.uz/:path*",
        permanent: true,
      },
      ...routing.locales.flatMap((locale) =>
        blogRedirects.map(({ from, to }) => ({
          source: `/${locale}/blog/${from}`,
          destination: `/${locale}/blog/${to}`,
          permanent: true,
        })),
      ),
      /* O'yin bo'limi alohida saytga ko'chdi — indekslangan eski manzillar
         yo'qolmasligi uchun doimiy yo'naltirish. */
      ...routing.locales.map((locale) => ({
        source: `/${locale}/gampay`,
        destination: GEMPAY_URL,
        permanent: true,
      })),
      { source: "/gampay", destination: GEMPAY_URL, permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
