import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { META, NAV } from "../story/data";

function jump(id: string, reduced: boolean) {
  document.getElementById(id)?.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
  history.replaceState(null, "", `#${id}`);
}

export function Progress() {
  return <div className="progress" id="progressBar" aria-hidden="true" />;
}

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function Nav({ active, reduced }: { active: string; reduced: boolean }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    jump(id, reduced);
    setOpen(false);
  };

  return (
    <>
      <header className="topbar">
        <button type="button" className="brand-mark" onClick={() => jump("hero", reduced)}>
          <span className="brand-mark__ibi">IBI</span>
          <span className="brand-mark__year">2026</span>
        </button>
        <nav>
          <ul className="topbar__nav">
            {NAV.slice(0, 7).map((item) => (
              <li key={item.id}>
                <button type="button" className={active === item.id ? "is-active" : ""} onClick={() => go(item.id)}>
                  {item.label}
                  {active === item.id ? <motion.span layoutId="nav-line" className="nav-line" /> : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile"
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {NAV.map((item) => (
              <button key={item.id} type="button" onClick={() => go(item.id)}>
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export function SideDots({ active, reduced }: { active: string; reduced: boolean }) {
  return (
    <nav className="side-nav" aria-label="Sections">
      {NAV.map((item) => (
        <button
          key={item.id}
          type="button"
          className={active === item.id ? "is-active" : ""}
          onClick={() => jump(item.id, reduced)}
          aria-label={item.label}
        >
          <span className="tip">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export function BackTop({ reduced }: { reduced: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className="back-top"
      type="button"
      hidden={!show}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
    >
      ↑
    </button>
  );
}

export function SectionHead({
  kicker,
  title,
  lead,
}: {
  kicker?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="section-head reveal">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="split">{title}</h2>
      {lead ? <p className="body-lg">{lead}</p> : null}
      <p className="sr-only">{META.title}</p>
    </header>
  );
}
