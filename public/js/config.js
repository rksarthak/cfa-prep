/*
 * Site settings. Fill these in from Supabase: Project Settings → API.
 * The anon (public) key is safe to put here: the database rules in
 * supabase/schema.sql make sure each student can only read and write their own rows.
 * Leave both empty to run the site without sign-in (progress stays in the browser).
 */
window.CFA_CONFIG = {
  supabaseUrl: "",        // e.g. "https://abcdefghijkl.supabase.co"
  supabaseAnonKey: "",    // the "anon public" key
  googleLogin: true,      // show "Continue with Google" (turn on the Google provider in Supabase first)

  // Access and pricing
  freeModulesPerSubject: 2,   // modules 1..N of every subject are free (sign-in still required)
  subjectPriceInr: 399,       // price to unlock one whole subject

  // UPI payment details shown on the "Buy subject" page
  upi: {
    id: "",                   // your UPI ID, e.g. "yourname@okhdfcbank"
    payeeName: "",            // name shown to students
    qrImage: ""               // path to your QR image, e.g. "assets/upi-qr.png"
  }
};
