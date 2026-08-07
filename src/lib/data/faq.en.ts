import type { HomeFaq } from "./faq";

export const homeFaqsEn: HomeFaq[] = [
  {
    question: "Am I legally required to protect my company's data?",
    answer:
      "Yes. The GDPR requires any company that processes data on customers, employees or suppliers to put adequate security measures in place. In many sectors the NIS2 directive applies on top of that.",
    ctaLabel: "Check your obligations",
    ctaHref: "/compliance/nis2",
  },
  {
    question: "What do I risk if someone breaks into a company computer?",
    answer:
      "Business downtime, data theft, ransom demands and reputational damage. For many small and medium businesses a ransomware attack means days of downtime and thousands of euro in losses.",
    ctaLabel: "See how to protect yourself",
    ctaHref: "/servizi",
  },
  {
    question: "I received a suspicious email: what should I do?",
    answer:
      "Do not click links or attachments, do not reply and do not enter your credentials. Report the email to your IT manager. If you have already clicked, contact us straight away to limit the damage.",
    ctaLabel: "Talk to an expert",
    ctaHref: "/contatti",
  },
  {
    question: "How much does it cost to protect my company from hackers?",
    answer:
      "It depends on your size and on the systems to be protected. For a small or medium business, an entry-level programme starts from a few hundred euro per month. The initial assessment is always free.",
    ctaLabel: "Request an estimate",
    ctaHref: "/contatti",
  },
  {
    question: "What does it actually mean to be 'GDPR compliant'?",
    answer:
      "It means processing personal data in a secure and documented way, with consent, privacy notices and technical measures. If you do not, you risk fines from the data protection authority of up to 20 million euro.",
    ctaLabel: "Check whether you are compliant",
    ctaHref: "/compliance/gdpr",
  },
  {
    question: "I have been told I need to comply with NIS2: what is it?",
    answer:
      "It is a European regulation that requires many companies to strengthen their cybersecurity. If you are not sure whether it applies to you, a free 5-minute check gives you the answer.",
    ctaLabel: "Check NIS2",
    ctaHref: "/compliance/nis2",
  },
  {
    question: "Isn't an antivirus enough to protect my company?",
    answer:
      "No. An antivirus blocks only part of the threats. You also need updates, backups, staff training and regular checks on your exposed systems.",
    ctaLabel: "See our services",
    ctaHref: "/servizi",
  },
  {
    question: "How can I tell whether my company has been hacked?",
    answer:
      "It is often not obvious: slowdowns, unusual logins, strange emails sent without your knowledge. A technical analysis verifies whether there are compromises, including hidden ones.",
    ctaLabel: "Request a check",
    ctaHref: "/servizi/penetration-testing",
  },
];

export const faqsEn = [
  {
    question: "Is my company really at risk of cyber attacks?",
    answer:
      "Yes. Today any company with digital systems can be a target, regardless of its size. Small and medium businesses are often hit hardest because they are less protected and seen as easier targets by attackers.",
  },
  {
    question: "What is a Vulnerability Assessment?",
    answer:
      "It is a systematic analysis that identifies the vulnerabilities in your systems, networks and applications before an attacker can exploit them. It gives you a complete map of your risk with remediation priorities.",
  },
  {
    question: "What is the difference between a Vulnerability Assessment and a Penetration Test?",
    answer:
      "A Vulnerability Assessment identifies technical weaknesses through automated and manual scanning. A Penetration Test goes further: it simulates a real attack to verify how exploitable those weaknesses really are and what impact they could have.",
  },
  {
    question: "Can your tests take my systems down?",
    answer:
      "No. All activities are planned during the kick-off, agreed with your IT team and carried out in a controlled way so that business operations are not interrupted.",
  },
  {
    question: "How long does an assessment take?",
    answer:
      "It depends on the complexity of your infrastructure. An initial assessment can be completed in 3-5 working days; a full penetration test typically takes 1-3 weeks.",
  },
  {
    question: "Will I receive a report after the assessment?",
    answer:
      "Yes. We provide a detailed report with all the vulnerabilities identified, their risk level (CVSS), technical evidence and a prioritised action plan with concrete recommendations.",
  },
  {
    question: "Does my company have to comply with NIS2?",
    answer:
      "If you operate in critical sectors (energy, transport, healthcare, finance, digital) and exceed certain size thresholds, yes. We offer a free preliminary check to determine this in 30 seconds.",
  },
  {
    question: "Do you only work with large companies?",
    answer:
      "No. HackSure specialises in Italian small and medium businesses. Our services are scalable and tailored to the needs and budget of SMEs.",
  },
];
