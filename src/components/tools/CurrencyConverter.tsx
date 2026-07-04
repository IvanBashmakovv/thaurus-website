"use client";

import { useState } from "react";
import { NumberField, SelectField, ResultCard, ToolPanel } from "./fields";

// Indicative USD-based reference rates (units of currency per 1 USD).
// Not live — for execution prices, use the trading platform.
const RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
  AUD: 1.51,
  CAD: 1.37,
  CHF: 0.89,
  CNY: 7.25,
  INR: 83.4,
  AED: 3.67,
  SGD: 1.35,
  ZAR: 18.3,
};

const OPTIONS = Object.keys(RATES).map((c) => ({ value: c, label: c }));

export function CurrencyConverter() {
  const [amount, setAmount] = useState<number | "">(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  const ok = amount !== "";
  const A = Number(amount);
  const usd = ok ? A / RATES[from] : 0;
  const result = ok ? usd * RATES[to] : 0;
  const rate = RATES[to] / RATES[from];

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Amount" value={amount} onChange={setAmount} min={0} />
        <SelectField label="From" value={from} onChange={setFrom} options={OPTIONS} />
        <SelectField label="To" value={to} onChange={setTo} options={OPTIONS} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultCard
          label={`${amount || 0} ${from} =`}
          value={ok ? `${fmt(result)} ${to}` : "—"}
          highlight
        />
        <ResultCard label="Reference rate" value={`1 ${from} = ${fmt(rate)} ${to}`} />
      </div>
      <p className="mt-4 text-xs text-fg-faint">
        Indicative reference rates only — not for execution. Live prices are
        available on MetaTrader 5.
      </p>
    </ToolPanel>
  );
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
}
