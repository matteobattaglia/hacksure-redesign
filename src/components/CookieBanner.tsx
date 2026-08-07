"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localizeHref } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const STORAGE_KEY = "cookie_consent";

const copy = {
  it: {
    dialogLabel: "Consenso ai cookie",
    title: "Rispettiamo la tua privacy",
    bodyBefore:
      "Usiamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie di misurazione. Consulta la",
    privacyLink: "Privacy Policy",
    acceptAll: "Accetta",
    necessaryOnly: "Solo necessari",
  },
  en: {
    dialogLabel: "Cookie consent",
    title: "We respect your privacy",
    bodyBefore:
      "We use technical cookies required for the site to work and, with your consent, measurement cookies. Read our",
    privacyLink: "Privacy Policy",
    acceptAll: "Accept",
    necessaryOnly: "Essential only",
  },
} as const;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();

  const t = copy[locale];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage non disponibile: non mostrare il banner
    }
  }, []);

  function decide(choice: "all" | "necessary") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignora
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.dialogLabel}
      aria-live="polite"
      className="fixed bottom-4 left-4 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-xl border border-zinc-700 bg-surface-900/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-md"
    >
      <p className="text-sm font-semibold text-white">{t.title}</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
        {t.bodyBefore}{" "}
        <Link
          href={localizeHref(locale, "/privacy")}
          className="text-brand-400 underline hover:text-brand-300"
        >
          {t.privacyLink}
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => decide("all")}
          className="flex-1 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
        >
          {t.acceptAll}
        </button>
        <button
          type="button"
          onClick={() => decide("necessary")}
          className="flex-1 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800/60"
        >
          {t.necessaryOnly}
        </button>
      </div>
    </div>
  );
}
