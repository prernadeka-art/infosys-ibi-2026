import { useRef } from "react";
import { Nav, Progress } from "./chrome/Chrome";
import { LightboxProvider } from "./chrome/Lightbox";
import {
  Arrival,
  Brief,
  BuildUp,
  Close,
  Floor,
  Journey,
  Look,
  Stage,
  Tank,
  Venue,
  Voices,
  Winners,
} from "./sections/Experiences";
import { useReducedMotion, useStoryEngine } from "./story/StoryEngine";

export function App() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { active } = useStoryEngine(root, reduced);

  return (
    <LightboxProvider>
      <Progress />
      <Nav active={active} reduced={reduced} />
      <div className="stage-root" ref={root}>
        <Arrival />
        <main>
          <Brief />
          <Look />
          <Journey />
          <BuildUp />
          <Tank />
          <Venue />
          <Floor />
          <Stage />
          <Voices />
          <Winners />
          <Close />
        </main>
        <footer className="site-footer">Infosys Business Incubator 2026 · Building 50</footer>
      </div>
    </LightboxProvider>
  );
}
