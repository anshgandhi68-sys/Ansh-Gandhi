export interface Achievement {
  id: string;
  category: 'CHESS' | 'VENTURE' | 'TECHNOLOGY' | 'RESEARCH';
  title: string;
  roleOrHonor: string;
  year: string;
  details: string;
  competitionName?: string;
  division?: string;
  featured?: boolean;
  certificatePlaceholder?: boolean;
}

export const achievementsData: Achievement[] = [
  {
    id: 'chess-champion',
    category: 'CHESS',
    title: 'Competitive Chess Champion',
    roleOrHonor: 'Championship Title',
    year: 'Competitive Record',
    details: 'Demonstrated tactical foresight, rigorous endgame calculation, and strategic positioning across competitive tournament circuits. Chess forms the core foundation of Ansh\'s analytical thinking and disciplined decision-making under high-pressure stakes.',
    competitionName: '[Tournament / Championship Record — Verifiable Record]',
    division: 'Competitive Open / Classical & Rapid Divisions',
    featured: true,
    certificatePlaceholder: true
  },
  {
    id: 'workivo-launch',
    category: 'VENTURE',
    title: 'Founder & Venture Builder — Workivo',
    roleOrHonor: 'Founder',
    year: 'Active Operation',
    details: 'Conceived, architected, and deployed the official Workivo platform (workivo.in), establishing an integrated digital infrastructure for on-demand home services.',
    featured: true
  },
  {
    id: 'cybersecurity-sentinel',
    category: 'TECHNOLOGY',
    title: 'Software Supply Chain Security Architecture',
    roleOrHonor: 'Lead Architect',
    year: 'Production Build',
    details: 'Designed and deployed Supply Chain Sentinel 2.0, establishing automated SBOM inspection, dependency vulnerability graphing, and security analytics.',
    featured: false
  },
  {
    id: 'ai-evalipie',
    category: 'TECHNOLOGY',
    title: 'AI Evaluation & Diagnostic Platform',
    roleOrHonor: 'Platform Creator',
    year: 'System Deployment',
    details: 'Engineered Evalipie, an automated AI-assisted evaluation engine stress-testing software claims and project architectures against objective rubrics.',
    featured: false
  },
  {
    id: 'theoretical-inquiry',
    category: 'RESEARCH',
    title: 'Independent Dimensional & Temporal Inquiries',
    roleOrHonor: 'Independent Researcher',
    year: 'Ongoing Exploration',
    details: 'Authored conceptual exploration notes on 4D hypercube projections, entropy-driven chronological topology, and discrete spacetime geometry.',
    featured: false
  }
];
