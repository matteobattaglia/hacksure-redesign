import type { Metadata } from "next";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/sicurezza-informatica-azienda";

export const metadata: Metadata = createMetadata({
  title: "Sicurezza informatica per aziende: da dove iniziare",
  description:
    "Sicurezza informatica aziendale spiegata semplice: cos'è, perché serve e come proteggere i dati della tua azienda dagli hacker. Valutazione gratuita.",
  path,
  keywords: [
    "sicurezza informatica aziendale",
    "protezione dati azienda",
    "difendersi dagli hacker azienda",
    "controllo sicurezza informatica aziendale",
    "proteggere azienda attacchi informatici",
  ],
});

export default function Page() {
  return (
    <LandingLayout
      label="Guida"
      title="Sicurezza informatica per aziende: cosa fare e da dove iniziare"
      intro="Se hai un'azienda e usi computer, email e gestionali, sei già un possibile bersaglio. Ti spieghiamo in parole semplici come proteggerti, senza tecnicismi inutili."
      path={path}
      sections={[
        {
          heading: "Cos'è la sicurezza informatica aziendale",
          paragraphs: [
            "La sicurezza informatica è l'insieme delle misure che impediscono a persone non autorizzate di accedere ai tuoi dati, bloccare i tuoi sistemi o rubare informazioni di clienti e fornitori. In pratica è quello che tiene fuori chi vuole farti del male attraverso i computer.",
            "Non riguarda solo le grandi aziende: gestionali, fatture elettroniche, email e backup sono tutti potenziali punti di ingresso. Più la tua azienda è digitale, più diventa importante proteggerla.",
          ],
        },
        {
          heading: "Perché serve davvero (anche se sei piccolo)",
          paragraphs: [
            "Il 60% degli attacchi ransomware colpisce aziende con meno di 250 dipendenti, proprio perché hanno meno difese. I criminali usano attacchi automatizzati che colpiscono chiunque sia vulnerabile, indipendentemente dalla dimensione.",
            "Un singolo attacco può significare giorni di blocco totale dell'attività, perdita di dati, richieste di riscatto e danni di immagine con i tuoi clienti.",
          ],
          bullets: [
            "Furto di dati di clienti e dipendenti",
            "Blocco dei sistemi con richiesta di riscatto (ransomware)",
            "Frodi sui pagamenti tramite email falsificate",
            "Sanzioni se i dati personali non sono protetti",
          ],
        },
        {
          heading: "Cosa succede se non fai nulla",
          paragraphs: [
            "Molte PMI scoprono di essere vulnerabili solo dopo un attacco, quando ormai i costi di recupero sono altissimi. Oltre al danno economico diretto, c'è il rischio di sanzioni per la mancata protezione dei dati personali e la perdita di fiducia da parte dei clienti.",
            "La buona notizia è che con pochi interventi mirati si riduce drasticamente il rischio. Non serve un reparto IT enorme: serve un metodo.",
          ],
        },
        {
          heading: "Da dove iniziare concretamente",
          paragraphs: [
            "Il primo passo è capire dove sei vulnerabile. Un'analisi tecnica (vulnerability assessment) individua i punti deboli; un penetration test verifica fin dove un attaccante reale potrebbe arrivare. Da lì si costruisce un piano di protezione su misura.",
          ],
          bullets: [
            "Analisi delle vulnerabilità dei tuoi sistemi",
            "Backup sicuri e testati periodicamente",
            "Formazione del personale sulle email sospette",
            "Verifica della conformità a GDPR e NIS2",
          ],
        },
      ]}
      related={[
        { label: "I nostri servizi", href: "/servizi" },
        { label: "Vulnerability Assessment", href: "/servizi/vulnerability-assessment" },
        { label: "Pentest aziendale", href: "/pentest-azienda" },
        { label: "Conformità GDPR", href: "/compliance/gdpr" },
      ]}
    />
  );
}
