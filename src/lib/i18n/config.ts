export const locales = ["it", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
};

export const localeShortNames: Record<Locale, string> = {
  it: "IT",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  it: "it",
  en: "en",
};

export const hreflang: Record<Locale, string> = {
  it: "it-IT",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  it: "it_IT",
  en: "en_US",
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "it" || value === "en";
}

/**
 * Italian is served without a prefix to preserve the URLs already indexed by
 * search engines; every other locale lives under its own prefix.
 */
export function localizeHref(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/**
 * Resolves the locale and the locale-agnostic path from a pathname.
 * Handles the internal `/it/...` form too: the middleware rewrites unprefixed
 * Italian requests onto the localized tree, so `usePathname()` reports the
 * rewritten path even though the browser URL has no prefix.
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return { locale, path: "/" };
    if (pathname.startsWith(`/${locale}/`)) {
      return { locale, path: pathname.slice(locale.length + 1) };
    }
  }
  return { locale: defaultLocale, path: pathname };
}

/** Pages that only exist in Italian (SEO landing pages built on Italian keywords). */
export const italianOnlyPaths = [
  "/sicurezza-informatica-azienda",
  "/multa-gdpr-azienda",
  "/obblighi-sicurezza-informatica-nis2",
  "/pentest-azienda",
];
