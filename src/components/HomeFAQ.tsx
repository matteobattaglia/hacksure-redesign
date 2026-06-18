"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";
import { homeFaqs } from "@/lib/data/faq";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-label">Domande frequenti</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Le domande che ci fanno tutti gli imprenditori
          </h2>
          <p className="mt-3 text-zinc-400">
            Risposte semplici, senza tecnicismi, alle paure più comuni sulla sicurezza informatica.
          </p>
        </AnimateIn>

        <div className="mt-8 space-y-2">
          {homeFaqs.map((faq, index) => (
            <div key={faq.question} className="card overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-white">{faq.question}</span>
                <svg
                  className={`h-4 w-4 shrink-0 text-zinc-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-zinc-800 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
                  <Link
                    href={faq.ctaHref}
                    className="mt-3 inline-flex text-sm font-medium text-brand-500 hover:text-brand-400"
                  >
                    {faq.ctaLabel} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
