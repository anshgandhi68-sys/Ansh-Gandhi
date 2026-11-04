'use client';

import React from 'react';

export default function FrameGuide() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-3 md:inset-4 pointer-events-none z-40 select-none"
    >
      {/* Outer border box */}
      <div className="w-full h-full border border-ink/10 relative">
        {/* Top-left corner tick */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-ink/30" />
        {/* Top-right corner tick */}
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-ink/30" />
        {/* Bottom-left corner tick */}
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-ink/30" />
        {/* Bottom-right corner tick */}
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-ink/30" />

        {/* Small corner notch squares */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-ink/20" />
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-ink/20" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-ink/20" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-ink/20" />

        {/* Vertical guide line at 16.666% (desktop only) */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 border-l border-ink/[0.06]"
          style={{ left: '16.666%' }}
        >
          <div className="absolute top-3 left-2 font-mono text-[9px] uppercase tracking-widest text-ink/25">
            01 / AXIS
          </div>
        </div>

        {/* Vertical guide line at 50% (desktop only) */}
        <div
          className="hidden md:block absolute top-0 bottom-0 border-l border-dashed border-ink/[0.07]"
          style={{ left: '50%' }}
        >
          <div className="absolute top-3 left-2 font-mono text-[9px] uppercase tracking-widest text-ink/25">
            CENTER / 02
          </div>
        </div>
      </div>
    </div>
  );
}
