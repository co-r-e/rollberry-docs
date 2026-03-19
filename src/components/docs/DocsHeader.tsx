import { DocsLogo } from "./DocsLogo";
import { DocsHeaderWrapper } from "./DocsHeaderWrapper";

export function DocsHeader() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-4 backdrop-blur-md"
      style={{
        height: "var(--docs-header-height)",
        background: "color-mix(in srgb, var(--docs-bg) 85%, transparent)",
        borderBottom: "1px solid var(--docs-border)",
      }}
    >
      <DocsLogo />
      <DocsHeaderWrapper />
    </header>
  );
}
