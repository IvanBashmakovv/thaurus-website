"use client";

import { useState } from "react";
import { NumberField, ResultCard, ToolPanel } from "./fields";

export function StopLossCalculator() {
  const [entry, setEntry] = useState<number | "">(1.1);
  const [stop, setStop] = useState<number | "">(1.095);
  const [target, setTarget] = useState<number | "">(1.115);
  const [units, setUnits] = useState<number | "">(100000);

  const ok = entry !== "" && stop !== "" && units !== "";
  const E = Number(entry), S = Number(stop), T = Number(target), U = Number(units);
  const risk = ok ? Math.abs(E - S) * U : 0;
  const reward = ok && target !== "" ? Math.abs(T - E) * U : 0;
  const rr = risk > 0 && reward > 0 ? reward / risk : 0;

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Entry price" value={entry} onChange={setEntry} />
        <NumberField label="Stop-loss price" value={stop} onChange={setStop} />
        <NumberField label="Take-profit price" value={target} onChange={setTarget} />
        <NumberField label="Position size (units)" value={units} onChange={setUnits} min={0} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <ResultCard label="Risk amount" value={ok ? money(risk) : "—"} />
        <ResultCard label="Reward amount" value={ok && target !== "" ? money(reward) : "—"} />
        <ResultCard
          label="Risk : reward"
          value={rr > 0 ? `1 : ${rr.toFixed(2)}` : "—"}
          highlight
        />
      </div>
    </ToolPanel>
  );
}

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}
