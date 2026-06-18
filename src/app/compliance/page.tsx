import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { complianceFrameworks } from "@/lib/data/compliance";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Compliance e Normative",
  description:
    "Servizi di conformità normativa per PMI: NIS2, GDPR, ISO 27001, DORA, PCI DSS, SOC 2. Questionari di autovalutazione gratuiti.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Compliance"
          title="Conformità normativa e autovalutazione"
          description="Framework normativi con questionari di autovalutazione gratuiti. Identificate gap, priorità di intervento e il percorso verso la piena conformità."
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework) => (
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
                  href={`/compliance/${framework.slug}`}
                  className="mt-5 text-sm font-medium text-brand-500 hover:text-brand-400"
                >
                  Dettagli e autovalutazione →
                </Link>
              </article>
            ))}
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
