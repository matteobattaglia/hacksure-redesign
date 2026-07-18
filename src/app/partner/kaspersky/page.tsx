import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const path = "/partner/kaspersky";

export const metadata: Metadata = createMetadata({
  title: "Kaspersky Cybersecurity — Partner registrato B2B",
  description:
    "HackSure è Kaspersky Registered B2B Partner. Protezione endpoint, EDR/XDR e cybersecurity enterprise per PMI italiane. Consulenza e implementazione.",
  path,
  keywords: [
    "kaspersky partner",
    "kaspersky cybersecurity",
    "kaspersky EDR",
    "kaspersky PMI",
    "endpoint security kaspersky",
    "hacksure kaspersky",
  ],
});

const solutions = [
  {
    title: "Endpoint Security",
    desc: "Protezione multilivello di PC, server e dispositivi mobili da malware, ransomware e minacce zero-day.",
  },
  {
    title: "EDR / XDR",
    desc: "Rilevamento e risposta avanzata sugli endpoint, con visibilità centralizzata e contenimento delle minacce in tempo reale.",
  },
  {
    title: "Hybrid Cloud Security",
    desc: "Sicurezza per workload cloud e ambienti ibridi, allineata alle esigenze delle PMI in crescita.",
  },
  {
    title: "Threat Intelligence",
    desc: "Intelligence sulle minacce globali Kaspersky, applicata al contesto della vostra infrastruttura.",
  },
];

const benefits = [
  {
    title: "Partner ufficiale",
    desc: "HackSure è Kaspersky Registered B2B Partner: competenze certificate e canale diretto per licenze e supporto.",
  },
  {
    title: "Implementazione su misura",
    desc: "Non vendiamo solo software: progettiamo, installiamo, configuriamo e formiamo il vostro team.",
  },
  {
    title: "Focus PMI",
    desc: "Soluzioni dimensionate sul budget e sulla complessità reale delle piccole e medie imprese italiane.",
  },
  {
    title: "Supporto continuo",
    desc: "Dopo il go-live restiamo al vostro fianco per tuning, aggiornamenti e gestione degli alert.",
  },
];

const steps = [
  {
    step: "01",
    title: "Assessment",
    desc: "Analizziamo endpoint, perimetro e rischi per capire quale stack Kaspersky è adatto alla vostra azienda.",
  },
  {
    step: "02",
    title: "Progettazione",
    desc: "Definiamo architettura, policy, licenze e piano di rollout senza interrompere l'operatività.",
  },
  {
    step: "03",
    title: "Deployment",
    desc: "Installiamo e configuriamo le soluzioni, integriamo con la vostra infrastruttura e verifichiamo la copertura.",
  },
  {
    step: "04",
    title: "Operatività",
    desc: "Formazione degli operatori, monitoraggio e ottimizzazione continua delle policy di protezione.",
  },
];

export default function KasperskyPartnerPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: "Kaspersky Cybersecurity — Endpoint Security & EDR",
            description:
              "Implementazione e gestione di soluzioni Kaspersky per PMI. HackSure è Kaspersky Registered B2B Partner.",
            path,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Partner Kaspersky", url: path },
          ]),
        ]}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Partner", href: "/servizi" },
            { label: "Kaspersky" },
          ]}
        />

        <section className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 via-transparent to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <AnimateIn>
              <p className="section-label">Partnership ufficiale</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Kaspersky Cybersecurity per la tua azienda
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                HackSure è <strong className="font-medium text-zinc-200">Kaspersky Registered B2B
                Partner</strong>. Progettiamo, implementiamo e gestiamo soluzioni di protezione
                endpoint e EDR/XDR di classe enterprise, calibrate sulle esigenze delle PMI italiane.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contatti" className="btn-primary">
                  Richiedi una consulenza
                </Link>
                <Link href="/servizi/endpoint-security" className="btn-secondary">
                  Endpoint Security
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="card flex items-center justify-center p-8 sm:p-10">
                <Image
                  src="/assets/partners/kaspersky-registered-partner.jpg"
                  alt="Kaspersky Registered B2B Partner — HackSure"
                  width={1024}
                  height={428}
                  className="h-auto w-full max-w-md"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500">
                Badge ufficiale Kaspersky Registered B2B Partner
              </p>
            </AnimateIn>
          </div>
        </section>

        <section className="border-b border-zinc-800 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Perché Kaspersky</p>
              <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white">
                Protezione riconosciuta a livello globale, gestita in Italia
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-400">
                Kaspersky è uno dei leader mondiali nella cybersecurity. Come partner registrati,
                vi accompagniamo nella scelta della soluzione giusta, nell&apos;implementazione e
                nella gestione quotidiana — senza lasciare la vostra azienda sola dopo la vendita.
              </p>
            </AnimateIn>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <AnimateIn key={b.title} delay={i * 70}>
                  <div className="card-hover h-full p-5">
                    <h3 className="font-semibold text-white">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 bg-surface-900/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Soluzioni</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Cosa possiamo implementare
              </h2>
            </AnimateIn>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {solutions.map((s, i) => (
                <AnimateIn key={s.title} delay={i * 70}>
                  <div className="card h-full p-6">
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-800 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Come lavoriamo</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Dal primo assessment alla protezione operativa
              </h2>
            </AnimateIn>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item, i) => (
                <AnimateIn key={item.step} delay={i * 70}>
                  <div className="card-hover h-full p-5">
                    <span className="text-xs font-bold tracking-widest text-brand-600/70">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-2xl font-semibold text-white">
                Vuoi proteggere gli endpoint della tua azienda con Kaspersky?
              </h2>
              <p className="mt-3 text-zinc-400">
                Valutazione preliminare gratuita: capiamo insieme se e quale soluzione Kaspersky
                è adatta al vostro contesto, senza impegno.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contatti" className="btn-primary">
                  Contatta un partner Kaspersky
                </Link>
                <Link href="/servizi/endpoint-security" className="btn-secondary">
                  Scopri Endpoint Security
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
