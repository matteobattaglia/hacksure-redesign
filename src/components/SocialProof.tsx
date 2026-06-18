import { AnimateIn } from "@/components/AnimateIn";
import { certifications } from "@/lib/data/certifications";

const stats = [
  { value: "10+", label: "PMI protette" },
  { value: "500+", label: "Vulnerabilità identificate" },
  { value: "8+", label: "Anni di esperienza" },
  { value: `${certifications.length}`, label: "Certificazioni attive" },
];

export function SocialProof() {
  return (
    <section className="border-t border-zinc-800 bg-surface-900/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl font-bold tabular-nums text-brand-500 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
