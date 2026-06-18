import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contatti",
  description: "Contatta HackSure per una valutazione preliminare gratuita di cybersecurity e compliance. Brescia, Italia.",
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Contatti"
          title="Richiedi una valutazione gratuita"
          description="Compilate il modulo: vi ricontattiamo entro 24 ore lavorative con un'analisi preliminare personalizzata."
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Email</h2>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-brand-500 hover:text-brand-400">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Telefono</h2>
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-zinc-300 hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Sede</h2>
                <p className="mt-2 text-zinc-400">{siteConfig.address}</p>
                <p className="mt-1 text-sm text-zinc-500">{siteConfig.legalName}</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm embedded />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
