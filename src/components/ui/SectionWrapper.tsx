"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alternate?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative px-6 py-20 md:py-28 lg:py-32 ${alternate ? "bg-primary-50" : "bg-background"} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
