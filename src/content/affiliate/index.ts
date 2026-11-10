/** Standalone partner landing — content in all five locales.
 *  Compliance: no commission rates, payout figures or partner counts anywhere;
 *  testimonials are explicit placeholder slots until real quotes are supplied. */
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";
import type { AffiliateData } from "./types";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { th } from "./th";
import { ar } from "./ar";

export type { AffiliateData, ProgramCard, Testimonial, Program } from "./types";

const DATA: Record<Locale, AffiliateData> = { en, es, pt, th, ar };

export function getAffiliate(locale: string): AffiliateData {
  return byLocale(DATA, locale);
}
