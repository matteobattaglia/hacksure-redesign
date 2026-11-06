# HackSure — Cybersecurity Website

Redesign professionale del sito [hacksure.it](https://hacksure.it) con Next.js 15, SEO ottimizzato e security headers.

## Funzionalità

- **Homepage** redesign professionale e commerciale
- **Servizi** divisi in due categorie:
  - **Compliance & Normative** (NIS2, GDPR, ISO 27001, DORA, PCI DSS, SOC 2) con questionari di autovalutazione
  - **Offensive & Infrastructure Security** (pentest, VA, network, EDR/XDR, IR)
- **Certificazioni** con asset originali dal sito (CompTIA, eCPPT, C|VNP)
- **SEO**: meta tags, Open Graph, JSON-LD, sitemap, robots.txt
- **Sicurezza**: CSP, HSTS, rate limiting API, honeypot anti-spam, sanitizzazione input

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Form contatti

Il modulo invia dal browser a Web3Forms (`POST https://api.web3forms.com/submit`). La chiave `WEB3FORMS_ACCESS_KEY` viene letta nei Server Component che renderizzano il form (homepage, contatti, landing SEO, collabora) e passata come prop. È una chiave pubblica: non creare una variabile `NEXT_PUBLIC_`.

Se la chiave manca, il browser torna a `POST /api/contact`. Quella route resta per Resend (poi Web3Forms e FormSubmit lato server) quando `RESEND_API_KEY` è configurata. Il pulsante ha un timeout di 15 secondi e non resta su "Invio in corso...".

Variabili da impostare nel progetto Vercel (Production), senza committarle:

| Variabile | Obbligatoria | Ruolo |
| --- | --- | --- |
| `WEB3FORMS_ACCESS_KEY` | Sì, per l'invio dal browser | Chiave Web3Forms. Letta sul server e passata al form. Senza questa chiave il browser usa `/api/contact`. |
| `RESEND_API_KEY` | Solo per il fallback della route | Chiave Resend, usata da `POST /api/contact` se la chiave Web3Forms non c'è. |
| `CONTACT_FROM_EMAIL` | Sì, se usi Resend verso una casella reale | Mittente verificato su Resend, es. `Hacksure Contatti <contatti@hacksure.it>`. Il default `onboarding@resend.dev` consegna solo all'indirizzo dell'account Resend. |
| `CONTACT_TO_EMAIL` | Consigliata | Destinatario dei lead. Se assente vale `info@hacksure.it`. |

## Build produzione

```bash
npm run build
npm start
```

## Struttura

```
src/
  app/              # Pagine Next.js App Router
  components/       # Componenti UI
  lib/data/         # Dati servizi, compliance, certificazioni
  lib/seo.ts        # Config SEO e JSON-LD
public/assets/      # Asset originali HackSure
```
