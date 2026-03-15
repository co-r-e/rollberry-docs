"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RollberryLogo } from "@/components/icons/RollberryLogo";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { SITE } from "@/lib/constants";

function FrameCard({ delay, rotate, x }: { delay: number; rotate: number; x: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 5, x }}
      animate={{ opacity: 1, y: 0, rotate, x }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="absolute h-28 w-20 rounded-lg border-2 border-primary/20 bg-white shadow-lg sm:h-36 sm:w-24"
    >
      <div className="flex h-full flex-col items-center justify-center gap-1">
        <div className="h-2 w-10 rounded bg-neutral-200 sm:w-14" />
        <div className="h-2 w-8 rounded bg-neutral-100 sm:w-10" />
        <div className="h-2 w-12 rounded bg-neutral-200 sm:w-16" />
        <div className="mt-2 h-6 w-14 rounded bg-primary-50 sm:w-18" />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200, 16, 46, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Falling frame cards */}
      <div className="absolute inset-0 flex items-center justify-center -z-5 pointer-events-none">
        <div className="relative h-80 w-80 sm:h-96 sm:w-96">
          <FrameCard delay={0.2} rotate={-12} x={-80} />
          <FrameCard delay={0.4} rotate={6} x={80} />
          <FrameCard delay={0.6} rotate={-3} x={0} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RollberryLogo className="mb-6 h-12 w-12 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge>
            {SITE.version} &middot; {SITE.license}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl"
        >
          Turn any web page into a{" "}
          <span className="text-primary">smooth scroll video</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#quick-start">Get Started</Button>
          <Button
            variant="outline"
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-5 w-5" />
            View on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
