export type CertCategory = "offensive" | "comptia" | "vendor";

export type Certification = {
  slug: string;
  name: string;
  subtitle?: string;
  issuer: string;
  category: CertCategory;
  description: string;
  longDescription: string;
  skills: string[];
  image: string;
  alt: string;
};

export const certCategories: Record<CertCategory, { label: string; description: string }> = {
  offensive: {
    label: "Offensive Security",
    description: "Certificazioni hands-on in penetration testing e ethical hacking.",
  },
  comptia: {
    label: "CompTIA",
    description: "Standard internazionali per cybersecurity, networking e vulnerability assessment.",
  },
  vendor: {
    label: "Vendor & Specialistiche",
    description: "Certificazioni su piattaforme e framework enterprise.",
  },
};

export const certifications: Certification[] = [
  {
    slug: "ejpt",
    name: "eJPT",
    subtitle: "Junior Penetration Tester",
    issuer: "INE Security",
    category: "offensive",
    description: "Certificazione entry-level che valida le basi del penetration testing e dell'ethical hacking.",
    longDescription:
      "L'eLearnSecurity Junior Penetration Tester (eJPT) certifica competenze fondamentali in information gathering, vulnerability scanning e exploitation di base. È il punto di partenza del percorso offensive del team HackSure.",
    skills: ["Information gathering", "Vulnerability scanning", "Exploitation base", "Reporting"],
    image: "/assets/certifications/ejpt.svg",
    alt: "eJPT certification badge",
  },
  {
    slug: "ecppt",
    name: "eCPPT",
    subtitle: "Professional Penetration Tester",
    issuer: "INE Security",
    category: "offensive",
    description: "Certificazione avanzata di penetration testing con metodologie offensive real-world.",
    longDescription:
      "L'eLearnSecurity Certified Professional Penetration Tester (eCPPT) richiede la compromissione di reti reali in lab controllato. Attesta capacità avanzate in network penetration, Active Directory e post-exploitation.",
    skills: ["Network penetration", "Active Directory", "Post-exploitation", "Metodologie real-world"],
    image: "/assets/certifications/ecppt.webp",
    alt: "eCPPT certification badge",
  },
  {
    slug: "pentest-plus",
    name: "CompTIA PenTest+",
    issuer: "CompTIA",
    category: "offensive",
    description: "Penetration testing, vulnerability assessment e reporting professionale.",
    longDescription:
      "PenTest+ valida competenze pratiche in planning, scanning, exploitation, post-exploitation e reporting. Metodologie applicate in ogni engagement di penetration testing HackSure.",
    skills: ["Planning & scoping", "Vulnerability scanning", "Exploitation", "Reporting professionale"],
    image: "/assets/certifications/pentest-plus.webp",
    alt: "CompTIA PenTest+ certification badge",
  },
  {
    slug: "security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    category: "comptia",
    description: "Competenze fondamentali in cybersecurity: threat management, crittografia e governance.",
    longDescription:
      "CompTIA Security+ è tra le certificazioni più riconosciute al mondo per professionisti cybersecurity. Copre threat analysis, architetture sicure, operazioni di sicurezza e compliance normativa.",
    skills: ["Threat management", "Crittografia", "Identity & access", "Governance e compliance"],
    image: "/assets/certifications/security-plus.webp",
    alt: "CompTIA Security+ certification badge",
  },
  {
    slug: "network-plus",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    category: "comptia",
    description: "Progettazione, configurazione e troubleshooting di reti enterprise.",
    longDescription:
      "Network+ attesta competenze solide in networking: topologie, protocolli, troubleshooting e sicurezza di rete. Base tecnica per audit infrastruttura e hardening firewall.",
    skills: ["Progettazione reti", "Protocolli TCP/IP", "Troubleshooting", "Sicurezza di rete"],
    image: "/assets/certifications/network-plus.webp",
    alt: "CompTIA Network+ certification badge",
  },
  {
    slug: "cnvp",
    name: "CompTIA CNVP",
    subtitle: "Network Vulnerability Assessment",
    issuer: "CompTIA",
    category: "comptia",
    description: "Competenza certificata in vulnerability assessment e analisi delle reti.",
    longDescription:
      "La certificazione CNVP (Network Vulnerability Assessment) attesta capacità specialistiche nell'identificazione, classificazione e prioritizzazione delle vulnerabilità di rete — competenza core dei nostri vulnerability assessment.",
    skills: ["Vulnerability assessment", "Network analysis", "Risk prioritization", "Remediation planning"],
    image: "/assets/certifications/cnvp.webp",
    alt: "CompTIA CNVP certification badge",
  },
  {
    slug: "securityx",
    name: "CompTIA SecurityX",
    subtitle: "Network Security Architect",
    issuer: "CompTIA",
    category: "comptia",
    description: "Architettura di sicurezza di rete enterprise e design di infrastrutture resilienti.",
    longDescription:
      "CompTIA SecurityX — Network Security Architect Certification valida competenze avanzate nella progettazione di architetture di sicurezza, segmentazione, zero trust e difesa perimetrale e interna delle reti aziendali.",
    skills: ["Security architecture", "Network segmentation", "Zero trust design", "Enterprise defense"],
    image: "/assets/certifications/securityx.svg",
    alt: "CompTIA SecurityX certification badge",
  },
  {
    slug: "ccna",
    name: "Cisco CCNA",
    subtitle: "Cisco Certified Network Associate",
    issuer: "Cisco",
    category: "vendor",
    description: "Fondamenta di networking, routing, switching e sicurezza di rete Cisco.",
    longDescription:
      "Il CCNA certifica competenze in networking IP, routing, switching, sicurezza di base e automazione. Essenziale per progettazione e hardening di infrastrutture di rete nei progetti HackSure.",
    skills: ["Routing & switching", "IP connectivity", "Network security", "Automazione base"],
    image: "/assets/certifications/ccna.svg",
    alt: "Cisco CCNA certification badge",
  },
  {
    slug: "sophos-firewall",
    name: "Sophos Firewall Engineer",
    subtitle: "Certified",
    issuer: "Sophos",
    category: "vendor",
    description: "Progettazione, deployment e gestione di firewall Sophos enterprise.",
    longDescription:
      "Certificazione Sophos Firewall Engineer che attesta competenze nella configurazione, tuning e gestione di appliance firewall Sophos — soluzione utilizzata nei progetti di network security per PMI.",
    skills: ["Firewall configuration", "Policy management", "VPN & remote access", "Threat protection"],
    image: "/assets/certifications/sophos.svg",
    alt: "Sophos Firewall Engineer certification badge",
  },
  {
    slug: "eicta-is",
    name: "EICTA IS",
    subtitle: "Information Security",
    issuer: "EICTA",
    category: "vendor",
    description: "Certificazione europea in information security e gestione della sicurezza informatica.",
    longDescription:
      "La certificazione EICTA IS (Information Security) attesta competenze strutturate in sicurezza informatica, risk management e conformità — allineate agli standard europei del settore ICT.",
    skills: ["Information security", "Risk management", "Security governance", "Compliance EU"],
    image: "/assets/certifications/eicta.svg",
    alt: "EICTA IS certification badge",
  },
];

export function getCertificationBySlug(slug: string) {
  return certifications.find((c) => c.slug === slug);
}

export function getCertificationsByCategory(category: CertCategory) {
  return certifications.filter((c) => c.category === category);
}
