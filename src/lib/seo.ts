import { defaultLocale, hreflang, localizeHref, ogLocale, type Locale } from "@/lib/i18n/config";

export const siteConfig = {
  name: "Hacksure",
  legalName: "Hacksure Srl",
  tagline: "Cybersecurity per PMI",
  description:
    "Hacksure Srl: cybersecurity e compliance per PMI in Italia. Penetration testing, vulnerability assessment, NIS2, GDPR, ISO 27001. Sedi a Brescia e Atena Lucana.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hacksure.it",
  locale: "it_IT",
  language: "it",
  email: "info@hacksure.it",
  phones: ["+39 350 537 2192", "+39 377 331 8495"],
  address: "Via Fratelli Ugoni 34 - 25126 Brescia (BS)",
  addressLabel: "Sede legale / operativa",
  addressSecondary: "Via Masero snc - 84030 Atena Lucana (SA)",
  addressSecondaryLabel: "Sede operativa",
  city: "Brescia",
  region: "Lombardia",
  country: "IT",
  geo: { latitude: 45.5416, longitude: 10.2118 },
  vat: "IT04794100984",
  capital: "€10.000,00 i.v.",
  keywords: [
    "cybersecurity PMI",
    "sicurezza informatica aziende",
    "penetration testing Italia",
    "vulnerability assessment",
    "compliance NIS2",
    "conformità GDPR",
    "ISO 27001 PMI",
    "consulenza cybersecurity Brescia",
    "cyber security Lombardia",
    "pentest aziende",
    "consulenza NIS2",
    "audit sicurezza informatica",
  ],
  social: {
    linkedin: "https://it.linkedin.com/showcase/hacksure/",
    instagram: "https://www.instagram.com/hacksure.it/",
    facebook: "https://www.facebook.com/61579425704268/",
  },
};

export const defaultSeoTitle: Record<Locale, string> = {
  it: `${siteConfig.name} — Cybersecurity e Compliance per PMI in Italia`,
  en: `${siteConfig.name} — Cybersecurity and Compliance for Italian SMEs`,
};

export const defaultSeoDescription: Record<Locale, string> = {
  it: siteConfig.description,
  en: "Hacksure Srl: cybersecurity and compliance for small and medium businesses in Italy. Penetration testing, vulnerability assessment, NIS2, GDPR, ISO 27001. Offices in Brescia and Atena Lucana.",
};

export const defaultSeoKeywords: Record<Locale, string[]> = {
  it: siteConfig.keywords,
  en: [
    "cybersecurity for SMEs Italy",
    "penetration testing Italy",
    "vulnerability assessment",
    "NIS2 compliance consulting",
    "GDPR compliance company",
    "ISO 27001 small business",
    "cybersecurity company Brescia",
    "managed security services Italy",
  ],
};

export type MetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: Locale;
  /** Pages that exist in Italian only: no alternate language links. */
  italianOnly?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
  locale = defaultLocale,
  italianOnly = false,
}: MetadataProps = {}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : defaultSeoTitle[locale];
  const pageDescription = description ?? defaultSeoDescription[locale];
  const url = `${siteConfig.url}${localizeHref(locale, path || "/")}`;
  const pageKeywords = keywords ?? defaultSeoKeywords[locale];

  const itUrl = `${siteConfig.url}${localizeHref("it", path || "/")}`;
  const enUrl = `${siteConfig.url}${localizeHref("en", path || "/")}`;

  const languages = italianOnly
    ? { "it-IT": itUrl, it: itUrl }
    : { "it-IT": itUrl, en: enUrl, "x-default": itUrl };

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: "/assets/images/Sicurezza-Informatica.webp",
          width: 691,
          height: 691,
          alt: "HackSure — Cybersecurity e compliance per PMI italiane",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/assets/images/Sicurezza-Informatica.webp"],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large" as const,
          },
        },
    other: {
      "geo.region": "IT-BS",
      "geo.placename": siteConfig.city,
    },
  };
}

export function organizationJsonLd(locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/images/Hacksure.png`,
    description: defaultSeoDescription[locale],
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Fratelli Ugoni 34",
      addressLocality: siteConfig.city,
      postalCode: "25126",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: [
      { "@type": "Country", name: countryName[locale] },
      { "@type": "AdministrativeArea", name: "Lombardia" },
    ],
    knowsAbout: defaultSeoKeywords[locale],
  };
}

const countryName: Record<Locale, string> = {
  it: "Italia",
  en: "Italy",
};

const serviceTypes: Record<Locale, string[]> = {
  it: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Compliance NIS2",
    "Conformità GDPR",
    "ISO 27001",
    "Network Security",
    "Endpoint Security EDR/XDR",
  ],
  en: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "NIS2 Compliance",
    "GDPR Compliance",
    "ISO 27001",
    "Network Security",
    "Endpoint Security EDR/XDR",
  ],
};

export function localBusinessJsonLd(locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: `${siteConfig.url}/assets/images/Hacksure.png`,
    url: siteConfig.url,
    telephone: siteConfig.phones[0],
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Fratelli Ugoni 34",
      addressLocality: siteConfig.city,
      postalCode: "25126",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "Country",
      name: countryName[locale],
    },
    serviceType: serviceTypes[locale],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function websiteJsonLd(locale: Locale = defaultLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}${localizeHref(locale, "/")}`,
    description: defaultSeoDescription[locale],
    inLanguage: hreflang[locale],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function serviceJsonLd({
  serviceType,
  description,
  path,
  locale = defaultLocale,
}: {
  serviceType: string;
  description: string;
  path?: string;
  locale?: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "IT",
    description,
    ...(path ? { url: `${siteConfig.url}${localizeHref(locale, path)}` } : {}),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url?: string }[],
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.url}${localizeHref(locale, item.url)}` } : {}),
    })),
  };
}
