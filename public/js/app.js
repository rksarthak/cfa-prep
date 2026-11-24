/* FinPrepCamp (study notes for CFA® Program Level I) – single-page app with hash routing. No build step, no dependencies. */
(function () {
  "use strict";

  var app = document.getElementById("app");
  var crumbsEl = document.getElementById("crumbs");
  var LETTERS = ["A", "B", "C", "D"];

  /* ---------- Progress (see account.js: browser cache, synced to the student's account when signed in) ---------- */
  function saveResult(key, score, total) { Progress.save(key, score, total); }
  function result(key) { return Progress.get(key); }

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function subjectById(id) {
    for (var i = 0; i < CFA.subjects.length; i++) if (CFA.subjects[i].id === id) return CFA.subjects[i];
    return null;
  }
  function moduleContent(sid, num) { return CFA.content[sid + "/" + num] || null; }
  // Outline: the full module if loaded, otherwise the public outline of a paid module (titles and counts only).
  function outline(sid, num) {
    var c = moduleContent(sid, num);
    if (c) return c;
    var m = CFA.paidMeta && CFA.paidMeta[sid + "/" + num];
    if (!m) return null;
    return {
      num: num, title: m.title, outlineOnly: true,
      lessons: m.lessons.map(function (l) { return { id: l.id, title: l.title, summary: l.summary, quiz: new Array(l.questions) }; }),
      moduleQuiz: new Array(m.moduleQuiz)
    };
  }
  var loading = {};
  // Loads a paid module from the database (buyers only), then re-draws the page. Returns true while loading.
  function needsLoad(sid, num) {
    if (moduleContent(sid, num) || !outline(sid, num)) return false;
    var key = sid + "/" + num;
    render('<p class="muted">Loading module…</p>');
    if (!loading[key] && Account.enabled && Account.user()) {
      loading[key] = true;
      Account.fetchModule(sid, num).then(function (c) {
        loading[key] = false;
        if (c) { CFA.registerModule(sid, c); route(); }
        else render('<h1>Module not available yet</h1><p class="muted">This module has not been uploaded yet, or your purchase is still being checked. Please try again later.</p>');
      }).catch(function (e) {
        loading[key] = false;
        render('<h1>Could not load this module</h1><p class="muted">' + esc(e.message || String(e)) + '</p><p><a href="javascript:location.reload()">Try again</a></p>');
      });
    }
    return true;
  }
  function liveCount(subject) {
    return subject.modules.filter(function (m) { return outline(subject.id, m.num); }).length;
  }
  function setCrumbs(parts) {
    crumbsEl.innerHTML = parts.map(function (p, i) {
      var last = i === parts.length - 1;
      return (i ? '<span class="sep">/</span>' : "") +
        (p.href && !last ? '<a href="' + p.href + '">' + esc(p.label) + "</a>" : "<span>" + esc(p.label) + "</span>");
    }).join("");
  }
  function render(html, title) {
    app.innerHTML = (typeof guestNote === "string" && guestNote ? guestNote : "") + html;
    guestNote = "";
    document.title = (title ? title + " · " : "") + ((window.CFA_CONFIG && CFA_CONFIG.brandName) || "FinPrepCamp");
    window.scrollTo(0, 0);
  }
  function moduleProgress(sid, mod) {
    var done = mod.lessons.filter(function (l) { return result(sid + "/" + mod.num + "/" + l.id); }).length;
    return { done: done, total: mod.lessons.length };
  }

  /* ---------- Views ---------- */
  function viewHome() {
    setCrumbs([{ label: "Subjects" }]);
    var cards = CFA.subjects.map(function (s) {
      var live = liveCount(s);
      var active = live > 0;
      var meta = active
        ? live + " of " + s.modules.length + " modules ready · first " + (window.CFA_CONFIG && CFA_CONFIG.freeModulesPerSubject || 2) + " free"
        : (s.modules.length ? s.modules.length + " modules · coming soon" : "Coming soon");
      var inner =
        '<span class="icon">' + s.icon + "</span>" +
        "<h3>" + esc(s.name) + "</h3>" +
        '<span class="small muted">' + esc(s.blurb) + "</span>" +
        '<span class="meta">' + (active ? '<span class="badge">Open</span> ' : '<span class="badge soon">Soon</span> ') + esc(meta) + "</span>";
      return active
        ? '<a class="subject" href="#/s/' + s.id + '">' + inner + "</a>"
        : '<div class="subject locked" aria-disabled="true">' + inner + "</div>";
    }).join("");
    render(
      '<section class="hero"><h1>CFA<sup>®</sup> Program Level I, one idea at a time</h1>' +
      "<p>Each subject follows the learning modules of the CFA Program curriculum, explained in our own words with original examples and questions. These notes complement the curriculum issued by CFA Institute; they do not replace it. Each module is a short series of lessons: the idea in plain words, a small worked example, a diagram, the exam traps, then a quiz. Every module ends with a mixed module quiz.</p></section>" +
      '<div class="grid">' + cards + "</div>"
    );
  }

  /* ---------- Access: free modules, purchases, sign-in ---------- */
  var CONF = window.CFA_CONFIG || {};
  var FREE = CONF.freeModulesPerSubject || 2;
  var PRICE = CONF.subjectPriceInr || 399;
  var gated = false;   // true while a sign-in gate or loading screen is shown
  var guestNote = ""; // notice shown above free content to visitors who aren't signed in

  function owns(sid) { return !!CONF.previewAllContent || (Account.enabled && Account.hasSubject(sid)); }
  function isFree(num) { return num <= FREE; }
  function canAccess(sid, num) { return isFree(num) || owns(sid); }
  function lockTip(s) { return "Buy " + s.name + " for ₹" + PRICE + " to unlock all its modules"; }

  // Returns true when the page was replaced by a redirect, loading screen or sign-in gate.
  function guard(sid, num, what) {
    gated = false;
    guestNote = "";
    var s = subjectById(sid);
    if (!canAccess(sid, num)) {
      if (Account.enabled && !Account.isReady()) { gated = true; render('<p class="muted">Loading…</p>'); return true; }
      location.replace("#/buy/" + sid);
      return true;
    }
    if (!Account.enabled) return false;              // preview copy without accounts
    if (!Account.isReady()) { gated = true; render('<p class="muted">Loading…</p>'); return true; }
    if (!Account.user()) {
      // Free content is open without an account; tell guests their progress isn't saved to one.
      guestNote = '<div class="callout trap guest-note"><span class="label">Trying it without an account</span>You are not signed in, so your progress will not be saved to an account. ' +
        'It stays only in this browser and can be lost. <a href="#/signup">Create a free account</a> or <a href="#/login">sign in</a> to keep your quiz scores.</div>';
    }
    return false;
  }

  function subjectBanner(s) {
    var total = s.modules.length;
    if (owns(s.id)) return '<div class="callout key"><span class="label">Unlocked</span>You own ' + esc(s.name) + ". Every module is open to you.</div>";
    var pend = Account.enabled && Account.purchaseFor(s.id);
    if (pend && pend.status === "pending") return '<div class="callout trap"><span class="label">Payment being checked</span>We received your payment reference ' + esc(pend.reference || "") + ". Modules unlock as soon as it is confirmed.</div>";
    return '<div class="buy-banner"><div><b>Modules 1–' + FREE + " are free.</b> Unlock all " + total + " modules of " + esc(s.name) + " for <b>₹" + PRICE + "</b>.</div>" +
      '<a class="btn" href="#/buy/' + s.id + '">Unlock subject</a></div>';
  }

  function viewSubject(sid) {
    var s = subjectById(sid);
    if (!s) return viewNotFound();
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: s.name }]);
    var rows = s.modules.map(function (m) {
      var mod = outline(sid, m.num);
      var open = canAccess(sid, m.num);
      var tag = isFree(m.num) ? '<span class="badge">Free</span>' : (open ? "" : '<span class="lock" tabindex="0" role="img" aria-label="Locked" data-tip="' + esc(lockTip(s)) + '">🔒</span>');
      if (!open) {
        return '<a class="row locked-row" href="#/buy/' + sid + '" title="' + esc(lockTip(s)) + '"><span class="num">' + m.num +
          '</span><span class="body"><span class="title">' + esc(m.title) + '</span><span class="sub">' + (mod ? mod.lessons.length + " lessons + module quiz" : "Coming soon") +
          '</span></span><span class="right">' + tag + "</span></a>";
      }
      if (!mod) {
        return '<div class="row locked"><span class="num">' + m.num + '</span><span class="body"><span class="title">' +
          esc(m.title) + '</span><span class="sub">Coming soon</span></span><span class="right">' + tag + "</span></div>";
      }
      var pr = moduleProgress(sid, mod);
      var mq = result(sid + "/" + mod.num + "/module-quiz");
      var complete = pr.done === pr.total && mq;
      return '<a class="row' + (complete ? " done" : "") + '" href="#/s/' + sid + "/m/" + m.num + '"><span class="num">' + m.num +
        '</span><span class="body"><span class="title">' + esc(m.title) + '</span><span class="sub">' +
        mod.lessons.length + " lessons + module quiz · " + pr.done + "/" + pr.total + " done</span></span>" +
        '<span class="right">' + tag + "</span></a>";
    }).join("");
    // Every subject ends with a full subject test (first 10 questions free). Shown as coming soon until it is built.
    rows += '<div class="row locked subject-test-row"><span class="num">✓</span><span class="body"><span class="title">' + esc(s.name) +
      ' subject test</span><span class="sub">Coming soon · a full test across every module, all new questions · first 10 questions free</span></span>' +
      '<span class="right"><span class="badge">10 free</span></span></div>';
    render(
      '<div class="lesson-head"><span class="kicker">Subject</span><h1>' + s.icon + " " + esc(s.name) + "</h1>" +
      '<p class="muted">' + esc(s.blurb) + "</p></div>" + subjectBanner(s) +
      '<div class="list">' + rows + "</div>", s.name
    );
  }

  function viewBuy(sid) {
    var s = subjectById(sid);
    if (!s) return viewNotFound();
    gated = false;
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: s.name, href: "#/s/" + sid }, { label: "Unlock" }]);
    var built = s.modules.filter(function (m) { return outline(sid, m.num); }).length;
    var upi = CONF.upi || {};
    var head = '<div class="buy-head"><span class="kicker">Unlock a subject</span><h1>' + s.icon + " " + esc(s.name) + "</h1>" +
      '<div class="price">₹' + PRICE + '<span> one-time</span></div>' +
      '<ul class="ticks"><li>All ' + s.modules.length + " learning modules of " + esc(s.name) + " (" + built + " ready now, the rest added as they are written)</li>" +
      "<li>Every lesson, diagram, worked example and quiz</li><li>End-of-module quizzes and your saved progress</li></ul></div>";
    var body = "";
    if (owns(sid)) {
      body = '<div class="callout key"><span class="label">Already unlocked</span>You own this subject. <a href="#/s/' + sid + '">Go to the modules</a></div>';
    } else if (Account.enabled && !Account.isReady()) {
      gated = true; body = '<p class="muted">Loading…</p>';
    } else if (Account.enabled && !Account.user()) {
      body = '<div class="pay-card"><h2>Step 1: Sign in</h2><p>Your purchase is linked to your account, so please sign in or create a free account first.</p>' +
        '<a class="btn" href="#/signup">Create a free account</a> <a class="btn ghost" href="#/login">Sign in</a></div>';
    } else {
      var pend = Account.enabled ? Account.purchaseFor(sid) : null;
      if (pend && pend.status === "pending") {
        body = '<div class="callout trap"><span class="label">Payment being checked</span>We have your UPI transaction ID <b>' + esc(pend.reference || "") +
          "</b>. The subject unlocks as soon as the payment is confirmed. You don't need to pay again.</div>";
      } else {
        // UPI link with the amount set: used for the QR code (scanning pre-fills the price) and the phone button.
        var upiLink = upi.id ? "upi://pay?pa=" + encodeURIComponent(upi.id) + "&pn=" + encodeURIComponent(upi.payeeName || CONF.brandName || "FinPrepCamp") +
          "&am=" + Number(PRICE).toFixed(2) + "&cu=INR&tn=" + encodeURIComponent(s.name) : "";
        var qr = "";
        // Prefer the payee's own signed QR when it carries the current price; otherwise draw one with the price set.
        if (upi.qrImage && Number(upi.qrAmountInr) === Number(PRICE)) {
          qr = '<img class="qr" src="' + esc(upi.qrImage) + '" alt="UPI QR code to pay ₹' + PRICE + '">';
        } else if (upiLink && typeof window.qrcode === "function") {
          try {
            var code = window.qrcode(0, "M"); code.addData(upiLink); code.make();
            qr = '<div class="qr qr-live" role="img" aria-label="UPI QR code to pay ₹' + PRICE + '">' + code.createSvgTag({ cellSize: 4, margin: 2, scalable: true }) + "</div>";
          } catch (e) { qr = ""; }
        }
        if (!qr) qr = '<div class="qr placeholder">QR code<br><span class="small">added soon</span></div>';
        body = (Account.enabled ? "" : '<div class="callout key"><span class="label">Preview</span>Payments switch on once accounts are connected (see SETUP.md).</div>') +
          '<div class="pay-card"><h2>Step 1: Pay ₹' + PRICE + ' with UPI</h2><div class="pay-row">' + qr +
          '<div><p>Scan the QR code with any UPI app (Google Pay, PhonePe, Paytm, BHIM). The amount, <b>₹' + PRICE + "</b>, fills in by itself; please don't change it.</p>" +
          (upi.id ? '<p class="small">UPI ID: <b>' + esc(upi.id) + "</b>" + (upi.payeeName ? " · " + esc(upi.payeeName) : "") + "</p>" +
            '<a class="btn ghost mobile-only" href="' + esc(upiLink) + '">Open my UPI app</a>' : "") +
          '<p class="small muted">Add your email in the payment note if your app allows it.</p></div></div></div>' +
          '<div class="pay-card"><h2>Step 2: Enter your UPI transaction ID</h2>' +
          '<p class="small muted">After paying, your app shows a 12-digit UPI transaction ID (also called UTR or reference number).</p>' +
          '<form id="payform" novalidate><label for="utr">UPI transaction ID</label><input id="utr" name="utr" inputmode="numeric" autocomplete="off" maxlength="12" placeholder="e.g. 412345678901">' +
          '<div class="form-msg" id="msg" role="status"></div><button class="btn wide" type="submit">Submit payment</button></form></div>';
      }
    }
    render(head + body, "Unlock " + s.name);
    var f = document.getElementById("payform");
    if (f) f.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("msg");
      var ref = f.utr.value.replace(/\s+/g, "");
      if (!/^\d{12}$/.test(ref)) { msg.className = "form-msg bad"; msg.textContent = "Enter the 12-digit UPI transaction ID from your payment app."; return; }
      if (!Account.enabled) { msg.className = "form-msg bad"; msg.textContent = "Payments aren't connected yet in this preview."; return; }
      var btn = f.querySelector("button"); btn.disabled = true;
      msg.className = "form-msg"; msg.textContent = "Sending…";
      Account.requestPurchase(sid, ref, PRICE).then(function () { viewBuy(sid); }).catch(function (err) {
        btn.disabled = false; msg.className = "form-msg bad";
        msg.textContent = /duplicate|unique/i.test(err.message || "") ? "This payment is already recorded. We'll confirm it shortly." : friendlyError(err);
      });
    });
  }

  function viewModule(sid, num) {
    var s = subjectById(sid);
    var mod = moduleContent(sid, num);
    if (!s) return viewNotFound();
    gated = false;
    if (!canAccess(sid, num)) { if (Account.enabled && !Account.isReady()) { gated = true; render('<p class="muted">Loading…</p>'); return; } location.replace("#/buy/" + sid); return; }
    if (!outline(sid, num)) return viewNotFound();
    if (needsLoad(sid, num)) return;
    mod = moduleContent(sid, num);
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: s.name, href: "#/s/" + sid }, { label: "Module " + num }]);
    var pr = moduleProgress(sid, mod);
    var base = "#/s/" + sid + "/m/" + num;
    var rows = mod.lessons.map(function (l, i) {
      var r = result(sid + "/" + num + "/" + l.id);
      return '<a class="row' + (r ? " done" : "") + '" href="' + base + "/l/" + (i + 1) + '"><span class="num">' + (r ? "✓" : i + 1) +
        '</span><span class="body"><span class="title">Lesson ' + (i + 1) + ": " + esc(l.title) + '</span><span class="sub">' +
        esc(l.summary) + '</span></span><span class="right">' + (r ? "Quiz best " + r.best + "/" + r.total : l.quiz.length + " questions") + "</span></a>";
    }).join("");
    var mq = result(sid + "/" + num + "/module-quiz");
    rows += '<a class="row quizrow' + (mq ? " done" : "") + '" href="' + base + '/quiz"><span class="num">' + (mq ? "✓" : "★") +
      '</span><span class="body"><span class="title">Module quiz</span><span class="sub">' + mod.moduleQuiz.length +
      " mixed exam-level questions across all lessons</span></span>" +
      '<span class="right">' + (mq ? "Best " + mq.best + "/" + mq.total : "Take it after the lessons") + "</span></a>";
    var pct = Math.round((pr.done / pr.total) * 100);
    render(
      '<div class="lesson-head"><span class="kicker">' + esc(s.name) + " · Module " + num + "</span><h1>" + esc(mod.title) + "</h1>" +
      "<p>" + mod.intro + "</p>" +
      '<div class="progress" aria-label="Lessons completed"><span style="width:' + pct + '%"></span></div>' +
      '<span class="small muted">' + pr.done + " of " + pr.total + " lesson quizzes done</span></div>" +
      '<div class="los"><b>What you will learn.</b> By the end of this module you should be able to:<ul>' +
      mod.los.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="list">' + rows + "</div>", mod.title
    );
  }

  function viewLesson(sid, num, idx) {
    var s = subjectById(sid);
    var mod = outline(sid, num);
    var lesson = mod && mod.lessons[idx - 1];
    if (!s || !lesson) return viewNotFound();
    if (guard(sid, num, "lesson")) return;
    if (needsLoad(sid, num)) return;
    mod = moduleContent(sid, num);
    lesson = mod.lessons[idx - 1];
    var base = "#/s/" + sid + "/m/" + num;
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: s.name, href: "#/s/" + sid }, { label: "Module " + num, href: base }, { label: "Lesson " + idx }]);

    var toc = lesson.sections.map(function (sec, i) {
      return '<a href="#sec-' + (i + 1) + '" data-anchor="sec-' + (i + 1) + '">' + (i + 1) + ". " + esc(sec.title) + "</a>";
    }).join("") + '<a href="#sec-traps" data-anchor="sec-traps">⚠ Exam traps</a><a href="#sec-quiz" data-anchor="sec-quiz">✎ Quiz</a>';

    var body = lesson.sections.map(function (sec, i) {
      return '<section class="section" id="sec-' + (i + 1) + '"><h2><span class="n">' + (i + 1) + ".</span>" + esc(sec.title) + "</h2>" + sec.html + "</section>";
    }).join("");
    body += '<section class="section" id="sec-traps"><h2><span class="n">' + (lesson.sections.length + 1) + ".</span>Exam traps</h2><ol class=\"traps\">" +
      lesson.traps.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ol></section>";

    var prev = idx > 1 ? { href: base + "/l/" + (idx - 1), label: "Lesson " + (idx - 1) + ": " + mod.lessons[idx - 2].title }
      : { href: base, label: "Module overview" };
    var next = idx < mod.lessons.length ? { href: base + "/l/" + (idx + 1), label: "Lesson " + (idx + 1) + ": " + mod.lessons[idx].title }
      : { href: base + "/quiz", label: "Module quiz" };

    render(
      '<div class="lesson-head"><span class="kicker">Module ' + num + " · Lesson " + idx + " of " + mod.lessons.length + "</span><h1>" + esc(lesson.title) + "</h1>" +
      '<div class="los"><b>Covers:</b> ' + lesson.los.map(function (i) { return esc(mod.los[i]); }).join("; ") + "</div>" +
      '<nav class="toc" aria-label="On this page">' + toc + "</nav></div>" +
      body +
      '<div id="sec-quiz"></div>' +
      '<nav class="pager"><a href="' + prev.href + '"><small>← Previous</small>' + esc(prev.label) + "</a>" +
      '<a class="next" href="' + next.href + '"><small>Next →</small>' + esc(next.label) + "</a></nav>",
      lesson.title
    );
    mountQuiz(document.getElementById("sec-quiz"), {
      title: "Lesson " + idx + " quiz",
      questions: lesson.quiz,
      key: sid + "/" + num + "/" + lesson.id,
      nextHref: next.href,
      nextLabel: next.label
    });
  }

  function viewModuleQuiz(sid, num) {
    var s = subjectById(sid);
    var mod = outline(sid, num);
    if (!s || !mod) return viewNotFound();
    if (guard(sid, num, "module quiz")) return;
    if (needsLoad(sid, num)) return;
    mod = moduleContent(sid, num);
    var base = "#/s/" + sid + "/m/" + num;
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: s.name, href: "#/s/" + sid }, { label: "Module " + num, href: base }, { label: "Module quiz" }]);
    render(
      '<div class="lesson-head"><span class="kicker">Module ' + num + " · End-of-module quiz</span><h1>" + esc(mod.title) + ": module quiz</h1>" +
      '<p class="muted">' + mod.moduleQuiz.length + " questions mixed across every lesson, at exam level. Each explanation links to the lesson to reread if you miss it.</p></div>" +
      '<div id="mq"></div>' +
      '<nav class="pager"><a href="' + base + '"><small>← Back</small>Module overview</a><a class="next" href="#/s/' + sid + '"><small>Next →</small>All ' + esc(s.name) + " modules</a></nav>",
      mod.title + " – module quiz"
    );
    mountQuiz(document.getElementById("mq"), {
      title: "Module quiz",
      questions: mod.moduleQuiz,
      key: sid + "/" + num + "/module-quiz",
      lessons: mod.lessons,
      lessonBase: base + "/l/"
    });
  }

  function viewNotFound() {
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: "Not found" }]);
    render('<h1>Page not found</h1><p><a href="#/">Back to subjects</a></p>', "Not found");
  }

  /* ---------- Accounts: top-bar widget, sign-in, reset, my progress ---------- */
  var accountEl = document.getElementById("account");
  var RETURN_KEY = "cfa-return-to";

  function drawAccountWidget() {
    if (!accountEl) return;
    var foot = document.getElementById("foot-note");
    var u = Account.enabled ? Account.user() : null;
    if (foot) foot.textContent = u ? "Your progress is saved to your account." : "Progress is saved in this browser" + (Account.enabled ? " until you sign in." : ".");
    if (u) {
      var name = Account.displayName();
      accountEl.innerHTML = (Account.isAdmin() ? '<a class="admin-link" href="#/admin">Payments</a>' : "") + '<a class="avatar-link" href="#/account" title="My progress"><span class="avatar">' +
        esc(name.charAt(0).toUpperCase()) + '</span><span class="avatar-name">' + esc(name) + "</span></a>";
    } else {
      accountEl.innerHTML = '<a class="btn small-btn" href="#/login">Sign in</a>';
    }
  }

  function friendlyError(err) {
    var m = (err && (err.message || err.error_description)) || String(err);
    if (/invalid login credentials/i.test(m)) return "That email and password don't match an account.";
    if (/email not confirmed/i.test(m)) return "Please confirm your email first: open the link we sent you.";
    if (/already registered|already been registered/i.test(m)) return "An account with this email already exists. Sign in instead.";
    if (/password should be at least/i.test(m)) return "Use a password of at least 8 characters.";
    if (/rate limit/i.test(m)) return "Too many attempts. Please wait a minute and try again.";
    return m;
  }

  function viewLogin(mode) {
    mode = mode || "signin";
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: mode === "signup" ? "Create account" : "Sign in" }]);
    if (Account.user()) { location.hash = "#/account"; return; }
    var off = !Account.enabled;
    var notice = off ? '<div class="callout key"><span class="label">Preview</span>Accounts switch on once the site is connected to its database (see SETUP.md). Until then, progress is saved in this browser.</div>' : "";
    var signup = mode === "signup";
    render(
      '<div class="auth-card">' + notice +
      "<h1>" + (signup ? "Create your account" : "Welcome back") + "</h1>" +
      '<p class="muted">' + (signup ? "Save your lesson and quiz progress and pick up on any device." : "Sign in to continue where you left off.") + "</p>" +
      (Account.googleEnabled || off ? '<button class="btn google" id="google" type="button"><svg class="g" viewBox="0 0 48 48" width="20" height="20" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.9 6.1C12.4 13.7 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z"/><path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.6 0 20.2 0 24s.9 7.4 2.6 10.7l7.9-6.1z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.3-8.5 2.3-6.3 0-11.6-4.2-13.5-10l-7.9 6.1C6.6 42.6 14.6 48 24 48z"/></svg> Continue with Google</button><p class="small muted google-hint">Fastest: one tap, no password to remember.</p><div class="or"><span>or use email</span></div>' : "") +
      '<form id="authform" novalidate>' +
      (signup ? '<label for="name">Your name</label><input id="name" name="name" autocomplete="name" required>' : "") +
      '<label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required>' +
      '<label for="pw">Password</label><input id="pw" name="pw" type="password" autocomplete="' + (signup ? "new-password" : "current-password") + '" minlength="8" required>' +
      (signup ? '<span class="small muted">At least 8 characters.</span>' : '<a class="small" href="#/forgot">Forgot password?</a>') +
      '<div class="form-msg" id="msg" role="status"></div>' +
      '<button class="btn wide" type="submit">' + (signup ? "Create account" : "Sign in") + "</button>" +
      "</form>" +
      '<p class="small switch">' + (signup ? 'Already have an account? <a href="#/login">Sign in</a>' : 'New here? <a href="#/signup">Create a free account</a>') + "</p>" +
      "</div>", signup ? "Create account" : "Sign in"
    );
    var msg = document.getElementById("msg");
    var g = document.getElementById("google");
    var offMsg = function () { msg.className = "form-msg bad"; msg.textContent = "Sign-in isn't connected yet in this preview."; };
    if (g) g.addEventListener("click", function () {
      if (off) return offMsg();
      msg.className = "form-msg"; msg.textContent = "Opening Google…";
      Account.google().catch(function (e) { msg.className = "form-msg bad"; msg.textContent = friendlyError(e); });
    });
    document.getElementById("authform").addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      var email = f.email.value.trim(), pw = f.pw.value;
      if (!email || !pw || (signup && !f.name.value.trim())) { msg.className = "form-msg bad"; msg.textContent = "Please fill in every field."; return; }
      if (signup && pw.length < 8) { msg.className = "form-msg bad"; msg.textContent = "Use a password of at least 8 characters."; return; }
      if (off) return offMsg();
      var btn = f.querySelector("button[type=submit]");
      btn.disabled = true; msg.className = "form-msg"; msg.textContent = signup ? "Creating your account…" : "Signing in…";
      var p = signup ? Account.signUp(f.name.value.trim(), email, pw) : Account.signIn(email, pw);
      p.then(function (data) {
        if (signup && data && !data.session) {
          msg.className = "form-msg good";
          msg.textContent = "Almost done: we sent a confirmation link to " + email + ". Open it to activate your account.";
        }
        // When a session starts, the account listener moves the student on.
      }).catch(function (err) {
        msg.className = "form-msg bad"; msg.textContent = friendlyError(err);
      }).then(function () { btn.disabled = false; });
    });
  }

  function viewForgot() {
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: "Reset password" }]);
    render('<div class="auth-card"><h1>Reset your password</h1><p class="muted">Enter your email and we’ll send you a link to choose a new password.</p>' +
      '<form id="f" novalidate><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required>' +
      '<div class="form-msg" id="msg" role="status"></div><button class="btn wide" type="submit">Send reset link</button></form>' +
      '<p class="small switch"><a href="#/login">Back to sign in</a></p></div>', "Reset password");
    document.getElementById("f").addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("msg"), email = e.target.email.value.trim();
      if (!email) { msg.className = "form-msg bad"; msg.textContent = "Please enter your email."; return; }
      if (!Account.enabled) { msg.className = "form-msg bad"; msg.textContent = "Sign-in isn't connected yet in this preview."; return; }
      Account.sendReset(email).then(function () {
        msg.className = "form-msg good"; msg.textContent = "If an account exists for " + email + ", a reset link is on its way.";
      }).catch(function (err) { msg.className = "form-msg bad"; msg.textContent = friendlyError(err); });
    });
  }

  function viewReset() {
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: "New password" }]);
    if (!Account.enabled || !Account.user()) {
      render('<div class="auth-card"><h1>Choose a new password</h1><p class="muted">Open this page from the reset link in your email.</p><p><a href="#/forgot">Send a new link</a></p></div>', "New password");
      return;
    }
    render('<div class="auth-card"><h1>Choose a new password</h1>' +
      '<form id="f" novalidate><label for="pw">New password</label><input id="pw" name="pw" type="password" autocomplete="new-password" minlength="8" required>' +
      '<div class="form-msg" id="msg" role="status"></div><button class="btn wide" type="submit">Save password</button></form></div>', "New password");
    document.getElementById("f").addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("msg"), pw = e.target.pw.value;
      if (pw.length < 8) { msg.className = "form-msg bad"; msg.textContent = "Use at least 8 characters."; return; }
      Account.updatePassword(pw).then(function () {
        msg.className = "form-msg good"; msg.innerHTML = 'Password saved. <a href="#/account">Go to my progress</a>';
      }).catch(function (err) { msg.className = "form-msg bad"; msg.textContent = friendlyError(err); });
    });
  }

  function viewAccount() {
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: "My progress" }]);
    if (Account.enabled && !Account.isReady()) { render('<p class="muted">Loading your progress…</p>', "My progress"); return; }
    var u = Account.enabled ? Account.user() : null;
    if (Account.enabled && !u) { location.hash = "#/login"; return; }

    var rows = "";
    var totals = { lessons: 0, done: 0 };
    CFA.subjects.forEach(function (s) {
      s.modules.forEach(function (m) {
        var mod = outline(s.id, m.num);
        if (!mod) return;
        var pr = moduleProgress(s.id, mod);
        totals.lessons += pr.total; totals.done += pr.done;
        var mq = result(s.id + "/" + m.num + "/module-quiz");
        var pct = Math.round(pr.done / pr.total * 100);
        var items = mod.lessons.map(function (l, i) {
          var r = result(s.id + "/" + m.num + "/" + l.id);
          return "<tr><td>Lesson " + (i + 1) + ': <a href="#/s/' + s.id + "/m/" + m.num + "/l/" + (i + 1) + '">' + esc(l.title) + "</a></td>" +
            '<td class="num">' + (r ? r.best + " / " + r.total : "–") + '</td><td class="num">' + (r ? r.attempts || 1 : 0) + "</td></tr>";
        }).join("");
        items += '<tr class="total"><td><a href="#/s/' + s.id + "/m/" + m.num + '/quiz">Module quiz</a></td><td class="num">' +
          (mq ? mq.best + " / " + mq.total : "–") + '</td><td class="num">' + (mq ? mq.attempts || 1 : 0) + "</td></tr>";
        rows += '<section class="section"><h2>' + esc(s.name) + " · Module " + m.num + ": " + esc(mod.title) + "</h2>" +
          '<div class="progress"><span style="width:' + pct + '%"></span></div><span class="small muted">' + pr.done + " of " + pr.total + " lesson quizzes done</span>" +
          '<div class="table-wrap"><table><tr><th>Quiz</th><th class="num">Best score</th><th class="num">Attempts</th></tr>' + items + "</table></div></section>";
      });
    });

    var head = u
      ? '<div class="account-head"><span class="avatar big">' + esc(Account.displayName().charAt(0).toUpperCase()) + "</span><div><h1>" + esc(Account.displayName()) + '</h1><span class="muted">' + esc(u.email || "") + "</span></div>" +
        '<button class="btn ghost" id="signout" type="button">Sign out</button></div>'
      : '<h1>My progress</h1><p class="muted">Saved in this browser only.' + (Account.enabled ? ' <a href="#/signup">Create an account</a> to keep it on every device.' : "") + "</p>";
    var buys = u ? Account.purchases() : [];
    var label = { pending: "Being checked", paid: "Unlocked", rejected: "Not confirmed" };
    var buyHtml = buys.length ? '<section class="section"><h2>My subjects</h2><div class="table-wrap"><table><tr><th>Subject</th><th>Status</th><th>UPI reference</th><th class="num">Amount</th></tr>' +
      buys.map(function (b) { var sj = subjectById(b.subject_id); return "<tr><td>" + esc(sj ? sj.name : b.subject_id) + "</td><td>" + esc(label[b.status] || b.status) + "</td><td>" + esc(b.reference || "") + '</td><td class="num">₹' + esc(b.amount_inr) + "</td></tr>"; }).join("") +
      "</table></div></section>" : "";
    render(head + buyHtml + '<p class="muted">' + totals.done + " of " + totals.lessons + " lesson quizzes completed.</p>" + rows, "My progress");
    var so = document.getElementById("signout");
    if (so) so.addEventListener("click", function () { Account.signOut().then(function () { location.hash = "#/"; }); });
  }

  function viewAdmin(filter) {
    gated = false;
    setCrumbs([{ label: "Subjects", href: "#/" }, { label: "Admin: payments" }]);
    if (!Account.enabled) { render('<h1>Payments</h1><div class="callout key"><span class="label">Preview</span>The admin page works once accounts are connected (see SETUP.md).</div>', "Admin"); return; }
    if (!Account.isReady()) { gated = true; render('<p class="muted">Loading…</p>', "Admin"); return; }
    if (!Account.user()) { location.hash = "#/login"; return; }
    if (!Account.isAdmin()) { render("<h1>Not available</h1><p class=\"muted\">This page is only for site admins.</p>", "Admin"); return; }
    filter = filter || "pending";
    render('<div class="account-head"><h1>Payments to check</h1><button class="btn ghost" id="reload" type="button">Refresh</button></div>' +
      '<p class="muted">Match each UPI transaction ID with your bank or UPI app, then approve it. Approving unlocks the subject for that student straight away.</p>' +
      '<nav class="toc"><a href="#/admin/pending"' + (filter === "pending" ? ' class="on"' : "") + '>Pending</a><a href="#/admin/all"' + (filter === "all" ? ' class="on"' : "") + ">All</a></nav>" +
      '<div id="admintable"><p class="muted">Loading…</p></div>', "Admin");
    var box = document.getElementById("admintable");
    var label = { pending: "Pending", paid: "Unlocked", rejected: "Rejected" };
    function load() {
      Account.adminList().then(function (rows) {
        var list = (rows || []).filter(function (r) { return filter === "all" || r.status === "pending"; });
        if (!list.length) { box.innerHTML = '<p class="muted">' + (filter === "pending" ? "No payments waiting. 🎉" : "No purchases yet.") + "</p>"; return; }
        box.innerHTML = '<div class="table-wrap"><table class="admin"><tr><th>Submitted</th><th>Student</th><th>Subject</th><th class="num">Amount</th><th>UPI transaction ID</th><th>Status</th><th></th></tr>' +
          list.map(function (r) {
            var sj = subjectById(r.subject_id);
            var when = new Date(r.created_at).toLocaleString();
            var actions = r.status === "pending"
              ? '<button class="btn small-btn" data-approve="' + r.id + '">Approve</button> <button class="btn ghost small-btn" data-reject="' + r.id + '">Reject</button>'
              : (r.status === "paid" ? '<button class="btn ghost small-btn" data-reject="' + r.id + '">Revoke</button>' : '<button class="btn ghost small-btn" data-approve="' + r.id + '">Approve</button>');
            return "<tr><td>" + esc(when) + "</td><td>" + esc(r.email || "") + "</td><td>" + esc(sj ? sj.name : r.subject_id) + '</td><td class="num">₹' + esc(r.amount_inr) +
              "</td><td><b>" + esc(r.reference || "") + "</b></td><td>" + esc(label[r.status] || r.status) + (r.note ? '<br><span class="small muted">' + esc(r.note) + "</span>" : "") +
              '</td><td class="actions">' + actions + "</td></tr>";
          }).join("") + "</table></div>";
      }).catch(function (e) { box.innerHTML = '<p class="form-msg bad">' + esc(friendlyError(e)) + "</p>"; });
    }
    box.addEventListener("click", function (e) {
      var a = e.target.closest("[data-approve],[data-reject]");
      if (!a) return;
      var approve = a.hasAttribute("data-approve");
      var id = Number(a.getAttribute(approve ? "data-approve" : "data-reject"));
      if (!approve) {
        // Ask for a reason inline (browser pop-ups are avoided).
        var cell = a.parentNode;
        cell.innerHTML = '<input class="reason" placeholder="Reason (shown to you only)" aria-label="Reason"> <button class="btn small-btn" data-confirm-reject="' + id + '">Confirm</button>';
        cell.querySelector("input").focus();
        return;
      }
      a.disabled = true;
      Account.adminSetStatus(id, "paid").then(load).catch(function (err) { a.disabled = false; alertBox(err); });
    });
    box.addEventListener("click", function (e) {
      var c = e.target.closest("[data-confirm-reject]");
      if (!c) return;
      var id = Number(c.getAttribute("data-confirm-reject"));
      var reason = c.parentNode.querySelector("input").value.trim();
      c.disabled = true;
      Account.adminSetStatus(id, "rejected", reason).then(load).catch(function (err) { c.disabled = false; alertBox(err); });
    });
    function alertBox(err) { box.insertAdjacentHTML("afterbegin", '<p class="form-msg bad">' + esc(friendlyError(err)) + "</p>"); }
    document.getElementById("reload").addEventListener("click", load);
    load();
  }

  // Remember where a student was, so signing in brings them back there.
  function rememberPlace() {
    var h = location.hash;
    if (!/^#\/(login|signup|forgot|reset|account)/.test(h)) { try { sessionStorage.setItem(RETURN_KEY, h || "#/"); } catch (e) { /* ignore */ } }
  }

  Account.onChange(function (u) {
    drawAccountWidget();
    var h = location.hash;
    if (u && /^#\/(login|signup)/.test(h)) {
      var back = "#/";
      try { back = sessionStorage.getItem(RETURN_KEY) || "#/"; } catch (e) { /* ignore */ }
      location.hash = back;
      return;
    }
    // Re-draw pages that show progress, but never interrupt a quiz in progress.
    if (gated || !/\/l\/|\/quiz/.test(h)) route();
  });

  /* ---------- Quiz engine ---------- */
  function mountQuiz(root, cfg) {
    var qs = cfg.questions;
    var state = { cur: 0, picked: qs.map(function () { return null; }), hint: qs.map(function () { return false; }), finished: false };

    function lessonLink(q) {
      if (!cfg.lessons || !q.lesson) return "";
      var l = cfg.lessons[q.lesson - 1];
      return ' <a href="' + cfg.lessonBase + q.lesson + '">Reread Lesson ' + q.lesson + ": " + esc(l.title) + "</a>";
    }

    function draw() {
      var answered = state.picked.filter(function (p) { return p !== null; }).length;
      var score = state.picked.filter(function (p, i) { return p === qs[i].ans; }).length;
      var prevBest = result(cfg.key);
      var html = '<div class="quiz"><div class="quiz-head"><h2>✎ ' + esc(cfg.title) + "</h2>" +
        '<span class="small muted">' + answered + "/" + qs.length + " answered · " + score + " correct" +
        (prevBest ? " · best so far " + prevBest.best + "/" + prevBest.total : "") + "</span></div>";

      html += '<div class="qtabs" role="tablist">' + qs.map(function (q, i) {
        var cls = state.picked[i] === null ? "" : (state.picked[i] === q.ans ? " right" : " wrong");
        return '<button class="qtab' + cls + (i === state.cur && !state.finished ? " current" : "") + '" data-tab="' + i + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + "</button>";
      }).join("") + "</div>";

      if (state.finished) {
        var pct = Math.round(score / qs.length * 100);
        var msg = pct >= 80 ? "Strong. You are ready to move on." : pct >= 60 ? "Close. Reread the explanations for the ones you missed, then retry." : "Worth another pass: reread the sections linked below, then retry.";
        html += '<div class="score"><div class="big">' + score + " / " + qs.length + "</div><p>" + msg + "</p></div>";
        var missed = qs.map(function (q, i) { return { q: q, i: i }; }).filter(function (x) { return state.picked[x.i] !== x.q.ans; });
        if (missed.length) {
          html += '<div class="review-list"><b>Missed:</b><ul>' + missed.map(function (x) {
            return '<li><a href="#" data-tab="' + x.i + '">Question ' + (x.i + 1) + "</a>" + lessonLink(x.q) + "</li>";
          }).join("") + "</ul></div>";
        }
        html += '<div class="qactions"><button class="btn ghost" data-act="retry">Retry quiz</button>' +
          (cfg.nextHref ? '<a class="btn" href="' + cfg.nextHref + '">Continue: ' + esc(cfg.nextLabel) + " →</a>" : "") + "</div>";
      } else {
        var q = qs[state.cur];
        var picked = state.picked[state.cur];
        html += '<div class="qprompt">' + (state.cur + 1) + ". " + q.q + "</div>";
        html += '<div class="opts">' + q.opts.map(function (o, j) {
          var cls = "";
          if (picked !== null) {
            if (j === q.ans) cls = " right";
            else if (j === picked) cls = " wrong";
          }
          return '<button class="opt' + cls + '" data-opt="' + j + '"' + (picked !== null ? " disabled" : "") + '><span class="letter">' + LETTERS[j] + "</span><span>" + o + "</span></button>";
        }).join("") + "</div>";
        if (state.hint[state.cur] && picked === null) html += '<div class="hint">💡 ' + q.hint + "</div>";
        if (picked !== null) {
          var ok = picked === q.ans;
          html += '<div class="feedback ' + (ok ? "right" : "wrong") + '"><span class="verdict">' +
            (ok ? "✓ Correct – " + LETTERS[q.ans] : "✗ Not quite – the answer is " + LETTERS[q.ans]) + "</span>" + q.why + lessonLink(q) + "</div>";
        }
        var isLast = state.cur === qs.length - 1;
        html += '<div class="qactions">' +
          (picked === null ? '<button class="btn ghost" data-act="hint">' + (state.hint[state.cur] ? "Hide hint" : "Show hint") + "</button>" : "") +
          '<button class="btn ghost" data-act="prev"' + (state.cur === 0 ? " disabled" : "") + ">← Prev</button>" +
          (isLast
            ? '<button class="btn" data-act="finish"' + (answered < qs.length ? " disabled title=\"Answer every question first\"" : "") + ">See score</button>"
            : '<button class="btn" data-act="next">Next →</button>') +
          "</div>";
      }
      html += "</div>";
      root.innerHTML = html;
    }

    root.addEventListener("click", function (e) {
      var t = e.target.closest("[data-opt],[data-tab],[data-act]");
      if (!t) return;
      if (t.hasAttribute("data-opt")) {
        if (state.picked[state.cur] !== null) return;
        state.picked[state.cur] = Number(t.getAttribute("data-opt"));
      } else if (t.hasAttribute("data-tab")) {
        e.preventDefault();
        state.cur = Number(t.getAttribute("data-tab"));
        state.finished = false;
      } else {
        var act = t.getAttribute("data-act");
        if (act === "hint") state.hint[state.cur] = !state.hint[state.cur];
        if (act === "prev" && state.cur > 0) state.cur--;
        if (act === "next" && state.cur < qs.length - 1) state.cur++;
        if (act === "finish") {
          state.finished = true;
          var sc = state.picked.filter(function (p, i) { return p === qs[i].ans; }).length;
          saveResult(cfg.key, sc, qs.length);
        }
        if (act === "retry") {
          state = { cur: 0, picked: qs.map(function () { return null; }), hint: qs.map(function () { return false; }), finished: false };
        }
      }
      draw();
    });
    draw();
  }

  /* ---------- Router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    rememberPlace();
    if (!parts.length) return viewHome();
    if (parts[0] === "login") return viewLogin("signin");
    if (parts[0] === "signup") return viewLogin("signup");
    if (parts[0] === "forgot") return viewForgot();
    if (parts[0] === "reset") return viewReset();
    if (parts[0] === "account") return viewAccount();
    if (parts[0] === "buy" && parts[1]) return viewBuy(parts[1]);
    if (parts[0] === "admin") return viewAdmin(parts[1]);
    if (parts[0] === "s") {
      var sid = parts[1];
      if (parts.length === 2) return viewSubject(sid);
      if (parts[2] === "m") {
        var num = Number(parts[3]);
        if (parts.length === 4) return viewModule(sid, num);
        if (parts[4] === "quiz") return viewModuleQuiz(sid, num);
        if (parts[4] === "l") return viewLesson(sid, num, Number(parts[5]));
      }
    }
    viewNotFound();
  }

  // In-page anchors (table of contents) must not change the route.
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-anchor]");
    if (!a) return;
    e.preventDefault();
    var el = document.getElementById(a.getAttribute("data-anchor"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  window.addEventListener("hashchange", route);
  drawAccountWidget();
  route();
})();
