import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Chi siamo",
  description:
    "HackSure è la divisione cybersecurity di Seven Business, specializzata in servizi di sicurezza informatica per PMI italiane.",
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
            <div className="space-y-4 text-zinc-400 leading-relaxed">
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
                Il nostro team possiede certificazioni internazionali riconosciute e applica
                metodologie standard del settore in ogni progetto.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Approccio operativo", desc: "Report actionable, remediation prioritizzata, supporto continuo." },
                { title: "Focus PMI", desc: "Soluzioni scalabili modulate su budget e complessità aziendale." },
                { title: "Team certificato", desc: "CompTIA, eCPPT, EC-Council — competenze verificabili." },
                { title: "Sede operativa", desc: siteConfig.address },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
