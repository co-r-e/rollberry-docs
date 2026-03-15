import Image from "next/image";

export function RollberryLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/rollberry-logo.svg"
      alt="Rollberry"
      width={511}
      height={120}
      className={className}
      priority
    />
  );
}
