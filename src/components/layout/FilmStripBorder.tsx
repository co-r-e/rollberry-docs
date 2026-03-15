"use client";

import { useEffect, useState } from "react";

function SprocketHoles({ side }: { side: "left" | "right" }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onScroll() {
      if (prefersReduced) return;
      setOffset(window.scrollY * 0.3);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const holes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div
      className={`fixed top-0 ${side === "left" ? "left-0" : "right-0"} z-40 hidden h-screen w-8 lg:block pointer-events-none`}
    >
      <svg
        width="32"
        height="3600"
        viewBox="0 0 32 3600"
        className="text-neutral-200"
        style={{ transform: `translateY(-${offset % 60}px)` }}
        aria-hidden="true"
      >
        {holes.map((i) => (
          <rect
            key={i}
            x="10"
            y={i * 60 + 10}
            width="12"
            height="8"
            rx="2"
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
}

export function FilmStripBorder() {
  return (
    <>
      <SprocketHoles side="left" />
      <SprocketHoles side="right" />
    </>
  );
}
