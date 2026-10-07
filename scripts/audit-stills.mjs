import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const exp = fs.readFileSync("src/sections/Experiences.tsx", "utf8");
const metaSrc = fs.readFileSync("src/story/assets.ts", "utf8");
const assets = [...exp.matchAll(/asset\("([^"]+)"\)/g)].map((m) => m[1]);
const unique = [...new Set(assets)].sort();
const dest = "public/assets";

const DESIGNED = [
  /^mood-/,
  /^stage-/,
  /^letters?-/,
  /^flag-/,
  /^trophy-/,
  /^jury-email/,
  /^kit-/,
  /standee/,
  /^checkered/,
  /^rotating/,
  /^led-/,
  /^corridor-/,
  /^winner-/,
  /^opening-/,
  /^venue-/,
];

function isDesigned(f) {
  return DESIGNED.some((re) => re.test(f));
}

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
  // CONTAIN constant expands as fit: "contain" in object literals, or CONTAIN shorthand
  let fit = mm ? mm[1] : null;
  if (!fit) {
    if (metaSrc.includes(`"${f}": CONTAIN`) || metaSrc.includes(`"${f}":CONTAIN`)) fit = "contain";
    else if (metaSrc.includes(`"${f}": COVER_PHOTO`)) fit = "cover";
    else fit = "?";
  }
  const badLq = tier === "LQ" && fit === "cover";
  const badDesigned = isDesigned(f) && fit === "cover";
  const bad = badLq || badDesigned;
  if (bad) fail += 1;
  const reason = badDesigned ? "FAIL designed-cover" : badLq ? "FAIL cover-LQ" : "ok";
  console.log(f.padEnd(28), `${m.width}x${m.height}`.padEnd(12), tier.padEnd(4), fit.padEnd(8), reason);
}
console.log(`\nunique ${unique.length}, failures ${fail}`);
process.exit(fail ? 1 : 0);
