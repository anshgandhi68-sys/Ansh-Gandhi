'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { interestItems } from '@/data/interests';

export default function Interests() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="interests" className="py-24 md:py-32 relative border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
                07 / Domains of Exploration
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
              SELECTED <br />
              <span className="text-coral">INTERESTS.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
              Curated intellectual vectors spanning technology creation, dimensional physics, and game-theoretic cognition.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-ink/60">
            <span className="px-3 py-1.5 rounded-full border border-ink/15 bg-white/40">
              Interactive Horizontal Gallery &middot; Hover to expand
            </span>
          </div>
        </div>

        {/* Desktop Interactive Expanding Gallery (flex-1 to flex-4) */}
        <div className="hidden lg:flex gap-3 h-[480px] w-full">
          {interestItems.map((item, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onFocus={() => setHoveredIndex(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={isHovered}
                aria-label={`Interest: ${item.title}`}
                className={`relative rounded-3xl border border-ink/15 p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] notched-box ${
                  isHovered
                    ? 'flex-[3.8] bg-white shadow-xl border-ink/30'
                    : 'flex-[1] bg-white/40 hover:bg-white/70 shadow-xs'
                }`}
              >
                {/* Background ambient glow */}
                <div
                  className="absolute inset-0 opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.accentColor}, transparent 75%)`,
                  }}
                />

                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-3 z-10">
                  <span className="font-mono text-xs font-semibold text-ink/50">
                    {item.number}
                  </span>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      backgroundColor: `${item.accentColor}20`,
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    <Icon
                      icon={item.icon}
                      className="w-4 h-4"
                      style={{ color: item.accentColor }}
                    />
                  </div>
                </div>

                {/* Compressed View (when not hovered) */}
                {!isHovered && (
                  <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40 writing-vertical-lr rotate-180 mb-4">
                      {item.tag}
                    </span>
                    <h3 className="font-medium text-base text-ink uppercase tracking-tight writing-vertical-lr rotate-180">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Expanded View (when hovered) */}
                {isHovered && (
                  <div className="my-auto py-4 space-y-4 animate-fadeIn z-10 max-w-lg">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50 block">
                        Category: {item.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink uppercase">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-base font-medium italic text-ink">
                      {item.quote}
                    </p>

                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-ink/50 z-10">
                  {isHovered ? (
                    <>
                      <span>Domain &middot; {item.tag}</span>
                      <span className="text-ink font-semibold">Active Vector</span>
                    </>
                  ) : (
                    <div className="w-full flex justify-center">
                      <span className="text-[11px] font-mono text-ink/30">0{idx + 1}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical View */}
        <div className="lg:hidden space-y-4">
          {interestItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-ink/15 rounded-2xl p-6 shadow-xs notched-box space-y-3"
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                <span className="font-mono text-xs font-semibold text-ink/50">
                  {item.number} &middot; {item.tag}
                </span>
                <Icon
                  icon={item.icon}
                  className="w-5 h-5"
                  style={{ color: item.accentColor }}
                />
              </div>

              <h3 className="text-xl font-medium text-ink uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs font-medium italic text-ink/80">
                {item.quote}
              </p>

              <p className="text-xs text-ink/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
