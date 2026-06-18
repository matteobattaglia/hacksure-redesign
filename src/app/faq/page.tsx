import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { FAQ } from "@/components/FAQ";
import { faqs } from "@/lib/data/faq";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description: "Domande frequenti sui servizi di cybersecurity HackSure: vulnerability assessment, pentest, NIS2, GDPR e altro.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Header />
      <main>
        <PageHeader
          label="Supporto"
          title="Domande frequenti"
          description="Risposte alle domande più comuni sui nostri servizi. Per approfondimenti, contattateci per una valutazione gratuita."
        />
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <FAQ />
        </div>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
