import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata, siteConfig } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    translationNotice?: string;
    controller: string;
    vat: string;
    capital: string;
    purposesTitle: string;
    purposesIntro: string;
    purposes: string[];
    legalBasisTitle: string;
    legalBasis: string;
    retentionTitle: string;
    retention: string;
    rightsTitle: string;
    rights: string;
    cookiesTitle: string;
    cookies: string;
    backHome: string;
  }
> = {
  it: {
    seoTitle: "Privacy & Cookie Policy",
    seoDescription: "Informativa privacy e cookie policy di Hacksure Srl.",
    eyebrow: "Legale",
    title: "Privacy & Cookie Policy",
    intro:
      "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
    controller: "Titolare del trattamento",
    vat: "P.IVA",
    capital: "Cap. soc.",
    purposesTitle: "Finalità del trattamento",
    purposesIntro:
      "I dati personali raccolti tramite il form di contatto e i questionari di autovalutazione compliance vengono trattati esclusivamente per:",
    purposes: [
      "Rispondere alle richieste di informazioni e consulenza",
      "Erogare verifiche preliminari NIS2 e compliance",
      "Ricontattare l'interessato in merito all'esito della valutazione",
    ],
    legalBasisTitle: "Base giuridica",
    legalBasis:
      "Il trattamento si basa sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) e sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).",
    retentionTitle: "Conservazione dei dati",
    retention:
      "I dati saranno conservati per il tempo necessario a evadere la richiesta e, in caso di instaurazione del rapporto commerciale, per la durata del rapporto stesso e per i termini di legge applicabili.",
    rightsTitle: "Diritti dell'interessato",
    rights: `L'interessato ha diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento, nonché di revocare il consenso in qualsiasi momento, contattando ${siteConfig.email}.`,
    cookiesTitle: "Cookie",
    cookies:
      "Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non vengono utilizzati cookie di profilazione di terze parti senza consenso esplicito.",
    backHome: "← Torna alla homepage",
  },
  en: {
    seoTitle: "Privacy & Cookie Policy",
    seoDescription: "Privacy notice and cookie policy of Hacksure Srl.",
    eyebrow: "Legal",
    title: "Privacy & Cookie Policy",
    intro:
      "Information notice on the processing of personal data pursuant to EU Regulation 2016/679 (GDPR).",
    translationNotice:
      "This is a courtesy translation. In case of any discrepancy, the Italian version of this notice prevails.",
    controller: "Data controller",
    vat: "VAT no.",
    capital: "Share capital",
    purposesTitle: "Purposes of processing",
    purposesIntro:
      "Personal data collected through the contact form and the compliance self-assessment questionnaires is processed solely to:",
    purposes: [
      "Reply to requests for information and consulting",
      "Deliver preliminary NIS2 and compliance checks",
      "Contact the data subject about the outcome of the assessment",
    ],
    legalBasisTitle: "Legal basis",
    legalBasis:
      "Processing is based on the data subject's consent (Art. 6(1)(a) GDPR) and on the performance of pre-contractual measures (Art. 6(1)(b) GDPR).",
    retentionTitle: "Data retention",
    retention:
      "Data is retained for as long as necessary to handle the request and, where a commercial relationship is established, for the duration of that relationship and for the applicable statutory periods.",
    rightsTitle: "Rights of the data subject",
    rights: `The data subject has the right to access, rectification, erasure, restriction, portability and objection to processing, as well as the right to withdraw consent at any time, by writing to ${siteConfig.email}.`,
    cookiesTitle: "Cookies",
    cookies:
      "This website uses only technical cookies necessary for it to function. No third-party profiling cookies are used without explicit consent.",
    backHome: "← Back to the homepage",
  },
};

const addressLabels: Record<Locale, { primary: string; secondary: string }> = {
  it: {
    primary: siteConfig.addressLabel,
    secondary: siteConfig.addressSecondaryLabel,
  },
  en: {
    primary: "Registered and operating office",
    secondary: "Operating office",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];
  const addresses = addressLabels[locale];

  return (
    <>
      <Header />
      <main>
        <div className="border-b border-zinc-800 bg-surface-900">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="section-label">{t.eyebrow}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{t.title}</h1>
          </div>
        </div>
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-zinc-400 leading-relaxed space-y-6">
          <p>{t.intro}</p>
          {t.translationNotice && (
            <p className="rounded-lg border border-zinc-800 bg-surface-900/60 p-4 text-sm text-zinc-500">
              {t.translationNotice}
            </p>
          )}

          <h2 className="text-lg font-semibold text-white">{t.controller}</h2>
          <p>
            {siteConfig.legalName}
            <br />
            {addresses.primary}: {siteConfig.address}
            <br />
            {addresses.secondary}: {siteConfig.addressSecondary}
            <br />
            {t.vat}: {siteConfig.vat}
            <br />
            {t.capital}: {siteConfig.capital}
            <br />
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-500 hover:text-brand-400">
              {siteConfig.email}
            </a>
          </p>

          <h2 className="text-lg font-semibold text-white">{t.purposesTitle}</h2>
          <p>{t.purposesIntro}</p>
          <ul className="list-disc space-y-1 pl-5">
            {t.purposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ul>

          <h2 className="text-lg font-semibold text-white">{t.legalBasisTitle}</h2>
          <p>{t.legalBasis}</p>

          <h2 className="text-lg font-semibold text-white">{t.retentionTitle}</h2>
          <p>{t.retention}</p>

          <h2 className="text-lg font-semibold text-white">{t.rightsTitle}</h2>
          <p>{t.rights}</p>

          <h2 className="text-lg font-semibold text-white">{t.cookiesTitle}</h2>
          <p>{t.cookies}</p>

          <p className="mt-8">
            <Link href={localizeHref(locale, "/")} className="text-brand-500 hover:text-brand-400">
              {t.backHome}
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
