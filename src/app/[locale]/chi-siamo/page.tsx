import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { TeamSection } from "@/components/TeamSection";
import { getCertCategories, getCertifications } from "@/lib/data/localized";
import { createMetadata, siteConfig } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    label: string;
    title: string;
    description: string;
    intro: (count: number) => string[];
    cards: { title: string; desc: string }[];
    addressLabel: string;
    addressSecondaryLabel: string;
    companyData: string;
    companyDataValue: string;
    certsTitle: string;
    certsDescription: string;
  }
> = {
  it: {
    seoTitle: "Chi siamo",
    seoDescription:
      "Hacksure Srl — cybersecurity per PMI. Team certificato con eJPT, eCPPT, CompTIA, Cisco CCNA, Sophos e EICTA IS. Sedi a Brescia e Atena Lucana.",
    label: "Azienda",
    title: "Hacksure Srl: cybersecurity per PMI",
    description:
      "Servizi professionali di analisi vulnerabilità, penetration testing, sicurezza di rete e conformità normativa. Sede legale a Brescia, sede operativa anche in Campania.",
    intro: (count) => [
      "Hacksure Srl nasce con l'obiettivo di rendere accessibili alle piccole e medie imprese italiane servizi di cybersecurity di livello enterprise, con un approccio concreto e orientato ai risultati.",
      "Operiamo su due fronti complementari: la conformità normativa (NIS2, GDPR, ISO 27001 e altri framework) e i servizi operativi di test e protezione infrastrutture.",
      `Il nostro team possiede ${count} certificazioni internazionali attive — da offensive security (eJPT, eCPPT) a standard CompTIA e vendor enterprise (Cisco, Sophos, EICTA) — applicate in ogni progetto.`,
    ],
    cards: [
      {
        title: "Approccio operativo",
        desc: "Report actionable, remediation prioritizzata, supporto continuo.",
      },
      {
        title: "Focus PMI",
        desc: "Soluzioni scalabili modulate su budget e complessità aziendale.",
      },
    ],
    addressLabel: siteConfig.addressLabel,
    addressSecondaryLabel: siteConfig.addressSecondaryLabel,
    companyData: "Dati societari",
    companyDataValue: `P.IVA ${siteConfig.vat} — Cap. soc. ${siteConfig.capital}`,
    certsTitle: "Le nostre certificazioni",
    certsDescription:
      "Competenze validate da enti internazionali, organizzate per area di specializzazione.",
  },
  en: {
    seoTitle: "About us",
    seoDescription:
      "Hacksure Srl — cybersecurity for SMEs. A certified team holding eJPT, eCPPT, CompTIA, Cisco CCNA, Sophos and EICTA IS. Offices in Brescia and Atena Lucana.",
    label: "Company",
    title: "Hacksure Srl: cybersecurity for SMEs",
    description:
      "Professional vulnerability analysis, penetration testing, network security and regulatory compliance. Registered office in Brescia, with a second operating office in Campania.",
    intro: (count) => [
      "Hacksure Srl was founded to make enterprise-grade cybersecurity accessible to Italian small and medium businesses, with a practical, results-driven approach.",
      "We work on two complementary fronts: regulatory compliance (NIS2, GDPR, ISO 27001 and other frameworks) and hands-on services for testing and protecting infrastructure.",
      `Our team holds ${count} active international certifications — from offensive security (eJPT, eCPPT) to CompTIA standards and enterprise vendors (Cisco, Sophos, EICTA) — applied on every project.`,
    ],
    cards: [
      {
        title: "Hands-on approach",
        desc: "Actionable reports, prioritised remediation and ongoing support.",
      },
      {
        title: "Built for SMEs",
        desc: "Scalable solutions sized to your budget and operational complexity.",
      },
    ],
    addressLabel: "Registered and operating office",
    addressSecondaryLabel: "Operating office",
    companyData: "Company details",
    companyDataValue: `VAT no. ${siteConfig.vat} — Share capital ${siteConfig.capital}`,
    certsTitle: "Our certifications",
    certsDescription:
      "Skills validated by international bodies, grouped by area of specialisation.",
  },
};

const teamCardTitle: Record<Locale, (count: number) => { title: string; desc: string }> = {
  it: (count) => ({
    title: "Team certificato",
    desc: `${count} certificazioni attive e verificabili.`,
  }),
  en: (count) => ({
    title: "Certified team",
    desc: `${count} active, verifiable certifications.`,
  }),
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: "/chi-siamo",
    locale,
  });
}

export default async function ChiSiamoPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];
  const certifications = getCertifications(locale);
  const categories = getCertCategories(locale);

  const cards = [
    ...t.cards,
    teamCardTitle[locale](certifications.length),
    { title: t.addressLabel, desc: siteConfig.address },
    { title: t.addressSecondaryLabel, desc: siteConfig.addressSecondary },
    { title: t.companyData, desc: t.companyDataValue },
  ];

  return (
    <>
      <Header />
      <main>
        <PageHeader
          locale={locale}
          label={t.label}
          title={t.title}
          description={t.description}
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimateIn className="space-y-4 leading-relaxed text-zinc-400">
              {t.intro(certifications.length).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </AnimateIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 80}>
                  <div className="card-hover p-5">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          <TeamSection locale={locale} />

          <section className="mt-16">
            <AnimateIn>
              <h2 className="text-lg font-semibold text-white">{t.certsTitle}</h2>
              <p className="mt-2 text-sm text-zinc-400">{t.certsDescription}</p>
            </AnimateIn>
            {(["offensive", "comptia", "vendor"] as const).map((cat) => (
              <div key={cat} className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {categories[cat].label}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {certifications
                    .filter((c) => c.category === cat)
                    .map((cert) => (
                      <Link
                        key={cert.slug}
                        href={localizeHref(locale, `/certificazioni/${cert.slug}`)}
                        className="card-hover flex items-center gap-3 p-3 pr-5"
                      >
                        <CertBadge src={cert.image} alt={cert.alt} size={48} />
                        <span className="text-sm font-medium text-white">{cert.name}</span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </section>
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
