# Setting up student accounts and going live

The site is a static site on **Render**. Student sign-in and saved progress run on **Supabase** (sign-in + Postgres database).
You need three free accounts: **GitHub**, **Supabase** and **Render**. Allow about 30–45 minutes the first time.

Until step 2 is done, the site still works: the sign-in page shows a "Preview" note and progress is kept in the student's browser.

---

## 1. Put the code on GitHub

1. Done: the code lives in the private repository `rksarthak/cfa-prep` (branch `main`). The Claude GitHub App is installed on it so Claude can push updates.
2. Claude keeps the repository in sync with this `Website` folder. Every push to `main` redeploys the site on Render.

## 2. Create the Supabase project

1. Sign up at supabase.com and create a **New project**. Pick a region close to most students and save the database password somewhere safe.
2. When it is ready, open **SQL Editor → New query**, paste everything from `supabase/schema.sql`, and press **Run**. This creates the `progress`, `purchases` and `admins` tables and the security rules (each student sees only their own rows; only admins approve payments). Running it again later is safe.
3. Open **Project Settings → API** (called "API Keys" in newer dashboards) and copy:
   - the **Project URL** (looks like `https://abcdefghijkl.supabase.co`)
   - the **anon public** key (newer projects call it the **publishable** key; either works)
4. Paste both into `js/config.js`:
   ```js
   supabaseUrl: "https://abcdefghijkl.supabase.co",
   supabaseAnonKey: "eyJ...",   // or "sb_publishable_..."
   ```
   These two values are meant to be public. Never put the **service_role** / **secret** key in the site.

## 3. Publish on Render

1. Sign up at render.com with your GitHub account.
2. **New → Static Site**, choose the repository.
3. Build command: leave empty. Publish directory: `public` (only that folder is served; paid lesson sources in `content-paid/` stay private)
4. Create. Render gives you an address (ours: `https://finprepcamp.onrender.com`; the earlier `cfa-prep-0n6f` service is suspended). Every push to GitHub redeploys automatically.

## 4. Tell Supabase where the site lives

In Supabase: **Authentication → URL Configuration**
- **Site URL:** your Render address, e.g. `https://finprepcamp.onrender.com`
- **Redirect URLs:** add the same address. Add `http://localhost:8000` too if you want to test on your own computer.

Without this, confirmation emails, password-reset links and Google sign-in send students to the wrong place.

## 5. Email sign-in

On by default (**Authentication → Providers → Email**). **Current choice (24 Nov 2026): Confirm email is OFF**, so email sign-ups start studying at once and no email is needed (Supabase's built-in sender only manages a few per hour). Password-reset emails still use the built-in sender. Turn Confirm email back on once your own sender (below) is set up.

**Your own sender (needed before real students sign up).** Supabase's built-in sender shows "Supabase Auth <noreply@mail.app.supabase.io>" and sends only a few emails per hour. Sending from your own address needs a domain you own (Gmail addresses can't be used as the sender through these services; mail would land in spam).

1. Buy a domain, e.g. `cfaprep.in` (about ₹500–1,000 a year at Cloudflare, Namecheap, GoDaddy or Hostinger). The same domain can later become the site address (Render → your site → **Settings → Custom Domains**).
2. Sign up at **resend.com** (free: 3,000 emails a month, 100 a day). **Domains → Add domain**, enter the domain (or a subdomain such as `mail.cfaprep.in`), and add the DNS records Resend lists at your domain registrar. Wait until Resend shows **Verified** (minutes to a few hours).
3. Resend → **API Keys → Create API key** (permission: Sending access). Copy it; don't paste it anywhere else, including chats.
4. Supabase → **Authentication → Emails → SMTP Settings** → turn on **Custom SMTP**:
   - Sender email: `no-reply@yourdomain` · Sender name: `FinPrepCamp`
   - Host: `smtp.resend.com` · Port: `465` · Username: `resend` · Password: the Resend API key
5. Save, then raise **Authentication → Rate Limits → emails sent per hour** (e.g. 100).
6. Test: sign up with a new address and check the email arrives from your name and isn't in spam.

Brevo (300 emails a day free) works the same way if you prefer it; it also needs your own domain for good delivery.

**Branded emails (after custom SMTP is on).** Supabase only lets you edit email subjects and bodies once custom SMTP is set up; before that, the editor shows "Set up custom SMTP to edit templates". Ready-made HTML emails in the site's style are in `supabase/email-templates/` (confirm signup, reset password, magic link, change email). Paste them in under **Authentication → Emails**; the README in that folder has the subjects and steps.

## 6. Google sign-in (main sign-in option)

