import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export function HomeContact() {
  return (
    <section id="contatti" className="border-t border-zinc-800 bg-surface-900/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <AnimateIn>
          <p className="section-label">Contatti</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Parla con un esperto, senza impegno
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
            Risposta entro 24 ore lavorative. Nessun venditore, solo tecnici.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            {[
              "Valutazione preliminare gratuita",
              "Analisi degli obblighi normativi applicabili",
              "Stima trasparente dell'investimento",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <AnimateIn delay={120}>
          <ContactForm embedded />
        </AnimateIn>
      </div>
    </section>
  );
}
