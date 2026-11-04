'use client';

import React, { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { achievementsData } from '@/data/achievements';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (timelineRef.current) {
        gsap.from(timelineRef.current.children, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 35,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chessAchievement = achievementsData.find((a) => a.category === 'CHESS');
  const otherAchievements = achievementsData.filter((a) => a.category !== 'CHESS');

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-lemon" />
          <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
            04 / Verified Milestones &amp; Track Record
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
            MILESTONES <br />
            <span className="text-ink">ALONG THE WAY.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
            Tangible milestones spanning competitive chess strategy, digital venture execution, and applied software engineering. No fabricated awards or unverified statistics.
          </p>
        </div>

        {/* FEATURED: Chessboard-Themed Strategic Card */}
        {chessAchievement && (
          <div className="mb-12 bg-ink text-butter rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden notched-box-full">
            {/* Subtle chessboard 8x8 background pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04] pointer-events-none grid grid-cols-8 grid-rows-8"
            >
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isDark = (row + col) % 2 === 1;
                return (
                  <div
                    key={i}
                    className={isDark ? 'bg-white' : 'bg-transparent'}
                  />
                );
              })}
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Chess Motif & Title (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-apricot text-xs font-mono uppercase tracking-widest">
                  <Icon icon="solar:crown-bold" className="w-4 h-4 text-lemon" />
                  <span>Featured Milestone &middot; Competitive Strategy</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-medium text-butter tracking-tight uppercase">
                  CHESS CHAMPION.
                </h3>

                <p className="text-sm sm:text-base text-butter/80 leading-relaxed font-normal">
                  {chessAchievement.details}
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs font-mono text-butter/60">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-butter">
                    <Icon icon="solar:shield-check-bold" className="w-3.5 h-3.5 text-lemon" />
                    Tournament Competitive Record
                  </span>
                  <span>Tactical Calculation &middot; Endgame Mastery</span>
                </div>
              </div>

              {/* Editable Fields Box (5 cols) */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 font-mono text-xs text-butter/80 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-butter/50 uppercase tracking-widest">
                  <span>Record Specification</span>
                  <span className="text-lemon">Verifiable Slot</span>
                </div>

                <div>
                  <span className="text-[10px] text-butter/50 uppercase block">Championship / Event</span>
                  <p className="font-semibold text-butter mt-0.5">
                    {chessAchievement.competitionName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[10px] text-butter/50 uppercase block">Category / Division</span>
                    <p className="text-butter/90 mt-0.5">{chessAchievement.division}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-butter/50 uppercase block">Recognition</span>
                    <p className="text-lemon font-medium mt-0.5">Champion Title</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-butter/60">
                  <span>Certificate Documentation:</span>
                  <span className="text-butter/90 font-medium">Archived on Record</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Milestone Timeline Cards */}
        <div ref={timelineRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherAchievements.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white/70 border border-ink/15 p-6 rounded-2xl shadow-xs notched-box flex flex-col justify-between hover:border-ink/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-ink/50 border-b border-ink/10 pb-3 mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/75" />
                    {item.category}
                  </span>
                  <span>{item.year}</span>
                </div>

                <h4 className="text-lg sm:text-xl font-medium text-ink tracking-tight">
                  {item.title}
                </h4>

                <p className="text-xs text-ink/70 mt-2 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink/60">
                <span>Role: {item.roleOrHonor}</span>
                <span className="text-kelp font-medium">Verified Project</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
