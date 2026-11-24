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
4. Create. Render gives you an address like `https://cfa-level1-prep.onrender.com`. Every push to GitHub redeploys automatically.

## 4. Tell Supabase where the site lives

In Supabase: **Authentication → URL Configuration**
- **Site URL:** your Render address, e.g. `https://cfa-level1-prep.onrender.com`
- **Redirect URLs:** add the same address. Add `http://localhost:8000` too if you want to test on your own computer.

Without this, confirmation emails, password-reset links and Google sign-in send students to the wrong place.

## 5. Email sign-in

On by default (**Authentication → Providers → Email**). Keep **Confirm email** on so students verify their address.

Supabase's built-in email sender is only for testing and sends just a few emails per hour. Before real students sign up, connect your own email service under **Authentication → Emails → SMTP settings** (for example Resend, Brevo or Amazon SES; most have a free tier). You can also edit the email wording there.

## 6. Google sign-in (optional)

1. In Google Cloud Console create a project, set up the **OAuth consent screen** (app name, support email), then **Credentials → Create credentials → OAuth client ID → Web application**.
2. Under **Authorized redirect URIs** add: `https://<your-project-ref>.supabase.co/auth/v1/callback` (Supabase shows the exact address on its Google provider page).
3. Copy the **Client ID** and **Client secret** into Supabase **Authentication → Providers → Google** and enable it.

Don't want Google sign-in? Set `googleLogin: false` in `js/config.js` and the button disappears.

## 7. Payments: your UPI QR code and admin access

Modules 1 and 2 of every subject are free (sign-in required). A whole subject costs ₹399 (change both in `js/config.js`: `freeModulesPerSubject`, `subjectPriceInr`).

**Add your QR code**
1. Save your UPI QR image as `assets/upi-qr.png` in this folder.
2. In `js/config.js` fill in:
   ```js
   upi: { id: "yourname@okhdfcbank", payeeName: "Your name", qrImage: "assets/upi-qr.png" }
   ```
   On phones, students also get an "Open my UPI app" button that fills in the amount.

**Make yourself the admin** (once, after you have created your own account on the site)
In Supabase **SQL Editor** run, with your own email:
```sql
insert into public.admins (user_id) select id from auth.users where email = 'you@example.com';
```
Sign out and in again: a **Payments** link appears next to your name.

**Daily routine**
1. A student pays ₹399 to your QR and types the 12-digit UPI transaction ID (UTR) on the "Unlock subject" page. It shows up under **Payments → Pending** with their email.
2. Check your bank or UPI app for a ₹399 payment with that transaction ID.
3. Press **Approve**: the subject unlocks for that student at once. If nothing matches, press **Reject** and add a reason. **Revoke** undoes an approval.

The database enforces the rules: students can only create *pending* requests for themselves, a transaction ID can only be used once, and only accounts in the `admins` table can approve.

> **Limit to know:** the lesson files are plain website files. Locking stops normal students, but someone who reads the site's source code could open locked lessons. Modules 1 and 2 are free anyway; before paid modules (3+) go live, they will be loaded from the database so only buyers can fetch them.

## 8. Check it works

1. Open the Render address, press **Sign in → Create a free account**, and confirm the email.
2. Take a lesson quiz, then open **My progress** (click your name, top right).
3. Open a locked module: you land on the ₹399 page. Submit a test transaction ID, approve it from **Payments** with your admin account, and check the subject unlocks. Reject the test afterwards.
4. In Supabase **Table Editor → progress** you should see your row.
5. Sign in from another device or browser: the same progress appears.

---

## Costs

| Service | Free plan | When you might pay |
|---|---|---|
| Render static site | Free | Not needed for a static site |
| Supabase | Free: plenty of users for a study site, small database | The free project **pauses after about a week without visits** (restore with one click in the dashboard). Pro plan, about $25/month, never pauses and adds daily backups. |
| Email service (SMTP) | Free tiers usually cover a few thousand emails a month | Only at large volume |
| Google sign-in | Free | – |

Check each service's pricing page for current numbers.

## How progress is stored

- Each quiz result is one row in `progress`: student id, quiz key (e.g. `fsa/1/l3`, `fsa/1/module-quiz`), best score, last score, total questions, attempts, last updated.
- A student who takes quizzes before signing up keeps that progress: it is added to their account the first time they sign in on that browser.
- Students can only read and write their own rows (Row Level Security in `supabase/schema.sql`).
