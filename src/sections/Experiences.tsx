import { PinStillHit, StillPlane, useLightbox } from "../chrome/Lightbox";
import { asset, fitFor, metaFor } from "../story/assets";
import {
  AGENDA,
  BRIEF,
  BRANDING,
  FOUR_ACTS,
  JOURNEY,
  MECHANICS,
  META,
  MOOD,
  OPENING_BEATS,
  PRE_WEEKS,
  TALENT,
  TROPHIES,
  VENUE,
  WINNER_TREATS,
} from "../story/data";

type Beat = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  motif?: string;
};

function beatFitFlag(src: string) {
  return fitFor(src) === "contain" ? "1" : "0";
}

/* ---- Full Build-up beats (HQ heroes preferred) ---- */
const BUILD_BEATS: Beat[] = [
  {
    id: "obj",
    kicker: "Build-up · Objective",
    title: "Momentum before the tank",
    body: "Build anticipation for IBI 2026. Empower teams to present with confidence. Give the campus a reason to show up early.",
    src: asset("mood-c.webp"),
    alt: "Campus energy mood",
  },
  {
    id: "w1-recap",
    kicker: "Week 1 · Legacy and Validation",
    title: "Recap film",
    body: PRE_WEEKS[0].beats[0].copy,
    src: asset("stage-e.webp"),
    alt: "Arena stage atmosphere for recap film",
  },
  {
    id: "w1-ep1",
    kicker: "Week 1 · Snippet Episode 1",
    title: "Winners and finalists talk",
    body: PRE_WEEKS[0].beats[1].copy,
    src: asset("week1-snippet.webp"),
    alt: "Podcast episode one",
  },
  {
    id: "w1-mail",
    kicker: "Week 1 · Calendar",
    title: "Block your calendars",
    body: "Emailers that lock the date and start revealing who is in the room.",
    src: asset("jury-email-a.webp"),
    alt: "Calendar emailer",
  },
  {
    id: "w2-power",
    kicker: "Week 2 · The Human Behind the Idea",
    title: "Power statements",
    body: PRE_WEEKS[1].beats[0].copy,
    src: asset("mood-d.webp"),
    alt: "Spotlight mood for leadership statements",
  },
  {
    id: "w2-ep2",
    kicker: "Week 2 · Snippet Episode 2",
    title: "Jury and Shark voices",
    body: PRE_WEEKS[1].beats[1].copy,
    src: asset("week2-snippet.webp"),
    alt: "Podcast episode two",
  },
  {
    id: "w2-bytes",
    kicker: "Week 2 · Participant bytes",
    title: "Documentary shorts",
    body: PRE_WEEKS[1].beats[2].copy,
    src: asset("week2-bytes-alt.webp"),
    alt: "Participant documentary still",
  },
  {
    id: "w2-jury",
    kicker: "Week 2 · Jury reveal",
    title: "Emailers that raise heat",
    body: PRE_WEEKS[1].beats[3].copy,
    src: asset("jury-email-b.webp"),
    alt: "Jury reveal emailer",
  },
  {
    id: "w2-wall",
    kicker: "Week 2 · Expectation wall",
    title: "Idea bubbles",
    body: PRE_WEEKS[1].beats[4].copy,
    src: asset("idea-wall.webp"),
    alt: "Expectation idea wall",
  },
  {
    id: "w2-myth",
    kicker: "Week 2 · Mythbusters",
    title: "Flip the myths",
    body: PRE_WEEKS[1].beats[5].copy,
    src: asset("mythbusters.webp"),
    alt: "Mythbusters wall",
  },
  {
    id: "w3-count",
    kicker: "Week 3 · Countdown",
    title: "Campus screens takeover",
    body: PRE_WEEKS[2].beats[0].copy,
    src: asset("countdown.webp"),
    alt: "Countdown clock",
  },
  {
    id: "w3-teaser",
    kicker: "Week 3 · Final teaser",
    title: "Spotlight and scrutiny",
    body: PRE_WEEKS[2].beats[1].copy,
    src: asset("stage-b.webp"),
    alt: "Stage teaser atmosphere",
  },
  {
    id: "w3-ep3",
    kicker: "Week 3 · Snippet Episode 3",
    title: "New jury, open room",
    body: PRE_WEEKS[2].beats[2].copy,
    src: asset("week3-snippet.webp"),
    alt: "Podcast episode three",
  },
  {
    id: "w3-90",
    kicker: "Week 3 · Open pitch",
    title: "90 seconds of crazy",
    body: PRE_WEEKS[2].beats[3].copy,
    src: asset("pitch-90.webp"),
    alt: "Ninety second pitch",
  },
  {
    id: "w3-aff",
    kicker: "Week 3 · Affirmations",
    title: "Cheer the finalists",
    body: PRE_WEEKS[2].beats[4].copy,
    src: asset("affirmations.webp"),
    alt: "Affirmations wall",
  },
  {
    id: "w3-kit",
    kicker: "Week 3 · Gifting kit",
    title: "Shark Tank winner products",
    body: PRE_WEEKS[2].beats[5].copy,
    src: asset("kit-a.webp"),
    alt: "Finalists gifting kit",
  },
  {
    id: "w3-tees",
    kicker: "Week 3 · Team tees",
    title: "Color-coded clarity",
    body: PRE_WEEKS[2].beats[6].copy,
    src: asset("team-tees.webp"),
    alt: "Team differentiation tees",
  },
];

