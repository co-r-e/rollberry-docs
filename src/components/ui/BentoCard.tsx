"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BentoCardProps {
  title: string;
  description: string;
  size: "large" | "medium" | "small";
  index: number;
}

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export function BentoCard({ title, description, size, index }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group rounded-2xl border border-neutral-200 bg-surface p-6 transition-shadow hover:shadow-lg ${sizeClasses[size]} ${size === "large" ? "flex flex-col justify-between" : ""}`}
    >
      <div>
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary font-bold text-sm">
          {title.charAt(0)}
        </div>
        <h3
          className={`font-bold text-text ${size === "large" ? "text-xl mb-3" : "text-base mb-2"}`}
        >
          {title}
        </h3>
        <p
          className={`text-text-secondary leading-relaxed ${size === "large" ? "text-base" : "text-sm"}`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
