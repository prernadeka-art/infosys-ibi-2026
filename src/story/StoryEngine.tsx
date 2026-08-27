import { useEffect, useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

function splitTitle(el: HTMLElement) {
  const text = el.textContent ?? "";
  el.innerHTML = text
    .split(/(\s+)/)
    .map((part) => (part.trim() ? `<span class="w">${part}</span>` : part))
    .join("");
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
            if (self.isActive) setActive(section.id);
          },
        });
      });

      if (reduced) {
        gsap.set(".reveal, .split .w, .hero-spot", { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      root.querySelectorAll<HTMLElement>(".split").forEach(splitTitle);

      gsap.from(".hero .w", {
        y: 40,
        opacity: 0,
        stagger: 0.045,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.12,
      });
      gsap.from(".hero .body-lg, .hero__meta, .scroll-cue", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.35,
      });

      const spot = root.querySelector<HTMLElement>(".hero-spot");
      if (spot) {
        gsap.fromTo(
          spot,
          { scale: 1.15, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      ScrollTrigger.batch(".reveal", {
        start: "top 82%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: "power3.out", overwrite: "auto" },
          ),
      });

      root.querySelectorAll<HTMLElement>("h2.split").forEach((title) => {
        const words = title.querySelectorAll(".w");
        if (!words.length) return;
        gsap.from(words, {
          y: 28,
          opacity: 0,
          stagger: 0.05,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: title, start: "top 80%" },
        });
      });

      const pinOk = window.innerWidth >= 768;
      const moodPin = root.querySelector<HTMLElement>(".mood-pin");
      const moodTrack = root.querySelector<HTMLElement>(".mood-track");
      if (pinOk && moodPin && moodTrack) {
        gsap.to(moodTrack, {
          x: () => -(moodTrack.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: moodPin,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: () => `+=${Math.max(moodTrack.scrollWidth - window.innerWidth, 700)}`,
            invalidateOnRefresh: true,
          },
        });
      }

      const actsPin = root.querySelector<HTMLElement>(".acts-pin");
      const actsTrack = root.querySelector<HTMLElement>(".acts-track");
      if (pinOk && actsPin && actsTrack) {
        gsap.to(actsTrack, {
          x: () => -(actsTrack.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: actsPin,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            end: () => `+=${Math.max(actsTrack.scrollWidth - window.innerWidth, 900)}`,
            invalidateOnRefresh: true,
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
