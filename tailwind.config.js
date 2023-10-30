/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(242, 106, 59, 0.80)',
      },
      fontFamily: {
        'display': ['Josefin Sans'],
        'normal': ['Inter'],
      },
    },
  },
  plugins: [],
};
