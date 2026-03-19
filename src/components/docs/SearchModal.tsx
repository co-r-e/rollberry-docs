"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { create, insert, search } from "@orama/orama";
import { useSearch } from "./SearchProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface SearchDoc {
  slug: string;
  title: string;
  description: string;
  section: string;
  content: string;
}

interface SearchResult {
  slug: string;
  title: string;
  section: string;
  excerpt: string;
}

export function SearchModal() {
  const { isOpen, close } = useSearch();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [isIndexReady, setIsIndexReady] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialize search index on first open
  useEffect(() => {
    if (!isOpen) return;
    if (dbRef.current) {
      setIsIndexReady(true);
      return;
    }

    let cancelled = false;

    async function loadIndex() {
      setLoading(true);
      try {
        const res = await fetch(`${basePath}/docs/search-index.json`);
        const docs: SearchDoc[] = await res.json();

        const db = await create({
          schema: {
            slug: "string",
            title: "string",
            section: "string",
            content: "string",
          } as const,
        });

        for (const doc of docs) {
          await insert(db, doc);
        }

        if (!cancelled) {
          dbRef.current = db;
          setIsIndexReady(true);
        }
      } catch (err) {
        console.error("Failed to load search index:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadIndex();
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      // Small delay for the modal to render
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    } else {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Run search when query changes
  useEffect(() => {
    if (!query.trim() || !dbRef.current || !isIndexReady) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    let cancelled = false;

    async function runSearch() {
      const result = await search(dbRef.current, {
        term: query,
        limit: 20,
        boost: { title: 2 },
      });

      if (cancelled) return;

      const mapped: SearchResult[] = result.hits.map((hit) => {
        const doc = hit.document as unknown as SearchDoc;
        const contentLower = doc.content.toLowerCase();
        const queryLower = query.toLowerCase();
        const idx = contentLower.indexOf(queryLower);
        let excerpt = "";
        if (idx >= 0) {
          const start = Math.max(0, idx - 40);
          const end = Math.min(doc.content.length, idx + query.length + 60);
          excerpt =
            (start > 0 ? "..." : "") +
            doc.content.slice(start, end).trim() +
            (end < doc.content.length ? "..." : "");
        } else {
          excerpt = doc.content.slice(0, 100).trim() + "...";
        }

        return {
          slug: doc.slug,
          title: doc.title,
          section: doc.section,
          excerpt,
        };
      });

      setResults(mapped);
      setSelectedIndex(0);
    }

    runSearch();
    return () => { cancelled = true; };
  }, [isIndexReady, query]);

  const navigate = useCallback(
    (slug: string) => {
      close();
      router.push(`/docs/${slug}`);
    },
    [close, router]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (results.length === 0) return;
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (results.length === 0) return;
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        navigate(results[selectedIndex].slug);
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
    },
    [results, selectedIndex, navigate, close]
  );

  // Scroll selected item into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const selected = list.querySelector<HTMLElement>(
      '[role="option"][aria-selected="true"]',
    );
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Close on click outside
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        close();
      }
    },
    [close]
  );

  if (!isOpen) return null;

  // Group results by section
  const grouped = new Map<string, SearchResult[]>();
  for (const r of results) {
    const section = r.section || "Other";
    if (!grouped.has(section)) grouped.set(section, []);
    grouped.get(section)!.push(r);
  }

  let globalIndex = 0;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Search documentation"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-lg overflow-hidden rounded-xl shadow-2xl"
        style={{
          background: "var(--docs-bg)",
          border: "1px solid var(--docs-border)",
        }}
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div
          className="flex items-center gap-3 px-4"
          style={{ borderBottom: "1px solid var(--docs-border)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: "var(--docs-text-secondary)" }}
            className="shrink-0"
            aria-hidden
          >
            <circle
              cx="7"
              cy="7"
              r="4.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M10.5 10.5L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs..."
            className="flex-1 bg-transparent py-3.5 text-sm outline-none"
            style={{ color: "var(--docs-text)" }}
            aria-label="Search query"
          />
          <kbd
            className="rounded px-1.5 py-0.5 text-[10px] font-medium"
            style={{
              background: "var(--docs-surface)",
              border: "1px solid var(--docs-border)",
              color: "var(--docs-text-secondary)",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="scrollbar-hide max-h-[50vh] overflow-y-auto"
          role="listbox"
        >
          {loading && (
            <div
              className="px-4 py-8 text-center text-sm"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              Loading search index...
            </div>
          )}

          {!loading && query.trim() && results.length === 0 && (
            <div
              className="px-4 py-8 text-center text-sm"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              No results for &ldquo;{query}&rdquo;
            </div>
          )}

          {!loading && !query.trim() && (
            <div
              className="px-4 py-8 text-center text-sm"
              style={{ color: "var(--docs-text-secondary)" }}
            >
              Type to search the documentation
            </div>
          )}

          {!loading &&
            Array.from(grouped.entries()).map(([section, items]) => (
              <div key={section}>
                <div
                  className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--docs-text-secondary)" }}
                >
                  {section}
                </div>
                {items.map((result) => {
                  const idx = globalIndex++;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={result.slug}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => navigate(result.slug)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className="flex w-full flex-col gap-0.5 px-4 py-2.5 text-left transition-colors"
                      style={{
                        background: isSelected
                          ? "var(--docs-accent-muted)"
                          : "transparent",
                      }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{
                          color: isSelected
                            ? "var(--docs-accent)"
                            : "var(--docs-text)",
                        }}
                      >
                        {result.title}
                      </span>
                      <span
                        className="line-clamp-1 text-xs"
                        style={{ color: "var(--docs-text-secondary)" }}
                      >
                        {result.excerpt}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div
            className="flex items-center gap-4 px-4 py-2 text-[11px]"
            style={{
              borderTop: "1px solid var(--docs-border)",
              color: "var(--docs-text-secondary)",
            }}
          >
            <span>
              <kbd className="font-mono">{"\u2191\u2193"}</kbd> navigate
            </span>
            <span>
              <kbd className="font-mono">{"\u21B5"}</kbd> open
            </span>
            <span>
              <kbd className="font-mono">esc</kbd> close
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
