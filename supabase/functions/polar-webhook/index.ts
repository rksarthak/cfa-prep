// FinPrepCamp: Polar webhook. Unlocks a subject when Polar reports a paid order,
// and locks it again when the order is fully refunded.
//
// In Polar → Settings → Webhooks, point an endpoint at
//   https://<project-ref>.supabase.co/functions/v1/polar-webhook
// with the events order.paid and order.refunded. Polar shows a secret (whsec_...).
//
// Secrets (Supabase → Edge Functions → Secrets):
//   POLAR_WEBHOOK_SECRET  the whsec_... secret of that endpoint
//   POLAR_PRODUCT_ID      the "Subject unlock" product; orders for other products are ignored
// This function must run with "Verify JWT" turned OFF (Polar does not send a Supabase token);
// the webhook signature is what proves the message comes from Polar.
import { createClient } from "npm:@supabase/supabase-js@2";

const SUBJECTS = ["fsa", "ethics", "quant", "econ", "corp", "equity", "fixed", "deriv", "alts", "pm"];
const env = (k: string) => Deno.env.get(k) ?? "";
const sb = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false } });
const enc = new TextEncoder();

function b64ToBytes(s: string): Uint8Array | null {
  try { return Uint8Array.from(atob(s), (c) => c.charCodeAt(0)); } catch { return null; }
}
function bytesToB64(b: ArrayBuffer): string {
  let s = ""; for (const x of new Uint8Array(b)) s += String.fromCharCode(x); return btoa(s);
}
function sameText(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0;
}

// Standard Webhooks signature check: HMAC-SHA256 over "<id>.<timestamp>.<body>".
// Polar secrets made since 8 Sep 2026 are standard (key = base64 part after "whsec_");
// older ones use the UTF-8 bytes of the whole "whsec_..." string. Both are tried.
async function verify(req: Request, raw: string): Promise<boolean> {
  const id = req.headers.get("webhook-id"), ts = req.headers.get("webhook-timestamp"), sigs = req.headers.get("webhook-signature");
  const secret = env("POLAR_WEBHOOK_SECRET");
  if (!id || !ts || !sigs || !secret) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // older than 5 minutes: replay
  const keys = [b64ToBytes(secret.replace(/^whsec_/, "")), enc.encode(secret)].filter(Boolean) as Uint8Array[];
  const given = sigs.split(" ").map((s) => s.split(",")[1]).filter(Boolean);
  for (const k of keys) {
    const key = await crypto.subtle.importKey("raw", k, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const mine = bytesToB64(await crypto.subtle.sign("HMAC", key, enc.encode(`${id}.${ts}.${raw}`)));
    if (given.some((g) => sameText(g, mine))) return true;
  }
  return false;
}

const reply = (status: number, msg: string) => new Response(msg, { status });

Deno.serve(async (req) => {
  if (req.method !== "POST") return reply(405, "Method not allowed");
  const raw = await req.text();
  if (!(await verify(req, raw))) return reply(403, "Bad signature");

  let event: any;
  try { event = JSON.parse(raw); } catch { return reply(400, "Bad JSON"); }
  const order = event?.data ?? {};
  const reference = `polar:${order.id}`;
  const product = order.product_id ?? order.product?.id;
  // Answer 2xx to events we don't act on, so Polar doesn't retry them.
  if (!order.id || (env("POLAR_PRODUCT_ID") && product !== env("POLAR_PRODUCT_ID"))) return reply(202, "Ignored");

  if (event.type === "order.paid" && order.status === "paid") {
    const meta = order.metadata ?? {};
    const userId = meta.user_id || order.customer?.external_id;
    const subject = meta.subject_id;
    if (!userId || !SUBJECTS.includes(subject)) {
      console.error("Paid order without user or subject; unlock it by hand", order.id, order.customer?.email);
      return reply(202, "Missing user or subject");
    }
    const { data, error } = await sb.rpc("grant_card_purchase", {
      p_user: userId, p_email: order.customer?.email ?? null, p_subject: subject,
      p_reference: reference, p_amount_cents: order.total_amount ?? null, p_currency: order.currency ?? "usd",
    });
    if (error) { console.error("grant_card_purchase failed", error.message); return reply(500, "Database error"); } // Polar retries
    if (data !== "granted" && data !== "duplicate") console.warn("Order", order.id, "→", data);
    return reply(200, String(data));
  }

  if (event.type === "order.refunded" && order.status === "refunded") {
    const { data, error } = await sb.rpc("revoke_card_purchase", { p_reference: reference, p_note: "Refunded in Polar" });
    if (error) { console.error("revoke_card_purchase failed", error.message); return reply(500, "Database error"); }
    return reply(200, String(data));
  }
  return reply(202, "Ignored");
});
