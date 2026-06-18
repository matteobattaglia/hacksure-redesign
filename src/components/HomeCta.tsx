import Link from "next/link";

export function HomeCta() {
  return (
    <section className="border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center lg:p-10">
          <div>
            <h2 className="text-xl font-semibold text-white">Sei sicuro di essere protetto?</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Ogni giorno le PMI italiane subiscono attacchi informatici. Una valutazione preliminare
              gratuita permette di identificare vulnerabilità e obblighi normativi applicabili.
            </p>
          </div>
          <Link href="/contatti" className="btn-primary shrink-0">
            Richiedi valutazione
          </Link>
        </div>
      </div>
    </section>
  );
}
