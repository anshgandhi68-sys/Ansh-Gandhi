'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

export default function Ventures() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="ventures" className="py-24 md:py-32 relative border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-apricot" />
              <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
                02 / Venture &amp; Technology Portfolio
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
              IDEAS, BUILT <br />
              <span className="text-apricot">INTO REALITY.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
              Every build represents an authentic engineering solution—from live venture operations to deep-tech cybersecurity graphs and autonomous software agents.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-ink/60">
            <span className="px-3 py-1.5 rounded-full border border-ink/15 bg-white/40">
              Interactive Horizontal Gallery &middot; Hover to expand
            </span>
          </div>
        </div>

        {/* Desktop Interactive Expanding Gallery (flex-1 to flex-4) */}
        <div className="hidden lg:flex gap-3 h-[560px] w-full">
          {projects.map((proj, idx) => {
            const isActive = activeProjectIndex === idx;
            return (
              <div
                key={proj.id}
                onMouseEnter={() => setActiveProjectIndex(idx)}
                onFocus={() => setActiveProjectIndex(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`Project: ${proj.title}`}
                className={`relative rounded-3xl border border-ink/15 p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] notched-box ${
                  isActive
                    ? 'flex-[3.8] bg-white shadow-xl border-ink/30'
                    : 'flex-[1] bg-white/40 hover:bg-white/70 shadow-xs'
                }`}
              >
                {/* Subtle accent corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none transition-opacity duration-500"
                  style={{ backgroundColor: proj.accentColor }}
                />

                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-ink/50">
                      {proj.number}
                    </span>
                    {isActive && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-ink/5 text-ink/80">
                        {proj.badge}
                      </span>
                    )}
                  </div>
                  <span
                    className="w-3 h-3 rounded-full transition-transform duration-500"
                    style={{
                      backgroundColor: proj.accentColor,
                      transform: isActive ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Compressed View Content (when inactive) */}
                {!isActive && (
                  <div className="my-auto py-8 flex flex-col items-center justify-center text-center">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50 writing-vertical-lr rotate-180 mb-6">
                      {proj.category}
                    </p>
                    <h3 className="font-medium text-lg text-ink uppercase tracking-tight writing-vertical-lr rotate-180">
                      {proj.title}
                    </h3>
                  </div>
                )}

                {/* Expanded View Content (when active) */}
                {isActive && (
                  <div className="my-auto py-4 space-y-5 animate-fadeIn z-10 max-w-xl">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-ink/60 block">
                        Role: {proj.role}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-ink uppercase">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-mono text-ink/60 uppercase">
                        {proj.tagline}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-ink/80 leading-relaxed font-normal">
                      {proj.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-ink/5 border border-ink/10 rounded-lg text-xs font-mono text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Bar & Action Buttons */}
                <div className="pt-4 border-t border-ink/10 flex items-center justify-between z-10">
                  {isActive ? (
                    <div className="flex items-center gap-3 w-full justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(proj);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink hover:text-kelp transition-colors"
                      >
                        <span>Deep Dive Architecture</span>
                        <Icon icon="solar:round-alt-arrow-right-linear" className="w-4 h-4" />
                      </button>

                      {proj.websiteUrl && (
                        <a
                          href={proj.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-butter hover:bg-kelp text-xs font-medium uppercase tracking-wider transition-colors"
                        >
                          <span>Live Venture</span>
                          <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="w-full flex justify-center">
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="w-4 h-4 text-ink/40 group-hover:text-ink transition-colors"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Stacking (Tap-to-Expand) */}
        <div className="lg:hidden space-y-4">
          {projects.map((proj, idx) => {
            const isExpanded = activeProjectIndex === idx;
            return (
              <div
                key={proj.id}
                className="bg-white border border-ink/15 rounded-2xl p-6 shadow-xs notched-box transition-all"
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActiveProjectIndex(isExpanded ? -1 : idx)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-ink/50">
                      {proj.number}
                    </span>
                    <div>
                      <h3 className="font-medium text-lg text-ink uppercase tracking-tight">
                        {proj.title}
                      </h3>
                      <p className="text-[11px] font-mono text-ink/60">
                        {proj.role}
                      </p>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-ink/5 flex items-center justify-center text-ink">
                    <Icon
                      icon={isExpanded ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                      className="w-4 h-4"
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-ink/10 space-y-4 animate-fadeIn">
                    <p className="text-xs text-ink/75 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-ink/5 border border-ink/10 rounded text-[11px] font-mono text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ink text-butter text-xs font-medium uppercase tracking-wider"
                      >
                        <span>View System Spec</span>
                        <Icon icon="solar:round-alt-arrow-right-linear" className="w-4 h-4" />
                      </button>

                      {proj.websiteUrl && (
                        <a
                          href={proj.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-ink/20 text-ink text-xs font-medium uppercase tracking-wider"
                        >
                          <span>Visit Website</span>
                          <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
