import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export function HomeCta() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="card-hover gradient-border relative overflow-hidden p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-600/10 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">Sei sicuro di essere protetto?</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                  Ogni giorno le PMI italiane subiscono attacchi informatici. Una valutazione preliminare
                  gratuita permette di identificare vulnerabilità e obblighi normativi applicabili.
                </p>
              </div>
              <Link href="/contatti" className="btn-primary shrink-0">
                Richiedi valutazione
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
