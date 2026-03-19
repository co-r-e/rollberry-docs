import { Hero } from "@/components/sections/Hero";
import { WhatItDoes } from "@/components/sections/WhatItDoes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { OutputPreview } from "@/components/sections/OutputPreview";
import { QuickStart } from "@/components/sections/QuickStart";
import { OpenSourceCTA } from "@/components/sections/OpenSourceCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItDoes />
      <HowItWorks />
      <Features />
      <OutputPreview />
      <QuickStart />
      <OpenSourceCTA />
      <Footer />
    </>
  );
}
