import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServiceBySlug } from "@/lib/data/localized";
import { securityServices } from "@/lib/data/services";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return securityServices.map((s) => ({ slug: s.slug }));
}

const seoDescriptionBySlug: Record<Locale, Record<string, string>> = {
  it: {
    "penetration-testing":
      "Scopri quanto è facile entrare nella tua azienda prima che lo facciano gli hacker. Penetration test professionale per PMI in Italia.",
    "notarizzazione-blockchain":
      "Notarizzazione documenti su blockchain con timestamp immutabile. Collaboriamo con studi legali qualificati. HackSure.",
    "perizia-truffe-online":
      "SOS Truffe Online: call gratuita, analisi di fattibilità e perizia tecnica da presentare a legali e autorità.",
  },
  en: {
    "penetration-testing":
      "Find out how easy it is to break into your company before someone else does. Professional penetration testing for SMEs in Italy.",
    "notarizzazione-blockchain":
      "Notarize documents on blockchain with an immutable timestamp. Delivered with qualified law firms. Hacksure.",
    "perizia-truffe-online":
      "Online Fraud Response: free call, feasibility analysis and an expert technical report for lawyers and authorities.",
  },
};

const breadcrumbLabels: Record<Locale, { home: string; services: string }> = {
  it: { home: "Home", services: "Servizi" },
  en: { home: "Home", services: "Services" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const service = getServiceBySlug(locale, slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: seoDescriptionBySlug[locale][slug] ?? service.description,
    path: `/servizi/${slug}`,
    locale,
  });
}

export default async function ServizioDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const labels = breadcrumbLabels[locale];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: service.title,
            description: service.description,
            path: `/servizi/${slug}`,
            locale,
          }),
          breadcrumbJsonLd(
            [
              { name: labels.home, url: "/" },
              { name: labels.services, url: "/servizi" },
              { name: service.title, url: `/servizi/${slug}` },
            ],
            locale,
          ),
        ]}
      />
      <Header />
      <main>
        <Breadcrumb
          locale={locale}
          items={[
            { label: labels.home, href: "/" },
            { label: labels.services, href: "/servizi" },
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

        <ServiceDetail locale={locale} service={service} />
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
