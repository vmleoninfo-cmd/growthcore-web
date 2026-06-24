import type { MetadataRoute } from "next";

// Scrapers de IA bloqueados (equivale al robots gestionado de Cloudflare).
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "PerplexityBot",
  "Meta-ExternalAgent",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/onboarding"] },
      { userAgent: AI_BOTS, disallow: "/" },
    ],
    sitemap: "https://usegrowthcore.com/sitemap.xml",
  };
}
