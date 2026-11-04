import React from 'react';

export default function StructuredData() {
  const connectedGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://anshgandhi.vercel.app/#profilepage',
        url: 'https://anshgandhi.vercel.app',
        name: 'Ansh Gandhi — Official Digital Identity Platform',
        description: 'Official digital identity platform and profile of Ansh Gandhi — Founder, Technology Builder, and Independent Researcher.',
        isPartOf: {
          '@id': 'https://anshgandhi.vercel.app/#website'
        },
        mainEntity: {
          '@id': 'https://anshgandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://anshgandhi.vercel.app/#website',
        url: 'https://anshgandhi.vercel.app',
        name: 'Ansh Gandhi Official Website',
        alternateName: 'Ansh Gandhi Digital Identity',
        description: 'Official personal digital identity platform of Ansh Gandhi — Founder, Technology Builder, and Independent Researcher.',
        publisher: {
          '@id': 'https://anshgandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://anshgandhi.vercel.app/#person',
        name: 'Ansh Gandhi',
        alternateName: 'Ansh A. Gandhi',
        url: 'https://anshgandhi.vercel.app',
        image: 'https://anshgandhi.vercel.app/images/ansh-gandhi.jpg',
        jobTitle: [
          'Founder',
          'Technology Builder',
          'Independent Researcher'
        ],
        description: 'Ansh Gandhi is an entrepreneur, founder of Workivo, technology builder, and independent researcher exploring software systems, artificial intelligence, and multidimensional theoretical physics.',
        sameAs: [
          'https://www.linkedin.com/in/ansh-a-gandhi-76257b420/',
          'https://www.instagram.com/anshhgandhii_/',
          'https://github.com/anshgandhi'
        ],
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
      },
      {
        '@type': 'Organization',
        '@id': 'https://workivo.in/#organization',
        name: 'Workivo',
        url: 'https://workivo.in',
        description: 'A home-services marketplace connecting customers with verified service professionals.',
        founder: {
          '@id': 'https://anshgandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'ItemList',
        '@id': 'https://anshgandhi.vercel.app/#projects',
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
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(connectedGraph) }}
    />
  );
}
