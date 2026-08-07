import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { CertBadge } from "@/components/CertBadge";
import { getCertifications, getFrameworks, getServices } from "@/lib/data/localized";
import { localizeHref, type Locale } from "@/lib/i18n/config";

const copy = {
  it: {
    featuredLabel: "In evidenza",
    featuredTitle: "Tre risposte concrete alle esigenze più urgenti",
    featuredIntro:
      "Normative, notarizzazione delle prove e supporto immediato se sei stato truffato online.",
    regulationsBadge: "Normative",
    regulationsTitle: "Compliance e obblighi di legge",
    regulationsText:
      "NIS2, GDPR, ISO 27001 e altri framework. Autovalutazione gratuita per capire se sei in regola e cosa fare per evitare sanzioni.",
    regulationsCta: "Verifica le normative →",
    trustBadge: "Digital Trust",
    trustTitle: "Notarizzazione Blockchain",
    trustText:
      "Timestamp immutabile di documenti e prove digitali. Collaboriamo con studi legali altamente qualificati per usi civili e processuali.",
    trustCta: "Scopri la notarizzazione →",
    emergencyBadge: "Emergenza",
    emergencyTitle: "SOS Truffe Online",
    emergencyText:
      "Sei stato truffato online? Call gratuita, analisi di fattibilità e — se ci sono chance concrete — perizia tecnica da presentare a legali e autorità.",
    emergencyCta: "Richiedi aiuto ora →",
    complianceLabel: "Compliance",
    complianceTitle: "Framework normativi",
    servicesLabel: "Servizi",
    servicesTitle: "Cybersecurity operativa",
    teamLabel: "Team",
    certsTitle: "Certificazioni professionali",
    certsNote: "certificazioni attive in offensive security, CompTIA e vendor enterprise.",
    viewAllMasc: "Vedi tutti →",
    viewAllFem: "Vedi tutte →",
    partnershipLabel: "Partnership ufficiale",
    partnershipTitle: "HackSure è Kaspersky Registered B2B Partner",
    partnershipText: "Endpoint security, EDR/XDR e protezione enterprise per PMI.",
    discover: "Scopri →",
  },
  en: {
    featuredLabel: "Highlights",
    featuredTitle: "Three concrete answers to the most urgent needs",
    featuredIntro:
      "Regulations, notarization of digital evidence and immediate support if you have been scammed online.",
    regulationsBadge: "Regulations",
    regulationsTitle: "Compliance and legal obligations",
    regulationsText:
      "NIS2, GDPR, ISO 27001 and other frameworks. A free self-assessment to see where you stand and what to do to avoid penalties.",
    regulationsCta: "Check the regulations →",
    trustBadge: "Digital Trust",
    trustTitle: "Blockchain Notarization",
    trustText:
      "Immutable timestamping of documents and digital evidence. We work with highly qualified law firms for civil and court proceedings.",
    trustCta: "Discover notarization →",
    emergencyBadge: "Emergency",
    emergencyTitle: "Online Fraud Response",
    emergencyText:
      "Have you been scammed online? Free call, feasibility analysis and — where there is a real chance — an expert technical report for lawyers and authorities.",
    emergencyCta: "Get help now →",
    complianceLabel: "Compliance",
    complianceTitle: "Regulatory frameworks",
    servicesLabel: "Services",
    servicesTitle: "Cybersecurity in practice",
    teamLabel: "Team",
    certsTitle: "Professional certifications",
    certsNote: "active certifications in offensive security, CompTIA and enterprise vendors.",
    viewAllMasc: "View all →",
    viewAllFem: "View all →",
    partnershipLabel: "Official partnership",
    partnershipTitle: "HackSure is a Kaspersky Registered B2B Partner",
    partnershipText: "Endpoint security, EDR/XDR and enterprise-grade protection for SMEs.",
    discover: "Learn more →",
  },
} as const;

