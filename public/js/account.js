/*
 * Accounts and progress.
 * - Without Supabase settings (js/config.js), progress is kept in this browser only.
 * - With them, students can sign in (email/password or Google) and their progress is
 *   saved to the "progress" table and follows them to any device.
 * Exposes window.Account and window.Progress for app.js.
 */
(function () {
  "use strict";

  var cfg = window.CFA_CONFIG || {};
  var enabled = !!(cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase && window.supabase.createClient);
  var sb = null;
  if (enabled) {
    try {
      sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, {
        auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
    } catch (e) {
      console.warn("Supabase could not start:", e);
      enabled = false;
    }
  }

  var user = null;
  var purchases = [];
  var admin = false;         // this student's purchase records (pending / paid / rejected)
  var ready = !enabled;       // becomes true once the first session check is done
  var listeners = [];
  var GUEST_KEY = "cfa-l1-progress-v1";

  /* ---------- Local cache ---------- */
  function storeKey() { return user ? GUEST_KEY + ":" + user.id : GUEST_KEY; }
  function read(k) { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { return {}; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
  function remove(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }

  function toRow(key, r) {
    return { user_id: user.id, item_key: key, best: r.best, last_score: r.last, total: r.total, attempts: r.attempts || 1, updated_at: r.when || new Date().toISOString() };
  }

  var Progress = {
    all: function () { return read(storeKey()); },
    get: function (key) { return this.all()[key]; },
    save: function (key, score, total) {
      var p = this.all();
      var prev = p[key];
      var rec = {
        best: prev ? Math.max(prev.best, score) : score,
        last: score,
        total: total,
        attempts: (prev && prev.attempts ? prev.attempts : 0) + 1,
        when: new Date().toISOString()
      };
      p[key] = rec;
      write(storeKey(), p);
      if (user && sb) {
        sb.from("progress").upsert(toRow(key, rec)).then(function (res) {
          if (res.error) console.warn("Could not save progress:", res.error.message);
        });
      }
      return rec;
    }
  };

  function loadPurchases() {
    if (!user || !sb) { purchases = []; return Promise.resolve(); }
    return sb.from("purchases").select("id,subject_id,status,reference,amount_inr,created_at").order("created_at", { ascending: false }).then(function (res) {
      if (res.error) { console.warn("Could not load purchases:", res.error.message); purchases = []; return; }
      purchases = res.data || [];
    }).then(function () {
      return sb.from("admins").select("user_id").eq("user_id", user.id).then(function (r) { admin = !r.error && r.data && r.data.length > 0; });
    });
  }

  /* Pull the student's saved progress, merge in anything done as a guest on this browser, push back improvements. */
  function syncDown() {
    if (!user || !sb) return Promise.resolve();
    return sb.from("progress").select("item_key,best,last_score,total,attempts,updated_at").then(function (res) {
      if (res.error) { console.warn("Could not load progress:", res.error.message); return; }
      var merged = {};
      (res.data || []).forEach(function (r) {
        merged[r.item_key] = { best: r.best, last: r.last_score, total: r.total, attempts: r.attempts, when: r.updated_at };
      });
      var local = Object.assign({}, read(GUEST_KEY + ":" + user.id), read(GUEST_KEY));
      var push = [];
      Object.keys(local).forEach(function (k) {
        var l = local[k], m = merged[k];
        if (!m || l.best > m.best || (l.when && m.when && l.when > m.when)) {
          var rec = {
            best: m ? Math.max(m.best, l.best) : l.best,
            last: l.last,
            total: l.total,
            attempts: Math.max(m ? m.attempts : 0, l.attempts || 1),
            when: l.when || new Date().toISOString()
          };
          merged[k] = rec;
          push.push(toRow(k, rec));
        }
      });
      write(GUEST_KEY + ":" + user.id, merged);
      remove(GUEST_KEY); // guest progress now belongs to this account
      if (push.length) {
        return sb.from("progress").upsert(push).then(function (r) {
          if (r.error) console.warn("Could not upload progress:", r.error.message);
        });
      }
    });
  }

  function notify() { listeners.forEach(function (fn) { try { fn(user); } catch (e) { console.error(e); } }); }

  function cleanUrl() {
    // After a Google sign-in or email link, Supabase returns with ?code=… in the address. Remove it.
    if (/[?&](code|error|error_description)=/.test(location.search)) {
      history.replaceState(null, "", location.pathname + location.hash);
    }
  }

  if (sb) {
    sb.auth.onAuthStateChange(function (event, session) {
      // Run Supabase calls outside the callback, as the library recommends.
      setTimeout(function () {
        var was = user ? user.id : null;
        user = session ? session.user : null;
        if (event === "PASSWORD_RECOVERY") location.hash = "#/reset";
        var changed = (user ? user.id : null) !== was;
        var after = function () {
          ready = true;
          cleanUrl();
          // Token refreshes happen in the background; only re-draw when something visible changed.
          if (changed || event === "INITIAL_SESSION" || event === "USER_UPDATED") notify();
        };
        if (!user) { purchases = []; admin = false; }
        if (user && user.id !== was) Promise.all([syncDown(), loadPurchases()]).then(after, after);
        else after();
      }, 0);
    });
  }

  function redirectUrl() { return location.origin + location.pathname; }
  function wrap(p) {
    return p.then(function (res) {
      if (res.error) throw res.error;
      return res.data;
    });
  }

  var Account = {
    enabled: enabled,
    googleEnabled: enabled && cfg.googleLogin !== false,
    isReady: function () { return ready; },
    user: function () { return user; },
    displayName: function () {
      if (!user) return "";
      var m = user.user_metadata || {};
      return m.full_name || m.name || (user.email ? user.email.split("@")[0] : "Student");
    },
    onChange: function (fn) { listeners.push(fn); },
    signIn: function (email, password) { return wrap(sb.auth.signInWithPassword({ email: email, password: password })); },
    signUp: function (name, email, password) {
      return wrap(sb.auth.signUp({ email: email, password: password, options: { data: { full_name: name }, emailRedirectTo: redirectUrl() } }));
    },
    google: function () { return wrap(sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: redirectUrl() } })); },
    sendReset: function (email) { return wrap(sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() })); },
    updatePassword: function (password) { return wrap(sb.auth.updateUser({ password: password })); },
    updateName: function (name) {
      return wrap(sb.auth.updateUser({ data: { full_name: name } })).then(function (d) { if (d && d.user) user = d.user; notify(); });
    },
    signOut: function () { return sb.auth.signOut().then(function () { user = null; purchases = []; notify(); }); },

    /* ----- Purchases ----- */
    purchases: function () { return purchases.slice(); },
    purchaseFor: function (subjectId) {
      for (var i = 0; i < purchases.length; i++) if (purchases[i].subject_id === subjectId && purchases[i].status !== "rejected") return purchases[i];
      return null;
    },
    hasSubject: function (subjectId) {
      return purchases.some(function (p) { return p.subject_id === subjectId && p.status === "paid"; });
    },
    requestPurchase: function (subjectId, reference, amount) {
      return wrap(sb.from("purchases").insert({
        user_id: user.id, email: user.email || null, subject_id: subjectId,
        amount_inr: amount, method: "upi_qr", reference: reference, status: "pending"
      }).select().single()).then(function (row) { purchases.unshift(row); notify(); return row; });
    },
    /* Paid module content: the database only returns it to buyers of the subject (and admins). */
    fetchModule: function (subjectId, num) {
      return wrap(sb.from("module_content").select("content").eq("subject_id", subjectId).eq("num", num).maybeSingle())
        .then(function (row) { return row ? row.content : null; });
    },
    refreshPurchases: function () { return loadPurchases().then(notify); },

    /* ----- Admin (only works for accounts listed in the admins table; enforced by the database) ----- */
    isAdmin: function () { return admin; },
    adminList: function () {
      return wrap(sb.from("purchases").select("id,email,subject_id,amount_inr,reference,status,note,created_at,reviewed_at").order("created_at", { ascending: false }).limit(500));
    },
    adminSetStatus: function (id, status, note) {
      return wrap(sb.from("purchases").update({ status: status, note: note || null, reviewed_at: new Date().toISOString() }).eq("id", id).select());
    },
    /* Visitor counter (supabase/visitor-stats.sql). No cookies, nothing stored in the browser:
       the page path is the only thing sent. Failures are ignored so the site never breaks over it. */
    logVisit: function (path) {
      if (!sb || navigator.webdriver) return;
      try { sb.rpc("log_visit", { p_path: path }).then(function () {}, function () {}); } catch (e) { /* ignore */ }
    },
    visitorStats: function () { return wrap(sb.rpc("visitor_stats")); }
  };

  window.Account = Account;
  window.Progress = Progress;
})();
