"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

function StepConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="hidden items-center md:flex">
      <svg width="80" height="2" className="text-primary/30" aria-hidden="true">
        <motion.line
          x1="0"
          y1="1"
          x2="80"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          From one-off captures to repeatable multi-output renders.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <div key={step.number} className="flex items-center gap-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex w-64 flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-bold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
            {i < HOW_IT_WORKS_STEPS.length - 1 && <StepConnector />}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
