import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { localizedUrl, languageAlternates } from "@/lib/seo";
import { routes, markets, tools, marketHref, toolHref } from "@/lib/site";

/** All public marketing routes, with per-URL hreflang alternates. */
const paths: string[] = [
  routes.home,
  routes.company,
  routes.license,
  routes.markets,
  ...markets.map((m) => marketHref(m.slug)),
  routes.toolsHub,
  ...tools.map((tool) => toolHref(tool.slug)),
  routes.accountTypes,
  routes.faq,
  routes.blog,
  routes.contact,
  routes.affiliate,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === routes.home ? 1 : 0.7,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
