import type { SecurityService } from "./services";

export const securityServicesEn: SecurityService[] = [
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    shortDescription: "Systematic identification of vulnerabilities before attackers exploit them.",
    description:
      "We analyse your entire attack surface — networks, servers, web applications and cloud environments — to uncover technical weaknesses and misconfigurations.",
    longDescription:
      "A Vulnerability Assessment is the starting point of any structured security programme. Through in-depth scanning and manual verification, we map the vulnerabilities across your IT assets, classify them according to CVSS and deliver a report with clear remediation priorities for both your technical team and your management.",
    features: [
      "Full infrastructure scanning",
      "Identification of critical issues with CVSS scoring",
      "Detailed report with prioritised findings",
      "Practical recommendations and remediation guidance",
    ],
    methodology: [
      "Scope definition and asset inventory",
      "Automated scanning and manual verification",
      "Risk classification and prioritisation",
      "Report delivery and debriefing session",
    ],
    cta: "Request an assessment",
    category: "Offensive Security",
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    shortDescription: "Real-world attack simulations to test how resilient your company really is.",
    description:
      "Our ethical hackers simulate targeted attacks to verify how exploitable your vulnerabilities really are, providing hard evidence and a prioritised remediation path.",
    longDescription:
      "A Penetration Test goes beyond simple scanning: it simulates a real attacker attempting to compromise your systems. We follow recognised methodologies (PTES, OWASP) and apply black, grey or white box approaches depending on your needs, delivering both a technical report and an executive summary.",
    features: [
      "Manual and automated testing",
      "Real attack simulations (black/grey/white box)",
      "Discovery of unauthorised access and privilege escalation paths",
      "Technical report + executive summary",
    ],
    methodology: [
      "Kick-off and definition of the rules of engagement",
      "Reconnaissance and enumeration",
      "Controlled exploitation and post-exploitation",
      "Reporting, remediation and optional retest",
    ],
    cta: "Request a pentest",
    category: "Offensive Security",
  },
  {
    slug: "network-security",
    title: "Network Security & Firewall",
    shortDescription: "Advanced protection of your corporate network with continuous monitoring.",
    description:
      "We design, configure and optimise your network security architecture to reduce the attack surface and ensure full visibility over your traffic.",
    longDescription:
      "A poorly configured network is the most common entry point for attackers. We audit firewalls, routing rules, segmentation and access policies, then implement hardening and monitoring to reduce the risk of lateral movement and data exfiltration.",
    features: [
      "Firewall configuration and hardening",
      "Network segmentation and micro-segmentation",
      "Infrastructure hardening",
      "Monitoring and alerting",
    ],
    methodology: [
      "Audit of configurations and active rules",
      "Traffic analysis and identification of critical points",
      "Segmentation design",
      "Implementation and verification",
    ],
    cta: "Protect your network",
    category: "Infrastructure",
  },
  {
    slug: "endpoint-security",
    title: "Endpoint Security (EDR/XDR)",
    shortDescription: "Advanced protection for every corporate device against modern threats.",
    description:
      "We deploy enterprise-class EDR/XDR solutions — including our Kaspersky partnership — to detect, contain and respond to advanced threats and ransomware in real time.",
    longDescription:
      "Endpoints are the most exposed perimeter of any modern organisation. We select, deploy and manage EDR/XDR solutions suited to the size and budget of your company, covering rollout, tuning and continuous monitoring.",
    features: [
      "Enterprise EDR/XDR solutions",
      "Real-time protection",
      "Centralised, SOC-ready monitoring",
      "Defence against ransomware and zero-day threats",
    ],
    methodology: [
      "Environment assessment and requirements gathering",
      "Solution selection and deployment",
      "Policy tuning and SIEM integration",
      "Operator training and ongoing support",
    ],
    cta: "Discover Kaspersky EDR",
    category: "Endpoint Protection",
    image: "/assets/images/shutterstock_2695394565-scaled.jpg",
    deliverables: [
      "Environment assessment and recommended Kaspersky stack",
      "EDR/XDR deployment and configuration",
      "Policy documentation and operational runbooks",
      "Training for your internal team",
    ],
    useCases: [
      "Ransomware protection across workstations and servers.",
      "Centralised endpoint visibility for small and medium businesses.",
      "Alignment with NIS2 and ISO 27001 endpoint control requirements.",
    ],
    faqs: [
      {
        question: "Are you an official Kaspersky partner?",
        answer:
          "Yes. HackSure is a Kaspersky Registered B2B Partner. You will find more details on our dedicated Kaspersky Partnership page.",
      },
    ],
    relatedLinks: [{ label: "Kaspersky Partner page", href: "/partner/kaspersky" }],
  },
  {
    slug: "security-awareness",
    title: "Security Awareness & Training",
    shortDescription: "Training your people: the first line of defence against phishing.",
    description:
      "Awareness programmes and phishing simulations designed to reduce human risk, the leading cause of security breaches in small and medium businesses.",
    longDescription:
      "The human factor remains the leading cause of security incidents. We design tailored awareness programmes with phishing simulations, e-learning courses and metrics that track improvement over time, all adapted to your business context.",
    features: [
      "Simulated phishing campaigns",
      "Customised e-learning training",
      "Metrics and reporting for management",
      "Ongoing annual programmes",
    ],
    methodology: [
      "Behavioural baseline assessment",
      "Simulated phishing campaigns",
      "Targeted training based on the results",
      "KPI monitoring and quarterly reporting",
    ],
    cta: "Start the training",
    category: "Human Factor",
  },
  {
    slug: "incident-response",
    title: "Incident Response & Forensics",
    shortDescription: "Fast, structured response to security incidents.",
    description:
      "Immediate support in the event of a breach, ransomware attack or compromise: containment, forensic analysis, eradication and return to normal operations.",
    longDescription:
      "When an incident happens, every minute counts. Our Incident Response team intervenes with structured procedures to contain the threat, assess the impact, eradicate the compromise and support your communications with authorities and stakeholders.",
    features: [
      "Emergency retainer agreements",
      "Digital forensic analysis",
      "Containment and eradication",
      "Reporting for insurers and authorities",
    ],
    methodology: [
      "Activation and immediate triage",
      "Containment and evidence preservation",
      "Forensic analysis and root cause investigation",
      "Eradication, recovery and lessons learned",
    ],
    cta: "Talk to an IR expert",
    category: "Emergency",
  },
  {
    slug: "notarizzazione-blockchain",
    title: "Blockchain Notarization",
    shortDescription:
      "Immutable timestamping of documents and digital evidence, backed by highly qualified law firms.",
    description:
      "We anchor documents, contracts and digital evidence on blockchain to guarantee a certified date, integrity and enforceability. We work alongside highly qualified law firms so the evidence can be used in civil, commercial and litigation contexts.",
    longDescription:
      "Blockchain notarization associates a document or file with an immutable cryptographic timestamp: at any point in time you can prove that the content existed in that exact form on a specific date and has not been altered since. HackSure manages the entire technical process end to end — from evidence preparation to on-chain anchoring — and relies on highly qualified law firms to properly frame the use of that evidence in contractual, pre-litigation and court proceedings. Ideal for contracts, minutes, security reports, email communications, logs and forensic material.",
    features: [
      "SHA-256 cryptographic hash of the document or file set",
      "Anchoring on a public blockchain with an immutable timestamp",
      "Downloadable and independently verifiable notarization certificate",
      "Long-term preservation of integrity evidence",
      "Collaboration with highly qualified law firms",
      "Support for civil, commercial and litigation use cases",
    ],
    methodology: [
      "Collection and inventory of the documents or evidence to be notarized",
      "Hash generation and preparation of the evidence package",
      "Blockchain anchoring and issuance of the certificate",
      "Delivery of the technical dossier and, if requested, legal support alongside it",
    ],
    cta: "Request a notarization",
    category: "Digital Trust",
    audience: [
      "Companies that need to prove a certified date for contracts, quotes or agreements.",
      "Professional firms and consultants producing digital reports or expert opinions.",
      "IT and security teams that need to freeze logs, dumps and incident reports.",
      "Parties in pre-litigation who want to preserve evidence before taking legal action.",
    ],
    deliverables: [
      "Notarization certificate with hash, timestamp and transaction reference",
      "Instructions for independently verifying the integrity of the document",
      "Technical evidence dossier (optional, on request)",
      "Support from a qualified law firm for use in court proceedings (optional)",
    ],
    useCases: [
      "Contracts and commercial proposals to be fixed with a certified date.",
      "Vulnerability assessment or incident response reports to be made tamper-evident.",
      "Emails, chats and communications to preserve ahead of a dispute.",
      "Shareholder meeting minutes, resolutions and digital corporate records.",
      "Forensic material to be handed over to lawyers or authorities.",
    ],
    faqs: [
      {
        question: "Does blockchain notarization replace a notary?",
        answer:
          "No. It does not replace a notarial deed. It provides technical proof that a given content existed and was intact on a certified date. For the legal aspects we rely on qualified law firms.",
      },
      {
        question: "Do the documents become public on the blockchain?",
        answer:
          "No. Only the cryptographic hash is published on the blockchain, never the content of the file. The original document stays entirely under your control.",
      },
      {
        question: "How long does the process take?",
        answer:
          "For a single document or a small set of files, typically within a few working hours of receiving the complete material.",
      },
    ],
    disclaimer:
      "HackSure provides the technical notarization service and the preservation of evidence. Legal assistance is delivered by highly qualified third-party law firms, selected according to the case at hand. This service does not constitute legal advice.",
  },
  {
    slug: "perizia-truffe-online",
    title: "Online Fraud Response",
    shortDescription:
      "A free call, a feasibility analysis and an expert technical report if you have been defrauded online — for lawyers and authorities.",
    description:
      "Online Fraud Response: if you have been defrauded, we start with a call to understand what happened. After a careful feasibility analysis, if there is a real chance of helping you we prepare an expert technical report to submit to lawyers and the competent authorities.",
    longDescription:
      "Online Fraud Response is the HackSure service for anyone who has suffered digital fraud. Phishing, SIM swap, bogus investments, marketplace scams, social engineering, ransomware and account theft often leave victims with no idea where to start. We begin with an introductory call to reconstruct the facts, followed by a technical feasibility analysis. Only if the outcome is positive and there is a genuine chance of achieving something concrete do we proceed to draft a structured expert technical report that can be used by lawyers, law enforcement and the competent authorities. We do not promise impossible results: we assess honestly whether it makes sense to move forward and, when it does, we produce a clear, well-documented and professional report.",
    features: [
      "Free initial call to reconstruct the facts",
      "Technical feasibility analysis before any commitment",
      "Collection and preservation of digital evidence",
      "Structured expert technical report for lawyers and authorities",
      "Timeline of events and reconstruction of the modus operandi",
      "Practical guidance on the next steps to take",
    ],
    methodology: [
      "Introductory call: listening to the facts, collecting screenshots, emails, transfers and logs",
      "Feasibility analysis: assessing the evidence and the chances of a useful outcome",
      "If the outcome is positive: technical deep dive and preservation of the evidence",
      "Drafting of the expert report and delivery to you or your lawyer",
    ],
    cta: "Book your free call",
    category: "Digital Forensics",
    audience: [
      "Individuals and families hit by phishing, account theft or online banking fraud.",
      "Business owners and small and medium businesses hit by B2B fraud, fake invoices or email compromise.",
      "Professionals and firms that need an expert technical report to support a case file.",
      "People who have already filed a criminal complaint and need to strengthen the file with technical evidence.",
    ],
    deliverables: [
      "Written outcome of the feasibility analysis (also when the answer is no)",
      "Expert technical report reconstructing the facts and the evidence (if we proceed)",
      "Annexes: screenshots, file hashes, extracts of communications and relevant traces",
      "Guidance on which bodies and channels to turn to (Polizia Postale (Italian cybercrime police), your bank, your lawyer)",
    ],
    useCases: [
      "A bank transfer or payment made following a fraudulent email or message.",
      "An online investment that turned out to be a scam (crypto, trading, bogus platforms).",
      "Theft of a social, email or marketplace account resulting in financial loss.",
      "SIM swap or compromise of your online banking.",
      "B2B fraud involving a change of a supplier's bank details (Business Email Compromise).",
    ],
    faqs: [
      {
        question: "Is there a charge for the initial call?",
        answer:
          "No. The first call is free and serves only to understand what happened and whether it makes sense to dig deeper. There is no obligation to continue.",
      },
      {
        question: "What happens if the feasibility analysis is negative?",
        answer:
          "We tell you clearly, with our reasons. We do not proceed with the report if there is no real chance of producing something useful. Better to know straight away than to spend money for nothing.",
      },
      {
        question: "Do you replace a lawyer or a criminal complaint?",
        answer:
          "No. We do not provide legal advice and we do not replace the authorities. We prepare the expert technical report that your lawyer or the competent authorities can use in the case file.",
      },
      {
        question: "How long does it take to receive the report?",
        answer:
          "It depends on the complexity of the case and how complete the evidence is. After the call and the feasibility analysis, typical turnaround ranges from a few days to a couple of weeks.",
      },
    ],
    disclaimer:
      "HackSure provides technical analysis and expert IT reports. We are not a law firm and we do not replace criminal complaints, legal proceedings or legal advice. A positive feasibility analysis is no guarantee that the money will be recovered or that court proceedings will succeed.",
  },
];

export function getSecurityServiceEnBySlug(slug: string) {
  return securityServicesEn.find((s) => s.slug === slug);
}
