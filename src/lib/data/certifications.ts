export type Certification = {
  slug: string;
  name: string;
  issuer: string;
  description: string;
  longDescription: string;
  skills: string[];
  image: string;
  alt: string;
};

export const certifications: Certification[] = [
  {
    slug: "security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    description:
      "Certificazione globale che valida competenze fondamentali in cybersecurity: threat management, crittografia, identity management e governance.",
    longDescription:
      "CompTIA Security+ è una delle certificazioni più riconosciute a livello mondiale per i professionisti della cybersecurity entry-to-mid level. Copre threat analysis, architetture sicure, operazioni di sicurezza, governance e compliance — competenze che il team HackSure applica quotidianamente nei progetti per le PMI.",
    skills: ["Threat management", "Crittografia", "Identity & access", "Governance e compliance"],
    image: "/assets/certifications/Security-plus-768x768.webp",
    alt: "CompTIA Security+ certification badge",
  },
  {
    slug: "network-plus",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    description:
      "Competenza certificata nella progettazione, configurazione e troubleshooting di reti enterprise.",
    longDescription:
      "Network+ attesta competenze solide in networking: topologie, protocolli, troubleshooting e sicurezza di rete. È la base tecnica su cui costruiamo audit di infrastruttura, segmentazione e hardening firewall per i nostri clienti.",
    skills: ["Progettazione reti", "Protocolli TCP/IP", "Troubleshooting", "Sicurezza di rete"],
    image: "/assets/certifications/Network-768x768.webp",
    alt: "CompTIA Network+ certification badge",
  },
  {
    slug: "pentest-plus",
    name: "CompTIA PenTest+",
    issuer: "CompTIA",
    description:
      "Certificazione offensiva che attesta capacità di penetration testing, vulnerability assessment e reporting professionale.",
    longDescription:
      "PenTest+ valida competenze pratiche in planning, scanning, exploitation, post-exploitation e reporting. I nostri consulenti certificati applicano queste metodologie in ogni engagement di penetration testing, garantendo standard elevati e report actionable.",
    skills: ["Planning & scoping", "Vulnerability scanning", "Exploitation", "Reporting professionale"],
    image: "/assets/certifications/Pentest-768x768.webp",
    alt: "CompTIA PenTest+ certification badge",
  },
  {
    slug: "ecppt",
    name: "eCPPT",
    issuer: "INE Security (eLearnSecurity)",
    description:
      "Certificazione avanzata di penetration testing con focus su metodologie offensive real-world.",
    longDescription:
      "L'eLearnSecurity Certified Professional Penetration Tester (eCPPT) è una certificazione hands-on che richiede la compromissione di reti reali in un lab controllato. Attesta capacità avanzate in network penetration, Active Directory e post-exploitation — competenze chiave per i nostri pentest enterprise.",
    skills: ["Network penetration", "Active Directory", "Post-exploitation", "Metodologie real-world"],
    image: "/assets/certifications/ecppt-768x768.webp",
    alt: "eCPPT certification badge",
  },
  {
    slug: "cvnp",
    name: "C|VNP",
    issuer: "EC-Council",
    description:
      "Certified Vulnerability Assessment and Penetration Testing Professional: expertise in VA/PT e ethical hacking.",
    longDescription:
      "C|VNP certifica competenze specialistiche in vulnerability assessment e penetration testing secondo gli standard EC-Council. Integra metodologie strutturate di ethical hacking con focus su identificazione, analisi e remediation delle vulnerabilità.",
    skills: ["Vulnerability assessment", "Penetration testing", "Ethical hacking", "Remediation planning"],
    image: "/assets/certifications/CVNP-768x768.webp",
    alt: "C|VNP certification badge",
  },
];

export function getCertificationBySlug(slug: string) {
  return certifications.find((c) => c.slug === slug);
}
