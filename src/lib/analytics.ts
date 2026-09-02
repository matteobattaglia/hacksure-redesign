export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-YY41CZKYBZ";
export const COOKIE_CONSENT_KEY = "cookie_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function grantAnalyticsConsent() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_title: document.title,
  });
}
