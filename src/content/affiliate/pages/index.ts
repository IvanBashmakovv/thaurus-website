import type { SubPage } from "../types";
import { ib, ibPlan, loyalty } from "./en-ib";
import { affiliates, affiliatesPlan, marketing, why } from "./en-aff";

// English for every locale until translations are approved.
export const subPages: SubPage[] = [ib, ibPlan, loyalty, affiliates, affiliatesPlan, marketing, why];
export const getSubPage = (slug: string) => subPages.find((p) => p.slug === slug);
