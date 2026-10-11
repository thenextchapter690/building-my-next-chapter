"use client";

import { motion } from "framer-motion";

const focus = [
  {
    emoji: "🚀",
    title: "Building Labello",
    desc: "Creating an AI learning platform.",
  },
  {
    emoji: "📚",
    title: "Preparing for Boards",
    desc: "Balancing school with startup life.",
  },
  {
    emoji: "🤖",
    title: "Learning Flutter & AI",
    desc: "Building real products every week.",
  },
  {
    emoji: "🌱",
    title: "Growing Tech Nest",
    desc: "Helping students build together.",
  },
];

export default function CurrentFocus() {
  return (
    <section className="container py-28">
      <p className="tracking-[0.3em] uppercase text-pink-500 text-sm">
        Current Focus
      </p>

      <h2 className="heading mt-4 text-6xl">
        What I'm working on.
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {focus.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-neutral-200 bg-white p-8"
          >
            <div className="mb-4 text-4xl">
              {item.emoji}
            </div>

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-neutral-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}