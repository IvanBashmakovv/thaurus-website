import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon";

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
          <Chip className="right-6 top-6 bg-[#6a46f0] text-white shadow-[0_10px_30px_-8px_rgba(106,70,240,.8)]" style={d(0.2)}>+$2,985</Chip>
          <Chip className="bottom-8 left-6 bg-[#1f9d63] text-white shadow-[0_10px_30px_-8px_rgba(31,157,99,.8)]" style={d(1)}>Paid ✓</Chip>
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
      <span className="text-end text-xs leading-tight"><span className="block font-semibold tabular-nums text-[#2ecc8a]">+$2,985.00</span><span className="block text-white/50">USD</span></span>
    </div>
  );
}

function Phone() {
  return (
    <div className="art-phone relative h-[21rem] w-[10.25rem] rounded-[2.6rem] bg-[linear-gradient(160deg,#2a2b3d,#0b0a16_55%,#1b1b2c)] p-[3px] shadow-[0_40px_80px_-24px_rgba(0,0,0,.85),0_0_0_1px_rgba(255,255,255,.06)]">
      <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#07060f]">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,#3d3f8f_0%,#1b1c48_45%,#0c0b1e_100%)]" />
        <div className="absolute left-1/2 top-2.5 h-[22px] w-[74px] -translate-x-1/2 rounded-full bg-black" />
        <div className="relative px-4 pt-14 text-center text-white">
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">Monday 9 June</div>
          <div className="mt-0.5 text-[2.6rem] font-light leading-none tabular-nums">9:41</div>
        </div>
        <div className="relative mt-5 space-y-2 px-2.5">
          <div className="rounded-2xl bg-white/92 p-3 text-[#131228] shadow-[0_12px_30px_-12px_rgba(0,0,0,.6)] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><span className="flex h-4 w-4 items-center justify-center rounded-[5px] bg-[#42478b] text-[8px] font-black text-white">T</span><span className="text-[10px] font-semibold tracking-wide">THAURUS</span></span>
              <span className="text-[9px] text-black/45">now</span>
            </div>
            <p className="mt-1.5 text-[11px] font-semibold leading-tight">Withdrawal approved</p>
            <p className="text-[15px] font-bold leading-tight tabular-nums">$2,985.00</p>
          </div>
          <div className="mx-2 h-9 rounded-2xl bg-white/25" />
          <div className="mx-4 h-7 rounded-2xl bg-white/12" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-[linear-gradient(115deg,rgba(255,255,255,.14),rgba(255,255,255,0)_38%)]" />
      </div>
    </div>
  );
}
