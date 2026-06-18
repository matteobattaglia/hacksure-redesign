import Image from "next/image";
import Link from "next/link";
import { complianceFrameworks } from "@/lib/data/compliance";
import { securityServices } from "@/lib/data/services";
import { certifications } from "@/lib/data/certifications";

export function HomeOverview() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label">Cosa facciamo</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Servizi strutturati per ogni esigenza di sicurezza
            </h2>
            <p className="mt-3 text-zinc-400">
              Due aree di competenza: conformità normativa con autovalutazione guidata, e servizi
              operativi per testare e proteggere la vostra infrastruttura.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Link href="/compliance" className="card group p-8 transition-colors hover:border-brand-600/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Compliance</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Normative e autovalutazione</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                NIS2, GDPR, ISO 27001, DORA, PCI DSS e SOC 2. Questionari gratuiti per misurare il
                livello di conformità della vostra organizzazione.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-500 group-hover:text-brand-400">
                Esplora compliance →
              </span>
            </Link>

            <Link href="/servizi" className="card group p-8 transition-colors hover:border-brand-600/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Servizi</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Test e protezione infrastrutture</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Vulnerability assessment, penetration testing, network security, EDR/XDR, formazione
                e incident response per PMI.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-brand-500 group-hover:text-brand-400">
                Esplora servizi →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-surface-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Compliance</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Framework normativi</h2>
            </div>
            <Link href="/compliance" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutti →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.slice(0, 6).map((f) => (
              <Link key={f.slug} href={`/compliance/${f.slug}`} className="card p-5 transition-colors hover:border-zinc-700">
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-xs text-zinc-500">{f.subtitle}</p>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Servizi</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Cybersecurity operativa</h2>
            </div>
            <Link href="/servizi" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutti →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securityServices.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/servizi/${s.slug}`} className="card p-5 transition-colors hover:border-zinc-700">
                <p className="text-xs font-medium text-brand-500">{s.category}</p>
                <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-surface-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Team</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Certificazioni professionali</h2>
            </div>
            <Link href="/certificazioni" className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              Vedi tutte →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((cert) => (
              <Link key={cert.slug} href={`/certificazioni/${cert.slug}`} className="card flex flex-col items-center p-4 text-center transition-colors hover:border-zinc-700">
                <div className="relative h-20 w-20">
                  <Image src={cert.image} alt={cert.alt} fill className="object-contain" sizes="80px" />
                </div>
                <h3 className="mt-3 text-sm font-medium text-white">{cert.name}</h3>
                <p className="text-xs text-zinc-500">{cert.issuer}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
