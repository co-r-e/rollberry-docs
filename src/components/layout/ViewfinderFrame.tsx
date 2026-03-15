"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ViewfinderFrameProps {
  children: React.ReactNode;
  className?: string;
}

function Corner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const rotations = { tl: "", tr: "rotate(90deg)", bl: "rotate(-90deg)", br: "rotate(180deg)" };
  const positions = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  };

  return (
    <div className={`absolute ${positions[position]} w-6 h-6`} style={{ transform: rotations[position] }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M0 20V0H20" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
      </svg>
    </div>
  );
}

export function ViewfinderFrame({ children, className = "" }: ViewfinderFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-4 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Corner position="tl" />
        <Corner position="tr" />
        <Corner position="bl" />
        <Corner position="br" />
      </motion.div>
      {children}
    </motion.div>
  );
}
