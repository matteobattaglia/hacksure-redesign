import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { localizeHref, type Locale } from "@/lib/i18n/config";

type Props = {
  // Accepted for a uniform page-primitive API; the header renders only prop-provided copy.
  locale: Locale;
  label: string;
  title: string;
  description?: string;
};

export function PageHeader({ label, title, description }: Props) {
  return (
    <div className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-label">{label}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{description}</p>
          )}
        </AnimateIn>
      </div>
    </div>
  );
}

type BreadcrumbProps = {
  locale: Locale;
  items: { label: string; href?: string }[];
};

export function Breadcrumb({ locale, items }: BreadcrumbProps) {
  return (
    <nav className="border-b border-zinc-800/60 bg-surface-950" aria-label="Breadcrumb">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link
                  href={localizeHref(locale, item.href)}
                  className="transition-colors hover:text-brand-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-300">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

const ctaCopy = {
  it: {
    title: "Parliamo del tuo progetto",
    description:
      "Valutazione preliminare gratuita, senza impegno. Risposta entro 24 ore lavorative.",
    cta: "Richiedi consulenza",
  },
  en: {
    title: "Let's talk about your project",
    description:
      "Free preliminary assessment, with no commitment. Reply within 24 business hours.",
    cta: "Request a consultation",
  },
} as const;

export function CtaBanner({ locale }: { locale: Locale }) {
  const t = ctaCopy[locale];

  return (
    <section className="border-t border-zinc-800 bg-surface-900" data-nosnippet>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="text-xl font-semibold text-white">{t.title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{t.description}</p>
        </AnimateIn>
        <Link href={localizeHref(locale, "/contatti")} className="btn-primary shrink-0">
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
