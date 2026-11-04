export interface JourneyPanel {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  headline: string;
  summary: string;
  bulletPoints: string[];
  accentColor: string;
  icon: string;
}

export const journeyPanels: JourneyPanel[] = [
  {
    id: 'founder',
    number: '01',
    title: 'FOUNDER',
    subtitle: 'Entrepreneurship & Ventures',
    badge: 'VENTURE BUILDING',
    headline: 'Transforming high-conviction ideas into operating enterprises.',
    summary: 'Building from first principles. Navigating the journey from early problem identification and customer empathy to product architecture and market deployment. Founder of Workivo.',
    bulletPoints: [
      'Problem validation and customer discovery',
      'Marketplace economics and unit viability',
      'End-to-end product delivery and venture operations'
    ],
    accentColor: '#FF9F5A',
    icon: 'solar:rocket-bold-duotone'
  },
  {
    id: 'builder',
    number: '02',
    title: 'BUILDER',
    subtitle: 'Software, AI & Engineering',
    badge: 'SYSTEMS ARCHITECTURE',
    headline: 'Engineering practical software and intelligent agent pipelines.',
    summary: 'Synthesizing modern web technologies, AI agent loops, and security guardrails into tangible systems. From dependency vulnerability graphs to automated evaluation engines.',
    bulletPoints: [
      'Full-stack application engineering (TypeScript, Next.js, Node.js)',
      'Autonomous AI agent architectures and AST code intelligence',
      'Software supply chain cybersecurity and vulnerability mitigation'
    ],
    accentColor: '#2F6B4F',
    icon: 'solar:code-square-bold-duotone'
  },
  {
    id: 'explorer',
    number: '03',
    title: 'EXPLORER',
    subtitle: 'Dimensions, Time & Space',
    badge: 'INDEPENDENT RESEARCH',
    headline: 'Interrogating fundamental questions about the nature of reality.',
    summary: 'Pursuing self-directed theoretical exploration into multidimensional geometry, relativistic time asymmetry, and topological spacetime networks without dogmatic boundaries.',
    bulletPoints: [
      'Geometric modeling of n-dimensional spatial projections',
      'Entropy gradients and the thermodynamic arrow of time',
      'Clear demarcation between physical laws and exploratory hypotheses'
    ],
    accentColor: '#FF6F61',
    icon: 'solar:planet-bold-duotone'
  },
  {
    id: 'strategist',
    number: '04',
    title: 'STRATEGIST',
    subtitle: 'Chess & Problem Solving',
    badge: 'ANALYTICAL RIGOR',
    headline: 'Calculated foresight honed across competitive chess battlegrounds.',
    summary: 'Competitive chess champion who translates chess principles—deep candidate move analysis, positional defense, and risk management—into venture strategy and technology design.',
    bulletPoints: [
      'Deep tree calculation under strict clock pressure',
      'Asymmetric positional evaluation and prophylactic defense',
      'Strategic patience paired with decisive tactical execution'
    ],
    accentColor: '#2A1F14',
    icon: 'solar:crown-bold-duotone'
  }
];
