'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { researchPillars, researchNotes } from '@/data/research';

export default function Research() {
  const [activeTab, setActiveTab] = useState<'dimensions' | 'time' | 'space'>('dimensions');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 4D Tesseract projection canvas simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // 16 vertices of a 4D hypercube (tesseract) [-1, 1]
    const vertices4D: number[][] = [];
    for (let i = 0; i < 16; i++) {
      vertices4D.push([
        i & 1 ? 1 : -1,
        i & 2 ? 1 : -1,
        i & 4 ? 1 : -1,
        i & 8 ? 1 : -1,
      ]);
    }

    // 32 edges of a tesseract connecting vertices differing by 1 bit
    const edges: [number, number][] = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (vertices4D[i][k] !== vertices4D[j][k]) diff++;
        }
        if (diff === 1) edges.push([i, j]);
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.22;

      angle += 0.012;

      // Rotate in 4D: XW and YZ planes
      const projected3D: { x: number; y: number; z: number }[] = [];

      for (const v of vertices4D) {
        let x = v[0];
        let y = v[1];
        let z = v[2];
        let w = v[3];

        // Rotation in X-W plane
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x1 = x * cosA - w * sinA;
        const w1 = x * sinA + w * cosA;

        // Rotation in Y-Z plane
        const cosB = Math.cos(angle * 0.7);
        const sinB = Math.sin(angle * 0.7);
        const y1 = y * cosB - z * sinB;
        const z1 = y * sinB + z * cosB;

        // 4D to 3D perspective projection
        const distance4D = 2.4;
        const wFactor = 1 / (distance4D - w1);
        const x3 = x1 * wFactor;
        const y3 = y1 * wFactor;
        const z3 = z1 * wFactor;

        // 3D to 2D projection
        const distance3D = 3.2;
        const zFactor = 1 / (distance3D - z3);
        const x2D = centerX + x3 * zFactor * scale * 3.2;
        const y2D = centerY + y3 * zFactor * scale * 3.2;

        projected3D.push({ x: x2D, y: y2D, z: z3 });
      }

      // Draw tesseract edges
      ctx.lineWidth = 1.2;
      for (const [i, j] of edges) {
        const p1 = projected3D[i];
        const p2 = projected3D[j];

        // Dynamic gradient based on depth
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(42, 31, 20, 0.22)';
        ctx.stroke();
      }

      // Draw vertex nodes
      for (const p of projected3D) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = '#FF6F61';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentPillar = researchPillars.find((p) => p.id === activeTab) || researchPillars[0];

  return (
    <section id="research" className="py-24 md:py-32 relative border-t border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-coral" />
          <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
            03 / Theoretical Inquiry &amp; Exploration
          </span>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
              CURIOUS ABOUT <br />
              <span className="text-coral">THE UNEXPLAINED.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink/75 max-w-2xl leading-relaxed">
              Independent exploration into higher dimensions, the asymmetric arrow of time, and the topological continuum of space. An intellectual pursuit driven by scientific curiosity.
            </p>
          </div>

          <div className="lg:col-span-4">
            {/* Scientific Integrity Disclaimer */}
            <div className="p-4 bg-white/70 border border-ink/15 rounded-2xl notched-box">
              <div className="flex items-center gap-2 text-xs font-mono text-ink font-semibold uppercase">
                <Icon icon="solar:shield-warning-bold" className="w-4 h-4 text-coral" />
                <span>Epistemic Demarcation</span>
              </div>
              <p className="text-[11px] text-ink/70 mt-1 leading-normal">
                Established scientific physics (General Relativity, Quantum Mechanics) is strictly distinguished from personal working hypotheses. No peer-reviewed claims are asserted.
              </p>
            </div>
          </div>
        </div>

        {/* Main Research Exploration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Simulation / Visualization Column (5 cols) */}
          <div className="lg:col-span-5 bg-white/60 border border-ink/15 rounded-3xl p-6 shadow-sm notched-box flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-ink/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                <span className="text-xs font-mono uppercase tracking-widest text-ink/75">
                  4D Tesseract Projection
                </span>
              </div>
              <span className="text-[10px] font-mono text-ink/50">Orthogonal XW &middot; YZ</span>
            </div>

            {/* Canvas */}
            <div className="py-6 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={360}
                height={320}
                className="w-full max-w-[340px] h-[300px]"
              />
            </div>

            <div className="border-t border-ink/10 pt-3 flex items-center justify-between text-[11px] font-mono text-ink/60">
              <span>Higher Dimension Projections</span>
              <span className="text-coral font-medium">16 Vertices &middot; 32 Edges</span>
            </div>
          </div>

          {/* Theoretical Breakdown & Tabs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pillar Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/50 border border-ink/15 rounded-2xl">
              {researchPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === pillar.id
                      ? 'bg-ink text-butter shadow-xs font-bold'
                      : 'text-ink/70 hover:text-ink hover:bg-ink/[0.04]'
                  }`}
                >
                  {pillar.tag}
                </button>
              ))}
            </div>

            {/* Active Pillar Card */}
            <div className="bg-white/80 border border-ink/15 rounded-3xl p-6 sm:p-8 space-y-6 notched-box shadow-xs">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-coral font-semibold">
                  Field of Investigation
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium text-ink mt-1 tracking-tight">
                  {currentPillar.title}
                </h3>
                <p className="text-sm text-ink/75 mt-2 leading-relaxed">
                  {currentPillar.description}
                </p>
              </div>

              {/* Distinction Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-kelp/5 border border-kelp/20">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-kelp font-bold">
                    <Icon icon="solar:check-circle-bold" className="w-3.5 h-3.5" />
                    <span>Established Foundation</span>
                  </div>
                  <p className="text-xs text-ink/75 mt-2 leading-relaxed">
                    {currentPillar.groundedPhysics}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-coral/5 border border-coral/20">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-coral font-bold">
                    <Icon icon="solar:lightbulb-bold" className="w-3.5 h-3.5" />
                    <span>Independent Hypothesis</span>
                  </div>
                  <p className="text-xs text-ink/75 mt-2 leading-relaxed">
                    {currentPillar.exploratoryHypothesis}
                  </p>
                </div>
              </div>

              {/* Inquiring Questions */}
              <div className="pt-4 border-t border-ink/10 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-ink/60">
                  Guiding Research Questions
                </h4>
                <ul className="space-y-1.5">
                  {currentPillar.keyQuestions.map((q, i) => (
                    <li key={i} className="text-xs text-ink/80 flex items-start gap-2">
                      <span className="text-coral font-mono">&rsaquo;</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Working Exploration Notes / Log Drawer */}
        <div className="mt-12 pt-8 border-t border-ink/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink/60">
              Working Notes &amp; Explorations Log
            </h3>
            <span className="text-[11px] font-mono text-ink/50">Living Document &middot; Future Additions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {researchNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white/50 border border-ink/10 p-5 rounded-2xl notched-box hover:border-ink/25 transition-all"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-ink/50 mb-2">
                  <span>{note.date}</span>
                  <span className="px-2 py-0.5 rounded bg-ink/5 text-ink/75">{note.status}</span>
                </div>
                <h4 className="text-sm font-semibold text-ink leading-snug">
                  {note.title}
                </h4>
                <p className="text-xs text-ink/65 mt-2 leading-relaxed">
                  {note.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
