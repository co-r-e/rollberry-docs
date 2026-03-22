"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Terminal } from "@/components/ui/Terminal";
import { TerminalTyper } from "@/components/ui/TerminalTyper";
import { ViewfinderFrame } from "@/components/layout/ViewfinderFrame";

export function WhatItDoes() {
  return (
    <SectionWrapper id="what-it-does" alternate>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            One CLI.{" "}
            <span className="text-primary">Capture or compose.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Rollberry launches a real Chromium browser, captures full-page
            motion with deterministic timing, and composes final outputs with
            FFmpeg. Use{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-primary">
              capture
            </code>{" "}
            for one-off URLs and{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-primary">
              render
            </code>{" "}
            for repeatable project-driven videos.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            That means one pipeline for localhost previews, staged deployments,
            multi-scene product walkthroughs, and machine-readable artifacts
            such as manifests, JSONL logs, and render summaries.
          </p>
        </div>

        <ViewfinderFrame>
          <Terminal title="rollberry">
            <TerminalTyper />
          </Terminal>
        </ViewfinderFrame>
      </div>
    </SectionWrapper>
  );
}
