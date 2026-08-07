"use client";

import Link from "next/link";
import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import { partnerTypes } from "@/lib/data/partners";
import { ContactForm } from "@/components/ContactForm";
import { AnimateIn } from "@/components/AnimateIn";

type Props = {
  initialId?: string;
};

const partnerIcons: Record<string, ReactNode> = {
  "studio-legale": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v18M4.5 7.5h15M6.75 7.5 4 14h5.5L6.75 7.5Zm10.5 0L14.5 14H20l-2.75-6.5ZM8 21h8"
      />
    </svg>
  ),
  "web-agency": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v8.5A1.75 1.75 0 0 1 19.25 17H4.75A1.75 1.75 0 0 1 3 15.25v-8.5ZM3 9h18M8 20h8"
      />
    </svg>
  ),
  "fornitore-elettronica": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5v-7ZM8 7V4.5M16 7V4.5M8 17v2.5M16 17v2.5M2 11h2M2 14h2M20 11h2M20 14h2"
      />
    </svg>
  ),
};

const needById: Record<string, string> = {
  "studio-legale": "Collaborazione — Studio legale",
  "web-agency": "Collaborazione — Web agency",
  "fornitore-elettronica": "Collaborazione — Fornitore elettronica",
};

const steps = [
  {
    step: "01",
    title: "Ci scrivi",
    desc: "Compili il modulo indicando la tua tipologia di attività e cosa vorresti costruire insieme.",
  },
  {
    step: "02",
    title: "Call conoscitiva",
    desc: "Ci confrontiamo su perimetro, modalità operative e condizioni commerciali. Senza impegno.",
  },
  {
    step: "03",
    title: "Partiamo",
    desc: "Definiamo il processo di lavoro e i riferimenti, poi attiviamo la collaborazione sui primi casi.",
  },
];

const reassurance = [
  "Risposta entro 24 ore lavorative",
  "Nessun impegno né vincolo di esclusiva",
  "NDA disponibile su richiesta",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600/15 text-brand-400">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function PartnerCollaborate({ initialId }: Props) {
  const initial = partnerTypes.find((p) => p.id === initialId)?.id ?? partnerTypes[0].id;
  const [selectedId, setSelectedId] = useState(initial);
  const detailRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => partnerTypes.find((p) => p.id === selectedId) ?? partnerTypes[0],
    [selectedId],
  );

  const select = useCallback((id: string) => {
    setSelectedId(id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const needLabel = needById[selected.id] ?? `Collaborazione — ${selected.title}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 via-transparent to-transparent" />
        <div className="mesh-bg absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimateIn>
            <p className="section-label">Partnership</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Collabora con{" "}
              <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                Hacksure
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              Costruiamo collaborazioni concrete con studi legali, web agency e fornitori di
              materiale elettronico. Scegli la tua tipologia di attività: ti mostriamo come
              lavoriamo insieme.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {reassurance.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-surface-950/60 px-3 py-1.5 text-xs text-zinc-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {item}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Selector */}
      <section className="border-b border-zinc-800 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex items-baseline gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-600/40 bg-brand-600/15 text-xs font-bold text-brand-400">
                1
              </span>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Che tipo di attività hai?
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Seleziona un profilo per vedere la proposta dedicata.
                </p>
              </div>
            </div>
          </AnimateIn>

          <div
            role="radiogroup"
            aria-label="Tipologia di attività"
            className="mt-8 grid gap-4 lg:grid-cols-3"
          >
            {partnerTypes.map((partner, i) => {
              const active = partner.id === selectedId;
              return (
                <AnimateIn key={partner.id} delay={i * 70}>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => select(partner.id)}
                    className={`group relative flex h-full w-full flex-col rounded-xl border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      active
                        ? "border-brand-500/70 bg-brand-600/10 shadow-lg shadow-brand-600/15"
                        : "border-zinc-800/80 bg-surface-900/80 hover:-translate-y-0.5 hover:border-brand-600/40 hover:bg-surface-800/80"
                    }`}
                  >
                    <span
                      className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-brand-500 bg-brand-600 text-white"
                          : "border-zinc-700 text-transparent group-hover:border-brand-600/50"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>

                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 ${
                        active
                          ? "border-brand-500/40 bg-brand-600/20 text-brand-300"
                          : "border-zinc-700 bg-surface-950 text-brand-500"
                      }`}
                    >
                      {partnerIcons[partner.id]}
                    </span>

                    <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-500">
                      {partner.eyebrow}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-white">
                      {partner.title}
                    </span>
                    <span className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                      {partner.summary}
                    </span>
                    <span
                      className={`mt-5 text-sm font-medium transition-colors ${
                        active ? "text-brand-400" : "text-zinc-500 group-hover:text-brand-500"
                      }`}
                    >
                      {active ? "Profilo selezionato" : "Seleziona questo profilo →"}
                    </span>
                  </button>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail + form */}
      <section ref={detailRef} className="scroll-mt-20 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex items-baseline gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-600/40 bg-brand-600/15 text-xs font-bold text-brand-400">
                2
              </span>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  La nostra proposta per {selected.title.toLowerCase()}
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Poi ci scrivi e fissiamo una call per i dettagli.
                </p>
              </div>
            </div>
          </AnimateIn>

          <div className="mt-8 grid gap-8 lg:grid-cols-5 lg:items-start lg:gap-10">
            <div className="lg:col-span-3">
              <AnimateIn key={`detail-${selected.id}`}>
                <div className="card gradient-border p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-500/40 bg-brand-600/15 text-brand-400">
                      {partnerIcons[selected.id]}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                        {selected.eyebrow}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">{selected.title}</h3>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                    {selected.description}
                  </p>

                  <div className="mt-7 border-t border-zinc-800 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Cosa ottieni
                    </p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selected.benefits.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                          <CheckIcon />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={80}>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {steps.map((item) => (
                    <div key={item.step} className="card-hover h-full p-5">
                      <span className="text-xs font-bold tracking-widest text-brand-600/70">
                        STEP {item.step}
                      </span>
                      <h4 className="mt-2 font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

            <div className="lg:col-span-2">
              <AnimateIn delay={120}>
                <div className="lg:sticky lg:top-24">
                  <div className="card gradient-border overflow-hidden">
                    <div className="border-b border-zinc-800 bg-surface-950/50 px-6 py-5">
                      <h3 className="text-lg font-semibold text-white">{selected.cta}</h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        Ti rispondiamo entro 24 ore lavorative con una proposta di call.
                      </p>
                    </div>
                    <div className="p-6">
                      <ContactForm
                        key={selected.id}
                        defaultNeed={needLabel}
                        needOptions={[
                          "Collaborazione — Studio legale",
                          "Collaborazione — Web agency",
                          "Collaborazione — Fornitore elettronica",
                        ]}
                        subjectPrefix="[Hacksure Collaborazione]"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs leading-relaxed text-zinc-500">
                    Preferisci scrivere direttamente?{" "}
                    <Link href="/contatti" className="text-brand-500 hover:text-brand-400">
                      Vai ai contatti
                    </Link>
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
