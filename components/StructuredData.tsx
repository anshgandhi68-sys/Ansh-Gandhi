import React from 'react';

export default function StructuredData() {
  const connectedGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': 'https://ansh-gandhi.vercel.app/#profilepage',
        url: 'https://ansh-gandhi.vercel.app',
        name: 'Ansh A Gandhi — Official Digital Identity Platform',
        description: 'Official digital identity platform and profile of Ansh A Gandhi — Founder, Technology Builder, and Independent Researcher.',
        isPartOf: {
          '@id': 'https://ansh-gandhi.vercel.app/#website'
        },
        mainEntity: {
          '@id': 'https://ansh-gandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ansh-gandhi.vercel.app/#website',
        url: 'https://ansh-gandhi.vercel.app',
        name: 'Ansh A Gandhi Official Website',
        alternateName: 'Ansh A Gandhi Digital Identity',
        description: 'Official personal digital identity platform of Ansh A Gandhi — Founder, Technology Builder, and Independent Researcher.',
        publisher: {
          '@id': 'https://ansh-gandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://ansh-gandhi.vercel.app/#person',
        name: 'Ansh A Gandhi',
        alternateName: ['Ansh Gandhi', 'Ansh A. Gandhi'],
        url: 'https://ansh-gandhi.vercel.app',
        image: 'https://ansh-gandhi.vercel.app/images/ansh-gandhi.jpg',
        jobTitle: [
          'Founder',
          'Technology Builder',
          'Independent Researcher'
        ],
        description: 'Ansh A Gandhi is an entrepreneur, founder of Workivo, technology builder, and independent researcher exploring software systems, artificial intelligence, and multidimensional theoretical physics.',
        sameAs: [
          'https://www.linkedin.com/in/ansh-a-gandhi-76257b420/',
          'https://www.instagram.com/anshhgandhii_/',
          'https://github.com/anshgandhi68-sys'
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
          '@id': 'https://ansh-gandhi.vercel.app/#person'
        }
      },
      {
        '@type': 'ItemList',
        '@id': 'https://ansh-gandhi.vercel.app/#projects',
        name: 'Featured Projects & Ventures by Ansh A Gandhi',
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
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://ansh-gandhi.vercel.app/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Ansh Gandhi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ansh A Gandhi (also known as Ansh Gandhi) is an entrepreneur, technology builder, and independent researcher. He is the founder of Workivo (workivo.in), an integrated home-services marketplace connecting customers with verified professionals, and conducts research across software systems, artificial intelligence, and theoretical physics.'
            }
          },
          {
            '@type': 'Question',
            name: 'Who is Ansh A Gandhi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ansh A Gandhi is the founder of Workivo and a technology builder specializing in full-stack architecture, software supply-chain security, and autonomous AI agents. He is also a competitive tournament chess player applying strategic disciplines to technology ventures.'
            }
          },
          {
            '@type': 'Question',
            name: 'What companies and ventures has Ansh Gandhi founded?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ansh Gandhi founded Workivo (workivo.in), an active digital venture addressing fragmentation in the domestic and commercial services sector. His other technology systems include Supply Chain Sentinel 2.0, Evalipie, GridGuard, and Civora.'
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
