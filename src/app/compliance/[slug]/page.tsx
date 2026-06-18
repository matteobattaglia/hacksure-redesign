import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { ComplianceQuestionnaire } from "@/components/ComplianceQuestionnaire";
import { complianceFrameworks, getComplianceBySlug } from "@/lib/data/compliance";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return complianceFrameworks.map((f) => ({ slug: f.slug }));
}

const seoDescriptionBySlug: Record<string, string> = {
  gdpr: "Evita le multe del Garante. Scopri se sei in regola con il GDPR e proteggi i dati della tua azienda.",
  nis2: "Sei obbligato dalla NIS2? Verifica gratis in 5 minuti se la tua azienda deve adeguarsi ed evita le sanzioni.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const framework = getComplianceBySlug(slug);
  if (!framework) return {};
  return createMetadata({
    title: `${framework.title} — Compliance`,
    description: seoDescriptionBySlug[slug] ?? framework.description,
    path: `/compliance/${slug}`,
  });
}

export default async function ComplianceDetailPage({ params }: Props) {
  const { slug } = await params;
  const framework = getComplianceBySlug(slug);
  if (!framework) notFound();

  return (
    <>
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Compliance", href: "/compliance" },
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
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Benefici</h2>
              <ul className="mt-4 space-y-2">
                {framework.benefits.map((b) => (
                  <li key={b} className="text-sm text-zinc-400">— {b}</li>
                ))}
              </ul>
              <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-zinc-400">Deliverable</h2>
              <ul className="mt-4 space-y-2">
                {framework.deliverables.map((d) => (
                  <li key={d} className="text-sm text-zinc-400">— {d}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-lg font-semibold text-white">Questionario di autovalutazione</h2>
              <ComplianceQuestionnaire framework={framework} />
            </div>
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
