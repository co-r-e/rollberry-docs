"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { useTypewriter } from "@/hooks/useTypewriter";

const COMMAND = "npx rollberry render ./rollberry.project.json --output desktop";
const OUTPUT_LINES = [
  { text: "Rollberry v0.1.9", color: "text-primary" },
  { text: "Loading project: rollberry.project.json", color: "text-neutral-400" },
  { text: "Capturing scene 1/2 in real Chromium", color: "text-neutral-400" },
  { text: "Composing desktop.mp4 with FFmpeg", color: "text-neutral-400" },
  { text: "Writing desktop.manifest.json", color: "text-green-400" },
  { text: "Writing desktop.log.jsonl", color: "text-green-400" },
  {
    text: "Done! → artifacts/demo-desktop.mp4",
    color: "text-green-400 font-semibold",
  },
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
