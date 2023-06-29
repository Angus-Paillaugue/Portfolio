/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}