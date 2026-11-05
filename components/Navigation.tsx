'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Research', href: '#research' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple intersection check for active nav link
      const sections = ['home', 'about', 'ventures', 'research', 'achievements', 'journey', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-5 md:top-7 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-6xl transition-all duration-300 ${
          scrolled ? 'glass-nav-scrolled py-2.5 px-4 md:px-6 rounded-full' : 'glass-nav py-3 px-5 md:px-7 rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-ink hover:text-kelp transition-colors"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-apricot group-hover:scale-125 transition-transform" />
            <span className="font-semibold tracking-tight text-sm uppercase text-ink">
              ANSH <span className="inline-block ml-0.5">A</span> GANDHI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                    isActive
                      ? 'bg-ink text-butter shadow-sm'
                      : 'text-ink/75 hover:text-ink hover:bg-ink/[0.04]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-ink text-butter hover:bg-kelp text-[12px] font-medium uppercase tracking-wider rounded-full transition-all duration-200 group shadow-sm hover:shadow"
            >
              <span>LET&apos;S CONNECT</span>
              <Icon
                icon="solar:arrow-right-up-linear"
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-ink hover:bg-ink/[0.05] rounded-full transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Icon
                icon={mobileMenuOpen ? 'solar:close-square-linear' : 'solar:hamburger-menu-linear'}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-md md:hidden pt-24 px-6 pb-12 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-butter border border-ink/15 rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink/10 pb-3">
              <span className="text-xs uppercase tracking-widest text-ink/50 font-mono">Navigation</span>
              <span className="text-xs font-medium text-apricot">Ansh A Gandhi</span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-ink hover:bg-ink/[0.04] rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4 text-ink/40" />
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-ink/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-ink text-butter flex items-center justify-center gap-2 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-kelp transition-colors"
              >
                <span>LET&apos;S CONNECT</span>
                <Icon icon="solar:arrow-right-up-linear" className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-butter/80">
            &copy; {new Date().getFullYear()} Ansh A Gandhi &middot; Digital Identity
          </div>
        </div>
      )}
    </>
  );
}
