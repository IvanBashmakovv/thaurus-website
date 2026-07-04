import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Normalize truncated tool slugs (audit §4.3) — 301 from old to canonical.
      {
        source: "/tools-and-resources/pivot-poi",
        destination: "/tools-and-resources/pivot-point",
        permanent: true,
      },
      {
        source: "/tools-and-resources/cfd-profit-loss-calcula",
        destination: "/tools-and-resources/cfd-profit-loss-calculator",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
