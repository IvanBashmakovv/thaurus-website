"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";

export type ArtKind =
  | "commissions" | "payouts" | "withdrawals" | "trusted"
  | "creatives" | "tracking" | "support";

const float = (delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const, delay },
});

/** Animated, deliberately non-numeric illustrations for the benefit cards. */
export function BenefitArt({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "commissions":
      return (
        <Scene>
          <motion.div {...float()} className="text-7xl font-bold text-primary-hover/80">%</motion.div>
          <Chip className="left-2 top-3" delay={0.4}>Revenue share</Chip>
          <Chip className="bottom-3 right-2" delay={1.1}>CPA</Chip>
        </Scene>
      );
    case "payouts":
      return (
        <Scene>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-56 items-center gap-3 rounded-xl border border-edge bg-surface/90 px-4 py-3 shadow-card"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success">
              <Icon name="check" className="h-4 w-4" />
            </span>
            <div className="text-start text-xs leading-tight">
              <div className="font-semibold text-fg">Payout sent</div>
              <div className="text-fg-faint">Just now</div>
            </div>
          </motion.div>
        </Scene>
      );
    case "withdrawals":
      return (
        <Scene>
          <motion.div {...float(0.2)}>
            <Icon name="wallet" className="h-16 w-16 text-primary-hover" strokeWidth={1.4} />
          </motion.div>
          <Pulse />
        </Scene>
      );
    case "trusted":
      return (
        <Scene>
          <div className="flex flex-col items-center gap-2">
            <Icon name="shield" className="h-12 w-12 text-success" strokeWidth={1.5} />
            <Stars rating={4.4} />
            <span className="text-xs text-fg-faint">Trustpilot 4.4 · Google 4.6</span>
          </div>
        </Scene>
      );
    case "creatives":
      return (
        <Scene>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ rotate: 0, y: 0 }}
              whileInView={{ rotate: (i - 1) * 9, y: Math.abs(i - 1) * 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="absolute h-20 w-28 rounded-lg border border-edge bg-surface shadow-card"
              style={{ zIndex: i }}
            >
              <div className="m-3 h-2 w-14 rounded bg-primary/40" />
              <div className="mx-3 h-2 w-9 rounded bg-fg/15" />
            </motion.div>
          ))}
        </Scene>
      );
    case "tracking":
      return (
        <Scene>
          <div className="flex h-20 items-end gap-2">
            {[35, 55, 45, 70, 60, 90].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                className="w-4 rounded-t bg-primary-hover/80"
              />
            ))}
          </div>
        </Scene>
      );
    case "support":
      return (
        <Scene>
          <motion.div {...float(0.1)}>
            <Icon name="support" className="h-16 w-16 text-primary-hover" strokeWidth={1.4} />
          </motion.div>
          <Pulse />
        </Scene>
      );
  }
}

function Scene({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-primary/8">
      {children}
    </div>
  );
}

function Chip({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) {
  return (
    <motion.span
      {...float(delay)}
      className={`absolute rounded-pill border border-edge bg-surface/90 px-2.5 py-1 text-[0.65rem] font-semibold text-fg shadow-card ${className}`}
    >
      {children}
    </motion.span>
  );
}

function Pulse() {
  return (
    <motion.span
      aria-hidden
      className="absolute h-24 w-24 rounded-full border border-primary-hover/40"
      animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
    />
  );
}
