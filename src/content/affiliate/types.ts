import type { IconName } from "@/components/ui/Icon";
import type { ArtKind } from "@/components/affiliate/BenefitArt";
import type { ApplyCopy } from "@/components/affiliate/ApplyForm";

/** Confirmed text, or a fact Thaurus still has to supply — rendered as a visible TODO. */
export type Txt = string | { todo: string };
export type Program = "ib" | "affiliates";
export type Stat = { label: string; num?: number; decimals?: number; suffix?: string; text?: string };
export type ProgramCard = { program: Program; name: string; model: string; bullets: Txt[]; learnMoreHref: string };
export type Testimonial = { quote: string; author: string; role?: string };
export type Menu = { label: string; items: { label: string; href: string }[] };

export type AffiliateData = {
  cta: string;
  nav: { menus: Menu[]; why: { label: string; href: string }; signIn: string; language: string };
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

/** Sub-pages of the partner site (IB program, commission plans, loyalty, marketing tools, why us). */
export type SubSection =
  | { kind: "cards"; eyebrow?: string; title: string; sub?: string; tone?: "dark" | "light"; items: { icon: IconName; title: string; body: Txt }[] }
  | { kind: "split"; eyebrow?: string; title: string; body: Txt; facts: Txt[]; art: ArtKind; tone?: "dark" | "light"; flip?: boolean }
  | { kind: "steps"; eyebrow?: string; title: string; tone?: "dark" | "light"; items: { title: string; body: Txt }[] }
  | { kind: "table"; eyebrow?: string; title: string; tone?: "dark" | "light"; cols: string[]; rows: { label: string; cells: Txt[] }[]; note?: string }
  | { kind: "stats"; eyebrow?: string; title: string; items: Stat[] }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] }
  | { kind: "other"; title: string; sub: string; program: Program; href: string };

export type SubPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; sub: string; program?: Program };
  sections: SubSection[];
};
