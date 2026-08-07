import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    title: "Sei sicuro di essere protetto?",
    text: "Ogni giorno le PMI italiane subiscono attacchi informatici. Una valutazione preliminare gratuita permette di identificare vulnerabilità e obblighi normativi applicabili.",
    cta: "Richiedi valutazione",
  },
  en: {
    title: "Are you sure you are protected?",
    text: "Italian SMEs are hit by cyberattacks every day. A free preliminary assessment reveals your vulnerabilities and the regulatory obligations that apply to you.",
    cta: "Request an assessment",
  },
} as const;

export function HomeCta({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="card-hover gradient-border relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-600/10 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">{t.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                  {t.text}
                </p>
              </div>
              <Link href={localizeHref(locale, "/contatti")} className="btn-primary shrink-0">
                {t.cta}
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
