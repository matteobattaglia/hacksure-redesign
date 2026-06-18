import { certifications } from "@/lib/data/certifications";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNavigation: NavItem[] = [
  {
    label: "Compliance",
    href: "/compliance",
    children: [
      { label: "NIS2", href: "/compliance/nis2", description: "Direttiva sicurezza reti UE" },
      { label: "GDPR", href: "/compliance/gdpr", description: "Protezione dati personali" },
      { label: "ISO 27001", href: "/compliance/iso-27001", description: "Sistema gestione sicurezza" },
      { label: "DORA", href: "/compliance/dora", description: "Resilienza operativa digitale" },
      { label: "PCI DSS", href: "/compliance/pci-dss", description: "Sicurezza pagamenti" },
      { label: "SOC 2", href: "/compliance/soc2", description: "Trust services criteria" },
    ],
  },
  {
    label: "Servizi",
    href: "/servizi",
    children: [
      { label: "Vulnerability Assessment", href: "/servizi/vulnerability-assessment" },
      { label: "Penetration Testing", href: "/servizi/penetration-testing" },
      { label: "Network Security", href: "/servizi/network-security" },
      { label: "Endpoint EDR/XDR", href: "/servizi/endpoint-security" },
      { label: "Security Awareness", href: "/servizi/security-awareness" },
      { label: "Incident Response", href: "/servizi/incident-response" },
    ],
  },
  {
    label: "Certificazioni",
    href: "/certificazioni",
    children: certifications.map((c) => ({
      label: c.name,
      href: `/certificazioni/${c.slug}`,
      description: c.subtitle ?? c.issuer,
    })),
  },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "FAQ", href: "/faq" },
];
