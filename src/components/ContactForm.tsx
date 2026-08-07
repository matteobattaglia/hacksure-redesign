"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  embedded?: boolean;
  defaultNeed?: string;
  needOptions?: string[];
  subjectPrefix?: string;
};

const copy = {
  it: {
    needOptions: [
      "Valutazione gratuita",
      "Compliance NIS2 / GDPR",
      "Penetration testing",
      "Non lo so ancora, ho bisogno di consiglio",
    ],
    errName: "Inserisci nome e cognome",
    errCompany: "Inserisci la ragione sociale",
    errEmail: "Email non valida",
    errPhone: "Inserisci un numero di telefono valido",
    errConsent: "Devi accettare l'informativa privacy",
    errSubmitFailed: "Invio non riuscito",
    errGeneric: "Errore nell'invio. Riprova o scrivi a info@hacksure.it",
    successTitle: "Richiesta inviata",
    successBody: "Ti ricontatteremo entro 24 ore lavorative.",
    sendAnother: "Invia un'altra richiesta",
    labelName: "Nome e cognome *",
    placeholderName: "Mario Rossi",
    labelCompany: "Ragione sociale *",
    placeholderCompany: "Azienda Srl",
    labelEmail: "Email *",
    placeholderEmail: "mario@azienda.it",
    labelPhone: "Telefono *",
    placeholderPhone: "+39 333 1234567",
    labelNeed: "Di cosa hai bisogno?",
    labelMessage: "Messaggio (opzionale)",
    placeholderMessage: "Descrivi brevemente le tue esigenze...",
    consent:
      "Acconsento al trattamento dei dati per la verifica preliminare e il ricontatto, nel rispetto del GDPR (Reg. UE 2016/679).",
    submitting: "Invio in corso...",
    submit: "Invia richiesta",
  },
  en: {
    needOptions: [
      "Free assessment",
      "NIS2 / GDPR compliance",
      "Penetration testing",
      "Not sure yet, I need advice",
    ],
    errName: "Enter your first and last name",
    errCompany: "Enter your registered company name",
    errEmail: "Invalid email address",
    errPhone: "Enter a valid phone number",
    errConsent: "You must accept the privacy notice",
    errSubmitFailed: "Submission failed",
    errGeneric: "Something went wrong. Please try again or write to info@hacksure.it",
    successTitle: "Request sent",
    successBody: "We will get back to you within 24 working hours.",
    sendAnother: "Send another request",
    labelName: "Full name *",
    placeholderName: "John Smith",
    labelCompany: "Company name *",
    placeholderCompany: "Company Ltd",
    labelEmail: "Email *",
    placeholderEmail: "john@company.com",
    labelPhone: "Phone *",
    placeholderPhone: "+39 333 1234567",
    labelNeed: "What do you need?",
    labelMessage: "Message (optional)",
    placeholderMessage: "Briefly describe your requirements...",
    consent:
      "I consent to the processing of my data for the preliminary check and for being contacted back, in compliance with the GDPR (EU Reg. 2016/679).",
    submitting: "Sending...",
    submit: "Send request",
  },
} as const;

export function ContactForm({
  embedded = false,
  defaultNeed,
  needOptions,
  subjectPrefix = "[Hacksure]",
}: Props) {
  const locale = useLocale();
  const t = copy[locale];

  const options: readonly string[] = needOptions ?? t.needOptions;
  const initialNeed = defaultNeed ?? t.needOptions[0];

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [need, setNeed] = useState(initialNeed);

  useEffect(() => {
    setNeed(initialNeed);
  }, [initialNeed]);

  function validate(formData: FormData) {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const consent = formData.get("consent");

    if (!name || name.length < 2) newErrors.name = t.errName;
    if (!company || company.length < 2) newErrors.company = t.errCompany;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = t.errEmail;
    if (!phone || phone.length < 8) newErrors.phone = t.errPhone;
    if (!consent) newErrors.consent = t.errConsent;

    return newErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honeypot: silenziosamente "ok" senza inviare
    if (formData.get("website")) {
      setState("success");
      form.reset();
      return;
    }

    setErrors({});
    setState("submitting");

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      need: String(formData.get("need") || need),
      message: String(formData.get("message") || ""),
      _subject: `${subjectPrefix} Nuovo contatto — ${String(formData.get("name") || "")}`,
      _replyto: String(formData.get("email") || ""),
      _template: "table",
      _captcha: false,
    };

    try {
      // Invio diretto dal browser (FormSubmit attivato) — più affidabile di Vercel→FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/info@hacksure.it", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const ok = data?.success === true || data?.success === "true";
      if (!response.ok || !ok) {
        throw new Error(data?.message || t.errSubmitFailed);
      }

      // Log server-side best-effort (non blocca l'UX)
      void fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, honeypot: "", _clientDelivered: true }),
      }).catch(() => undefined);

      setErrors({});
      setState("success");
      form.reset();
    } catch (err) {
      setErrors({
        form: err instanceof Error ? err.message : t.errGeneric,
      });
      setState("error");
    }
  }

  const formContent =
    state === "success" ? (
      <div className="py-10 text-center">
        <p className="text-lg font-semibold text-white">{t.successTitle}</p>
        <p className="mt-2 text-sm text-zinc-400">
          {errors.form ? errors.form : t.successBody}
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-brand-500 hover:text-brand-400"
        >
          {t.sendAnother}
        </button>
      </div>
    ) : (
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-300">
            {t.labelName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder={t.placeholderName}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-zinc-300">
            {t.labelCompany}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder={t.placeholderCompany}
          />
          {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-300">
              {t.labelEmail}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
              placeholder={t.placeholderEmail}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-300">
              {t.labelPhone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
              placeholder={t.placeholderPhone}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="need" className="mb-1 block text-sm font-medium text-zinc-300">
            {t.labelNeed}
          </label>
          <select
            id="need"
            name="need"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white focus:border-brand-500 focus:outline-none"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-300">
            {t.labelMessage}
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full resize-none rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder={t.placeholderMessage}
          />
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 rounded border-zinc-600 text-brand-600 focus:ring-brand-500"
            />
            <span className="text-xs leading-relaxed text-zinc-500">{t.consent}</span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
        </div>

        {state === "error" && (
          <p className="text-sm text-red-400">{errors.form || t.errGeneric}</p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary w-full disabled:opacity-60"
        >
          {state === "submitting" ? t.submitting : t.submit}
        </button>
      </form>
    );

  if (embedded) {
    return <div className="card p-6">{formContent}</div>;
  }

  return formContent;
}
