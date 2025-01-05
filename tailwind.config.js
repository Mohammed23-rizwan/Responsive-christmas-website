/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-color-dark": "var(--title-color-dark)",
        "text-color-dark": "var(--text-color-dark)",
        "first-color": "var(--first-color)",
        "first-color-alt": "var(--first-color-alt)",
        "container-color-dark": "var(--container-color-dark)",
        "body-color-dark": "var(--body-color-dark)",
        "text-color-light": "var(--text-color-light)",
      },
      fontSize: {
        "M-biggest-font-size": "var(--M-biggest-font-size)",
        "M-h1-font-size": "var(--M-h1-font-size)",
        "M-h2-font-size": "var(--M-h2-font-size)",
        "M-h3-font-size": "var(--M-h3-font-size)",
        "M-normal-font-size": "var(--M-normal-font-size)",
        "M-small-font-size": "var(--M-small-font-size)",
        "M-smaller-font-size": "var(--M-smaller-font-size)",

        "D-biggest-font-size": "var(--D-biggest-font-size)",
        "D-h1-font-size": "var(--D-h1-font-size)",
        "D-h2-font-size": "var(--D-h2-font-size)",
        "D-h3-font-size": "var(--D-h3-font-size)",
        "D-normal-font-size": "var(--D-normal-font-size)",
        "D-small-font-size": "var(--D-small-font-size)",
        "D-smaller-font-size": "var(--D-smaller-font-size)",
      },
    },
  },
  plugins: [],
};
