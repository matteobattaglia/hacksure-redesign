"use client";

import { useMemo, useState } from "react";
import { partnerTypes } from "@/lib/data/partners";
import { ContactForm } from "@/components/ContactForm";
import { AnimateIn } from "@/components/AnimateIn";

type Props = {
  initialId?: string;
};

export function PartnerCollaborate({ initialId }: Props) {
  const initial = partnerTypes.find((p) => p.id === initialId)?.id ?? partnerTypes[0].id;
  const [selectedId, setSelectedId] = useState(initial);

  const selected = useMemo(
    () => partnerTypes.find((p) => p.id === selectedId) ?? partnerTypes[0],
    [selectedId],
  );

  const needById: Record<string, string> = {
    "studio-legale": "Collaborazione — Studio legale",
    "web-agency": "Collaborazione — Web agency",
    "fornitore-elettronica": "Collaborazione — Fornitore elettronica",
  };
  const needLabel = needById[selected.id] ?? `Collaborazione — ${selected.title}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <AnimateIn>
        <p className="section-label">Partnership</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Collabora con noi
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Seleziona la tua tipologia di attività. Costruiamo collaborazioni concrete con studi
          legali, web agency e fornitori di materiale elettronico.
        </p>
      </AnimateIn>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {partnerTypes.map((partner, i) => {
          const active = partner.id === selectedId;
          return (
            <AnimateIn key={partner.id} delay={i * 70}>
              <button
                type="button"
                onClick={() => setSelectedId(partner.id)}
                className={`card-hover flex h-full w-full flex-col p-6 text-left transition-all ${
                  active
                    ? "border-brand-500 bg-brand-600/10 shadow-lg shadow-brand-600/10"
                    : "hover:border-brand-600/40"
                }`}
                aria-pressed={active}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {partner.eyebrow}
                </span>
                <h2 className="mt-2 text-xl font-semibold text-white">{partner.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {partner.summary}
                </p>
                <span
                  className={`mt-5 text-sm font-medium ${active ? "text-brand-400" : "text-zinc-500"}`}
                >
                  {active ? "Selezionato" : "Seleziona →"}
                </span>
              </button>
            </AnimateIn>
          );
        })}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
        <AnimateIn>
          <div className="card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              {selected.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{selected.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{selected.description}</p>
            <ul className="mt-6 space-y-3">
              {selected.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-zinc-500">
              I dettagli operativi e commerciali si definiscono in una call dedicata, senza impegno.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">{selected.cta}</h2>
            <ContactForm
              key={selected.id}
              embedded
              defaultNeed={needLabel}
              needOptions={[
                "Collaborazione — Studio legale",
                "Collaborazione — Web agency",
                "Collaborazione — Fornitore elettronica",
              ]}
              subjectPrefix="[Hacksure Collaborazione]"
            />
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
