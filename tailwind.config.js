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
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#8BA5FF",
        secondary: "#3699db",
        tertiary: "#2F4050",
        shadow: "#232E3A",
        accent: "#F7F7F9",
        positive: "#009D10",
        negative: "#FF6666",
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