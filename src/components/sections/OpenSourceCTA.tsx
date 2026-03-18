"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { FloatingLogos } from "@/components/decorations/FloatingLogos";
import { SITE } from "@/lib/constants";

const ctaIcons = [
  // Left side
  { top: "5%", left: "-3%", size: 150, rotate: -20, opacity: 0.07 },
  { top: "45%", left: "2%", size: 110, rotate: 15, opacity: 0.05 },
  { top: "75%", left: "-2%", size: 130, rotate: 30, opacity: 0.06 },
  // Right side
  { top: "10%", right: "1%", size: 140, rotate: 25, opacity: 0.06 },
  { top: "55%", right: "-2%", size: 120, rotate: -15, opacity: 0.05 },
  { top: "80%", right: "3%", size: 100, rotate: -30, opacity: 0.07 },
];

export function OpenSourceCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-20 md:py-28 lg:py-32"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 50%, var(--primary-900) 100%)",
        }}
      />

      <FloatingLogos icons={ctaIcons} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Built in the open
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/80">
          Rollberry is free, open-source software under the MIT License.
          Contributions, issues, and stars are always welcome.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="custom"
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary hover:bg-white/90 active:bg-white/80"
          >
            <GitHubIcon className="h-5 w-5" />
            Star on GitHub
          </Button>
          <Button
            variant="custom"
            href={SITE.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white hover:bg-white/10 active:bg-white/20 bg-transparent"
          >
            View on npm
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
