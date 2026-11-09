import type { IconName } from "@/components/ui/Icon";
import type { ArtKind } from "@/components/affiliate/BenefitArt";
import type { ApplyCopy } from "@/components/affiliate/ApplyForm";

export type Stat = { label: string; num?: number; decimals?: number; suffix?: string; text?: string };
export type ProgramCard = { brand: string; name: string; model: string; bullets: string[]; cta: string; learnMore: string };
export type Testimonial = { quote: string; author: string; role?: string };

export type AffiliateData = {
  nav: { items: { label: string; href: `#${string}` }[]; cta: string; language: string };
  hero: { title: string; sub: string; cta: string; pills: { icon: IconName; text: string }[] };
  press: { eyebrow: string };
  trusted: { eyebrow: string; title: string; stats: Stat[]; wikifx: string; verified: string };
  programs: { eyebrow: string; title: string; cards: [ProgramCard, ProgramCard] };
  benefits: { eyebrow: string; title: string; items: { art: ArtKind; title: string; body: string }[] };
  comparison: { eyebrow: string; title: string; colA: string; colB: string; rows: { label: string; a: string; b: string }[]; ctaA: string; ctaB: string };
  steps: { eyebrow: string; title: string; sub: string; stepLabel: string; items: { title: string; body: string }[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[]; note: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  apply: ApplyCopy & { eyebrow: string };
  finalCta: { title: string; sub: string; cta: string };
};
