/*
 * Site settings. Fill these in from Supabase: Project Settings → API.
 * The anon (public) key is safe to put here: the database rules in
 * supabase/schema.sql make sure each student can only read and write their own rows.
 * Leave both empty to run the site without sign-in (progress stays in the browser).
 */
window.CFA_CONFIG = {
  // Brand shown on the site. Never put "CFA" in the brand, product name or domain (CFA Institute trademark rules).
  brandName: "FinPrepCamp",

  supabaseUrl: "https://iiywhafsndhnjlboosre.supabase.co",        // e.g. "https://abcdefghijkl.supabase.co"
  supabaseAnonKey: "sb_publishable_PZ6jhcCnrp3B_j6KbEvGcg_W82UMP6W",    // the "anon public" key
  googleLogin: true,      // show "Continue with Google" (turn on the Google provider in Supabase first)

  // Contact page (#/contact): the form opens the visitor's email app addressed to this inbox. It is shown on the page.
  contactEmail: "rk.sarthak01@gmail.com",

  // Access and pricing
  freeModulesPerSubject: 2,   // modules 1..N of every subject are free and open without an account (an account is needed only to buy)
  subjectPriceInr: 199,       // price to unlock one whole subject (each subject is bought separately)
  testFreeQuestions: 25,      // default number of free questions in a subject test (a test file can set its own freeCount)

  // Card payments in US dollars through Polar (merchant of record: Polar charges the buyer, handles VAT
  // and sales tax, and pays out to you). Needs the Supabase Edge Functions in supabase/functions/ (SETUP.md step 11).
  // priceUsd is only the price shown on the site: the real price is the one set on the Polar product, so keep them equal.
  cardPayments: {
    enabled: false,     // set to true once SETUP.md step 11 is done
    priceUsd: 9
  },

  // UPI payment details shown on the "Buy subject" page (with card payments on, UPI is offered as "Paying from India?").
  // Leave id empty to hide UPI.
  upi: {
    id: "9415115418@superyes", // your UPI ID, e.g. "yourname@okhdfcbank"
    payeeName: "RAVINDRA KUMAR AGRAWAL", // name shown to students
    // Your signed QR from the UPI app, with the amount built in. The saved one is for ₹399, so while the price is ₹199
    // the site draws its own QR with ₹199 filled in. To use a signed ₹199 QR instead, save it as assets/upi-qr-199.png
    // and set qrImage to that file and qrAmountInr to 199.
    qrImage: "assets/upi-qr-399.png",
    qrAmountInr: 399          // amount inside that QR. If it differs from subjectPriceInr, the site draws its own QR with the right amount instead
  }
};
