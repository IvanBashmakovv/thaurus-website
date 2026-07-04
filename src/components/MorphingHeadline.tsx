"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";

type Props = {
  /** Trust words cycled before the brand "settles". All must be verifiable. */
  words: string[];
  intervalMs?: number;
  /** End the cycle on the THAURUS wordmark (brand assembles from qualities). */
  endsWithLogo?: boolean;
  loop?: boolean;
  /** How long to hold on the logo before restarting (when loop). */
  holdMs?: number;
};

/**
 * Animated hero headline: huge word cycles, then resolves to the THAURUS logo.
 * - LCP-safe: the first word is the initial state, so it's in the SSR HTML.
 * - No layout shift: the word area has a fixed line-box (1em of the display size).
 * - prefers-reduced-motion: renders a single static safe frame (the logo).
 * - a11y: the live region is hidden from AT; the hero <section> carries a label.
 */
export function MorphingHeadline({
  words,
  intervalMs = 1900,
  endsWithLogo = true,
  loop = false,
  holdMs = 10000,
}: Props) {
  const reduce = useReducedMotion();
  const frames = endsWithLogo ? words.length + 1 : words.length;
  const [i, setI] = useState(0);

  const isLogoFrame = endsWithLogo && i === frames - 1;

  useEffect(() => {
    if (reduce) return;
    const isLast = i >= frames - 1;
    if (!loop && isLast) return; // settle on last frame
    // Hold longer on the logo (10s) before the cycle restarts.
    const delay = isLast && endsWithLogo ? holdMs : intervalMs;
    const id = setTimeout(() => {
      setI((p) => (loop ? (p + 1) % frames : Math.min(p + 1, frames - 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [i, reduce, loop, frames, intervalMs, holdMs, endsWithLogo]);

  // Reduced motion → static brand frame, no animation.
  if (reduce) {
    return (
      <div
        aria-hidden
        className="flex items-center justify-center [block-size:1.05em] [font-size:var(--text-display)]"
      >
        <Logo className="h-[0.62em] w-auto" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="relative flex items-center justify-center [block-size:1.05em] [font-size:var(--text-display)] leading-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: "0.22em", filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.22em", filter: "blur(10px)" }}
          transition={{
            duration: isLogoFrame ? 0.75 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isLogoFrame ? (
            <Logo className="h-[0.62em] w-auto" title="Thaurus" />
          ) : (
            <span className="font-bold tracking-tight text-fg">
              {words[i]}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
