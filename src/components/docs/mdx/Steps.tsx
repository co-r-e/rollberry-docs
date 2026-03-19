import React from "react";

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  const items = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <div className="my-6 ml-1">
      {items.map((child, index) => (
        <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Vertical connector line */}
          {index < items.length - 1 && (
            <div
              className="absolute left-[15px] top-[36px] bottom-0 w-px"
              style={{ backgroundColor: "var(--docs-border)" }}
            />
          )}

          {/* Numbered circle */}
          <div
            className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
            style={{
              backgroundColor: "var(--docs-accent)",
              color: "#FFFFFF",
            }}
          >
            {index + 1}
          </div>

          {/* Step content */}
          <div className="flex-1 pt-0.5 [&>*:first-child]:mt-0">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
