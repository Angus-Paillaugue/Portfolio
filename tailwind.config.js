/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins"]
      },
      colors: {
        primary: { 50: '#f5faf8', 100: '#e9f5ef', 200: '#cce8da', 300: '#b2dbc4', 400: '#7ebf92', 500: '#54a262', 600: '#469453', 700: '#307a3c', 800: '#1e6128', 900: '#114a19'},
        "text-main":"#2D2E32"
      },
      boxShadow: {
        "sm":"rgba(0, 0, 0, 0.12) 0px 0px 8px",
        "md":"rgba(0, 0, 0, 0.12) 0px 4px 10px",
        "lg":"rgba(0, 0, 0, 0.12) 0px 6px 16px",
        "xl":"rgba(0, 0, 0, 0.18) 0px 8px 20px",
      },
      borderRadius: {
        lg:"0.75rem"
      },
      gridTemplateColumns:{
        icons:"repeat(auto-fill, minmax(3.5rem, 1fr)"
      },
    },
  },
  darkMode: 'class',
}
