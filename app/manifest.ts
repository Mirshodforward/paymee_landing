import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const logo = "/starspaymeelogo.jpg";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "StarsPaymee",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#8A4FFF",
    lang: "uz",
    categories: ["finance", "shopping", "utilities"],
    icons: [
      {
        src: logo,
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
