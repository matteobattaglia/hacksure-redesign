"use client";

import { useState } from "react";
import { faqs } from "@/lib/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
