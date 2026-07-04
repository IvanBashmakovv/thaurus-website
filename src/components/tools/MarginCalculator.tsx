"use client";

import { useState } from "react";
import { NumberField, ResultCard, ToolPanel } from "./fields";

export function MarginCalculator() {
  const [lots, setLots] = useState<number | "">(1);
  const [contract, setContract] = useState<number | "">(100000);
  const [price, setPrice] = useState<number | "">(1.1);
  const [leverage, setLeverage] = useState<number | "">(100);

  const valid =
    lots !== "" && contract !== "" && price !== "" && leverage !== "" && Number(leverage) > 0;
  const L = Number(lots), C = Number(contract), P = Number(price), Lv = Number(leverage);
  const margin = valid ? (L * C * P) / Lv : 0;
  const notional = valid ? L * C * P : 0;

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Trade size (lots)" value={lots} onChange={setLots} min={0} />
        <NumberField label="Contract size (units/lot)" value={contract} onChange={setContract} min={0} />
        <NumberField label="Price" value={price} onChange={setPrice} min={0} />
        <NumberField label="Leverage (1:X)" value={leverage} onChange={setLeverage} min={1} />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <ResultCard label="Required margin" value={valid ? fmt(margin) : "—"} highlight />
        <ResultCard label="Notional value" value={valid ? fmt(notional) : "—"} />
      </div>
    </ToolPanel>
  );
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}
