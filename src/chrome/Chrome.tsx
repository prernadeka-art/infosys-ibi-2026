import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const NAV = [
  { id: "brief", label: "Brief" },
  { id: "buildup", label: "Build-up" },
  { id: "tank", label: "Tank" },
  { id: "floor", label: "Floor" },
  { id: "voices", label: "Voices" },
  { id: "close", label: "Close" },
];

function jump(id: string, reduced: boolean) {
  document.getElementById(id)?.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
  history.replaceState(null, "", `#${id}`);
}

export function Progress() {
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" id="progressBar" />
    </div>
  );
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
        <button type="button" className="brand-mark" onClick={() => jump("arrival", reduced)}>
          IBI<span>2026</span>
        </button>
        <nav>
          <ul className="topbar__nav">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={active === item.id ? "is-active" : ""}
                  onClick={() => go(item.id)}
                >
                  {item.label}
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
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
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
