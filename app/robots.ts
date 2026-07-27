import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/**
 * Barcha botlar uchun ochiq. AI/qidiruv kraulerlari (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended, YandexBot va h.k.) aniq ko‘rsatilgan —
 * bu AEO/LLM SEO uchun ravshan signal beradi.
 */
const AI_AND_SEARCH_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Googlebot",
  "Googlebot-Image",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "YandexBot",
  "CCBot",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: [`${base}/sitemap.xml`],
    host: base.replace(/^https?:\/\//, ""),
  };
}
