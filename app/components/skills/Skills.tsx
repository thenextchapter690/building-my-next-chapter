"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["Dart", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["Flutter", "Next.js", "React"],
  },
  {
    title: "Tools",
    items: ["Firebase", "Git", "VS Code", "Figma", "Cursor AI"],
  },
];

export default function Skills() {
  return (
    <section className="container py-28">
      <p className="tracking-[0.3em] uppercase text-pink-500 text-sm">
        Toolkit
      </p>

      <h2 className="heading mt-4 text-6xl">
        Tools I use.
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pink-50 px-4 py-2 text-sm text-pink-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}