export const SITE = {
  name: "Rollberry",
  tagline: "Capture pages. Render launch-ready videos.",
  description:
    "An open-source CLI and Node API for real-browser captures and project-driven renders with structured sidecar artifacts.",
  version: "v0.1.9",
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
    { label: "Artifacts", href: "#output-preview" },
    { label: "Quick Start", href: "#quick-start" },
    { label: "GitHub", href: SITE.github, external: true },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "npm", href: SITE.npm, external: true },
  ],
  company: [
    { label: "CORe Inc.", href: SITE.company.url, external: true },
  ],
} as const;

export const FEATURES = [
  {
    title: "Project-Driven Renders",
    description:
      "Turn one project JSON into desktop and mobile outputs with repeatable scenes, timing, and sidecar artifacts.",
    size: "large" as const,
  },
  {
    title: "Timeline Actions",
    description:
      "Interleave scroll, pause, click, hover, type, and keypress actions inside a scene without leaving JSON.",
    size: "medium" as const,
  },
  {
    title: "MP4 And WebM",
    description:
      "Choose output format per target and tune intermediate and final encoding settings per render output.",
    size: "medium" as const,
  },
  {
    title: "Audio And Subtitles",
    description:
      "Attach looping audio, burn captions into MP4, or ship soft subtitles alongside WebM outputs.",
    size: "small" as const,
  },
  {
    title: "Transitions",
    description:
      "Compose scenes with fade-in or crossfade transitions for cleaner product walkthroughs.",
    size: "small" as const,
  },
  {
    title: "Structured Artifacts",
    description:
      "Every run writes machine-readable manifests and JSONL logs you can archive, diff, and automate against.",
    size: "small" as const,
  },
  {
    title: "Localhost Ready",
    description:
      "Retry logic and localhost HTTPS tolerance make it practical for staging previews and local demos.",
    size: "small" as const,
  },
  {
    title: "Debug Frames",
    description:
      "Export raw PNG frames to inspect timing, overlays, and scene boundaries frame by frame.",
    size: "small" as const,
  },
  {
    title: "Node API",
    description:
      "Use the same capture and render pipeline programmatically from ESM for custom tooling and CI jobs.",
    size: "small" as const,
  },
] as const;

export const QUICK_START_COMMANDS = [
  {
    comment: "Capture localhost with explicit output and wait condition",
    command:
      "npx rollberry capture http://localhost:3000 --out ./artifacts/local.mp4 --wait-for selector:body",
  },
  {
    comment: "Capture multiple URLs into one MP4 with a page gap",
    command:
      "npx rollberry capture https://example.com https://example.com/pricing --page-gap 1.5 --out ./artifacts/site-tour.mp4",
  },
  {
    comment: "Render a project file into all configured outputs",
    command: "npx rollberry render ./rollberry.project.json",
  },
  {
    comment: "Render only the mobile output from the same project",
    command: "npx rollberry render ./rollberry.project.json --output mobile",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Define",
    description:
      "Point Rollberry at one or more URLs, or describe scenes and outputs in a project JSON file.",
  },
  {
    number: 2,
    title: "Render",
    description:
      "Rollberry drives real Chromium, performs actions and scrolling, then composes the final media with FFmpeg.",
  },
  {
    number: 3,
    title: "Ship",
    description:
      "Collect video, manifest, logs, and render summaries that slot directly into product, QA, and release workflows.",
  },
] as const;
