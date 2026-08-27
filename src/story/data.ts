import { asset } from "./assets";

export const NAV = [
  { id: "brief", label: "Brief" },
  { id: "look", label: "Look" },
  { id: "journey", label: "Journey" },
  { id: "pre", label: "Pre" },
  { id: "main", label: "Main" },
  { id: "venue", label: "Venue" },
  { id: "installs", label: "Installs" },
  { id: "prefunction", label: "Lobby" },
  { id: "stage", label: "Stage" },
  { id: "mechanics", label: "Pitch" },
  { id: "talent", label: "Talent" },
  { id: "winners", label: "Winners" },
  { id: "post", label: "Post" },
];

export const META = {
  title: "Infosys Business Incubator 2026",
  date: "May 14",
  pax: "150+ pax",
  venue: "Infosys Campus · Building 50 Convention Center",
};

export const BRIEF = {
  kicker: "The brief",
  title: "An innovation arena, not a pitch day",
  lead:
    "Infosys Business Incubator returns as a high-intensity arena that pushes ideas beyond presentation and into real business momentum.",
  points: [
    "Last year was built on credibility and success.",
    "This year shifts beyond simple pitches into a Shark Tank inspired format with sharper scrutiny and bigger stage craft.",
    "Ambition meets pressure. Ideas meet execution. The room stays emotionally invested from open to close.",
  ],
};

export const MOOD = [
  { src: asset("mood-a.webp"), alt: "IBI look and feel mood still" },
  { src: asset("mood-b.webp"), alt: "Arena lighting mood still" },
  { src: asset("mood-c.webp"), alt: "Campus energy mood still" },
  { src: asset("mood-d.webp"), alt: "Spotlight and stage mood still" },
];

export const JOURNEY = [
  { id: "pre", label: "Pre-event", copy: "Three weeks of legacy, human stories, and countdown heat." },
  { id: "main", label: "Main event", copy: "Four acts: Spectacle, Pressure, Deliberation, Celebration." },
  { id: "post", label: "Post", copy: "After movie and lasting proof that ideas moved." },
];

