import React from "react";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export function Table({ children, ...props }: TableProps) {
  return (
    <div
      className="my-5 overflow-x-auto rounded-lg border"
      style={{ borderColor: "var(--docs-border)" }}
    >
      <table
        className="w-full border-collapse text-sm"
        style={{ color: "var(--docs-text)" }}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}
