import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { getFrameworks } from "@/lib/data/localized";
import { createMetadata } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
    label: string;
    title: string;
    description: string;
    details: string;
  }
> = {
  it: {
    seoTitle: "Compliance e Normative per PMI",
    seoDescription:
      "Conformità NIS2, GDPR, ISO 27001, DORA, PCI DSS e SOC 2 per PMI italiane. Questionari di autovalutazione gratuiti e consulenza dedicata. HackSure, Brescia.",
    keywords: [
      "compliance NIS2 PMI",
      "conformità GDPR aziende",
      "ISO 27001 piccole imprese",
      "autovalutazione NIS2 gratuita",
      "consulenza compliance Italia",
    ],
    label: "Compliance",
    title: "Conformità normativa e autovalutazione",
    description:
      "Framework normativi con questionari di autovalutazione gratuiti. Identificate gap, priorità di intervento e il percorso verso la piena conformità.",
    details: "Dettagli e autovalutazione →",
  },
  en: {
    seoTitle: "Compliance and Regulations for SMEs",
    seoDescription:
      "NIS2, GDPR, ISO 27001, DORA, PCI DSS and SOC 2 compliance for small and medium businesses in Italy. Free self-assessment questionnaires and dedicated consulting. Hacksure, Brescia.",
    keywords: [
      "NIS2 compliance for SMEs",
      "GDPR compliance for companies",
      "ISO 27001 small business",
      "free NIS2 self-assessment",
      "compliance consulting Italy",
    ],
    label: "Compliance",
    title: "Regulatory compliance and self-assessment",
    description:
      "Regulatory frameworks with free self-assessment questionnaires. Identify your gaps, the priorities to address and the path to full compliance.",
    details: "Details and self-assessment →",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: "/compliance",
    keywords: t.keywords,
    locale,
  });
}

export default async function CompliancePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];
  const frameworks = getFrameworks(locale);

  return (
    <>
      <Header />
      <main>
        <PageHeader
          locale={locale}
          label={t.label}
          title={t.title}
          description={t.description}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((framework) => (
              <article key={framework.slug} className="card flex flex-col p-6">
                {framework.deadline && (
                  <span className="mb-3 inline-block w-fit rounded bg-brand-600/10 px-2 py-0.5 text-xs font-medium text-brand-400">
                    {framework.deadline}
                  </span>
                )}
                <h2 className="text-lg font-semibold text-white">{framework.title}</h2>
                <p className="mt-1 text-xs text-zinc-500">{framework.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {framework.description}
                </p>
                <ul className="mt-4 space-y-1 border-t border-zinc-800 pt-4">
                  {framework.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="text-xs text-zinc-500">— {d}</li>
                  ))}
                </ul>
                <Link
                  href={localizeHref(locale, `/compliance/${framework.slug}`)}
                  className="mt-5 text-sm font-medium text-brand-500 hover:text-brand-400"
                >
                  {t.details}
                </Link>
              </article>
            ))}
          </div>
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
