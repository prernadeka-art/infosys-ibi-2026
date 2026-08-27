export function asset(name: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}assets/${name}`;
}

/** Cover crop focal points. Default center center. */
export const FOCUS: Record<string, string> = {
  "week1-recap.webp": "center 35%",
  "week2-power.webp": "center 30%",
  "week2-bytes.webp": "center 25%",
  "countdown.webp": "center center",
  "final-teaser.webp": "center 40%",
  "tunnel.webp": "center center",
  "led-a.webp": "center center",
  "corridor-a.webp": "center 40%",
  "vote-chips.webp": "center center",
  "stage-a.webp": "center 45%",
  "stage-b.webp": "center 40%",
  "opening-gimmick.webp": "center 35%",
  "jury-intro.webp": "center 30%",
  "winner-laser.webp": "center 40%",
  "winner-confetti.webp": "center 35%",
  "aftermovie.webp": "center 40%",
  "talent-rahul.webp": "center 18%",
  "talent-kanan.webp": "center 18%",
  "talent-sumukhi.webp": "center 18%",
  "talent-suhani.webp": "center 18%",
  "talent-vicky.webp": "center 18%",
  "speaker-aman.webp": "center 15%",
  "speaker-varun.webp": "center 15%",
  "speaker-vineeta.webp": "center 15%",
  "emcee-a.webp": "center 18%",
  "emcee-b.webp": "center 18%",
  "emcee-c.webp": "center 18%",
  "emcee-d.webp": "center 18%",
  "mood-a.webp": "center 40%",
  "mood-d.webp": "center 35%",
};

export function focusFor(src: string) {
  const name = src.split("/").pop() ?? "";
  return FOCUS[name] ?? "center center";
}
