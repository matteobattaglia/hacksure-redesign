"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { isCrawlerUserAgent } from "@/lib/crawler";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const ctaCopy = {
  it: {
    title: "Parliamo del tuo progetto",
    description:
      "Valutazione preliminare gratuita, senza impegno. Risposta entro 24 ore lavorative.",
    cta: "Richiedi consulenza",
  },
  en: {
    title: "Let's talk about your project",
    description:
      "Free preliminary assessment, with no commitment. Reply within 24 business hours.",
    cta: "Request a consultation",
  },
} as const;

export function CtaBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = ctaCopy[locale];

  useEffect(() => {
    if (!isCrawlerUserAgent(navigator.userAgent)) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <section className="border-t border-zinc-800 bg-surface-900" data-nosnippet>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="text-xl font-semibold text-white">{t.title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{t.description}</p>
        </AnimateIn>
        <Link href={localizeHref(locale, "/contatti")} className="btn-primary shrink-0">
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
