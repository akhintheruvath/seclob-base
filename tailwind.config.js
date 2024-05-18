module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '1px',
        md:'1px',
        lg: '1px',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      screens: {
        'mmd': {'max': '999px'},
        'ssm': {'max': '512px'}
      }
    },
  },
  plugins: [],
}