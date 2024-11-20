const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1500px',
      '4xl': '1780px',
    },
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        satisfy: ['var(--font-satisfy)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        h1: [
          '2.25rem',
          {
            lineHeight: '2.75rem',
          },
        ],
        h2: [
          '1.875rem',
          {
            lineHeight: '2.375rem',
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        h4: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        h5: [
          '1.125rem',
          {
            lineHeight: '1.625rem',
          },
        ],
        h6: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        quote: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
          },
        ],
      },
      colors: {
        gray: {
          light: 'rgb(var(--gray-light) / <alpha-value>)',
          lighter: 'rgb(var(--gray-lighter) / <alpha-value>)',
          lightest: 'rgb(var(--gray-lightest) / <alpha-value>)',
          DEFAULT: 'rgb(var(--gray-default) / <alpha-value>)',
          dark: 'rgb(var(--gray-dark) / <alpha-value>)',
          1000: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
        },
        red: {
          light: 'rgb(var(--red-light) / <alpha-value>)',
          lighter: 'rgb(var(--red-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--red-default) / <alpha-value>)',
          dark: 'rgb(var(--red-dark) / <alpha-value>)',
        },
        orange: {
          light: 'rgb(var(--orange-light) / <alpha-value>)',
          lighter: 'rgb(var(--orange-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--orange-default) / <alpha-value>)',
          dark: 'rgb(var(--orange-dark) / <alpha-value>)',
        },
        green: {
          light: 'rgb(var(--green-light) / <alpha-value>)',
          lighter: 'rgb(var(--green-lighter) / <alpha-value>)',
          DEFAULT: 'rgb(var(--green-default) / <alpha-value>)',
          dark: 'rgb(var(--green-dark) / <alpha-value>)',
        },
      },
      textColor: {
        skin: {
          base: 'rgb(var(--gray-light) / <alpha-value>)',
        },
      },
      animation: {
        blink: 'blink 1.4s infinite both;',
        'scale-up': 'scaleUp 500ms infinite alternate',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        card: '0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 2px 4px rgba(35, 38, 59, 0.1)',
        'card-hover':
          '0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 3px 4px rgba(35, 38, 59, 0.1)',
        'card-two': '0px 8px 12px rgba(0, 0, 0, 0.08)',
        'menu-shadow': '0px 0px 8px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
