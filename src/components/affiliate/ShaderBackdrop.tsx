"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// three.js loads only on the client, after first paint, and only while the
// section is near the viewport. Until then (and under reduced motion) a CSS
// gradient in the same colours stands in, so the hero never waits for WebGL.
const ShaderScene = dynamic(() => import("./ShaderScene"), { ssr: false });

const TONES = {
  dark: { color1: "#0e0d22", color2: "#3b3f8a", fade: "#0e0d22", css: "linear-gradient(135deg,#0e0d22 0%,#1c1f52 55%,#3b3f8a 100%)" },
  light: { color1: "#42478b", color2: "#eef1fb", fade: "#ffffff", css: "linear-gradient(135deg,#6a6fa8 0%,#c9cdf0 45%,#eef1fb 100%)" },
} as const;

export function ShaderBackdrop({ tone = "dark", speed = 1, className }: { tone?: keyof typeof TONES; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  // Mount the scene just after first paint. A plain timer is used on purpose:
  // requestIdleCallback is skipped or throttled in background tabs.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setReady(true), 350);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const t = TONES[tone];
  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} style={{ background: t.css }}>
      {ready && inView && (
        <div className="fade-in absolute inset-0">
          <ShaderScene color1={t.color1} color2={t.color2} fade={t.fade} speed={speed} />
        </div>
      )}
    </div>
  );
}
