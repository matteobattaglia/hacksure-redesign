import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { securityServices } from "@/lib/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Servizi Cybersecurity per PMI",
  description:
    "Penetration testing, notarizzazione blockchain, SOS Truffe Online, EDR Kaspersky e incident response per PMI. HackSure Brescia.",
  path: "/servizi",
  keywords: [
    "penetration testing PMI",
    "vulnerability assessment Italia",
    "notarizzazione blockchain",
    "SOS truffe online",
    "kaspersky partner",
    "consulenza cybersecurity",
  ],
});

export default function ServiziPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Servizi"
          title="Cybersecurity operativa per PMI"
          description="Dai test offensivi alla protezione endpoint Kaspersky, dalla notarizzazione blockchain a SOS Truffe Online: servizi professionali end-to-end."
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

          <Link
            href="/partner/kaspersky"
            className="card-hover mt-8 flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center"
          >
            <div className="shrink-0 rounded-lg border border-zinc-800 bg-black p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/partners/kaspersky-registered-partner.jpg"
                alt="Kaspersky Registered B2B Partner"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Partnership ufficiale
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Kaspersky Registered B2B Partner
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Pagina dedicata alle soluzioni Kaspersky implementate da HackSure per le PMI.
              </p>
            </div>
            <span className="text-sm font-medium text-brand-500">Vai alla pagina →</span>
          </Link>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
