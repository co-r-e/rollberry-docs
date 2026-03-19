"use client";

import React, { useState, useCallback } from "react";

interface TabsProps {
  children: React.ReactNode;
}

interface TabProps {
  label: string;
  children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabProps> =>
      React.isValidElement(child)
  );

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="my-5">
      {/* Tab headers */}
      <div
        className="flex gap-0 border-b"
        style={{ borderColor: "var(--docs-border)" }}
        role="tablist"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabClick(index)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-150"
              style={{
                color: isActive
                  ? "var(--docs-accent)"
                  : "var(--docs-text-secondary)",
              }}
            >
              {tab.props.label}
              {isActive && (
                <span
                  className="absolute right-0 bottom-0 left-0 h-0.5"
                  style={{ backgroundColor: "var(--docs-accent)" }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active tab content */}
      <div className="pt-4" role="tabpanel">
        {tabs[activeIndex]}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
