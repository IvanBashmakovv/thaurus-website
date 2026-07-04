"use client";

import { useState } from "react";
import { NumberField, SelectField, ResultCard, ToolPanel } from "./fields";

export function CfdCalculator() {
  const [direction, setDirection] = useState("buy");
  const [open, setOpen] = useState<number | "">(100);
  const [close, setClose] = useState<number | "">(105);
  const [units, setUnits] = useState<number | "">(100);

  const ok = open !== "" && close !== "" && units !== "";
  const sign = direction === "buy" ? 1 : -1;
  const O = Number(open), Cl = Number(close), U = Number(units);
  const pl = ok ? (Cl - O) * U * sign : 0;
  const pct = ok && O !== 0 ? ((Cl - O) / O) * 100 * sign : 0;

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Direction"
          value={direction}
          onChange={setDirection}
          options={[
            { value: "buy", label: "Buy (long)" },
            { value: "sell", label: "Sell (short)" },
          ]}
        />
        <NumberField label="Position size (units)" value={units} onChange={setUnits} min={0} />
        <NumberField label="Open price" value={open} onChange={setOpen} />
        <NumberField label="Close price" value={close} onChange={setClose} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultCard
          label="Profit / loss"
          value={ok ? money(pl) : "—"}
          highlight
        />
        <ResultCard label="Return" value={ok ? `${pct.toFixed(2)}%` : "—"} />
      </div>
      <p className="mt-4 text-xs text-fg-faint">
        Indicative result before spreads, commissions and overnight fees.
      </p>
    </ToolPanel>
  );
}

function money(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}
