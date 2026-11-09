"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

export type Testimonial = { quote: string; author: string; role?: string };

/**
 * Horizontal, scroll-snapping testimonial carousel with prev/next controls.
 * Works without JS (plain horizontal scroll); buttons just scroll the track.
 */
export function Testimonials({
  items,
  prevLabel,
  nextLabel,
}: {
  items: Testimonial[];
  prevLabel: string;
  nextLabel: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-0 sm:px-0"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            className={cn(
              "w-[85%] shrink-0 snap-start rounded-card border border-edge bg-surface-2/70 p-6 sm:w-[48%] lg:w-[32%]"
            )}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-primary-hover" fill="currentColor" aria-hidden>
              <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.4A1.9 1.9 0 0 1 7.3 9.6V6h-.13zm9.5 0a5.17 5.17 0 0 0-5.17 5.17V18H18v-6.5h-3.1a1.9 1.9 0 0 1 1.9-1.9V6h-.13z" />
            </svg>
            <blockquote className="mt-4 text-sm leading-relaxed text-fg-muted">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-fg">
              {t.author}
              {t.role && <span className="block text-xs font-normal text-fg-faint">{t.role}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={prevLabel}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:bg-fg/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={nextLabel}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:bg-fg/5"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
