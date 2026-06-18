import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative border-b border-zinc-800">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/shutterstock_2695394565-scaled.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/95 to-surface-950/80" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="section-label">Cybersecurity per PMI</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Sicurezza informatica a 360° per la tua azienda
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
        </div>

        <div className="relative hidden aspect-square max-w-md justify-self-end lg:block">
          <Image
            src="/assets/images/Sicurezza-Informatica.webp"
            alt="Sicurezza informatica HackSure"
            fill
            className="object-contain"
            sizes="448px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
