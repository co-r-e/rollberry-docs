"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(
  text: string,
  speed = 50,
  startDelay = 500,
  shouldStart = true
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) return;

    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current++;
        if (indexRef.current > text.length) {
          clearInterval(interval);
          setDone(true);
          return;
        }
        setDisplayed(text.slice(0, indexRef.current));
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay, shouldStart]);

  return { displayed, done };
}
