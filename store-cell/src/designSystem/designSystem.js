// Substitute fonts
const subFonts = 'Arial, Helvetica, sans-serif';

const theme = {

  weight: {
    fontWeightBold: 700,
    fontWeightSemiBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },

  colors: {
    whiteGlobal: '#ffffff', // background-color default
    darkGray: '#656565', // color default for texts of description 16px
    lightBrown: '#8d8178',
    darkBlack: '#2c2b2b', // color default for texts 24px
    lightGray: '#b2b2b2',
    lightGraySecundary: '#cdcdcd',
    darkGreen: '#006400', //color default of button
    gray: '#808080', // default color for eyeshadows for input
    royalBlue: '#4169E1', // color default for hover for boder, box shandow
    DarkGoldenrod: '#B8860B',
    Red:'#FF0000'  // color errors input

  },

  fontFamilies: {
    sansSerif: 'sans-serif',
    montserratRegular: `Montserrat regular, ${subFonts}`,
    plutoSansRegular: `Pluto Sans Regular, ${subFonts}`,
  }
}

export default theme;