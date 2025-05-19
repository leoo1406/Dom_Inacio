/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFF8E0',
          200: '#FFF1C1',
          300: '#FFEB78', // brand color
          400: '#F9D067', // brand color
          500: '#E1B03E', // brand color
          600: '#DDAC47', // brand color
          700: '#B89539', // brand color
          800: '#A67629', // brand color
          900: '#784A17', // brand color
        },
        secondary: {
          100: '#E6E8ED',
          200: '#CDD1DB',
          300: '#B4BAC9',
          400: '#9BA3B7',
          500: '#828CA5',
          600: '#697593',
          700: '#505E81',
          800: '#37476F',
          900: '#181F2E', // brand color
        },
        accent: {
          300: '#F9D067',
          500: '#DDAC47',
          700: '#B89539',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'grain-pattern': "url('https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'wheat-field': "url('https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'soy-field': "url('https://images.pexels.com/photos/3763358/pexels-photo-3763358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'corn-field': "url('https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};