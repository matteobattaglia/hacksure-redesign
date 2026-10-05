import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    titleStart: "Proteggi e adegua la tua azienda",
    titleAccent: "sfruttando i Bandi e Contributi attivi",
    intro:
      "Ti guidiamo passo passo: dall'accesso ai fondi alla messa in sicurezza dei tuoi sistemi. Soluzioni complete per NIS2, GDPR, ISO 27001, Penetration Test e Vulnerability Assessment.",
    panelTitle: "Dalla pratica al servizio tecnico",
    panelText: "Un solo referente per i documenti e per l'intervento.",
    ctaPrimary: "Richiedi il servizio",
    ctaSecondary: "Vedi i servizi",
    steps: [
      {
        title: "Documenti",
        desc: "Prepariamo la pratica e la documentazione richiesta dal bando.",
      },
      {
        title: "Bando",
        desc: "Seguiamo la domanda e l'istruttoria fino all'esito del contributo.",
      },
      {
        title: "Servizio tecnico",
        desc: "Eroghiamo pentest, assessment e gli altri interventi di cybersecurity.",
      },
    ],
  },
  en: {
    titleStart: "Protect your company and get it compliant",
    titleAccent: "with active grants and funding",
    intro:
      "We guide you step by step: from accessing the funds to securing your systems. Complete solutions for NIS2, GDPR, ISO 27001, penetration testing and vulnerability assessment.",
    panelTitle: "From paperwork to technical delivery",
    panelText: "One point of contact for the documents and the engagement.",
    ctaPrimary: "Request the service",
    ctaSecondary: "View services",
    steps: [
      {
        title: "Documents",
        desc: "We prepare the application and the paperwork the grant requires.",
      },
      {
        title: "Grant",
        desc: "We follow the submission and the review through to the funding decision.",
      },
      {
        title: "Technical service",
        desc: "We deliver pentests, assessments and the other cybersecurity work.",
      },
    ],
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const href = (path: string) => localizeHref(locale, path);

  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/95 to-surface-950/70" />
        <div className="hero-glow absolute inset-0" />
        <div className="mesh-bg absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <AnimateIn>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.15rem]">
            {t.titleStart}
            <span className="mt-2 block bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">
            {t.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={href("/contatti")} className="btn-primary">
              {t.ctaPrimary}
            </Link>
            <Link href={href("/servizi")} className="btn-secondary">
              {t.ctaSecondary}
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={150}>
          <div className="card gradient-border p-6 sm:p-8">
            <p className="text-base font-semibold text-white">{t.panelTitle}</p>
            <p className="mt-1 text-sm text-zinc-500">{t.panelText}</p>
            <ol className="mt-8">
              {t.steps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                  {index < t.steps.length - 1 && (
                    <span
                      className="absolute top-10 left-[1.125rem] h-[calc(100%-2.25rem)] w-px bg-zinc-800"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-600/40 bg-brand-600/10 text-xs font-semibold text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
