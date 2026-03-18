const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function RollberryLogo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/rollberry-logo.svg`}
      alt="Rollberry"
      width={511}
      height={120}
      className={className}
    />
  );
}
