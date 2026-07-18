import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { complianceFrameworks } from "@/lib/data/compliance";
import { securityServices } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";

export function HomeOverview() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="section-label">In evidenza</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Tre risposte concrete alle esigenze più urgenti
              </h2>
              <p className="mt-3 text-zinc-400">
                Normative, notarizzazione delle prove e supporto immediato se sei stato truffato online.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <AnimateIn delay={60}>
              <Link
                href="/compliance"
                className="card-hover gradient-border group flex h-full flex-col p-7"
              >
                <span className="inline-flex w-fit rounded-full border border-brand-600/40 bg-brand-600/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                  Normative
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">Compliance e obblighi di legge</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  NIS2, GDPR, ISO 27001 e altri framework. Autovalutazione gratuita per capire se sei
                  in regola e cosa fare per evitare sanzioni.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-500 transition-transform group-hover:translate-x-1">
                  Verifica le normative →
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn delay={120}>
              <Link
                href="/servizi/notarizzazione-blockchain"
                className="card-hover gradient-border group flex h-full flex-col p-7"
              >
                <span className="inline-flex w-fit rounded-full border border-brand-600/40 bg-brand-600/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                  Digital Trust
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">Notarizzazione Blockchain</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  Timestamp immutabile di documenti e prove digitali. Collaboriamo con studi legali
                  altamente qualificati per usi civili e processuali.
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-500 transition-transform group-hover:translate-x-1">
                  Scopri la notarizzazione →
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn delay={180}>
              <Link
                href="/servizi/perizia-truffe-online"
                className="card-hover gradient-border group relative flex h-full flex-col overflow-hidden border-brand-600/40 p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-600/15 via-transparent to-transparent" />
                <span className="relative inline-flex w-fit rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Emergenza
                </span>
                <h3 className="relative mt-4 text-xl font-semibold text-white">SOS Truffe Online</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                  Sei stato truffato online? Call gratuita, analisi di fattibilità e — se ci sono
                  chance concrete — perizia tecnica da presentare a legali e autorità.
                </p>
                <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-400 transition-transform group-hover:translate-x-1">
                  Richiedi aiuto ora →
                </span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-surface-900/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Compliance</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Framework normativi</h2>
            </div>
            <Link href="/compliance" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutti →
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.slice(0, 6).map((f, i) => (
              <AnimateIn key={f.slug} delay={i * 60}>
                <Link href={`/compliance/${f.slug}`} className="card-hover block p-5">
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{f.subtitle}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{f.description}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Servizi</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Cybersecurity operativa</h2>
            </div>
            <Link href="/servizi" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutti →
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 50}>
                <Link href={`/servizi/${s.slug}`} className="card-hover block p-5">
                  <p className="text-xs font-medium text-brand-500">{s.category}</p>
                  <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{s.shortDescription}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200}>
            <Link
              href="/partner/kaspersky"
              className="card-hover mt-6 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center"
            >
              <div className="shrink-0 rounded-lg border border-zinc-800 bg-black p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/partners/kaspersky-registered-partner.jpg"
                  alt="Kaspersky Registered B2B Partner"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Partnership ufficiale
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  HackSure è Kaspersky Registered B2B Partner
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Endpoint security, EDR/XDR e protezione enterprise per PMI.
                </p>
              </div>
              <span className="text-sm font-medium text-brand-500">Scopri →</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-surface-900/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Team</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Certificazioni professionali</h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                {certifications.length} certificazioni attive in offensive security, CompTIA e vendor enterprise.
              </p>
            </div>
            <Link href="/certificazioni" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutte →
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((cert, i) => (
              <AnimateIn key={cert.slug} delay={i * 40}>
                <Link href={`/certificazioni/${cert.slug}`} className="card-hover flex flex-col items-center p-4 text-center">
                  <CertBadge src={cert.image} alt={cert.alt} size={64} />
                  <h3 className="mt-3 text-xs font-medium leading-tight text-white sm:text-sm">{cert.name}</h3>
                  <p className="mt-0.5 text-[10px] text-zinc-500 sm:text-xs">{cert.issuer}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
