import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': {
          DEFAULT: '#3F81B8',
          '50': '#7FADD3',
          '100': '#78A8D1',
          '200': '#699FCC',
          '300': '#5995C6',
          '400': '#4A8BC1',
          '500': '#3F81B8',
          '600': '#336996',
          '700': '#285174',
          '800': '#1C3951',
          '900': '#10212F'
        },
        'secondary-color': {
          DEFAULT: '#9F2A2A',
          '50': '#F8EBE4',
          '100': '#F2D7CC',
          '200': '#E5AC9C',
          '300': '#D87B6C',
          '400': '#CB463B',
          '500': '#9F2A2A',
          '600': '#83232A',
          '700': '#661B26',
          '800': '#4A1420',
          '900': '#2E0C16'
        },
        "gray": {
          DEFAULT: '#101010',
          50: '#A8A8A8',
          100: '#9F9F9F',
          200: '#8D8D8D',
          300: '#7C7C7C',
          400: '#6A6A6A',
          500: '#585858',
          600: '#464646',
          700: '#343434',
          800: '#222222',
          900: '#101010'
        }

      },
      fontFamily: {
        // Add your custom fonts and enjoy.
        'Oswald': ["Oswald", "Sans-serif"],
        'Macondo': ["Macondo", "Sans-serif"],
        'Allura': ['Allura', "cursive"],
        'Lora': ['Lora', 'serif'],
        'greatVibes': ["Great Vibes", "sans-serif"]
      },
    }
  },
  plugins: [],
}
export default config
