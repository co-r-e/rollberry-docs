import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
}

export function Image({ caption, alt, style, ...props }: ImageProps) {
  return (
    <figure className="my-5">
      {/* MDX images can point to arbitrary static assets, so this stays a plain img tag. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={alt ?? ""}
        style={{
          borderRadius: "0.5rem",
          border: "1px solid var(--docs-border)",
          maxWidth: "100%",
          height: "auto",
          ...style,
        }}
        {...props}
      />
      {caption && (
        <figcaption
          className="mt-2 text-center text-sm"
          style={{ color: "var(--docs-text-secondary)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
