import { Hero } from "@/components/sections/Hero";
import { WhatItDoes } from "@/components/sections/WhatItDoes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { OutputPreview } from "@/components/sections/OutputPreview";
import { QuickStart } from "@/components/sections/QuickStart";
import { OpenSourceCTA } from "@/components/sections/OpenSourceCTA";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Rollberry",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS, Linux, Windows",
      description:
        "An open-source CLI and Node API for real-browser captures and project-driven renders with structured sidecar artifacts.",
      url: "https://co-r-e.github.io/rollberry-docs",
      downloadUrl: "https://www.npmjs.com/package/rollberry",
      softwareVersion: SITE.version.replace(/^v/, ""),
      license: "https://opensource.org/licenses/MIT",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "CORe Inc.",
        url: "https://co-r-e.com",
      },
    },
    {
      "@type": "WebSite",
      name: "Rollberry",
      url: "https://co-r-e.github.io/rollberry-docs",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
