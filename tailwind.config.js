module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/container/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'turquoise-blue': {
          DEFAULT: '#5EDDEF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E9FAFD',
          '300': '#BBF1F8',
          '400': '#8CE7F4',
          '500': '#5EDDEF',
          '600': '#30D3EA',
          '700': '#15BBD2',
          '800': '#1091A4',
          '900': '#0C6875'
        },
        'dodger-blue': {
          DEFAULT: '#21C6FD',
          '50': '#FFFFFF',
          '100': '#EBFAFF',
          '200': '#B9EDFE',
          '300': '#86E0FE',
          '400': '#54D3FD',
          '500': '#21C6FD',
          '600': '#02AFE9',
          '700': '#0289B6',
          '800': '#016384',
          '900': '#013D51'
        },
        'picton-blue': {
          DEFAULT: '#4D9FEE',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#D9EAFB',
          '300': '#AAD1F7',
          '400': '#7CB8F2',
          '500': '#4D9FEE',
          '600': '#1E86EA',
          '700': '#136CC2',
          '800': '#0E5294',
          '900': '#0A3865'
        },
      },
      backgroundImage: {
        'card': 'linear-gradient(rgba(0, 0, 0, 0) 0px, rgb(0, 0, 0) 100%)'
      },
      textShadow: {
        'strong-title': '0px 2px 0 #21C6FD, 0 3px 0 #4D9FEE',
        'other-text': '0px 1px 0 #ffffff, 0px 3px 0 #21C6FD, 0 4px 0 #4D9FEE'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
