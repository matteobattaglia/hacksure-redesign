import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { localizeHref, type Locale } from "@/lib/i18n/config";

export type LandingSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type RelatedLink = { label: string; href: string };

type Props = {
  locale: Locale;
  label: string;
  title: string;
  intro: string;
  path: string;
  sections: LandingSection[];
  related: RelatedLink[];
};

const copy = {
  it: {
    heroCta: "Valutazione gratuita",
    boxTitle: "Non sai da dove iniziare?",
    boxDescription:
      "Una valutazione preliminare gratuita ti dice esattamente cosa fare, senza impegno.",
    boxCta: "Richiedi consulenza gratuita",
    relatedHeading: "Approfondimenti correlati",
    finalCta: "Parla con un esperto",
  },
  en: {
    heroCta: "Free assessment",
    boxTitle: "Not sure where to start?",
    boxDescription:
      "A free preliminary assessment tells you exactly what to do, with no commitment.",
    boxCta: "Request a free consultation",
    relatedHeading: "Related insights",
    finalCta: "Talk to an expert",
  },
} as const;

export function LandingLayout({ locale, label, title, intro, path, sections, related }: Props) {
  const t = copy[locale];
  const contactHref = localizeHref(locale, "/contatti");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", url: "/" },
            { name: title, url: path },
          ],
          locale,
        )}
      />
      <Header />
      <main>
        <Breadcrumb locale={locale} items={[{ label: "Home", href: "/" }, { label }]} />

        <div className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{label}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">{intro}</p>
              <Link href={contactHref} className="btn-primary mt-6">
                {t.heroCta}
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
              <h2 className="text-lg font-semibold text-white">{t.boxTitle}</h2>
              <p className="mt-1 text-sm text-zinc-400">{t.boxDescription}</p>
            </div>
            <Link href={contactHref} className="btn-primary shrink-0">
              {t.boxCta}
            </Link>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {t.relatedHeading}
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={localizeHref(locale, link.href)}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-brand-600/50 hover:text-brand-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href={contactHref} className="btn-primary">
                {t.finalCta}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
