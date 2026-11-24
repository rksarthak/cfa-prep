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

  // Access and pricing
  freeModulesPerSubject: 2,   // modules 1..N of every subject are free (sign-in still required)
  subjectPriceInr: 399,       // price to unlock one whole subject

  // UPI payment details shown on the "Buy subject" page
  upi: {
    id: "9415115418@superyes", // your UPI ID, e.g. "yourname@okhdfcbank"
    payeeName: "RAVINDRA KUMAR AGRAWAL", // name shown to students
    qrImage: "assets/upi-qr.png" // path to your QR image, e.g. "assets/upi-qr.png"
  }
};
