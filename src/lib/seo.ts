export const siteConfig = {
  name: "HackSure",
  legalName: "Seven Business srl",
  tagline: "Cybersecurity division",
  description:
    "HackSure: cybersecurity e compliance per PMI in Italia. Penetration testing, vulnerability assessment, NIS2, GDPR, ISO 27001. Sede a Brescia, Lombardia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hacksure-redesign.vercel.app",
  locale: "it_IT",
  language: "it",
  email: "info@hacksure.it",
  phones: ["+39 350 537 2192", "+39 380 437 0199"],
  address: "Via Fratelli Ugoni 34 - 25126 Brescia (BS)",
  city: "Brescia",
  region: "Lombardia",
  country: "IT",
  geo: { latitude: 45.5416, longitude: 10.2118 },
  vat: "IT03992370985",
  capital: "€1.410.000,00",
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

export type MetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
}: MetadataProps = {}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Cybersecurity e Compliance per PMI in Italia`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const pageKeywords = keywords ?? siteConfig.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "it-IT": url,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
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
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "IT-BS",
      "geo.placename": siteConfig.city,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/images/Hacksure.png`,
    description: siteConfig.description,
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
      { "@type": "Country", name: "Italia" },
      { "@type": "AdministrativeArea", name: "Lombardia" },
    ],
    knowsAbout: siteConfig.keywords,
  };
}

export function localBusinessJsonLd() {
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
      name: "Italia",
    },
    serviceType: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Compliance NIS2",
      "Conformità GDPR",
      "ISO 27001",
      "Network Security",
      "Endpoint Security EDR/XDR",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "it-IT",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function serviceJsonLd() {
  return localBusinessJsonLd();
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

export function breadcrumbJsonLd(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${siteConfig.url}${item.url}` } : {}),
    })),
  };
}