const TANK_BEATS: Beat[] = [
  {
    id: "act1",
    kicker: "Act 01 · Spectacle",
    title: FOUR_ACTS[0].title,
    body: `${FOUR_ACTS[0].copy} ${OPENING_BEATS.join(" ")}`,
    motif: "01",
    src: asset("opening-gimmick-alt.webp"),
    alt: "Opening gimmick",
  },
  {
    id: "act1b",
    kicker: "Act 01 · Opening craft",
    title: "Stage claim",
    body: "Blackout, spotlight, leadership inauguration, and a symbolic open that owns the auditorium.",
    motif: "GO",
    src: asset("stage-a.webp"),
    alt: "Main stage",
  },
  {
    id: "act2",
    kicker: "Act 02 · Pressure",
    title: FOUR_ACTS[1].title,
    body: FOUR_ACTS[1].copy,
    motif: "02",
    src: asset("stage-c.webp"),
    alt: "Pressure on stage",
  },
  {
    id: "mech-support",
    kicker: "Pitch craft · Support",
    title: MECHANICS[0].title,
    body: MECHANICS[0].copy,
    src: asset("pitch-support-a.webp"),
    alt: "Pitch support",
  },
  {
    id: "mech-credits",
    kicker: "Pitch craft · Credits",
    title: MECHANICS[1].title,
    body: MECHANICS[1].copy,
    src: asset("credits.webp"),
    alt: "IBI credits",
  },
  {
    id: "mech-buzzer",
    kicker: "Pitch craft · Powerplay",
    title: MECHANICS[2].title,
    body: MECHANICS[2].copy,
    motif: "BZ",
    src: asset("buzzer.webp"),
    alt: "Jury buzzer",
  },
  {
    id: "act3",
    kicker: "Act 03 · Deliberation",
    title: FOUR_ACTS[2].title,
    body: FOUR_ACTS[2].copy,
    motif: "03",
    src: asset("stage-d.webp"),
    alt: "Jury deliberation atmosphere",
  },
  {
    id: "mech-card",
    kicker: "Pitch craft · Commitment",
    title: MECHANICS[3].title,
    body: MECHANICS[3].copy,
    motif: "30",
    src: asset("commitment-card.webp"),
    alt: "Thirty day commitment card",
  },
  {
    id: "mech-mock",
    kicker: "Pitch craft · Surprise",
    title: MECHANICS[4].title,
    body: MECHANICS[4].copy,
    src: asset("mood-b.webp"),
    alt: "Mock pitch atmosphere",
  },
  {
    id: "act4",
    kicker: "Act 04 · Celebration",
    title: FOUR_ACTS[3].title,
    body: FOUR_ACTS[3].copy,
    motif: "04",
    src: asset("winner-confetti.webp"),
    alt: "Celebration confetti",
  },
];

