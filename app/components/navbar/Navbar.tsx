"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="container mt-6 flex items-center justify-between rounded-full border border-neutral-200 bg-white/70 px-8 py-4 backdrop-blur-xl">
        <a href="#" className="heading text-2xl">
          the<span className="text-[var(--accent)]">nextchapter</span>
        </a>

        <div className="hidden gap-10 text-[15px] md:flex">

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Toolkit</a>

          <a href="#interests">Beyond</a>

        </div>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="https://github.com/thenextchapter690"
            target="_blank"
            className="rounded-full border px-5 py-2 text-sm transition hover:bg-black hover:text-white"
          >
            GitHub
          </a>

        </div>

      </nav>
    </header>
  );
}