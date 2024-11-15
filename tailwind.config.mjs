/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
		serif: ['Playfair Display', 'serif'], // Use Playfair Display as the serif font
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
 
  plugins: [],
};