export const PRE_WEEKS = [
  {
    id: "week1",
    title: "Week 1",
    subtitle: "Legacy and Validation",
    blurb: "Revisit last year, reveal the format, and open the calendar.",
    beats: [
      {
        title: "Recap film",
        copy: "Key moments from last year and how winning ideas grew into real business outcomes, then the shift into a more intense format.",
        media: [{ src: asset("week1-recap.webp"), alt: "Recap film still" }],
      },
      {
        title: "Snippet Episode 1",
        copy: "Podcast series with last year winners and this year finalists: what won before, what to expect now.",
        media: [
          { src: asset("week1-snippet.webp"), alt: "Podcast episode one artwork" },
          { src: asset("podcast-mark.webp"), alt: "Podcast series mark" },
        ],
      },
    ],
  },
  {
    id: "week2",
    title: "Week 2",
    subtitle: "The Human Behind the Idea",
    blurb: "Leadership voices, jury heat, and documentary-style participant journeys.",
    beats: [
      {
        title: "Power statements",
        copy: "Leadership teaser quotes that anchor the build-up. Innovation must move from idea to execution.",
        media: [{ src: asset("week2-power.webp"), alt: "Leadership power statement still" }],
      },
      {
        title: "Snippet Episode 2",
        copy: "Podcast with last year jury and Shark Tank voices on the potential of IBI.",
        media: [{ src: asset("week2-snippet.webp"), alt: "Podcast episode two artwork" }],
      },
      {
        title: "Participant bytes",
        copy: "MasterChef-inspired 2 to 3 minute documentary shorts on the personal journeys behind each pitch.",
        media: [
          { src: asset("week2-bytes.webp"), alt: "Participant documentary still" },
          { src: asset("week2-bytes-alt.webp"), alt: "Participant documentary alternate still" },
        ],
      },
      {
        title: "Jury reveal emailers",
        copy: "Block-your-calendar drops and finalist reveals that raise anticipation across campus.",
        media: [
          { src: asset("jury-email-a.webp"), alt: "Jury reveal emailer" },
          { src: asset("jury-email-b.webp"), alt: "Finalists reveal emailer" },
        ],
      },
      {
        title: "Expectation idea wall",
        copy: "Associates note what they think will happen into idea bubbles on a campus wall.",
        media: [{ src: asset("idea-wall.webp"), alt: "IBI expectation idea wall" }],
      },
      {
        title: "IBI Mythbusters",
        copy: "Flippable tiles that challenge myths like only polished ideas get selected.",
        media: [{ src: asset("mythbusters.webp"), alt: "Mythbusters wall" }],
      },
    ],
  },
  {
    id: "week3",
    title: "Week 3",
    subtitle: "Countdown and Collective Energy",
    blurb: "Campus screens, final teaser, open mic heat, and kit-ready finalists.",
    beats: [
      {
        title: "Countdown clock",
        copy: "A countdown takeover across campus screens creates urgency and hype.",
        media: [{ src: asset("countdown.webp"), alt: "Campus countdown clock" }],
      },
      {
        title: "Final teaser",
        copy: "The stage is set. The ideas are ready. Now which ones withstand the spotlight and the scrutiny.",
        media: [{ src: asset("final-teaser.webp"), alt: "Final teaser still" }],
      },
      {
        title: "Snippet Episode 3",
        copy: "New jury and an audience voice on what is in store and what to expect.",
        media: [{ src: asset("week3-snippet.webp"), alt: "Podcast episode three artwork" }],
      },
      {
        title: "90-second open pitch",
        copy: "Crazy ideas in 90 seconds. Three lucky teams earn a full on-stage showcase during the main event.",
        media: [{ src: asset("pitch-90.webp"), alt: "Ninety second pitch activation" }],
      },
      {
        title: "Affirmations wall",
        copy: "Attendees cheer finalists with wishes and energy before show day.",
        media: [{ src: asset("affirmations.webp"), alt: "Affirmations wall" }],
      },
      {
        title: "Finalists gifting kit",
        copy: "Kits featuring products from previous Shark Tank winners: Hammer Lifestyle, Auli Lifestyle, Beyond Water, Blue Tea.",
        media: [
          { src: asset("kit-a.webp"), alt: "Finalists kit product" },
          { src: asset("kit-b.webp"), alt: "Finalists kit product alternate" },
          { src: asset("kit-c.webp"), alt: "Finalists kit product three" },
          { src: asset("kit-d.webp"), alt: "Finalists kit product four" },
        ],
      },
      {
        title: "Team differentiation",
        copy: "Color-coded tees so every finalist team reads clearly in the room and on camera.",
        media: [
          { src: asset("team-tees.webp"), alt: "Team color tee set" },
          { src: asset("team-tees-alt.webp"), alt: "Team color tee alternate" },
        ],
      },
    ],
  },
];

export const FOUR_ACTS = [
  {
    title: "The Spectacle",
    subtitle: "Opening gimmick",
    copy: "Blackout, spotlight, leadership inauguration, and a symbolic open that claims the room.",
  },
  {
    title: "The Pressure",
    subtitle: "Live pitches",
    copy: "Real-time scrutiny, powerplay minutes, buzzers, and audience capital in motion.",
  },
  {
    title: "The Deliberation",
    subtitle: "Jury introduction",
    copy: "Jury presence, signed commitments, and the weight of business consequence.",
  },
  {
    title: "The Celebration",
    subtitle: "Performances",
    copy: "High-impact reveals, live craft, and a winner moment the campus will remember.",
  },
];

