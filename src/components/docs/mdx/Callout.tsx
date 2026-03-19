import React from "react";

type CalloutType = "info" | "warning" | "error" | "tip";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { icon: string; borderColor: string; bg: string; iconColor: string }
> = {
  info: {
    icon: "\u2139\uFE0F",
    borderColor: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
    iconColor: "#3B82F6",
  },
  warning: {
    icon: "\u26A0\uFE0F",
    borderColor: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.08)",
    iconColor: "#F59E0B",
  },
  error: {
    icon: "\u274C",
    borderColor: "#EF4444",
    bg: "rgba(239, 68, 68, 0.08)",
    iconColor: "#EF4444",
  },
  tip: {
    icon: "\uD83D\uDCA1",
    borderColor: "#22C55E",
    bg: "rgba(34, 197, 94, 0.08)",
    iconColor: "#22C55E",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type] ?? calloutConfig.info;

  return (
    <div
      className="my-5 rounded-lg px-4 py-3"
      style={{
        borderLeft: `3px solid ${config.borderColor}`,
        backgroundColor: config.bg,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 text-base" role="img" aria-hidden="true">
          {config.icon}
        </span>
        <div className="min-w-0 flex-1">
          {title && (
            <p
              className="mb-1 text-sm font-semibold"
              style={{ color: "var(--docs-text)" }}
            >
              {title}
            </p>
          )}
          <div
            className="text-sm [&>*:first-child]:mt-0"
            style={{ color: "var(--docs-text)" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
