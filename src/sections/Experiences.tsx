import { PinStillHit, StillPlane, useLightbox } from "../chrome/Lightbox";
import { asset, focusFor } from "../story/assets";
import {
  AGENDA,
  BRIEF,
  FOUR_ACTS,
  META,
  PRE_WEEKS,
  TALENT,
} from "../story/data";

const BUILD_BEATS = [
  {
    id: "week1",
    kicker: "Build-up · Week 1",
    title: PRE_WEEKS[0].subtitle,
    body: "Recap film, podcast heat, and the shift into a sharper Shark Tank inspired format.",
    src: asset("week1-recap.webp"),
    alt: "Week 1 recap film still",
  },
  {
    id: "week2",
    kicker: "Build-up · Week 2",
    title: PRE_WEEKS[1].subtitle,
    body: "Leadership power statements, participant documentaries, mythbusters, and jury reveal.",
    src: asset("week2-bytes.webp"),
    alt: "Week 2 human story still",
  },
  {
    id: "week3",
    kicker: "Build-up · Week 3",
    title: PRE_WEEKS[2].subtitle,
    body: "Campus countdown, 90-second open pitches, affirmations, kits, and color tees.",
    src: asset("countdown.webp"),
    alt: "Week 3 countdown still",
  },
];

const TANK_BEATS = [
  {
    id: "act1",
    kicker: "Act 01 · Spectacle",
    title: FOUR_ACTS[0].title,
    body: FOUR_ACTS[0].copy,
    motif: "01",
    src: asset("opening-gimmick.webp"),
    alt: "Opening gimmick still",
  },
  {
    id: "act2",
    kicker: "Act 02 · Pressure",
    title: FOUR_ACTS[1].title,
    body: "Live pitches with powerplay minutes, audience IBI credits, and a jury buzzer that freezes weak claims.",
    motif: "BZ",
    src: asset("buzzer.webp"),
    alt: "Jury buzzer still",
    contain: true,
  },
  {
    id: "act3",
    kicker: "Act 03 · Deliberation",
    title: FOUR_ACTS[2].title,
    body: "Jury introduction and signed 30-day executive review cards that make follow-through tangible.",
    motif: "30",
    src: asset("commitment-card.webp"),
    alt: "Thirty day commitment card",
    contain: true,
  },
  {
    id: "act4",
    kicker: "Act 04 · Celebration",
    title: FOUR_ACTS[3].title,
    body: "Laser blackout, LED umbrella reveal, gold confetti, and a winner the campus will remember.",
    motif: "★",
    src: asset("winner-confetti.webp"),
    alt: "Winner confetti still",
  },
];

const FLOOR_BEATS = [
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
    kicker: "Floor · Install",
    title: "LED cube",
    body: "A glowing volume carrying motion graphics and IBI messaging through the path.",
    src: asset("led-a.webp"),
    alt: "LED cube installation",
  },
  {
    id: "corridor",
    kicker: "Floor · Context",
    title: "Data corridor",
    body: "Unsolved markets, failed startups, Infosys milestones. Weight before the pitch.",
    src: asset("corridor-a.webp"),
    alt: "Data corridor",
  },
  {
    id: "lobby",
    kicker: "Floor · Prefunction",
    title: "Vote chips",
    body: "Color-coded chips drop into finalist boxes. Audience preference made visible.",
    src: asset("vote-chips.webp"),
    alt: "Audience vote chips",
  },
];

const CAST = [
  ...TALENT.speakers.map((p) => ({
    name: p.name,
    role: "Speaker",
    src: p.src,
    alt: p.alt,
    copy: p.copy,
  })),
  ...TALENT.comics.map((p) => ({
    name: p.name,
    role: "Stand-up",
    src: p.src,
    alt: p.alt,
    copy: p.copy,
  })),
  ...TALENT.emcees.map((p) => ({
    name: p.name,
    role: "Emcee",
    src: p.src,
    alt: p.alt,
    copy: "",
  })),
];

function PinExperience({
  id,
  climate,
  beats,
}: {
  id: string;
  climate: string;
  beats: Array<{
    id: string;
    kicker: string;
    title: string;
    body: string;
    src: string;
    alt: string;
    motif?: string;
    contain?: boolean;
  }>;
}) {
  return (
    <section className="pin-shell" id={id} data-nav data-climate={climate} data-pin={id}>
      <div className="pin-frame" data-pin-frame={id}>
        <div className="pin-still" data-pin-still={id}>
          {beats.map((b, i) => (
            <StillPlane key={b.src} src={b.src} alt={b.alt} active={i === 0} />
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
          ) : null}
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
                data-contain={b.contain ? "1" : "0"}
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

export function BuildUp() {
  return <PinExperience id="buildup" climate="campus" beats={BUILD_BEATS} />;
}

export function Tank() {
  return (
    <>
      <PinExperience id="tank" climate="pressure" beats={TANK_BEATS} />
      <aside className="brief" id="agenda" data-climate="pressure" style={{ borderTop: "none", paddingTop: 40 }}>
        <div>
          <p className="brief__kicker">Building 50 · Run of show</p>
          <h2 className="brief__title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            May 14 afternoon
          </h2>
        </div>
        <ul className="brief__points">
          {AGENDA.slice(0, 6).map((row) => (
            <li key={row.item}>
              {row.start}-{row.end} · {row.item}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export function Floor() {
  return <PinExperience id="floor" climate="blackout" beats={FLOOR_BEATS} />;
}

export function Voices() {
  const { open } = useLightbox();
  return (
    <section className="voices" id="voices" data-nav data-climate="celebrate" data-voices>
      <div className="voices__head">
        <p className="brief__kicker">Voices</p>
        <h2>Cast for the room</h2>
        <p>Speakers, stand-up, and emcees as options. Scroll sideways through the cast.</p>
      </div>
      <div className="voices-track" data-voices-track>
        {CAST.map((person) => (
          <article className="cast-card" key={`${person.role}-${person.name}`}>
            <button
              type="button"
              style={{ display: "block", width: "100%", height: "100%", padding: 0 }}
              onClick={() => open(person.src, person.alt)}
              aria-label={person.name}
            >
              <img
                src={person.src}
                alt={person.alt}
                style={{ objectPosition: focusFor(person.src) }}
                loading="lazy"
              />
            </button>
            <div className="cast-card__meta">
              <h3>{person.name}</h3>
              <p>
                {person.role}
                {person.copy ? ` · ${person.copy.slice(0, 56)}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Close() {
  return (
    <section className="close" id="close" data-nav data-climate="celebrate">
      <p className="close__kicker">Infosys Business Incubator</p>
      <h2>Ideas under the spotlight</h2>
      <p>
        {META.date}, 2026 · Building 50 · {META.pax}
      </p>
      <div
        style={{
          marginTop: 40,
          width: "min(720px, 86vw)",
          aspectRatio: "16 / 9",
          position: "relative",
          overflow: "hidden",
          marginInline: "auto",
        }}
      >
        <img
          src={asset("aftermovie.webp")}
          alt="After movie still"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
      </div>
    </section>
  );
}
