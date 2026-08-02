export type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

export const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "info@hacksure.it";
export const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Hacksure Contatti <onboarding@resend.dev>";

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

export async function sendWithResend(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false as const, reason: "missing_resend_key" };

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    replyTo: lead.email,
    subject: `[Hacksure] Nuovo contatto — ${lead.name} (${lead.company})`,
    html: buildEmailHtml(lead),
    text: buildEmailText(lead),
  });

  if (error) {
    console.error("[CONTACT EMAIL RESEND ERROR]", error);
    return { ok: false as const, reason: error.message };
  }

  return { ok: true as const, provider: "resend" as const };
}

export async function sendWithWeb3Forms(lead: Lead) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false as const, reason: "missing_web3forms_key" };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[Hacksure] Nuovo contatto — ${lead.name}`,
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

  if (!res.ok || !data?.success) {
    console.error("[CONTACT EMAIL WEB3FORMS ERROR]", res.status, data);
    return { ok: false as const, reason: data?.message ?? `web3forms_${res.status}` };
  }

  return { ok: true as const, provider: "web3forms" as const };
}

export async function sendWithFormSubmit(lead: Lead) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://www.hacksure.it",
      Referer: "https://www.hacksure.it/contatti",
    },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company,
      need: lead.need,
      message: lead.message,
      _subject: `[Hacksure] Nuovo contatto — ${lead.name}`,
      _replyto: lead.email,
      _template: "table",
      _captcha: false,
    }),
  });

  const data = (await res.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  const message = data?.message ?? "";
  const successFlag = data?.success === true || data?.success === "true";

  // Prima attivazione: FormSubmit manda mail di conferma a CONTACT_TO
  if (/activation|activate form/i.test(message)) {
    console.info("[CONTACT FORMSUBMIT ACTIVATION REQUIRED]", message);
    return { ok: true as const, provider: "formsubmit_activation" as const };
  }

  if (!res.ok || !successFlag) {
    console.error("[CONTACT EMAIL FORMSUBMIT ERROR]", res.status, data);
    return { ok: false as const, reason: message || `formsubmit_${res.status}` };
  }

  return { ok: true as const, provider: "formsubmit" as const };
}
