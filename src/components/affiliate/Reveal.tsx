"use client";

import { motion } from "framer-motion";

/**
 * Scroll-reveal: fades and lifts content into view once. `immediate` animates
 * on mount instead (for above-the-fold content that must show without a scroll).
 * The viewport margin only trims a sliver at the bottom so content near the
 * fold reveals as soon as it enters, not 10% in.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  immediate = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  immediate?: boolean;
  className?: string;
}) {
  const visible = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay };
  return immediate ? (
    <motion.div initial={{ opacity: 0, y }} animate={visible} transition={transition} className={className}>
      {children}
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={visible}
      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
