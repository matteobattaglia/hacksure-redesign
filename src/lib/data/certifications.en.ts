import type { CertCategory, Certification } from "./certifications";

export const certCategoriesEn: Record<CertCategory, { label: string; description: string }> = {
  offensive: {
    label: "Offensive Security",
    description: "Hands-on certifications in penetration testing and ethical hacking.",
  },
  comptia: {
    label: "CompTIA",
    description: "International standards for cybersecurity, networking and vulnerability assessment.",
  },
  vendor: {
    label: "Vendor & Specialist",
    description: "Certifications on enterprise platforms and frameworks.",
  },
};

export const certificationsEn: Certification[] = [
  {
    slug: "ejpt",
    name: "eJPT",
    subtitle: "Junior Penetration Tester",
    issuer: "INE Security",
    category: "offensive",
    description: "Entry-level certification validating the fundamentals of penetration testing and ethical hacking.",
    longDescription:
      "The eLearnSecurity Junior Penetration Tester (eJPT) certifies core skills in information gathering, vulnerability scanning and basic exploitation. It is the starting point of the HackSure team's offensive security path.",
    skills: ["Information gathering", "Vulnerability scanning", "Basic exploitation", "Reporting"],
    image: "/assets/certifications/ejpt.svg",
    alt: "eJPT certification badge",
  },
  {
    slug: "ecppt",
    name: "eCPPT",
    subtitle: "Professional Penetration Tester",
    issuer: "INE Security",
    category: "offensive",
    description: "Advanced penetration testing certification based on real-world offensive methodologies.",
    longDescription:
      "The eLearnSecurity Certified Professional Penetration Tester (eCPPT) requires compromising real networks in a controlled lab. It attests to advanced capabilities in network penetration, Active Directory and post-exploitation.",
    skills: ["Network penetration", "Active Directory", "Post-exploitation", "Real-world methodologies"],
    image: "/assets/certifications/ecppt.webp",
    alt: "eCPPT certification badge",
  },
  {
    slug: "pentest-plus",
    name: "CompTIA PenTest+",
    issuer: "CompTIA",
    category: "offensive",
    description: "Penetration testing, vulnerability assessment and professional reporting.",
    longDescription:
      "PenTest+ validates practical skills in planning, scanning, exploitation, post-exploitation and reporting. These are the methodologies applied in every HackSure penetration testing engagement.",
    skills: ["Planning & scoping", "Vulnerability scanning", "Exploitation", "Professional reporting"],
    image: "/assets/certifications/pentest-plus.webp",
    alt: "CompTIA PenTest+ certification badge",
  },
  {
    slug: "security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    category: "comptia",
    description: "Core cybersecurity skills: threat management, cryptography and governance.",
    longDescription:
      "CompTIA Security+ is one of the most widely recognised certifications in the world for cybersecurity professionals. It covers threat analysis, secure architectures, security operations and regulatory compliance.",
    skills: ["Threat management", "Cryptography", "Identity & access", "Governance and compliance"],
    image: "/assets/certifications/security-plus.webp",
    alt: "CompTIA Security+ certification badge",
  },
  {
    slug: "network-plus",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    category: "comptia",
    description: "Design, configuration and troubleshooting of enterprise networks.",
    longDescription:
      "Network+ attests to solid networking skills: topologies, protocols, troubleshooting and network security. It is the technical foundation for infrastructure audits and firewall hardening.",
    skills: ["Network design", "TCP/IP protocols", "Troubleshooting", "Network security"],
    image: "/assets/certifications/network-plus.webp",
    alt: "CompTIA Network+ certification badge",
  },
  {
    slug: "cnvp",
    name: "CompTIA CNVP",
    subtitle: "Network Vulnerability Assessment",
    issuer: "CompTIA",
    category: "comptia",
    description: "Certified expertise in vulnerability assessment and network analysis.",
    longDescription:
      "The CNVP (Network Vulnerability Assessment) certification attests to specialist skills in identifying, classifying and prioritising network vulnerabilities — a core capability behind our vulnerability assessments.",
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
    description: "Enterprise network security architecture and the design of resilient infrastructures.",
    longDescription:
      "CompTIA SecurityX — Network Security Architect Certification validates advanced skills in designing security architectures, segmentation, zero trust and both perimeter and internal defence of corporate networks.",
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
    description: "Foundations of networking, routing, switching and Cisco network security.",
    longDescription:
      "The CCNA certifies skills in IP networking, routing, switching, basic security and automation. It is essential for designing and hardening network infrastructures in HackSure projects.",
    skills: ["Routing & switching", "IP connectivity", "Network security", "Basic automation"],
    image: "/assets/certifications/ccna.svg",
    alt: "Cisco CCNA certification badge",
  },
  {
    slug: "sophos-firewall",
    name: "Sophos Firewall Engineer",
    subtitle: "Certified",
    issuer: "Sophos",
    category: "vendor",
    description: "Design, deployment and management of enterprise Sophos firewalls.",
    longDescription:
      "The Sophos Firewall Engineer certification attests to skills in configuring, tuning and managing Sophos firewall appliances — a solution used in our network security projects for small and medium businesses.",
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
    description: "European certification in information security and cybersecurity management.",
    longDescription:
      "The EICTA IS (Information Security) certification attests to structured skills in information security, risk management and compliance — aligned with European standards for the ICT sector.",
    skills: ["Information security", "Risk management", "Security governance", "EU compliance"],
    image: "/assets/certifications/eicta.svg",
    alt: "EICTA IS certification badge",
  },
];

export function getCertificationBySlugEn(slug: string) {
  return certificationsEn.find((c) => c.slug === slug);
}

export function getCertificationsByCategoryEn(category: CertCategory) {
  return certificationsEn.filter((c) => c.category === category);
}
