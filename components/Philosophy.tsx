'use client';

import React, { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          stagger: 0.18,
          duration: 0.85,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: 'BUILD',
      subtitle: 'Execution & Architecture',
      statement: 'Turning concepts into working technology.',
      description: 'Ideas without execution remain abstract speculation. Whether designing marketplace infrastructure at Workivo or parsing ASTs for AI code agents, the commitment is always to working, dependable software.',
      icon: 'solar:code-square-bold-duotone',
      accent: '#FF9F5A',
      num: '01',
    },
    {
      title: 'EXPLORE',
      subtitle: 'Inquiry & Physics',
      statement: 'Learning, investigating and asking difficult questions.',
      description: 'Refusing intellectual complacency. Pursuing independent questions into multidimensional geometry, relativistic time flow, and the fabric of spacetime, while maintaining strict adherence to empirical truth.',
      icon: 'solar:planet-bold-duotone',
      accent: '#2F6B4F',
      num: '02',
    },
    {
      title: 'COMPETE',
      subtitle: 'Strategy & Focus',
      statement: 'Developing discipline, strategy and focus through chess and challenges.',
      description: 'Every chess position demands honesty, precision, and forward calculation. Competitive mastery instills the resilience and strategic patience necessary to navigate high-stakes venture building.',
      icon: 'solar:crown-bold-duotone',
      accent: '#FF6F61',
      num: '03',
    },
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-24 md:py-32 relative border-t border-ink/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-apricot" />
          <span className="text-xs font-mono uppercase tracking-widest text-ink/60">
            06 / Operating Ethos
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-ink uppercase leading-[0.95]">
            BUILD WITH <br />
            <span className="text-apricot">PURPOSE.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
            A cohesive framework uniting engineering pragmatism, intellectual curiosity, and competitive strategic rigor.
          </p>
        </div>

        {/* 3 Editorial Columns */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group bg-white/70 border border-ink/15 rounded-3xl p-8 shadow-xs notched-box flex flex-col justify-between hover:border-ink/30 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient blob on hover */}
              <div
                className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: item.accent }}
              />

              <div className="space-y-6">
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <span className="font-mono text-xs font-bold text-ink/40">
                    {item.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.accent}18` }}
                  >
                    <Icon
                      icon={item.icon}
                      className="w-6 h-6"
                      style={{ color: item.accent }}
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-medium tracking-tight text-ink uppercase mt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base font-medium text-ink leading-snug">
                  &ldquo;{item.statement}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink/50">
                <span>ETHOS PILLAR</span>
                <span className="text-ink font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read In Detail &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
