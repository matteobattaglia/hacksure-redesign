import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contactNeeds } from "@/lib/contact-needs";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/penetration-test-finanziato";

type Props = { params: Promise<{ locale: string }> };

const italianMetadata: Metadata = createMetadata({
  title: "Penetration test finanziato dai bandi per PMI",
  description:
    "Penetration test finanziato dai bandi: prepariamo la domanda di contributo e svolgiamo il pentest, con report prioritizzato e piano di remediation per la PMI.",
  path,
  italianOnly: true,
  keywords: [
    "penetration test finanziato",
    "pentest finanziato",
    "pentest bando",
    "penetration test pmi",
    "vulnerability assessment finanziato",
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
      label="Penetration test"
      title="Penetration test finanziato dai bandi"
      intro="Un penetration test finanziato è lo stesso intervento tecnico di un pentest diretto: cambia il modo in cui si copre il costo. Prepariamo i documenti del bando e svolgiamo il test."
      path={path}
      defaultNeed={contactNeeds.it.grants}
      sections={[
        {
          heading: "Perché finanziare un pentest con un bando",
          paragraphs: [
            "Il penetration test simula un attacco reale su reti, applicazioni o infrastruttura e mostra fin dove un attaccante potrebbe arrivare. Per una PMI è uno degli interventi più utili e anche uno di quelli più spesso rinviati, perché il costo arriva tutto insieme e il beneficio non si vede finché non c'è un incidente.",
            "Se un bando ammette spese di sicurezza informatica o di assessment, il pentest può entrare nel progetto finanziato. Hacksure scrive quella parte della domanda e poi esegue il test: il perimetro descritto in pratica è il perimetro che viene effettivamente provato.",
          ],
        },
        {
          heading: "Cosa comprende il penetration test",
          paragraphs: [
            "Definiamo insieme obiettivi e regole di ingaggio, eseguiamo il test sul perimetro concordato e consegniamo un report con le vulnerabilità sfruttate, l'impatto e l'ordine di remediation. Il documento è leggibile sia dal referente tecnico sia dalla direzione.",
            "Non è una scansione automatica. Il vulnerability assessment elenca le falle; il pentest verifica quali sono davvero sfruttabili. Se il bando o il tuo rischio chiedono prima una fotografia delle vulnerabilità, si può partire dall'assessment e riservare il pentest ai punti critici.",
          ],
          bullets: [
            "Perimetro e regole di ingaggio concordati",
            "Test su web, rete o scenari mirati",
            "Report con priorità e prove",
            "Indicazioni di remediation utilizzabili dal tuo team o dal fornitore IT",
          ],
        },
        {
          heading: "Documenti del bando e test nello stesso incarico",
          paragraphs: [
            "Prepariamo la pratica e la documentazione richiesta dal bando, seguiamo la domanda fino all'esito del contributo e, a contributo compatibile con il progetto, eroghiamo il pentest. Hai un solo interlocutore per le carte e per l'attacco simulato.",
            "Il contributo non è automatico: dipende dal bando, dai requisiti dell'impresa e dall'istruttoria. Ti diciamo prima se il pentest è una spesa coerente con l'avviso che stai guardando.",
          ],
        },
        {
          heading: "Quando ha senso rispetto ad altri interventi",
          paragraphs: [
            "Il pentest finanziato ha senso se hai già un perimetro chiaro — un applicativo, una rete, un servizio esposto — e vuoi sapere cosa succederebbe in un attacco. Se l'esigenza è capire gli obblighi NIS2 o GDPR, il progetto può affiancare al test un percorso di compliance, sempre dentro ciò che il bando consente.",
          ],
        },
      ]}
      related={[
        { label: "Cybersecurity a portata di tutti", href: "/cybersecurity-a-portata-di-tutti" },
        { label: "Bandi cybersecurity per PMI", href: "/bandi-cybersecurity-pmi" },
        { label: "Pentest aziendale", href: "/pentest-azienda" },
        { label: "Penetration testing", href: "/servizi/penetration-testing" },
        { label: "Vulnerability Assessment", href: "/servizi/vulnerability-assessment" },
        { label: "Contatti", href: "/contatti" },
      ]}
    />
  );
}
