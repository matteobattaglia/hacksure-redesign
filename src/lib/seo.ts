export const siteConfig = {
  name: "HackSure",
  legalName: "Seven Business srl",
  tagline: "Cybersecurity division",
  description:
    "HackSure offre servizi professionali di cybersecurity per PMI: vulnerability assessment, penetration testing, compliance normativa (ISO 27001, GDPR, NIS2) e protezione infrastrutture IT.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hacksure-redesign.vercel.app",
  locale: "it_IT",
  email: "info@hacksure.it",
  phones: ["+39 350 537 2192", "+39 380 437 0199"],
  address: "Via Fratelli Ugoni 34 - 25126 Brescia (BS)",
  vat: "IT03992370985",
  capital: "€1.410.000,00",
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
};

export function createMetadata({ title, description, path = "" }: MetadataProps = {}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — Sicurezza Informatica a 360°`;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
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
          alt: "HackSure — Sicurezza Informatica",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/assets/images/Sicurezza-Informatica.webp"],
    },
    robots: {
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
      addressLocality: "Brescia",
      postalCode: "25126",
      addressRegion: "BS",
      addressCountry: "IT",
    },
    sameAs: Object.values(siteConfig.social),
    areaServed: "IT",
    knowsAbout: [
      "Cybersecurity",
      "Penetration Testing",
      "Vulnerability Assessment",
      "ISO 27001",
      "GDPR",
      "NIS2",
      "Network Security",
    ],
  };
}

export function serviceJsonLd() {
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
      addressLocality: "Brescia",
      postalCode: "25126",
      addressCountry: "IT",
    },
    serviceType: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Compliance ISO 27001",
      "Conformità GDPR",
      "Conformità NIS2",
      "Network Security",
      "Endpoint Security EDR/XDR",
    ],
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
