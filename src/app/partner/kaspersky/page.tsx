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
  title: "Soluzioni Kaspersky Cybersecurity per aziende",
  description:
    "HackSure — partner e rivenditore autorizzato Kaspersky. Soluzioni certificate Next EDR, XDR e MXDR per la sicurezza informatica aziendale.",
  path,
  keywords: [
    "kaspersky partner",
    "kaspersky next",
    "kaspersky EDR",
    "kaspersky XDR",
    "kaspersky cybersecurity aziende",
    "hacksure kaspersky",
  ],
});

const whyKaspersky = [
  {
    title: "Protezione basata su Machine Learning",
    desc: "Identificazione e blocco delle minacce note e sconosciute attraverso algoritmi avanzati di analisi comportamentale.",
  },
  {
    title: "Rilevamento e risposta rapida agli incidenti",
    desc: "Individuazione tempestiva delle attività sospette e risposta immediata per ridurre l'impatto degli attacchi informatici.",
  },
  {
    title: "Soluzioni informatiche scalabili nel tempo",
    desc: "Una piattaforma che cresce insieme all'azienda, adattandosi a nuove esigenze, utenti e livelli di sicurezza.",
  },
  {
    title: "Gestione centralizzata, intuitiva e controllabile",
    desc: "Un'unica console per monitorare, configurare e gestire la sicurezza dell'intero ecosistema IT in modo semplice ed efficiente.",
  },
];

