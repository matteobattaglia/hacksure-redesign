import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { PartnerCollaborate } from "@/components/PartnerCollaborate";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/config";

const path = "/collabora";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tipo?: string }>;
};

const copy: Record<
  Locale,
  { seoTitle: string; seoDescription: string; keywords: string[]; home: string; title: string }
> = {
  it: {
    seoTitle: "Collabora con noi",
    seoDescription:
      "Partnership Hacksure per studi legali, web agency white label e fornitori di materiale elettronico. Collabora con noi e cresci insieme.",
    keywords: [
      "collaborazione cybersecurity",
      "partnership studio legale forensics",
      "white label security web agency",
      "fornitore hardware sicurezza",
      "partner hacksure",
    ],
    home: "Home",
    title: "Collabora con noi",
  },
  en: {
    seoTitle: "Partner with us",
    seoDescription:
      "Hacksure partnerships for law firms, white label web agencies and electronics suppliers. Partner with us and grow together.",
    keywords: [
      "cybersecurity partnership",
      "law firm digital forensics partner",
      "white label security web agency",
      "security hardware supplier",
      "hacksure partner",
    ],
    home: "Home",
    title: "Partner with us",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path,
    keywords: t.keywords,
    locale,
  });
}

export default async function CollaboraPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { tipo } = await searchParams;
  const t = copy[locale];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.home, url: "/" },
            { name: t.title, url: path },
          ],
          locale,
        )}
      />
      <Header />
      <main>
        <Breadcrumb
          locale={locale}
          items={[{ label: t.home, href: "/" }, { label: t.title }]}
        />
        <PartnerCollaborate initialId={tipo} />
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
