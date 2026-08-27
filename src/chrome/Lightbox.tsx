import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

type Box = { src: string; alt: string };
type Ctx = { open: (src: string, alt?: string) => void };

const LightboxCtx = createContext<Ctx | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxCtx);
  if (!ctx) throw new Error("Lightbox missing");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [box, setBox] = useState<Box | null>(null);
  const open = useCallback((src: string, alt = "") => setBox({ src, alt }), []);

  useEffect(() => {
    if (!box) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [box]);

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {box ? (
          <motion.div
            key="lb"
            className="lightbox"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setBox(null)}
          >
            <button className="lightbox__x" type="button" aria-label="Close" onClick={() => setBox(null)}>
              ×
            </button>
            <motion.img
              src={box.src}
              alt={box.alt}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxCtx.Provider>
  );
}

export function Media({
  src,
  alt,
  wide,
  tall,
}: {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
}) {
  const { open } = useLightbox();
  const cls = ["media", wide ? "media--wide" : "", tall ? "media--tall" : ""].filter(Boolean).join(" ");
  return (
    <button className={cls} type="button" onClick={() => open(src, alt)}>
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
}
