/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#111827",
          secondary: "#155e75",
          accent: "#ffd700",
          neutral: "#6b7280",
          "base-100": "#374151",
          info: "#67e8f9",
          success: "#16a34a",
          warning: "#ff9100",
          error: "#ff1054",
        },
        light: {
          primary: "#93c5fd",
          secondary: "#155e75",
          accent: "#0d9488",
          neutral: "#d6d3d1",
          'base-100': "#f3f4f6",
          info: "#22d3ee",
          success: "#22c55e",
          warning: "#ff9100",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
