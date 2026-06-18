import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { certifications, certCategories } from "@/lib/data/certifications";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Chi siamo",
  description:
    "HackSure è la divisione cybersecurity di Seven Business. Team certificato con eJPT, eCPPT, CompTIA, Cisco CCNA, Sophos e EICTA IS.",
  path: "/chi-siamo",
});

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Azienda"
          title="HackSure: cybersecurity per PMI"
          description="Divisione cybersecurity di Seven Business. Servizi professionali di analisi vulnerabilità, penetration testing, sicurezza di rete e conformità normativa."
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateIn className="space-y-4 leading-relaxed text-zinc-400">
              <p>
                HackSure nasce con l&apos;obiettivo di rendere accessibili alle piccole e medie
                imprese italiane servizi di cybersecurity di livello enterprise, con un approccio
                concreto e orientato ai risultati.
              </p>
              <p>
                Operiamo su due fronti complementari: la conformità normativa (NIS2, GDPR, ISO 27001
                e altri framework) e i servizi operativi di test e protezione infrastrutture.
              </p>
              <p>
                Il nostro team possiede {certifications.length} certificazioni internazionali attive —
                da offensive security (eJPT, eCPPT) a standard CompTIA e vendor enterprise (Cisco,
                Sophos, EICTA) — applicate in ogni progetto.
              </p>
            </AnimateIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Approccio operativo", desc: "Report actionable, remediation prioritizzata, supporto continuo." },
                { title: "Focus PMI", desc: "Soluzioni scalabili modulate su budget e complessità aziendale." },
                { title: "Team certificato", desc: `${certifications.length} certificazioni attive e verificabili.` },
                { title: "Sede operativa", desc: siteConfig.address },
              ].map((item, i) => (
                <AnimateIn key={item.title} delay={i * 80}>
                  <div className="card-hover p-5">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <section className="mt-16">
            <AnimateIn>
              <h2 className="text-lg font-semibold text-white">Le nostre certificazioni</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Competenze validate da enti internazionali, organizzate per area di specializzazione.
              </p>
            </AnimateIn>
            {(["offensive", "comptia", "vendor"] as const).map((cat) => (
              <div key={cat} className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {certCategories[cat].label}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {certifications
                    .filter((c) => c.category === cat)
                    .map((cert) => (
                      <Link
                        key={cert.slug}
                        href={`/certificazioni/${cert.slug}`}
                        className="card-hover flex items-center gap-3 p-3 pr-5"
                      >
                        <CertBadge src={cert.image} alt={cert.alt} size={48} />
                        <span className="text-sm font-medium text-white">{cert.name}</span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </section>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
