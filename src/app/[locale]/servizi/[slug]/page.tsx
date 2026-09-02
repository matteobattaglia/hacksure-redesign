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
    "vulnerability-assessment":
      "Vulnerability assessment per PMI: individua falle in rete, server e cloud prima che vengano sfruttate. Report prioritizzato. Brescia e Italia.",
    "penetration-testing":
      "Penetration test a Brescia e in Italia: simuliamo attacchi reali sulla tua azienda e ti diciamo cosa rischi. Valutazione gratuita.",
    "network-security":
      "Firewall, segmentazione e monitoraggio rete per PMI. Proteggi la tua infrastruttura con consulenza certificata a Brescia.",
    "endpoint-security":
      "EDR/XDR e endpoint security per aziende. Partner Kaspersky ufficiale. Protezione da ransomware e minacce avanzate.",
    "security-awareness":
      "Formazione anti-phishing e security awareness per dipendenti. Riduci il rischio umano, prima linea di difesa della tua PMI.",
    "incident-response":
      "Incident response e digital forensics: risposta rapida agli attacchi, analisi delle cause e piano di remediation.",
    "notarizzazione-blockchain":
      "Notarizzazione digitale con blockchain: timestamp immutabile di documenti e prove. Supporto di studi legali qualificati.",
    "perizia-truffe-online":
      "SOS Truffe Online: call gratuita, analisi di fattibilità e perizia tecnica per legali e autorità.",
  },
  en: {
    "vulnerability-assessment":
      "Vulnerability assessment for SMEs: find gaps in your network, servers and cloud before attackers do. Prioritized report. Brescia and Italy.",
    "penetration-testing":
      "Penetration testing in Brescia and across Italy: we simulate real attacks on your company and show what is at risk. Free assessment.",
    "network-security":
      "Firewall, segmentation and network monitoring for SMEs. Protect your infrastructure with certified consulting in Brescia.",
    "endpoint-security":
      "EDR/XDR and endpoint security for businesses. Official Kaspersky partner. Protection from ransomware and advanced threats.",
    "security-awareness":
      "Anti-phishing training and security awareness for employees. Reduce human risk — your SME's first line of defence.",
    "incident-response":
      "Incident response and digital forensics: rapid attack response, root-cause analysis and remediation planning.",
    "notarizzazione-blockchain":
      "Digital notarization on blockchain: immutable timestamps for documents and evidence. Supported by qualified law firms.",
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
