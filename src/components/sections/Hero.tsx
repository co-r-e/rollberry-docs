"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { FloatingLogos } from "@/components/decorations/FloatingLogos";
import { SITE } from "@/lib/constants";

function MockCapture() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative mx-auto mt-16 w-full max-w-2xl"
    >
      <div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-neutral-400 border border-neutral-200">
            https://your-awesome-site.com
          </div>
        </div>

        {/* Viewport */}
        <div className="relative h-64 overflow-hidden bg-white sm:h-72">
          {/* REC overlay */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 backdrop-blur-sm">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              style={{ animation: "blink 1.2s ease-in-out infinite" }}
            />
            <span className="text-[10px] font-mono font-medium text-white">
              REC
            </span>
          </div>

          <motion.div
            className="absolute top-3 right-3 z-10 rounded-md bg-black/70 px-2 py-1 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[10px] font-mono text-white">
              Capturing...
            </span>
          </motion.div>

          {/* Infinite scrolling mock page — two copies for seamless loop */}
          <motion.div
            animate={{ y: [0, "-50%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="p-6"
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="pb-6">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 w-28 rounded bg-neutral-800" />
                  <div className="flex gap-3">
                    <div className="h-3 w-12 rounded bg-neutral-200" />
                    <div className="h-3 w-12 rounded bg-neutral-200" />
                    <div className="h-3 w-12 rounded bg-neutral-200" />
                  </div>
                </div>
                {/* Mock hero area */}
                <div className="mb-6 rounded-lg bg-primary-50 p-6">
                  <div className="h-5 w-48 rounded bg-primary/20 mb-3" />
                  <div className="h-3 w-64 rounded bg-primary/10 mb-2" />
                  <div className="h-3 w-40 rounded bg-primary/10 mb-4" />
                  <div className="h-8 w-24 rounded-md bg-primary/20" />
                </div>
                {/* Mock cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg bg-neutral-50 p-4 border border-neutral-100">
                    <div className="h-8 w-8 rounded bg-neutral-200 mb-3" />
                    <div className="h-3 w-full rounded bg-neutral-200 mb-2" />
                    <div className="h-3 w-4/5 rounded bg-neutral-100" />
                  </div>
                  <div className="rounded-lg bg-neutral-50 p-4 border border-neutral-100">
                    <div className="h-8 w-8 rounded bg-neutral-200 mb-3" />
                    <div className="h-3 w-full rounded bg-neutral-200 mb-2" />
                    <div className="h-3 w-3/5 rounded bg-neutral-100" />
                  </div>
                  <div className="rounded-lg bg-neutral-50 p-4 border border-neutral-100">
                    <div className="h-8 w-8 rounded bg-neutral-200 mb-3" />
                    <div className="h-3 w-full rounded bg-neutral-200 mb-2" />
                    <div className="h-3 w-4/5 rounded bg-neutral-100" />
                  </div>
                </div>
                {/* Mock text */}
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full rounded bg-neutral-200" />
                  <div className="h-3 w-11/12 rounded bg-neutral-200" />
                  <div className="h-3 w-4/5 rounded bg-neutral-200" />
                  <div className="h-3 w-full rounded bg-neutral-200" />
                  <div className="h-3 w-3/5 rounded bg-neutral-100" />
                </div>
                {/* Mock image */}
                <div className="h-32 w-full rounded-lg bg-neutral-100 mb-6" />
                {/* Mock footer */}
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-neutral-200" />
                  <div className="h-3 w-3/4 rounded bg-neutral-200" />
                  <div className="h-3 w-5/6 rounded bg-neutral-100" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scan line */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-px bg-primary/40"
            animate={{ top: ["0%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Progress bar */}
        <div className="border-t border-neutral-100 bg-neutral-50 px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-neutral-400">
              Scrolling
            </span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-200">
              <motion.div
                className="h-full rounded-full bg-primary"
                animate={{ width: ["0%", "100%"] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              100%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrustBar() {
  const items = ["Zero install", "Real browser", "Open source"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
    >
      {items.map((label, i) => (
        <div
          key={label}
          className="flex items-center gap-2 text-sm text-white/70"
        >
          {i > 0 && (
            <span className="mr-2 h-1 w-1 rounded-full bg-white/30" />
          )}
          {label}
        </div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-24 bg-primary">
      <FloatingLogos />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Turn any web page into a{" "}
          <span className="text-white/80">smooth scroll video</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            variant="custom"
            href="#quick-start"
            className="bg-white text-primary hover:bg-white/90 active:bg-white/80"
          >
            Get Started
          </Button>
          <Button
            variant="custom"
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white hover:bg-white/10 active:bg-white/20 bg-transparent"
          >
            <GitHubIcon className="h-5 w-5" />
            View on GitHub
          </Button>
        </motion.div>

        <MockCapture />
        <TrustBar />
      </div>
    </section>
  );
}
