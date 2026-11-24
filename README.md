# CFA Level I Prep – website

A static website (plain HTML, CSS and JavaScript). No build step and no server code.
Student sign-in, saved progress and subject purchases (₹399 via UPI QR, approved by an admin) use Supabase; see **SETUP.md** to switch them on.

Access: modules 1–2 of every subject are free after sign-in; other modules are locked until the student's purchase of that subject is approved.

## Structure

```
index.html                     page shell, loads the scripts below
css/style.css                  all styling (light and dark mode)
js/config.js                   Supabase project URL and public key (empty = no sign-in, browser-only progress)
js/vendor/supabase-2.118.0.js  Supabase client library, bundled so the site needs no CDN
js/account.js                  sign-in, sign-up, Google, password reset, progress sync
js/app.js                      router, pages (sign-in, My progress, Unlock subject, admin Payments), locks, quiz engine
assets/upi-qr.png              your UPI QR image (add it; see SETUP.md step 7)
supabase/schema.sql            tables (progress, purchases, admins) and security rules (run in Supabase)
SETUP.md                       step-by-step: GitHub, Supabase, Render, email, Google
js/content/catalog.js          list of subjects and their modules
js/content/fsa/m01-intro-fsa.js  FSA Module 1: lessons, diagrams, quizzes, module quiz
```

Subject → Module → Lessons (each with a quiz) → Module quiz.

## Add a new module

1. Copy `js/content/fsa/m01-intro-fsa.js` to a new file, e.g. `js/content/fsa/m02-income-statements.js`.
2. Change `num`, `title`, `los`, `lessons` and `moduleQuiz`.
3. Add a `<script>` tag for the file in `index.html`, after `catalog.js`.
The module card switches from "Coming soon" to active automatically.

For a new subject's modules, add them to that subject's `modules` list in `catalog.js` first.

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy on Render

Full steps, including accounts, are in **SETUP.md**. Short version: New → Static Site → pick the repository, no build command, publish directory `public`.
`render.yaml` in this folder does the same as a Blueprint. Netlify, GitHub Pages, Cloudflare Pages and Vercel also work with the same settings (no build, publish this folder).
