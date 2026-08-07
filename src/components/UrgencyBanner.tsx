"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localizeHref, stripLocale } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const STORAGE_KEY = "urgency_banner_dismissed";

const copy = {
  it: {
    message: "Le sanzioni NIS2 sono attive. Verifica subito se la tua azienda è in regola",
    close: "Chiudi avviso",
  },
  en: {
    message: "NIS2 penalties are already in force. Check right now whether your company is compliant",
    close: "Close notice",
  },
} as const;

export function UrgencyBanner() {
  const pathname = usePathname();
  const locale = useLocale();
  const [dismissed, setDismissed] = useState(true);

  const t = copy[locale];
  const { path: currentPath } = stripLocale(pathname);
  const onAllowedPage = currentPath === "/" || currentPath.startsWith("/compliance");

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  function close() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignora
    }
    setDismissed(true);
  }

  if (!onAllowedPage || dismissed) return null;

  return (
    <div className="relative z-50 bg-brand-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2 sm:px-6">
        <Link
          href={localizeHref(locale, "/compliance/nis2")}
          className="text-center text-xs font-medium hover:underline sm:text-sm"
        >
          <span aria-hidden="true">⚠️</span> {t.message} <span aria-hidden="true">→</span>
        </Link>
        <button
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
