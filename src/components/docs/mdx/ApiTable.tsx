import React from "react";

interface ApiRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ApiTableProps {
  rows: ApiRow[];
}

export function ApiTable({ rows }: ApiTableProps) {
  return (
    <div
      className="my-5 overflow-x-auto rounded-lg border"
      style={{ borderColor: "var(--docs-border)" }}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr style={{ borderBottom: "2px solid var(--docs-border)" }}>
            <th
              className="px-4 py-2.5 text-left font-semibold"
              style={{ color: "var(--docs-text)" }}
            >
              Name
            </th>
            <th
              className="px-4 py-2.5 text-left font-semibold"
              style={{ color: "var(--docs-text)" }}
            >
              Type
            </th>
            <th
              className="px-4 py-2.5 text-left font-semibold"
              style={{ color: "var(--docs-text)" }}
            >
              Default
            </th>
            <th
              className="px-4 py-2.5 text-left font-semibold"
              style={{ color: "var(--docs-text)" }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              style={{
                borderBottom:
                  index < rows.length - 1
                    ? "1px solid var(--docs-border)"
                    : undefined,
              }}
            >
              <td className="px-4 py-2.5">
                <code
                  className="rounded px-1.5 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--docs-accent-muted)",
                    color: "var(--docs-accent)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  {row.name}
                </code>
              </td>
              <td className="px-4 py-2.5">
                <code
                  className="text-xs"
                  style={{
                    color: "var(--docs-text-secondary)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}
                >
                  {row.type}
                </code>
              </td>
              <td
                className="px-4 py-2.5 text-xs"
                style={{ color: "var(--docs-text-secondary)" }}
              >
                {row.default ? (
                  <code
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}
                  >
                    {row.default}
                  </code>
                ) : (
                  <span>&mdash;</span>
                )}
              </td>
              <td
                className="px-4 py-2.5"
                style={{ color: "var(--docs-text)" }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
