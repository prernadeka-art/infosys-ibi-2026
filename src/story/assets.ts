export function asset(name: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/${name}`;
}

export type StillFit = "cover" | "contain";

export type StillMeta = { fit: StillFit; focus: string };

/** Fit/focus for every still used on-page. LQ sources must be contain or unused as heroes. */
export const STILL_META: Record<string, StillMeta> = {
  // HQ cinematic
  "mood-a.webp": { fit: "cover", focus: "center 40%" },
  "mood-b.webp": { fit: "cover", focus: "center 40%" },
  "mood-c.webp": { fit: "cover", focus: "center 40%" },
  "mood-d.webp": { fit: "cover", focus: "center 35%" },
  "stage-a.webp": { fit: "cover", focus: "center 45%" },
  "stage-b.webp": { fit: "cover", focus: "center 40%" },
  "stage-c.webp": { fit: "cover", focus: "center 40%" },
  "stage-d.webp": { fit: "cover", focus: "center 40%" },
  "stage-e.webp": { fit: "cover", focus: "center 42%" },
  "stage-f.webp": { fit: "cover", focus: "center 40%" },
  "tunnel.webp": { fit: "cover", focus: "center center" },
  "led-a.webp": { fit: "cover", focus: "center center" },
  "led-b.webp": { fit: "cover", focus: "center center" },
  "led-c.webp": { fit: "cover", focus: "center center" },
  "flag-a.webp": { fit: "cover", focus: "center center" },
  "flag-b.webp": { fit: "cover", focus: "center center" },
  "standees.webp": { fit: "cover", focus: "center center" },
  "checkered.webp": { fit: "cover", focus: "center center" },
  "rotating-standee.webp": { fit: "cover", focus: "center center" },
  "letters-a.webp": { fit: "cover", focus: "center center" },
  "letters-b.webp": { fit: "cover", focus: "center center" },
  "letters-c.webp": { fit: "cover", focus: "center center" },
  "letters-d.webp": { fit: "cover", focus: "center center" },
  "letters-e.webp": { fit: "cover", focus: "center center" },
  "letters-f.webp": { fit: "cover", focus: "center center" },
  "photo-a.webp": { fit: "cover", focus: "center 35%" },
  "photo-b.webp": { fit: "cover", focus: "center 35%" },
  "photo-c.webp": { fit: "cover", focus: "center 35%" },
  "venue-a.webp": { fit: "cover", focus: "center center" },
  "venue-b.webp": { fit: "cover", focus: "center center" },
  "countdown.webp": { fit: "cover", focus: "center center" },
  "corridor-a.webp": { fit: "cover", focus: "center 40%" },
  "corridor-b.webp": { fit: "cover", focus: "center 40%" },
  "winner-confetti.webp": { fit: "cover", focus: "center 35%" },
  "winner-umbrella-alt.webp": { fit: "cover", focus: "center 25%" },
  "opening-gimmick-alt.webp": { fit: "cover", focus: "center 35%" },
  "idea-wall.webp": { fit: "cover", focus: "center 30%" },
  "mythbusters.webp": { fit: "cover", focus: "center 25%" },
  "week2-snippet.webp": { fit: "cover", focus: "center 20%" },
  "week1-snippet.webp": { fit: "cover", focus: "center 20%" },
  "vote-chips.webp": { fit: "cover", focus: "center center" },
  "photo-jacket.webp": { fit: "cover", focus: "center 30%" },
  "totem-a.webp": { fit: "cover", focus: "center top" },
  "totem-b.webp": { fit: "cover", focus: "center top" },
  "totem-c.webp": { fit: "cover", focus: "center top" },
  "gobo-b.webp": { fit: "contain", focus: "center center" },
  "memory-lane.webp": { fit: "contain", focus: "center center" },
  "talent-sumukhi.webp": { fit: "cover", focus: "center 15%" },
  "talent-kanan.webp": { fit: "cover", focus: "center 15%" },
  "talent-rahul-alt.webp": { fit: "cover", focus: "center 12%" },
  "talent-suhani.webp": { fit: "cover", focus: "center 15%" },
  "speaker-aman.webp": { fit: "cover", focus: "center 12%" },
  "speaker-varun.webp": { fit: "cover", focus: "center 15%" },
  "emcee-a.webp": { fit: "cover", focus: "center 12%" },
  "emcee-c.webp": { fit: "cover", focus: "center 15%" },

  // Diagrams / UI / mid / LQ → contain (never cover-upscale)
  "week1-recap.webp": { fit: "contain", focus: "center center" },
  "week2-bytes.webp": { fit: "contain", focus: "center center" },
  "week2-power.webp": { fit: "contain", focus: "center center" },
  "week2-bytes-alt.webp": { fit: "contain", focus: "center center" },
  "final-teaser.webp": { fit: "contain", focus: "center center" },
  "opening-gimmick.webp": { fit: "contain", focus: "center center" },
  "aftermovie.webp": { fit: "contain", focus: "center center" },
  "buzzer.webp": { fit: "contain", focus: "center center" },
  "commitment-card.webp": { fit: "contain", focus: "center center" },
  "credits.webp": { fit: "contain", focus: "center center" },
  "powerplay.webp": { fit: "contain", focus: "center center" },
  "pitch-support-a.webp": { fit: "contain", focus: "center center" },
  "pitch-support-b.webp": { fit: "contain", focus: "center center" },
  "pitch-support-c.webp": { fit: "contain", focus: "center center" },
  "pitch-90.webp": { fit: "contain", focus: "center center" },
  "kit-a.webp": { fit: "contain", focus: "center center" },
  "kit-b.webp": { fit: "contain", focus: "center center" },
  "kit-c.webp": { fit: "contain", focus: "center center" },
  "kit-d.webp": { fit: "contain", focus: "center center" },
  "team-tees.webp": { fit: "contain", focus: "center center" },
  "team-tees-alt.webp": { fit: "contain", focus: "center center" },
  "jury-email-a.webp": { fit: "contain", focus: "center center" },
  "jury-email-b.webp": { fit: "contain", focus: "center center" },
  "affirmations.webp": { fit: "contain", focus: "center center" },
  "week3-snippet.webp": { fit: "contain", focus: "center center" },
  "podcast-mark.webp": { fit: "contain", focus: "center center" },
  "jury-intro.webp": { fit: "contain", focus: "center center" },
  "mock-pitch.webp": { fit: "contain", focus: "center center" },
  "backstage.webp": { fit: "contain", focus: "center center" },
  "lighting.webp": { fit: "contain", focus: "center center" },
  "opening-act.webp": { fit: "contain", focus: "center center" },
  "illuminati-crew.webp": { fit: "contain", focus: "center center" },
  "winner-laser.webp": { fit: "contain", focus: "center center" },
  "winner-umbrella.webp": { fit: "contain", focus: "center center" },
  "winner-confetti-alt.webp": { fit: "contain", focus: "center center" },
  "trophy-a.webp": { fit: "contain", focus: "center center" },
  "trophy-b.webp": { fit: "contain", focus: "center center" },
  "trophy-c.webp": { fit: "contain", focus: "center center" },
  "trophy-d.webp": { fit: "contain", focus: "center center" },
  "trophy-e.webp": { fit: "contain", focus: "center center" },
  "trophy-f.webp": { fit: "contain", focus: "center center" },
  "gobo-a.webp": { fit: "contain", focus: "center center" },
  "gobo-c.webp": { fit: "contain", focus: "center center" },
  "venue-c.webp": { fit: "contain", focus: "center center" },
  "venue-d.webp": { fit: "contain", focus: "center center" },
  "speaker-vineeta.webp": { fit: "contain", focus: "center top" },
  "talent-rahul.webp": { fit: "contain", focus: "center top" },
  "talent-vicky.webp": { fit: "contain", focus: "center center" },
  "emcee-b.webp": { fit: "contain", focus: "center center" },
  "emcee-d.webp": { fit: "contain", focus: "center center" },
};

function fileName(src: string) {
  return src.split("/").pop() ?? src;
}

export function metaFor(src: string): StillMeta {
  return STILL_META[fileName(src)] ?? { fit: "cover", focus: "center center" };
}

export function focusFor(src: string) {
  return metaFor(src).focus;
}

export function fitFor(src: string): StillFit {
  return metaFor(src).fit;
}
