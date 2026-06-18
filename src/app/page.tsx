import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeCta } from "@/components/HomeCta";
import { StatsBar, ProcessSection } from "@/components/StatsBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <HomeOverview />
        <ProcessSection />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
