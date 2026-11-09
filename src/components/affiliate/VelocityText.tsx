"use client";

// Adapted from componentry.dev "scroll-based-velocity": two rows of repeating
// text drift in opposite directions and speed up with the user's scroll velocity.
import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "framer-motion";
import { cn } from "@/lib/cn";

function Row({ text, baseVelocity, className }: { text: string; baseVelocity: number; className?: string }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="flex w-full flex-nowrap overflow-hidden whitespace-nowrap">
      <motion.div className={cn("flex whitespace-nowrap", className)} style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="block pe-10">{text}<span className="ps-10 text-[#8f94e8]">•</span></span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityText({ text, speed = 3, className }: { text: string; speed?: number; className?: string }) {
  const base = "select-none text-[12vw] font-semibold uppercase leading-[0.95] tracking-tight sm:text-[7rem]";
  return (
    <div className={cn("py-6", className)} aria-hidden>
      <Row text={text} baseVelocity={speed} className={cn(base, "text-fg")} />
      <Row text={text} baseVelocity={-speed} className={cn(base, "text-outline")} />
    </div>
  );
}
