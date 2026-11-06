import { isTimeoutError, PROVIDER_TIMEOUT_MS, withTimeout } from "@/lib/timeout";

export type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  message: string;
  subjectPrefix?: string;
};

export type SendResult =
  | { ok: true; provider: "resend" | "web3forms" | "formsubmit" | "formsubmit_activation" }
  | { ok: false; reason: string; code?: "not_configured" | "delivery_failed" };

const DEFAULT_CONTACT_TO = "info@hacksure.it";
const DEFAULT_CONTACT_FROM = "Hacksure Contatti <onboarding@resend.dev>";

export function contactToAddress(): string {
  return (process.env.CONTACT_TO_EMAIL ?? DEFAULT_CONTACT_TO).trim();
}

export function contactFromAddress(): string {
  return (process.env.CONTACT_FROM_EMAIL ?? DEFAULT_CONTACT_FROM).trim();
}

export function buildEmailHtml(lead: Lead) {
  const rows = [
    ["Nome", lead.name],
    ["Azienda", lead.company],
    ["Email", lead.email],
    ["Telefono", lead.phone],
    ["Esigenza", lead.need || "—"],
    ["Messaggio", lead.message || "—"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;color:#333">${label}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;color:#444;white-space:pre-wrap">${escapeHtml(String(value))}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#ea580c;margin-bottom:8px">Nuovo contatto dal sito Hacksure</h2>
      <p style="color:#666;margin-top:0">Richiesta ricevuta da www.hacksure.it</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>
    </div>
  `;
}

export function buildEmailText(lead: Lead) {
  return [
    "Nuovo contatto Hacksure",
    `Nome: ${lead.name}`,
    `Azienda: ${lead.company}`,
    `Email: ${lead.email}`,
    `Telefono: ${lead.phone}`,
    `Esigenza: ${lead.need || "—"}`,
    `Messaggio: ${lead.message || "—"}`,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function leadSubject(lead: Lead) {
  const prefix = singleLine(lead.subjectPrefix || "").slice(0, 80) || "[Hacksure]";
  const name = singleLine(lead.name) || "—";
  const company = singleLine(lead.company);
  return company
    ? `${prefix} Nuovo contatto — ${name} (${company})`
    : `${prefix} Nuovo contatto — ${name}`;
}

function failure(reason: string): SendResult {
  return { ok: false, reason };
}

async function providerCall<T>(run: (signal: AbortSignal) => Promise<T>): Promise<T> {
  return withTimeout(run, PROVIDER_TIMEOUT_MS);
}

export async function sendWithResend(lead: Lead): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return failure("missing_resend_key");

  const to = contactToAddress();
  if (!to) return failure("missing_contact_to");

  let timedOut = false;
  try {
    const { error } = await providerCall(async (signal) => {
      const markTimedOut = () => {
        timedOut = true;
      };
      signal.addEventListener("abort", markTimedOut, { once: true });
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        return await resend.emails.send(
          {
            from: contactFromAddress() || DEFAULT_CONTACT_FROM,
            to: [to],
            replyTo: lead.email,
            subject: leadSubject(lead),
            html: buildEmailHtml(lead),
            text: buildEmailText(lead),
          },
          // The SDK forwards unknown request options to fetch, including AbortSignal.
          { signal } as NonNullable<Parameters<InstanceType<typeof Resend>["emails"]["send"]>[1]>,
        );
      } finally {
        signal.removeEventListener("abort", markTimedOut);
      }
    });

    // Resend catches fetch failures and returns `{ error }` instead of rejecting,
    // including when our AbortSignal fires. Treat that as a timeout so the next provider runs.
    if (timedOut) {
      console.error("[CONTACT EMAIL RESEND TIMEOUT]");
      return failure("resend_timeout");
    }

    if (error) {
      console.error("[CONTACT EMAIL RESEND ERROR]", error);
      return failure(error.message || "resend_error");
    }

    return { ok: true, provider: "resend" };
  } catch (error) {
    if (isTimeoutError(error)) {
      console.error("[CONTACT EMAIL RESEND TIMEOUT]");
      return failure("resend_timeout");
    }
    console.error("[CONTACT EMAIL RESEND ERROR]", error);
    return failure(error instanceof Error ? error.message : "resend_error");
  }
}

export async function sendWithWeb3Forms(lead: Lead): Promise<SendResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) return failure("missing_web3forms_key");

  try {
    const { ok, status, data } = await providerCall(async (signal) => {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal,
        body: JSON.stringify({
          access_key: accessKey,
          subject: leadSubject(lead),
          from_name: "Hacksure Website",
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          need: lead.need,
          message: lead.message,
          replyto: lead.email,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;
      return { ok: res.ok, status: res.status, data };
    });

    if (!ok || !data?.success) {
      console.error("[CONTACT EMAIL WEB3FORMS ERROR]", status, data);
      return failure(data?.message || `web3forms_${status}`);
    }

    return { ok: true, provider: "web3forms" };
  } catch (error) {
    if (isTimeoutError(error)) {
      console.error("[CONTACT EMAIL WEB3FORMS TIMEOUT]");
      return failure("web3forms_timeout");
    }
    console.error("[CONTACT EMAIL WEB3FORMS ERROR]", error);
    return failure(error instanceof Error ? error.message : "web3forms_error");
  }
}

export async function sendWithFormSubmit(lead: Lead): Promise<SendResult> {
  const to = contactToAddress();
  if (!to) return failure("missing_contact_to");

  try {
    const { ok, status, data } = await providerCall(async (signal) => {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://www.hacksure.it",
          Referer: "https://www.hacksure.it/contatti",
        },
        signal,
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          need: lead.need,
          message: lead.message,
          _subject: leadSubject(lead),
          _replyto: lead.email,
          _template: "table",
          _captcha: false,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;
      return { ok: res.ok, status: res.status, data };
    });

    const message = data?.message ?? "";
    const successFlag = data?.success === true || data?.success === "true";

    // Prima attivazione: FormSubmit manda mail di conferma al destinatario.
    if (/activation|activate form/i.test(message)) {
      console.info("[CONTACT FORMSUBMIT ACTIVATION REQUIRED]", message);
      return { ok: true, provider: "formsubmit_activation" };
    }

    if (!ok || !successFlag) {
      console.error("[CONTACT EMAIL FORMSUBMIT ERROR]", status, data);
      return failure(message || `formsubmit_${status}`);
    }

    return { ok: true, provider: "formsubmit" };
  } catch (error) {
    if (isTimeoutError(error)) {
      console.error("[CONTACT EMAIL FORMSUBMIT TIMEOUT]");
      return failure("formsubmit_timeout");
    }
    console.error("[CONTACT EMAIL FORMSUBMIT ERROR]", error);
    return failure(error instanceof Error ? error.message : "formsubmit_error");
  }
}

/**
 * Resend, then Web3Forms, then FormSubmit.
 * Missing keys are skipped. Each attempt has its own timeout.
 * Returns not_configured when there is nothing to call.
 */
export async function deliverLead(lead: Lead): Promise<SendResult> {
  const reasons: string[] = [];
  const attempts: Array<() => Promise<SendResult>> = [];

  const resendKey = Boolean(process.env.RESEND_API_KEY?.trim());
  const web3Key = Boolean(process.env.WEB3FORMS_ACCESS_KEY?.trim());
  const recipient = contactToAddress();

  if (resendKey && recipient) {
    attempts.push(() => sendWithResend(lead));
  } else {
    reasons.push(resendKey ? "missing_contact_to" : "missing_resend_key");
  }

  if (web3Key) {
    attempts.push(() => sendWithWeb3Forms(lead));
  } else {
    reasons.push("missing_web3forms_key");
  }

  if (recipient) {
    attempts.push(() => sendWithFormSubmit(lead));
  } else if (!reasons.includes("missing_contact_to")) {
    reasons.push("missing_contact_to");
  }

  if (attempts.length === 0) {
    return { ok: false, reason: "no_provider_configured", code: "not_configured" };
  }

  for (const attempt of attempts) {
    const result = await attempt();
    if (result.ok) return result;
    reasons.push(result.reason);
  }

  return {
    ok: false,
    reason: reasons.filter(Boolean).join("; ") || "delivery_failed",
    code: "delivery_failed",
  };
}
