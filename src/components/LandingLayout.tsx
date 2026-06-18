import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type LandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type RelatedLink = { label: string; href: string };

type Props = {
  label: string;
  title: string;
  intro: string;
  path: string;
  sections: LandingSection[];
  related: RelatedLink[];
};

export function LandingLayout({ label, title, intro, path, sections, related }: Props) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: title, url: path },
        ])}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label }]} />

        <div className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{label}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">{intro}</p>
              <Link href="/contatti" className="btn-primary mt-6">
                Valutazione gratuita
              </Link>
            </AnimateIn>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <AnimateIn key={section.heading} delay={i * 40}>
              <section className="mb-10">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-zinc-400">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-base text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </AnimateIn>
          ))}

          <div className="card-hover gradient-border my-12 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Non sai da dove iniziare?</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Una valutazione preliminare gratuita ti dice esattamente cosa fare, senza impegno.
              </p>
            </div>
            <Link href="/contatti" className="btn-primary shrink-0">
              Richiedi consulenza gratuita
            </Link>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Approfondimenti correlati
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-brand-600/50 hover:text-brand-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contatti" className="btn-primary">
                Parla con un esperto
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
