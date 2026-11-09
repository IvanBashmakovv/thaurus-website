/**
 * Single source of truth for Thaurus site-wide facts.
 * Numbers, license, contacts and URLs are taken verbatim from the content audit.
 * Changing a value here updates it consistently across the whole site (fixes the
 * audit bugs around mismatched phone numbers / cabinet domains).
 */

export const siteConfig = {
  name: "Thaurus",
  legalName: "Thaurus Ltd",
  /** Public marketing site (production canonical host). */
  url: "https://thaurus.com",
  description:
    "Thaurus is a regulated multi-asset broker (FSC Mauritius). Trade forex, stocks, futures, CFDs and commodities on MetaTrader 5 with advanced tools and real human support.",

  /** Client cabinet — ALL Login / Open-account CTAs point here (decision: mynew). */
  cabinetUrl: "https://mynew.thaurus.com",
  get registerUrl() {
    return `${this.cabinetUrl}/sign-up`;
  },
  get loginUrl() {
    return `${this.cabinetUrl}/login`;
  },
  get demoUrl() {
    return `${this.cabinetUrl}/sign-up?type=demo`;
  },

  /** Regulatory identity — verbatim from audit §0/§2.3. */
  license: {
    number: "GB22200432",
    regulator: "FSC Mauritius",
    regulatorFull: "Financial Services Commission, Mauritius",
    category: "SEC-2.1B Investment Dealer (Full Service Dealer excluding Underwriting)",
    // FSC public register of licensees (verification link).
    registerUrl: "https://www.fscmauritius.org/en/supervision/register-of-licensees",
  },

  contact: {
    supportEmail: "support@thaurus.com",
    complianceEmail: "compliance@thaurus.com",
    // Decision: show BOTH numbers, identical format everywhere (fixes audit bug #6).
    phones: ["+44 121 225 8747", "+230 5297 0374"],
    address: {
      street: "8th Floor, Hennessy Tower, Pope Hennessy Street",
      city: "Port Louis",
      country: "Mauritius",
      full: "8th Floor, Hennessy Tower, Pope Hennessy Street, Port Louis, Mauritius",
    },
  },

  social: {
    instagram: { handle: "@thaurusltd", url: "https://instagram.com/thaurusltd" },
    facebook: { handle: "/thaurusltd", url: "https://facebook.com/thaurusltd" },
    tiktok: { handle: "@thaurus.com", url: "https://www.tiktok.com/@thaurus.com" },
    trustpilot: { handle: "Trustpilot", url: "https://www.trustpilot.com/review/thaurus.com" },
  },

  /** App store ratings for the MT5 block — verbatim from audit §2.1. */
  mt5: {
    appStoreRating: "4.8",
    googlePlayRating: "4.8",
    downloads: "15M+",
    reviews: "1M+",
  },

  /** Keep this token or Google Search Console verification breaks (audit §3.1). */
  googleSiteVerification: "oS31G-nwPafOLaOs_FQJlKQEts7WhguqG0FttFfsgmM",
} as const;

/**
 * Legal documents (6 PDFs). Each href points to a static PDF served from
 * /public/legal/ and opens in a new tab (see Footer). Drop the PDF files into
 * public/legal/ using exactly these filenames.
 */
export const legalLinks = [
  { key: "privacy", label: "Privacy Policy", href: "/legal/Thaurus-Privacy-Policy.pdf" },
  { key: "terms", label: "Terms & Conditions", href: "/legal/Terms-and-Conditions-Thaurus-August-2024.pdf" },
  { key: "risk", label: "General Risk Disclosure", href: "/legal/Thaurus-General-Risk-Disclosure.pdf" },
  { key: "complaints", label: "Complaint Handling and Processing Policy", href: "/legal/Thaurus-Complaint-Handling-and-Processing-Policy.pdf" },
  { key: "aml", label: "AML Policy", href: "/legal/Thaurus-AML-Policy.pdf" },
  { key: "bonus", label: "20% and 30% Deposit Bonus Promotion", href: "/legal/20-30-BONUS-TCs_18-10-2023.docx.pdf" },
] as const;

/** Canonical internal routes. Slugs normalized per audit (pivot-point, cfd-...-calculator). */
export const routes = {
  home: "/",
  company: "/company",
  license: "/thaurus-broker-license-regulation",
  markets: "/markets",
  accountTypes: "/account-types",
  faq: "/faq",
  blog: "/blog",
  contact: "/contact",
  toolsHub: "/tools-and-resources",
  affiliate: "/affiliate-program",
} as const;

export const markets = [
  { slug: "forex-trading-platform", label: "Forex" },
  { slug: "stock-trading-platform", label: "Stocks" },
  { slug: "futures-trading-platform", label: "Futures" },
  { slug: "cfd-trading", label: "CFDs" },
  { slug: "commodities-trading-platform", label: "Commodities" },
] as const;

export const tools = [
  { slug: "heatmap", label: "Heatmap" },
  { slug: "margin-calculator", label: "Margin Calculator" },
  { slug: "stop-loss-limit", label: "Stop Loss Limit" },
  { slug: "cfd-profit-loss-calculator", label: "CFD Profit / Loss" },
  { slug: "pivot-point", label: "Pivot Point" },
  { slug: "fibonacci", label: "Fibonacci" },
] as const;

export function marketHref(slug: string) {
  return `${routes.markets}/${slug}`;
}
export function toolHref(slug: string) {
  return `${routes.toolsHub}/${slug}`;
}
