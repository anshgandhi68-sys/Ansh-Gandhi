'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { socialLinks } from '@/data/social-links';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-butter pt-20 pb-12 relative overflow-hidden border-t border-ink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-butter/10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-lemon">
              Official Digital Identity
            </span>
            <p className="text-sm text-butter/75">
              &ldquo;Ideas into ventures. Curiosity beyond boundaries.&rdquo;
            </p>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-butter/20 text-xs font-mono uppercase tracking-wider text-butter hover:bg-butter/10 hover:border-lemon transition-all group"
          >
            <span>BACK TO TOP</span>
            <Icon
              icon="solar:arrow-up-linear"
              className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-lemon"
            />
          </button>
        </div>

        {/* Massive Editorial Identity Typography */}
        <div className="py-12 md:py-16 select-none">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-medium tracking-tighter text-butter uppercase leading-[0.88] hover:text-lemon transition-colors duration-500">
            ANSH A GANDHI.
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-mono tracking-widest uppercase text-butter/60">
            Founder &middot; Technology Builder &middot; Independent Researcher
          </p>
        </div>

        {/* Links & Attribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-butter/10 items-center">
          
          {/* Quick Navigation Links (6 cols) */}
          <div className="md:col-span-6 flex flex-wrap gap-4 sm:gap-6 text-xs text-butter/80">
            <a href="#about" className="hover:text-lemon transition-colors">About</a>
            <a href="#ventures" className="hover:text-lemon transition-colors">Ventures</a>
            <a href="#research" className="hover:text-lemon transition-colors">Research</a>
            <a href="#achievements" className="hover:text-lemon transition-colors">Achievements</a>
            <a href="#journey" className="hover:text-lemon transition-colors">Journey</a>
            <a href="#contact" className="hover:text-lemon transition-colors">Contact</a>
          </div>

          {/* Social Profiles (6 cols) */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-butter/80 hover:text-lemon transition-colors flex items-center gap-1.5"
              >
                <span>{s.name}</span>
                <Icon icon="solar:arrow-right-up-linear" className="w-3 h-3 text-butter/50" />
              </a>
            ))}
          </div>

        </div>

        {/* Copyright & Brand Motto */}
        <div className="mt-12 pt-6 border-t border-butter/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-butter/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Ansh A Gandhi. All rights reserved.
          </p>
          <p className="text-butter/70 font-sans italic">
            &ldquo;Think beyond limits. Build what&apos;s next.&rdquo;
          </p>
          <p>
            Vercel Deployment Ready &middot; Verified Digital Identity
          </p>
        </div>

      </div>
    </footer>
  );
}
