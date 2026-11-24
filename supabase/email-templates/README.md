# Branded sign-in emails

Four HTML emails in the site's style (blue "L1" mark, white card, one clear button). They use Supabase's template variables, so links and names are filled in automatically.

| File | Supabase template | Subject to use |
|---|---|---|
| `confirm-signup.html` | Confirm signup | Confirm your email for CFA Level I Prep |
| `reset-password.html` | Reset Password | Reset your CFA Level I Prep password |
| `magic-link.html` | Magic Link | Your CFA Level I Prep sign-in link |
| `change-email.html` | Change Email Address | Confirm your new email for CFA Level I Prep |

## Paste them in (about 5 minutes)

First set up custom SMTP (SETUP.md step 5): until then Supabase locks the templates and shows "Set up custom SMTP to edit templates".

1. Supabase → **Authentication → Emails** (older dashboards: **Email Templates**).
2. Pick a template (e.g. **Confirm signup**).
3. Replace the **Subject** with the one from the table.
4. In **Message body** (Source / HTML), delete everything and paste the whole file's contents.
5. **Save**. Repeat for the other three.

The emails say links expire in 1 hour, which matches Supabase's default (**Authentication → Providers → Email → Email OTP Expiration** = 3600 s). If you change that setting, change the wording too.

The greeting uses the name the student typed at sign-up (`{{ .Data.full_name }}`) and falls back to just "Hi," when there is none.

## Sender name and address

The template only changes the *content*. The sender stays **Supabase Auth &lt;noreply@mail.app.supabase.io&gt;** and is limited to a few emails per hour until you connect your own email service (SMTP), which also unlocks template editing. See SETUP.md step 5.
