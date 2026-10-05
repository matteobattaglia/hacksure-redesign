import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/cybersecurity-a-portata-di-tutti";

type Props = { params: Promise<{ locale: string }> };

const italianMetadata: Metadata = createMetadata({
  title: "Cybersecurity a portata di tutti grazie ai bandi",
  description:
    "Cybersecurity a portata di tutti grazie ai bandi: prepariamo i documenti e eroghiamo pentest, vulnerability assessment e compliance NIS2, GDPR e ISO 27001 per le PMI.",
  path,
  italianOnly: true,
  keywords: [
    "cybersecurity a portata di tutti",
    "cybersecurity finanziata bandi",
    "servizi cybersecurity finanziati",
    "cybersecurity per pmi",
    "bandi cybersecurity",
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
      label="Bandi"
      title="Cybersecurity a portata di tutti grazie ai bandi"
      intro="Seguiamo tutto noi, dalla preparazione dei documenti del bando all'erogazione del servizio tecnico: penetration test, vulnerability assessment e compliance NIS2, GDPR e ISO 27001."
      path={path}
      sections={[
        {
          heading: "Un servizio di cybersecurity che la PMI può davvero affrontare",
          paragraphs: [
            "Per molte imprese il freno non è la consapevolezza del rischio, è il budget. Penetration test, vulnerability assessment e percorsi di compliance hanno un costo che una PMI rimanda, anche quando sa di essere esposta. I bandi pubblici, nazionali e regionali, sono uno dei modi con cui quell'intervento diventa sostenibile.",
            "Cybersecurity a portata di tutti non significa un pacchetto generico. Significa costruire il progetto tecnico giusto per la tua azienda e accompagnarti nella domanda di contributo, così l'investimento non resta solo a carico tuo.",
          ],
        },
        {
          heading: "Dalla preparazione dei documenti all'erogazione del servizio",
          paragraphs: [
            "Hacksure è un unico referente. Prepariamo la pratica e la documentazione richiesta dal bando, seguiamo la domanda e l'istruttoria fino all'esito del contributo, ed eroghiamo l'intervento tecnico. Non devi coordinare un consulente per le carte e un fornitore diverso per i test.",
            "L'esito del bando non dipende solo dal dossier: lo seguiamo fino alla risposta, senza presentarlo come un contributo già assegnato.",
          ],
          bullets: [
            "Raccolta delle informazioni aziendali e del perimetro da proteggere",
            "Preparazione della documentazione richiesta dal bando",
            "Invio e seguito della domanda fino all'esito",
            "Erogazione del servizio tecnico e consegna dei report",
          ],
        },
        {
          heading: "Quali interventi si possono mettere nel progetto",
          paragraphs: [
            "Il contenuto tecnico dipende da cosa il bando ammette e da cosa serve davvero all'azienda. Nei progetti che seguiamo rientrano, quando coerenti con il bando e con il rischio, penetration test, vulnerability assessment, adeguamento NIS2 e GDPR, percorso verso ISO 27001, sicurezza di rete ed endpoint.",
            "Partiamo dal contesto: produzione, servizi, dati personali, fornitori. Poi scriviamo un intervento che si possa sia finanziare sia eseguire, con priorità e deliverable chiari.",
          ],
        },
        {
          heading: "Da dove si parte",
          paragraphs: [
            "Ci racconti l'azienda e l'intervento che ti serve. Verifichiamo se esiste un bando compatibile, ti diciamo quali documenti servono e come si svolge il lavoro tecnico. La sede è a Brescia, in Via Fratelli Ugoni 34, e operiamo con PMI in tutta Italia.",
          ],
        },
      ]}
      related={[
        { label: "Bandi cybersecurity per PMI", href: "/bandi-cybersecurity-pmi" },
        { label: "Penetration test finanziato", href: "/penetration-test-finanziato" },
        { label: "Pentest aziendale", href: "/pentest-azienda" },
        { label: "Compliance NIS2", href: "/compliance/nis2" },
        { label: "Servizi", href: "/servizi" },
        { label: "Contatti", href: "/contatti" },
      ]}
    />
  );
}
