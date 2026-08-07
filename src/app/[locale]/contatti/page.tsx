import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata, siteConfig } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/config";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    label: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    addressLabel: string;
    addressSecondaryLabel: string;
    companyLine: string;
  }
> = {
  it: {
    seoTitle: "Contatti",
    seoDescription:
      "Contatta HackSure per una valutazione preliminare gratuita di cybersecurity e compliance. Brescia, Italia.",
    label: "Contatti",
    title: "Richiedi una valutazione gratuita",
    description:
      "Compilate il modulo: vi ricontattiamo entro 24 ore lavorative con un'analisi preliminare personalizzata.",
    email: "Email",
    phone: "Telefono",
    addressLabel: siteConfig.addressLabel,
    addressSecondaryLabel: siteConfig.addressSecondaryLabel,
    companyLine: `P.IVA ${siteConfig.vat} — Cap. soc. ${siteConfig.capital}`,
  },
  en: {
    seoTitle: "Contact",
    seoDescription:
      "Contact Hacksure for a free preliminary cybersecurity and compliance assessment. Brescia, Italy.",
    label: "Contact",
    title: "Request a free assessment",
    description:
      "Fill in the form and we will get back to you within 24 working hours with a tailored preliminary analysis.",
    email: "Email",
    phone: "Phone",
    addressLabel: "Registered and operating office",
    addressSecondaryLabel: "Operating office",
    companyLine: `VAT no. ${siteConfig.vat} — Share capital ${siteConfig.capital}`,
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path: "/contatti",
    locale,
  });
}

export default async function ContattiPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];

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
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.email}</h2>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-brand-500 hover:text-brand-400">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.phone}</h2>
                {siteConfig.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-zinc-300 hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  {t.addressLabel}
                </h2>
                <p className="mt-2 text-zinc-400">{siteConfig.address}</p>
                <p className="mt-1 text-sm text-zinc-500">{siteConfig.legalName}</p>
                <p className="mt-1 text-sm text-zinc-500">{t.companyLine}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  {t.addressSecondaryLabel}
                </h2>
                <p className="mt-2 text-zinc-400">{siteConfig.addressSecondary}</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm embedded />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
