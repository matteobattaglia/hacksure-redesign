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
          quality={75}
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/95 to-surface-950/70" />
        <div className="hero-glow absolute inset-0" />
        <div className="mesh-bg absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <AnimateIn>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Sicurezza informatica{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              a 360°
            </span>{" "}
            per la tua azienda
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
              Autovalutazione compliance
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={150} className="relative hidden lg:block">
          <div className="animate-float relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-brand-600/10 blur-3xl" />
            <Image
              src="/assets/images/Sicurezza-Informatica.webp"
              alt="Cybersecurity e compliance HackSure per PMI italiane"
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
