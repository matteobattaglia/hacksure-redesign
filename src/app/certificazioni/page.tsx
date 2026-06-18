import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import {
  certifications,
  certCategories,
  getCertificationsByCategory,
  type CertCategory,
} from "@/lib/data/certifications";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Certificazioni",
  description:
    "Certificazioni professionali HackSure: eJPT, eCPPT, CompTIA Security+, Network+, CNVP, PenTest+, SecurityX, Cisco CCNA, Sophos e EICTA IS.",
  path: "/certificazioni",
});

const categoryOrder: CertCategory[] = ["offensive", "comptia", "vendor"];

export default function CertificazioniPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          label="Certificazioni"
          title="Competenze certificate del team"
          description={`${certifications.length} certificazioni internazionali attive in offensive security, standard CompTIA e piattaforme enterprise — garanzia di metodologie verificate e aggiornate.`}
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {categoryOrder.map((cat) => {
            const items = getCertificationsByCategory(cat);
            const meta = certCategories[cat];
            return (
              <section key={cat} className="mb-14 last:mb-0">
                <AnimateIn>
                  <h2 className="text-lg font-semibold text-white">{meta.label}</h2>
                  <p className="mt-1 text-sm text-zinc-400">{meta.description}</p>
                </AnimateIn>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((cert, i) => (
                    <AnimateIn key={cert.slug} delay={i * 50}>
                      <Link
                        href={`/certificazioni/${cert.slug}`}
                        className="card-hover flex items-start gap-4 p-5"
                      >
                        <CertBadge src={cert.image} alt={cert.alt} size={72} />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-white">{cert.name}</h3>
                          {cert.subtitle && (
                            <p className="text-xs text-zinc-500">{cert.subtitle}</p>
                          )}
                          <p className="mt-0.5 text-xs font-medium text-brand-500">{cert.issuer}</p>
                          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{cert.description}</p>
                        </div>
                      </Link>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
