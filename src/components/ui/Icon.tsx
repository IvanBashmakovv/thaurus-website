import {
  Headset,
  ShieldCheck,
  Calculator,
  GraduationCap,
  ArrowRight,
  Check,
  BadgeCheck,
  CandlestickChart,
  Globe,
  Lock,
  Percent,
  Clock,
  Wallet,
  Images,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

/** Professional icon set (lucide). Named wrapper keeps call sites stable. */
export type IconName =
  | "support"
  | "shield"
  | "tools"
  | "learn"
  | "arrow"
  | "check"
  | "verified"
  | "chart"
  | "globe"
  | "lock"
  | "percent"
  | "clock"
  | "wallet"
  | "creatives"
  | "tracking"
  | "users";

const map: Record<IconName, LucideIcon> = {
  support: Headset,
  shield: ShieldCheck,
  tools: Calculator,
  learn: GraduationCap,
  arrow: ArrowRight,
  check: Check,
  verified: BadgeCheck,
  chart: CandlestickChart,
  globe: Globe,
  lock: Lock,
  percent: Percent,
  clock: Clock,
  wallet: Wallet,
  creatives: Images,
  tracking: BarChart3,
  users: Users,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name];
  return <Cmp className={cn("h-6 w-6", className)} strokeWidth={strokeWidth} aria-hidden />;
}
