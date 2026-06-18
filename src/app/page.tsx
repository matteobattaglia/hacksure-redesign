import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeOverview } from "@/components/HomeOverview";
import { HomeCta } from "@/components/HomeCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeOverview />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
