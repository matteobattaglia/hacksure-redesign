import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb, CtaBanner } from "@/components/PageLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { isLocale, localizeHref, type Locale } from "@/lib/i18n/config";

const path = "/partner/kaspersky";

type Props = { params: Promise<{ locale: string }> };

const copy: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
    jsonLdServiceType: string;
    jsonLdDescription: string;
    breadcrumbHome: string;
    breadcrumbPartner: string;
    heroLabel: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    badgeCaption: string;
    vendorLabel: string;
    vendorTitle: string;
    vendorParagraph1: string;
    vendorParagraph2: string;
    vendorCta: string;
    whyLabel: string;
    whyTitle: string;
    whyKaspersky: { title: string; desc: string }[];
    portfolioLabel: string;
    portfolioTitle: string;
    portfolioDescription: string;
    nextSolutions: { name: string; tagline: string; features: string[] }[];
    solutionCta: string;
    finderTitle: string;
    finderDescription: string;
    finderCta: string;
    processLabel: string;
    processTitle: string;
    processDescription: string;
    steps: { step: string; title: string; desc: string; cta: string; href: string }[];
    closingTitle: string;
    closingDescription: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  }
> = {
  it: {
    seoTitle: "Soluzioni Kaspersky Cybersecurity per aziende",
    seoDescription:
      "HackSure — partner e rivenditore autorizzato Kaspersky. Soluzioni certificate Next EDR, XDR e MXDR per la sicurezza informatica aziendale.",
    keywords: [
      "kaspersky partner",
      "kaspersky next",
      "kaspersky EDR",
      "kaspersky XDR",
      "kaspersky cybersecurity aziende",
      "hacksure kaspersky",
    ],
    jsonLdServiceType: "Kaspersky Next — Cybersecurity aziendale",
    jsonLdDescription:
      "HackSure è partner e rivenditore autorizzato Kaspersky. Soluzioni Next EDR, XDR e MXDR per aziende.",
    breadcrumbHome: "Home",
    breadcrumbPartner: "Partner",
    heroLabel: "Partner certificato Kaspersky",
    heroTitle: "Soluzioni di cybersecurity certificate per le aziende",
    heroSubtitle: "Partner certificato Kaspersky per la sicurezza informatica aziendale",
    heroDescription:
      "HackSure.it opera come partner e rivenditore autorizzato di Kaspersky, mettendo a disposizione tecnologie avanzate pensate per affrontare le minacce informatiche moderne in modo efficace e strutturato.",
    heroCtaPrimary: "Parla con un consulente",
    heroCtaSecondary: "Scopri le soluzioni Kaspersky Next",
    badgeCaption: "Badge ufficiale Kaspersky Registered B2B Partner",
    vendorLabel: "Il vendor",
    vendorTitle: "Cos'è Kaspersky?",
    vendorParagraph1:
      "Kaspersky è una delle principali aziende a livello globale nel settore della cybersecurity, con oltre vent'anni di esperienza nella protezione di sistemi informatici, reti e dati sensibili.",
    vendorParagraph2:
      "Presente in più di 200 Paesi e territori, Kaspersky sviluppa soluzioni di sicurezza avanzate per aziende, enti pubblici e infrastrutture critiche, proteggendo milioni di utenti e organizzazioni in tutto il mondo da minacce informatiche sempre più sofisticate.",
    vendorCta: "Prenota una consulenza",
    whyLabel: "Perché scelgono Kaspersky",
    whyTitle: "Perché scegliere Kaspersky",
    whyKaspersky: [
      {
        title: "Protezione basata su Machine Learning",
        desc: "Identificazione e blocco delle minacce note e sconosciute attraverso algoritmi avanzati di analisi comportamentale.",
      },
      {
        title: "Rilevamento e risposta rapida agli incidenti",
        desc: "Individuazione tempestiva delle attività sospette e risposta immediata per ridurre l'impatto degli attacchi informatici.",
      },
      {
        title: "Soluzioni informatiche scalabili nel tempo",
        desc: "Una piattaforma che cresce insieme all'azienda, adattandosi a nuove esigenze, utenti e livelli di sicurezza.",
      },
      {
        title: "Gestione centralizzata, intuitiva e controllabile",
        desc: "Un'unica console per monitorare, configurare e gestire la sicurezza dell'intero ecosistema IT in modo semplice ed efficiente.",
      },
    ],
    portfolioLabel: "Portfolio",
    portfolioTitle: "Le soluzioni di Kaspersky Next",
    portfolioDescription:
      "Kaspersky Next offre un ecosistema di soluzioni progettate per adattarsi a diversi livelli di maturità della sicurezza informatica aziendale, consentendo alle imprese di scegliere il grado di protezione più adatto alle proprie esigenze operative e organizzative.",
    nextSolutions: [
      {
        name: "Kaspersky Next EDR Foundations",
        tagline: "Il punto di partenza solido per la cybersecurity aziendale",
        features: [
          "Protezione endpoint multilivello di livello enterprise",
          "Capacità EDR di base per rilevare e investigare incidenti",
          "Difesa anti-ransomware e anti-malware avanzata",
          "Gestione centralizzata della protezione",
          "Ideale per PMI che costruiscono le fondamenta della sicurezza",
        ],
      },
      {
        name: "Kaspersky Next EDR Optimum",
        tagline: "EDR essenziale con automazione e semplicità operativa",
        features: [
          "Tutte le funzionalità di EDR Foundations",
          "Capacità EDR essenziali e risposta automatizzata",
          "Ottimizzazione dei task IT e hardening",
          "Controlli endpoint avanzati",
          "Pensato per team IT snelli che vogliono più visibilità",
        ],
      },
      {
        name: "Kaspersky Next XDR Optimum",
        tagline: "XDR accessibile: visibilità oltre gli endpoint",
        features: [
          "Tutte le funzionalità di EDR Optimum",
          "Aggregazione alert e correlazione eventi",
          "Cloud Sandbox per analisi file sospetti",
          "Integrazione Active Directory",
          "Strumenti di investigazione e risposta estesi",
        ],
      },
      {
        name: "Kaspersky Next MXDR Optimum",
        tagline: "XDR in-house + monitoraggio gestito 24/7",
        features: [
          "Tutte le funzionalità di XDR Optimum",
          "Monitoraggio continuo e threat hunting da esperti Kaspersky",
          "Supporto SOC 24/7 con notifiche e guidance",
          "Investigazione e risposta assistita dagli esperti",
          "Ideale quando serve protezione gestita senza rinunciare al controllo",
        ],
      },
    ],
    solutionCta: "Richiedi info su questa soluzione →",
    finderTitle: "Trova la soluzione più adatta al tuo business",
    finderDescription:
      "Ti aiutiamo a scegliere tra Foundations, Optimum EDR, XDR e MXDR in base a dimensione, rischio e risorse del tuo team IT.",
    finderCta: "Parla con un consulente",
    processLabel: "HackSure partner Kaspersky",
    processTitle: "Un percorso strutturato, dalla valutazione alla protezione operativa",
    processDescription:
      "Attraverso HackSure.it supportiamo le aziende in ogni fase del percorso di sicurezza informatica, offrendo un approccio consulenziale, strutturato e orientato alle reali esigenze del business.",
    steps: [
      {
        step: "01",
        title: "Analisi del rischio informatico",
        desc: "Valutazione dello stato di sicurezza dell'infrastruttura IT per individuare vulnerabilità, criticità e potenziali minacce.",
        cta: "Verifica ora",
        href: "/contatti",
      },
      {
        step: "02",
        title: "Scelta della soluzione Kaspersky più adatta",
        desc: "Selezione del piano Kaspersky Next più coerente con la struttura aziendale, il livello di rischio e gli obiettivi di sicurezza.",
        cta: "Verifica ora",
        href: "/contatti",
      },
      {
        step: "03",
        title: "Supporto tecnico continuo",
        desc: "Configurazione, avviamento e assistenza costante per garantire il corretto funzionamento delle soluzioni nel tempo.",
        cta: "Verifica ora",
        href: "/contatti",
      },
    ],
    closingTitle: "Pronto a proteggere la tua azienda con Kaspersky?",
    closingDescription:
      "Consulenza senza impegno: analizziamo il rischio e ti indichiamo la soluzione Kaspersky Next più adatta.",
    closingCtaPrimary: "Prenota una consulenza",
    closingCtaSecondary: "Endpoint Security",
  },
  en: {
    seoTitle: "Kaspersky Cybersecurity Solutions for Business",
    seoDescription:
      "Kaspersky partner and authorised reseller in Italy: Hacksure deploys certified Kaspersky Next EDR, XDR and MXDR solutions for business cybersecurity.",
    keywords: [
      "kaspersky partner",
      "kaspersky next",
      "kaspersky EDR",
      "kaspersky XDR",
      "kaspersky business solutions",
      "kaspersky partner italy",
      "hacksure kaspersky",
    ],
    jsonLdServiceType: "Kaspersky Next — Business cybersecurity",
    jsonLdDescription:
      "Hacksure is an authorised Kaspersky partner and reseller. Kaspersky Next EDR, XDR and MXDR solutions for businesses.",
    breadcrumbHome: "Home",
    breadcrumbPartner: "Partner",
    heroLabel: "Certified Kaspersky partner",
    heroTitle: "Certified cybersecurity solutions for businesses",
    heroSubtitle: "Certified Kaspersky partner for business cybersecurity",
    heroDescription:
      "Hacksure.it operates as an authorised Kaspersky partner and reseller, providing advanced technologies designed to counter modern cyber threats in an effective, structured way.",
    heroCtaPrimary: "Talk to a consultant",
    heroCtaSecondary: "Explore the Kaspersky Next solutions",
    badgeCaption: "Official Kaspersky Registered B2B Partner badge",
    vendorLabel: "The vendor",
    vendorTitle: "What is Kaspersky?",
    vendorParagraph1:
      "Kaspersky is one of the world's leading cybersecurity companies, with more than twenty years of experience protecting IT systems, networks and sensitive data.",
    vendorParagraph2:
      "Present in more than 200 countries and territories, Kaspersky develops advanced security solutions for businesses, public bodies and critical infrastructure, protecting millions of users and organisations worldwide from increasingly sophisticated cyber threats.",
    vendorCta: "Book a consultation",
    whyLabel: "Why they choose Kaspersky",
    whyTitle: "Why choose Kaspersky",
    whyKaspersky: [
      {
        title: "Protection powered by machine learning",
        desc: "Known and unknown threats are identified and blocked through advanced behavioural analysis algorithms.",
      },
      {
        title: "Fast incident detection and response",
        desc: "Timely identification of suspicious activity and immediate response to limit the impact of cyber attacks.",
      },
      {
        title: "IT solutions that scale over time",
        desc: "A platform that grows with your company, adapting to new requirements, users and security levels.",
      },
      {
        title: "Centralised management, intuitive and fully controllable",
        desc: "A single console to monitor, configure and manage security across the entire IT ecosystem, simply and efficiently.",
      },
    ],
    portfolioLabel: "Portfolio",
    portfolioTitle: "The Kaspersky Next solutions",
    portfolioDescription:
      "Kaspersky Next offers an ecosystem of solutions designed to match different levels of corporate security maturity, letting businesses choose the degree of protection that best fits their operational and organisational needs.",
    nextSolutions: [
      {
        name: "Kaspersky Next EDR Foundations",
        tagline: "A solid starting point for business cybersecurity",
        features: [
          "Enterprise-grade multi-layered endpoint protection",
          "Core EDR capabilities to detect and investigate incidents",
          "Advanced anti-ransomware and anti-malware defence",
          "Centralised protection management",
          "Ideal for SMEs building their security foundations",
        ],
      },
      {
        name: "Kaspersky Next EDR Optimum",
        tagline: "Essential EDR with automation and operational simplicity",
        features: [
          "Everything included in EDR Foundations",
          "Essential EDR capabilities and automated response",
          "IT task optimisation and hardening",
          "Advanced endpoint controls",
          "Designed for lean IT teams that need more visibility",
        ],
      },
      {
        name: "Kaspersky Next XDR Optimum",
        tagline: "Accessible XDR: visibility beyond the endpoint",
        features: [
          "Everything included in EDR Optimum",
          "Alert aggregation and event correlation",
          "Cloud Sandbox for analysing suspicious files",
          "Active Directory integration",
          "Extended investigation and response tools",
        ],
      },
      {
        name: "Kaspersky Next MXDR Optimum",
        tagline: "In-house XDR + managed 24/7 monitoring",
        features: [
          "Everything included in XDR Optimum",
          "Continuous monitoring and threat hunting by Kaspersky experts",
          "24/7 SOC support with notifications and guidance",
          "Expert-assisted investigation and response",
          "Ideal when you need managed protection without giving up control",
        ],
      },
    ],
    solutionCta: "Request information on this solution →",
    finderTitle: "Find the solution that fits your business",
    finderDescription:
      "We help you choose between Foundations, Optimum EDR, XDR and MXDR based on your size, risk level and IT team resources.",
    finderCta: "Talk to a consultant",
    processLabel: "Hacksure, Kaspersky partner",
    processTitle: "A structured path, from assessment to operational protection",
    processDescription:
      "Through Hacksure.it we support companies at every stage of their cybersecurity journey, with a consultative, structured approach focused on real business needs.",
    steps: [
      {
        step: "01",
        title: "Cyber risk assessment",
        desc: "Review of the security posture of your IT infrastructure to identify vulnerabilities, weak points and potential threats.",
        cta: "Check now",
        href: "/contatti",
      },
      {
        step: "02",
        title: "Choosing the right Kaspersky solution",
        desc: "Selection of the Kaspersky Next plan that best matches your company structure, risk level and security objectives.",
        cta: "Check now",
        href: "/contatti",
      },
      {
        step: "03",
        title: "Ongoing technical support",
        desc: "Configuration, rollout and continuous assistance to keep the solutions working properly over time.",
        cta: "Check now",
        href: "/contatti",
      },
    ],
    closingTitle: "Ready to protect your business with Kaspersky?",
    closingDescription:
      "No-commitment consultation: we assess your risk and identify the most suitable Kaspersky Next solution.",
    closingCtaPrimary: "Book a consultation",
    closingCtaSecondary: "Endpoint Security",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return createMetadata({
    title: t.seoTitle,
    description: t.seoDescription,
    path,
    keywords: t.keywords,
    locale,
  });
}

export default async function KasperskyPartnerPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = copy[locale];

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            serviceType: t.jsonLdServiceType,
            description: t.jsonLdDescription,
            path,
            locale,
          }),
          breadcrumbJsonLd(
            [
              { name: t.breadcrumbHome, url: "/" },
              { name: `${t.breadcrumbPartner} Kaspersky`, url: path },
            ],
            locale,
          ),
        ]}
      />
      <Header />
      <main>
        <Breadcrumb
          locale={locale}
          items={[
            { label: t.breadcrumbHome, href: "/" },
            { label: t.breadcrumbPartner, href: "/servizi" },
            { label: "Kaspersky" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-surface-900">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/8 via-transparent to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
            <AnimateIn>
              <p className="section-label">{t.heroLabel}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                {t.heroTitle}
              </h1>
              <p className="mt-3 text-base font-medium text-brand-400">{t.heroSubtitle}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                {t.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={localizeHref(locale, "/contatti")} className="btn-primary">
                  {t.heroCtaPrimary}
                </Link>
                <a href="#kaspersky-next" className="btn-secondary">
                  {t.heroCtaSecondary}
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div className="card flex items-center justify-center p-8 sm:p-10">
                <Image
                  src="/assets/partners/kaspersky-registered-partner.jpg"
                  alt="Kaspersky Registered B2B Partner — HackSure"
                  width={1024}
                  height={428}
                  className="h-auto w-full max-w-md"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-zinc-500">{t.badgeCaption}</p>
            </AnimateIn>
          </div>
        </section>

        {/* Cos'è Kaspersky */}
        <section className="border-b border-zinc-800 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{t.vendorLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.vendorTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-400">{t.vendorParagraph1}</p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">{t.vendorParagraph2}</p>
              <Link href={localizeHref(locale, "/contatti")} className="btn-primary mt-8">
                {t.vendorCta}
              </Link>
            </AnimateIn>
          </div>
        </section>

        {/* Perché scegliere Kaspersky */}
        <section className="border-b border-zinc-800 bg-surface-900/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{t.whyLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.whyTitle}</h2>
            </AnimateIn>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.whyKaspersky.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 70}>
                  <div className="card-hover h-full p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Kaspersky Next */}
        <section id="kaspersky-next" className="scroll-mt-24 border-b border-zinc-800 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{t.portfolioLabel}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                {t.portfolioTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                {t.portfolioDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t.nextSolutions.map((s) => (
                  <a
                    key={s.name}
                    href={`#${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-brand-600/50 hover:text-brand-400"
                  >
                    {s.name.replace("Kaspersky Next ", "")}
                  </a>
                ))}
              </div>
            </AnimateIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {t.nextSolutions.map((solution, i) => (
                <AnimateIn key={solution.name} delay={i * 80}>
                  <article
                    id={solution.name.toLowerCase().replace(/\s+/g, "-")}
                    className="card-hover gradient-border flex h-full scroll-mt-28 flex-col p-6 sm:p-7"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                      Kaspersky Next
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {solution.name.replace("Kaspersky Next ", "")}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{solution.tagline}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {solution.features.map((f) => (
                        <li key={f} className="flex gap-3 text-sm text-zinc-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={localizeHref(locale, "/contatti")}
                      className="mt-6 text-sm font-medium text-brand-500 hover:text-brand-400"
                    >
                      {t.solutionCta}
                    </Link>
                  </article>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn>
              <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-white">{t.finderTitle}</h3>
                <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">{t.finderDescription}</p>
                <Link href={localizeHref(locale, "/contatti")} className="btn-primary mt-6">
                  {t.finderCta}
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Partner process */}
        <section className="border-b border-zinc-800 bg-surface-900/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <p className="section-label">{t.processLabel}</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
                {t.processTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                {t.processDescription}
              </p>
            </AnimateIn>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.steps.map((item, i) => (
                <AnimateIn key={item.step} delay={i * 80}>
                  <div className="card-hover flex h-full flex-col p-6">
                    <span className="text-xs font-bold tracking-widest text-brand-600/70">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="mt-6 inline-flex text-sm font-medium text-brand-500 hover:text-brand-400"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <AnimateIn>
              <h2 className="text-2xl font-semibold text-white">{t.closingTitle}</h2>
              <p className="mt-3 text-zinc-400">{t.closingDescription}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href={localizeHref(locale, "/contatti")} className="btn-primary">
                  {t.closingCtaPrimary}
                </Link>
                <Link
                  href={localizeHref(locale, "/servizi/endpoint-security")}
                  className="btn-secondary"
                >
                  {t.closingCtaSecondary}
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        <CtaBanner locale={locale} />
      </main>
      <Footer />
    </>
  );
}
