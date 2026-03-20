import Link from "next/link";
import { RollberryLogo } from "@/components/icons/RollberryLogo";

export function DocsLogo() {
  return (
    <Link href="/docs" className="flex items-center gap-2.5 no-underline">
      <RollberryLogo className="h-7 w-auto" />
      <span
        className="rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
        style={{
          background: "var(--docs-accent-muted)",
          color: "var(--docs-accent)",
        }}
      >
        Docs
      </span>
    </Link>
  );
}
