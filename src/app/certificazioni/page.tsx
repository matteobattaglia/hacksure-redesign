import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { certifications } from "@/lib/data/certifications";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Certificazioni",
  description:
    "Certificazioni professionali del team HackSure: CompTIA Security+, Network+, PenTest+, eCPPT e C|VNP.",
  path: "/certificazioni",
});

export default function CertificazioniPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Certificazioni"
          title="Competenze certificate del team"
          description="Il team HackSure possiede certificazioni internazionali riconosciute nel settore cybersecurity, a garanzia di metodologie verificate e aggiornate."
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Link
                key={cert.slug}
                href={`/certificazioni/${cert.slug}`}
                className="card flex items-start gap-5 p-6 transition-colors hover:border-zinc-700"
              >
                <div className="relative h-16 w-16 shrink-0">
                  <Image src={cert.image} alt={cert.alt} fill className="object-contain" sizes="64px" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">{cert.name}</h2>
                  <p className="text-xs text-brand-500">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-zinc-400">{cert.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