export const AGENDA = [
  { start: "13:00", end: "13:45", item: "Working lunch · Jury briefing" },
  { start: "13:45", end: "14:00", item: "Opening remarks from leaders" },
  { start: "14:00", end: "14:15", item: "Team 1" },
  { start: "14:15", end: "14:30", item: "Team 2" },
  { start: "14:30", end: "14:45", item: "Team 3" },
  { start: "14:45", end: "15:00", item: "Team 4" },
  { start: "15:00", end: "15:20", item: "Tea break" },
  { start: "15:20", end: "15:35", item: "Team 5" },
  { start: "15:35", end: "15:50", item: "Team 6" },
  { start: "15:50", end: "16:05", item: "Team 7" },
  { start: "16:05", end: "16:20", item: "Team 8" },
  { start: "16:20", end: "16:40", item: "Deliberation and performances" },
  { start: "16:40", end: "17:00", item: "Winner announcement and close" },
];

export const BRANDING = [
  { title: "L-shaped flag · Option 1", src: asset("flag-a.webp"), alt: "L-shaped flag option one" },
  { title: "L-shaped flag · Option 2", src: asset("flag-b.webp"), alt: "L-shaped flag option two" },
  { title: "Standees", src: asset("standees.webp"), alt: "Event standees" },
  { title: "Checkered backdrop", src: asset("checkered.webp"), alt: "Checkered backdrop" },
  { title: "180° rotating standee", src: asset("rotating-standee.webp"), alt: "Rotating standee" },
];

export const INSTALLS = [
  {
    title: "Letter cutouts",
    copy: "Dimensional letter installations that brand the arrival path.",
    options: [
      { src: asset("letters-a.webp"), alt: "Letter cutout option one" },
      { src: asset("letters-b.webp"), alt: "Letter cutout option one detail" },
      { src: asset("letters-c.webp"), alt: "Letter cutout option one alternate" },
      { src: asset("letters-d.webp"), alt: "Letter cutout option two" },
      { src: asset("letters-e.webp"), alt: "Letter cutout option two detail" },
      { src: asset("letters-f.webp"), alt: "Letter cutout option two alternate" },
    ],
  },
  {
    title: "Entry tunnel",
    copy: "A threshold that compresses attention before the room opens.",
    options: [{ src: asset("tunnel.webp"), alt: "Entry tunnel" }],
  },
  {
    title: "LED cube",
    copy: "A glowing volume that carries motion graphics and IBI messaging.",
    options: [
      { src: asset("led-a.webp"), alt: "LED cube installation" },
      { src: asset("led-b.webp"), alt: "LED cube alternate angle" },
      { src: asset("led-c.webp"), alt: "LED cube lit detail" },
    ],
  },
  {
    title: "Totems",
    copy: "Vertical markers that orient guests and amplify the brand system.",
    options: [
      { src: asset("totem-a.webp"), alt: "Totem option one" },
      { src: asset("totem-b.webp"), alt: "Totem option two" },
      { src: asset("totem-c.webp"), alt: "Totem option three" },
    ],
  },
  {
    title: "Data corridor",
    copy: "Panels of unsolved market problems, failed startups, and Infosys innovation milestones. Context before the pitch.",
    options: [
      { src: asset("corridor-a.webp"), alt: "Data corridor panel" },
      { src: asset("corridor-b.webp"), alt: "Data corridor alternate" },
    ],
  },
  {
    title: "Gobos",
    copy: "Projected patterns that paint the floor and walls with IBI identity.",
    options: [
      { src: asset("gobo-a.webp"), alt: "Gobo projection one" },
      { src: asset("gobo-b.webp"), alt: "Gobo projection two" },
      { src: asset("gobo-c.webp"), alt: "Gobo projection three" },
    ],
  },
];

export const PREFUNCTION = [
  {
    title: "Photo op",
    copy: "Shareable moments that seed the feed before doors.",
    media: [
      { src: asset("photo-a.webp"), alt: "Photo opportunity setup" },
      { src: asset("photo-b.webp"), alt: "Photo opportunity alternate" },
      { src: asset("photo-c.webp"), alt: "Photo opportunity detail" },
    ],
  },
  {
    title: "Photo jacket",
    copy: "A wearable prop that turns guests into walking campaign stills.",
    media: [{ src: asset("photo-jacket.webp"), alt: "Photo jacket activation" }],
  },
  {
    title: "Vote for your favourite team",
    copy: "Color-coded chips drop into finalist boxes. Audience preference made visible.",
    media: [{ src: asset("vote-chips.webp"), alt: "Audience vote chip boxes" }],
  },
  {
    title: "Down the memory lane",
    copy: "A recap wall of last year highlights and real business outcomes.",
    media: [{ src: asset("memory-lane.webp"), alt: "Memory lane recap wall" }],
  },
];

