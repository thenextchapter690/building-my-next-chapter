"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggle() {
    const html = document.documentElement;

    html.classList.toggle("dark");

    const enabled = html.classList.contains("dark");

    setDark(enabled);

    localStorage.setItem("theme", enabled ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}