const FLOOR_BEATS: Beat[] = [
  ...BRANDING.map((b, i) => ({
    id: `brand-${i}`,
    kicker: "Floor · Branding",
    title: b.title,
    body: "Campus and arrival branding that makes IBI unmistakable before doors.",
    src: b.src,
    alt: b.alt,
  })),
  {
    id: "letters",
    kicker: "Floor · Letters",
    title: "Letter cutout installation",
    body: "Dimensional letter installations that brand the arrival path.",
    src: asset("letters-a.webp"),
    alt: "Letter cutouts",
  },
  {
    id: "letters2",
    kicker: "Floor · Letters",
    title: "Letter cutout · Option 2",
    body: "Alternate letter system for stronger wayfinding and photo moments.",
    src: asset("letters-d.webp"),
    alt: "Letter cutouts option two",
  },
  {
    id: "tunnel",
    kicker: "Floor · Arrival",
    title: "Entry tunnel",
    body: "A threshold that compresses attention before Building 50 opens.",
    src: asset("tunnel.webp"),
    alt: "Entry tunnel",
  },
  {
    id: "led",
    kicker: "Floor · LED cube",
    title: "Glowing volume",
    body: "Motion graphics and IBI messaging carried through a lit cube installation.",
    src: asset("led-a.webp"),
    alt: "LED cube",
  },
  {
    id: "led2",
    kicker: "Floor · LED cube",
    title: "Cube detail",
    body: "Alternate angles on the LED volume for client sign-off.",
    src: asset("led-c.webp"),
    alt: "LED cube lit",
  },
  {
    id: "totem",
    kicker: "Floor · Totems",
    title: "Vertical markers",
    body: "Totems that orient guests and amplify the brand system through the path.",
    src: asset("totem-a.webp"),
    alt: "Totem",
  },
  {
    id: "corridor",
    kicker: "Floor · Data corridor",
    title: "Context before the pitch",
    body: "Unsolved markets, failed startups, Infosys milestones. Weight before ideas hit the stage.",
    src: asset("corridor-a.webp"),
    alt: "Data corridor",
  },
  {
    id: "gobos",
    kicker: "Floor · Gobos",
    title: "Projected identity",
    body: "Gobo patterns that paint floor and walls with IBI language.",
    src: asset("gobo-b.webp"),
    alt: "Gobo projection",
  },
  {
    id: "photo",
    kicker: "Prefunction · Photo op",
    title: "Shareable moments",
    body: "Photo setups that seed the feed before doors.",
    src: asset("photo-a.webp"),
    alt: "Photo opportunity",
  },
  {
    id: "jacket",
    kicker: "Prefunction · Photo jacket",
    title: "Wearable campaign",
    body: "A jacket prop that turns guests into walking campaign stills.",
    src: asset("photo-jacket.webp"),
    alt: "Photo jacket",
  },
  {
    id: "vote",
    kicker: "Prefunction · Vote",
    title: "Favourite team chips",
    body: "Color-coded chips drop into finalist boxes. Audience preference made visible.",
    src: asset("vote-chips.webp"),
    alt: "Vote chips",
  },
  {
    id: "memory",
    kicker: "Prefunction · Memory lane",
    title: "Last year, made visible",
    body: "A recap wall of highlights and real business outcomes from the prior IBI.",
    src: asset("photo-b.webp"),
    alt: "Memory lane atmosphere",
  },
];

const STAGE_BEATS: Beat[] = [
  {
    id: "stage-main",
    kicker: "Stage craft",
    title: "Building 50 stage",
    body: "Scenic language scaled for 150+ with clear sightlines and drama.",
    src: asset("stage-a.webp"),
    alt: "Main stage",
  },
  {
    id: "stage-light",
    kicker: "Stage craft · Lighting",
    title: "Light as pressure",
    body: "Lighting cues that mark blackout, spotlight, and celebration peaks.",
    src: asset("stage-f.webp"),
    alt: "Stage lighting look",
  },
  {
    id: "stage-back",
    kicker: "Stage craft · Backstage live",
    title: "Emotion before and after",
    body: "Quick backstage captures minutes before and after each pitch.",
    src: asset("stage-c.webp"),
    alt: "Backstage atmosphere",
  },
  {
    id: "stage-open",
    kicker: "Stage craft · Opening",
    title: "House lights down",
    body: OPENING_BEATS.join(" "),
    src: asset("stage-b.webp"),
    alt: "Opening atmosphere",
  },
];

