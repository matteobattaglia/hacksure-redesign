import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { ServiceDetail } from "@/components/ServiceDetail";
import { securityServices, getSecurityServiceBySlug } from "@/lib/data/services";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

const seoDescriptionBySlug: Record<string, string> = {
  "penetration-testing":
    "Scopri quanto è facile entrare nella tua azienda prima che lo facciano gli hacker. Penetration test professionale per PMI in Italia.",
  "notarizzazione-blockchain":
    "Notarizzazione documenti su blockchain con timestamp immutabile. Collaboriamo con studi legali qualificati. HackSure.",
  "perizia-truffe-online":
    "Sei stato truffato online? Call gratuita, analisi di fattibilità e perizia tecnica da presentare a legali e autorità.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getSecurityServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: seoDescriptionBySlug[slug] ?? service.description,
    path: `/servizi/${slug}`,
  });
}

export default async function ServizioDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getSecurityServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: service.title,
            description: service.description,
            path: `/servizi/${slug}`,
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Servizi", url: "/servizi" },
            { name: service.title, url: `/servizi/${slug}` },
          ]),
        ]}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Servizi", href: "/servizi" },
            { label: service.title },
          ]}
        />
        <div className="border-b border-zinc-800 bg-surface-900">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
              {service.category}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{service.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
              {service.longDescription}
            </p>
          </div>
        </div>

        <ServiceDetail service={service} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
