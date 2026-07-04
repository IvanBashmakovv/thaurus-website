import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

/**
 * Loads messages per locale. English is the full base; other locales fall back to
 * English for any missing keys (translations are delivered incrementally).
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const base = (await import("../../messages/en.json")).default;
  const messages =
    locale === "en"
      ? base
      : { ...base, ...(await import(`../../messages/${locale}.json`)).default };

  return { locale, messages };
});
