"use client";

import { useState } from "react";

export default function LivePreview({
  url,
  compact = false,
}: {
  url: string;
  compact?: boolean;
}) {
  const [blocked, setBlocked] = useState(false);
  const displayUrl = url.replace("https://", "");

  // compact=true is used on homepage cards (shorter height)
  // compact=false is used on full case study pages (taller height)
  const frameHeight = compact ? "180px" : "420px";

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-edge bg-surface">
      {/* Browser chrome bar */}
      <div className="bg-bg border-b border-edge px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-edge" />
          <div className="w-2 h-2 rounded-full bg-edge" />
          <div className="w-2 h-2 rounded-full bg-edge" />
        </div>
        <div className="flex-1 bg-surface rounded-md px-2.5 py-1 flex items-center gap-1.5 min-w-0">
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="flex-shrink-0 text-muted">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 1.5C5 1.5 3.5 3 3.5 5C3.5 7 5 8.5 5 8.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 1.5C5 1.5 6.5 3 6.5 5C6.5 7 5 8.5 5 8.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M1.5 5H8.5" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <span className="text-muted font-mono text-[10px] truncate">{displayUrl}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-muted hover:text-accent transition p-0.5"
          title="Open in new tab"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M6 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8M8 1h5m0 0v5m0-5L6 8"
              stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Preview area with fixed height, iframe scaled down so the
          full desktop layout is visible in a smaller container */}
      <div
        className="relative w-full overflow-hidden bg-white"
        style={{ height: frameHeight }}
      >
        {!blocked ? (
          <iframe
            src={url}
            title={displayUrl}
            className="border-0 absolute top-0 left-0"
            loading="lazy"
            style={{
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onError={() => setBlocked(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface">
            <p className="text-muted text-xs font-mono">Preview unavailable</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent-gradient text-bg text-xs font-semibold rounded-full hover:opacity-90 transition"
            >
              Open live site →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
