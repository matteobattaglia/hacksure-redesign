import type { Metadata } from "next";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/multa-gdpr-azienda";

export const metadata: Metadata = createMetadata({
  title: "Multa GDPR: quanto è, quando arriva e come evitarla",
  description:
    "Multa GDPR per le aziende: importi reali, esempi di sanzioni del Garante e come metterti in regola prima di rischiare. Verifica gratuita.",
  path,
  keywords: [
    "multa gdpr",
    "sanzione gdpr azienda",
    "garante privacy multa",
    "gdpr cosa rischio",
    "multa gdpr quanto",
  ],
});

export default function Page() {
  return (
    <LandingLayout
      label="GDPR"
      title="Multa GDPR: quando arriva, quanto è e come evitarla"
      intro="Le sanzioni GDPR spaventano molti imprenditori, e a ragione: gli importi possono essere altissimi. Ti spieghiamo quando rischi davvero e come metterti in regola in modo concreto."
      path={path}
      sections={[
        {
          heading: "Quanto può costare una multa GDPR",
          paragraphs: [
            "Il GDPR prevede sanzioni fino a 20 milioni di euro oppure il 4% del fatturato annuo globale, a seconda di quale importo sia più alto. Sono le cifre massime, ma anche le multe più comuni per le PMI arrivano facilmente a decine di migliaia di euro.",
            "Il Garante per la protezione dei dati personali ha già sanzionato numerose piccole e medie imprese italiane, non solo le grandi aziende.",
          ],
        },
        {
          heading: "Quando arriva la sanzione",
          paragraphs: [
            "Le sanzioni scattano tipicamente dopo una segnalazione, un reclamo di un cliente o dipendente, oppure a seguito di un data breach (una violazione che espone dati personali). In quel momento il Garante verifica se avevi adottato misure di sicurezza adeguate.",
          ],
          bullets: [
            "Data breach non notificato entro 72 ore",
            "Assenza di informative privacy e consensi corretti",
            "Misure di sicurezza inadeguate sui dati",
            "Mancata nomina del responsabile del trattamento dove richiesto",
          ],
        },
        {
          heading: "Esempi concreti di cosa rischi",
          paragraphs: [
            "Un gestionale clienti senza protezioni adeguate, una mailing list usata senza consenso, telecamere puntate male o un sito che raccoglie dati senza informativa: sono tutte situazioni reali che hanno portato a sanzioni. Spesso l'azienda non era nemmeno consapevole di essere fuori regola.",
          ],
        },
        {
          heading: "Come evitarla: l'audit preventivo",
          paragraphs: [
            "Mettersi in regola costa molto meno di una multa. Il punto di partenza è un audit che verifica come tratti i dati e dove sei scoperto, seguito da un piano di adeguamento concreto: informative, consensi, misure tecniche e procedure in caso di violazione.",
            "Offriamo sempre una valutazione preliminare gratuita per capire a che punto sei e quali sono le priorità reali per la tua azienda.",
          ],
          bullets: [
            "Mappatura dei dati personali che tratti",
            "Verifica di informative, consensi e registri",
            "Misure tecniche di sicurezza adeguate",
            "Procedura pronta in caso di data breach",
          ],
        },
      ]}
      related={[
        { label: "Conformità GDPR", href: "/compliance/gdpr" },
        { label: "Tutti i framework compliance", href: "/compliance" },
        { label: "Sicurezza informatica aziendale", href: "/sicurezza-informatica-azienda" },
        { label: "Obblighi NIS2", href: "/obblighi-sicurezza-informatica-nis2" },
      ]}
    />
  );
}
