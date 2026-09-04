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
    <section className="border-b border-white/[0.06] bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-white/[0.06]">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 50}>
              <div className="px-2 text-center lg:px-8 lg:text-left">
                <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-brand-500 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
