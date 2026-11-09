/** Standalone partner landing — content by locale (en/es; pt/th/ar → en).
 *  Compliance: no commission rates, payout figures or partner counts anywhere;
 *  testimonials are explicit placeholder slots until real quotes are supplied. */
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";
import type { AffiliateData } from "./types";
import { en } from "./en";
import { es } from "./es";

export type { AffiliateData, ProgramCard, Testimonial, Badge, Program } from "./types";

const DATA: Record<Locale, AffiliateData> = { en, es, pt: en, th: en, ar: en };

export function getAffiliate(locale: string): AffiliateData {
  return byLocale(DATA, locale);
}
