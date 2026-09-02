import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { ComplianceQuestionnaire } from "@/components/ComplianceQuestionnaire";
import { complianceFrameworks } from "@/lib/data/compliance";
import { getFrameworkBySlug } from "@/lib/data/localized";
import { createMetadata } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return complianceFrameworks.map((f) => ({ slug: f.slug }));
}

const seoDescriptionBySlug: Record<Locale, Record<string, string>> = {
  it: {
    gdpr: "Multe GDPR fino a 20 milioni o 4% del fatturato: verifica gratis se la tua azienda è in regola e come evitarle.",
    nis2: "Sei obbligato dalla NIS2? Verifica gratis in 5 minuti se la tua azienda deve adeguarsi ed evita le sanzioni.",
    "iso-27001":
      "Percorso ISO 27001 per PMI: valuta la maturità del tuo SGSI e preparati alla certificazione con un approccio strutturato.",
    dora: "Compliance DORA per enti finanziari e fornitori ICT: valuta la resilienza operativa digitale e il rischio ICT.",
    "pci-dss":
      "PCI DSS gap analysis e gap assessment: verifica la conformità sui pagamenti con carta e proteggi i dati dei titolari.",
    soc2: "SOC 2 readiness per SaaS e cloud: valuta i controlli su sicurezza, disponibilità, integrità e privacy.",
  },
  en: {
    gdpr: "GDPR fines up to €20M or 4% of turnover: check for free whether your company is compliant and how to avoid penalties.",
    nis2: "Does NIS2 apply to you? Check for free in 5 minutes whether your company must comply and avoid penalties.",
    "iso-27001":
      "ISO 27001 journey for SMEs: assess your ISMS maturity and prepare for certification with a structured approach.",
    dora: "DORA compliance for financial entities and critical ICT providers: assess digital operational resilience and ICT risk.",
    "pci-dss":
      "PCI DSS gap analysis and gap assessment: verify card payment compliance and protect cardholder data.",
    soc2: "SOC 2 readiness for SaaS and cloud: assess controls for security, availability, integrity and privacy.",
  },
};

const copy: Record<
  Locale,
  {
    home: string;
    compliance: string;
    benefits: string;
    deliverables: string;
    questionnaire: string;
    titleSuffix: string;
  }
> = {
  it: {
    home: "Home",
    compliance: "Compliance",
    benefits: "Benefici",
    deliverables: "Deliverable",
    questionnaire: "Questionario di autovalutazione",
    titleSuffix: "Compliance",
  },
  en: {
    home: "Home",
    compliance: "Compliance",
    benefits: "Benefits",
    deliverables: "Deliverables",
    questionnaire: "Self-assessment questionnaire",
    titleSuffix: "Compliance",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const framework = getFrameworkBySlug(locale, slug);
  if (!framework) return {};

  return createMetadata({
    title: `${framework.title} — ${copy[locale].titleSuffix}`,
    description: seoDescriptionBySlug[locale][slug] ?? framework.description,
    path: `/compliance/${slug}`,
    locale,
  });
}

export default async function ComplianceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const framework = getFrameworkBySlug(locale, slug);
  if (!framework) notFound();

  const t = copy[locale];

  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          locale={locale}
          items={[
            { label: t.home, href: "/" },
            { label: t.compliance, href: "/compliance" },
            { label: framework.title },
          ]}
        />
        <div className="border-b border-zinc-800 bg-surface-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="section-label">{framework.subtitle}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{framework.title}</h1>
            <p className="mt-4 max-w-3xl text-zinc-400">{framework.longDescription ?? framework.description}</p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.benefits}</h2>
              <ul className="mt-4 space-y-2">
                {framework.benefits.map((b) => (
                  <li key={b} className="text-sm text-zinc-400">— {b}</li>
                ))}
              </ul>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.deliverables}</h2>
              <ul className="mt-4 space-y-2">
                {framework.deliverables.map((d) => (
                  <li key={d} className="text-sm text-zinc-400">— {d}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-lg font-semibold text-white">{t.questionnaire}</h2>
              <ComplianceQuestionnaire framework={framework} />
            </div>
          </div>
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
