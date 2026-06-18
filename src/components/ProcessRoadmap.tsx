"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Analisi",
    desc: "Valutazione preliminare gratuita del profilo di rischio e degli obblighi normativi applicabili.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Progetto",
    desc: "Piano su misura con priorità, tempistiche chiare e deliverable definiti con il vostro team.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Esecuzione",
    desc: "Test, remediation e implementazione controllata con report tecnici e executive summary.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Monitoraggio",
    desc: "Supporto continuo, audit periodici e miglioramento costante della postura di sicurezza.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function ProcessRoadmap() {
  const { ref, visible } = useInView();

  return (
    <section className="relative overflow-hidden border-t border-zinc-800 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Metodologia</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Come lavoriamo</h2>
          <p className="mt-3 text-zinc-400">
            Un percorso strutturato in quattro fasi, dalla prima consulenza al monitoraggio continuo.
          </p>
        </div>

        <div ref={ref} className="relative mt-12 lg:mt-16">
          {/* Timeline connector — desktop */}
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-0.5 lg:block" aria-hidden="true">
            <div className="h-full w-full rounded-full bg-zinc-800" />
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-[1.2s] ease-out"
              style={{ width: visible ? "100%" : "0%" }}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className={`flex h-full flex-col transition-all duration-700 ease-out motion-reduce:transition-none ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
              >
                {/* Step node */}
                <div className="mb-5 flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                  <div
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      visible
                        ? "border-brand-500 bg-brand-600/20 text-brand-400 shadow-lg shadow-brand-600/20"
                        : "border-zinc-700 bg-surface-900 text-zinc-600"
                    }`}
                    style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms" }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-brand-600/60 lg:mt-4">
                    STEP {item.step}
                  </span>
                </div>

                {/* Card — equal height */}
                <div className="card-hover gradient-border flex min-h-[180px] flex-1 flex-col p-5 sm:min-h-[200px] lg:min-h-[220px]">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: visible ? "700ms" : "0ms" }}
        >
          <Link href="/contatti" className="btn-primary">
            Inizia con una valutazione gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
