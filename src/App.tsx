import { useRef } from "react";
import { LayoutGroup } from "motion/react";
import { BackTop, Grain, Nav, Progress, SideDots } from "./chrome/Chrome";
import { LightboxProvider } from "./chrome/Lightbox";
import {
  Brief,
  Hero,
  Installs,
  Journey,
  Look,
  MainApproach,
  Mechanics,
  PostClose,
  PreEvent,
  Prefunction,
  StageCraft,
  Talent,
  VenueAgenda,
  Winners,
} from "./sections/Chapters";
import { useReducedMotion, useStoryEngine } from "./story/StoryEngine";

export function App() {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { active } = useStoryEngine(root, reduced);

  return (
    <LightboxProvider>
      <Progress />
      <Grain />
      <LayoutGroup>
        <Nav active={active} reduced={reduced} />
        <SideDots active={active} reduced={reduced} />
        <BackTop reduced={reduced} />
        <div ref={root}>
          <Hero />
          <main>
            <Brief />
            <Look />
            <Journey />
            <PreEvent />
            <MainApproach />
            <VenueAgenda />
            <Installs />
            <Prefunction />
            <StageCraft />
            <Mechanics />
            <Talent />
            <Winners />
            <PostClose />
          </main>
          <footer className="site-footer">Infosys Business Incubator 2026 · Building 50</footer>
        </div>
      </LayoutGroup>
    </LightboxProvider>
  );
}
