"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ViewfinderFrame } from "@/components/layout/ViewfinderFrame";

const MANIFEST_JSON = `{
  "url": "https://example.com",
  "viewport": "1280x720",
  "fps": 30,
  "duration": "8.4s",
  "frames": 252,
  "output": "capture.mp4",
  "size": "4.2MB"
}`;

export function OutputPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="output-preview">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          See the output
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          A polished MP4 video with structured metadata.
        </p>
      </div>

      <div ref={ref} className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        {/* Mock video player */}
        <ViewfinderFrame>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
          >
            {/* Player chrome */}
            <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 relative flex items-center justify-center">
              {/* Simulated page content scrolling */}
              <div className="absolute inset-4 overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <motion.div
                  animate={isInView ? { y: [0, -120, 0] } : { y: 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="p-4"
                >
                  <div className="h-3 w-24 rounded bg-primary/20 mb-3" />
                  <div className="h-2 w-full rounded bg-neutral-200 mb-2" />
                  <div className="h-2 w-5/6 rounded bg-neutral-200 mb-2" />
                  <div className="h-2 w-4/6 rounded bg-neutral-200 mb-4" />
                  <div className="h-16 w-full rounded bg-primary-50 mb-4" />
                  <div className="h-2 w-full rounded bg-neutral-200 mb-2" />
                  <div className="h-2 w-5/6 rounded bg-neutral-200 mb-2" />
                  <div className="h-2 w-3/6 rounded bg-neutral-200 mb-4" />
                  <div className="h-12 w-full rounded bg-neutral-100 mb-4" />
                  <div className="h-2 w-full rounded bg-neutral-200 mb-2" />
                  <div className="h-2 w-4/6 rounded bg-neutral-200 mb-2" />
                </motion.div>
              </div>

              {/* REC indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded bg-black/60 px-2 py-1">
                <span
                  className="h-2 w-2 rounded-full bg-primary"
                  style={{ animation: "blink 1.2s ease-in-out infinite" }}
                />
                <span className="text-[10px] font-mono text-white">REC 00:04:12</span>
              </div>
            </div>

            {/* Player controls */}
            <div className="flex items-center gap-3 border-t border-neutral-200 px-4 py-2.5">
              <button className="text-primary" aria-label="Play">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 2L13 8L3 14V2Z" />
                </svg>
              </button>
              <div className="h-1 flex-1 rounded-full bg-neutral-200">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  animate={isInView ? { width: ["0%", "100%"] } : { width: "0%" }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
              </div>
              <span className="text-xs font-mono text-text-secondary">0:08</span>
            </div>
          </motion.div>
        </ViewfinderFrame>

        {/* Manifest JSON */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-3 text-sm font-medium text-text-secondary">
            manifest.json
          </p>
          <pre className="overflow-x-auto rounded-xl border border-neutral-800 bg-code-bg p-5 font-mono text-sm leading-relaxed text-neutral-300">
            <code>{MANIFEST_JSON}</code>
          </pre>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
