const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function RollberryLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex ${className}`}>
      {/* Light mode logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/rollberry-logo.svg`}
        alt="Rollberry"
        width={511}
        height={120}
        className="h-full w-auto block [html[data-theme='dark']_&]:hidden"
      />
      {/* Dark mode logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${basePath}/rollberry-logo-white.svg`}
        alt="Rollberry"
        width={511}
        height={120}
        className="h-full w-auto hidden [html[data-theme='dark']_&]:block"
      />
    </div>
  );
}
