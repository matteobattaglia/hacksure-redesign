"use client";

import Link from "next/link";
import { localizeHref } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const copy = {
  it: {
    eyebrow: "Errore 404",
    title: "Pagina non trovata",
    description:
      "La pagina che cerchi non esiste o è stata spostata. Alcuni contenuti sono disponibili soltanto in italiano.",
    home: "Torna alla homepage",
    services: "Vedi i servizi",
    contact: "Contattaci",
  },
  en: {
    eyebrow: "Error 404",
    title: "Page not found",
    description:
      "The page you are looking for does not exist or has been moved. Some content is available in Italian only.",
    home: "Back to the homepage",
    services: "Browse the services",
    contact: "Contact us",
  },
} as const;

export default function NotFound() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 via-transparent to-transparent" />
        <div className="mesh-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="section-label">{t.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
            {t.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={localizeHref(locale, "/")} className="btn-primary">
              {t.home}
            </Link>
            <Link href={localizeHref(locale, "/servizi")} className="btn-secondary">
              {t.services}
            </Link>
            <Link href={localizeHref(locale, "/contatti")} className="btn-outline">
              {t.contact}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
