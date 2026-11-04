export interface InterestItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  quote: string;
  description: string;
  accentColor: string;
  icon: string;
}

export const interestItems: InterestItem[] = [
  {
    id: 'interest-entrepreneurship',
    number: '01',
    title: 'Venture & Enterprise',
    category: 'Entrepreneurship',
    tag: 'EXECUTION',
    quote: '"Ideas are cheap; execution builds reality."',
    description: 'Transforming theoretical value propositions into viable companies that solve authentic customer pain points.',
    accentColor: '#FF9F5A',
    icon: 'solar:chart-square-bold-duotone'
  },
  {
    id: 'interest-ai',
    number: '02',
    title: 'Autonomous Systems & AI',
    category: 'Technology',
    tag: 'INTELLIGENCE',
    quote: '"Amplifying human intellect through autonomous code agents."',
    description: 'Exploring LLM workflows, AST parsing, automated code analysis, and resilient devsecops pipelines.',
    accentColor: '#2F6B4F',
    icon: 'solar:cpu-bold-duotone'
  },
  {
    id: 'interest-dimensions',
    number: '03',
    title: 'Higher Dimensions',
    category: 'Research',
    tag: 'GEOMETRY',
    quote: '"Looking beyond the 3-dimensional horizon."',
    description: 'Investigating topological projections, hypercube geometry, and dimensional boundary conditions.',
    accentColor: '#FF6F61',
    icon: 'solar:infinity-bold-duotone'
  },
  {
    id: 'interest-time-space',
    number: '04',
    title: 'Chronology & Spacetime',
    category: 'Astrophysics',
    tag: 'COSMOLOGY',
    quote: '"Unraveling the thermodynamic arrow of time."',
    description: 'Examining entropy gradients, causality horizons, and the continuous fabric of spacetime geometry.',
    accentColor: '#FFE27A',
    icon: 'solar:planet-2-bold-duotone'
  },
  {
    id: 'interest-chess',
    number: '05',
    title: 'Competitive Chess',
    category: 'Strategy',
    tag: 'COGNITION',
    quote: '"Every move creates a new universe of variations."',
    description: 'Applying grandmaster-level positional discipline, risk containment, and calculated aggression to modern ventures.',
    accentColor: '#2A1F14',
    icon: 'solar:gamepad-bold-duotone'
  }
];
