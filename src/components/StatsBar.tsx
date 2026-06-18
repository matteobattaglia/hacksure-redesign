import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

const stats = [
  { value: "10+", label: "Certificazioni attive" },
  { value: "6", label: "Framework compliance" },
  { value: "360°", label: "Copertura sicurezza" },
  { value: "24h", label: "Tempo di risposta" },
];

export function StatsBar() {
  return (
    <section className="border-b border-zinc-800 bg-surface-900/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-semibold text-brand-500 lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { step: "01", title: "Analisi", desc: "Valutazione preliminaria gratuita del profilo di rischio e degli obblighi normativi." },
    { step: "02", title: "Progetto", desc: "Piano su misura con priorità, tempistiche e deliverable chiari." },
    { step: "03", title: "Esecuzione", desc: "Test, remediation e implementazione controllata con report dettagliati." },
    { step: "04", title: "Monitoraggio", desc: "Supporto continuo, audit periodici e miglioramento della postura di sicurezza." },
  ];

  return (
    <section className="border-t border-zinc-800 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-label">Metodologia</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Come lavoriamo</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Un processo strutturato e trasparente, dalla prima consulenza al monitoraggio continuo.
          </p>
        </AnimateIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <AnimateIn key={item.step} delay={i * 100}>
              <div className="card-hover group relative overflow-hidden p-6">
                <span className="text-3xl font-bold text-brand-600/30 transition-colors group-hover:text-brand-500/50">
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200} className="mt-8 text-center">
          <Link href="/contatti" className="btn-primary">
            Inizia con una valutazione gratuita
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
