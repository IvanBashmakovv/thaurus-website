"use client";

import { useState } from "react";
import { NumberField, ResultCard, ToolPanel } from "./fields";

export function PivotPointCalculator() {
  const [high, setHigh] = useState<number | "">(1.105);
  const [low, setLow] = useState<number | "">(1.095);
  const [close, setClose] = useState<number | "">(1.1);

  const valid = high !== "" && low !== "" && close !== "";
  const H = Number(high), Lo = Number(low), Cl = Number(close);
  const p = valid ? (H + Lo + Cl) / 3 : 0;
  const r1 = valid ? 2 * p - Lo : 0;
  const s1 = valid ? 2 * p - H : 0;
  const r2 = valid ? p + (H - Lo) : 0;
  const s2 = valid ? p - (H - Lo) : 0;
  const r3 = valid ? H + 2 * (p - Lo) : 0;
  const s3 = valid ? Lo - 2 * (H - p) : 0;

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="High" value={high} onChange={setHigh} />
        <NumberField label="Low" value={low} onChange={setLow} />
        <NumberField label="Close" value={close} onChange={setClose} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="Pivot (P)" value={valid ? f(p) : "—"} highlight />
        <ResultCard label="Resistance 1" value={valid ? f(r1) : "—"} />
        <ResultCard label="Support 1" value={valid ? f(s1) : "—"} />
        <ResultCard label="Resistance 2" value={valid ? f(r2) : "—"} />
        <ResultCard label="Support 2" value={valid ? f(s2) : "—"} />
        <ResultCard label="Resistance 3" value={valid ? f(r3) : "—"} />
        <ResultCard label="Support 3" value={valid ? f(s3) : "—"} />
      </div>
    </ToolPanel>
  );
}

function f(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 5 });
}
