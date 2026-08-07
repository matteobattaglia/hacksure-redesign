import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { certifications } from "@/lib/data/certifications";
import { getCertCategories, getCertificationBySlug } from "@/lib/data/localized";
import { createMetadata } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

const copy: Record<
  Locale,
  { home: string; certifications: string; skills: string; cta: string }
> = {
  it: {
    home: "Home",
    certifications: "Certificazioni",
    skills: "Competenze validate",
    cta: "Parla con un consulente certificato",
  },
  en: {
    home: "Home",
    certifications: "Certifications",
    skills: "Validated skills",
    cta: "Talk to a certified consultant",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const cert = getCertificationBySlug(locale, slug);
  if (!cert) return {};

  return createMetadata({
    title: cert.name,
    description: cert.description,
    path: `/certificazioni/${slug}`,
    locale,
  });
}

export default async function CertificazioneDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const cert = getCertificationBySlug(locale, slug);
  if (!cert) notFound();

  const t = copy[locale];
  const categoryLabel = getCertCategories(locale)[cert.category].label;

  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          locale={locale}
          items={[
            { label: t.home, href: "/" },
            { label: t.certifications, href: "/certificazioni" },
            { label: cert.name },
          ]}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <AnimateIn className="flex flex-col items-center lg:items-start">
              <CertBadge src={cert.image} alt={cert.alt} size={140} className="p-2" />
              <p className="mt-4 text-sm font-medium text-brand-500">{cert.issuer}</p>
              <span className="mt-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                {categoryLabel}
              </span>
            </AnimateIn>
            <AnimateIn delay={100} className="lg:col-span-2">
              <h1 className="text-3xl font-semibold text-white">{cert.name}</h1>
              {cert.subtitle && (
                <p className="mt-1 text-lg text-zinc-400">{cert.subtitle}</p>
              )}
              <p className="mt-5 leading-relaxed text-zinc-400">{cert.longDescription}</p>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {t.skills}
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {cert.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-brand-500" />
                    {skill}
                  </li>
                ))}
              </ul>
              <Link href={localizeHref(locale, "/contatti")} className="btn-primary mt-8 inline-flex">
                {t.cta}
              </Link>
            </AnimateIn>
          </div>
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
