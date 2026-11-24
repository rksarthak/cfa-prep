#!/usr/bin/env node
/*
 * Makes a private review copy of the site with every module included (paid ones too),
 * so the content can be checked without accounts. Never deploy this copy publicly.
 * Usage: node tools/build-preview.js <new-output-folder>
 * The output folder must not exist yet (nothing is ever deleted by this script).
 */
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const out = path.resolve(process.argv[2] || "");
if (!process.argv[2]) { console.error("Give an output folder that does not exist yet."); process.exit(1); }
if (fs.existsSync(out)) { console.error("Output folder already exists: " + out + ". Pick a new folder."); process.exit(1); }

fs.cpSync(path.join(root, "public"), out, { recursive: true });
const tags = [];
const src = path.join(root, "content-paid");
for (const subject of fs.readdirSync(src)) {
  const dir = path.join(src, subject);
  if (!fs.statSync(dir).isDirectory()) continue;
  fs.mkdirSync(path.join(out, "js", "content", subject), { recursive: true });
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".js")).sort()) {
    fs.copyFileSync(path.join(dir, f), path.join(out, "js", "content", subject, f));
    tags.push(`  <script src="js/content/${subject}/${f}"></script>`);
  }
}
// The review copy never talks to the real accounts database: switch accounts off.
const cfgPath = path.join(out, "js", "config.js");
fs.writeFileSync(cfgPath, fs.readFileSync(cfgPath, "utf8").replace(/supabaseUrl:\s*"[^"]*"/, 'supabaseUrl: ""'));
let html = fs.readFileSync(path.join(out, "index.html"), "utf8");
html = html.replace('  <script src="js/app.js"></script>',
  tags.join("\n") + '\n  <script>window.CFA_CONFIG.previewAllContent = true;</script>\n  <script src="js/app.js"></script>');
fs.writeFileSync(path.join(out, "index.html"), html);
console.log("Review copy written to " + out + " with " + tags.length + " paid module file(s).");