export const STAGE_MEDIA = [
  { src: asset("stage-a.webp"), alt: "Main stage design" },
  { src: asset("stage-b.webp"), alt: "Stage alternate angle" },
  { src: asset("stage-c.webp"), alt: "Stage scenic detail" },
  { src: asset("stage-d.webp"), alt: "Stage lighting look" },
  { src: asset("stage-e.webp"), alt: "Stage wide view" },
  { src: asset("stage-f.webp"), alt: "Stage close detail" },
  { src: asset("lighting.webp"), alt: "Lighting design" },
  { src: asset("backstage.webp"), alt: "Backstage live capture" },
  { src: asset("opening-act.webp"), alt: "Opening act sequence" },
  { src: asset("opening-gimmick.webp"), alt: "Opening gimmick" },
  { src: asset("opening-gimmick-alt.webp"), alt: "Opening gimmick alternate" },
  { src: asset("illuminati-crew.webp"), alt: "Blacklight dance crew reference" },
  { src: asset("jury-intro.webp"), alt: "Jury introduction moment" },
];

export const OPENING_BEATS = [
  "House lights fade into a complete blackout.",
  "A single spotlight rises as the emcee welcomes the room.",
  "Leadership and jury take the stage to inaugurate.",
  "A symbolic opening activation is executed by leaders and jury.",
];

export const MECHANICS = [
  {
    title: "Pitch support",
    copy: "Deck refinement, storytelling, prototypes, and layouts so every idea presents at its strongest.",
    media: [
      { src: asset("pitch-support-a.webp"), alt: "Pitch support visual" },
      { src: asset("pitch-support-b.webp"), alt: "Pitch support alternate" },
      { src: asset("pitch-support-c.webp"), alt: "Pitch support detail" },
    ],
  },
  {
    title: "IBI credits",
    copy: "Every audience member gets a notional budget of 10 IBI credits. They allocate to teams they believe in. A live leaderboard updates in real time.",
    media: [{ src: asset("credits.webp"), alt: "Audience IBI credits mechanic" }],
  },
  {
    title: "Powerplay and buzzer",
    copy: "First two minutes are elevator powerplay. Then the full pitch. Any juror can hit a physical buzzer mid-pitch to freeze and challenge a claim.",
    media: [
      { src: asset("powerplay.webp"), alt: "Powerplay mode" },
      { src: asset("buzzer.webp"), alt: "Jury buzzer" },
    ],
  },
  {
    title: "30-day executive review card",
    copy: "Each jury member signs a tangible commitment to formally review the winning idea with their Business Unit Head within 30 days.",
    media: [{ src: asset("commitment-card.webp"), alt: "Thirty day commitment card" }],
  },
  {
    title: "Mock pitch surprise",
    copy: "A stand-up comedian delivers an over-the-top business idea that resets the room with satire and pitch theatrics.",
    media: [{ src: asset("mock-pitch.webp"), alt: "Comedic mock pitch" }],
  },
];

