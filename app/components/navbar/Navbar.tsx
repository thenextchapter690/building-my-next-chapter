"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <nav className="container">

        <div className="glass mt-6 flex items-center justify-between rounded-full px-7 py-4">

          <Link
            href="/"
            className="heading text-2xl tracking-tight"
          >
            the
            <span className="text-[var(--accent)]">
              nextchapter
            </span>
          </Link>

          <div className="hidden items-center gap-10 text-[15px] md:flex">

            <a href="#about">About</a>

            <a href="#projects">Projects</a>

            <a href="#journey">Journey</a>

            <a href="#connect">Connect</a>

          </div>

          <div className="flex items-center gap-3">

            <ThemeToggle />

            <a
              href="https://github.com/thenextchapter690"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GitHub"
              className="button button-primary"
            >
              GitHub
            </a>

          </div>

        </div>

      </nav>

    </header>
  );
}
