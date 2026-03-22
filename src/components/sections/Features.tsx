"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BentoCard } from "@/components/ui/BentoCard";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <SectionWrapper id="features" alternate>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Built for real capture workflows
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          One-off URLs, scripted scenes, and artifacts you can automate
          against.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)]">
        {FEATURES.map((feature, i) => (
          <BentoCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            size={feature.size}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
