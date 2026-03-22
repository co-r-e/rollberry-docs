"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { QUICK_START_COMMANDS } from "@/lib/constants";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

function CopyButton({ text }: { text: string }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      onClick={() => copy(text)}
      className="absolute right-4 top-4 rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-400 opacity-0 transition-opacity hover:bg-neutral-700 hover:text-white group-hover:opacity-100"
      aria-label="Copy to clipboard"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function QuickStart() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allCommands = QUICK_START_COMMANDS.map(
    (c) => `# ${c.comment}\n${c.command}`
  ).join("\n\n");

  return (
    <section
      ref={ref}
      id="quick-start"
      className="relative px-6 py-20 md:py-28 lg:py-32 bg-code-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Quick Start
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Copy, paste, capture, or render.
          </p>
        </div>

        <div className="group relative mt-12">
          <CopyButton text={allCommands} />
          <pre className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900 p-6 font-mono text-sm leading-loose text-neutral-300">
            {QUICK_START_COMMANDS.map((cmd, i) => (
              <div key={i} className={i > 0 ? "mt-4" : ""}>
                <span className="text-neutral-500"># {cmd.comment}</span>
                {"\n"}
                <span className="text-green-400">$ </span>
                <span className="text-white">{cmd.command}</span>
              </div>
            ))}
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
