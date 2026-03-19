import { DocsThemeProvider } from "@/components/docs/DocsThemeProvider";
import { SearchProvider } from "@/components/docs/SearchProvider";
import { SearchModal } from "@/components/docs/SearchModal";
import { SkipToContent } from "@/components/docs/SkipToContent";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DocsThemeProvider>
      <SearchProvider>
        <div className="docs-root" style={{ background: "var(--docs-bg)", color: "var(--docs-text)", minHeight: "100vh" }}>
          <SkipToContent />
          <SearchModal />
          {children}
        </div>
      </SearchProvider>
    </DocsThemeProvider>
  );
}
