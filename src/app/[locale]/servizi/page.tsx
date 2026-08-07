import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader, CtaBanner } from "@/components/PageLayout";
import { getServices } from "@/lib/data/localized";
import { createMetadata } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
    label: string;
    title: string;
    description: string;
    discover: string;
    partnership: string;
    kasperskyDescription: string;
    goToPage: string;
  }
> = {
  it: {
    seoTitle: "Servizi Cybersecurity per PMI",
    seoDescription:
      "Penetration testing, notarizzazione blockchain, SOS Truffe Online, EDR Kaspersky e incident response per PMI. HackSure Brescia.",
    keywords: [
      "penetration testing PMI",
      "vulnerability assessment Italia",
      "notarizzazione blockchain",
      "SOS truffe online",
      "kaspersky partner",
      "consulenza cybersecurity",
    ],
    label: "Servizi",
    title: "Cybersecurity operativa per PMI",
    description:
      "Dai test offensivi alla protezione endpoint Kaspersky, dalla notarizzazione blockchain a SOS Truffe Online: servizi professionali end-to-end.",
    discover: "Scopri il servizio →",
    partnership: "Partnership ufficiale",
    kasperskyDescription:
      "Pagina dedicata alle soluzioni Kaspersky implementate da HackSure per le PMI.",
    goToPage: "Vai alla pagina →",
  },
  en: {
    seoTitle: "Cybersecurity Services for SMEs",
    seoDescription:
      "Penetration testing, blockchain notarization, online fraud response, Kaspersky EDR and incident response for SMEs. Hacksure, Brescia.",
    keywords: [
      "penetration testing for SMEs",
      "vulnerability assessment Italy",
      "blockchain notarization",
      "online fraud expert report",
      "kaspersky partner",
      "cybersecurity consulting Italy",
    ],
    label: "Services",
    title: "Hands-on cybersecurity for SMEs",
    description:
      "From offensive testing to Kaspersky endpoint protection, from blockchain notarization to online fraud response: professional end-to-end services.",
    discover: "Explore the service →",
    partnership: "Official partnership",
    kasperskyDescription:
      "A dedicated page on the Kaspersky solutions Hacksure deploys for small and medium businesses.",
    goToPage: "Go to the page →",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: "/servizi",
    keywords: t.keywords,
    locale,
  });
}

export default async function ServiziPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];
  const services = getServices(locale);

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card flex flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {service.category}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-1 border-t border-zinc-800 pt-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-xs text-zinc-500">— {f}</li>
                  ))}
                </ul>
                <Link
                  href={localizeHref(locale, `/servizi/${service.slug}`)}
                  className="mt-5 text-sm font-medium text-brand-500 hover:text-brand-400"
                >
                  {t.discover}
                </Link>
              </article>
            ))}
          </div>

          <Link
            href={localizeHref(locale, "/partner/kaspersky")}
            className="card-hover mt-8 flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center"
          >
            <div className="shrink-0 rounded-lg border border-zinc-800 bg-black p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/partners/kaspersky-registered-partner.jpg"
                alt="Kaspersky Registered B2B Partner"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                {t.partnership}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Kaspersky Registered B2B Partner
              </h2>
              <p className="mt-1 text-sm text-zinc-400">{t.kasperskyDescription}</p>
            </div>
            <span className="text-sm font-medium text-brand-500">{t.goToPage}</span>
          </Link>
        </div>
        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
