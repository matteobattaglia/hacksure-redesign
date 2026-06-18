import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/shutterstock_2695394565-scaled.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/95 to-surface-950/70" />
        <div className="hero-glow absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <AnimateIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-600/30 bg-brand-600/10 px-3 py-1 text-xs font-medium text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Cybersecurity per PMI italiane
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Sicurezza informatica{" "}
            <span className="text-brand-400">a 360°</span> per la tua azienda
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400">
            Proteggiamo la tua infrastruttura IT da attacchi informatici, vulnerabilità e rischi
            normativi. Analizziamo, testiamo e rafforziamo i sistemi prima che possano essere
            compromessi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contatti" className="btn-primary">
              Valutazione gratuita
            </Link>
            <Link href="/compliance" className="btn-secondary">
              Compliance e normative
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={150} className="relative hidden lg:block">
          <div className="animate-float relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-2xl bg-brand-600/5 blur-3xl" />
            <Image
              src="/assets/images/Sicurezza-Informatica.webp"
              alt="Sicurezza informatica HackSure"
              fill
              className="relative object-contain drop-shadow-2xl"
              sizes="448px"
              priority
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
