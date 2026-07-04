"use client";

import { useState } from "react";
import { NumberField, SelectField, ToolPanel } from "./fields";

const LEVELS = [0, 23.6, 38.2, 50, 61.8, 78.6, 100];
const EXT = [127.2, 161.8, 261.8];

export function FibonacciCalculator() {
  const [high, setHigh] = useState<number | "">(1.2);
  const [low, setLow] = useState<number | "">(1.1);
  const [trend, setTrend] = useState("up");

  const valid = high !== "" && low !== "" && high !== low;
  const H = Number(high), Lo = Number(low);
  const range = valid ? H - Lo : 0;

  const level = (pct: number) =>
    trend === "up" ? H - (range * pct) / 100 : Lo + (range * pct) / 100;

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Swing high" value={high} onChange={setHigh} />
        <NumberField label="Swing low" value={low} onChange={setLow} />
        <SelectField
          label="Trend"
          value={trend}
          onChange={setTrend}
          options={[
            { value: "up", label: "Uptrend (retrace down)" },
            { value: "down", label: "Downtrend (retrace up)" },
          ]}
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-edge">
        <table className="w-full text-sm">
          <thead className="bg-surface-2/60 text-fg-muted">
            <tr>
              <th className="p-3 text-left font-medium">Level</th>
              <th className="p-3 text-right font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {LEVELS.map((pct) => (
              <tr key={pct} className="border-t border-edge">
                <td className="p-3 text-fg-muted">{pct}%</td>
                <td className="p-3 text-right font-medium text-fg">
                  {valid ? f(level(pct)) : "—"}
                </td>
              </tr>
            ))}
            {EXT.map((pct) => (
              <tr key={pct} className="border-t border-edge bg-primary/5">
                <td className="p-3 text-primary-hover">{pct}% (ext)</td>
                <td className="p-3 text-right font-medium text-fg">
                  {valid ? f(level(pct)) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ToolPanel>
  );
}

function f(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 5 });
}