const WINNER_BEATS: Beat[] = [
  {
    id: "win-laser",
    kicker: "Winner treatment",
    title: WINNER_TREATS[0].title,
    body: WINNER_TREATS[0].copy,
    src: asset("stage-e.webp"),
    alt: "Laser reveal atmosphere",
  },
  {
    id: "win-umb",
    kicker: "Winner treatment",
    title: WINNER_TREATS[1].title,
    body: WINNER_TREATS[1].copy,
    src: asset("winner-umbrella-alt.webp"),
    alt: "LED umbrella reveal",
  },
  {
    id: "win-conf",
    kicker: "Winner treatment",
    title: WINNER_TREATS[2].title,
    body: WINNER_TREATS[2].copy,
    src: asset("winner-confetti.webp"),
    alt: "Gold confetti",
  },
  ...TROPHIES.slice(0, 4).map((t, i) => ({
    id: `trophy-${i}`,
    kicker: "Trophy suggestions",
    title: `Trophy option ${i + 1}`,
    body: "Physical trophy directions for the final beat and photography.",
    src: t.src,
    alt: t.alt,
  })),
];

function PinExperience({
  id,
  climate,
  beats,
}: {
  id: string;
  climate: string;
  beats: Beat[];
}) {
  return (
    <section className="pin-shell" id={id} data-nav data-climate={climate} data-pin={id}>
      <div className="pin-frame" data-pin-frame={id}>
        <div className="pin-still" data-pin-still={id}>
          {beats.map((b, i) => (
            <StillPlane key={`${b.id}-${b.src}`} src={b.src} alt={b.alt} active={i === 0} />
          ))}
          <PinStillHit shellSelector={`[data-pin="${id}"]`} />
        </div>
        <div className="pin-copy" data-pin-copy={id}>
          <p className="pin-copy__kicker" data-pin-kicker>
            {beats[0].kicker}
          </p>
          <h2 className="pin-copy__title" data-pin-title>
            {beats[0].title}
          </h2>
          <p className="pin-copy__body" data-pin-body>
            {beats[0].body}
          </p>
          {beats[0].motif ? (
            <div className="act-motif" data-pin-motif>
              {beats[0].motif}
            </div>
          ) : (
            <div className="act-motif" data-pin-motif hidden />
          )}
          <ul className="pin-steps" aria-hidden="true">
            {beats.map((b, i) => (
              <li key={b.id} className={i === 0 ? "is-active" : ""} data-pin-step={i} />
            ))}
          </ul>
          <div hidden data-pin-payload={id}>
            {beats.map((b) => (
              <div
                key={b.id}
                data-beat
                data-kicker={b.kicker}
                data-title={b.title}
                data-body={b.body}
                data-src={b.src}
                data-motif={b.motif ?? ""}
                data-contain={beatFitFlag(b.src)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Arrival() {
  return (
    <section className="arrival" id="arrival" data-climate="blackout">
      <svg className="arrival__spot" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <radialGradient id="ibiSpot" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#ffb000" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#ffb000" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffb000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="140" r="180" fill="url(#ibiSpot)" />
        <path d="M200 40 L320 360 L80 360 Z" fill="#ffb000" opacity="0.08" />
      </svg>
      <div
        className="arrival__atm"
        data-arrival-atm
        style={{ backgroundImage: `url(${asset("stage-a.webp")})` }}
      />
      <div className="arrival__copy">
        <h1 className="arrival__word">
          IBI
          <em>2026</em>
        </h1>
        <p className="arrival__line">Ideas under the spotlight</p>
        <ul className="arrival__meta">
          <li>{META.date}</li>
          <li>{META.pax}</li>
          <li>{META.venue}</li>
        </ul>
      </div>
    </section>
  );
}

export function Brief() {
  return (
    <section className="brief" id="brief" data-nav data-climate="campus">
      <div>
        <p className="brief__kicker">{BRIEF.kicker}</p>
        <h2 className="brief__title">{BRIEF.title}</h2>
        <p className="brief__lead">{BRIEF.lead}</p>
      </div>
      <ul className="brief__points">
        {BRIEF.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

export function Look() {
  return (
    <section className="look" id="look" data-climate="campus">
      <div className="look__head">
        <p className="brief__kicker">Look and feel</p>
        <h2 className="brief__title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          Arena temperature
        </h2>
        <p className="brief__lead">Dark stage. Hot spotlight. Cool campus daylight between beats.</p>
      </div>
      <div className="look__grid">
        {MOOD.map((m) => {
          const meta = metaFor(m.src);
          return (
            <figure key={m.src} className="look__cell">
              <img src={m.src} alt={m.alt} style={{ objectFit: meta.fit, objectPosition: meta.focus }} loading="lazy" />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="brief" id="journey" data-climate="campus">
      <div>
        <p className="brief__kicker">Journey</p>
        <h2 className="brief__title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          Three movements
        </h2>
        <p className="brief__lead">Build heat. Hold pressure. Leave proof.</p>
      </div>
      <ul className="brief__points">
        {JOURNEY.map((j, i) => (
          <li key={j.id}>
            0{i + 1} · {j.label}. {j.copy}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BuildUp() {
  return <PinExperience id="buildup" climate="campus" beats={BUILD_BEATS} />;
}

export function Tank() {
  return <PinExperience id="tank" climate="pressure" beats={TANK_BEATS} />;
}

export function Venue() {
  return (
    <section className="venue" id="venue" data-nav data-climate="pressure">
      <div className="venue__head">
        <p className="brief__kicker">Venue</p>
        <h2 className="brief__title" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
          {VENUE.title}
        </h2>
        <p className="brief__lead">{VENUE.copy}</p>
      </div>
      <div className="venue__stills">
        {VENUE.media.map((m) => {
          const meta = metaFor(m.src);
          return (
            <img
              key={m.src}
              src={m.src}
              alt={m.alt}
              loading="lazy"
              style={{ objectFit: meta.fit, objectPosition: meta.focus }}
            />
          );
        })}
      </div>
      <h3 className="venue__agenda-title">Run of show</h3>
      <div className="agenda">
        {AGENDA.map((row) => (
          <div className="agenda__row" key={`${row.start}-${row.item}`}>
            <span>
              {row.start}-{row.end}
            </span>
            <span>{row.item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Floor() {
  return <PinExperience id="floor" climate="blackout" beats={FLOOR_BEATS} />;
}

export function Stage() {
  return <PinExperience id="stage" climate="blackout" beats={STAGE_BEATS} />;
}

export function Voices() {
  const { open } = useLightbox();
  const cast = [
    ...TALENT.speakers.map((p) => ({ ...p, role: "Speaker" as const })),
    ...TALENT.comics.map((p) => ({
      ...p,
      role: "Stand-up" as const,
      src: p.name.includes("Rahul") ? asset("talent-rahul-alt.webp") : p.src,
    })),
    ...TALENT.music.map((p) => ({ ...p, role: "Music" as const })),
    ...TALENT.mentalists.map((p) => ({ ...p, role: "Mentalist" as const })),
    ...TALENT.emcees.map((p) => ({ ...p, role: "Emcee" as const, copy: "" })),
  ];

  return (
    <section className="voices" id="voices" data-nav data-climate="celebrate" data-voices>
      <div className="voices__head">
        <p className="brief__kicker">Voices</p>
        <h2>Cast for the room</h2>
        <p>Speakers, stand-up, music, mentalists, and emcees as curated options.</p>
      </div>
      <div className="voices-track" data-voices-track>
        {cast.map((person) => {
          const meta = metaFor(person.src);
          return (
            <article className="cast-card" key={`${person.role}-${person.name}`}>
              <button
                type="button"
                className="cast-card__hit"
                onClick={() => open(person.src, person.alt)}
                aria-label={person.name}
              >
                <img
                  src={person.src}
                  alt={person.alt}
                  style={{ objectFit: meta.fit, objectPosition: meta.focus }}
                  loading="lazy"
                />
              </button>
              <div className="cast-card__meta">
                <h3>{person.name}</h3>
                <p>
                  {person.role}
                  {"copy" in person && person.copy ? ` · ${String(person.copy).slice(0, 52)}` : ""}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Winners() {
  return <PinExperience id="winners" climate="celebrate" beats={WINNER_BEATS} />;
}

export function Close() {
  const src = asset("stage-f.webp");
  const meta = metaFor(src);
  return (
    <section className="close" id="close" data-nav data-climate="celebrate">
      <p className="close__kicker">Infosys Business Incubator</p>
      <h2>Ideas under the spotlight</h2>
      <p>
        {META.date}, 2026 · Building 50 · {META.pax}
      </p>
      <p className="close__sub">After movie atmosphere</p>
      <div className="close__still">
        <img src={src} alt="After movie atmosphere" style={{ objectFit: meta.fit, objectPosition: meta.focus }} />
      </div>
    </section>
  );
}
