import React from 'react';

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ansh Gandhi',
    alternateName: 'Ansh A. Gandhi',
    url: 'https://anshgandhi.vercel.app',
    jobTitle: [
      'Founder',
      'Technology Builder',
      'Independent Researcher'
    ],
    description:
      'Ansh Gandhi is an entrepreneur, founder of Workivo, technology builder, and independent researcher exploring software systems, artificial intelligence, and multidimensional theoretical physics.',
    sameAs: [
      'https://www.linkedin.com/in/ansh-a-gandhi-76257b420/',
      'https://www.instagram.com/anshhgandhii_/',
      'https://github.com/anshgandhi'
    ],
    founder: {
      '@type': 'Organization',
      name: 'Workivo',
      url: 'https://workivo.in',
      description: 'Home-services marketplace connecting customers with verified professionals.'
    },
    knowsAbout: [
      'Entrepreneurship',
      'Software Architecture',
      'Artificial Intelligence',
      'Software Supply Chain Security',
      'Autonomous Agents',
      'CleanTech Microgrids',
      'Competitive Chess Strategy',
      'Theoretical Physics',
      'Higher Dimensions',
      'Thermodynamic Arrow of Time'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ansh Gandhi — Official Digital Identity Platform',
    alternateName: 'Ansh Gandhi Official Website',
    url: 'https://anshgandhi.vercel.app',
    description:
      'Official personal digital identity platform of Ansh Gandhi — Founder, Technology Builder, and Independent Researcher.',
    publisher: {
      '@type': 'Person',
      name: 'Ansh Gandhi'
    }
  };

  const projectItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Projects & Ventures by Ansh Gandhi',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Workivo',
          applicationCategory: 'BusinessApplication',
          url: 'https://workivo.in',
          description: 'A home-services marketplace connecting customers with verified professionals.'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Supply Chain Sentinel 2.0',
          applicationCategory: 'SecurityApplication',
          description: 'Software supply-chain security platform focused on dependency intelligence and vulnerability analysis.'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Evalipie',
          applicationCategory: 'DeveloperApplication',
          description: 'AI-assisted software and project evaluation platform for testing technical claims.'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'GridGuard',
          applicationCategory: 'EnergyApplication',
          description: 'Microgrid operations and energy management concept for commercial facilities.'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Civora',
          applicationCategory: 'DeveloperApplication',
          description: 'AI software engineering agent concept involving repository intelligence and diagnostics.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectItemListSchema) }}
      />
    </>
  );
}
