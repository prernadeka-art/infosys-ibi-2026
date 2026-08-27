import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", "dist", ".git", "scripts"]);
const BANNED = /tessarakt|tesseract/i;
const EM_DASH = /[\u2013\u2014]/;
const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (BANNED.test(entry.name)) hits.push(`${full} (filename)`);
    if (dir.includes(`${path.sep}public${path.sep}`)) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (![".ts", ".tsx", ".js", ".mjs", ".css", ".html", ".md", ".json", ".yml"].includes(ext)) {
      continue;
    }
    const text = fs.readFileSync(full, "utf8");
    if (BANNED.test(text)) hits.push(`${full} (brand)`);
    if (EM_DASH.test(text) && !full.endsWith("brand-scrub.mjs")) {
      hits.push(`${full} (em/en dash)`);
    }
  }
}

walk(ROOT);
if (hits.length) {
  console.error("Brand scrub failed:\n" + hits.join("\n"));
  process.exit(1);
}
console.log("Brand scrub passed.");
