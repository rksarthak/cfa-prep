# FinPrepCamp – study notes for CFA® Program Level I (website)

A static website (plain HTML, CSS and JavaScript). No build step and no server code.
Student sign-in, saved progress and subject purchases (₹399 via UPI QR, approved by an admin) use Supabase; see **SETUP.md** to switch them on.

Access: modules 1–2 of every subject are free and open without an account (guests are told their progress is not saved to an account); other modules are locked until the student's purchase of that subject is approved.

## Structure

```
public/                         the site Render serves (publish directory)
  index.html                    page shell, loads the scripts below
  css/style.css                 all styling (light and dark mode)
  js/config.js                  brand, Supabase URL and public key, price, UPI details
  js/vendor/supabase-2.118.0.js Supabase client library, bundled so the site needs no CDN
  js/account.js                 sign-in, sign-up, Google, password reset, progress sync, purchases
  js/app.js                     router, pages, locks, quiz engine
  js/content/catalog.js         subjects and their module titles
  js/content/paid-meta.js       generated outline (titles, question counts) of paid modules; no lesson content
  js/content/fsa/m01-…, m02-…   free modules (1–2), served as normal files
  assets/upi-qr.png             your UPI QR image (SETUP.md step 7)
supabase/schema.sql             tables and security rules (run in Supabase)
supabase/email-templates/       branded emails to paste into Supabase
tools/build-content.js          turns paid module sources into SQL + paid-meta.js
tools/build-preview.js          makes a private review copy with every module unlocked
content-paid/                   paid module sources (NOT in the public repo; kept in the project files)
supabase/paid-content/          generated SQL that loads paid modules (NOT in the public repo)
```

Subject → Module → Lessons (each with a quiz) → Module quiz.

## Add a new module

**Free module (1–2 of a subject):** put the file in `public/js/content/<subject>/` and add a `<script>` tag for it in `public/index.html`, after `paid-meta.js`.

**Subject test:** write all questions in `content-paid/<subject>/test.js` with `CFA.registerTest(...)` (`freeCount: 10`, each question has a `module` number). `node tools/build-content.js` writes the free part to `public/js/content/<subject>/test-free.js` (add its `<script>` tag to `index.html`) and the rest to `supabase/paid-content/<subject>-test.sql` (module 99 in `module_content`). The page is `#/s/<subject>/test`.

**Paid module (3 onward):** put the file in `content-paid/<subject>/`, then run `node tools/build-content.js`. This writes `supabase/paid-content/<subject>-mNN.sql` and refreshes `public/js/content/paid-meta.js`. Run the SQL file in Supabase (SETUP.md step 9) and push `paid-meta.js`. Only buyers and admins can read the module, because it is fetched from the `module_content` table under row-level security.

All content must be original (see the teaching instructions, sections 10–11).

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy on Render

Full steps, including accounts, are in **SETUP.md**. Short version: New → Static Site → pick the repository, no build command, publish directory `public`.
`render.yaml` in this folder does the same as a Blueprint. Netlify, GitHub Pages, Cloudflare Pages and Vercel also work with the same settings (no build, publish this folder).
