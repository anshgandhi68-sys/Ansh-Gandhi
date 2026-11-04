import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ventures from '@/components/Ventures';
import Research from '@/components/Research';
import Achievements from '@/components/Achievements';
import Journey from '@/components/Journey';
import Philosophy from '@/components/Philosophy';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Floating Glass Navigation */}
      <Navigation />

      {/* Hero: Layered Cinematic Intro with Orbital Ring & Floating Tiles */}
      <Hero />

      {/* About: Split-Screen Editorial Narrative */}
      <About />

      {/* Ventures: Interactive Project Showcase (flex:1 to flex:4 expanding) */}
      <Ventures />

      {/* Research: Independent Theoretical Exploration of Dimensions, Time & Space */}
      <Research />

      {/* Achievements: Verified Milestones & Chessboard-Themed Strategic Card */}
      <Achievements />

      {/* Journey: 4-Panel Expanding Accordion with 3.5s Auto-Advance */}
      <Journey />

      {/* Build With Purpose: Personal Operating Philosophy */}
      <Philosophy />

      {/* Selected Interests: 5-Concept Interactive Gallery */}
      <Interests />

      {/* Contact: Direct Relays & Verified Digital Profiles */}
      <Contact />

      {/* Footer: Large Typography & Identity Anchor */}
      <Footer />
    </main>
  );
}
