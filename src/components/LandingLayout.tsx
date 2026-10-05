import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import { contactNeeds } from "@/lib/contact-needs";
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
  /** Preselected value of "Di cosa hai bisogno?" in the on-page form. */
  defaultNeed?: string;
};

const copy = {
  it: {
    heroCta: "Valutazione gratuita",
    grantsCta: "Richiedi consulenza bandi",
    formTitle: "Di cosa hai bisogno?",
    formDescription: "Indica la richiesta. Ti ricontattiamo entro 24 ore lavorative.",
    relatedHeading: "Approfondimenti correlati",
    finalCta: "Compila il modulo",
  },
  en: {
    heroCta: "Free assessment",
    grantsCta: "Request grant advice",
    formTitle: "What do you need?",
    formDescription: "Tell us what you need. We reply within 24 working hours.",
    relatedHeading: "Related insights",
    finalCta: "Fill in the form",
  },
} as const;

export function LandingLayout({
  locale,
  label,
  title,
  intro,
  path,
  sections,
  related,
  defaultNeed,
}: Props) {
  const t = copy[locale];
  const grantsNeed = contactNeeds[locale].grants;
  const selectedNeed = defaultNeed ?? grantsNeed;
  const heroCta = selectedNeed === grantsNeed ? t.grantsCta : t.heroCta;

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
              <a href="#richiesta" className="btn-primary mt-6">
                {heroCta}
              </a>
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

          <div id="richiesta" className="my-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-white">{t.formTitle}</h2>
            <p className="mt-2 text-sm text-zinc-400">{t.formDescription}</p>
            <div className="mt-6">
              <ContactForm embedded defaultNeed={selectedNeed} />
            </div>
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
              <a href="#richiesta" className="btn-primary">
                {t.finalCta}
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
