import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "info@hacksure.it";
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Hacksure Contatti <onboarding@resend.dev>";

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  need: string;
  message: string;
};

function buildEmailHtml(lead: Lead) {
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
        `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;color:#333">${label}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;color:#444">${String(value).replace(/</g, "&lt;")}</td></tr>`,
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

async function sendWithResend(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false as const, reason: "missing_resend_key" };

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    replyTo: lead.email,
    subject: `[Hacksure] Nuovo contatto — ${lead.name} (${lead.company})`,
    html: buildEmailHtml(lead),
    text: [
      `Nuovo contatto Hacksure`,
      `Nome: ${lead.name}`,
      `Azienda: ${lead.company}`,
      `Email: ${lead.email}`,
      `Telefono: ${lead.phone}`,
      `Esigenza: ${lead.need || "—"}`,
      `Messaggio: ${lead.message || "—"}`,
    ].join("\n"),
  });

  if (error) {
    console.error("[CONTACT EMAIL RESEND ERROR]", error);
    return { ok: false as const, reason: error.message };
  }

  return { ok: true as const };
}

/** Fallback senza API key: richiede attivazione via email a CONTACT_TO al primo invio. */
async function sendWithFormSubmit(lead: Lead) {
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[CONTACT EMAIL FORMSUBMIT ERROR]", res.status, text);
    return { ok: false as const, reason: `formsubmit_${res.status}` };
  }

  return { ok: true as const };
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Troppe richieste. Riprova tra un'ora." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.honeypot) {
    return NextResponse.json({ success: true });
  }

  const lead: Lead = {
    name: sanitize(body.name, 100),
    company: sanitize(body.company, 200),
    email: sanitize(body.email, 254),
    phone: sanitize(body.phone, 30),
    need: sanitize(body.need, 80),
    message: sanitize(body.message, 2000),
  };

  if (!lead.name || !lead.company || !lead.email || !lead.phone) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Email non valida" }, { status: 400 });
  }

  let sent = await sendWithResend(lead);
  if (!sent.ok) {
    sent = await sendWithFormSubmit(lead);
  }

  if (!sent.ok) {
    console.error("[CONTACT EMAIL FAILED]", sent.reason);
    return NextResponse.json(
      { error: "Invio email non riuscito. Riprova o scrivi a info@hacksure.it" },
      { status: 502 },
    );
  }

  console.info("[CONTACT LEAD SENT]", {
    timestamp: new Date().toISOString(),
    to: CONTACT_TO,
    company: lead.company,
    need: lead.need,
    ip: ip.replace(/\d+$/, "xxx"),
  });

  return NextResponse.json({ success: true });
}
