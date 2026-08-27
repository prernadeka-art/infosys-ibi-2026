import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const exp = fs.readFileSync("src/sections/Experiences.tsx", "utf8");
const metaSrc = fs.readFileSync("src/story/assets.ts", "utf8");
const assets = [...exp.matchAll(/asset\("([^"]+)"\)/g)].map((m) => m[1]);
const unique = [...new Set(assets)].sort();
const dest = "public/assets";
let fail = 0;

console.log("file".padEnd(28), "WxH".padEnd(12), "tier", "fit", "status");
for (const f of unique) {
  const p = path.join(dest, f);
  if (!fs.existsSync(p)) {
    console.log(f.padEnd(28), "MISSING");
    fail += 1;
    continue;
  }
  const m = await sharp(p).metadata();
  const long = Math.max(m.width || 0, m.height || 0);
  const tier = long >= 1600 ? "HQ" : long >= 900 ? "OK" : "LQ";
  const re = new RegExp(`"${f.replace(".", "\\.")}": \\{ fit: "(cover|contain)"`);
  const mm = metaSrc.match(re);
  const fit = mm ? mm[1] : "?";
  const bad = tier === "LQ" && fit === "cover";
  if (bad) fail += 1;
  console.log(
    f.padEnd(28),
    `${m.width}x${m.height}`.padEnd(12),
    tier.padEnd(4),
    fit.padEnd(8),
    bad ? "FAIL cover-LQ" : "ok",
  );
}
console.log(`\nunique ${unique.length}, failures ${fail}`);
process.exit(fail ? 1 : 0);
