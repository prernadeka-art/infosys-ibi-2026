import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Media } from "../chrome/Lightbox";
import { SectionHead } from "../chrome/Chrome";
import {
  AGENDA,
  BRIEF,
  BRANDING,
  FOUR_ACTS,
  INSTALLS,
  JOURNEY,
  MECHANICS,
  META,
  MOOD,
  OPENING_BEATS,
  POST,
  PRE_WEEKS,
  PREFUNCTION,
  STAGE_MEDIA,
  TALENT,
  TROPHIES,
  VENUE,
  WINNER_TREATS,
} from "../story/data";
import { asset } from "../story/assets";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-spot" aria-hidden="true" />
      <img className="hero__bg" src={asset("stage-a.webp")} alt="" />
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="kicker">Infosys Campus · Building 50</p>
        <h1 className="split">{META.title}</h1>
        <p className="body-lg">Pressure. Spotlight. Business momentum.</p>
        <ul className="hero__meta">
          <li>{META.date}</li>
          <li>{META.pax}</li>
          <li>{META.venue}</li>
        </ul>
      </div>
      <p className="scroll-cue">Scroll the arena</p>
    </section>
  );
}

export function Brief() {
  return (
    <section className="section" id="brief" data-nav>
      <SectionHead kicker={BRIEF.kicker} title={BRIEF.title} lead={BRIEF.lead} />
      <ul className="point-list">
        {BRIEF.points.map((p) => (
          <li key={p} className="reveal">
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Look() {
  return (
    <section className="section section--flush" id="look" data-nav>
      <div className="pad">
        <SectionHead kicker="Look and feel" title="Arena temperature" lead="Dark stage. Hot spotlight. Cool campus daylight between beats." />
      </div>
      <div className="mood-pin">
        <div className="mood-track">
          {MOOD.map((m) => (
            <div className="mood-card" key={m.src}>
              <Media src={m.src} alt={m.alt} wide />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="section" id="journey" data-nav>
      <SectionHead kicker="Journey" title="Three movements" lead="Build heat. Hold pressure. Leave proof." />
      <div className="journey-grid">
        {JOURNEY.map((j, i) => (
          <article className="journey-card reveal" key={j.id}>
            <span className="journey-card__n">0{i + 1}</span>
            <h3>{j.label}</h3>
            <p>{j.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PreEvent() {
  const [week, setWeek] = useState(0);
  const active = PRE_WEEKS[week];

  return (
    <section className="section" id="pre" data-nav>
      <SectionHead
        kicker="Pre-event"
        title="Three weeks to the tank"
        lead="Legacy, human stories, and countdown energy that put finalists on solid ground."
      />
      <div className="option-tabs reveal" role="tablist" aria-label="Pre-event weeks">
        {PRE_WEEKS.map((w, i) => (
          <button
            key={w.id}
            type="button"
            role="tab"
            aria-selected={week === i}
            className={week === i ? "is-active" : ""}
            onClick={() => setWeek(i)}
          >
            {w.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
        >
          <p className="week-sub">{active.subtitle}</p>
          <p className="body-lg">{active.blurb}</p>
          <div className="beat-stack">
            {active.beats.map((beat) => (
              <article className="beat" key={beat.title}>
                <div>
                  <h3>{beat.title}</h3>
                  <p>{beat.copy}</p>
                </div>
                <div className="media-row">
                  {beat.media.map((m) => (
                    <Media key={m.src} src={m.src} alt={m.alt} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export function MainApproach() {
  return (
    <section className="section section--flush" id="main" data-nav>
      <div className="pad">
        <SectionHead
          kicker="Main event"
          title="Four-act dramatic structure"
          lead="Spectacle, Pressure, Deliberation, Celebration. Built to keep 150+ emotionally invested."
        />
      </div>
      <div className="acts-pin">
        <div className="acts-track">
          {FOUR_ACTS.map((act, i) => (
            <article className="act-card" key={act.title}>
              <span className="act-card__n">Act 0{i + 1}</span>
              <h3>{act.title}</h3>
              <p className="act-card__sub">{act.subtitle}</p>
              <p>{act.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VenueAgenda() {
  return (
    <section className="section" id="venue" data-nav>
      <SectionHead kicker="Venue" title={VENUE.title} lead={VENUE.copy} />
      <div className="media-grid reveal">
        {VENUE.media.map((m) => (
          <Media key={m.src} src={m.src} alt={m.alt} wide />
        ))}
      </div>
      <h3 className="subhead reveal">Run of show</h3>
      <div className="agenda reveal">
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

export function Installs() {
  const [idx, setIdx] = useState(0);
  const item = INSTALLS[idx];

  return (
    <section className="section" id="installs" data-nav>
      <SectionHead kicker="Arrival" title="Branding and installs" lead="Flags, thresholds, light volumes, and a corridor of context before the pitch." />
      <h3 className="subhead reveal">Brand kit</h3>
      <div className="media-grid reveal">
        {BRANDING.map((b) => (
          <figure key={b.src} className="captioned">
            <Media src={b.src} alt={b.alt} />
            <figcaption>{b.title}</figcaption>
          </figure>
        ))}
      </div>
      <div className="option-tabs reveal" role="tablist" aria-label="Installations">
        {INSTALLS.map((inst, i) => (
          <button
            key={inst.title}
            type="button"
            role="tab"
            aria-selected={idx === i}
            className={idx === i ? "is-active" : ""}
            onClick={() => setIdx(i)}
          >
            {inst.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          className="install-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="body-lg">{item.copy}</p>
          <div className="media-grid">
            {item.options.map((m) => (
              <Media key={m.src} src={m.src} alt={m.alt} wide />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export function Prefunction() {
  return (
    <section className="section" id="prefunction" data-nav>
      <SectionHead kicker="Pre-function" title="Lobby engagements" lead="Photo craft, audience voting, and a memory lane that proves last year mattered." />
      <div className="beat-stack">
        {PREFUNCTION.map((item) => (
          <article className="beat reveal" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <div className="media-row">
              {item.media.map((m) => (
                <Media key={m.src} src={m.src} alt={m.alt} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StageCraft() {
  return (
    <section className="section" id="stage" data-nav>
      <SectionHead
        kicker="Stage craft"
        title="Lighting, backstage live, opening"
        lead="The room goes dark. The spotlight claims the night. Emotion is captured before and after every pitch."
      />
      <ol className="opening-list reveal">
        {OPENING_BEATS.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ol>
      <div className="media-grid reveal">
        {STAGE_MEDIA.map((m) => (
          <Media key={m.src} src={m.src} alt={m.alt} />
        ))}
      </div>
    </section>
  );
}

export function Mechanics() {
  return (
    <section className="section" id="mechanics" data-nav>
      <SectionHead
        kicker="Pitch mechanics"
        title="Pressure systems"
        lead="Support the decks. Arm the audience. Freeze weak claims. Sign real follow-through."
      />
      <div className="beat-stack">
        {MECHANICS.map((item) => (
          <article className="beat reveal" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <div className="media-row">
              {item.media.map((m) => (
                <Media key={m.src} src={m.src} alt={m.alt} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Talent() {
  const [tab, setTab] = useState<"comics" | "music" | "mentalists" | "emcees" | "speakers">("comics");
  const labels = {
    comics: "Stand-up",
    music: "Music",
    mentalists: "Mentalists",
    emcees: "Emcee",
    speakers: "Speakers",
  } as const;

  const list =
    tab === "comics"
      ? TALENT.comics
      : tab === "music"
        ? TALENT.music
        : tab === "mentalists"
          ? TALENT.mentalists
          : tab === "emcees"
            ? TALENT.emcees
            : TALENT.speakers;

  return (
    <section className="section" id="talent" data-nav>
      <SectionHead
        kicker="Talent and voices"
        title="Options for the room"
        lead="Curated choices for comedy, music, mentalism, hosting, and Shark Tank calibre speakers."
      />
      <div className="option-tabs reveal" role="tablist">
        {(Object.keys(labels) as Array<keyof typeof labels>).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={tab === key ? "is-active" : ""}
            onClick={() => setTab(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="talent-grid"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {list.map((person) => (
            <article className="talent-card" key={person.name}>
              <Media src={person.src} alt={person.alt} tall={true} />
              <h3>{person.name}</h3>
              {"copy" in person && typeof person.copy === "string" ? <p>{person.copy}</p> : null}
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export function Winners() {
  return (
    <section className="section" id="winners" data-nav>
      <SectionHead kicker="Winner treatment" title="Reveal and trophy" lead="High-impact stage cues and trophy directions for the final beat." />
      <div className="beat-stack">
        {WINNER_TREATS.map((item) => (
          <article className="beat reveal" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
            <div className="media-row">
              {item.media.map((m) => (
                <Media key={m.src} src={m.src} alt={m.alt} />
              ))}
            </div>
          </article>
        ))}
      </div>
      <h3 className="subhead reveal">Trophy suggestions</h3>
      <div className="media-grid reveal">
        {TROPHIES.map((t) => (
          <Media key={t.src} src={t.src} alt={t.alt} />
        ))}
      </div>
    </section>
  );
}

export function PostClose() {
  return (
    <>
      <section className="section" id="post" data-nav>
        <SectionHead kicker="Post-event" title={POST.title} lead={POST.copy} />
        <div className="media-grid reveal">
          {POST.media.map((m) => (
            <Media key={m.src} src={m.src} alt={m.alt} wide />
          ))}
        </div>
      </section>
      <section className="close" id="close">
        <p className="kicker">Infosys Business Incubator</p>
        <h2 className="split">Ideas under the spotlight</h2>
        <p className="body-lg">May 14, 2026 · Building 50 · 150+ voices in the tank</p>
      </section>
    </>
  );
}
