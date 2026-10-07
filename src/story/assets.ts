export function asset(name: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/${name}`;
}

export type StillFit = "cover" | "contain";

export type StillMeta = { fit: StillFit; focus: string };

const CONTAIN: StillMeta = { fit: "contain", focus: "center center" };
const COVER_PHOTO = (focus = "center center"): StillMeta => ({ fit: "cover", focus });

/**
 * Designed PPT slides = contain (full slide visible).
 * Cover only for true photographic plates without critical edge logos.
 */
export const STILL_META: Record<string, StillMeta> = {
  // Designed look / stage / brand / install slides
  "mood-a.webp": CONTAIN,
  "mood-b.webp": CONTAIN,
  "mood-c.webp": CONTAIN,
  "mood-d.webp": CONTAIN,
  "stage-a.webp": CONTAIN,
  "stage-b.webp": CONTAIN,
  "stage-c.webp": CONTAIN,
  "stage-d.webp": CONTAIN,
  "stage-e.webp": CONTAIN,
  "stage-f.webp": CONTAIN,
  "tunnel.webp": CONTAIN,
  "led-a.webp": CONTAIN,
  "led-b.webp": CONTAIN,
  "led-c.webp": CONTAIN,
  "flag-a.webp": CONTAIN,
  "flag-b.webp": CONTAIN,
  "standees.webp": CONTAIN,
  "checkered.webp": CONTAIN,
  "rotating-standee.webp": CONTAIN,
  "letters-a.webp": CONTAIN,
  "letters-b.webp": CONTAIN,
  "letters-c.webp": CONTAIN,
  "letters-d.webp": CONTAIN,
  "letters-e.webp": CONTAIN,
  "letters-f.webp": CONTAIN,
  "venue-a.webp": CONTAIN,
  "venue-b.webp": CONTAIN,
  "venue-c.webp": CONTAIN,
  "venue-d.webp": CONTAIN,
  "countdown.webp": CONTAIN,
  "corridor-a.webp": CONTAIN,
  "corridor-b.webp": CONTAIN,
  "winner-confetti.webp": CONTAIN,
  "winner-umbrella-alt.webp": CONTAIN,
  "winner-umbrella.webp": CONTAIN,
  "winner-laser.webp": CONTAIN,
  "winner-confetti-alt.webp": CONTAIN,
  "opening-gimmick-alt.webp": CONTAIN,
  "opening-gimmick.webp": CONTAIN,
  "idea-wall.webp": CONTAIN,
  "mythbusters.webp": CONTAIN,
  "week2-snippet.webp": CONTAIN,
  "week1-snippet.webp": CONTAIN,
  "vote-chips.webp": CONTAIN,
  "totem-a.webp": CONTAIN,
  "totem-b.webp": CONTAIN,
  "totem-c.webp": CONTAIN,
  "gobo-a.webp": CONTAIN,
  "gobo-b.webp": CONTAIN,
  "gobo-c.webp": CONTAIN,
  "memory-lane.webp": CONTAIN,
  "week1-recap.webp": CONTAIN,
  "week2-bytes.webp": CONTAIN,
  "week2-power.webp": CONTAIN,
  "week2-bytes-alt.webp": CONTAIN,
  "final-teaser.webp": CONTAIN,
  "aftermovie.webp": CONTAIN,
  "buzzer.webp": CONTAIN,
  "commitment-card.webp": CONTAIN,
  "credits.webp": CONTAIN,
  "powerplay.webp": CONTAIN,
  "pitch-support-a.webp": CONTAIN,
  "pitch-support-b.webp": CONTAIN,
  "pitch-support-c.webp": CONTAIN,
  "pitch-90.webp": CONTAIN,
  "kit-a.webp": CONTAIN,
  "kit-b.webp": CONTAIN,
  "kit-c.webp": CONTAIN,
  "kit-d.webp": CONTAIN,
  "team-tees.webp": CONTAIN,
  "team-tees-alt.webp": CONTAIN,
  "jury-email-a.webp": CONTAIN,
  "jury-email-b.webp": CONTAIN,
  "affirmations.webp": CONTAIN,
  "week3-snippet.webp": CONTAIN,
  "podcast-mark.webp": CONTAIN,
  "jury-intro.webp": CONTAIN,
  "mock-pitch.webp": CONTAIN,
  "backstage.webp": CONTAIN,
  "lighting.webp": CONTAIN,
  "opening-act.webp": CONTAIN,
  "illuminati-crew.webp": CONTAIN,
  "trophy-a.webp": CONTAIN,
  "trophy-b.webp": CONTAIN,
  "trophy-c.webp": CONTAIN,
  "trophy-d.webp": CONTAIN,
  "trophy-e.webp": CONTAIN,
  "trophy-f.webp": CONTAIN,

  // Photographic plates (people / photo ops) may cover with top bias
  "photo-a.webp": COVER_PHOTO("center 30%"),
  "photo-b.webp": COVER_PHOTO("center 30%"),
  "photo-c.webp": COVER_PHOTO("center 30%"),
  "photo-jacket.webp": CONTAIN,
  "talent-sumukhi.webp": COVER_PHOTO("center 15%"),
  "talent-kanan.webp": COVER_PHOTO("center 15%"),
  "talent-rahul-alt.webp": COVER_PHOTO("center 12%"),
  "talent-suhani.webp": COVER_PHOTO("center 15%"),
  "speaker-aman.webp": COVER_PHOTO("center 12%"),
  "speaker-varun.webp": COVER_PHOTO("center 15%"),
  "emcee-a.webp": COVER_PHOTO("center 12%"),
  "emcee-c.webp": COVER_PHOTO("center 15%"),
  "speaker-vineeta.webp": CONTAIN,
  "talent-rahul.webp": CONTAIN,
  "talent-vicky.webp": CONTAIN,
  "emcee-b.webp": CONTAIN,
  "emcee-d.webp": CONTAIN,
};

/** Filenames that must never use cover (designed slides). */
export const DESIGNED_SLIDE_PREFIXES = [
  "mood-",
  "stage-",
  "letter",
  "flag-",
  "trophy-",
  "jury-email",
  "kit-",
  "standee",
  "checkered",
  "rotating",
  "led-",
  "corridor-",
  "winner-",
  "opening-",
  "venue-",
];

function fileName(src: string) {
  return src.split("/").pop() ?? src;
}

export function metaFor(src: string): StillMeta {
  return STILL_META[fileName(src)] ?? CONTAIN;
}

export function focusFor(src: string) {
  return metaFor(src).focus;
}

export function fitFor(src: string): StillFit {
  return metaFor(src).fit;
}
