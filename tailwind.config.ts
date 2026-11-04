import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        butter: '#FFF8E6',
        ink: {
          DEFAULT: '#2A1F14',
          10: 'rgba(42, 31, 20, 0.10)',
          25: 'rgba(42, 31, 20, 0.25)',
          50: 'rgba(42, 31, 20, 0.50)',
          75: 'rgba(42, 31, 20, 0.75)',
        },
        apricot: '#FF9F5A',
        coral: '#FF6F61',
        lemon: '#FFE27A',
        kelp: {
          DEFAULT: '#2F6B4F',
          dark: '#24533D',
          light: '#3C8463',
        },
        selection: '#FFE2C8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tracked': '0.2em',
      },
      transitionTimingFunction: {
        'accordion': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
