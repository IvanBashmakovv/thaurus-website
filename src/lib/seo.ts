import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";

/** Absolute URL for a given locale + path, honoring `as-needed` prefixing. */
export function localizedUrl(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${clean || "/"}`.replace(/(?<!:)\/$/, "/");
}

/** hreflang alternates map for every locale + x-default (audit §3 / ТЗ §7). */
export function languageAlternates(path = "/") {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localizedUrl(locale, path);
  }
  languages["x-default"] = localizedUrl(defaultLocale, path);
  return languages;
}

type BuildMetadataArgs = {
  locale: Locale;
  title: string;
  description: string;
  /** Canonical path without locale prefix, e.g. "/markets". */
  path?: string;
  images?: string[];
  noIndex?: boolean;
};

/** Builds consistent, locale-aware page metadata (canonical, hreflang, OG, Twitter). */
export function buildMetadata({
  locale,
  title,
  description,
  path = "/",
  images,
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const canonical = localizedUrl(locale, path);
  // When `images` is omitted, the opengraph-image.tsx file convention supplies it.
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: canonical,
      title,
      description,
      locale,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}
