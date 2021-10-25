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
        'rushia': {
          'title': '#828796',
          'body': '#91f0b4',
          'text-body': '#7e8594'
        }
      },
      backgroundImage: {
        'card': 'linear-gradient(rgba(0, 0, 0, 0) 0px, rgb(0, 0, 0) 100%)'
      },
      textShadow: {
        'strong-title': '0px 2px 0 #21C6FD, 0 3px 0 #4D9FEE',
        'other-text': '0px 1px 0 #ffffff, 0px 3px 0 #21C6FD, 0 4px 0 #4D9FEE'
      },
      boxShadow: {
        'hololive': 'rgba(52, 201, 254, 0.5) -5px 5px, rgba(52, 201, 254, 0.4) -10px 10px, rgba(52, 201, 254, 0.3) -15px 15px, rgba(52, 201, 254, 0.2) -20px 20px, rgba(52, 201, 254, 0.1) -25px 25px, rgba(52, 201, 254, 0.05) -30px 30px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
