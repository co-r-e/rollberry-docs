"use client";

import { motion } from "motion/react";
import { useScrollTimecode } from "@/hooks/useScrollTimecode";
import { RollberryLogo } from "@/components/icons/RollberryLogo";

export function RecordingBar() {
  const { progress } = useScrollTimecode();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-3">
        <RollberryLogo className="h-7 w-auto" />
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
