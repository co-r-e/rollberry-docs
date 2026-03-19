import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
}

/**
 * Renders h1-h4 with the id attribute for anchor linking.
 * Anchor links (the # icon on hover) are handled by rehype-autolink-headings
 * and arrive as part of `children`, styled via the `.heading-anchor` class
 * defined in globals.css.
 */
export function Heading({ level, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
}
