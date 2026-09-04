import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    brand: "Hacksure",
    titleStart: "Sicurezza informatica",
    titleAccent: "a 360°",
    titleEnd: "per la tua azienda",
    intro:
      "Proteggiamo la tua infrastruttura IT da attacchi informatici, vulnerabilità e rischi normativi. Analizziamo, testiamo e rafforziamo i sistemi prima che possano essere compromessi.",
    ctaPrimary: "Valutazione gratuita",
    ctaSecondary: "Autovalutazione compliance",
    imageAlt: "Cybersecurity e compliance HackSure per PMI italiane",
  },
  en: {
    brand: "Hacksure",
    titleStart: "End-to-end",
    titleAccent: "cybersecurity",
    titleEnd: "for your company",
    intro:
      "We protect your IT infrastructure from cyberattacks, vulnerabilities and regulatory risk. We assess, test and harden your systems before they can be compromised.",
    ctaPrimary: "Free assessment",
    ctaSecondary: "Compliance self-assessment",
    imageAlt: "HackSure cybersecurity and compliance for Italian SMEs",
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const href = (path: string) => localizeHref(locale, path);

  return (
    <section className="relative isolate min-h-[min(88vh,52rem)] overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/shutterstock_2695394565-scaled.jpg"
          alt=""
          fill
          priority
          quality={75}
          className="object-cover object-center opacity-[0.22]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/70 via-surface-950/85 to-surface-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/80 to-surface-950/40" />
        <div className="hero-glow absolute inset-0" />
        <div className="mesh-bg absolute inset-0 opacity-30" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:min-h-[min(88vh,52rem)] lg:justify-center lg:px-8 lg:pb-28 lg:pt-32">
        <AnimateIn>
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-brand-400 uppercase">
            {t.brand}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {t.titleStart}{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              {t.titleAccent}
            </span>{" "}
            {t.titleEnd}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={href("/contatti")} className="btn-primary">
              {t.ctaPrimary}
            </Link>
            <Link href={href("/compliance")} className="btn-secondary">
              {t.ctaSecondary}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
