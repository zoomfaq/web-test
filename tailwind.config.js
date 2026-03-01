/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        goldSoft: '#8f6b1a',
        steel: '#171a23',
        void: '#090a0f',
        blood: '#6f1111',
        smoke: '#c5c8d3'
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0,0,0,0.5)'
      }
    }
  },
  plugins: []
};
