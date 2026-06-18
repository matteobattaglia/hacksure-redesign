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
