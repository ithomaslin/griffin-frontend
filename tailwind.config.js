/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js';

module.exports = {
  // enable dark mode via class strategy
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/preline/dist/*.js",
    'node_modules/@preline/overlay/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: "#f14b23"
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      borderWidth: {
        1: "1px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    preline,
  ],
};