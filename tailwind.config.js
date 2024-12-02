/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
      },
      colors: {
        primary: {
          50: '#FDF8F4',
          100: '#FFE7BA',
          200: '#B4E4FF',
          300: '#FFB4B4',
        },
      },
    },
  },
  plugins: [],
} 