export function HomeOverview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const href = (path: string) => localizeHref(locale, path);
  const frameworks = getFrameworks(locale);
  const services = getServices(locale);
  const certifications = getCertifications(locale);

  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl">
              <p className="section-label">{t.featuredLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                {t.featuredTitle}
              </h2>
              <p className="mt-3 text-zinc-400">
                {t.featuredIntro}
              </p>
            </div>
          </AnimateIn>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <AnimateIn delay={60}>
              <Link
                href={href("/compliance")}
                className="card-hover gradient-border group flex h-full flex-col p-7"
              >
                <span className="inline-flex w-fit rounded-full border border-brand-600/40 bg-brand-600/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                  {t.regulationsBadge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{t.regulationsTitle}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {t.regulationsText}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-500 transition-transform group-hover:translate-x-1">
                  {t.regulationsCta}
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn delay={120}>
              <Link
                href={href("/servizi/notarizzazione-blockchain")}
                className="card-hover gradient-border group flex h-full flex-col p-7"
              >
                <span className="inline-flex w-fit rounded-full border border-brand-600/40 bg-brand-600/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-400">
                  {t.trustBadge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{t.trustTitle}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {t.trustText}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-500 transition-transform group-hover:translate-x-1">
                  {t.trustCta}
                </span>
              </Link>
            </AnimateIn>

            <AnimateIn delay={180}>
              <Link
                href={href("/servizi/perizia-truffe-online")}
                className="card-hover gradient-border group relative flex h-full flex-col overflow-hidden border-brand-600/40 p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-600/15 via-transparent to-transparent" />
                <span className="relative inline-flex w-fit rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {t.emergencyBadge}
                </span>
                <h3 className="relative mt-4 text-xl font-semibold text-white">{t.emergencyTitle}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                  {t.emergencyText}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-400 transition-transform group-hover:translate-x-1">
                  {t.emergencyCta}
                </span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-surface-900/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">{t.complianceLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{t.complianceTitle}</h2>
            </div>
            <Link href={href("/compliance")} className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              {t.viewAllMasc}
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.slice(0, 6).map((f, i) => (
              <AnimateIn key={f.slug} delay={i * 60}>
                <Link href={href(`/compliance/${f.slug}`)} className="card-hover block p-5">
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{f.subtitle}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{f.description}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">{t.servicesLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{t.servicesTitle}</h2>
            </div>
            <Link href={href("/servizi")} className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              {t.viewAllMasc}
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimateIn key={s.slug} delay={i * 50}>
                <Link href={href(`/servizi/${s.slug}`)} className="card-hover block p-5">
                  <p className="text-xs font-medium text-brand-500">{s.category}</p>
                  <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{s.shortDescription}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200}>
            <Link
              href={href("/partner/kaspersky")}
              className="card-hover mt-6 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center"
            >
              <div className="shrink-0 rounded-lg border border-zinc-800 bg-black p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/partners/kaspersky-registered-partner.jpg"
                  alt="Kaspersky Registered B2B Partner"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  {t.partnershipLabel}
                </p>
                <h3 className="mt-1 font-semibold text-white">
                  {t.partnershipTitle}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  {t.partnershipText}
                </p>
              </div>
              <span className="text-sm font-medium text-brand-500">{t.discover}</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-surface-900/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label">{t.teamLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{t.certsTitle}</h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                {certifications.length} {t.certsNote}
              </p>
            </div>
            <Link href={href("/certificazioni")} className="hidden text-sm font-medium text-brand-500 hover:text-brand-400 sm:block">
              {t.viewAllFem}
            </Link>
          </AnimateIn>
          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {certifications.map((cert, i) => (
              <AnimateIn key={cert.slug} delay={i * 40}>
                <Link href={href(`/certificazioni/${cert.slug}`)} className="card-hover flex flex-col items-center p-4 text-center">
                  <CertBadge src={cert.image} alt={cert.alt} size={64} />
                  <h3 className="mt-3 text-xs font-medium leading-tight text-white sm:text-sm">{cert.name}</h3>
                  <p className="mt-0.5 text-[10px] text-zinc-500 sm:text-xs">{cert.issuer}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
