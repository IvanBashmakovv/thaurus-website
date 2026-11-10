"use client";

import { useState } from "react";
import type { Testimonial } from "@/content/affiliate/types";
import { cn } from "@/lib/cn";

const MOBILE_VISIBLE = 6;

/** Partner review cards: 3 columns on desktop; phones show six and a button for the rest. */
export function Reviews({ items, authorLabel, showAll }: { items: Testimonial[]; authorLabel: string; showAll: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <li key={t.country} className={cn("g-card flex flex-col p-6", !open && i >= MOBILE_VISIBLE && "hidden md:flex")}>
            <span aria-hidden className="font-serif text-5xl leading-none text-[#8fa4ff]/70">“</span>
            <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-white/90">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#4f55a3,#2f6bd6)] text-xs font-bold tracking-wide text-white shadow-[0_0_20px_-6px_rgba(47,107,214,.9)]">{t.code}</span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-white">{authorLabel}</span>
                <span className="block text-xs text-white/60">{t.country}</span>
              </span>
            </figcaption>
          </li>
        ))}
      </ul>
      {!open && items.length > MOBILE_VISIBLE && (
        <button type="button" onClick={() => setOpen(true)} className="btn-glass mt-5 inline-flex h-12 w-full items-center justify-center text-sm font-semibold md:hidden">{showAll}</button>
      )}
    </div>
  );
}
