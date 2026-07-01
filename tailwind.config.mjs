/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        brand: {
          dark: '#0a0a0c',
          copper: '#c56b4f',
          gray: '#888888',
          line: 'rgba(255,255,255,0.1)'
        }
      },
      letterSpacing: {
        tightest: '-.04em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
};
