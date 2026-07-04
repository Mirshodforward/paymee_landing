import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Rasm optimizatsiyasi: AVIF/WebP (kichikroq hajm), uzoq muddatli kesh.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 kun — logotip kabi o‘zgarmas rasmlar uchun
  },
};

export default withNextIntl(nextConfig);
