export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#e6f0ff',
          200: '#ccdfff',
          300: '#b3ceff',
          400: '#99bdff',
          500: '#80acff', // primary brand color
          600: '#668bcc',
          700: '#4d6a99',
          800: '#334966',
          900: '#1a2933',
        },
        // Add more color scales as needed
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // Add more custom fonts or other font categories as needed
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 2px 4px rgba(0, 0, 0, 0.2)',
        // Define other custom shadows if needed
      },
      // Add other theme extensions like spacing, fontSize, etc., as needed
    },
  },
  plugins: [],
  // Add any Tailwind CSS plugins you might need
};
