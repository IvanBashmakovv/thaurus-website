import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { localizedUrl, languageAlternates } from "@/lib/seo";
import { routes } from "@/lib/site";

export const dynamic = "force-static";

/** Landing-only build: the partnership page in every locale. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.map((locale) => ({
    url: localizedUrl(locale, routes.affiliate),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: languageAlternates(routes.affiliate) },
  }));
}
