/**
 * Legacy WordPress / flat URLs → current App Router paths.
 * Keys are normalized (no trailing slash).
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Compliance (old flat / WP-style paths still in Google)
  "/nis2": "/compliance/nis2",
  "/direttiva-nis2": "/compliance/nis2",
  "/conformita-nis2": "/compliance/nis2",
  "/compliance-nis2": "/compliance/nis2",
  "/gdpr": "/compliance/gdpr",
  "/iso-27001": "/compliance/iso-27001",
  "/iso27001": "/compliance/iso-27001",
  "/dora": "/compliance/dora",
  "/pci-dss": "/compliance/pci-dss",
  "/soc2": "/compliance/soc2",
  "/soc-2": "/compliance/soc2",

  // Services
  "/vulnerability-assessment": "/servizi/vulnerability-assessment",
  "/penetration-testing": "/servizi/penetration-testing",
  "/penetration-test": "/servizi/penetration-testing",
  "/pentest": "/servizi/penetration-testing",
  "/network-security": "/servizi/network-security",
  "/endpoint-security": "/servizi/endpoint-security",
  "/security-awareness": "/servizi/security-awareness",
  "/incident-response": "/servizi/incident-response",
  "/notarizzazione-blockchain": "/servizi/notarizzazione-blockchain",
  "/notarizzazione": "/servizi/notarizzazione-blockchain",
  "/blockchain": "/servizi/notarizzazione-blockchain",
  "/perizia-truffe-online": "/servizi/perizia-truffe-online",
  "/perizia-truffe": "/servizi/perizia-truffe-online",
  "/sos-truffe": "/servizi/perizia-truffe-online",
  "/truffe-online": "/servizi/perizia-truffe-online",

  // Legal / misc
  "/privacy-policy": "/privacy",
  "/cookie-policy": "/privacy",
  "/home": "/",
  "/about": "/chi-siamo",
  "/contact": "/contatti",
  "/contacts": "/contatti",

  // Old feeds / sitemaps
  "/feed": "/sitemap.xml",
  "/rss": "/sitemap.xml",
  "/sitemap_index.xml": "/sitemap.xml",
  "/wp-sitemap.xml": "/sitemap.xml",

  // Typos / aliases already in use
  "/certificazioni/cvnp": "/certificazioni/cnvp",
};

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * Returns the canonical destination path for a legacy URL, or null.
 * Preserves `/en` prefix when present.
 */
export function resolveLegacyRedirect(pathname: string): string | null {
  const raw = normalizePathname(pathname);

  let localePrefix = "";
  let path = raw;

  if (path === "/en" || path.startsWith("/en/")) {
    localePrefix = "/en";
    path = path === "/en" ? "/" : path.slice(3) || "/";
  } else if (path === "/it" || path.startsWith("/it/")) {
    path = path === "/it" ? "/" : path.slice(3) || "/";
  }

  const dest = LEGACY_REDIRECTS[path];
  if (!dest) return null;

  if (!localePrefix) return dest;
  if (dest === "/") return localePrefix;
  return `${localePrefix}${dest}`;
}

/** Entries for next.config redirects (IT + EN, with/without trailing slash). */
export function legacyRedirectConfigEntries(): {
  source: string;
  destination: string;
  permanent: boolean;
}[] {
  const entries: { source: string; destination: string; permanent: boolean }[] = [];

  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    const variants = [from, `${from}/`, `/en${from}`, `/en${from}/`];
    for (const source of variants) {
      const destination =
        source.startsWith("/en")
          ? to === "/"
            ? "/en"
            : `/en${to}`
          : to;
      entries.push({ source, destination, permanent: true });
    }
  }

  return entries;
}
