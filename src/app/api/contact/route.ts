import { NextRequest, NextResponse } from "next/server";
import {
  type Lead,
  sendWithFormSubmit,
  sendWithResend,
  sendWithWeb3Forms,
  CONTACT_TO,
} from "@/lib/mail";

type SendResult =
  | { ok: true; provider: string }
  | { ok: false; reason: string };

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

async function deliver(lead: Lead): Promise<SendResult> {
  const resend = await sendWithResend(lead);
  if (resend.ok) return resend;

  const web3 = await sendWithWeb3Forms(lead);
  if (web3.ok) return web3;

  return sendWithFormSubmit(lead);
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

  // Se il client ha già consegnato via FormSubmit, logghiamo soltanto
  if (body._clientDelivered) {
    console.info("[CONTACT LEAD CLIENT-DELIVERED]", {
      timestamp: new Date().toISOString(),
      company: sanitize(body.company, 200),
      need: sanitize(body.need, 80),
      ip: ip.replace(/\d+$/, "xxx"),
    });
    return NextResponse.json({ success: true, logged: true });
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

  const sent = await deliver(lead);

  if (!sent.ok) {
    console.error("[CONTACT EMAIL FAILED]", sent.reason);
    return NextResponse.json(
      {
        error:
          "Invio email non riuscito. Controlla la casella info@hacksure.it (anche spam) per un eventuale link di attivazione, oppure scrivi direttamente a info@hacksure.it",
      },
      { status: 502 },
    );
  }

  console.info("[CONTACT LEAD SENT]", {
    timestamp: new Date().toISOString(),
    to: CONTACT_TO,
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
