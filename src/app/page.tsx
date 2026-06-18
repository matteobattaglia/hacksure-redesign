import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeCta } from "@/components/HomeCta";
import { StatsBar } from "@/components/StatsBar";
import { ProcessRoadmap } from "@/components/ProcessRoadmap";
import { SocialProof } from "@/components/SocialProof";
import { HomeFAQ } from "@/components/HomeFAQ";
import { HomeContact } from "@/components/HomeContact";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { securityServices } from "@/lib/data/services";
import { homeFaqs } from "@/lib/data/faq";

export const metadata: Metadata = createMetadata({
  description:
    "Proteggi la tua azienda dagli hacker. Conformità GDPR e NIS2 per PMI. Penetration testing, vulnerability assessment, ISO 27001 — team certificato a Brescia e in tutta Italia. Valutazione gratuita.",
  path: "/",
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
});

const services = securityServices.map((s) =>
  serviceJsonLd({
    serviceType: s.title,
    description: s.description,
    path: `/servizi/${s.slug}`,
  }),
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqJsonLd(homeFaqs), ...services]} />
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <HomeOverview />
        <ProcessRoadmap />
        <SocialProof />
        <HomeContact />
        <HomeFAQ />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
