import { getCertifications } from "@/lib/data/localized";
import type { Locale } from "@/lib/i18n/config";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

const copy = {
  it: {
    compliance: "Compliance",
    services: "Servizi",
    certifications: "Certificazioni",
    about: "Chi siamo",
    faq: "FAQ",
    frameworks: {
      nis2: "Direttiva sicurezza reti UE",
      gdpr: "Protezione dati personali",
      iso: "Sistema gestione sicurezza",
      dora: "Resilienza operativa digitale",
      pci: "Sicurezza pagamenti",
      soc2: "Trust services criteria",
    },
    serviceLabels: {
      vulnerability: "Vulnerability Assessment",
      pentest: "Penetration Testing",
      network: "Network Security",
      endpoint: "Endpoint EDR/XDR",
      awareness: "Security Awareness",
      incident: "Incident Response",
      notarization: "Notarizzazione Blockchain",
      fraud: "SOS Truffe Online",
      kaspersky: "Kaspersky Partner",
    },
    serviceDescriptions: {
      notarization: "Timestamp immutabile e studi legali",
      fraud: "Call, analisi e perizia per vittime di frodi",
      kaspersky: "Registered B2B Partner ufficiale",
    },
  },
  en: {
    compliance: "Compliance",
    services: "Services",
    certifications: "Certifications",
    about: "About us",
    faq: "FAQ",
    frameworks: {
      nis2: "EU network and information security directive",
      gdpr: "Personal data protection",
      iso: "Information security management system",
      dora: "Digital operational resilience",
      pci: "Payment card security",
      soc2: "Trust services criteria",
    },
    serviceLabels: {
      vulnerability: "Vulnerability Assessment",
      pentest: "Penetration Testing",
      network: "Network Security",
      endpoint: "Endpoint EDR/XDR",
      awareness: "Security Awareness",
      incident: "Incident Response",
      notarization: "Blockchain Notarization",
      fraud: "Online Fraud Response",
      kaspersky: "Kaspersky Partner",
    },
    serviceDescriptions: {
      notarization: "Immutable timestamp with qualified law firms",
      fraud: "Call, feasibility analysis and expert report",
      kaspersky: "Official Registered B2B Partner",
    },
  },
} as const;

export function getNavigation(locale: Locale): NavItem[] {
  const t = copy[locale];

  return [
    {
      label: t.compliance,
      href: "/compliance",
      children: [
        { label: "NIS2", href: "/compliance/nis2", description: t.frameworks.nis2 },
        { label: "GDPR", href: "/compliance/gdpr", description: t.frameworks.gdpr },
        { label: "ISO 27001", href: "/compliance/iso-27001", description: t.frameworks.iso },
        { label: "DORA", href: "/compliance/dora", description: t.frameworks.dora },
        { label: "PCI DSS", href: "/compliance/pci-dss", description: t.frameworks.pci },
        { label: "SOC 2", href: "/compliance/soc2", description: t.frameworks.soc2 },
      ],
    },
    {
      label: t.services,
      href: "/servizi",
      children: [
        { label: t.serviceLabels.vulnerability, href: "/servizi/vulnerability-assessment" },
        { label: t.serviceLabels.pentest, href: "/servizi/penetration-testing" },
        { label: t.serviceLabels.network, href: "/servizi/network-security" },
        { label: t.serviceLabels.endpoint, href: "/servizi/endpoint-security" },
        { label: t.serviceLabels.awareness, href: "/servizi/security-awareness" },
        { label: t.serviceLabels.incident, href: "/servizi/incident-response" },
        {
          label: t.serviceLabels.notarization,
          href: "/servizi/notarizzazione-blockchain",
          description: t.serviceDescriptions.notarization,
        },
        {
          label: t.serviceLabels.fraud,
          href: "/servizi/perizia-truffe-online",
          description: t.serviceDescriptions.fraud,
        },
        {
          label: t.serviceLabels.kaspersky,
          href: "/partner/kaspersky",
          description: t.serviceDescriptions.kaspersky,
        },
      ],
    },
    {
      label: t.certifications,
      href: "/certificazioni",
      children: getCertifications(locale).map((c) => ({
        label: c.name,
        href: `/certificazioni/${c.slug}`,
        description: c.subtitle ?? c.issuer,
      })),
    },
    { label: t.about, href: "/chi-siamo" },
    { label: t.faq, href: "/faq" },
  ];
}
