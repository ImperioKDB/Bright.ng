import type { ReactNode } from "react";

export default function PillBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/40 text-sm text-text bg-accent/5 ${className}`}
    >
      {children}
    </span>
  );
}
