import React from "react";

type BadgeVariant = "default" | "success" | "warning" | "info";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  default: {
    bg: "var(--docs-accent-muted)",
    color: "var(--docs-accent)",
  },
  success: {
    bg: "rgba(34, 197, 94, 0.1)",
    color: "#22C55E",
  },
  warning: {
    bg: "rgba(245, 158, 11, 0.1)",
    color: "#F59E0B",
  },
  info: {
    bg: "rgba(59, 130, 246, 0.1)",
    color: "#3B82F6",
  },
};

export function Badge({ variant = "default", children }: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{
        backgroundColor: styles.bg,
        color: styles.color,
      }}
    >
      {children}
    </span>
  );
}
