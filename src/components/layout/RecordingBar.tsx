"use client";

import { motion } from "motion/react";
import { useScrollTimecode } from "@/hooks/useScrollTimecode";
import { RollberryLogo } from "@/components/icons/RollberryLogo";

export function RecordingBar() {
  const { timecode, progress } = useScrollTimecode();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <RollberryLogo className="h-5 w-5 text-primary" />
          <span className="font-bold text-sm text-text">Rollberry</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full bg-primary"
              style={{ animation: "blink 1.2s ease-in-out infinite" }}
            />
            <span className="text-xs font-medium text-primary">REC</span>
          </div>
          <span className="font-mono text-xs text-text-secondary hidden sm:inline">
            {timecode}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 w-full bg-neutral-100">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </header>
  );
}
