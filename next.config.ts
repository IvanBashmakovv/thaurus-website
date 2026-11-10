import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/**
 * Static export: `npm run build` writes the whole site to `out/`, which is
 * uploaded to a plain Apache/LiteSpeed host (see public/.htaccess and
 * public/apply.php). There is no Node.js at runtime, so no middleware, no
 * server actions and no image optimisation.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // node_modules may be a junction to a sibling checkout on the dev machine;
  // Turbopack needs the symlink target inside its root.
  turbopack: { root: process.env.TURBOPACK_ROOT || undefined },
};

export default withNextIntl(nextConfig);
