import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { securityServices } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Servizi di Cybersecurity",
  description:
    "Vulnerability assessment, penetration testing, network security, EDR/XDR, security awareness e incident response per PMI.",
  path: "/servizi",
});

export default function ServiziPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Servizi"
          title="Cybersecurity operativa per PMI"
          description="Servizi professionali per identificare vulnerabilità, simulare attacchi, proteggere reti e endpoint, e rispondere agli incidenti di sicurezza."
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityServices.map((service) => (
              <article key={service.slug} className="card flex flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {service.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-1 border-t border-zinc-800 pt-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-xs text-zinc-500">— {f}</li>
                  ))}
                </ul>
                <Link
                  href={`/servizi/${service.slug}`}
                  className="mt-5 text-sm font-medium text-brand-500 hover:text-brand-400"
                >
                  Scopri il servizio →
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
