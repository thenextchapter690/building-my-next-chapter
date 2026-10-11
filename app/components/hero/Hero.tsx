"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {

  return (

    <section className="container flex min-h-screen items-center pt-28">

      <div className="grid items-center gap-20 lg:grid-cols-2">

        <motion.div

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: .8 }}

        >

          <p className="mb-6 uppercase tracking-[.45em] text-sm text-neutral-500">

            Student • Builder • Founder

          </p>

          <h1 className="heading text-6xl leading-[.9] md:text-8xl">

            Building my

            <br />

            <span className="text-[var(--accent)]">

              next chapter.

            </span>

          </h1>

          <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-600">

            Hi, I'm Samiya.

            I'm a 16-year-old student from India building AI products,
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

            <img

              src="/labello-placeholder.png"

              alt="Labello"

              className="rounded-[30px]"

            />

          </div>

        </motion.div>

      </div>

    </section>

  );

}