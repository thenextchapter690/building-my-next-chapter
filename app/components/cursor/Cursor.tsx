"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, { stiffness: 420, damping: 34, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 420, damping: 34, mass: 0.45 });
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setHover(Boolean(target));
      setText(target?.dataset.cursor ?? "");
    };
    const out = (event: PointerEvent) => {
      const next = event.relatedTarget as HTMLElement | null;
      if (!next?.closest("[data-cursor]")) {
        setHover(false);
        setText("");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ width: hover ? 82 : 18, height: hover ? 82 : 18, opacity: 1 }}
      transition={{ type: "spring", stiffness: 360, damping: 30 }}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/45 text-[10px] font-semibold tracking-wide text-neutral-800 shadow-[0_4px_24px_rgba(90,57,76,0.14)] backdrop-blur-md"
    >
      {text}
    </motion.div>
  );
}
