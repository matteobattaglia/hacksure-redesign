export type ComplianceQuestion = {
  id: string;
  question: string;
  weight: number;
};

export type ComplianceFramework = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  deadline?: string;
  benefits: string[];
  deliverables: string[];
  questions: ComplianceQuestion[];
};

export const complianceFrameworks: ComplianceFramework[] = [
  {
    slug: "nis2",
    title: "NIS2",
    subtitle: "Direttiva UE sulla sicurezza delle reti e dei sistemi informativi",
    description:
      "Verifica se la tua azienda rientra negli obblighi NIS2 e valuta il livello di preparazione per evitare sanzioni e interruzioni operative.",
    deadline: "Obblighi in vigore dal 2024-2025",
    longDescription:
      "La Direttiva NIS2 impone obblighi di cybersecurity a organizzazioni pubbliche e private che operano in settori essenziali o importanti. HackSure supporta le PMI nell'identificazione degli obblighi applicabili, nella gap analysis e nell'implementazione delle misure richieste.",
    benefits: [
      "Riduzione del rischio di sanzioni amministrative",
      "Maggiore resilienza operativa",
      "Fiducia di clienti e partner",
      "Allineamento con supply chain enterprise",
    ],
    deliverables: [
      "Gap analysis NIS2",
      "Piano di remediation prioritizzato",
      "Documentazione di conformità",
      "Supporto continuo al DPO/CISO",
    ],
    questions: [
      { id: "nis2-1", question: "La vostra azienda opera in settori critici (energia, trasporti, sanità, finanza, digitale)?", weight: 3 },
      { id: "nis2-2", question: "Avete più di 50 dipendenti o fatturato superiore a €10M?", weight: 2 },
      { id: "nis2-3", question: "Disponete di un registro aggiornato dei sistemi critici e dei fornitori IT?", weight: 2 },
      { id: "nis2-4", question: "Avete un piano documentato di gestione incidenti e notifica entro 24h?", weight: 3 },
      { id: "nis2-5", question: "Eseguite regolarmente test di sicurezza e audit interni?", weight: 2 },
      { id: "nis2-6", question: "Il management partecipa attivamente alla governance della cybersecurity?", weight: 2 },
      { id: "nis2-7", question: "Valutate la sicurezza dei fornitori critici prima dell'onboarding?", weight: 2 },
      { id: "nis2-8", question: "Avete procedure di backup testate e piano di continuità operativa?", weight: 2 },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR",
    subtitle: "Regolamento UE 2016/679 sulla protezione dei dati personali",
    description:
      "Autovalutate la conformità GDPR della vostra organizzazione e identificate le aree critiche per il trattamento dei dati personali.",
    longDescription:
      "Il GDPR richiede misure tecniche e organizzative adeguate per proteggere i dati personali. Supportiamo le aziende nella mappatura dei trattamenti, nella redazione della documentazione e nell'allineamento operativo al Regolamento UE 2016/679.",
    benefits: [
      "Protezione legale del trattamento dati",
      "Riduzione rischio sanzioni Garante Privacy",
      "Trasparenza verso clienti e dipendenti",
      "Processi documentati e verificabili",
    ],
    deliverables: [
      "Registro trattamenti",
      "DPIA e valutazioni rischio",
      "Policy privacy e cookie",
      "Formazione personale",
    ],
    questions: [
      { id: "gdpr-1", question: "Avete un registro dei trattamenti aggiornato e completo?", weight: 3 },
      { id: "gdpr-2", question: "Le informative privacy sono chiare, accessibili e conformi?", weight: 2 },
      { id: "gdpr-3", question: "Gestite correttamente le richieste di accesso, rettifica e cancellazione?", weight: 2 },
      { id: "gdpr-4", question: "Avete nominato un DPO o responsabile privacy interno?", weight: 2 },
      { id: "gdpr-5", question: "I consensi raccolti sono validi, tracciati e revocabili?", weight: 2 },
      { id: "gdpr-6", question: "I fornitori che trattano dati hanno DPA firmati?", weight: 3 },
      { id: "gdpr-7", question: "Avete procedure per data breach con notifica entro 72h?", weight: 3 },
      { id: "gdpr-8", question: "I dipendenti sono formati sul trattamento dati personali?", weight: 1 },
    ],
  },
  {
    slug: "iso-27001",
    title: "ISO 27001",
    subtitle: "Sistema di Gestione della Sicurezza delle Informazioni",
    description:
      "Valutate la maturità del vostro SGSI e preparatevi al percorso di certificazione ISO/IEC 27001:2022 con un approccio strutturato.",
    longDescription:
      "ISO/IEC 27001:2022 definisce i requisiti per un Sistema di Gestione della Sicurezza delle Informazioni. Accompagniamo le organizzazioni dal risk assessment alla certificazione, con documentazione, controlli e audit interni.",
    benefits: [
      "Framework riconosciuto internazionalmente",
      "Riduzione sistematica del rischio informatico",
      "Vantaggio competitivo in gare e RFP",
      "Integrazione con privacy e NIS2",
    ],
    deliverables: [
      "Risk assessment ISO 27005",
      "Statement of Applicability",
      "Politiche e procedure SGSI",
      "Audit interni e readiness certification",
    ],
    questions: [
      { id: "iso-1", question: "Avete definito scope e confini del SGSI?", weight: 2 },
      { id: "iso-2", question: "Esiste una politica di sicurezza approvata dal top management?", weight: 3 },
      { id: "iso-3", question: "Avete identificato e valutato i rischi informatici?", weight: 3 },
      { id: "iso-4", question: "I controlli dell'Allegato A sono implementati e documentati?", weight: 3 },
      { id: "iso-5", question: "Conducete audit interni e review di management?", weight: 2 },
      { id: "iso-6", question: "Avete un piano di trattamento dei rischi aggiornato?", weight:  2 },
      { id: "iso-7", question: "Gli asset informatici sono inventariati e classificati?", weight: 2 },
      { id: "iso-8", question: "Esiste un programma di formazione sulla sicurezza?", weight: 1 },
    ],
  },
  {
    slug: "dora",
    title: "DORA",
    subtitle: "Digital Operational Resilience Act — settore finanziario",
    description:
      "Per enti finanziari e fornitori ICT critici: valutate la resilienza operativa digitale e la gestione del rischio ICT.",
    longDescription:
      "DORA stabilisce requisiti di resilienza operativa digitale per il settore finanziario e i fornitori ICT critici. Offriamo assessment, framework di gestione del rischio ICT e supporto alla conformità.",
    benefits: [
      "Conformità normativa finanziaria UE",
      "Resilienza operativa dimostrabile",
      "Governance fornitori ICT",
      "Riduzione rischio interruzione servizi",
    ],
    deliverables: [
      "ICT Risk Management Framework",
      "Test di resilienza operativa",
      "Registro fornitori ICT critici",
      "Report di conformità DORA",
    ],
    questions: [
      { id: "dora-1", question: "Operate nel settore finanziario o come fornitore ICT critico?", weight: 3 },
      { id: "dora-2", question: "Avete un framework di gestione del rischio ICT documentato?", weight: 3 },
      { id: "dora-3", question: "Testate regolarmente scenari di disruption e recovery?", weight: 2 },
      { id: "dora-4", question: "Monitorate e classificate i fornitori ICT critici?", weight: 3 },
      { id: "dora-5", question: "Avete un piano di risposta agli incidenti ICT?", weight: 2 },
      { id: "dora-6", question: "Il board è informato sui rischi ICT e la resilienza?", weight: 2 },
    ],
  },
  {
    slug: "pci-dss",
    title: "PCI DSS",
    subtitle: "Payment Card Industry Data Security Standard",
    description:
      "Se gestite pagamenti con carta, verificate l'aderenza ai requisiti PCI DSS per proteggere i dati dei titolari.",
    longDescription:
      "PCI DSS v4.0 definisce i requisiti di sicurezza per chi tratta dati di carte di pagamento. Eseguiamo gap analysis, segmentazione di rete e supporto alla remediation per raggiungere e mantenere la conformità.",
    benefits: [
      "Protezione dati di pagamento",
      "Riduzione frodi e chargeback",
      "Conformità contrattuale con acquirer",
      "Fiducia dei clienti e-commerce",
    ],
    deliverables: [
      "Gap analysis PCI DSS v4.0",
      "Segmentazione rete pagamenti",
      "Hardening sistemi cardholder",
      "Report ASV e remediation",
    ],
    questions: [
      { id: "pci-1", question: "Memorizzate, processate o trasmettete dati di carte di pagamento?", weight: 3 },
      { id: "pci-2", question: "La rete dei pagamenti è segmentata dal resto dell'infrastruttura?", weight: 3 },
      { id: "pci-3", question: "Eseguite scansioni ASV trimestrali e penetration test annuali?", weight: 2 },
      { id: "pci-4", question: "I log di accesso ai sistemi di pagamento sono monitorati?", weight: 2 },
      { id: "pci-5", question: "Le chiavi di cifratura sono gestite secondo best practice?", weight: 2 },
      { id: "pci-6", question: "Il personale con accesso ai dati carta è formato e autorizzato?", weight: 1 },
    ],
  },
  {
    slug: "soc2",
    title: "SOC 2",
    subtitle: "Service Organization Control — Trust Services Criteria",
    description:
      "Per SaaS e servizi cloud: valutate i controlli su sicurezza, disponibilità, integrità, privacy e confidenzialità.",
    longDescription:
      "SOC 2 attesta i controlli interni su sicurezza, disponibilità, integrità, privacy e confidenzialità. Prepariamo le organizzazioni SaaS e cloud all'audit Type I e Type II con mappatura controlli e raccolta evidenze.",
    benefits: [
      "Trust verificabile per clienti enterprise",
      "Controlli documentati e auditabili",
      "Accelerazione contratti B2B",
      "Miglioramento processi interni",
    ],
    deliverables: [
      "Readiness assessment SOC 2",
      "Mappatura controlli TSC",
      "Evidenze e policy",
      "Supporto audit Type I/II",
    ],
    questions: [
      { id: "soc-1", question: "Offrite servizi cloud/SaaS a clienti enterprise?", weight: 2 },
      { id: "soc-2", question: "Avete controlli di accesso basati su ruolo (RBAC)?", weight: 2 },
      { id: "soc-3", question: "I cambiamenti in produzione sono tracciati e approvati?", weight: 2 },
      { id: "soc-4", question: "Monitorate disponibilità e performance con SLA definiti?", weight: 2 },
      { id: "soc-5", question: "I dati clienti sono cifrati at-rest e in-transit?", weight: 3 },
      { id: "soc-6", question: "Conducete background check sul personale con accesso ai dati?", weight: 1 },
    ],
  },
];

export function getComplianceBySlug(slug: string) {
  return complianceFrameworks.find((f) => f.slug === slug);
}

export function calculateComplianceScore(
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
      message: "Livello di conformità critico. È necessario un intervento strutturato con priorità immediate.",
    };
  }
  if (score < 65) {
    return {
      score,
      level: "medio",
      message: "Conformità parziale. Sono presenti gap significativi da colmare con un piano di remediation.",
    };
  }
  if (score < 85) {
    return {
      score,
      level: "buono",
      message: "Buona base di conformità. Ottimizzate i controlli mancanti per raggiungere la piena aderenza.",
    };
  }
  return {
    score,
    level: "eccellente",
    message: "Eccellente livello di preparazione. Valutate un audit formale per certificare la conformità.",
  };
}