The sign-in page shows **Continue with Google** first, above the email form.

**A. Google Cloud (console.cloud.google.com)**
1. Top bar → project picker → **New project** (name: `FinPrepCamp`) → Create, and make sure it is selected.
2. **APIs & Services → OAuth consent screen** (newer console: **Google Auth Platform → Branding**). Get started: app name `FinPrepCamp`, your support email, audience **External**, your contact email. Create.
3. **Branding**: add the app domains if asked: home page `https://finprepcamp.onrender.com`; authorised domain `onrender.com` is not allowed, so leave authorised domains empty for now (add your own domain later).
4. **Audience** → **Publish app** (status "In production"). Basic sign-in (email, profile) needs no Google review. While it is still "Testing", only test users you list can sign in.
5. **Clients** (or **Credentials → Create credentials → OAuth client ID**) → type **Web application**, name `Supabase`:
   - Authorised JavaScript origins: `https://finprepcamp.onrender.com`
   - Authorised redirect URIs: `https://iiywhafsndhnjlboosre.supabase.co/auth/v1/callback`
   - Create, then copy the **Client ID** and **Client secret**. Don't paste the secret into chats or the site; it goes only into Supabase.

**B. Supabase**
1. **Authentication → Sign In / Providers → Google** → enable.
2. Paste the Client ID and Client secret → Save.
3. Check **Authentication → URL Configuration** has the Render address as Site URL and in Redirect URLs (step 4).

**C. Test**: open the site in a private window → Sign in → Continue with Google. You should come back signed in, with your name top right.

Don't want Google sign-in? Set `googleLogin: false` in `js/config.js` and the button disappears.

## 7. Payments: your UPI QR code and admin access (India)

Modules 1 and 2 of every subject, and the first 25 subject-test questions, are free and open without signing in (guests see one short line that their progress is kept in this browser; creating an account later adds it to the account). Students are asked to sign in only on the Unlock page, when they buy. A whole subject costs ₹199 with UPI (change both in `js/config.js`: `freeModulesPerSubject`, `subjectPriceInr`). Card payments in US dollars for students everywhere are step 11; they unlock automatically.

