"use client";

import { useEffect, useRef } from "react";

/**
 * Live forex strength heatmap via the free TradingView embeddable widget.
 * Lazy-injected on mount so it doesn't block render / hurt CWV.
 */
export function ForexHeatmap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 450,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD"],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });
    container.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-card border border-edge bg-surface-2/50 p-2">
      <div className="tradingview-widget-container" ref={ref}>
        <div className="tradingview-widget-container__widget" />
      </div>
      <p className="px-2 pb-2 pt-1 text-xs text-fg-faint">
        Live data provided by TradingView.
      </p>
    </div>
  );
}
