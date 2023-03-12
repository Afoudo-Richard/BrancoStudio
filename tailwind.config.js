/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./pages/*.{html,js}", "./assets/js/*js"],
  important: true,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif;'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '0rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '900px',
          xl: '1050px',
          // '2xl': '1496px',
        },
      },
      minHeight: {
        '600': '600px',
      },
      height: {
        '128': '32rem',
      },
      colors : {
        'primary': {  DEFAULT: '#152235',  50: '#4A77B7',  100: '#436DAA',  200: '#385A8D',  300: '#2C476F',  400: '#213552',  500: '#152235',  600: '#05080D',  700: '#000000',  800: '#000000',  900: '#000000'},
        'linen': {  DEFAULT: '#FCF2EB',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#FCF2EB',  600: '#F5D2BA',  700: '#EDB389',  800: '#E69359',  900: '#DF7328'},
        'blue-zodiac': {  DEFAULT: '#0E2944',  50: '#3485D5',  100: '#2A7BCB',  200: '#2366AA',  300: '#1C5288',  400: '#153D66',  500: '#0E2944',  600: '#040D15',  700: '#000000',  800: '#000000',  900: '#000000'},
        'alice-blue': {  DEFAULT: '#F5FBFF',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#F5FBFF',  600: '#BDE5FF',  700: '#85CEFF',  800: '#4DB8FF',  900: '#15A1FF'},
      },
    },
  },
  plugins: [],
}
