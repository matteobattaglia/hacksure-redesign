import type { ComplianceFramework } from "./compliance";

export const complianceFrameworksEn: ComplianceFramework[] = [
  {
    slug: "nis2",
    title: "NIS2",
    subtitle: "EU Directive on the security of network and information systems",
    description:
      "Check whether your company falls within NIS2 obligations and assess your level of readiness to avoid penalties and operational disruption.",
    deadline: "Obligations in force from 2024-2025",
    longDescription:
      "The NIS2 Directive imposes cybersecurity obligations on public and private organizations operating in essential or important sectors. HackSure supports SMEs in identifying the applicable obligations, in the gap analysis and in implementing the required measures.",
    benefits: [
      "Reduced risk of administrative penalties",
      "Greater operational resilience",
      "Trust from customers and partners",
      "Alignment with enterprise supply chains",
    ],
    deliverables: [
      "NIS2 gap analysis",
      "Prioritized remediation plan",
      "Compliance documentation",
      "Ongoing support for the DPO/CISO",
    ],
    questions: [
      { id: "nis2-1", question: "Does your company operate in critical sectors (energy, transport, healthcare, finance, digital)?", weight: 3 },
      { id: "nis2-2", question: "Do you have more than 50 employees or revenue above €10M?", weight: 2 },
      { id: "nis2-3", question: "Do you maintain an up-to-date register of critical systems and IT suppliers?", weight: 2 },
      { id: "nis2-4", question: "Do you have a documented incident management plan with notification within 24 hours?", weight: 3 },
      { id: "nis2-5", question: "Do you regularly carry out security testing and internal audits?", weight: 2 },
      { id: "nis2-6", question: "Is management actively involved in cybersecurity governance?", weight: 2 },
      { id: "nis2-7", question: "Do you assess the security of critical suppliers before onboarding?", weight: 2 },
      { id: "nis2-8", question: "Do you have tested backup procedures and a business continuity plan?", weight: 2 },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR",
    subtitle: "EU Regulation 2016/679 on the protection of personal data",
    description:
      "Self-assess your organization's GDPR compliance and identify the critical areas in the processing of personal data.",
    longDescription:
      "GDPR requires appropriate technical and organizational measures to protect personal data. We support companies in mapping their processing activities, drafting the required documentation and aligning their operations with EU Regulation 2016/679.",
    benefits: [
      "Legal protection for your data processing",
      "Reduced risk of penalties from the Garante Privacy (the Italian data protection authority)",
      "Transparency towards customers and employees",
      "Documented and verifiable processes",
    ],
    deliverables: [
      "Record of processing activities",
      "DPIAs and risk assessments",
      "Privacy and cookie policies",
      "Staff training",
    ],
    questions: [
      { id: "gdpr-1", question: "Do you keep an up-to-date and complete record of processing activities?", weight: 3 },
      { id: "gdpr-2", question: "Are your privacy notices clear, accessible and compliant?", weight: 2 },
      { id: "gdpr-3", question: "Do you correctly handle requests for access, rectification and erasure?", weight: 2 },
      { id: "gdpr-4", question: "Have you appointed a DPO or an internal privacy officer?", weight: 2 },
      { id: "gdpr-5", question: "Are the consents you collect valid, tracked and revocable?", weight: 2 },
      { id: "gdpr-6", question: "Do the suppliers that process data have signed DPAs?", weight: 3 },
      { id: "gdpr-7", question: "Do you have data breach procedures with notification within 72 hours?", weight: 3 },
      { id: "gdpr-8", question: "Are employees trained on the processing of personal data?", weight: 1 },
    ],
  },
  {
    slug: "iso-27001",
    title: "ISO 27001",
    subtitle: "Information Security Management System",
    description:
      "Assess the maturity of your ISMS and prepare for the ISO/IEC 27001:2022 certification journey with a structured approach.",
    longDescription:
      "ISO/IEC 27001:2022 sets out the requirements for an Information Security Management System. We guide organizations from risk assessment to certification, with documentation, controls and internal audits.",
    benefits: [
      "Internationally recognized framework",
      "Systematic reduction of information security risk",
      "Competitive advantage in tenders and RFPs",
      "Integration with privacy and NIS2",
    ],
    deliverables: [
      "ISO 27005 risk assessment",
      "Statement of Applicability",
      "ISMS policies and procedures",
      "Internal audits and certification readiness",
    ],
    questions: [
      { id: "iso-1", question: "Have you defined the scope and boundaries of your ISMS?", weight: 2 },
      { id: "iso-2", question: "Is there a security policy approved by top management?", weight: 3 },
      { id: "iso-3", question: "Have you identified and assessed your information security risks?", weight: 3 },
      { id: "iso-4", question: "Are the Annex A controls implemented and documented?", weight: 3 },
      { id: "iso-5", question: "Do you carry out internal audits and management reviews?", weight: 2 },
      { id: "iso-6", question: "Do you have an up-to-date risk treatment plan?", weight: 2 },
      { id: "iso-7", question: "Are IT assets inventoried and classified?", weight: 2 },
      { id: "iso-8", question: "Is there a security training program in place?", weight: 1 },
    ],
  },
  {
    slug: "dora",
    title: "DORA",
    subtitle: "Digital Operational Resilience Act — financial sector",
    description:
      "For financial entities and critical ICT providers: assess your digital operational resilience and ICT risk management.",
    longDescription:
      "DORA establishes digital operational resilience requirements for the financial sector and critical ICT providers. We offer assessments, ICT risk management frameworks and compliance support.",
    benefits: [
      "Compliance with EU financial regulation",
      "Demonstrable operational resilience",
      "Governance of ICT providers",
      "Reduced risk of service disruption",
    ],
    deliverables: [
      "ICT Risk Management Framework",
      "Operational resilience testing",
      "Register of critical ICT providers",
      "DORA compliance report",
    ],
    questions: [
      { id: "dora-1", question: "Do you operate in the financial sector or as a critical ICT provider?", weight: 3 },
      { id: "dora-2", question: "Do you have a documented ICT risk management framework?", weight: 3 },
      { id: "dora-3", question: "Do you regularly test disruption and recovery scenarios?", weight: 2 },
      { id: "dora-4", question: "Do you monitor and classify critical ICT providers?", weight: 3 },
      { id: "dora-5", question: "Do you have an ICT incident response plan?", weight: 2 },
      { id: "dora-6", question: "Is the board informed about ICT risks and resilience?", weight: 2 },
    ],
  },
  {
    slug: "pci-dss",
    title: "PCI DSS",
    subtitle: "Payment Card Industry Data Security Standard",
    description:
      "If you handle card payments, check your alignment with PCI DSS requirements to protect cardholder data.",
    longDescription:
      "PCI DSS v4.0 defines the security requirements for organizations that handle payment card data. We carry out gap analysis, network segmentation and remediation support to achieve and maintain compliance.",
    benefits: [
      "Protection of payment data",
      "Reduction of fraud and chargebacks",
      "Contractual compliance with acquirers",
      "Trust from e-commerce customers",
    ],
    deliverables: [
      "PCI DSS v4.0 gap analysis",
      "Payment network segmentation",
      "Hardening of cardholder systems",
      "ASV reports and remediation",
    ],
    questions: [
      { id: "pci-1", question: "Do you store, process or transmit payment card data?", weight: 3 },
      { id: "pci-2", question: "Is the payment network segmented from the rest of the infrastructure?", weight: 3 },
      { id: "pci-3", question: "Do you run quarterly ASV scans and annual penetration tests?", weight: 2 },
      { id: "pci-4", question: "Are access logs for payment systems monitored?", weight: 2 },
      { id: "pci-5", question: "Are encryption keys managed according to best practice?", weight: 2 },
      { id: "pci-6", question: "Are staff with access to card data trained and authorized?", weight: 1 },
    ],
  },
  {
    slug: "soc2",
    title: "SOC 2",
    subtitle: "Service Organization Control — Trust Services Criteria",
    description:
      "For SaaS and cloud services: assess your controls over security, availability, processing integrity, privacy and confidentiality.",
    longDescription:
      "SOC 2 attests to internal controls over security, availability, processing integrity, privacy and confidentiality. We prepare SaaS and cloud organizations for Type I and Type II audits, with control mapping and evidence collection.",
    benefits: [
      "Verifiable trust for enterprise customers",
      "Documented and auditable controls",
      "Faster B2B contracts",
      "Improvement of internal processes",
    ],
    deliverables: [
      "SOC 2 readiness assessment",
      "TSC control mapping",
      "Evidence and policies",
      "Type I/II audit support",
    ],
    questions: [
      { id: "soc-1", question: "Do you provide cloud/SaaS services to enterprise customers?", weight: 2 },
      { id: "soc-2", question: "Do you have role-based access control (RBAC)?", weight: 2 },
      { id: "soc-3", question: "Are production changes tracked and approved?", weight: 2 },
      { id: "soc-4", question: "Do you monitor availability and performance against defined SLAs?", weight: 2 },
      { id: "soc-5", question: "Is customer data encrypted at rest and in transit?", weight: 3 },
      { id: "soc-6", question: "Do you run background checks on staff with access to data?", weight: 1 },
    ],
  },
];

export function getComplianceBySlugEn(slug: string) {
  return complianceFrameworksEn.find((f) => f.slug === slug);
}

// Level keys stay identical to the Italian version: they are used as lookup keys
// for styling, not as display copy.
export function calculateComplianceScoreEn(
  framework: ComplianceFramework,
  answers: Record<string, boolean>,
): { score: number; level: "critico" | "medio" | "buono" | "eccellente"; message: string } {
  let earned = 0;
  let max = 0;

  for (const q of framework.questions) {
    max += q.weight;
    if (answers[q.id]) earned += q.weight;
  }

  const score = max > 0 ? Math.round((earned / max) * 100) : 0;

  if (score < 40) {
    return {
      score,
      level: "critico",
      message: "Critical compliance level. A structured intervention with immediate priorities is required.",
    };
  }
  if (score < 65) {
    return {
      score,
      level: "medio",
      message: "Partial compliance. There are significant gaps to close with a remediation plan.",
    };
  }
  if (score < 85) {
    return {
      score,
      level: "buono",
      message: "Good compliance baseline. Optimize the missing controls to achieve full alignment.",
    };
  }
  return {
    score,
    level: "eccellente",
    message: "Excellent level of readiness. Consider a formal audit to certify your compliance.",
  };
}
