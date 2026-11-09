"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/cn";

/**
 * Wall of real Thaurus brand photos. Tiles are in the HTML and rise in with a
 * CSS stagger; a spotlight then travels across the grid (progressive
 * enhancement — without JS the wall simply shows).
 */
const TILES = [
  photos.team, photos.portrait, photos.office, photos.appPhone,
  photos.mt5Devices, photos.portrait, photos.team, photos.office,
  photos.appPhone, photos.team, photos.portrait, photos.office,
];

export function PhotoMosaic({ className }: { className?: string }) {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 5) % TILES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="grid h-full w-full grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
        {TILES.map((p, i) => {
          const lit = i === active;
          return (
            <div key={i} className={cn("rise relative", i % 5 === 0 && "sm:row-span-2")} style={{ animationDelay: `${i * 0.05}s` }}>
              <div
                className={cn(
                  "relative aspect-square h-full w-full overflow-hidden rounded-2xl bg-surface-2 transition-all duration-700 ease-out",
                  i % 5 === 0 && "sm:aspect-auto",
                  lit ? "z-10 scale-[1.06] opacity-100 ring-2 ring-primary-hover saturate-100" : "opacity-45 saturate-[0.55]"
                )}
              >
                {p.src && <Image src={p.src} alt="" fill sizes="(max-width: 640px) 25vw, 16vw" className="object-cover" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#131228]/55 via-[#131228]/35 to-[#131228]" />
    </div>
  );
}
