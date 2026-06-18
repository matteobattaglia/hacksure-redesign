"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type Props = {
  embedded?: boolean;
};

export function ContactForm({ embedded = false }: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const consent = formData.get("consent");

    if (!name || name.length < 2) newErrors.name = "Inserisci nome e cognome";
    if (!company || company.length < 2) newErrors.company = "Inserisci la ragione sociale";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Email non valida";
    if (!phone || phone.length < 8) newErrors.phone = "Inserisci un numero di telefono valido";
    if (!consent) newErrors.consent = "Devi accettare l'informativa privacy";

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

    setErrors({});
    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          need: formData.get("need"),
          message: formData.get("message"),
          honeypot: formData.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Submit failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const formContent =
    state === "success" ? (
      <div className="py-10 text-center">
        <p className="text-lg font-semibold text-white">Richiesta inviata</p>
        <p className="mt-2 text-sm text-zinc-400">Ti ricontatteremo entro 24 ore lavorative.</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-brand-500 hover:text-brand-400"
        >
          Invia un&apos;altra richiesta
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
            Nome e cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder="Mario Rossi"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-zinc-300">
            Ragione sociale *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder="Azienda Srl"
          />
          {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-300">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
              placeholder="mario@azienda.it"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-300">
              Telefono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
              placeholder="+39 333 1234567"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="need" className="mb-1 block text-sm font-medium text-zinc-300">
            Di cosa hai bisogno?
          </label>
          <select
            id="need"
            name="need"
            defaultValue="Valutazione gratuita"
            className="w-full rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white focus:border-brand-500 focus:outline-none"
          >
            <option>Valutazione gratuita</option>
            <option>Compliance NIS2 / GDPR</option>
            <option>Penetration testing</option>
            <option>Non lo so ancora, ho bisogno di consiglio</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-300">
            Messaggio (opzionale)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full resize-none rounded-md border border-zinc-700 bg-surface-950 px-3 py-2.5 text-white placeholder:text-zinc-600 focus:border-brand-500 focus:outline-none"
            placeholder="Descrivi brevemente le tue esigenze..."
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
            <span className="text-xs leading-relaxed text-zinc-500">
              Acconsento al trattamento dei dati per la verifica preliminare e il ricontatto, nel
              rispetto del GDPR (Reg. UE 2016/679).
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-red-400">{errors.consent}</p>}
        </div>

        {state === "error" && (
          <p className="text-sm text-red-400">
            Errore nell&apos;invio. Riprova o scrivi a info@hacksure.it
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary w-full disabled:opacity-60"
        >
          {state === "submitting" ? "Invio in corso..." : "Invia richiesta"}
        </button>
      </form>
    );

  if (embedded) {
    return <div className="card p-6">{formContent}</div>;
  }

  return formContent;
}
