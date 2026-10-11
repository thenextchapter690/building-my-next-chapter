"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const socials = [
  {
    title: "GitHub",
    description: "Explore my projects and open-source work.",
    link: "https://github.com/thenextchapter690",
  },
  {
    title: "Discord • Tech Nest",
    description: "Join my community of students and builders.",
    link: "https://discord.gg/WxGCYwrDJJ",
  },
  {
    title: "Instagram",
    description: "Follow my startup journey.",
    link: "https://instagram.com/thenext.chapter._",
  },
  {
    title: "Email",
    description: "Email contact details coming soon.",
  },
  {
    title: "LinkedIn",
    description: "Coming soon.",
    link: "https://www.linkedin.com/in/sam-iya-17327543a/",
  },
];

export default function Social() {
  return (
    <section
      id="connect"
      className="container mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-pink-500">
          Connect
        </p>

        <h2 className="heading mt-4 text-6xl">
          Let&apos;s build together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          Whether it&apos;s startups, AI, coding or simply sharing ideas,
          I&apos;d love to connect.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {socials.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target={item.link ? "_blank" : undefined}
            rel={item.link ? "noopener noreferrer" : undefined}
            aria-disabled={!item.link || undefined}
            tabIndex={item.link ? undefined : -1}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={item.link ? {
              y: -4,
              transition: { type: "spring", stiffness: 320, damping: 26 },
            } : undefined}
            className="social-card group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
              {item.title === "Email" ? (
                <Mail size={28} />
              ) : (
                <Globe size={28} />
              )}
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-neutral-600">
              {item.description}
            </p>

            <div className="mt-8 flex items-center font-medium text-pink-600">
              {item.link ? "Open" : "Coming soon"}
              {item.link && (
                <ArrowUpRight
                  className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
