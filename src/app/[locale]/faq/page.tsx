import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { FAQ } from "@/components/FAQ";
import { getFaqs } from "@/lib/data/localized";
import { createMetadata, faqJsonLd } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoDescription: string;
    label: string;
    title: string;
    description: string;
  }
> = {
  it: {
    seoDescription:
      "Domande frequenti sui servizi di cybersecurity HackSure: vulnerability assessment, pentest, NIS2, GDPR e altro.",
    label: "Supporto",
    title: "Domande frequenti",
    description:
      "Risposte alle domande più comuni sui nostri servizi. Per approfondimenti, contattateci per una valutazione gratuita.",
  },
  en: {
    seoDescription:
      "Frequently asked questions about Hacksure cybersecurity services: vulnerability assessment, penetration testing, NIS2, GDPR and more.",
    label: "Support",
    title: "Frequently asked questions",
    description:
      "Answers to the questions we hear most often about our services. Need more detail? Get in touch for a free assessment.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return createMetadata({
    title: "FAQ",
    description: copy[locale].seoDescription,
    path: "/faq",
    locale,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(getFaqs(locale))) }}
      />
      <Header />
      <main>
        <PageHeader
          locale={locale}
          label={t.label}
          title={t.title}
          description={t.description}
        />
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <FAQ />
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
