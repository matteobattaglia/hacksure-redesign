"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

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
      aria-label="Consenso ai cookie"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-xl border border-zinc-700 bg-surface-900/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-md"
    >
      <p className="text-sm font-semibold text-white">Rispettiamo la tua privacy</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
        Usiamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie di
        misurazione. Consulta la{" "}
        <Link href="/privacy" className="text-brand-400 underline hover:text-brand-300">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => decide("all")}
          className="flex-1 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
        >
          Accetta
        </button>
        <button
          type="button"
          onClick={() => decide("necessary")}
          className="flex-1 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800/60"
        >
          Solo necessari
        </button>
      </div>
    </div>
  );
}
