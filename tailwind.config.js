const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 'media' is also a valid option
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blueGray,
          '50': '#f8fafc',
          '900': '#1e293b',
          '950': '#0f172a',
        },
        secondary: {
          ...colors.cyan,
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
          '700': '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem', // Example for new spacing value
      },
      fontSize: {
        '5xl': ['2.25rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '6xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 4px 6px rgba(0, 0, 0, 0.15)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        // Define your custom gradients
        'primary-gradient-start': '#c084fc', // Your custom start color
        'primary-gradient-end': '#f472b6', // Your custom end color
        'secondary-gradient-start': '#3b82f6', // Another custom start color
        'secondary-gradient-end': '#c084fc', // Another custom end color
        // You can continue to use or override the blueGray and cyan gradients as needed
      }),
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
      textColor: ['active', 'group-hover'],
      borderColor: ['focus-visible', 'first', 'group-hover'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      scale: ['group-hover'],
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.animate-fade-in': {
          animation: 'fade-in 0.5s ease-in-out',
        },
        '.scale-on-hover': {
          transform: 'scale(1.05)',
        },
        '.scale-on-hover:hover': {
          transform: 'scale(1)',
        },
        '.rotate-on-hover:hover': {
          transform: 'rotate(3deg)',
        },
        // Add any additional custom utilities you might need
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
