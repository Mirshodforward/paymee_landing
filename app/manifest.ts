import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "StarsPaymee",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#229ED9",
    lang: "uz",
    categories: ["finance", "shopping", "utilities"],
  };
}
