export type SecurityService = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: string[];
  methodology: string[];
  cta: string;
  category: string;
  image?: string;
};

export const securityServices: SecurityService[] = [
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    shortDescription: "Identificazione sistematica delle vulnerabilità prima che vengano sfruttate.",
    description:
      "Analizziamo l'intera superficie d'attacco della vostra infrastruttura — reti, server, applicazioni web e cloud — per individuare debolezze tecniche e configurazioni errate.",
    longDescription:
      "Il Vulnerability Assessment è il punto di partenza per ogni programma di sicurezza strutturato. Attraverso scansioni approfondite e verifiche manuali, mappiamo le vulnerabilità presenti nei vostri asset IT, le classifichiamo secondo il CVSS e produciamo un report con priorità di intervento chiare per il team tecnico e il management.",
    features: [
      "Scansione completa dell'infrastruttura",
      "Identificazione criticità con scoring CVSS",
      "Report dettagliato con priorità",
      "Raccomandazioni pratiche e remediation",
    ],
    methodology: [
      "Definizione scope e asset inventory",
      "Scansione automatizzata e verifica manuale",
      "Classificazione rischi e prioritizzazione",
      "Consegna report e sessione debriefing",
    ],
    cta: "Richiedi un assessment",
    category: "Offensive Security",
  },
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    shortDescription: "Simulazione di attacchi reali per testare la resilienza della vostra azienda.",
    description:
      "I nostri ethical hacker simulano attacchi mirati per verificare quanto le vulnerabilità siano realmente sfruttabili, fornendo evidenze concrete e un percorso di remediation prioritizzato.",
    longDescription:
      "Il Penetration Test va oltre la semplice scansione: simula un attaccante reale che cerca di compromettere i vostri sistemi. Utilizziamo metodologie riconosciute (PTES, OWASP) e approcci black, grey e white box in base alle vostre esigenze, con report tecnico ed executive summary.",
    features: [
      "Test manuali e automatizzati",
      "Simulazioni reali di attacco (black/grey/white box)",
      "Individuazione accessi e privilege escalation",
      "Report tecnico + executive summary",
    ],
    methodology: [
      "Kick-off e definizione regole di ingaggio",
      "Ricognizione e enumerazione",
      "Exploitation controllata e post-exploitation",
      "Report, remediation e retest opzionale",
    ],
    cta: "Richiedi un pentest",
    category: "Offensive Security",
  },
  {
    slug: "network-security",
    title: "Network Security & Firewall",
    shortDescription: "Protezione avanzata della rete aziendale con monitoraggio continuo.",
    description:
      "Progettiamo, configuriamo e ottimizziamo l'architettura di sicurezza di rete per ridurre la superficie d'attacco e garantire visibilità completa sul traffico.",
    longDescription:
      "Una rete mal configurata è la porta d'accesso più comune per gli attaccanti. Auditiamo firewall, regole di routing, segmentazione e policy di accesso, poi implementiamo hardening e monitoraggio per ridurre il rischio di movimenti laterali e data exfiltration.",
    features: [
      "Configurazione e hardening firewall",
      "Segmentazione rete e micro-segmentation",
      "Hardening infrastruttura",
      "Monitoraggio e alerting",
    ],
    methodology: [
      "Audit configurazione e regole attive",
      "Analisi traffico e punti critici",
      "Progettazione segmentazione",
      "Implementazione e verifica",
    ],
    cta: "Proteggi la tua rete",
    category: "Infrastructure",
  },
  {
    slug: "endpoint-security",
    title: "Endpoint Security (EDR/XDR)",
    shortDescription: "Difesa avanzata di tutti i dispositivi aziendali da minacce moderne.",
    description:
      "Implementiamo soluzioni EDR/XDR di classe enterprise — inclusa partnership Kaspersky — per rilevare, contenere e rispondere a minacce avanzate e ransomware in tempo reale.",
    longDescription:
      "Gli endpoint sono il perimetro più esposto delle moderne organizzazioni. Selezioniamo, implementiamo e gestiamo soluzioni EDR/XDR adatte alla dimensione e al budget della vostra azienda, con deployment, tuning e monitoraggio continuo.",
    features: [
      "Soluzioni EDR/XDR enterprise",
      "Protezione in tempo reale",
      "Monitoraggio centralizzato SOC-ready",
      "Difesa da ransomware e zero-day",
    ],
    methodology: [
      "Assessment ambiente e requisiti",
      "Selezione e deployment soluzione",
      "Tuning policy e integrazione SIEM",
      "Formazione operatori e supporto",
    ],
    cta: "Scopri Kaspersky EDR",
    category: "Endpoint Protection",
    image: "/assets/images/shutterstock_2695394565-scaled.jpg",
  },
  {
    slug: "security-awareness",
    title: "Security Awareness & Training",
    shortDescription: "Formazione del personale: la prima linea di difesa contro il phishing.",
    description:
      "Programmi di sensibilizzazione e phishing simulation per ridurre il rischio umano, la causa principale delle violazioni di sicurezza nelle PMI.",
    longDescription:
      "Il fattore umano resta la causa principale degli incidenti di sicurezza. Progettiamo programmi di awareness su misura con simulazioni di phishing, formazione e-learning e metriche di miglioramento nel tempo, adattati al contesto aziendale.",
    features: [
      "Campagne phishing simulate",
      "Formazione e-learning personalizzata",
      "Metriche e reporting per management",
      "Programmi continuativi annuali",
    ],
    methodology: [
      "Baseline assessment comportamentale",
      "Campagne phishing simulate",
      "Formazione mirata sui risultati",
      "Monitoraggio KPI e report trimestrali",
    ],
    cta: "Avvia il training",
    category: "Human Factor",
  },
  {
    slug: "incident-response",
    title: "Incident Response & Forensics",
    shortDescription: "Risposta rapida e strutturata agli incidenti di sicurezza.",
    description:
      "Supporto immediato in caso di breach, ransomware o compromissione: contenimento, analisi forense, eradicazione e ripristino operativo.",
    longDescription:
      "Quando si verifica un incidente, ogni minuto conta. Il nostro team di Incident Response interviene con procedure strutturate per contenere la minaccia, analizzare l'impatto, eradicare la compromissione e supportare le comunicazioni verso autorità e stakeholder.",
    features: [
      "Retainer per emergenze",
      "Analisi forense digitale",
      "Contenimento e eradicazione",
      "Report per assicurazione e autorità",
    ],
    methodology: [
      "Attivazione e triage immediato",
      "Contenimento e preservazione evidenze",
      "Analisi forense e root cause",
      "Eradicazione, recovery e lessons learned",
    ],
    cta: "Parla con un esperto IR",
    category: "Emergency",
  },
];

export function getSecurityServiceBySlug(slug: string) {
  return securityServices.find((s) => s.slug === slug);
}
