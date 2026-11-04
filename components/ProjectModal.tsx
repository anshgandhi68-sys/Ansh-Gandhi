'use client';

import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-ink/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-butter border border-ink/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 shadow-2xl relative notched-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink transition-colors"
        >
          <Icon icon="solar:close-square-linear" className="w-5 h-5" />
        </button>

        {/* Top Header Information */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">
          <span>PROJECT {project.number}</span>
          <span>&middot;</span>
          <span className="text-kelp font-semibold">{project.badge}</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink uppercase">
          {project.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-ink text-butter font-medium">
            Role: {project.role}
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-ink/10 text-ink/75 font-mono">
            {project.category}
          </span>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-apricot/20 text-ink font-semibold hover:bg-apricot/30 transition-colors"
            >
              <span>Visit Official Site</span>
              <Icon icon="solar:arrow-right-up-linear" className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="mt-6 text-base text-ink/80 leading-relaxed font-medium">
          {project.description}
        </p>

        {/* Structured Breakdown: Problem, Solution, Architecture, Impact */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white/70 border border-ink/10 rounded-2xl notched-box">
            <span className="text-[11px] font-mono uppercase tracking-widest text-coral font-bold block mb-1">
              01 / Problem Space
            </span>
            <p className="text-xs text-ink/75 leading-relaxed">
              {project.details.problem}
            </p>
          </div>

          <div className="p-5 bg-white/70 border border-ink/10 rounded-2xl notched-box">
            <span className="text-[11px] font-mono uppercase tracking-widest text-kelp font-bold block mb-1">
              02 / Proposed Solution
            </span>
            <p className="text-xs text-ink/75 leading-relaxed">
              {project.details.solution}
            </p>
          </div>

          <div className="p-5 bg-white/70 border border-ink/10 rounded-2xl notched-box">
            <span className="text-[11px] font-mono uppercase tracking-widest text-apricot font-bold block mb-1">
              03 / System Architecture
            </span>
            <p className="text-xs text-ink/75 leading-relaxed">
              {project.details.architecture}
            </p>
          </div>

          <div className="p-5 bg-white/70 border border-ink/10 rounded-2xl notched-box">
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink font-bold block mb-1">
              04 / Technical &amp; Operational Impact
            </span>
            <p className="text-xs text-ink/75 leading-relaxed">
              {project.details.impact}
            </p>
          </div>
        </div>

        {/* Verified Tech Stack Tags */}
        <div className="mt-8 pt-6 border-t border-ink/10">
          <span className="text-xs font-mono uppercase tracking-widest text-ink/60 block mb-3">
            Verified Stack &amp; Methodologies
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white border border-ink/15 rounded-lg text-xs font-mono text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-6 p-4 rounded-xl bg-ink/[0.03] border border-ink/10 flex items-center justify-between text-xs text-ink/60">
          <span className="flex items-center gap-1.5 font-mono">
            <Icon icon="solar:shield-check-bold" className="w-4 h-4 text-kelp" />
            Empirical Architecture Spec &middot; No fabricated metrics
          </span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-ink hover:underline"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
}
