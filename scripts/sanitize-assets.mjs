/**
 * PPT media → web assets for Infosys Business Incubator 2026.
 * High-quality export: WebP q90, larger hero edges.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = path.join(
  process.env.TEMP || process.env.TMP || "/tmp",
  "infosys-deck-extract/ppt/media",
);
const DEST = path.resolve("public/assets");

const EXCLUDE = new Set([
  "image1.png",
  "image6.png",
  "image4.png",
  "image15.png",
  "image3.jpg",
  "image111.png",
  "image105.png",
]);

/** Semantic rename. max = longest edge. */
const MAP = {
  "image18.jpg": { out: "mood-a.webp", max: 2400 },
  "image17.jpg": { out: "mood-b.webp", max: 2400 },
  "image45.jpg": { out: "mood-c.webp", max: 2400 },
  "image49.jpg": { out: "mood-d.webp", max: 2400 },
  "image2.jpg": { out: "week1-recap.webp", max: 2400 },
  "image7.png": { out: "podcast-mark.webp", max: 1200 },
  "image9.png": { out: "week1-snippet.webp", max: 1600 },
  "image16.jpg": { out: "week2-power.webp", max: 2400 },
  "image13.png": { out: "week2-snippet.webp", max: 1600 },
  "image5.jpg": { out: "week2-bytes.webp", max: 2400 },
  "image14.png": { out: "week2-bytes-alt.webp", max: 1600 },
  "image11.png": { out: "jury-email-a.webp", max: 1600 },
  "image10.png": { out: "jury-email-b.webp", max: 1600 },
  "image23.png": { out: "idea-wall.webp", max: 2400 },
  "image8.png": { out: "mythbusters.webp", max: 2400 },
  "image12.jpg": { out: "countdown.webp", max: 2400 },
  "image19.jpg": { out: "final-teaser.webp", max: 2400 },
  "image27.png": { out: "week3-snippet.webp", max: 1600 },
  "image21.png": { out: "pitch-90.webp", max: 1600 },
  "image24.png": { out: "affirmations.webp", max: 1600 },
  "image22.png": { out: "kit-a.webp", max: 1600 },
  "image28.png": { out: "kit-b.webp", max: 1600 },
  "image25.png": { out: "kit-c.webp", max: 1600 },
  "image20.png": { out: "kit-d.webp", max: 1600 },
  "image26.png": { out: "team-tees.webp", max: 1600 },
  "image32.png": { out: "team-tees-alt.webp", max: 1600 },
  "image30.jpg": { out: "flag-a.webp", max: 2400 },
  "image36.jpg": { out: "flag-b.webp", max: 2400 },
  "image35.jpg": { out: "standees.webp", max: 2400 },
  "image34.jpg": { out: "checkered.webp", max: 2400 },
  "image40.jpg": { out: "rotating-standee.webp", max: 2400 },
  "image37.png": { out: "venue-a.webp", max: 2400 },
  "image31.png": { out: "venue-b.webp", max: 2400 },
  "image29.png": { out: "venue-c.webp", max: 2400 },
  "image33.png": { out: "venue-d.webp", max: 2400 },
  "image39.png": { out: "letters-a.webp", max: 2400 },
  "image69.png": { out: "letters-b.webp", max: 2400 },
  "image43.jpg": { out: "letters-c.webp", max: 2400 },
  "image44.png": { out: "letters-d.webp", max: 2400 },
  "image42.png": { out: "letters-e.webp", max: 2400 },
  "image51.jpg": { out: "letters-f.webp", max: 2400 },
  "image38.jpg": { out: "tunnel.webp", max: 2400 },
  "image50.png": { out: "led-a.webp", max: 2400 },
  "image52.png": { out: "led-b.webp", max: 2400 },
  "image58.jpg": { out: "led-c.webp", max: 2400 },
  "image41.png": { out: "totem-a.webp", max: 1600 },
  "image47.png": { out: "totem-b.webp", max: 1600 },
  "image59.jpg": { out: "totem-c.webp", max: 1600 },
  "image60.png": { out: "corridor-a.webp", max: 2400 },
  "image61.png": { out: "corridor-b.webp", max: 2400 },
  "image48.jpg": { out: "gobo-a.webp", max: 1600 },
  "image55.png": { out: "gobo-b.webp", max: 1600 },
  "image57.png": { out: "gobo-c.webp", max: 1600 },
  "image63.png": { out: "photo-a.webp", max: 2400 },
  "image54.png": { out: "photo-b.webp", max: 2400 },
  "image68.jpg": { out: "photo-c.webp", max: 2400 },
  "image76.jpg": { out: "photo-jacket.webp", max: 1600 },
  "image56.png": { out: "vote-chips.webp", max: 1600 },
  "image46.jpg": { out: "memory-lane.webp", max: 2400 },
  "image62.png": { out: "stage-a.webp", max: 2400 },
  "image66.png": { out: "stage-b.webp", max: 2400 },
  "image70.png": { out: "stage-c.webp", max: 2400 },
  "image67.png": { out: "stage-d.webp", max: 2400 },
  "image91.jpg": { out: "stage-e.webp", max: 2400 },
  "image79.jpg": { out: "stage-f.webp", max: 2400 },
  "image53.jpg": { out: "lighting.webp", max: 2400 },
  "image73.jpg": { out: "backstage.webp", max: 2400 },
  "image77.png": { out: "opening-act.webp", max: 2400 },
  "image78.jpg": { out: "opening-gimmick.webp", max: 2400 },
  "image71.png": { out: "opening-gimmick-alt.webp", max: 1600 },
  "image74.png": { out: "illuminati-crew.webp", max: 1600 },
  "image64.jpg": { out: "jury-intro.webp", max: 2400 },
  "image75.png": { out: "pitch-support-a.webp", max: 1600 },
  "image92.png": { out: "pitch-support-b.webp", max: 1600 },
  "image80.png": { out: "pitch-support-c.webp", max: 1600 },
  "image65.png": { out: "credits.webp", max: 1600 },
  "image81.png": { out: "powerplay.webp", max: 1600 },
  "image72.png": { out: "buzzer.webp", max: 1600 },
  "image84.png": { out: "commitment-card.webp", max: 1600 },
  "image86.jpg": { out: "mock-pitch.webp", max: 2400 },
  "image87.png": { out: "talent-rahul.webp", max: 1600 },
  "image82.png": { out: "talent-rahul-alt.webp", max: 1200 },
  "image90.png": { out: "talent-kanan.webp", max: 1600 },
  "image88.png": { out: "talent-kanan-alt.webp", max: 1200 },
  "image101.png": { out: "talent-sumukhi.webp", max: 1600 },
  "image85.jpg": { out: "talent-jam.webp", max: 1600 },
  "image83.png": { out: "talent-suhani.webp", max: 1600 },
  "image102.png": { out: "talent-vicky.webp", max: 1600 },
  "image89.jpg": { out: "winner-laser.webp", max: 2400 },
  "image95.jpg": { out: "winner-umbrella.webp", max: 2400 },
  "image96.png": { out: "winner-umbrella-alt.webp", max: 1600 },
  "image93.png": { out: "winner-confetti.webp", max: 2400 },
  "image112.png": { out: "winner-confetti-alt.webp", max: 1600 },
  "image99.png": { out: "trophy-a.webp", max: 1600 },
  "image100.png": { out: "trophy-b.webp", max: 1600 },
  "image97.png": { out: "trophy-c.webp", max: 1600 },
  "image106.png": { out: "trophy-d.webp", max: 1600 },
  "image114.png": { out: "trophy-e.webp", max: 1600 },
  "image107.png": { out: "trophy-f.webp", max: 1600 },
  "image94.jpg": { out: "emcee-a.webp", max: 1600 },
  "image98.png": { out: "emcee-b.webp", max: 1600 },
  "image109.png": { out: "emcee-c.webp", max: 1600 },
  "image110.png": { out: "emcee-d.webp", max: 1600 },
  "image104.png": { out: "speaker-aman.webp", max: 1600 },
  "image113.png": { out: "speaker-varun.webp", max: 1600 },
  "image108.png": { out: "speaker-vineeta.webp", max: 1600 },
  "image103.jpg": { out: "aftermovie.webp", max: 2400 },
};

async function run() {
  if (!fs.existsSync(SRC)) {
    console.error("Missing extract at", SRC);
    process.exit(1);
  }
  fs.mkdirSync(DEST, { recursive: true });
  for (const file of fs.readdirSync(DEST)) {
    fs.unlinkSync(path.join(DEST, file));
  }

  let ok = 0;
  for (const [srcName, conf] of Object.entries(MAP)) {
    if (EXCLUDE.has(srcName)) continue;
    const src = path.join(SRC, srcName);
    if (!fs.existsSync(src)) {
      console.warn("skip missing", srcName);
      continue;
    }
    const dest = path.join(DEST, conf.out);
    const pipeline = sharp(src).rotate().resize({
      width: conf.max,
      height: conf.max,
      fit: "inside",
      withoutEnlargement: true,
    });
    if (conf.out.endsWith(".png")) {
      await pipeline.png({ compressionLevel: 8 }).toFile(dest);
    } else {
      await pipeline.webp({ quality: 90 }).toFile(dest);
    }
    ok += 1;
    console.log(srcName, "->", conf.out);
  }
  console.log(`Wrote ${ok} assets to ${DEST}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
