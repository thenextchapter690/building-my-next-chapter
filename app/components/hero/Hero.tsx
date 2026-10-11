"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {

  return (

    <section className="hero-section container flex min-h-screen items-center pt-28">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

        >

          <p className="mb-6 uppercase tracking-[.32em] text-xs font-semibold text-neutral-500">

            Student • Builder • Founder

          </p>

          <h1 className="heading max-w-3xl text-[clamp(4rem,8vw,7.5rem)] leading-[.88]">

            Building my

            <br />

            <span className="text-[var(--accent)]">

              next chapter.

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-[17px] leading-8 text-neutral-600 md:text-lg">

            Hi, I&apos;m Samiya.

            I&apos;m a 16-year-old student from India building AI products,
            documenting the journey, and turning ideas into real projects.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="button button-primary"
            >

              Explore Projects

              <ArrowRight
                size={18}
                className="ml-2"
              />

            </a>

            <a

              href="https://www.linkedin.com/in/sam-iya-17327543a/"

              target="_blank"

              rel="noopener noreferrer"

              data-cursor="Connect"

              className="button button-outline"

            >

              LinkedIn

            </a>

          </div>

        </motion.div>

        <motion.div

          animate={{
            y: [0, -12, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 5,
          }}

        >

          <div className="glass rounded-[40px] p-5">

            <Image
              src="/project/labello.png"
              alt="Preview of Labello, an AI learning platform"
              width={1600}
              height={1000}
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hero-preview rounded-[30px] object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>

  );

}
