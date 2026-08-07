import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    label: "Contatti",
    title: "Parla con un esperto, senza impegno",
    text: "Risposta entro 24 ore lavorative. Nessun venditore, solo tecnici.",
    bullets: [
      "Valutazione preliminare gratuita",
      "Analisi degli obblighi normativi applicabili",
      "Stima trasparente dell'investimento",
    ],
  },
  en: {
    label: "Contact",
    title: "Talk to an expert, no commitment",
    text: "Reply within 24 working hours. No salespeople, only engineers.",
    bullets: [
      "Free preliminary assessment",
      "Analysis of the regulatory obligations that apply to you",
      "A transparent estimate of the investment",
    ],
  },
} as const;

export function HomeContact({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="contatti" className="border-t border-zinc-800 bg-surface-900/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <AnimateIn>
          <p className="section-label">{t.label}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
            {t.text}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            {t.bullets.map((item) => (
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
