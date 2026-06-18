export type HomeFaq = {
  question: string;
  answer: string;
  ctaLabel: string;
  ctaHref: string;
};

export const homeFaqs: HomeFaq[] = [
  {
    question: "Sono obbligato per legge a proteggere i dati della mia azienda?",
    answer:
      "Sì. Il GDPR impone a qualsiasi azienda che tratta dati di clienti, dipendenti o fornitori di adottare misure di sicurezza adeguate. In molti settori si aggiunge anche la direttiva NIS2.",
    ctaLabel: "Verifica i tuoi obblighi",
    ctaHref: "/obblighi-sicurezza-informatica-nis2",
  },
  {
    question: "Cosa rischio se mi entrano nel computer aziendale?",
    answer:
      "Blocco dell'attività, furto di dati, richieste di riscatto e danni di immagine. Per molte PMI un attacco ransomware significa giorni di fermo e migliaia di euro di perdite.",
    ctaLabel: "Scopri come proteggerti",
    ctaHref: "/sicurezza-informatica-azienda",
  },
  {
    question: "Ho ricevuto una mail sospetta: cosa faccio?",
    answer:
      "Non cliccare link né allegati, non rispondere e non inserire credenziali. Segnala la mail al tuo responsabile IT. Se hai già cliccato, contattaci subito per limitare i danni.",
    ctaLabel: "Parla con un esperto",
    ctaHref: "/contatti",
  },
  {
    question: "Quanto costa proteggere la mia azienda dagli hacker?",
    answer:
      "Dipende dalla dimensione e dai sistemi da proteggere. Per una PMI un percorso base parte da poche centinaia di euro al mese. La valutazione preliminare è sempre gratuita.",
    ctaLabel: "Richiedi una stima",
    ctaHref: "/contatti",
  },
  {
    question: "Cosa significa che devo essere 'conforme al GDPR'?",
    answer:
      "Significa trattare i dati personali in modo sicuro e documentato, con consenso, informative e misure tecniche. Se non lo fai rischi sanzioni del Garante fino a 20 milioni di euro.",
    ctaLabel: "Controlla se sei in regola",
    ctaHref: "/multa-gdpr-azienda",
  },
  {
    question: "Mi hanno detto che devo fare la NIS2: di cosa si tratta?",
    answer:
      "È una normativa europea che obbliga molte aziende a rafforzare la sicurezza informatica. Se non sai se ti riguarda, una verifica gratuita di 5 minuti ti dà la risposta.",
    ctaLabel: "Verifica la NIS2",
    ctaHref: "/obblighi-sicurezza-informatica-nis2",
  },
  {
    question: "Un antivirus non basta per proteggere la mia azienda?",
    answer:
      "No. L'antivirus blocca solo una parte delle minacce. Servono anche aggiornamenti, backup, formazione del personale e controlli periodici sui sistemi esposti.",
    ctaLabel: "Vedi i nostri servizi",
    ctaHref: "/servizi",
  },
  {
    question: "Come faccio a sapere se la mia azienda è stata hackerata?",
    answer:
      "Spesso non è evidente: rallentamenti, accessi anomali, mail strane partite a tua insaputa. Un'analisi tecnica verifica la presenza di compromissioni anche nascoste.",
    ctaLabel: "Richiedi un controllo",
    ctaHref: "/pentest-azienda",
  },
];

export const faqs = [
  {
    question: "La mia azienda è davvero a rischio attacchi informatici?",
    answer:
      "Sì. Oggi qualsiasi azienda con sistemi digitali può essere un bersaglio, indipendentemente dalle dimensioni. Le PMI sono spesso le più colpite perché meno protette e considerate target più facili dagli attaccanti.",
  },
  {
    question: "Cos'è una Vulnerability Assessment?",
    answer:
      "È un'analisi sistematica che identifica le vulnerabilità nei vostri sistemi, reti e applicazioni prima che possano essere sfruttate da un attaccante. Fornisce una mappa completa del rischio con priorità di remediation.",
  },
  {
    question: "Qual è la differenza tra Vulnerability Assessment e Penetration Test?",
    answer:
      "La Vulnerability Assessment individua le debolezze tecniche attraverso scansioni automatizzate e manuali. Il Penetration Test va oltre: simula un attacco reale per verificare quanto siano realmente sfruttabili e quali impatti possano avere.",
  },
  {
    question: "I vostri test possono bloccare i miei sistemi?",
    answer:
      "No. Tutte le attività vengono pianificate in fase di kick-off, concordate con il vostro team IT e condotte in modo controllato per non interrompere l'operatività aziendale.",
  },
  {
    question: "Quanto tempo richiede un'analisi?",
    answer:
      "Dipende dalla complessità dell'infrastruttura. Una prima valutazione può essere completata in 3-5 giorni lavorativi; un penetration test completo richiede tipicamente 1-3 settimane.",
  },
  {
    question: "Riceverò un report dopo l'analisi?",
    answer:
      "Sì. Forniamo un report dettagliato con tutte le vulnerabilità individuate, il livello di rischio (CVSS), evidenze tecniche e un piano d'azione prioritizzato con raccomandazioni concrete.",
  },
  {
    question: "La mia azienda deve conformarsi alla NIS2?",
    answer:
      "Se operate in settori critici (energia, trasporti, sanità, finanza, digitale) e superate determinate soglie dimensionali, sì. Offriamo una verifica preliminare gratuita per determinarlo in 30 secondi.",
  },
  {
    question: "Lavorate solo con grandi aziende?",
    answer:
      "No. HackSure è specializzata nelle PMI italiane. I nostri servizi sono scalabili e modulati sulle esigenze e il budget delle piccole e medie imprese.",
  },
];
