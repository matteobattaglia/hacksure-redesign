import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeCta } from "@/components/HomeCta";
import { StatsBar } from "@/components/StatsBar";
import { ProcessRoadmap } from "@/components/ProcessRoadmap";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  description:
    "Cybersecurity per PMI in Italia: penetration testing, vulnerability assessment, compliance NIS2, GDPR e ISO 27001. Team certificato CompTIA, eCPPT, CCNA. Consulenza gratuita — Brescia e tutta Italia.",
  path: "/",
  keywords: [
    "cybersecurity PMI Italia",
    "pentest aziende italiane",
    "consulenza NIS2 PMI",
    "vulnerability assessment",
    "conformità GDPR aziende",
    "ISO 27001 piccole imprese",
    "sicurezza informatica Brescia",
    "cyber security Lombardia",
  ],
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <HomeOverview />
        <ProcessRoadmap />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
