import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      FHD: '1900px',
      UHD: '2200px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '2rem',
        xxl: '2rem',
        FHD: '4rem',
        UHD: '4rem'
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      purpil: '#6E00FF',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      lightgray: 'lightgray'
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      'space-grotesk': 'Space Grotesk, sans-serif',
      amulya: 'Amulya, sans-serif',
      synonym: 'Synonym, sans-serif',
    },
  },
  plugins: [],
}
export default config
