import { AnimateIn } from "@/components/AnimateIn";
import { getCertifications } from "@/lib/data/localized";
import type { Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    smes: "PMI protette",
    vulnerabilities: "Vulnerabilità identificate",
    experience: "Anni di esperienza",
    certifications: "Certificazioni attive",
  },
  en: {
    smes: "SMEs protected",
    vulnerabilities: "Vulnerabilities identified",
    experience: "Years of experience",
    certifications: "Active certifications",
  },
} as const;

export function SocialProof({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const stats = [
    { value: "10+", label: t.smes },
    { value: "500+", label: t.vulnerabilities },
    { value: "8+", label: t.experience },
    { value: `${getCertifications(locale).length}`, label: t.certifications },
  ];

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
