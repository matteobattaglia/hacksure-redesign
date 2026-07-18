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
  audience?: string[];
  deliverables?: string[];
  useCases?: string[];
  faqs?: { question: string; answer: string }[];
  disclaimer?: string;
  relatedLinks?: { label: string; href: string }[];
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
    deliverables: [
      "Assessment ambiente e raccomandazione stack Kaspersky",
      "Deployment e configurazione EDR/XDR",
      "Documentazione policy e runbook operativi",
      "Formazione del team interno",
    ],
    useCases: [
      "Protezione da ransomware su postazioni e server.",
      "Visibilità centralizzata sugli endpoint della PMI.",
      "Allineamento a requisiti NIS2 e ISO 27001 sul controllo endpoint.",
    ],
    faqs: [
      {
        question: "Siete partner ufficiali Kaspersky?",
        answer:
          "Sì. HackSure è Kaspersky Registered B2B Partner. Maggiori dettagli sulla pagina dedicata Partnership Kaspersky.",
      },
    ],
    relatedLinks: [{ label: "Pagina Partner Kaspersky", href: "/partner/kaspersky" }],
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
  {
    slug: "notarizzazione-blockchain",
    title: "Notarizzazione su Blockchain",
    shortDescription:
      "Timestamp immutabile di documenti e prove digitali, con supporto di studi legali qualificati.",
    description:
      "Ancoriamo documenti, contratti e prove digitali su blockchain per garantire data certa, integrità e opponibilità. Collaboriamo con studi legali altamente qualificati per l'utilizzo in ambito civile, commerciale e processuale.",
    longDescription:
      "La notarizzazione su blockchain permette di associare a un documento o a un file un timestamp crittografico immutabile: in qualsiasi momento è possibile dimostrare che quel contenuto esisteva in quella forma a una data precisa e che non è stato alterato. HackSure gestisce il processo tecnico end-to-end — dalla preparazione delle prove all'ancoraggio on-chain — e si affida a studi legali altamente qualificati per inquadrare correttamente l'utilizzo delle evidenze in ambito contrattuale, pre-contenzioso e giudiziale. Ideale per contratti, verbali, report di security, comunicazioni e-mail, log e materiale forense.",
    features: [
      "Hash crittografico SHA-256 del documento o del set di file",
      "Ancoraggio su blockchain pubblica con timestamp immutabile",
      "Certificato di notarizzazione scaricabile e verificabile",
      "Conservazione delle prove di integrità nel tempo",
      "Collaborazione con studi legali altamente qualificati",
      "Supporto per utilizzi civili, commerciali e processuali",
    ],
    methodology: [
      "Raccolta e inventario dei documenti o delle prove da notarizzare",
      "Generazione dell'hash e preparazione del pacchetto di evidenze",
      "Ancoraggio su blockchain e rilascio del certificato",
      "Consegna del dossier tecnico e, se richiesto, affiancamento legale",
    ],
    cta: "Richiedi una notarizzazione",
    category: "Digital Trust",
    audience: [
      "Aziende che devono dimostrare data certa di contratti, offerte o accordi.",
      "Studi professionali e consulenti che producono report o perizie digitali.",
      "Team IT e security che devono cristallizzare log, dump e report di incidente.",
      "Parti in pre-contenzioso che vogliono preservare evidenze prima di un'azione legale.",
    ],
    deliverables: [
      "Certificato di notarizzazione con hash, timestamp e riferimento transazione",
      "Istruzioni di verifica indipendente dell'integrità del documento",
      "Dossier tecnico delle evidenze (opzionale, su richiesta)",
      "Affiancamento di studio legale qualificato per l'uso processuale (opzionale)",
    ],
    useCases: [
      "Contratti e proposte commerciali da cristallizzare con data certa.",
      "Report di vulnerability assessment o incident response da rendere non alterabili.",
      "Email, chat e comunicazioni da preservare prima di un contenzioso.",
      "Verbali di assemblea, delibere e documentazione societaria digitale.",
      "Materiale forense da consegnare a legali o autorità.",
    ],
    faqs: [
      {
        question: "La notarizzazione blockchain sostituisce il notaio?",
        answer:
          "No. Non sostituisce l'atto notarile. Fornisce prova tecnica di esistenza e integrità di un contenuto a una data certa. Per gli aspetti giuridici ci affidiamo a studi legali qualificati.",
      },
      {
        question: "I documenti restano pubblici sulla blockchain?",
        answer:
          "No. Sulla blockchain viene pubblicato solo l'hash crittografico, non il contenuto del file. Il documento originale resta sotto il vostro controllo.",
      },
      {
        question: "Quanto tempo richiede il processo?",
        answer:
          "Per un singolo documento o un piccolo set di file, tipicamente entro poche ore lavorative dalla ricezione completa del materiale.",
      },
    ],
    disclaimer:
      "HackSure fornisce il servizio tecnico di notarizzazione e conservazione delle evidenze. L'assistenza legale è erogata da studi legali terzi altamente qualificati, selezionati in base al caso. Il servizio non costituisce consulenza legale.",
  },
  {
    slug: "perizia-truffe-online",
    title: "Perizia Truffe Online",
    shortDescription:
      "Analisi di fattibilità e perizia tecnica per vittime di truffe online, da presentare a legali e autorità.",
    description:
      "Se sei stato truffato online, partiamo da una call per capire cosa è successo. Dopo un'attenta analisi di fattibilità, se ci sono concrete chance di aiuto prepariamo una perizia tecnica da presentare a legali e organi competenti.",
    longDescription:
      "Le truffe online — phishing, SIM swap, investimenti fantasma, frodi su marketplace, social engineering, ransomware e furti di account — lasciano spesso le vittime senza sapere da dove iniziare. Il nostro servizio nasce proprio per questo: una prima call conoscitiva per ricostruire i fatti, seguita da un'analisi di fattibilità tecnica. Solo se l'esito è positivo e esistono concrete possibilità di ottenere un aiuto concreto, procediamo alla redazione di una perizia tecnica strutturata, utilizzabile da avvocati, forze dell'ordine e autorità competenti. Non promettiamo risultati impossibili: valutiamo onestamente se ha senso andare avanti e, quando sì, produciamo un documento chiaro, documentato e professionale.",
    features: [
      "Call iniziale gratuita per ricostruire i fatti",
      "Analisi di fattibilità tecnica prima di qualsiasi impegno",
      "Raccolta e preservazione delle evidenze digitali",
      "Perizia tecnica strutturata per legali e autorità",
      "Timeline degli eventi e ricostruzione del modus operandi",
      "Indicazioni operative per i passi successivi",
    ],
    methodology: [
      "Call conoscitiva: ascolto dei fatti, raccolta di screenshot, email, bonifici e log",
      "Analisi di fattibilità: valutazione delle evidenze e delle chance di utilità",
      "Se esito positivo: approfondimento tecnico e preservazione delle prove",
      "Redazione della perizia e consegna al cliente / legale di riferimento",
    ],
    cta: "Prenota la call gratuita",
    category: "Digital Forensics",
    audience: [
      "Privati e famiglie vittime di phishing, furto di account o frodi bancarie online.",
      "Imprenditori e PMI colpiti da frodi B2B, false fatture o compromissione email.",
      "Professionisti e studi che necessitano di una perizia tecnica a supporto di un fascicolo.",
      "Persone che hanno già denunciato e devono rafforzare il dossier con evidenze tecniche.",
    ],
    deliverables: [
      "Esito scritto dell'analisi di fattibilità (anche in caso negativo)",
      "Perizia tecnica con ricostruzione dei fatti e delle evidenze (se si procede)",
      "Allegati: screenshot, hash dei file, estratti di comunicazioni e tracce rilevanti",
      "Indicazioni su organi e canali a cui rivolgersi (Polizia Postale, banca, legale)",
    ],
    useCases: [
      "Bonifico o pagamento eseguito a seguito di una mail o messaggio fraudolento.",
      "Investimento online rivelatosi una truffa (crypto, trading, piattaforme fantasma).",
      "Furto di account social, email o marketplace con danni economici.",
      "SIM swap o compromissione dell'home banking.",
      "Frode B2B con cambio IBAN del fornitore (Business Email Compromise).",
    ],
    faqs: [
      {
        question: "La call iniziale ha un costo?",
        answer:
          "No. La prima call è gratuita e serve solo a capire cosa è successo e se ha senso approfondire. Non c'è alcun obbligo di proseguire.",
      },
      {
        question: "Cosa succede se l'analisi di fattibilità è negativa?",
        answer:
          "Te lo comunichiamo con chiarezza e motivazioni. Non procediamo alla perizia se non ci sono concrete chance di produrre un documento utile. Meglio saperlo subito che spendere inutilmente.",
      },
      {
        question: "Sostituite l'avvocato o la denuncia?",
        answer:
          "No. Non forniamo consulenza legale né sostituiamo le autorità. Prepariamo la perizia tecnica che il vostro legale o gli organi competenti possono utilizzare nel fascicolo.",
      },
      {
        question: "Quanto tempo serve per avere la perizia?",
        answer:
          "Dipende dalla complessità del caso e dalla completezza delle evidenze. Dopo la call e l'analisi di fattibilità, i tempi tipici vanno da pochi giorni a un paio di settimane.",
      },
    ],
    disclaimer:
      "HackSure fornisce analisi tecnica e perizia informatica. Non siamo uno studio legale e non sostituiamo denunce, azioni giudiziarie o consulenza legale. L'esito positivo dell'analisi di fattibilità non garantisce il recupero delle somme o un risultato processuale.",
  },
];

export function getSecurityServiceBySlug(slug: string) {
  return securityServices.find((s) => s.slug === slug);
}
