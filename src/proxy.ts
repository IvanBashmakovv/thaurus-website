import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing, locales } from "./i18n/routing";

const intl = createMiddleware(routing);

/**
 * LANDING_ONLY=1 turns a deployment into a single-page test build: every
 * route except the partnership landing (in any locale) redirects to it.
 * Used for the Vercel test deployment of the landing.
 */
const LANDING = "/affiliate-program";
const landingOnly = process.env.LANDING_ONLY === "1";

export default function proxy(req: NextRequest) {
  if (landingOnly) {
    const { pathname } = req.nextUrl;
    const parts = pathname.split("/").filter(Boolean);
    const hasLocale = parts.length > 0 && (locales as readonly string[]).includes(parts[0]);
    const rest = "/" + (hasLocale ? parts.slice(1) : parts).join("/");
    // The landing itself and its Open Graph image (every locale) pass through.
    if (rest !== LANDING && rest !== "/opengraph-image") {
      const url = req.nextUrl.clone();
      url.pathname = (hasLocale ? `/${parts[0]}` : "") + LANDING;
      url.search = "";
      return NextResponse.redirect(url, 307);
    }
  }
  return intl(req);
}

export const config = {
  // Run on all pathnames except API, Next internals and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
