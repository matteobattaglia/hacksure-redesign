import { AnimateIn } from "@/components/AnimateIn";
import type { Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    stats: [
      { value: "10+", label: "Certificazioni attive" },
      { value: "6", label: "Framework compliance" },
      { value: "360°", label: "Copertura sicurezza" },
      { value: "24h", label: "Tempo di risposta" },
    ],
  },
  en: {
    stats: [
      { value: "10+", label: "Active certifications" },
      { value: "6", label: "Compliance frameworks" },
      { value: "360°", label: "Security coverage" },
      { value: "24h", label: "Response time" },
    ],
  },
} as const;

export function StatsBar({ locale }: { locale: Locale }) {
  const stats = copy[locale].stats;

  return (
    <section className="border-b border-zinc-800 bg-surface-900/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-zinc-800/60 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="px-4 text-center lg:px-6 lg:text-left">
                <p className="text-2xl font-bold tabular-nums text-brand-500 lg:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
