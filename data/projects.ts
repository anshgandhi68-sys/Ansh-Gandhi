export interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  details: {
    problem: string;
    solution: string;
    architecture: string;
    impact: string;
  };
  category: string;
  tech: string[];
  websiteUrl?: string;
  isExternalLink?: boolean;
  accentColor: string;
  badge: string;
}

export const projects: Project[] = [
  {
    id: 'workivo',
    number: '01',
    title: 'WORKIVO',
    role: 'Founder',
    tagline: 'Home-Services Marketplace Platform',
    description: 'A home-services marketplace connecting customers with verified service professionals, making skilled domestic and commercial services accessible, transparent, and dependable.',
    details: {
      problem: 'The fragmented local home-services sector suffers from erratic pricing, unvetted service providers, and lack of accountability.',
      solution: 'Built an end-to-end platform bridging customers with vetted technicians, providing structured pricing, scheduled appointments, and verified customer feedback.',
      architecture: 'Modern full-stack service marketplace architecture with real-time job dispatching, geolocation-assisted routing, and secure workflow tracking.',
      impact: 'Operating digital venture active at workivo.in, anchoring Ansh A Gandhi\'s vision for customer-first service technology.'
    },
    category: 'Venture & Marketplace',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Real-time Dispatch', 'Venture Ops'],
    websiteUrl: 'https://workivo.in',
    isExternalLink: true,
    accentColor: '#FF9F5A',
    badge: 'Active Venture'
  },
  {
    id: 'supply-chain-sentinel',
    number: '02',
    title: 'SUPPLY CHAIN SENTINEL 2.0',
    role: 'Lead Architect & Builder',
    tagline: 'Software Supply-Chain Security & Dependency Intelligence',
    description: 'A software supply-chain security platform focused on dependency intelligence, continuous vulnerability analysis, and cryptographic build provenance.',
    details: {
      problem: 'Modern software relies on thousands of unvetted open-source transitive dependencies, exposing codebases to supply chain injection attacks and CVE exploits.',
      solution: 'Engineered automated SBOM generation, deep transitive dependency graph inspection, and real-time malicious package detection.',
      architecture: 'Graph-based dependency parser integrated with CVE/NVD threat feeds, multi-ecosystem package registry crawlers, and integrity monitors.',
      impact: 'Significantly lowers the barrier for engineering teams to audit their software bill of materials and enforce zero-trust dependency policies.'
    },
    category: 'Cybersecurity & DevSecOps',
    tech: ['TypeScript', 'Dependency Graphing', 'CVE Engine', 'SBOM Standards', 'Security Analytics'],
    accentColor: '#2F6B4F',
    badge: 'Security Platform'
  },
  {
    id: 'evalipie',
    number: '03',
    title: 'EVALIPIE',
    role: 'Creator & Developer',
    tagline: 'AI-Assisted Software & Project Evaluation Platform',
    description: 'An AI-assisted software and project evaluation platform designed to stress-test claims, audit architectural feasibility, and benchmark project integrity.',
    details: {
      problem: 'Evaluating technical claims in startup pitches and software submissions is manual, error-prone, and susceptible to superficial marketing claims.',
      solution: 'Built an automated multimodal evaluation system that digests specifications, analyzes repository code quality, and scores objective claims against real metrics.',
      architecture: 'LLM evaluation pipelines combined with static analysis rules, heuristic code smell detectors, and structured rubric scorecards.',
      impact: 'Provides objective diagnostic scorecards for accelerators, academic juries, and engineering leaders reviewing project submissions.'
    },
    category: 'Artificial Intelligence & QA',
    tech: ['LLM Diagnostics', 'Heuristic Scoring', 'Next.js', 'Static Code Analysis', 'Python'],
    accentColor: '#FF6F61',
    badge: 'Evaluation Engine'
  },
  {
    id: 'gridguard',
    number: '04',
    title: 'GRIDGUARD',
    role: 'System Concept & Lead',
    tagline: 'Microgrid Operations & Energy Management System',
    description: 'A microgrid operations and energy management concept for commercial enterprises, orchestrating distributed renewable generation, battery storage, and dynamic loads.',
    details: {
      problem: 'Commercial enterprises struggle with peak demand electricity tariffs and lack automated telemetry to coordinate on-site solar, storage, and grid draw.',
      solution: 'Conceived a real-time telemetry model that forecasts peak loads, switches battery state-of-charge intelligently, and protects against grid outages.',
      architecture: 'Simulated IoT edge gateway telemetry, time-series load forecasting algorithms, and rule-based energy dispatch controllers.',
      impact: 'Establishes a practical architectural blueprint for sustainable, resilient industrial microgrids with reduced carbon footprints.'
    },
    category: 'CleanTech & Energy Systems',
    tech: ['Distributed Systems', 'Energy Modeling', 'Time-Series Analysis', 'IoT Telemetry'],
    accentColor: '#FFE27A',
    badge: 'CleanTech Concept'
  },
  {
    id: 'civora',
    number: '05',
    title: 'CIVORA',
    role: 'Creator & AI Systems Builder',
    tagline: 'Autonomous AI Software Engineering Agent',
    description: 'An AI software engineering agent concept centered on repository intelligence, structural code diagnostics, and autonomous developer workflows.',
    details: {
      problem: 'Current coding assistants operate with narrow token windows, missing high-level repository context, system invariants, and cross-file side effects.',
      solution: 'Architected an autonomous repository intelligence agent that parses ASTs, maps dependency flows, and generates verified code edits with regression safeguards.',
      architecture: 'Abstract Syntax Tree (AST) indexing, semantic retrieval graph, multi-step planning loop, and sandboxed test execution.',
      impact: 'Pioneers context-aware code synthesis that respects project architecture, reducing context switching and repetitive maintenance overhead.'
    },
    category: 'AI Engineering & Agents',
    tech: ['Autonomous Agents', 'AST Parsing', 'Semantic Graphs', 'Context Orchestration'],
    accentColor: '#2A1F14',
    badge: 'Autonomous AI'
  }
];
