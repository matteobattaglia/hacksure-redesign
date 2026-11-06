import { NextRequest, NextResponse } from "next/server";
import { contactToAddress, deliverLead, type Lead } from "@/lib/mail";
import { isTimeoutError, REQUEST_BODY_TIMEOUT_MS, withTimeout } from "@/lib/timeout";

export const maxDuration = 30;

const NOT_CONFIGURED_ERROR =
  "Invio email non configurato. Riprova più tardi o scrivi direttamente a info@hacksure.it";
const DELIVERY_FAILED_ERROR =
  "Invio email non riuscito. Controlla la casella info@hacksure.it (anche spam) per un eventuale link di attivazione, oppure scrivi direttamente a info@hacksure.it";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

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
    const parsed = await withTimeout(() => request.json() as Promise<unknown>, REQUEST_BODY_TIMEOUT_MS);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch (error) {
    if (isTimeoutError(error)) {
      return NextResponse.json({ error: "Richiesta scaduta" }, { status: 408 });
    }
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: finta riuscita, nessun invio.
  if (body.honeypot || body.website) {
    return NextResponse.json({ success: true });
  }

  const lead: Lead = {
    name: sanitize(body.name, 100),
    company: sanitize(body.company, 200),
    email: sanitize(body.email, 254),
    phone: sanitize(body.phone, 30),
    need: sanitize(body.need, 80),
    message: sanitize(body.message, 2000),
    subjectPrefix: sanitize(body.subjectPrefix, 80),
  };

  if (!lead.name || !lead.company || !lead.email || !lead.phone) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Email non valida" }, { status: 400 });
  }

  const sent = await deliverLead(lead);

  if (!sent.ok) {
    console.error("[CONTACT EMAIL FAILED]", sent.reason);
    if (sent.code === "not_configured") {
      console.error(
        "[CONTACT EMAIL NOT CONFIGURED] Set RESEND_API_KEY or WEB3FORMS_ACCESS_KEY, and CONTACT_TO_EMAIL, in the Vercel project.",
      );
      return NextResponse.json(
        { error: NOT_CONFIGURED_ERROR, code: "not_configured" },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: DELIVERY_FAILED_ERROR, code: "delivery_failed" },
      { status: 502 },
    );
  }

  console.info("[CONTACT LEAD SENT]", {
    timestamp: new Date().toISOString(),
    to: contactToAddress(),
    provider: sent.provider,
    company: lead.company,
    need: lead.need,
    ip: ip.replace(/\d+$/, "xxx"),
  });

  return NextResponse.json({
    success: true,
    activationPending: sent.provider === "formsubmit_activation",
  });
}
