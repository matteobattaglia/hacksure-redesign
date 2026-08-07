import type { PartnerType } from "./partners";

export const partnerTypesEn: PartnerType[] = [
  {
    id: "studio-legale",
    title: "Law firm",
    eyebrow: "Expert reports & forensics",
    summary:
      "We work together on expert technical reports for online fraud, digital forensics and technical support for case files.",
    description:
      "We support law firms with technical analysis, evidence collection and structured expert reports that can be used in civil and criminal proceedings. Ideal for cases of online fraud, account compromise, business email compromise and digital forensics.",
    benefits: [
      "Expert technical reports for online fraud and digital scams",
      "Digital forensics and preservation of evidence",
      "Clear reports to attach to case files and complaints",
      "An alignment call on feasibility and technical strategy",
    ],
    cta: "Propose a legal collaboration",
  },
  {
    id: "web-agency",
    title: "Web agency",
    eyebrow: "White label",
    summary:
      "White label option: we help you deliver more secure platforms to your clients, with higher margins.",
    description:
      "With the white label model you remain the commercial point of contact for the client. We take care of security assessment, hardening, compliance and protection of the platforms you deliver. Operational and commercial details are defined on a call — the goal is to help you earn more while offering a genuinely valuable service.",
    benefits: [
      "White label partnership with no overlap on your client",
      "Security and compliance built into your projects",
      "The opportunity to increase your margin on deliverables",
      "Dedicated technical support, scoped on a call",
    ],
    cta: "Start the white label partnership",
  },
  {
    id: "fornitore-elettronica",
    title: "Electronics and hardware supplier",
    eyebrow: "Hardware & installations",
    summary:
      "We sell your products to our clients who need installations, firewalls, endpoints and infrastructure.",
    description:
      "When our clients need hardware for security installations (firewalls, appliances, endpoints, networking), we can recommend and channel your products. A clear commercial collaboration, backed by real demand from our portfolio of small and medium businesses.",
    benefits: [
      "Access to clients who are already requesting installations",
      "A complementary commercial channel, not a competing one",
      "Focus on security and infrastructure solutions",
      "Alignment on pricing and availability on a call",
    ],
    cta: "Propose your catalogue",
  },
];

export function getPartnerByIdEn(id: string) {
  return partnerTypesEn.find((p) => p.id === id);
}
