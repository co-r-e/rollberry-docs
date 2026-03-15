"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { useTypewriter } from "@/hooks/useTypewriter";

const COMMAND = "npx rollberry capture https://example.com";
const OUTPUT_LINES = [
  { text: "Rollberry v0.1.3", color: "text-primary" },
  { text: "Launching browser...", color: "text-neutral-400" },
  { text: "Navigating to https://example.com", color: "text-neutral-400" },
  { text: "Page loaded (2.1s)", color: "text-green-400" },
  { text: "Scrolling... 100%", color: "text-green-400" },
  { text: "Encoding MP4 (30fps, 1280x720)", color: "text-neutral-400" },
  { text: "Done! → output/capture.mp4 (4.2MB)", color: "text-green-400 font-semibold" },
];

export function TerminalTyper() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { displayed, done } = useTypewriter(COMMAND, 40, 600, isInView);

  return (
    <div ref={ref}>
      <div className="mb-1">
        <span className="text-green-400">$ </span>
        <span>{displayed}</span>
        {!done && (
          <span className="inline-block w-2 h-4 bg-neutral-300 ml-0.5 align-middle" style={{ animation: "cursor-blink 1s step-end infinite" }} />
        )}
      </div>
      {done && (
        <div className="mt-3 space-y-1">
          {OUTPUT_LINES.map((line, i) => (
            <div key={i} className={line.color}>
              {line.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
