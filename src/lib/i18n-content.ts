import type { Locale } from "@/i18n/routing";

/**
 * Picks a localized value with English fallback. Used by the typed content
 * modules so any missing translation gracefully falls back to English.
 *
 * NOTE: non-English body translations are machine-generated and should be
 * reviewed by a native speaker before go-live (financial/marketing copy).
 */
export function byLocale<T>(
  map: { en: T } & Partial<Record<Locale, T>>,
  locale: string
): T {
  return (map as Record<string, T>)[locale] ?? map.en;
}
