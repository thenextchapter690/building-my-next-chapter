"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black">

      <div className="animate-bounce text-6xl">
        🌸
      </div>

      <h1 className="mt-8 text-3xl font-bold">
        Building My Next Chapter
      </h1>

      <p className="mt-3 text-neutral-500">
        Loading...
      </p>

    </div>
  );
}