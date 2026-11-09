import type { AffiliateData } from "./types";

// Facts below come from the site content (licence, platform, accounts, contacts).
// Anything Thaurus has not confirmed is a { todo } and renders as a visible marker.
export const en: AffiliateData = {
  cta: "Become a partner",
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Affiliates", href: "#programs" },
      { label: "Why Thaurus", href: "#answers" },
      { label: "How it works", href: "#steps" },
      { label: "FAQ", href: "#faq" },
    ],
    language: "Language",
  },
  hero: {
    title: "Earn from every trader you refer",
    sub: "Revenue share or CPA from Thaurus Ltd, licensed by the FSC Mauritius. Your traders trade on MetaTrader 5.",
    pills: [
      { icon: "shield", text: "FSC licence GB22200432" },
      { icon: "chart", text: "MetaTrader 5" },
      { icon: "percent", text: "Revenue share or CPA" },
    ],
  },
  press: { eyebrow: "As featured in" },
  trusted: {
    eyebrow: "Numbers traders already see",
    title: "The brand you send them to",
    stats: [
      { num: 4.4, decimals: 1, suffix: " / 5", label: "Trustpilot rating" },
      { num: 4.6, decimals: 1, suffix: " / 5", label: "Google rating" },
      { num: 120, suffix: "+", label: "Media features" },
      { text: "FSC", label: "Licence GB22200432" },
    ],
    wikifx: "WikiFX",
    verified: "Verified",
  },
  programs: {
    eyebrow: "Two ways to earn",
    title: "Pick the model for your traffic",
    compare: "Compare the two models",
    cards: [
      {
        program: "ib",
        name: "IB Partners",
        model: "Revenue share",
        bullets: [
          "Commission on your clients' trading volume",
          "Paid for as long as the client trades",
          { todo: "revenue share rate" },
        ],
        learnMoreHref: "#comparison",
      },
      {
        program: "affiliates",
        name: "Affiliates",
        model: "CPA",
        bullets: [
          "Fixed amount per qualified client",
          "Paid once, after the first deposit and trade",
          { todo: "CPA amount per client" },
        ],
        learnMoreHref: "#comparison",
      },
    ],
  },
  promote: {
    eyebrow: "What you promote",
    title: "MetaTrader 5, five asset classes",
    body: "Your referrals get the same platform and accounts as every Thaurus client.",
    facts: [
      "Forex, stocks, futures, CFDs and commodities",
      "MT5 on desktop, web and mobile",
      "Accounts from $50, in USD or EUR",
      "Free demo account",
      "Thaurus Ltd, FSC licence GB22200432",
    ],
  },
  answers: {
    eyebrow: "Straight answers",
    title: "What partners ask first",
    items: [
      { art: "commissions", title: "What you earn", body: "Revenue share on trading volume, or a fixed CPA per qualified client. Your rate is confirmed in writing when your account is approved." },
      { art: "payouts", title: "How you get paid", body: { todo: "payout methods, minimum and schedule" } },
      { art: "withdrawals", title: "How you withdraw", body: "Commission sits in your partner account until you withdraw it." },
      { art: "trusted", title: "Who pays you", body: "Thaurus Ltd, licensed and regulated by the FSC Mauritius (GB22200432). 8th Floor, Hennessy Tower, Pope Hennessy Street, Port Louis." },
      { art: "creatives", title: "What you promote with", body: { todo: "confirm creatives: banners, landing pages, logo pack" } },
      { art: "tracking", title: "How you track it", body: { todo: "confirm the partner dashboard: links, clicks, sign-ups, active traders" } },
      { art: "support", title: "Who helps you", body: "The partnerships team at support@thaurus.com, or by phone on +44 121 225 8747 and +230 5297 0374." },
    ],
  },
  comparison: {
    eyebrow: "Side by side",
    title: "Revenue share vs CPA",
    colA: "IB Partners",
    colB: "Affiliates",
    rows: [
      { label: "How you earn", a: "A share of the revenue your clients generate", b: "A fixed amount per qualified client" },
      { label: "When", a: "Recurring, while the client trades", b: "Once, after the first deposit and trading activity" },
      { label: "Rate", a: { todo: "revenue share rate" }, b: { todo: "CPA amount" } },
      { label: "Best for", a: "Introducing brokers, trading educators, communities", b: "Media buyers, finance content creators" },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "Four steps to your first commission",
    stepLabel: "Step",
    items: [
      { title: "Apply", body: "Fill in the form below. Approval comes by email." },
      { title: "Share your link", body: "Use your tracking link on your site, channel or ads." },
      { title: "Your client trades", body: "They open an account, deposit and start trading on MT5." },
      { title: "You get paid", body: "Commission is credited to your partner account." },
    ],
  },
  testimonials: {
    eyebrow: "Partners",
    title: "What partners say",
    items: [],
    pending: "Real partner quotes, with names and roles, go here. Nothing is published until each partner confirms their words.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      { q: "Who can join?", a: "Introducing brokers, trading educators, communities, media buyers and site owners with an audience interested in trading. Apply below; the team reviews every application." },
      { q: "How do I track my referrals?", a: "You get a personal tracking link. Reporting details are confirmed when your account is approved." },
      { q: "How and when are commissions paid?", a: "Payout methods, minimum and schedule are confirmed in writing when your account is approved." },
      { q: "Is Thaurus regulated?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under licence GB22200432, as a SEC-2.1B Investment Dealer." },
      { q: "Does it cost anything?", a: "No. Joining is free." },
    ],
  },
  apply: {
    eyebrow: "Apply",
    title: "Apply to the program",
    sub: "Tell us about your audience. The partnerships team replies by email.",
    name: "Full name", email: "Email",
    contact: "Phone or Telegram", contactHint: "How we should reach you",
    traffic: "Website, channel or traffic source", trafficHint: "Where you will promote Thaurus",
    program: "Program", programIb: "IB Partners (revenue share)", programAffiliate: "Affiliates (CPA)",
    message: "Message (optional)",
    submit: "Send application", sending: "Sending…",
    successTitle: "Application received", successBody: "The partnerships team will reply by email.",
    errorHint: "Check the highlighted fields.",
    errors: { name: "Enter your full name.", email: "Enter a valid email address.", contact: "Tell us how to reach you.", traffic: "Tell us where you will promote.", program: "Choose a program." },
    // Verbatim first sentence of the client's risk warning.
    risk: "Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.",
  },
};
