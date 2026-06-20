/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0D0F',
        text: '#F4F2ED',
        accent: '#E8772E',
        accentLight: '#F4A05C',
        muted: '#6B6560',
        surface: '#1C1A1B',
        edge: '#2A2729',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #E8772E 0%, #F4A05C 100%)',
      },
    },
  },
  plugins: [],
}
