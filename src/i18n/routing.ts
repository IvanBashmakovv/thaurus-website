import { defineRouting } from "next-intl/routing";

export const locales = ["en", "th", "es", "ar", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locales rendered right-to-left. */
export const rtlLocales: readonly Locale[] = ["ar"];

export function isRtl(locale: string) {
  return (rtlLocales as readonly string[]).includes(locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  th: "ไทย",
  es: "Español",
  ar: "العربية",
  pt: "Português",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Keep existing English URLs un-prefixed (SEO / redirects); prefix others (/th, /es, ...).
  localePrefix: "as-needed",
});
