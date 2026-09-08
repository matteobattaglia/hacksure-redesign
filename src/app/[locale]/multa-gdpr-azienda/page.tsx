import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingLayout } from "@/components/LandingLayout";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, faqJsonLd } from "@/lib/seo";

const path = "/multa-gdpr-azienda";

type Props = { params: Promise<{ locale: string }> };

const faqs = [
  {
    question: "Quanto costa una multa GDPR?",
    answer:
      "Le sanzioni GDPR possono arrivare fino a 20 milioni di euro oppure al 4% del fatturato annuo globale dell'azienda, a seconda di quale importo sia più alto. Per le PMI le multe reali del Garante sono spesso di decine di migliaia di euro, ma restano molto superiori al costo di un adeguamento preventivo.",
  },
  {
    question: "Quando rischia davvero un'azienda una sanzione GDPR?",
    answer:
      "Il rischio concreto nasce dopo un data breach, un reclamo di un cliente o dipendente, oppure un controllo del Garante. Se mancano informative, consensi, misure di sicurezza o la notifica entro 72 ore, la probabilità di sanzione aumenta.",
  },
  {
    question: "Come si evita una multa GDPR?",
    answer:
      "Con un audit preventivo: mappatura dei dati, informative e consensi corretti, misure tecniche adeguate e una procedura di data breach. Una valutazione preliminare gratuita aiuta a capire le priorità reali senza impegno.",
  },
];

// Built on Italian search keywords: this landing page exists in Italian only.
const italianMetadata: Metadata = createMetadata({
  title: "Multa GDPR: fino a 20 milioni di euro o il 4% del fatturato",
  description:
    "Le sanzioni GDPR arrivano fino a 20 milioni di euro o il 4% del fatturato globale. Scopri se la tua azienda è a rischio con una valutazione gratuita.",
  path,
  italianOnly: true,
  keywords: [
    "multa gdpr",
    "quanto costa una multa gdpr",
    "sanzione gdpr 20 milioni",
    "gdpr 4% fatturato",
    "garante privacy multa",
    "multa gdpr azienda",
  ],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "it") notFound();
  return italianMetadata;
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (locale !== "it") notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <LandingLayout
        locale="it"
        label="GDPR"
        title="Quanto costa una multa GDPR?"
        intro="Le sanzioni GDPR spaventano molti imprenditori, e a ragione: gli importi possono arrivare fino a 20 milioni di euro o al 4% del fatturato globale. Ti spieghiamo quando rischi davvero e come metterti in regola in modo concreto."
        path={path}
        sections={[
          {
            heading: "Multa GDPR: fino a 20 milioni di euro o il 4% del fatturato",
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
              "Mettersi in regola costa molto meno di una multa da 20 milioni o dal 4% del fatturato. Il punto di partenza è un audit che verifica come tratti i dati e dove sei scoperto, seguito da un piano di adeguamento concreto: informative, consensi, misure tecniche e procedure in caso di violazione.",
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
          { label: "Sicurezza informatica a Brescia", href: "/sicurezza-informatica-brescia" },
          { label: "Obblighi NIS2", href: "/obblighi-sicurezza-informatica-nis2" },
        ]}
      />
    </>
  );
}
