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
            One command.{" "}
            <span className="text-primary">Full-page video.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            Rollberry launches a real Chromium browser, smoothly scrolls through
            your entire page, captures every frame, and encodes it into a
            high-quality MP4 — all from a single{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-primary">
              npx
            </code>{" "}
            command.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            No browser extensions. No screen recording software. No
            dependencies to install. Just point it at a URL and get your video.
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
