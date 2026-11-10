import type { IconName } from "@/components/ui/Icon";
import type { ArtKind } from "@/components/affiliate/BenefitArt";
import type { ApplyCopy } from "@/components/affiliate/ApplyForm";

export type Program = "ib" | "affiliates";
export type ProgramCard = { program: Program; model: string; bullets: string[]; cta: string };
export type Testimonial = { quote: string; country: string; code: string };

export type AffiliateData = {
  cta: string;
  learnMore: string;
  nav: { items: { label: string; href: `#${string}` }[]; language: string };
  velocity: string;
  hero: { badge: string; title: string; sub: string; features: { icon: IconName; title: string; sub: string }[] };
  trusted: { label: string; tiles: { value: string; label: string; logo?: "trustpilot" | "google" }[] };
  programs: { eyebrow: string; title: string; cards: [ProgramCard, ProgramCard] };
  benefits: { eyebrow: string; title: string; items: { art: ArtKind; title: string; body: string }[] };
  comparison: { eyebrow: string; title: string; rows: { label: string; a: string; b: string }[]; ctaA: string; ctaB: string };
  steps: { eyebrow: string; title: string; sub: string; stepLabel: string; items: { title: string; body: string }[] };
  testimonials: { eyebrow: string; title: string; authorLabel: string; items: Testimonial[]; pending: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; cards: { program: Program; headline: string; model: string; cta: string }[] };
  apply: ApplyCopy & { eyebrow: string; risk: string };
};
