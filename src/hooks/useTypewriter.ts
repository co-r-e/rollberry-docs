"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(
  text: string,
  speed = 50,
  startDelay = 500,
  shouldStart = true
) {
  const runKey = `${text}\u0000${speed}\u0000${startDelay}\u0000${shouldStart}`;
  const [state, setState] = useState({
    displayed: "",
    done: false,
    runKey,
  });
  const indexRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) return;

    indexRef.current = 0;

    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current++;
        if (indexRef.current > text.length) {
          clearInterval(interval);
          setState({
            displayed: text,
            done: true,
            runKey,
          });
          return;
        }
        setState({
          displayed: text.slice(0, indexRef.current),
          done: false,
          runKey,
        });
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(delayTimer);
  }, [runKey, text, speed, startDelay, shouldStart]);

  if (state.runKey !== runKey) {
    return { displayed: "", done: false };
  }

  return { displayed: state.displayed, done: state.done };
}
