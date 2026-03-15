"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollTimecode() {
  const [timecode, setTimecode] = useState("00:00:00");
  const [progress, setProgress] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  const update = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;

    setProgress(ratio);
    setPastHero(scrollTop > window.innerHeight * 0.6);

    const totalSeconds = Math.floor(ratio * 300);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const frames = Math.floor((ratio * 300 - totalSeconds) * 30);
    setTimecode(
      `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  return { timecode, progress, pastHero };
}
