"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-full border border-pink-200 p-2 transition hover:bg-pink-50"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
