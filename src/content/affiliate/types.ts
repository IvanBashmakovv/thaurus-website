import type { IconName } from "@/components/ui/Icon";
import type { ArtKind } from "@/components/affiliate/BenefitArt";
import type { ApplyCopy } from "@/components/affiliate/ApplyForm";

/** Confirmed text, or a fact Thaurus still has to supply — rendered as a visible TODO. */
export type Txt = string | { todo: string };
export type Stat = { label: string; num?: number; decimals?: number; suffix?: string; text?: string };
export type ProgramCard = { name: string; model: string; bullets: Txt[] };
export type Testimonial = { quote: string; author: string; role?: string };

export type AffiliateData = {
  /** The one primary call to action, same wording on every screen. */
  cta: string;
  nav: { items: { label: string; href: `#${string}` }[]; language: string };
  hero: { title: string; sub: string; pills: { icon: IconName; text: string }[] };
  press: { eyebrow: string };
  trusted: { eyebrow: string; title: string; stats: Stat[]; wikifx: string; verified: string };
  programs: { eyebrow: string; title: string; compare: string; cards: [ProgramCard, ProgramCard] };
  promote: { eyebrow: string; title: string; body: string; facts: string[] };
  answers: { eyebrow: string; title: string; items: { art: ArtKind; title: string; body: Txt }[] };
  comparison: { eyebrow: string; title: string; colA: string; colB: string; rows: { label: string; a: Txt; b: Txt }[] };
  steps: { eyebrow: string; title: string; stepLabel: string; items: { title: string; body: string }[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[]; pending: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  apply: ApplyCopy & { eyebrow: string; risk: string };
};
