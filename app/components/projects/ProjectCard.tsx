"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Props = {
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  button: string;
  link: string;
  reverse?: boolean;
  status?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  image,
  tags,
  button,
  link,
  reverse = false,
  status,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-24"
    >
      <div
        className={`grid items-center gap-16 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="mb-3 text-sm tracking-[0.3em] text-pink-500">
            {number}
          </p>

          <h2 className="heading text-5xl">{title}</h2>

          {status && (
            <span className="mt-4 inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
              {status}
            </span>
          )}

          <p className="mt-6 max-w-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 px-4 py-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            data-cursor="Open"
            className="button button-primary mt-10 inline-flex"
          >
            {button}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <motion.div
          whileHover={{
            scale: 1.03,
            rotate: 1,
          }}
          transition={{ duration: 0.3 }}
          data-cursor="View"
          className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-xl"
        >
          <Image
            src={image}
            alt={title}
            width={1600}
            height={1000}
            className="w-full object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}