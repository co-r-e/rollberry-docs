"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BentoCard } from "@/components/ui/BentoCard";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <SectionWrapper id="features" alternate>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Everything you need
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Powerful defaults, fully configurable when you need it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[140px]">
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
