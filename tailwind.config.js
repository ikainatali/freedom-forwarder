/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
      },
      colors: {
        primary: "#ED1C24",
        secondary: "#20419A",
        tertiary: "#C0C0C0",
        "primary-light": "#F7848C",
        "secondary-light": "#D9E3FF",
      },
      backgroundSize: {
      '100': '152%',
    }
    },
  },
  plugins: [],
}