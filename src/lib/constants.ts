export const SITE = {
  name: "Rollberry",
  tagline: "Turn any web page into a smooth scroll video",
  description:
    "A zero-install CLI that captures full-page scrolling videos using a real browser.",
  version: "v0.1.3",
  license: "MIT License",
  github: "https://github.com/co-r-e/rollberry",
  npm: "https://www.npmjs.com/package/rollberry",
  company: {
    name: "CORe Inc.",
    url: "https://co-r-e.com",
  },
} as const;

export const NAV_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Quick Start", href: "#quick-start" },
    { label: "GitHub", href: SITE.github, external: true },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "npm", href: SITE.npm, external: true },
    { label: "Changelog", href: `${SITE.github}/releases`, external: true },
  ],
  company: [
    { label: "CORe Inc.", href: SITE.company.url, external: true },
  ],
} as const;

export const FEATURES = [
  {
    title: "Real Browser Rendering",
    description:
      "Uses a real Chromium browser via Playwright — no headless hacks. What you see is what you capture.",
    size: "large" as const,
  },
  {
    title: "Localhost Support",
    description:
      "Capture your local dev server with automatic retry and wait-for-ready logic.",
    size: "medium" as const,
  },
  {
    title: "Custom Viewport",
    description: "Set any resolution — mobile, tablet, desktop, or ultra-wide.",
    size: "medium" as const,
  },
  {
    title: "Smooth Scrolling",
    description:
      "Hardware-accelerated smooth scrolling for buttery-smooth capture output.",
    size: "small" as const,
  },
  {
    title: "FPS Config",
    description:
      "Control frame rate from 1 to 60 fps for the perfect size-quality balance.",
    size: "small" as const,
  },
  {
    title: "Wait Conditions",
    description:
      "Wait for selectors, network idle, or custom timeouts before capturing.",
    size: "small" as const,
  },
  {
    title: "Hide Overlays",
    description:
      "Automatically hide cookie banners, sticky headers, and floating elements.",
    size: "small" as const,
  },
  {
    title: "Debug Frames",
    description:
      "Export individual frames as PNGs for frame-by-frame inspection.",
    size: "small" as const,
  },
  {
    title: "JSONL Logs",
    description:
      "Structured logging output for CI/CD integration and pipeline automation.",
    size: "small" as const,
  },
] as const;

export const QUICK_START_COMMANDS = [
  {
    comment: "Capture any public URL",
    command: "npx rollberry capture https://your-site.com",
  },
  {
    comment: "Capture localhost with auto-retry",
    command: "npx rollberry capture http://localhost:3000",
  },
  {
    comment: "Custom viewport and duration",
    command:
      "npx rollberry capture https://example.com --viewport 1920x1080 --duration 10",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Run",
    description: "Execute a single npx command with any URL — no install required.",
  },
  {
    number: 2,
    title: "Capture",
    description:
      "Rollberry launches a real browser, scrolls the page smoothly, and captures every frame.",
  },
  {
    number: 3,
    title: "Share",
    description:
      "Get an MP4 video file ready to share, embed, or use in your workflow.",
  },
] as const;
