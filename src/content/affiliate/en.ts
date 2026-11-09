import type { AffiliateData } from "./types";

export const en: AffiliateData = {
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Affiliates", href: "#programs" },
      { label: "Why Thaurus", href: "#benefits" },
      { label: "How it works", href: "#steps" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Become a partner",
    language: "Language",
  },
  hero: {
    title: "Maximize your earnings",
    sub: "Earn competitive revenue share commission for referring traders to a regulated broker.",
    cta: "Become a partner",
    // TODO(ivan): confirm program claims before launch.
    pills: [
      { icon: "percent", text: "Unlimited commission" },
      { icon: "clock", text: "Fast payouts" },
      { icon: "support", text: "Dedicated partner support" },
    ],
  },
  press: { eyebrow: "As featured in" },
  trusted: {
    eyebrow: "Trusted by traders worldwide",
    title: "Refer traders to a broker they already trust",
    stats: [
      { num: 4.4, decimals: 1, suffix: " / 5", label: "Trustpilot rating" },
      { num: 4.6, decimals: 1, suffix: " / 5", label: "Google rating" },
      { num: 120, suffix: "+", label: "Global media features" },
      { text: "FSC", label: "Licensed · GB22200432" },
    ],
    wikifx: "WikiFX",
    verified: "Verified",
  },
  programs: {
    eyebrow: "Choose your partnership",
    title: "Earn more with our high-paying partnerships",
    cards: [
      { brand: "Thaurus", name: "IB Partners", model: "Revenue share model",
        bullets: ["Benefit from competitive payouts", "Build long-term earning potential", "Earn commission based on your referred client's trading volume"],
        cta: "Become a partner", learnMore: "Learn more" },
      { brand: "Thaurus", name: "Affiliates", model: "CPA model",
        bullets: ["Competitive CPA (Cost Per Action)", "Performance-based earnings", "Earn commission for every qualified referred client"],
        cta: "Become an affiliate", learnMore: "Learn more" },
    ],
  },
  benefits: {
    eyebrow: "Key benefits of each program",
    title: "Why partner with Thaurus?",
    items: [
      { art: "commissions", title: "High commissions", body: "Earn competitive revenue share payouts from referred active traders." },
      { art: "payouts", title: "Fast payouts", body: "Enjoy quick, regular payout options, depending on the program." },
      { art: "withdrawals", title: "Seamless withdrawals", body: "Easily access your earned commission whenever you need it." },
      { art: "trusted", title: "A trusted partner", body: "Thaurus Ltd is licensed and regulated by the FSC Mauritius (GB22200432)." },
      { art: "creatives", title: "Free creatives", body: "Download a range of promotional materials to support your campaigns." },
      { art: "tracking", title: "Advanced tracking", body: "Monitor your performance with real-time analytics in your partner dashboard." },
      { art: "support", title: "Support team", body: "You can count on our expert assistance when you need it." },
    ],
  },
  comparison: {
    eyebrow: "Comparison",
    title: "What's the difference between programs?",
    colA: "Thaurus IB Partners",
    colB: "Thaurus Affiliates",
    // TODO(ivan): insert approved rates / payout schedule.
    rows: [
      { label: "Payment timing", a: "Lifetime payouts, based on referred clients' trading volume.", b: "One-time, fixed payouts." },
      { label: "Payout amount", a: "A share of revenue from referred clients' trades.", b: "Performance-based payout per unique qualified client who starts actively trading with Thaurus." },
      { label: "Model", a: "Revenue share – earnings based on trading volume.", b: "CPA (Cost Per Action) – earnings based on a trader's first-time deposit and trading activity." },
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
      { title: "Register", body: "Sign up as a Thaurus affiliate or IB partner." },
      { title: "Refer a trader", body: "Introduce a new client to Thaurus using your partner link." },
      { title: "Client trades", body: "Wait until your introduced client starts trading." },
      { title: "You earn", body: "Receive commission based on the program." },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "See what our partners say about us",
    // PLACEHOLDER SLOTS — replace with real partner quotes; never invent reviews.
    items: [
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus IB Partner" },
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus Affiliate" },
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus IB Partner" },
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus Affiliate" },
    ],
    note: "Reviews are based on feedback from Thaurus partners. Individual experiences may vary.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "Who can join the Thaurus partnership program?", a: "Content creators, media buyers, communities, educators and website owners with an audience interested in trading. Apply below and our team will review your application." },
      { q: "How do I track my referrals?", a: "Once approved you get a partner dashboard with a unique referral link and real-time reporting on clicks, sign-ups and active traders." },
      { q: "How and when are commissions paid?", a: "Commissions are tracked automatically in your dashboard. Payout methods and schedule are confirmed with our partnerships team when your account is approved." },
      { q: "Is Thaurus regulated?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under license GB22200432, as a SEC-2.1B Investment Dealer." },
      { q: "How much does it cost to join?", a: "Joining is free. You only need an approved partner account to start referring traders." },
    ],
  },
  apply: {
    eyebrow: "Apply",
    title: "Start earning today",
    sub: "Tell us about yourself and your audience — our partnerships team will get back to you.",
    name: "Full name", email: "Email",
    contact: "Phone or Telegram", contactHint: "How should we reach you?",
    traffic: "Website, channel or traffic source", trafficHint: "Where will you promote Thaurus?",
    program: "Program", programIb: "IB Partners — revenue share", programAffiliate: "Affiliates — CPA",
    message: "Message (optional)",
    submit: "Submit application", sending: "Sending…",
    successTitle: "Application received", successBody: "Thanks — our partnerships team will contact you shortly.",
    errorHint: "Please check the highlighted fields.",
    errors: { name: "Please enter your full name.", email: "Please enter a valid email address.", contact: "Please tell us how to reach you.", traffic: "Please tell us where you will promote.", program: "Please choose a program." },
  },
  finalCta: { title: "Ready to grow with Thaurus?", sub: "Join the partnership program and start earning by referring traders to a regulated broker.", cta: "Become a partner" },
};
