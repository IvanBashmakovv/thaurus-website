import type { SubPage } from "../types";

const FAQ_AFF = [
  { q: "Who can join as an affiliate?", a: "Media buyers, finance content creators, site and channel owners. Apply and the team reviews each application." },
  { q: "What counts as a qualified client?", a: "TODO: qualification rule (first deposit and trading activity), to be confirmed by Thaurus." },
  { q: "When is CPA paid?", a: "Payout schedule and methods are confirmed on approval." },
];

export const affiliates: SubPage = {
  slug: "affiliates",
  metaTitle: "Affiliate Program: CPA per Qualified Client",
  metaDescription: "Earn a fixed CPA for every qualified trader you refer to Thaurus Ltd, an FSC Mauritius licensed broker.",
  hero: { eyebrow: "Affiliate Program", title: "Earn performance-based payouts", sub: "A fixed amount for every qualified client you refer. Clear rules, one payout per client.", program: "affiliates" },
  sections: [
    { kind: "cards", eyebrow: "What you get", title: "Our affiliates can count on", items: [
      { icon: "percent", title: "Fixed CPA", body: "One payout per qualified client." },
      { icon: "clock", title: "Payout schedule", body: { todo: "payout timing" } },
      { icon: "globe", title: "Global traffic", body: "The site runs in five languages. Restricted countries are listed in the footer." },
      { icon: "creatives", title: "Creatives", body: { todo: "banners, landing pages, logo pack" } },
      { icon: "tracking", title: "Tracking", body: { todo: "tracking links / postbacks" } },
      { icon: "support", title: "Affiliate manager", body: "support@thaurus.com." },
    ] },
    { kind: "split", eyebrow: "Why fintech affiliates choose Thaurus", title: "A regulated brand that converts", body: "Thaurus Ltd is licensed by the FSC Mauritius (GB22200432). Trustpilot 4.4, Google 4.6, featured in 120+ media outlets.", facts: ["MetaTrader 5, five asset classes", "Accounts from $50 in USD or EUR", "Free demo account"], art: "trusted", tone: "light", flip: true },
    { kind: "table", eyebrow: "CPA rates", title: "Performance-based CPA rates", tone: "dark", cols: ["Region", "CPA per qualified client"], rows: [
      { label: "Tier 1", cells: [{ todo: "amount" }] }, { label: "Tier 2", cells: [{ todo: "amount" }] }, { label: "Tier 3", cells: [{ todo: "amount" }] },
    ], note: "Tiers and amounts are confirmed in writing on approval." },
    { kind: "steps", eyebrow: "How it works", title: "Start earning in four simple steps", items: [
      { title: "Apply", body: "Fill in the form. Approval comes by email." },
      { title: "Launch", body: "Use your tracking link in your campaigns." },
      { title: "Client qualifies", body: { todo: "qualification rule" } },
      { title: "You get paid", body: "CPA is credited to your partner account." },
    ] },
    { kind: "faq", title: "Frequently asked questions", items: FAQ_AFF },
    { kind: "other", title: "Prefer a lifetime share?", sub: "Introducing brokers earn revenue share on every trade their clients make.", program: "ib", href: "/affiliate-program/ib-partners" },
  ],
};

export const affiliatesPlan: SubPage = {
  slug: "affiliates-commission-plan",
  metaTitle: "Affiliate Commission Plan: CPA",
  metaDescription: "How the Thaurus CPA is earned and paid.",
  hero: { eyebrow: "Commission plan", title: "How much can you earn as an affiliate", sub: "One fixed payout per qualified client, by region.", program: "affiliates" },
  sections: [
    { kind: "table", eyebrow: "CPA by region", title: "Performance-based CPA", tone: "dark", cols: ["Region", "Qualification", "CPA"], rows: [
      { label: "Tier 1", cells: [{ todo: "rule" }, { todo: "amount" }] }, { label: "Tier 2", cells: [{ todo: "rule" }, { todo: "amount" }] }, { label: "Tier 3", cells: [{ todo: "rule" }, { todo: "amount" }] },
    ] },
    { kind: "split", eyebrow: "Payouts", title: "Paid once, per qualified client", body: { todo: "payout timing and methods" }, facts: ["No cap on the number of clients", { todo: "minimum payout" }], art: "payouts", tone: "light" },
    { kind: "faq", title: "Frequently asked questions", items: FAQ_AFF },
  ],
};

export const marketing: SubPage = {
  slug: "marketing-tools",
  metaTitle: "Marketing Tools for Partners",
  metaDescription: "Creatives, tracking links and landing pages for Thaurus partners.",
  hero: { eyebrow: "Marketing tools", title: "Promo materials for your campaigns", sub: "Everything a partner needs to launch: links, banners, landing pages." },
  sections: [
    { kind: "cards", eyebrow: "Launch effective campaigns", title: "What is in the kit", items: [
      { icon: "creatives", title: "Banners", body: { todo: "sizes and formats" } },
      { icon: "globe", title: "Languages", body: "Landing pages in English, Spanish, Portuguese, Thai and Arabic." },
      { icon: "tracking", title: "Tracking links", body: { todo: "link format / sub-IDs" } },
    ] },
    { kind: "split", eyebrow: "Creatives", title: "Download Thaurus creatives", body: { todo: "creatives download (partner area)" }, facts: ["Brand colours #131228 / #42478b", "Figtree typeface", "Logo pack"], art: "creatives", tone: "dark" },
    { kind: "faq", title: "Frequently asked questions", items: [{ q: "Can I make my own creatives?", a: "TODO: brand usage rules, to be confirmed by Thaurus." }] },
  ],
};

export const why: SubPage = {
  slug: "why-thaurus",
  metaTitle: "Why Choose the Thaurus Partnership Program",
  metaDescription: "A licensed broker, two commission models, real support: why partners choose Thaurus.",
  hero: { eyebrow: "Why Thaurus", title: "Why choose the Thaurus Partnership Program", sub: "Two ways to earn from a broker your audience can verify." },
  sections: [
    { kind: "split", eyebrow: "Commissions", title: "Revenue share or CPA, your choice", body: "Introducing brokers earn on trading volume for the lifetime of the client. Affiliates earn a fixed amount per qualified client.", facts: [{ todo: "revenue share rate" }, { todo: "CPA amount" }], art: "commissions", tone: "dark" },
    { kind: "cards", eyebrow: "Why Thaurus", title: "What stands behind the brand", tone: "light", items: [
      { icon: "shield", title: "Licensed", body: "Thaurus Ltd, FSC Mauritius, licence GB22200432, SEC-2.1B Investment Dealer." },
      { icon: "verified", title: "Rated", body: "Trustpilot 4.4, Google 4.6, WikiFX verified." },
      { icon: "chart", title: "MetaTrader 5", body: "Forex, stocks, futures, CFDs and commodities." },
      { icon: "globe", title: "Five languages", body: "English, Spanish, Portuguese, Thai, Arabic." },
    ] },
    { kind: "stats", eyebrow: "Numbers traders see", title: "The brand you send them to", items: [
      { num: 4.4, decimals: 1, suffix: " / 5", label: "Trustpilot" }, { num: 4.6, decimals: 1, suffix: " / 5", label: "Google" }, { num: 120, suffix: "+", label: "Media features" }, { text: "FSC", label: "Licence GB22200432" },
    ] },
    { kind: "faq", title: "Frequently asked questions", items: [{ q: "Is Thaurus regulated?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under licence GB22200432." }] },
  ],
};
