'use client';

import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const tile1Ref = useRef<HTMLDivElement>(null);
  const tile2Ref = useRef<HTMLDivElement>(null);
  const tile3Ref = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Mouse move tilt effect on central emblem / portrait
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          x: x * 24,
          y: y * 24,
          rotationY: x * 15,
          rotationX: -y * 15,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1,
          ease: 'power2.out',
        });
      }
    };

    heroEl.addEventListener('mousemove', handleMouseMove);
    heroEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // GSAP Entrance Sequence & Floating Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Ring scale and rotate into view
      if (ringRef.current) {
        tl.fromTo(
          ringRef.current,
          { scale: 0.75, opacity: 0, rotate: -45 },
          { scale: 1, opacity: 1, rotate: 0, duration: 1.2 },
          '+=0.1'
        );
      }

      // Portrait / central visual reveal
      if (portraitRef.current) {
        tl.fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.85, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          '-=0.8'
        );
      }

      // Floating tiles staggered movement
      const tiles = [tile1Ref.current, tile2Ref.current, tile3Ref.current].filter(Boolean);
      if (tiles.length > 0) {
        tl.fromTo(
          tiles,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8 },
          '-=0.6'
        );
      }

      // Headline elegant reveal
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 0.9 },
          '-=0.7'
        );
      }

      // Subtext & CTAs
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        );
      }

      // Metrics cards stagger up
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.75 },
          '-=0.3'
        );
      }

      // 2. Continuous sine-wave yoyo float for tiles
      if (tile1Ref.current) {
        gsap.to(tile1Ref.current, {
          y: '-=12',
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
      if (tile2Ref.current) {
        gsap.to(tile2Ref.current, {
          y: '+=10',
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        });
      }
      if (tile3Ref.current) {
        gsap.to(tile3Ref.current, {
          y: '-=14',
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Layer 2: Organic animated blobs in apricot, coral, lemon */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      >
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-apricot/20 blur-3xl filter animate-pulse" />
        <div
          className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-coral/15 blur-3xl filter"
          style={{ animation: 'spin-slow 40s linear infinite' }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-lemon/25 blur-3xl filter" />
      </div>

      {/* Layer 3: Subtle top hairline & vignette */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Headline & Context Column (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
            {/* Top Identity Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-ink/15 bg-white/40 backdrop-blur-sm shadow-xs">
              <span className="w-2 h-2 rounded-full bg-apricot animate-ping" />
              <span className="text-[12px] font-mono uppercase tracking-widest text-ink/80">
                Founder &middot; Technology Builder &middot; Researcher
              </span>
            </div>

            {/* Main Editorial H1 */}
            <h1
              ref={headlineRef}
              className="text-ink font-medium tracking-tighter text-5xl sm:text-7xl lg:text-[88px] leading-[0.92] uppercase"
            >
              <span className="block overflow-hidden">
                <span className="inline-block">ANSH A</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block text-kelp">GANDHI.</span>
              </span>
            </h1>

            {/* Supporting Statement & Description */}
            <div ref={subtextRef} className="space-y-4 max-w-xl">
              <p className="text-lg md:text-xl font-medium text-ink tracking-tight">
                &ldquo;Building ideas. Exploring possibilities. Creating what&apos;s next.&rdquo;
              </p>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed">
                An entrepreneur and technology builder working across startups, software and artificial
                intelligence, with an independent interest in exploring dimensions, time and space.
              </p>
            </div>

            {/* Action CTAs */}
            <div ref={ctaRef} className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-butter hover:bg-kelp rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>EXPLORE MY WORK</span>
                <Icon
                  icon="solar:arrow-right-up-linear"
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/25 text-ink hover:bg-ink/[0.05] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span>GET TO KNOW ME</span>
                <Icon icon="solar:arrow-down-linear" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Layer 4, 5, 6: Visual Composition with Ring, Portrait/Emblem & Floating Tiles (Right / 5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] md:min-h-[500px] py-6">
            
            {/* Layer 4: Orbital open ring with clipped polygon */}
            <div
              ref={ringRef}
              aria-hidden="true"
              className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] border-[5px] border-ink/20 orbit-ring pointer-events-none"
              style={{ animation: 'spin-slow 45s linear infinite' }}
            />
            <div
              aria-hidden="true"
              className="absolute w-72 h-72 sm:w-[360px] sm:h-[360px] md:w-[410px] md:h-[410px] border border-dashed border-coral/30 rounded-full pointer-events-none"
            />

            {/* Layer 5: Ansh A Gandhi Official Portrait Card (Uncropped 1:1 Aspect Ratio) */}
            <div
              ref={portraitRef}
              className="relative z-20 shrink-0 w-[290px] sm:w-[340px] md:w-[380px] lg:w-[390px] xl:w-[410px] bg-gradient-to-b from-white via-butter to-white/80 border border-ink/20 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden notched-box group transition-all"
              style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            >
              {/* Internal decorative backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-apricot/15 via-transparent to-kelp/15 pointer-events-none" />
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-ink/75 border-b border-ink/10 pb-2 z-10 font-medium">
                <span className="font-semibold text-ink">ANSH A GANDHI</span>
                <span className="flex items-center gap-1.5 text-kelp font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-kelp animate-pulse" /> VERIFIED IDENTITY
                </span>
              </div>

              {/* Full Uncropped Photograph Container */}
              <div className="relative w-full aspect-square my-2 rounded-2xl overflow-hidden border border-ink/15 shadow-md bg-ink/5">
                <img
                  src="/images/ansh-gandhi.jpg"
                  alt="Ansh A Gandhi — Founder, Technology Builder and Independent Researcher"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Bottom Footer Bar */}
              <div className="border-t border-ink/10 pt-2 flex items-center justify-between text-[11px] text-ink/70 z-10 font-medium">
                <span className="text-ink font-semibold">FOUNDER &middot; WORKIVO</span>
                <span className="text-ink/50 uppercase tracking-wider text-[10px]">ORIGINAL ARCHIVE</span>
              </div>
            </div>

            {/* Layer 6: Floating Tiles (Positioned to orbit smoothly without overlapping the portrait) */}
            
            {/* Tile 1: Founder Workivo (Top Left Orbit) */}
            <div
              ref={tile1Ref}
              className="absolute -top-6 -left-4 sm:-top-8 sm:-left-10 lg:-left-20 z-30 bg-white/95 border border-ink/15 shadow-xl px-4 py-2.5 rounded-2xl backdrop-blur-md max-w-[165px] notched-box"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-apricot" />
                <span className="text-[10px] uppercase tracking-widest text-ink/60 font-semibold">
                  FOUNDER
                </span>
              </div>
              <p className="text-xs font-semibold text-ink mt-0.5">WORKIVO</p>
              <p className="text-[10px] text-ink/60 truncate">workivo.in &middot; Active</p>
            </div>

            {/* Tile 2: 5 Featured Builds (Bottom Left Orbit) */}
            <div
              ref={tile2Ref}
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-10 lg:-left-20 z-30 bg-white/95 border border-ink/15 shadow-xl px-4 py-2.5 rounded-2xl backdrop-blur-md max-w-[170px] notched-box"
            >
              <div className="flex items-center gap-1.5 text-kelp text-[11px]">
                <Icon icon="solar:code-square-bold" className="w-3.5 h-3.5 text-kelp" />
                <span className="font-semibold text-[10px] uppercase tracking-wider">5 BUILDS</span>
              </div>
              <p className="text-[11px] font-semibold text-ink mt-0.5">Tech &amp; Ventures</p>
              <p className="text-[10px] text-ink/60">AI &middot; Security &middot; Microgrid</p>
            </div>

            {/* Tile 3: Exploration (Right Orbit) */}
            <div
              ref={tile3Ref}
              className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 lg:-right-20 z-30 bg-white/95 border border-ink/15 shadow-xl px-4 py-2.5 rounded-2xl backdrop-blur-md max-w-[175px] notched-box"
            >
              <div className="flex items-center gap-1.5 text-coral text-[10px] uppercase tracking-widest font-semibold">
                <Icon icon="solar:planet-bold" className="w-3.5 h-3.5 text-coral" />
                <span>EXPLORATION</span>
              </div>
              <p className="text-[11px] font-semibold text-ink mt-0.5">Dimensions &middot; Time</p>
              <p className="text-[10px] text-ink/60">Theoretical Inquiries</p>
            </div>
          </div>

        </div>

        {/* Ferment-Lab Style Staggered Metrics Banner */}
        <div
          ref={metricsRef}
          className="mt-14 sm:mt-16 pt-8 border-t border-ink/10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Card 1 */}
          <div className="bg-white/60 border border-ink/10 p-5 rounded-2xl shadow-xs notched-box transition-all hover:border-ink/25">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50">Venture Pillar</span>
              <span className="w-2 h-2 rounded-full bg-apricot" />
            </div>
            <div className="mt-3">
              <p className="text-3xl font-medium tracking-tight text-ink font-sans">
                Workivo
              </p>
              <p className="text-xs text-ink/70 mt-1">
                Founder of home-services marketplace connecting customers with verified professionals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 border border-ink/10 p-5 rounded-2xl shadow-xs notched-box transition-all hover:border-ink/25">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50">Tech Systems</span>
              <span className="w-2 h-2 rounded-full bg-kelp" />
            </div>
            <div className="mt-3">
              <p className="text-3xl font-medium tracking-tight text-ink font-sans">
                5 Platforms
              </p>
              <p className="text-xs text-ink/70 mt-1">
                Full-stack engineering across DevSecOps, AI agents, diagnostics, and energy concepts.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 border border-ink/10 p-5 rounded-2xl shadow-xs notched-box transition-all hover:border-ink/25">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50">Strategic Mind</span>
              <span className="w-2 h-2 rounded-full bg-coral" />
            </div>
            <div className="mt-3">
              <p className="text-3xl font-medium tracking-tight text-ink font-sans">
                Chess Champion
              </p>
              <p className="text-xs text-ink/70 mt-1">
                Competitive tournament discipline translating foresight and tactical rigor to ventures.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
