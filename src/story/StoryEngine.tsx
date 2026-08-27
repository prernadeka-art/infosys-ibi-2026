import { useEffect, useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { focusFor } from "./assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

function setClimate(value: string | null) {
  if (value) document.documentElement.setAttribute("data-climate", value);
  else document.documentElement.removeAttribute("data-climate");
}

function wirePin(id: string, reduced: boolean) {
  const shell = document.querySelector<HTMLElement>(`[data-pin="${id}"]`);
  if (!shell) return;

  const beats = Array.from(shell.querySelectorAll<HTMLElement>("[data-beat]"));
  const imgs = Array.from(shell.querySelectorAll<HTMLImageElement>(".pin-still img"));
  const kicker = shell.querySelector<HTMLElement>("[data-pin-kicker]");
  const title = shell.querySelector<HTMLElement>("[data-pin-title]");
  const body = shell.querySelector<HTMLElement>("[data-pin-body]");
  const motif = shell.querySelector<HTMLElement>("[data-pin-motif]");
  const steps = Array.from(shell.querySelectorAll<HTMLElement>("[data-pin-step]"));
  if (!beats.length) return;

  const apply = (index: number) => {
    const beat = beats[Math.min(index, beats.length - 1)];
    imgs.forEach((img, i) => {
      img.classList.toggle("is-active", i === index);
      if (i === index) img.style.objectPosition = focusFor(img.src);
      if (beat.dataset.contain === "1" && i === index) {
        img.style.objectFit = "contain";
        img.style.background = "#050506";
      } else if (i === index) {
        img.style.objectFit = "cover";
      }
    });
    steps.forEach((s, i) => s.classList.toggle("is-active", i === index));
    if (kicker) kicker.textContent = beat.dataset.kicker ?? "";
    if (title) title.textContent = beat.dataset.title ?? "";
    if (body) body.textContent = beat.dataset.body ?? "";
    if (motif) motif.textContent = beat.dataset.motif || motif.textContent;
  };

  apply(0);

  if (reduced) {
    ScrollTrigger.create({
      trigger: shell,
      start: "top 40%",
      end: "bottom 40%",
      onEnter: () => setClimate(shell.dataset.climate ?? null),
      onEnterBack: () => setClimate(shell.dataset.climate ?? null),
    });
    return;
  }

  const endMul = Math.max(beats.length, 2) * 0.95;
  ScrollTrigger.create({
    trigger: shell,
    start: "top top",
    end: () => `+=${window.innerHeight * endMul}`,
    pin: true,
    scrub: 0.95,
    anticipatePin: 1,
    onUpdate: (self) => {
      const idx = Math.min(beats.length - 1, Math.floor(self.progress * beats.length));
      apply(idx);
    },
    onEnter: () => setClimate(shell.dataset.climate ?? null),
    onEnterBack: () => setClimate(shell.dataset.climate ?? null),
  });
}

export function useStoryEngine(scope: RefObject<HTMLElement | null>, reduced: boolean) {
  const [active, setActive] = useState("brief");

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const bar = document.getElementById("progressBar");
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (bar) bar.style.width = `${self.progress * 100}%`;
        },
      });

      root.querySelectorAll<HTMLElement>("[data-nav]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) {
              setActive(section.id);
              if (section.dataset.climate) setClimate(section.dataset.climate);
            }
          },
        });
      });

      const arrival = root.querySelector<HTMLElement>("#arrival");
      const atm = root.querySelector<HTMLElement>("[data-arrival-atm]");
      if (arrival && atm && !reduced) {
        gsap.fromTo(
          atm,
          { opacity: 0 },
          {
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: arrival,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        gsap.from(".arrival__word, .arrival__line, .arrival__meta", {
          y: 28,
          opacity: 0,
          stagger: 0.08,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        });
      } else if (atm) {
        atm.style.opacity = "0.28";
      }

      wirePin("buildup", reduced);
      wirePin("tank", reduced);
      wirePin("floor", reduced);

      const voices = root.querySelector<HTMLElement>("[data-voices]");
      const track = root.querySelector<HTMLElement>("[data-voices-track]");
      if (voices && track && !reduced && window.innerWidth >= 768) {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 48),
          ease: "none",
          scrollTrigger: {
            trigger: voices,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: () => `+=${Math.max(track.scrollWidth - window.innerWidth, 600)}`,
            invalidateOnRefresh: true,
            onEnter: () => setClimate("celebrate"),
            onEnterBack: () => setClimate("celebrate"),
          },
        });
      }
    },
    { scope, dependencies: [reduced] },
  );

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reduced]);

  return { active };
}
