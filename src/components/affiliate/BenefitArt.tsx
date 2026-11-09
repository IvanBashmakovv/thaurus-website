import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/Logo";

export type ArtKind =
  | "commissions" | "payouts" | "withdrawals" | "trusted"
  | "creatives" | "tracking" | "support" | "globe" | "calculator" | "rewards";

const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/** Code-drawn illustrations. Pure CSS motion: everything is in the HTML and visible without JS. No amounts anywhere. */
export function BenefitArt({ kind, tall = false }: { kind: ArtKind; tall?: boolean }) {
  const H = tall ? "h-56" : "h-44";
  switch (kind) {
    case "commissions":
      return (
        <Scene className={H}>
          <span className="art-float select-none bg-gradient-to-br from-primary-hover to-[#6f74c4] bg-clip-text text-[9rem] font-black leading-none text-transparent opacity-40">%</span>
          <Chip className="right-6 top-6 bg-[#6a46f0] text-white shadow-[0_10px_30px_-8px_rgba(106,70,240,.8)]" style={d(0.2)}>+ Revenue share</Chip>
          <Chip className="bottom-8 left-6 bg-[#1f9d63] text-white shadow-[0_10px_30px_-8px_rgba(31,157,99,.8)]" style={d(1)}>Paid</Chip>
        </Scene>
      );
    case "payouts":
      return (
        <Scene className={H}>
          <div className="absolute w-[88%] translate-y-8 scale-[.94] opacity-40"><TxRow style={d(0)} /></div>
          <div className="absolute w-[88%] -translate-y-2"><TxRow style={d(0.2)} /></div>
        </Scene>
      );
    case "withdrawals":
      return <Scene className={H}><Phone /></Scene>;
    case "trusted":
      return (
        <Scene className={H}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-fg">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#00B67A] text-[11px] text-white">★</span>
              Trustpilot <span className="text-fg-muted">4.4/5</span>
            </div>
            <div className="flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => <span key={i} className="art-pop flex h-10 w-10 items-center justify-center bg-[#00B67A] text-xl text-white" style={d(0.1 + i * 0.08)}>★</span>)}
            </div>
          </div>
        </Scene>
      );
    case "globe":
      return (
        <Scene className={H}>
          <div className="art-float relative h-28 w-28 rounded-full border border-primary-hover/40 bg-[radial-gradient(circle_at_30%_30%,rgba(111,116,196,.6),rgba(19,18,40,0)_70%)]">
            {[0, 1, 2].map((i) => <span key={i} className="absolute inset-0 rounded-full border border-primary-hover/25" style={{ transform: `rotateY(${60 * i}deg) scaleX(.5)` }} />)}
            <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-primary-hover/30" />
          </div>
        </Scene>
      );
    case "calculator":
      return (
        <Scene className={H}>
          <div className="w-52 rounded-xl border border-edge bg-surface/90 p-4 shadow-card">
            <div className="h-2 w-16 rounded bg-fg/15" />
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-fg/10"><div className="art-grow-x h-2 w-[68%] rounded-full bg-primary-hover" /></div>
            <div className="mt-4 flex items-end gap-1.5">{[30, 45, 40, 62, 55, 80].map((h, i) => <div key={i} className="art-grow w-5 rounded-t bg-primary-hover/70" style={{ height: h * 0.6, ...d(0.1 + i * 0.07) }} />)}</div>
          </div>
        </Scene>
      );
    case "rewards":
      return (
        <Scene className={H}>
          <div className="art-float flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6a46f0] to-primary-hover shadow-[0_18px_40px_-12px_rgba(106,70,240,.8)]"><Icon name="verified" className="h-10 w-10 text-white" /></div>
        </Scene>
      );
    default:
      return (
        <Scene className="h-24" plain>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15"><Icon name={kind === "creatives" ? "creatives" : kind === "tracking" ? "tracking" : "support"} className="h-6 w-6 text-primary-hover" /></span>
        </Scene>
      );
  }
}

function Scene({ children, className, plain }: { children: React.ReactNode; className?: string; plain?: boolean }) {
  return <div className={`relative flex items-center ${plain ? "justify-start" : "justify-center overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_top_left,rgba(66,71,139,.28),rgba(19,18,40,0)_60%)]"} ${className ?? ""}`}>{children}</div>;
}

function Chip({ children, className, style }: { children: React.ReactNode; className: string; style?: CSSProperties }) {
  return <span style={style} className={`art-float absolute rounded-pill px-3 py-1.5 text-xs font-semibold ${className}`}>{children}</span>;
}

function TxRow({ style }: { style?: CSSProperties }) {
  return (
    <div style={style} className="art-slide flex items-center gap-3 rounded-xl border border-white/10 bg-[#1b1a35] px-4 py-3 shadow-card">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover text-xs font-bold text-white">T</span>
      <span className="flex-1 text-start text-xs leading-tight"><span className="block font-semibold text-white">Thaurus · Payout</span><span className="block text-white/50">1h ago</span></span>
      <span className="text-end text-xs leading-tight"><span className="block font-semibold text-[#2ecc8a]">Sent ✓</span><span className="block text-white/50">USD</span></span>
    </div>
  );
}

function Phone() {
  return (
    <div className="art-phone relative h-72 w-40 rounded-[2.2rem] border-[6px] border-[#0b0a18] bg-[#0b0a18] shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]">
      <div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-black" />
      <div className="h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-[#2a2e6d] to-[#131228] p-3 pt-9">
        <div className="mb-3 flex items-center justify-between px-1 text-[10px] text-white/70"><span>9:41</span><span>●●●</span></div>
        <div className="rounded-xl bg-white/95 p-3 text-[11px] leading-tight text-[#131228] shadow-card">
          <div className="flex items-center gap-2"><Logo className="h-3" /><span className="text-[9px] text-black/50">now</span></div>
          <p className="mt-1.5 font-semibold">Withdrawal approved.</p>
        </div>
      </div>
    </div>
  );
}
