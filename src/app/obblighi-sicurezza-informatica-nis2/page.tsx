import type { Metadata } from "next";
import { LandingLayout } from "@/components/LandingLayout";
import { createMetadata } from "@/lib/seo";

const path = "/obblighi-sicurezza-informatica-nis2";

export const metadata: Metadata = createMetadata({
  title: "NIS2: sei obbligato? Scopri cosa devi fare ed entro quando",
  description:
    "Obblighi NIS2 per le PMI: chi è coinvolto, scadenze, cosa rischi se non ti adegui. Verifica gratis in 5 minuti se la tua azienda è obbligata.",
  path,
  keywords: [
    "obblighi nis2 azienda",
    "nis2 pmi",
    "nis2 cos'è",
    "direttiva nis2 italia",
    "nis2 sono obbligato",
  ],
});

export default function Page() {
  return (
    <LandingLayout
      label="NIS2"
      title="NIS2: sei obbligato? Scopri cosa devi fare entro quando"
      intro="Hai sentito parlare di NIS2 ma non capisci se riguarda la tua azienda? In pochi minuti ti chiariamo chi è obbligato, cosa serve fare e cosa rischi se non ti adegui."
      path={path}
      sections={[
        {
          heading: "Cos'è la NIS2 in parole semplici",
          paragraphs: [
            "La NIS2 è una direttiva europea che obbliga molte aziende a rafforzare la propria sicurezza informatica e a gestire correttamente gli incidenti. Nasce perché gli attacchi informatici sono diventati un rischio per l'economia e i servizi essenziali.",
            "A differenza della normativa precedente, la NIS2 coinvolge un numero molto più ampio di aziende, comprese molte PMI che prima non erano interessate.",
          ],
        },
        {
          heading: "Chi è obbligato",
          paragraphs: [
            "Sono coinvolte le aziende che operano in settori considerati essenziali o importanti e che superano determinate soglie dimensionali. Anche se non rientri direttamente, potresti essere obbligato indirettamente come fornitore di un'azienda più grande.",
          ],
          bullets: [
            "Energia, trasporti, sanità, acqua e rifiuti",
            "Fornitori di servizi digitali e ICT",
            "Produzione, alimentare e logistica (settori importanti)",
            "Fornitori della supply chain di aziende già obbligate",
          ],
        },
        {
          heading: "Le scadenze e cosa rischi",
          paragraphs: [
            "Gli obblighi sono già in vigore e prevedono registrazione presso l'autorità competente, adozione di misure di sicurezza e notifica degli incidenti significativi entro tempi stretti. Il mancato adeguamento espone a sanzioni economiche rilevanti e, in alcuni casi, a responsabilità per gli organi di gestione.",
            "Aspettare non conviene: l'adeguamento richiede tempo e va pianificato con anticipo.",
          ],
        },
        {
          heading: "Cosa fare adesso",
          paragraphs: [
            "Il primo passo è capire se sei obbligato. Abbiamo preparato un questionario gratuito che, in 5 minuti, ti dice se la NIS2 ti riguarda e a che punto sei. Da lì costruiamo insieme un piano di adeguamento su misura per la tua azienda.",
          ],
          bullets: [
            "Verifica gratuita dell'obbligo NIS2",
            "Gap analysis rispetto ai requisiti",
            "Piano di adeguamento prioritizzato",
            "Supporto continuo nella gestione degli incidenti",
          ],
        },
      ]}
      related={[
        { label: "Autovalutazione NIS2", href: "/compliance/nis2" },
        { label: "Tutti i framework compliance", href: "/compliance" },
        { label: "Multa GDPR", href: "/multa-gdpr-azienda" },
        { label: "Sicurezza informatica aziendale", href: "/sicurezza-informatica-azienda" },
      ]}
    />
  );
}
