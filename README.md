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

L'invio avviene solo tramite `POST /api/contact`. Il browser non chiama FormSubmit (né Resend o Web3Forms). Il server prova i provider in ordine e passa al successivo se la chiave manca, la chiamata fallisce o scade il timeout (8 secondi per provider). Se non c'è nessun provider utilizzabile la route risponde `503`; se tutti falliscono risponde `502`. Il modulo esce sempre dallo stato "Invio in corso..." e mostra conferma o errore.

Variabili da impostare nel progetto Vercel (Production), senza committarle:

| Variabile | Obbligatoria | Ruolo |
| --- | --- | --- |
| `RESEND_API_KEY` | Sì, per la consegna principale | Chiave Resend. Senza questa chiave Resend viene saltato. |
| `CONTACT_FROM_EMAIL` | Sì, se usi Resend verso una casella reale | Mittente verificato su Resend, es. `Hacksure Contatti <contatti@hacksure.it>`. Il default `onboarding@resend.dev` consegna solo all'indirizzo dell'account Resend. |
| `CONTACT_TO_EMAIL` | Consigliata | Destinatario dei lead. Se assente vale `info@hacksure.it`. |
| `WEB3FORMS_ACCESS_KEY` | Fallback | Chiave Web3Forms, usata se Resend non è configurato o fallisce. |

Serve almeno una tra `RESEND_API_KEY` e `WEB3FORMS_ACCESS_KEY`. FormSubmit è l'ultimo fallback e non ha una chiave: usa `CONTACT_TO_EMAIL`. Non va considerato affidabile da solo.

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
