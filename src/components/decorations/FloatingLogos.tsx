import { RollberryIcon } from "@/components/icons/RollberryIcon";

type IconPosition = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotate: number;
  opacity: number;
};

const defaultIcons: IconPosition[] = [
  // Left side
  { top: "8%", left: "-2%", size: 180, rotate: -15, opacity: 0.07 },
  { top: "30%", left: "3%", size: 120, rotate: 20, opacity: 0.05 },
  { top: "55%", left: "-4%", size: 200, rotate: -30, opacity: 0.06 },
  { top: "78%", left: "5%", size: 100, rotate: 10, opacity: 0.04 },
  { top: "15%", left: "8%", size: 80, rotate: 35, opacity: 0.05 },
  // Right side
  { top: "5%", right: "0%", size: 160, rotate: 25, opacity: 0.06 },
  { top: "35%", right: "2%", size: 140, rotate: -20, opacity: 0.05 },
  { top: "60%", right: "-3%", size: 190, rotate: 15, opacity: 0.07 },
  { top: "82%", right: "4%", size: 110, rotate: -35, opacity: 0.04 },
  { top: "48%", right: "8%", size: 90, rotate: 40, opacity: 0.05 },
];

export function FloatingLogos({ icons = defaultIcons }: { icons?: IconPosition[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute text-white"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            width: icon.size,
            height: icon.size,
            opacity: icon.opacity,
            transform: `rotate(${icon.rotate}deg)`,
          }}
        >
          <RollberryIcon className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
