export type PartnerType = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  benefits: string[];
  cta: string;
};

export const partnerTypes: PartnerType[] = [
  {
    id: "studio-legale",
    title: "Studio legale",
    eyebrow: "Perizie & forensics",
    summary:
      "Collaboriamo su perizie informatiche per truffe online, digital forensics e supporto tecnico ai fascicoli.",
    description:
      "Affianchiamo studi legali con analisi tecnica, raccolta prove e perizie strutturate utilizzabili in ambito civile e penale. Ideale per casi di frodi online, compromissioni account, business email compromise e informatica forense.",
    benefits: [
      "Perizie tecniche per truffe online e frodi digitali",
      "Digital forensics e preservazione delle evidenze",
      "Report chiari da allegare a fascicoli e denunce",
      "Call di allineamento su fattibilità e strategia tecnica",
    ],
    cta: "Proponi una collaborazione legale",
  },
  {
    id: "web-agency",
    title: "Web agency",
    eyebrow: "White label",
    summary:
      "Opzione white label: ti supportiamo nel consegnare piattaforme più sicure ai tuoi clienti, con margini più alti.",
    description:
      "Con il modello white label resti tu il referente commerciale verso il cliente. Noi ci occupiamo di security assessment, hardening, compliance e protezione delle piattaforme che consegni. I dettagli operativi e commerciali si definiscono in call — l’obiettivo è farti marginare di più offrendo un servizio di valore.",
    benefits: [
      "Partnership white label senza sovrapposizione sul cliente",
      "Sicurezza e compliance integrate nei vostri progetti",
      "Possibilità di aumentare il margine sui deliverable",
      "Supporto tecnico dedicato e processabile in call",
    ],
    cta: "Attiva la partnership white label",
  },
  {
    id: "fornitore-elettronica",
    title: "Fornitore di materiale elettronico",
    eyebrow: "Hardware & installazioni",
    summary:
      "Vendiamo i vostri prodotti ai nostri clienti che richiedono installazioni, firewall, endpoint e infrastruttura.",
    description:
      "Quando i nostri clienti hanno bisogno di hardware per installazioni di sicurezza (firewall, appliance, endpoint, networking), possiamo proporre e veicolare i vostri prodotti. Una collaborazione commerciale chiara, con domanda reale dal nostro portafoglio PMI.",
    benefits: [
      "Accesso a clienti che già richiedono installazioni",
      "Canale commerciale complementare, non competitivo",
      "Focus su soluzioni di sicurezza e infrastruttura",
      "Allineamento su listini e disponibilità in call",
    ],
    cta: "Proponi il tuo catalogo",
  },
];

export function getPartnerById(id: string) {
  return partnerTypes.find((p) => p.id === id);
}
