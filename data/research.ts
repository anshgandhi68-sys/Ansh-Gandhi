export interface ResearchTopic {
  id: string;
  title: string;
  tag: string;
  description: string;
  groundedPhysics: string;
  exploratoryHypothesis: string;
  keyQuestions: string[];
}

export const researchPillars: ResearchTopic[] = [
  {
    id: 'dimensions',
    title: 'Higher Dimensions & Geometric Projections',
    tag: 'DIMENSIONS',
    description: 'Investigating geometric analogies and mathematical projections of n-dimensional space into observable 3D topology.',
    groundedPhysics: 'Rooted in differential geometry, hypercube projection mathematics, Kaluza-Klein theory, and string-theoretical compactified extra dimensions.',
    exploratoryHypothesis: 'Independent conceptual frameworks exploring whether spatial degrees of freedom could manifest as emergent non-local connections in lower-dimensional projections.',
    keyQuestions: [
      'How do rotation dynamics in 4D space (such as Clifford rotations) map to observable 3D vectors?',
      'Can higher-dimensional shadow projections yield intuitive topological models for field interactions?',
      'What minimum geometric dimensionality is required to eliminate mathematical singularities?'
    ]
  },
  {
    id: 'time',
    title: 'The Arrow of Time & Chronological Topology',
    tag: 'TIME',
    description: 'Analyzing the asymmetry of time, thermodynamic entropy, and the structural nature of chronological causality.',
    groundedPhysics: 'Established in the Second Law of Thermodynamics, special relativity\'s light cones, and the Einstein-Minkowski block universe concept.',
    exploratoryHypothesis: 'Exploring conceptual thought experiments regarding whether temporal flow is an intrinsic dimension or an emergent byproduct of quantum information entanglement.',
    keyQuestions: [
      'Is the thermodynamic arrow of time an absolute invariant or an observer-dependent entropy gradient?',
      'How does causal determinism hold at extreme cosmological horizon transitions?',
      'Could time coordinates possess subtle cyclical or multi-path structures in high-gravity systems?'
    ]
  },
  {
    id: 'space',
    title: 'Spacetime Fabric & Vacuum Topology',
    tag: 'SPACE',
    description: 'Conceptual inquiries into the fundamental continuity, curvature, and energy density of the spacetime continuum.',
    groundedPhysics: 'Grounded in Einstein field equations, general relativity curvature tensors, and quantum field vacuum fluctuations.',
    exploratoryHypothesis: 'Theoretical notes on whether spatial fabric can be modeled as a discrete information network rather than a continuous smooth background manifold.',
    keyQuestions: [
      'Does spacetime remain smooth at Planck scales or dissolve into discrete topological networks?',
      'How does vacuum energy contribute to spatial expansion on cosmological scales?',
      'What geometric constraints govern topological transitions in curved spacetime?'
    ]
  }
];

export const researchNotes = [
  {
    id: 'note-01',
    date: 'Exploration Note 01',
    title: 'Visualizing 4D Orthogonality through 3D Wireframes',
    status: 'Working Draft',
    excerpt: 'Examining how four mutually perpendicular axes can be rendered onto 2D and 3D frames through stereographic projection without topological tearing.'
  },
  {
    id: 'note-02',
    date: 'Exploration Note 02',
    title: 'Entropy Gradients and the Subjective Progression of Time',
    status: 'Inquiry in Progress',
    excerpt: 'Comparing the cosmological low-entropy boundary condition of the Big Bang with local thermodynamic arrows in closed versus open physical systems.'
  },
  {
    id: 'note-03',
    date: 'Exploration Note 03',
    title: 'Information Horizon Dynamics in Discrete Geometry',
    status: 'Independent Hypothesis',
    excerpt: 'Investigating if space volume can be represented as maximum holographic information packing bounded by surface horizon boundary conditions.'
  }
];
