import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/bandi-cybersecurity-pmi";

type Props = { params: Promise<{ locale: string }> };

const italianMetadata: Metadata = createMetadata({
  title: "Bandi cybersecurity per PMI: documenti e servizio tecnico",
  description:
    "Bandi cybersecurity per PMI: prepariamo la documentazione della domanda e eroghiamo penetration test, vulnerability assessment e compliance NIS2, GDPR e ISO 27001.",
  path,
  italianOnly: true,
  keywords: [
    "bandi cybersecurity",
    "bandi cybersecurity pmi",
    "bandi sicurezza informatica",
    "contributo cybersecurity aziende",
    "finanziamenti cybersecurity pmi",
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
    <LandingLayout
      locale="it"
      label="PMI"
      title="Bandi cybersecurity per PMI"
      intro="I bandi per la sicurezza informatica delle PMI coprono, quando il testo lo prevede, analisi, test e percorsi di compliance. Hacksure prepara i documenti e svolge il servizio tecnico."
      path={path}
      sections={[
        {
          heading: "A cosa servono i bandi cybersecurity",
          paragraphs: [
            "Regioni, camere di commercio e programmi nazionali pubblicano periodicamente bandi che finanziano investimenti digitali delle piccole e medie imprese, inclusa la sicurezza informatica. Il nome e le regole cambiano a ogni apertura: importi, spese ammesse, dimensioni dell'impresa e scadenze non sono uguali da una call all'altra.",
            "Per questo non vendiamo un bando preconfezionato. Leggiamo il bando applicabile alla tua impresa, verifichiamo se pentest, vulnerability assessment o compliance rientrano tra le spese ammesse e impostiamo la domanda su quell'avviso.",
          ],
        },
        {
          heading: "La documentazione, seguita da chi fa anche il lavoro tecnico",
          paragraphs: [
            "Una domanda debole nasce quasi sempre da un progetto tecnico vago: obiettivo generico, perimetro non descritto, deliverable assenti. Noi scriviamo la parte tecnica insieme alle carte, perché siamo gli stessi che poi eseguono l'intervento.",
            "Prepariamo la pratica e la documentazione richiesta, seguiamo la domanda e l'istruttoria fino all'esito del contributo. Se il bando chiede preventivi, descrizione dell'attività o cronoprogramma, escono dal perimetro reale del servizio, non da un modello vuoto.",
          ],
          bullets: [
            "Lettura dell'avviso e delle spese ammesse",
            "Progetto tecnico allineato al bando",
            "Documentazione e allegati della domanda",
            "Presidio dell'istruttoria fino alla risposta",
          ],
        },
        {
          heading: "Cosa può entrare nel progetto finanziato",
          paragraphs: [
            "Quando il bando lo consente, il progetto può includere penetration test, vulnerability assessment, sicurezza di rete, protezione degli endpoint e attività di compliance su NIS2, GDPR o ISO 27001. Non tutto è finanziabile su ogni avviso: te lo diciamo prima di scrivere la domanda.",
            "Il servizio parte in coerenza con le regole del contributo. Report, priorità di remediation e riepilogo per la direzione restano parte della consegna, come in un incarico diretto.",
          ],
        },
        {
          heading: "PMI in tutta Italia, sede a Brescia",
          paragraphs: [
            "Lavoriamo con imprese manifatturiere e di servizi, dalla provincia di Brescia al resto d'Italia. Se hai già un bando in mano o vuoi capire se la tua azienda può accedere a un contributo per la cybersecurity, il primo passo è una valutazione del perimetro e della documentazione.",
          ],
        },
      ]}
      related={[
        { label: "Cybersecurity a portata di tutti", href: "/cybersecurity-a-portata-di-tutti" },
        { label: "Penetration test finanziato", href: "/penetration-test-finanziato" },
        { label: "Sicurezza informatica aziendale", href: "/sicurezza-informatica-azienda" },
        { label: "Obblighi NIS2", href: "/obblighi-sicurezza-informatica-nis2" },
        { label: "Compliance", href: "/compliance" },
        { label: "Contatti", href: "/contatti" },
      ]}
    />
  );
}
