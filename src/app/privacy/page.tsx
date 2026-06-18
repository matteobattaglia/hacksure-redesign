import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy & Cookie Policy",
  description: "Informativa privacy e cookie policy di HackSure — Seven Business srl.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="border-b border-zinc-800 bg-surface-900">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="section-label">Legale</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Privacy & Cookie Policy</h1>
          </div>
        </div>
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-zinc-400 leading-relaxed space-y-6">
          <p>
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679
            (GDPR).
          </p>

          <h2 className="text-lg font-semibold text-white">Titolare del trattamento</h2>
          <p>
            {siteConfig.legalName}
            <br />
            {siteConfig.address}
            <br />
            P.IVA: {siteConfig.vat}
            <br />
            Email: <a href={`mailto:${siteConfig.email}`} className="text-brand-500 hover:text-brand-400">{siteConfig.email}</a>
          </p>

          <h2 className="text-lg font-semibold text-white">Finalità del trattamento</h2>
          <p>
            I dati personali raccolti tramite il form di contatto e i questionari di
            autovalutazione compliance vengono trattati esclusivamente per:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Rispondere alle richieste di informazioni e consulenza</li>
            <li>Erogare verifiche preliminari NIS2 e compliance</li>
            <li>Ricontattare l&apos;interessato in merito all&apos;esito della valutazione</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">Base giuridica</h2>
          <p>
            Il trattamento si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR)
            e sull&apos;esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).
          </p>

          <h2 className="text-lg font-semibold text-white">Conservazione dei dati</h2>
          <p>
            I dati saranno conservati per il tempo necessario a evadere la richiesta e, in caso di
            instaurazione del rapporto commerciale, per la durata del rapporto stesso e per i
            termini di legge applicabili.
          </p>

          <h2 className="text-lg font-semibold text-white">Diritti dell&apos;interessato</h2>
          <p>
            L&apos;interessato ha diritto di accesso, rettifica, cancellazione, limitazione,
            portabilità e opposizione al trattamento, nonché di revocare il consenso in qualsiasi
            momento, contattando {siteConfig.email}.
          </p>

          <h2 className="text-lg font-semibold text-white">Cookie</h2>
          <p>
            Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non
            vengono utilizzati cookie di profilazione di terze parti senza consenso esplicito.
          </p>

          <p className="mt-8">
            <Link href="/" className="text-brand-500 hover:text-brand-400">
              ← Torna alla homepage
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
