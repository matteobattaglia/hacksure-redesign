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

const seo: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  it: {
    title: "Cybersecurity a Brescia per PMI",
    description:
      "Proteggi e adegua la tua azienda con bandi e contributi attivi. Dall'accesso ai fondi alla messa in sicurezza: NIS2, GDPR, ISO 27001, penetration test e vulnerability assessment. Sede a Brescia, Via Fratelli Ugoni 34.",
    keywords: [
      "cybersecurity a portata di tutti",
      "cybersecurity finanziata bandi",
      "bandi cybersecurity PMI",
      "cybersecurity brescia",
      "sicurezza informatica Brescia",
      "penetration test brescia",
      "pen test brescia",
      "vulnerability assessment Brescia",
      "cybersecurity PMI Italia",
      "consulenza NIS2 PMI",
      "conformità GDPR aziende",
      "ISO 27001 piccole imprese",
    ],
  },
  en: {
    title: "Cybersecurity for Italian SMEs",
    description:
      "Protect your company and get it compliant with active grants and funding. From accessing the funds to securing your systems: NIS2, GDPR, ISO 27001, penetration testing and vulnerability assessment. Based in Brescia.",
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
    title: seo[locale].title,
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
