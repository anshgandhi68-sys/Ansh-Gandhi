import type { Metadata, Viewport } from 'next';
import './globals.css';
import FrameGuide from '@/components/FrameGuide';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://ansh-gandhi.vercel.app'),
  title: 'Ansh A Gandhi — Founder · Technology Builder · Independent Researcher',
  description:
    'The official digital identity platform of Ansh A Gandhi. Founder of Workivo, technology builder, and independent researcher exploring startups, AI systems, software supply chain security, and theoretical physics.',
  keywords: [
    'Ansh A Gandhi',
    'Ansh Gandhi',
    'Ansh A Gandhi Founder',
    'Ansh A Gandhi Workivo',
    'Ansh A Gandhi Entrepreneur',
    'Ansh A Gandhi Researcher',
    'Workivo',
    'Technology Builder',
    'Chess Champion',
    'Dimensions Time Space Research'
  ],
  authors: [{ name: 'Ansh A Gandhi', url: 'https://ansh-gandhi.vercel.app' }],
  creator: 'Ansh A Gandhi',
  publisher: 'Ansh A Gandhi',
  alternates: {
    canonical: 'https://ansh-gandhi.vercel.app',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://ansh-gandhi.vercel.app',
    title: 'Ansh A Gandhi — Founder · Technology Builder · Independent Researcher',
    description:
      'Official digital identity platform of Ansh A Gandhi. Ideas into ventures. Curiosity beyond boundaries.',
    siteName: 'Ansh A Gandhi Official Website',
    images: [
      {
        url: 'https://ansh-gandhi.vercel.app/images/ansh-gandhi.jpg',
        width: 1024,
        height: 1024,
        alt: 'Ansh A Gandhi — Founder, Technology Builder and Independent Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh A Gandhi — Founder · Technology Builder · Independent Researcher',
    description:
      'Official digital identity platform of Ansh A Gandhi. Ideas into ventures. Curiosity beyond boundaries.',
    images: ['https://ansh-gandhi.vercel.app/images/ansh-gandhi.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'kGezqfW0xtHP9n7QyZO00aUiwoU7QR1CBsZwHFs8QWk',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFF8E6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* MANDATORY STRICT REQUIREMENT: Load only Plus Jakarta Sans */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body className="bg-butter text-ink antialiased selection:bg-selection selection:text-ink font-sans font-normal relative min-h-screen">
        <StructuredData />
        {/* Fixed Frame Inset 16px with Vertical Guide Lines */}
        <FrameGuide />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
