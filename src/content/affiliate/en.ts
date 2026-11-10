import type { AffiliateData } from "./types";

import { REVIEWS } from "./reviews";

export const en: AffiliateData = {
  cta: "Become a partner",
  learnMore: "Learn more",
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Affiliates", href: "#programs" },
      { label: "Why Thaurus", href: "#benefits" },
      { label: "FAQ", href: "#faq" },
    ],
    language: "Language",
  },
  velocity: "Start now with Thaurus",
  hero: {
    badge: "Partnership program",
    title: "Maximize your earnings",
    sub: "Earn competitive revenue share or CPA commission for referring traders to Thaurus.",
    features: [
      { icon: "percent", title: "Revenue share or CPA", sub: "Two commission models" },
      { icon: "clock", title: "Fast payouts", sub: "Regular payout options" },
      { icon: "shield", title: "Licensed broker", sub: "FSC Mauritius · GB22200432" },
    ],
  },
  trusted: {
    label: "Trusted by",
    tiles: [
      { value: "120+", label: "Media features" },
      { value: "4.4/5", label: "Trustpilot rating", logo: "trustpilot" },
      { value: "4.6/5", label: "Google rating", logo: "google" },
    ],
  },
  programs: {
    eyebrow: "Choose your partnership",
    title: "Earn more with our partnership programs",
    cards: [
      { program: "ib", model: "Revenue share model", cta: "Become a partner",
        bullets: ["Benefit from competitive payouts", "Build long-term earning potential", "Earn commission based on your referred client's trading volume"] },
      { program: "affiliates", model: "CPA model", cta: "Become an affiliate",
        bullets: ["Competitive CPA (Cost Per Action)", "Performance-based earnings", "Earn commission for every qualified referred client"] },
    ],
  },
  benefits: {
    eyebrow: "Key benefits of each program",
    title: "Why partner with Thaurus?",
    items: [
      { art: "commissions", title: "High commissions", body: "Earn revenue share payouts from referred active traders, or a fixed CPA per qualified client." },
      { art: "payouts", title: "Fast payouts", body: "Regular payout options, depending on the program." },
      { art: "withdrawals", title: "Easy withdrawals", body: "Withdraw your earned commission from your partner account whenever you need it." },
      { art: "trusted", title: "A trusted partner", body: "Thaurus Ltd is licensed and regulated by the FSC Mauritius (licence GB22200432)." },
      { art: "creatives", title: "Free creatives", body: "Logo pack, banners and landing pages, ready to download for your campaigns." },
      { art: "tracking", title: "Advanced tracking", body: "Follow clicks, sign-ups and active traders in your partner dashboard, in real time." },
      { art: "support", title: "Support team", body: "Your partner manager and support@thaurus.com, whenever you need them." },
    ],
  },
  comparison: {
    eyebrow: "Comparison",
    title: "What's the difference between programs?",
    rows: [
      { label: "Payment timing", a: "Lifetime payouts, based on referred clients' trading volume.", b: "One-time, fixed payouts." },
      { label: "Payout amount", a: "A share of revenue from referred clients' trades. The rate is agreed when your account is approved.", b: "Performance-based payout per unique qualified client who starts actively trading with Thaurus." },
      { label: "Model", a: "Revenue share – earnings based on trading volume.", b: "CPA (Cost Per Action) – earnings based on a trader's first deposit and trading activity." },
      { label: "Specialization", a: "Trading experts and introducing brokers.", b: "Finance content creators and media buyers." },
    ],
    ctaA: "Become a partner",
    ctaB: "Become an affiliate",
  },
  steps: {
    eyebrow: "How it works",
    title: "Start earning in four simple steps",
    sub: "Earn commission based on the program.",
    stepLabel: "Step",
    items: [
      { title: "Register", body: "Apply as a Thaurus affiliate or IB partner." },
      { title: "Refer a trader", body: "Introduce a new client to Thaurus using your partner link." },
      { title: "Client trades", body: "Wait until your introduced client starts trading." },
      { title: "You earn", body: "Receive commission based on the program." },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "See what our partners say about us",
    authorLabel: "Thaurus Partner",
    showAll: "Show all reviews",
    items: REVIEWS,
    pending: "Partner reviews are being collected and will be published here with the partner's name and program.",
    note: "Reviews are based on feedback from Thaurus partners. Individual experiences may vary.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Who can join the Thaurus partnership program?", a: "Introducing brokers, trading educators, communities, media buyers, finance content creators and website owners with an audience interested in trading. Apply and the partnerships team reviews your application." },
      { q: "What is the difference between IB Partners and Affiliates?", a: "IB Partners earn a revenue share on their clients' trading volume for as long as the client trades. Affiliates earn a one-time, fixed CPA for every qualified client." },
      { q: "Can I join both programs?", a: "Yes. Tell us in your application which audiences you plan to promote to and the team will set up the right account." },
      { q: "How do I track my referrals?", a: "In your partner dashboard: clicks, sign-ups and active traders are shown in real time, with your tracking links and statistics." },
      { q: "What marketing materials do I get?", a: "A logo pack, banners and landing pages in the languages of the site. Custom creatives are available on request." },
      { q: "How and when are commissions paid?", a: "Commission is credited to your partner account. Payout schedule, methods and minimum are confirmed in writing when your account is approved." },
      { q: "How is the revenue share calculated?", a: "On the trading volume of the clients you introduce. The rate is agreed in writing on approval." },
      { q: "What counts as a qualified client for CPA?", a: "A unique referred client who opens an account, deposits and starts actively trading with Thaurus. Full qualification rules come with your partner agreement." },
      { q: "Which countries can I promote in?", a: "Any, except the restricted jurisdictions listed in the footer. The site is available in English, Spanish, Portuguese, Thai and Arabic." },
      { q: "Is Thaurus regulated?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under licence GB22200432, as a SEC-2.1B Investment Dealer." },
      { q: "Does it cost anything to join?", a: "No. Joining the partnership program is free." },
      { q: "How do I contact the partnerships team?", a: "support@thaurus.com, or by phone on +44 121 225 8747 and +230 5297 0374." },
    ],
  },
  finalCta: {
    title: "Start earning today",
    cards: [
      { program: "ib", headline: "Lifetime commissions", model: "Revenue share model", cta: "Become a partner" },
      { program: "affiliates", headline: "Performance-based commissions", model: "CPA model", cta: "Become an affiliate" },
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
    risk: "Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.",
  },
};
