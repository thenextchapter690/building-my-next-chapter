"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;

      setHover(true);

      if (target.dataset.cursor) {
        setText(target.dataset.cursor);
      } else {
        setText("");
      }
    };

    const leave = () => {
      setHover(false);
      setText("");
    };

    window.addEventListener("mousemove", move);

    const items = document.querySelectorAll("[data-cursor]");

    items.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      items.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        width: hover ? 90 : 18,
        height: hover ? 90 : 18,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
      }}
     className="pointer-events-none fixed left-0 top-0 z-[9999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-pink-300/70 bg-pink-300/30 backdrop-blur-xl shadow-[0_0_30px_rgba(236,72,153,0.25)]"
    >
     <span className="text-[11px] font-semibold text-pink-700">
       {text}
     </span>
    </motion.div>
  );
}