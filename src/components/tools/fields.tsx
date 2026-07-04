"use client";

import { cn } from "@/lib/cn";

const base =
  "w-full rounded-xl border border-edge bg-surface px-4 py-2.5 text-fg placeholder:text-fg-faint focus-visible:outline-2 focus-visible:outline-primary-hover";

export function NumberField({
  label,
  value,
  onChange,
  step = "any",
  min,
  suffix,
}: {
  label: string;
  value: number | "";
  onChange: (v: number | "") => void;
  step?: string;
  min?: number;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg-muted">{label}</span>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          step={step}
          min={min}
          value={value}
          onChange={(e) =>
            onChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          className={cn(base, suffix && "pr-12")}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-fg-faint">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={base}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-surface-2">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ResultCard({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        highlight
          ? "border-primary/50 bg-primary/10"
          : "border-edge bg-surface-2/60"
      )}
    >
      <div className="text-xs uppercase tracking-wider text-fg-faint">{label}</div>
      <div className="mt-1 text-xl font-bold text-fg">{value}</div>
    </div>
  );
}

export function ToolPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card border border-edge bg-surface-2/50 p-6 sm:p-8">
      {children}
    </div>
  );
}
