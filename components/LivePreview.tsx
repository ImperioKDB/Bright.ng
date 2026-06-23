"use client";

import { useState } from "react";

export default function LivePreview({ url }: { url: string }) {
  const [blocked, setBlocked] = useState(false);
  const displayUrl = url.replace("https://", "");

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-edge bg-surface">
      {/* Browser chrome bar */}
      <div className="bg-bg border-b border-edge px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-edge" />
          <div className="w-2.5 h-2.5 rounded-full bg-edge" />
          <div className="w-2.5 h-2.5 rounded-full bg-edge" />
        </div>
        <div className="flex-1 bg-surface rounded-md px-3 py-1 flex items-center gap-2 min-w-0">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0 text-muted">
            <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 1.5C5 1.5 3.5 3 3.5 5C3.5 7 5 8.5 5 8.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M5 1.5C5 1.5 6.5 3 6.5 5C6.5 7 5 8.5 5 8.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M1.5 5H8.5" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          <span className="text-muted font-mono text-[11px] truncate">{displayUrl}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-muted hover:text-accent transition"
          title="Open in new tab"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V8M8 1h5m0 0v5m0-5L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Iframe or fallback */}
      <div className="relative w-full" style={{ paddingBottom: "62.5%" }}>
        {!blocked ? (
          <iframe
            src={url}
            title={displayUrl}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            onError={() => setBlocked(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-surface">
            <p className="text-muted text-sm font-mono">Preview unavailable</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent-gradient text-bg text-sm font-semibold rounded-full hover:opacity-90 transition"
            >
              Open live site →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
