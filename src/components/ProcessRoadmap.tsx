"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { localizeHref } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const steps = [
  {
    step: "01",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    step: "03",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "04",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const copy = {
  it: {
    label: "Metodologia",
    heading: "Come lavoriamo",
    intro:
      "Un percorso strutturato in quattro fasi, dalla prima consulenza al monitoraggio continuo.",
    cta: "Inizia con una valutazione gratuita",
    steps: [
      {
        title: "Analisi",
        desc: "Valutazione preliminare gratuita del profilo di rischio e degli obblighi normativi applicabili.",
      },
      {
        title: "Progetto",
        desc: "Piano su misura con priorità, tempistiche chiare e deliverable definiti con il vostro team.",
      },
      {
        title: "Esecuzione",
        desc: "Test, remediation e implementazione controllata con report tecnici e executive summary.",
      },
      {
        title: "Monitoraggio",
        desc: "Supporto continuo, audit periodici e miglioramento costante della postura di sicurezza.",
      },
    ],
  },
  en: {
    label: "Methodology",
    heading: "How we work",
    intro:
      "A structured four-phase path, from the first consultation through to continuous monitoring.",
    cta: "Start with a free assessment",
    steps: [
      {
        title: "Analysis",
        desc: "A free preliminary assessment of your risk profile and of the regulatory obligations that apply to you.",
      },
      {
        title: "Plan",
        desc: "A tailored plan with clear priorities, timelines and deliverables defined together with your team.",
      },
      {
        title: "Execution",
        desc: "Testing, remediation and controlled implementation, with technical reports and an executive summary.",
      },
      {
        title: "Monitoring",
        desc: "Ongoing support, periodic audits and continuous improvement of your security posture.",
      },
    ],
  },
} as const;

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
  const locale = useLocale();

  const t = copy[locale];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">{t.label}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">{t.intro}</p>
        </div>

        <div ref={ref} className="relative mt-12 lg:mt-16">
          {/* Timeline dots — desktop only, above cards */}
          <div className="relative mb-6 hidden lg:block" aria-hidden="true">
            <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-zinc-800" />
            <div
              className="absolute left-[12.5%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-brand-600 to-brand-400 transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
              style={{ width: visible ? "75%" : "0%" }}
            />
            <div className="grid grid-cols-4">
              {steps.map((item, i) => (
                <div key={item.step} className="flex justify-center">
                  <div
                    className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-[border-color,color,background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      visible
                        ? "border-brand-500 bg-surface-950 text-brand-400"
                        : "border-zinc-700 bg-surface-950 text-zinc-600"
                    }`}
                    style={{ transitionDelay: visible ? `${i * 80 + 80}ms` : "0ms" }}
                  >
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((item, i) => (
              <div
                key={item.step}
                className="flex h-full flex-col transition-[opacity,transform] duration-[320ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translate3d(0,0,0) scale(1)" : "translate3d(0,12px,0) scale(0.98)",
                  transitionDelay: visible ? `${i * 70}ms` : "0ms",
                }}
              >
                <div className="card-hover gradient-border flex min-h-[200px] flex-1 flex-col p-5 sm:min-h-[220px] lg:min-h-[240px]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-[border-color,background-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        visible
                          ? "border-brand-500/40 bg-brand-600/15 text-brand-400"
                          : "border-zinc-700 bg-zinc-900 text-zinc-600"
                      }`}
                      style={{ transitionDelay: visible ? `${i * 70 + 40}ms` : "0ms" }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-brand-600/50 lg:hidden">
                      STEP {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{t.steps[i].title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{t.steps[i].desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-10 text-center transition-[opacity,transform] duration-[320ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : "translate3d(0,8px,0)",
            transitionDelay: visible ? "280ms" : "0ms",
          }}
        >
          <Link href={localizeHref(locale, "/contatti")} className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