**Add your QR code**
1. Save your UPI QR image as `assets/upi-qr.png` in this folder.
2. In `js/config.js` fill in:
   ```js
   upi: { id: "yourname@okhdfcbank", payeeName: "Your name", qrImage: "assets/upi-qr.png" }
   ```
   Best: in your UPI app, make a QR **with the amount set to ₹399** and save it as `assets/upi-qr-399.png`, with `qrAmountInr: 399` in `js/config.js` (done 24 Nov 2026; this signed QR is what students see). If you change `subjectPriceInr` without a new QR, the page automatically draws its own QR with the new amount instead (made in the student's browser by `js/vendor/qrcode-generator-1.4.4.js`, no outside service). On phones, an "Open my UPI app" button also fills in the amount. The price is now ₹199, so until a ₹199 QR is saved as `assets/upi-qr-199.png` (and `qrImage`/`qrAmountInr` updated), students see the self-drawn ₹199 QR.
   Some UPI apps still let the payer edit the amount, so when approving, check the payment in your bank app is exactly ₹199.

**Make yourself the admin** (once, after you have created your own account on the site)
In Supabase **SQL Editor** run, with your own email:
```sql
insert into public.admins (user_id) select id from auth.users where email = 'you@example.com';
```
Sign out and in again: an **Admin** link appears next to your name (payments to approve, and visitor numbers).

**Daily routine**
1. A student pays ₹199 to your QR and types the 12-digit UPI transaction ID (UTR) on the "Unlock subject" page. It shows up under **Payments → Pending** with their email.
2. Check your bank or UPI app for a ₹199 payment with that transaction ID.
3. Press **Approve**: the subject unlocks for that student at once. If nothing matches, press **Reject** and add a reason. **Revoke** undoes an approval.

The database enforces the rules: students can only create *pending* requests for themselves, a transaction ID can only be used once, and only accounts in the `admins` table can approve.

> **Limit to know:** the lesson files are plain website files. Locking stops normal students, but someone who reads the site's source code could open locked lessons. Modules 1 and 2 are free anyway; before paid modules (3+) go live, they will be loaded from the database so only buyers can fetch them.

## 8. Check it works

1. Open the Render address, press **Sign in → Create a free account**, and confirm the email.
2. Take a lesson quiz, then open **My progress** (click your name, top right).
3. Open a locked module: you land on the ₹199 page. Submit a test transaction ID, approve it from **Admin** with your admin account, and check the subject unlocks. Reject the test afterwards.
4. In Supabase **Table Editor → progress** you should see your row.
5. Sign in from another device or browser: the same progress appears.

## 9. Load the paid modules (each time a new one is ready)

Paid modules (3 onward) are not public files. Each one comes as an SQL file, e.g. `fsa-m03.sql`, which Claude attaches in the project thread (the files are kept out of the public GitHub repo on purpose). The paid part of each subject test (questions 11 onward) comes the same way, e.g. `fsa-test.sql` (stored as module 99); its first 10 questions are a public file and need no SQL.

1. In Supabase open **SQL Editor → New query**.
2. Paste the whole SQL file and press **Run**. It adds or updates that module in the `module_content` table; running it twice is safe.
3. Check: signed in with your admin account, open the module on the site. It should load. A student without a purchase sees the lock and the ₹399 page.

## 10. Visitor counter (once)

Counts everyone who opens the site, including guests who never sign in. No cookies, no consent banner needed, free.

1. In Supabase open **SQL Editor → New query**, paste everything from `supabase/visitor-stats.sql`, and press **Run**. Running it again later is safe.
2. Sign in on the site with your admin account and click **Admin** (top right) → **Visitors**.

You see visitors and pages opened for today, the last 7 and 30 days and all time, how many were guests (no account), new sign-ups, a day-by-day table for the last 14 days, and the most opened pages. Your own visits as admin are not counted, and bots are skipped. A "visitor" is one device and browser on one day: the database keeps a one-way daily fingerprint (IP + browser + date + a secret), never the IP itself, so nobody can be followed from one day to the next.

## 11. Card payments in US dollars (Polar)

Students anywhere can pay by card, Apple Pay or Google Pay in **US dollars**. **Polar** (polar.sh) is the *merchant of record*: it sells to the student in its own name, charges and pays EU VAT and other sales taxes, and pays the rest out to your Dutch bank account. You don't register for VAT abroad. UPI in rupees stays on the page as "Paying from India?".

Why Polar: Lemon Squeezy closed to new sellers on 16 Nov 2026 (it shuts down 31 March 2027); Stripe Managed Payments needs an eligibility review first. Polar's fee: 5% + $0.50 per sale, plus 1.5% for cards from outside the US, plus small payout fees (check polar.sh/docs/fees). That is why the card price is in dollars and higher than ₹199.

How it works: **Pay $9 by card** → the `polar-checkout` function (in Supabase) checks who is signed in and opens Polar's payment page with their account id and the subject attached → after payment Polar calls the `polar-webhook` function → it marks the purchase **paid** in the database and the subject unlocks within seconds, with no approval from you. A full refund in Polar locks the subject again. Both functions are in `supabase/functions/`.

Allow about 30 minutes. Do it first in Polar's **sandbox** (test cards, no real money), then repeat steps B–E in the live account.

**A. Database (once)**
Supabase → **SQL Editor → New query** → paste all of `supabase/schema.sql` → **Run**. This adds the `currency` and `amount_cents` columns and the two functions the webhook uses. Safe to run again.

**B. Polar account and product**
1. Sign up at **polar.sh** (sandbox for testing: **sandbox.polar.sh**, a separate account). Create an organization, e.g. `FinPrepCamp`.
2. **Products → New product**: name `FinPrepCamp course: one subject` (Polar flags names with "unlock" or "study notes" as cheating tools, so avoid those words), description "Unlocks one subject of FinPrepCamp's CFA Level I study notes", pricing **one-time**, **fixed price $9** (or the price you choose), currency **USD**. Don't add files or benefits (the site does the unlocking). Save, then copy the **product ID** (⋯ menu → Copy ID; it looks like `3f1c…-…`).
   One product serves every subject; the subject travels with the checkout.
3. **Settings → Developers → New token**: name `Supabase checkout`, scope **checkouts:write**, an expiry you are comfortable with (renew it before it runs out). Copy the token (`polar_oat_…`). Don't paste it into chats or the site.
4. Live account only: finish **Settings → Payouts** (Stripe Connect Express, as an individual in the Netherlands, with your IBAN) and the identity check Polar asks for. Polar reviews new organizations before the first payouts.

**C. Supabase functions**
1. Supabase → **Edge Functions → Deploy a new function → Via Editor**. Name it exactly `polar-checkout`, replace the sample code with all of `supabase/functions/polar-checkout/index.ts`, and **Deploy**.
2. Do the same for `polar-webhook` with `supabase/functions/polar-webhook/index.ts`.
3. For **each** function open its **Details / Settings** and turn **Verify JWT with legacy secret** (or "Enforce JWT verification") **OFF**, then save. Both check the caller themselves (the student's sign-in, and Polar's signature).
   With the Supabase CLI instead: `supabase functions deploy polar-checkout` and `supabase functions deploy polar-webhook`; `supabase/config.toml` already turns the JWT check off.
4. Copy the webhook address shown for `polar-webhook`: `https://iiywhafsndhnjlboosre.supabase.co/functions/v1/polar-webhook`.

**D. Polar webhook**
Polar → **Settings → Webhooks → Add endpoint**: URL = the address from C4, format **Raw**, API version **2026-10**, events **order.paid** and **order.refunded**. Save and copy its **secret** (`whsec_…`).

**E. Secrets**
Supabase → **Edge Functions → Secrets** (Manage secrets), add:

| Name | Value |
|---|---|
| `POLAR_ACCESS_TOKEN` | the `polar_oat_…` token from B3 |
| `POLAR_PRODUCT_ID` | the product ID from B2 |
| `POLAR_WEBHOOK_SECRET` | the `whsec_…` secret from D |
| `POLAR_SERVER` | `sandbox` while testing, `production` when live |
| `SITE_URL` | `https://finprepcamp.onrender.com` |

Nothing goes into Render: the site is static, and these secrets must stay out of the site's files. (`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided to the functions by Supabase.)

**F. Switch it on**
In `public/js/config.js` set `cardPayments: { enabled: true, priceUsd: 9 }` (priceUsd = the Polar product's price; it is only what the site shows) and push, or ask Claude to. The Unlock page then shows **Pay $9 by card** first, with UPI folded under "Paying from India?".

**G. Test (sandbox)**
1. Sign in on the site with a test account (not admin), open a locked subject → **Pay $9 by card**.
2. On Polar's page pay with the test card `4242 4242 4242 4242`, any future date, any CVC.
3. You come back to the Unlock page ("Payment received… unlocking") and within a few seconds the subject opens.
4. Admin → **Payments → All** shows the row as Unlocked, "Card · …", $9.00.
5. If it stays locked: Polar → Webhooks → the endpoint's **deliveries** shows the reply; Supabase → Edge Functions → `polar-webhook` → **Logs** shows why ("Bad signature" = wrong `POLAR_WEBHOOK_SECRET`; "Ignored" = wrong `POLAR_PRODUCT_ID`).
6. Then switch to live: repeat B–E in the live Polar account and set `POLAR_SERVER` to `production`.

**Status (27 Nov 2026):** sandbox set up. Schema run, both functions deployed with JWT check off, Polar sandbox product `FinPrepCamp course: one subject` ($9, id `bf989c3c-d77a-4acd-a0e7-cc735f952d9e`) and webhook "Supabase unlock" created, Supabase secrets `POLAR_PRODUCT_ID`, `POLAR_SERVER=sandbox`, `SITE_URL` added. `POLAR_ACCESS_TOKEN` and `POLAR_WEBHOOK_SECRET` added (the token must come from the sandbox account; a live token gives "invalid_token"). End-to-end sandbox test passed: a test-card payment unlocked Portfolio Management on Sarthak's account within seconds (purchase row `polar:<order id>`, status paid). Still to do: the live Polar account (B–E with `POLAR_SERVER=production`), then `cardPayments.enabled: true` and merge.

**Good to know**
- If a student already owns a subject (e.g. approved UPI payment) and still pays by card, they keep access and the row's note says "Also paid by card … refund it in Polar". A card payment replaces a UPI request that was still pending.
- Refunds are made in Polar (Orders → order → Refund). A full refund locks the subject again automatically.
- Polar's name appears on the student's card statement and receipt; Polar sends the receipt and handles invoices and VAT.

---

## Costs

| Service | Free plan | When you might pay |
|---|---|---|
| Render static site | Free | Not needed for a static site |
| Supabase | Free: plenty of users for a study site, small database | The free project **pauses after about a week without visits** (restore with one click in the dashboard). Pro plan, about $25/month, never pauses and adds daily backups. |
| Email service (SMTP) | Free tiers usually cover a few thousand emails a month | Only at large volume |
| Google sign-in | Free | – |
| Polar (card payments) | No monthly fee | 5% + $0.50 per sale (+1.5% for non-US cards) and small payout fees; Polar also collects the VAT/sales tax from the buyer |

Check each service's pricing page for current numbers.

## How progress is stored

- Each quiz result is one row in `progress`: student id, quiz key (e.g. `fsa/1/l3`, `fsa/1/module-quiz`), best score, last score, total questions, attempts, last updated.
- A student who takes quizzes before signing up keeps that progress: it is added to their account the first time they sign in on that browser.
- Students can only read and write their own rows (Row Level Security in `supabase/schema.sql`).
