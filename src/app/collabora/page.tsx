import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { PartnerCollaborate } from "@/components/PartnerCollaborate";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";

const path = "/collabora";

export const metadata: Metadata = createMetadata({
  title: "Collabora con noi",
  description:
    "Partnership Hacksure per studi legali, web agency white label e fornitori di materiale elettronico. Collabora con noi e cresci insieme.",
  path,
  keywords: [
    "collaborazione cybersecurity",
    "partnership studio legale forensics",
    "white label security web agency",
    "fornitore hardware sicurezza",
    "partner hacksure",
  ],
});

type Props = {
  searchParams: Promise<{ tipo?: string }>;
};

export default async function CollaboraPage({ searchParams }: Props) {
  const { tipo } = await searchParams;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Collabora con noi", url: path },
        ])}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Collabora con noi" }]} />
        <PartnerCollaborate initialId={tipo} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
