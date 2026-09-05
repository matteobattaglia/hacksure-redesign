import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { resolveLegacyRedirect } from "@/lib/legacy-redirects";

/** Paths served outside the localized route tree. */
const RESERVED_PREFIXES = ["/api", "/_next", "/assets"];
const RESERVED_PATHS = [
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.json",
  "/favicon.ico",
  "/favicon.svg",
  "/icon",
  "/apple-icon",
];

function isReserved(pathname: string) {
  return (
    RESERVED_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    RESERVED_PATHS.includes(pathname)
  );
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const { pathname, search } = request.nextUrl;

  const legacyDest = resolveLegacyRedirect(pathname);

  // Apex → www, folding legacy paths into the canonical URL in one hop.
  if (host === "hacksure.it") {
    const url = request.nextUrl.clone();
    url.host = "www.hacksure.it";
    url.protocol = "https:";
    if (legacyDest) {
      url.pathname = legacyDest;
      return NextResponse.redirect(url, 301);
    }
    return NextResponse.redirect(url, 308);
  }

  // www (or preview): permanent move for legacy WordPress / flat URLs.
  if (legacyDest && legacyDest !== pathname.replace(/\/$/, "")) {
    const url = request.nextUrl.clone();
    url.pathname = legacyDest;
    // Preserve query string (e.g. UTM) on permanent redirects.
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  if (!isReserved(pathname)) {
    // Italian is the default locale and stays unprefixed: /it/* would be a
    // duplicate of the canonical URL, so send it back to the clean path.
    if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
      return NextResponse.redirect(url, 308);
    }

    const isPrefixed = locales.some(
      (locale) =>
        locale !== defaultLocale &&
        (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)),
    );

    // Unprefixed request → serve the Italian tree without changing the URL.
    if (!isPrefixed) {
      const url = request.nextUrl.clone();
      url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
      const rewritten = NextResponse.rewrite(url);
      rewritten.headers.set("X-Request-Id", crypto.randomUUID());
      return rewritten;
    }
  }

  const response = NextResponse.next();

  response.headers.set("X-Request-Id", crypto.randomUUID());

  if (pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets).*)"],
};