const nextSolutions = [
  {
    name: "Kaspersky Next EDR Foundations",
    tagline: "Il punto di partenza solido per la cybersecurity aziendale",
    features: [
      "Protezione endpoint multilivello di livello enterprise",
      "Capacità EDR di base per rilevare e investigare incidenti",
      "Difesa anti-ransomware e anti-malware avanzata",
      "Gestione centralizzata della protezione",
      "Ideale per PMI che costruiscono le fondamenta della sicurezza",
    ],
  },
  {
    name: "Kaspersky Next EDR Optimum",
    tagline: "EDR essenziale con automazione e semplicità operativa",
    features: [
      "Tutte le funzionalità di EDR Foundations",
      "Capacità EDR essenziali e risposta automatizzata",
      "Ottimizzazione dei task IT e hardening",
      "Controlli endpoint avanzati",
      "Pensato per team IT snelli che vogliono più visibilità",
    ],
  },
  {
    name: "Kaspersky Next XDR Optimum",
    tagline: "XDR accessibile: visibilità oltre gli endpoint",
    features: [
      "Tutte le funzionalità di EDR Optimum",
      "Aggregazione alert e correlazione eventi",
      "Cloud Sandbox per analisi file sospetti",
      "Integrazione Active Directory",
      "Strumenti di investigazione e risposta estesi",
    ],
  },
  {
    name: "Kaspersky Next MXDR Optimum",
    tagline: "XDR in-house + monitoraggio gestito 24/7",
    features: [
      "Tutte le funzionalità di XDR Optimum",
      "Monitoraggio continuo e threat hunting da esperti Kaspersky",
      "Supporto SOC 24/7 con notifiche e guidance",
      "Investigazione e risposta assistita dagli esperti",
      "Ideale quando serve protezione gestita senza rinunciare al controllo",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Analisi del rischio informatico",
    desc: "Valutazione dello stato di sicurezza dell'infrastruttura IT per individuare vulnerabilità, criticità e potenziali minacce.",
    cta: "Verifica ora",
    href: "/contatti",
  },
  {
    step: "02",
    title: "Scelta della soluzione Kaspersky più adatta",
    desc: "Selezione del piano Kaspersky Next più coerente con la struttura aziendale, il livello di rischio e gli obiettivi di sicurezza.",
    cta: "Verifica ora",
    href: "/contatti",
  },
  {
    step: "03",
    title: "Supporto tecnico continuo",
    desc: "Configurazione, avviamento e assistenza costante per garantire il corretto funzionamento delle soluzioni nel tempo.",
    cta: "Verifica ora",
    href: "/contatti",
  },
];

export default function KasperskyPartnerPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: "Kaspersky Next — Cybersecurity aziendale",
            description:
              "HackSure è partner e rivenditore autorizzato Kaspersky. Soluzioni Next EDR, XDR e MXDR per aziende.",
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

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 via-transparent to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
            <AnimateIn>
              <p className="section-label">Partner certificato Kaspersky</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                Soluzioni di cybersecurity certificate per le aziende
              </h1>
              <p className="mt-3 text-base font-medium text-brand-400">
                Partner certificato Kaspersky per la sicurezza informatica aziendale
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                HackSure.it opera come partner e rivenditore autorizzato di Kaspersky, mettendo a
                disposizione tecnologie avanzate pensate per affrontare le minacce informatiche
                moderne in modo efficace e strutturato.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contatti" className="btn-primary">
                  Parla con un consulente
                </Link>
                <a href="#kaspersky-next" className="btn-secondary">
                  Scopri le soluzioni Kaspersky Next
                </a>
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

        {/* Cos'è Kaspersky */}
        <section className="border-b border-zinc-800 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Il vendor</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Cos&apos;è Kaspersky?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">
                Kaspersky è una delle principali aziende a livello globale nel settore della
                cybersecurity, con oltre vent&apos;anni di esperienza nella protezione di sistemi
                informatici, reti e dati sensibili.
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Presente in più di 200 Paesi e territori, Kaspersky sviluppa soluzioni di sicurezza
                avanzate per aziende, enti pubblici e infrastrutture critiche, proteggendo milioni di
                utenti e organizzazioni in tutto il mondo da minacce informatiche sempre più
                sofisticate.
              </p>
              <Link href="/contatti" className="btn-primary mt-8">
                Prenota una consulenza
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Perché scegliere Kaspersky */}
        <section className="border-b border-zinc-800 bg-surface-900/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Perché scelgono Kaspersky</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Perché scegliere Kaspersky
              </h2>
            </AnimateIn>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {whyKaspersky.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 70}>
                  <div className="card-hover h-full p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Kaspersky Next */}
        <section id="kaspersky-next" className="scroll-mt-24 border-b border-zinc-800 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">Portfolio</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Le soluzioni di Kaspersky Next
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                Kaspersky Next offre un ecosistema di soluzioni progettate per adattarsi a diversi
                livelli di maturità della sicurezza informatica aziendale, consentendo alle imprese
                di scegliere il grado di protezione più adatto alle proprie esigenze operative e
                organizzative.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {nextSolutions.map((s) => (
                  <a
                    key={s.name}
                    href={`#${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-brand-600/50 hover:text-brand-400"
                  >
                    {s.name.replace("Kaspersky Next ", "")}
                  </a>
                ))}
              </div>
            </AnimateIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {nextSolutions.map((solution, i) => (
                <AnimateIn key={solution.name} delay={i * 80}>
                  <article
                    id={solution.name.toLowerCase().replace(/\s+/g, "-")}
                    className="card-hover gradient-border flex h-full scroll-mt-28 flex-col p-6 sm:p-7"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                      Kaspersky Next
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {solution.name.replace("Kaspersky Next ", "")}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{solution.tagline}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {solution.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm text-zinc-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contatti"
                      className="mt-6 text-sm font-medium text-brand-500 hover:text-brand-400"
                    >
                      Richiedi info su questa soluzione →
                    </Link>
                  </article>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Trova la soluzione più adatta al tuo business
                </h3>
                <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
                  Ti aiutiamo a scegliere tra Foundations, Optimum EDR, XDR e MXDR in base a
                  dimensione, rischio e risorse del tuo team IT.
                </p>
                <Link href="/contatti" className="btn-primary mt-6">
                  Parla con un consulente
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Partner process */}
        <section className="border-b border-zinc-800 bg-surface-900/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">HackSure partner Kaspersky</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
                Un percorso strutturato, dalla valutazione alla protezione operativa
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                Attraverso HackSure.it supportiamo le aziende in ogni fase del percorso di sicurezza
                informatica, offrendo un approccio consulenziale, strutturato e orientato alle reali
                esigenze del business.
              </p>
            </AnimateIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((item, i) => (
                <AnimateIn key={item.step} delay={i * 80}>
                  <div className="card-hover flex h-full flex-col p-6">
                    <span className="text-xs font-bold tracking-widest text-brand-600/70">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex text-sm font-medium text-brand-500 hover:text-brand-400"
                    >
                      {item.cta} →
                    </Link>
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
                Pronto a proteggere la tua azienda con Kaspersky?
              </h2>
              <p className="mt-3 text-zinc-400">
                Consulenza senza impegno: analizziamo il rischio e ti indichiamo la soluzione
                Kaspersky Next più adatta.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contatti" className="btn-primary">
                  Prenota una consulenza
                </Link>
                <Link href="/servizi/endpoint-security" className="btn-secondary">
                  Endpoint Security
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
