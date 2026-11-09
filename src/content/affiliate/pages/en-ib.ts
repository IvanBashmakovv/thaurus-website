import type { SubPage } from "../types";

const FAQ_IB = [
  { q: "Who can become an IB partner?", a: "Introducing brokers, trading educators, signal and community owners who introduce active traders. Apply and the partnerships team reviews your application." },
  { q: "How is the revenue share calculated?", a: "On the trading volume of the clients you introduce. The exact rate is confirmed in writing when your account is approved." },
  { q: "When am I paid?", a: "Payout schedule and methods are confirmed on approval." },
];

export const ib: SubPage = {
  slug: "ib-partners",
  metaTitle: "IB Program: Revenue Share for Introducing Brokers",
  metaDescription: "Introduce traders to Thaurus Ltd, an FSC Mauritius licensed broker on MetaTrader 5, and earn revenue share on their trading volume.",
  hero: { eyebrow: "IB Program", title: "Join us as an Introducing Broker", sub: "Earn a share of the revenue your clients generate, for as long as they trade on MetaTrader 5.", program: "ib" },
  sections: [
    { kind: "split", eyebrow: "How much you can earn", title: "Revenue share on every lot your clients trade", body: "Your commission grows with your clients' activity. The rate is agreed in writing on approval.", facts: ["Paid on trading volume, not on deposits alone", "For the lifetime of the client", { todo: "revenue share rate per lot" }], art: "commissions", tone: "dark" },
    { kind: "cards", eyebrow: "Why IBs choose Thaurus", title: "Built for partners who bring active traders", items: [
      { icon: "percent", title: "Revenue share", body: "A share of the revenue from referred clients' trades." },
      { icon: "clock", title: "Regular payouts", body: { todo: "payout schedule" } },
      { icon: "shield", title: "Licensed broker", body: "Thaurus Ltd, FSC Mauritius licence GB22200432." },
      { icon: "tracking", title: "Reporting", body: { todo: "confirm IB reporting / dashboard" } },
      { icon: "support", title: "Partner manager", body: "support@thaurus.com, +44 121 225 8747, +230 5297 0374." },
      { icon: "globe", title: "Five asset classes", body: "Forex, stocks, futures, CFDs and commodities on MT5." },
    ] },
    { kind: "split", eyebrow: "Get paid", title: "Commission credited to your partner account", body: { todo: "payout timing (e.g. daily / weekly) and methods" }, facts: ["Accounts in USD or EUR", { todo: "minimum payout" }], art: "payouts", tone: "light", flip: true },
    { kind: "steps", eyebrow: "How it works", title: "Four steps to your first commission", items: [
      { title: "Apply", body: "Fill in the form. Approval comes by email." },
      { title: "Share your link", body: "Your tracking link goes on your site, channel or in your community." },
      { title: "Your client trades", body: "They open an account, deposit and trade on MT5." },
      { title: "You get paid", body: "Commission is credited to your partner account." },
    ] },
    { kind: "faq", title: "Frequently asked questions", items: FAQ_IB },
    { kind: "other", title: "Not an introducing broker?", sub: "Media buyers and content creators earn a fixed CPA per qualified client.", program: "affiliates", href: "/affiliate-program/affiliates" },
  ],
};

export const ibPlan: SubPage = {
  slug: "ib-commission-plan",
  metaTitle: "IB Commission Plan",
  metaDescription: "How the Thaurus IB revenue share is calculated and paid.",
  hero: { eyebrow: "Commission plan", title: "Estimate your monthly earnings", sub: "Your revenue share depends on how much your clients trade.", program: "ib" },
  sections: [
    { kind: "split", eyebrow: "Calculator", title: "Volume in, commission out", body: { todo: "calculator: rate per lot × monthly lots (needs approved rate)" }, facts: ["Commission follows trading volume", "Paid for as long as the client trades"], art: "calculator", tone: "dark" },
    { kind: "table", eyebrow: "The plan", title: "Revenue share by instrument", tone: "light", cols: ["Instrument group", "Rate"], rows: [
      { label: "Forex", cells: [{ todo: "rate" }] }, { label: "Metals & energies", cells: [{ todo: "rate" }] }, { label: "Indices & stocks", cells: [{ todo: "rate" }] }, { label: "Futures & CFDs", cells: [{ todo: "rate" }] },
    ], note: "Rates are confirmed in writing when your account is approved." },
    { kind: "steps", eyebrow: "How the plan works", title: "From trade to payout", items: [
      { title: "Client trades", body: "Volume is recorded per instrument." },
      { title: "Commission accrues", body: { todo: "accrual timing" } },
      { title: "You withdraw", body: { todo: "payout methods" } },
    ] },
    { kind: "faq", title: "Frequently asked questions", items: FAQ_IB },
  ],
};

export const loyalty: SubPage = {
  slug: "loyalty-program",
  metaTitle: "Partner Loyalty Program",
  metaDescription: "Rewards for Thaurus partners who grow with us.",
  hero: { eyebrow: "Loyalty", title: "Get rewarded for your loyalty", sub: { todo: "confirm whether a loyalty / rewards program exists and its terms" } as unknown as string, program: "ib" },
  sections: [
    { kind: "split", eyebrow: "Rewards", title: "Milestones that pay back", body: { todo: "loyalty tiers, milestones and rewards" }, facts: [{ todo: "tier 1" }, { todo: "tier 2" }, { todo: "tier 3" }], art: "rewards", tone: "dark" },
    { kind: "steps", eyebrow: "How it works", title: "Reach a milestone, claim the reward", items: [
      { title: "Refer", body: "Bring active traders to Thaurus." },
      { title: "Reach a milestone", body: { todo: "milestone definition" } },
      { title: "Claim", body: { todo: "how rewards are claimed" } },
    ] },
    { kind: "faq", title: "Frequently asked questions", items: [{ q: "Who is eligible?", a: "Approved Thaurus partners. Full terms are published with the program." }] },
  ],
};
