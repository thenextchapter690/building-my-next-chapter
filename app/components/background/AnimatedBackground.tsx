"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -50, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="ambient-orb ambient-orb-rose absolute left-20 top-20 h-72 w-72 rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="ambient-orb ambient-orb-lavender absolute right-20 bottom-20 h-96 w-96 rounded-full"
      />

    </div>
  );
}
