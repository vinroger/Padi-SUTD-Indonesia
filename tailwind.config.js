const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities = {
        "#bg-hero" : {
          "transition": "all 1s ease",
          "-moz-transition": "all 1s ease",
          "-ms-transition": "all 1s ease",
          "-webkit-transition": "all 1s ease",
          "-o-transition": "all 1s ease",
          "background-size":"100%",
        },
        "#bg-hero:hover" : {
          "background-size" : "110%",

        },


      };

      addUtilities(utilities);


    })
  ],
}
