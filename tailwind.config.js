/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        },
        boxShadow: {
            sm: 'rgba(0,0,0,0.12) 0 1px 3px, rgba(0,0,0,0.24) 0 1px 2px',
            DEFAULT: 'rgba(0,0,0,0.16) 0 3px 6px, rgba(0,0,0,0.23) 0 3px 6px',
            md: 'rgba(0,0,0,0.19) 0 10px 20px, rgba(0,0,0,0.23) 0 6px 6px',
            lg: 'rgba(0,0,0,0.25) 0 14px 28px, rgba(0,0,0,0.22) 0 10px 10px'
        },
    },
  },
  plugins: [],
}