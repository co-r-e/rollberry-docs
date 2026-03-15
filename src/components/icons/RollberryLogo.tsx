export function RollberryLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Film frame */}
      <rect x="2" y="4" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* Sprocket holes */}
      <rect x="5" y="7" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="5" y="22" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="24" y="7" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
      <rect x="24" y="22" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
      {/* Play triangle */}
      <path d="M13 11L21 16L13 21V11Z" fill="currentColor" />
    </svg>
  );
}
