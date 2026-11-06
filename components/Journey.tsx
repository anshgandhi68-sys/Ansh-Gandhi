'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { journeyPanels } from '@/data/journey';

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 3.5s, pause on hover/interaction or when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % journeyPanels.length);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section id="journey" className="py-24 md:py-32 relative border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kelp" />
              <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
                05 / Evolution &amp; Convergence
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
              THE FOUR <br />
              <span className="text-kelp">DIMENSIONS.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
              Four converging paths that define Ansh Gandhi: the startup founder, the systems builder, the theoretical explorer, and the competitive chess strategist.
            </p>
          </div>

          {/* Interactive Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-ink/60">
            <span className="w-2 h-2 rounded-full bg-kelp animate-pulse" />
            <span>Auto-advancing 3.5s &middot; Hover to inspect</span>
          </div>
        </div>

        {/* Desktop Horizontal Expanding Accordion (~52% active, ~16% compressed) */}
        <div
          className="hidden lg:flex gap-3 h-[520px] w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {journeyPanels.map((panel, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={panel.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => {
                  setIsPaused(true);
                  setActiveIndex(idx);
                }}
                onBlur={() => setIsPaused(false)}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`Journey dimension: ${panel.title}`}
                className={`relative rounded-3xl border border-ink/15 p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] notched-box ${
                  isActive
                    ? 'flex-[5.2] bg-white shadow-xl border-ink/30'
                    : 'flex-[1.6] bg-white/40 hover:bg-white/70 shadow-xs'
                }`}
              >
                {/* Accent glow on active panel */}
                <div
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none transition-opacity duration-500"
                  style={{ backgroundColor: panel.accentColor }}
                />

                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-ink/50">
                      {panel.number}
                    </span>
                    {isActive && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-ink/5 text-ink/80">
                        {panel.badge}
                      </span>
                    )}
                  </div>
                  <Icon
                    icon={panel.icon}
                    className="w-5 h-5 transition-transform duration-500"
                    style={{
                      color: panel.accentColor,
                      transform: isActive ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Compressed View: Vertical Title */}
                {!isActive && (
                  <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                    <span className="font-semibold uppercase tracking-[0.2em] text-sm text-ink/70 writing-vertical-lr rotate-180">
                      {panel.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 writing-vertical-lr rotate-180 mt-6">
                      {panel.subtitle}
                    </span>
                  </div>
                )}

                {/* Expanded View: Full Rich Narrative */}
                {isActive && (
                  <div className="my-auto py-4 space-y-6 animate-fadeIn z-10 max-w-xl">
                    <div>
                      {/* Mandatory Typography: Accordion panel titles: Plus Jakarta Sans 600, uppercase, letter-spacing 0.2em */}
                      <h3
                        className="font-semibold uppercase text-2xl tracking-[0.2em] text-ink"
                        style={{ letterSpacing: '0.2em' }}
                      >
                        {panel.title}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-ink/60 mt-1">
                        {panel.subtitle}
                      </p>
                    </div>

                    <p className="text-xl sm:text-2xl font-medium tracking-tight text-ink leading-snug">
                      &ldquo;{panel.headline}&rdquo;
                    </p>

                    <p className="text-sm text-ink/80 leading-relaxed font-normal">
                      {panel.summary}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-2 border-t border-ink/10">
                      {panel.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-ink/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-kelp shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Bar */}
                <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink/50 z-10">
                  {isActive ? (
                    <>
                      <span>Ansh Gandhi &middot; Dimension {panel.number}</span>
                      <span className="text-kelp font-semibold">Active Focus</span>
                    </>
                  ) : (
                    <div className="w-full flex justify-center">
                      <span className="text-[11px] font-mono text-ink/40">0{idx + 1}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accessible Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {journeyPanels.map((panel, idx) => {
            const isExpanded = activeIndex === idx;
            return (
              <div
                key={panel.id}
                className="bg-white border border-ink/15 rounded-2xl p-6 shadow-xs notched-box transition-all"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActiveIndex(isExpanded ? -1 : idx)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-ink/50">
                      {panel.number}
                    </span>
                    <div>
                      <h3
                        className="font-semibold uppercase text-base text-ink"
                        style={{ letterSpacing: '0.2em' }}
                      >
                        {panel.title}
                      </h3>
                      <p className="text-[11px] font-mono text-ink/60">
                        {panel.subtitle}
                      </p>
                    </div>
                  </div>
                  <Icon
                    icon={isExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                    className="w-5 h-5 text-ink/60"
                  />
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-ink/10 space-y-3 animate-fadeIn">
                    <p className="text-sm font-medium text-ink">
                      {panel.headline}
                    </p>
                    <p className="text-xs text-ink/75 leading-relaxed">
                      {panel.summary}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      {panel.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-ink/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-kelp" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
