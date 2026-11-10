import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";
export const alt = "Thaurus — a regulated multi-asset broker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/** Branded social-share image (used as default OG for all pages). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 80% at 50% 0%, #2a2c57 0%, #131228 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            display: "flex",
          }}
        >
          THAURUS
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#a7a9ac",
            maxWidth: 820,
            textAlign: "center",
            display: "flex",
          }}
        >
          A regulated multi-asset broker — trade forex, stocks, futures, CFDs &
          commodities on MetaTrader 5
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 26px",
            border: "1px solid #42478b",
            borderRadius: 999,
            fontSize: 26,
            color: "#ffffff",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2dd4a7",
              display: "flex",
            }}
          />
          Regulated by FSC Mauritius · License GB22200432
        </div>
      </div>
    ),
    { ...size }
  );
}
