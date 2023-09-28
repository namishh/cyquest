/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      lineHeight: {
        'extra-loose': '2.5',
        '14': '3rem',
      },
      height: {
        'fuller': '140vh',
      },
      animation: {
        text: 'text 5s ease infinite',
        blob: "blob 7s infinite",

      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        blob: {
          "0%": {
            transform: "rotate(45deg) scale(1)",
          },
          "33%": {
            transform: "rotate(0deg) scale(1.1)",
          },
          "66%": {
            transform: "rotate(90deg) scale(0.9)",
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
          },
        },
      },
    },
    fontFamily: {
      'sans': ['Rubik', 'ui-sans-serif', 'system-ui',],
      'serif': ['Bree Serif', 'ui-serif', 'Georgia'],
      'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5c7cfa",
          "secondary": "#7190ed",
          "accent": "#f06595",
          "neutral": "#090909",
          "base-100": "#010101",
          "info": "#20c997",
          "success": "#40c057",
          "warning": "#fab005",
          "error": "#ff6b6b",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'),],
}