export const TALENT = {
  comics: [
    {
      name: "Rahul Subramanian",
      copy: "Observational comedy with a brand-manager-turned-comedian edge.",
      src: asset("talent-rahul.webp"),
      alt: "Rahul Subramanian",
    },
    {
      name: "Kanan Gill",
      copy: "Pioneer of the Indian comedy scene, known for sharp collaborative sketches.",
      src: asset("talent-kanan.webp"),
      alt: "Kanan Gill",
    },
    {
      name: "Sumukhi Suresh",
      copy: "Deadpan to high-energy range. Writer, actor, and showrunner.",
      src: asset("talent-sumukhi.webp"),
      alt: "Sumukhi Suresh",
    },
  ],
  music: [
    {
      name: "The Indian Jam Project",
      copy: "Classical instruments meeting electronic, lo-fi, rock, and experimental sound.",
      src: asset("talent-jam.webp"),
      alt: "The Indian Jam Project",
    },
  ],
  mentalists: [
    {
      name: "Suhani Shah",
      copy: "Mentalism that turns attention into theatre.",
      src: asset("talent-suhani.webp"),
      alt: "Suhani Shah",
    },
    {
      name: "Vicky Krish",
      copy: "High-energy mind craft for a packed auditorium.",
      src: asset("talent-vicky.webp"),
      alt: "Vicky Krish",
    },
  ],
  emcees: [
    { name: "Mitin Upadhyay", src: asset("emcee-a.webp"), alt: "Mitin Upadhyay" },
    { name: "Riaz Basha", src: asset("emcee-b.webp"), alt: "Riaz Basha" },
    { name: "Bhavana Balakrishnan", src: asset("emcee-c.webp"), alt: "Bhavana Balakrishnan" },
    { name: "Anuj Char", src: asset("emcee-d.webp"), alt: "Anuj Char" },
  ],
  speakers: [
    {
      name: "Aman Gupta",
      copy: "Co-founder of boAt Lifestyle. Shark Tank India voice for D2C scale.",
      src: asset("speaker-aman.webp"),
      alt: "Aman Gupta",
    },
    {
      name: "Varun Dua",
      copy: "Founder and CEO of ACKO. Digital insurance and Shark Tank India.",
      src: asset("speaker-varun.webp"),
      alt: "Varun Dua",
    },
    {
      name: "Vineeta Singh",
      copy: "Co-founder and CEO of SUGAR Cosmetics. Shark Tank India judge.",
      src: asset("speaker-vineeta.webp"),
      alt: "Vineeta Singh",
    },
  ],
};

export const WINNER_TREATS = [
  {
    title: "Laser blackout reveal",
    copy: "Dance crew enters in darkness. Lasers and LED patterns build to a sharp reveal.",
    media: [{ src: asset("winner-laser.webp"), alt: "Laser winner reveal" }],
  },
  {
    title: "LED umbrella reveal",
    copy: "Performers open and close LED umbrellas in a 15 to 20 second climax split.",
    media: [
      { src: asset("winner-umbrella.webp"), alt: "LED umbrella reveal" },
      { src: asset("winner-umbrella-alt.webp"), alt: "LED umbrella reveal alternate" },
    ],
  },
  {
    title: "Gold confetti pop",
    copy: "Winner name cues a gold confetti burst with peak light and sound.",
    media: [
      { src: asset("winner-confetti.webp"), alt: "Gold confetti winner moment" },
      { src: asset("winner-confetti-alt.webp"), alt: "Confetti moment alternate" },
    ],
  },
];

export const TROPHIES = [
  { src: asset("trophy-a.webp"), alt: "Trophy suggestion one" },
  { src: asset("trophy-b.webp"), alt: "Trophy suggestion two" },
  { src: asset("trophy-c.webp"), alt: "Trophy suggestion three" },
  { src: asset("trophy-d.webp"), alt: "Trophy suggestion four" },
  { src: asset("trophy-e.webp"), alt: "Trophy suggestion five" },
  { src: asset("trophy-f.webp"), alt: "Trophy suggestion six" },
];

export const VENUE = {
  title: "Building 50 · Large Auditorium",
  copy: "Infosys Campus convention center scaled for 150+ with clear sightlines and stage drama.",
  media: [
    { src: asset("venue-a.webp"), alt: "Building 50 venue view" },
    { src: asset("venue-b.webp"), alt: "Venue seating view" },
    { src: asset("venue-c.webp"), alt: "Venue alternate angle" },
    { src: asset("venue-d.webp"), alt: "Venue stage sightline" },
  ],
};

export const POST = {
  title: "After movie",
  copy: "A cut that captures pressure, pride, and the business afterglow so the story keeps circulating.",
  media: [{ src: asset("aftermovie.webp"), alt: "After movie still" }],
};
