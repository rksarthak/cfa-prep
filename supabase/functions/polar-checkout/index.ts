// FinPrepCamp: start a Polar card checkout (USD) for one subject.
// Called by the site (js/account.js → Account.startCardCheckout) for a signed-in student.
// It checks who the student is from their Supabase sign-in, asks Polar for a checkout page
// with the student's id and the subject attached, and returns that page's address.
//
// Secrets (Supabase → Edge Functions → Secrets):
//   POLAR_ACCESS_TOKEN  Polar organization access token with the checkouts:write scope
//   POLAR_PRODUCT_ID    the Polar product "Subject unlock" (one product, used for every subject)
//   POLAR_SERVER        "sandbox" while testing, "production" when live (default: production)
//   SITE_URL            the site address, e.g. https://finprepcamp.onrender.com
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided by Supabase automatically.
import { createClient } from "npm:@supabase/supabase-js@2";

const SUBJECTS = ["fsa", "ethics", "quant", "econ", "corp", "equity", "fixed", "deriv", "alts", "pm"];
const env = (k: string) => Deno.env.get(k) ?? "";
const SITE_URL = (env("SITE_URL") || "https://finprepcamp.onrender.com").replace(/\/+$/, "");
const POLAR_API = env("POLAR_SERVER") === "sandbox" ? "https://sandbox-api.polar.sh/v1" : "https://api.polar.sh/v1";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const sb = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  if (!env("POLAR_ACCESS_TOKEN") || !env("POLAR_PRODUCT_ID")) return json({ error: "Card payments are not set up yet." }, 503);

  // Who is buying: the student's Supabase sign-in token.
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: auth, error: authErr } = token ? await sb.auth.getUser(token) : { data: null, error: true };
  const user = auth?.user;
  if (authErr || !user) return json({ error: "Please sign in again." }, 401);

  let subject = "";
  try { subject = String((await req.json()).subject_id ?? ""); } catch { /* empty body */ }
  if (!SUBJECTS.includes(subject)) return json({ error: "Unknown subject." }, 400);

  // Already owns it? Don't take a second payment.
  const { data: owned } = await sb.from("purchases").select("id").eq("user_id", user.id).eq("subject_id", subject).eq("status", "paid").limit(1);
  if (owned && owned.length) return json({ error: "You already own this subject." }, 409);

  const back = `${SITE_URL}/#/buy/${subject}`;
  const res = await fetch(`${POLAR_API}/checkouts/`, {
    method: "POST",
    headers: { Authorization: `Bearer ${env("POLAR_ACCESS_TOKEN")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      products: [env("POLAR_PRODUCT_ID")],
      external_customer_id: user.id,
      customer_email: user.email ?? undefined,
      metadata: { user_id: user.id, subject_id: subject },
      success_url: `${SITE_URL}/?checkout_id={CHECKOUT_ID}#/buy/${subject}`,
      return_url: back,
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.url) {
    console.error("Polar checkout failed", res.status, JSON.stringify(body).slice(0, 500));
    return json({ error: "The payment page could not be opened. Please try again in a minute." }, 502);
  }
  return json({ url: body.url });
});
