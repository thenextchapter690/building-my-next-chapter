"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener("theme-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("theme-change", onChange);
    window.removeEventListener("storage", onChange);
  };
};

const getThemeSnapshot = () => document.documentElement.classList.contains("dark");
const getServerThemeSnapshot = () => false;

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    let savedTheme = "light";
    try {
      savedTheme = localStorage.getItem("theme") ?? "light";
    } catch {
      // Keep the default light theme if browser storage is unavailable.
    }

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    window.dispatchEvent(new Event("theme-change"));
  }, []);

  function toggle() {
    const enabled = !dark;
    document.documentElement.classList.toggle("dark", enabled);
    try {
      localStorage.setItem("theme", enabled ? "dark" : "light");
    } catch {
      // The theme remains active for this page view without browser storage.
    }
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105"
    >
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
