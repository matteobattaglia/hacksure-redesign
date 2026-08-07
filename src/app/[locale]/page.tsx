import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeCta } from "@/components/HomeCta";
import { HomeCollaborate } from "@/components/HomeCollaborate";
import { StatsBar } from "@/components/StatsBar";
import { ProcessRoadmap } from "@/components/ProcessRoadmap";
import { SocialProof } from "@/components/SocialProof";
import { HomeFAQ } from "@/components/HomeFAQ";
import { HomeContact } from "@/components/HomeContact";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { getHomeFaqs, getServices } from "@/lib/data/localized";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const seo: Record<Locale, { description: string; keywords: string[] }> = {
  it: {
    description:
      "Proteggi la tua azienda dagli hacker. Conformità GDPR e NIS2 per PMI. Penetration testing, vulnerability assessment, ISO 27001 — team certificato a Brescia e in tutta Italia. Valutazione gratuita.",
    keywords: [
      "cybersecurity PMI Italia",
      "proteggere azienda dagli hacker",
      "pentest aziende italiane",
      "consulenza NIS2 PMI",
      "conformità GDPR aziende",
      "controllo sicurezza informatica aziendale",
      "ISO 27001 piccole imprese",
      "sicurezza informatica Brescia",
    ],
  },
  en: {
    description:
      "Protect your company from cyber attacks. GDPR and NIS2 compliance for SMEs. Penetration testing, vulnerability assessment and ISO 27001 delivered by a certified team in Brescia and across Italy. Free assessment.",
    keywords: [
      "cybersecurity for SMEs Italy",
      "protect company from hackers",
      "penetration testing Italy",
      "NIS2 compliance consulting",
      "GDPR compliance for companies",
      "IT security audit",
      "ISO 27001 small business",
      "cybersecurity company Brescia",
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return createMetadata({
    description: seo[locale].description,
    path: "/",
    keywords: seo[locale].keywords,
    locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const services = getServices(locale).map((s) =>
    serviceJsonLd({
      serviceType: s.title,
      description: s.description,
      path: `/servizi/${s.slug}`,
      locale,
    }),
  );

  return (
    <>
      <JsonLd data={[faqJsonLd(getHomeFaqs(locale)), ...services]} />
      <Header />
      <main>
        <Hero locale={locale} />
        <StatsBar locale={locale} />
        <HomeOverview locale={locale} />
        <ProcessRoadmap />
        <SocialProof locale={locale} />
        <HomeCollaborate locale={locale} />
        <HomeContact locale={locale} />
        <HomeFAQ />
        <HomeCta locale={locale} />
      </main>
      <Footer />
    </>
  );
}
