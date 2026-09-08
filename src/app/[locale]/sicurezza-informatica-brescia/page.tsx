import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/sicurezza-informatica-brescia";

type Props = { params: Promise<{ locale: string }> };

const italianMetadata: Metadata = createMetadata({
  title: "Sicurezza Informatica a Brescia | Penetration Test e Compliance NIS2",
  description:
    "Cybersecurity a Brescia per PMI manifatturiere e metalmeccaniche: penetration test, vulnerability assessment e compliance NIS2. Valutazione gratuita.",
  path,
  italianOnly: true,
  keywords: [
    "cybersecurity brescia",
    "sicurezza informatica brescia",
    "penetration test brescia",
    "pen test brescia",
    "vulnerability assessment brescia",
    "aziende sicurezza informatica brescia",
    "nis2 brescia",
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
      label="Brescia"
      title="Sicurezza informatica a Brescia per PMI"
      intro="Hacksure opera da Brescia a fianco di imprese manifatturiere, metalmeccaniche e servizi della provincia. Penetration test Brescia, vulnerability assessment e compliance NIS2/GDPR con un approccio concreto, senza tecnicismi inutili."
      path={path}
      sections={[
        {
          heading: "Perché la cybersecurity conta nel tessuto industriale bresciano",
          paragraphs: [
            "La provincia di Brescia è uno dei motori manifatturieri d'Italia: metalmeccanica, automotive, meccanica di precisione, siderurgia e filiere collegate. Molte di queste aziende sono nella catena di fornitura di operatori essenziali o importanti e rientrano — direttamente o indirettamente — negli obblighi della direttiva NIS2 e nella protezione dei dati GDPR.",
            "Un attacco ransomware o una fornitura compromessa non ferma solo l'IT: ferma la produzione, i magazzini e i rapporti con i clienti. La sicurezza informatica a Brescia non è un tema astratto: è continuità operativa per chi produce e consegna ogni giorno.",
          ],
        },
        {
          heading: "Penetration test Brescia e vulnerability assessment",
          paragraphs: [
            "Offriamo penetration test Brescia (pen test) e vulnerability assessment Brescia su reti, applicazioni web e infrastrutture OT/IT tipiche delle PMI locali. Il vulnerability assessment individua le falle; il penetration test verifica fin dove un attaccante reale potrebbe arrivare, con report prioritizzati e remediation chiara.",
            "Lavoriamo con sede legale e operativa a Brescia (Via Fratelli Ugoni 34) e supporto operativo anche in Campania, così possiamo seguire progetti in loco o da remoto secondo le esigenze dello stabilimento.",
          ],
          bullets: [
            "Vulnerability assessment Brescia su reti e applicazioni",
            "Penetration test Brescia (web, infrastruttura, scenari mirati)",
            "Supporto a obblighi NIS2 e audit di sicurezza",
            "Endpoint security e partner Kaspersky per PMI",
          ],
        },
        {
          heading: "Compliance e obblighi per le aziende del territorio",
          paragraphs: [
            "Oltre al test tecnico aiutiamo le imprese bresciane a capire se ricadono in NIS2, come strutturare un piano di adeguamento e come ridurre il rischio di sanzioni GDPR. Partiamo sempre da una valutazione preliminare gratuita: niente pacchetti generici, priorità reali sul tuo contesto.",
          ],
        },
        {
          heading: "Comuni e aree della provincia di Brescia serviti",
          paragraphs: [
            "Interveniamo su tutta la provincia di Brescia e hinterland: Brescia città, Desenzano del Garda, Lonato, Castiglione delle Stiviere (confine MN), Montichiari, Ghedi, Leno, Manerbio, Orzinuovi, Chiari, Rovato, Ospitaletto, Concesio, Nave, Sarezzo, Gardone Val Trompia, Lumezzane, Darfo Boario Terme, Breno, Edolo, Salò, Toscolano Maderno, Iseo, Palazzolo sull'Oglio, Rezzato, Botticino, Mazzano, Travagliato, Castegnato, Roncadelle e i comuni limitrofi della Bassa, della Franciacorta e della Val Trompia / Val Camonica.",
            "Se la tua azienda ha sede in provincia di Brescia e vuoi un penetration test, un vulnerability assessment o una verifica NIS2, puoi richiedere una valutazione gratuita senza impegno.",
          ],
        },
      ]}
      related={[
        { label: "Penetration testing", href: "/servizi/penetration-testing" },
        { label: "Vulnerability Assessment", href: "/servizi/vulnerability-assessment" },
        { label: "Pentest aziendale", href: "/pentest-azienda" },
        { label: "Compliance NIS2", href: "/compliance/nis2" },
        { label: "Contatti Brescia", href: "/contatti" },
      ]}
    />
  );
}
