'use client';

import React from 'react';
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-kelp" />
          <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
            01 / Identity &amp; Background
          </span>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Summary, Philosophy & Verified Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Portrait / Editorial Card */}
            <div className="bg-white/70 border border-ink/15 rounded-3xl p-6 sm:p-8 shadow-sm backdrop-blur-sm notched-box relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-apricot/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-ink/20 shadow-xs shrink-0">
                    <img
                      src="/images/ansh-gandhi.jpg"
                      alt="Ansh A Gandhi"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-ink">Ansh A Gandhi</h3>
                    <p className="text-xs text-ink/60 font-mono mt-0.5">Founder &middot; Builder &middot; Researcher</p>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-butter border border-ink/15 flex items-center justify-center text-ink shrink-0">
                  <Icon icon="solar:user-bold-duotone" className="w-5 h-5 text-kelp" />
                </div>
              </div>

              {/* Core Philosophy Callout */}
              <div className="space-y-4">
                <blockquote className="text-base text-ink font-medium italic border-l-2 border-apricot pl-4 py-1">
                  &ldquo;Ideas into ventures. Curiosity beyond boundaries.&rdquo;
                </blockquote>
                <p className="text-xs text-ink/70 leading-relaxed">
                  Building technology ventures, exploring complex ideas and turning ambitious concepts into meaningful projects.
                </p>
              </div>

              {/* Pillar Badges */}
              <div className="mt-6 pt-6 border-t border-ink/10 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-butter rounded-xl border border-ink/10">
                  <span className="text-[10px] font-mono text-ink/50 uppercase block">Pillar 01</span>
                  <span className="text-xs font-semibold text-ink mt-0.5 block">Venture</span>
                </div>
                <div className="p-2.5 bg-butter rounded-xl border border-ink/10">
                  <span className="text-[10px] font-mono text-ink/50 uppercase block">Pillar 02</span>
                  <span className="text-xs font-semibold text-ink mt-0.5 block">Tech</span>
                </div>
                <div className="p-2.5 bg-butter rounded-xl border border-ink/10">
                  <span className="text-[10px] font-mono text-ink/50 uppercase block">Pillar 03</span>
                  <span className="text-xs font-semibold text-ink mt-0.5 block">Research</span>
                </div>
              </div>
            </div>

            {/* Education Details Card (Cleanly Editable Slot) */}
            <div className="bg-white/50 border border-ink/10 rounded-2xl p-6 notched-box">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="solar:diploma-bold-duotone" className="w-5 h-5 text-kelp" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-ink/75">
                  Academic &amp; Engineering Foundation
                </h4>
              </div>
              <div className="space-y-2 text-xs text-ink/75">
                <p className="font-semibold text-ink text-sm">
                  Computer Science &amp; Technology Exploration
                </p>
                <p className="leading-relaxed">
                  Focusing on systems architecture, artificial intelligence agents, discrete mathematics, and theoretical physics.
                </p>
                <div className="pt-2 text-[11px] font-mono text-ink/50 border-t border-ink/10 flex items-center justify-between">
                  <span>Status: Active Academic Pursuits</span>
                  <span className="text-kelp font-medium">[Institution Details Verified]</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Biography & Deep-Dive (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
              MORE THAN <br />
              <span className="text-kelp">A TITLE.</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-ink/80 leading-relaxed font-normal">
              <p className="font-medium text-ink">
                Ansh A Gandhi is an entrepreneur, technology builder and independent researcher interested in creating impactful products and exploring complex ideas. His work spans startup development, artificial intelligence, software engineering and independent exploration of dimensions, time and space.
              </p>

              <p className="text-sm sm:text-base text-ink/70">
                Driven by a first-principles mindset, Ansh does not view software merely as lines of code, but as a vehicle to solve systemic frictions in real-world industries. Through his venture, <strong>Workivo</strong> (workivo.in), he is actively addressing the fragmented home services ecosystem, creating reliable connections between everyday consumers and verified professionals.
              </p>

              <p className="text-sm sm:text-base text-ink/70">
                Simultaneously, his technical portfolio extends into deep-tech concerns—from software supply chain security and dependency vulnerability graphing to autonomous repository analysis agents and industrial microgrid management concepts.
              </p>
            </div>

            {/* Three Working Principles */}
            <div className="pt-6 border-t border-ink/10 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-ink/50">
                Core Operating Principles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/60 border border-ink/10 rounded-2xl notched-box">
                  <span className="text-xs font-mono text-apricot font-bold">01 / EMPIRICAL</span>
                  <h4 className="text-sm font-semibold text-ink mt-1">Real Builds</h4>
                  <p className="text-xs text-ink/65 mt-1 leading-normal">
                    Working software and verified deployments over speculative presentations.
                  </p>
                </div>

                <div className="p-4 bg-white/60 border border-ink/10 rounded-2xl notched-box">
                  <span className="text-xs font-mono text-kelp font-bold">02 / RIGOR</span>
                  <h4 className="text-sm font-semibold text-ink mt-1">Strategic Depth</h4>
                  <p className="text-xs text-ink/65 mt-1 leading-normal">
                    Tactical patience and high-dimensional calculation honed at competitive chess boards.
                  </p>
                </div>

                <div className="p-4 bg-white/60 border border-ink/10 rounded-2xl notched-box">
                  <span className="text-xs font-mono text-coral font-bold">03 / INQUIRY</span>
                  <h4 className="text-sm font-semibold text-ink mt-1">Zero Boundaries</h4>
                  <p className="text-xs text-ink/65 mt-1 leading-normal">
                    Independent scientific curiosity into dimensions, time, and physical reality.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
