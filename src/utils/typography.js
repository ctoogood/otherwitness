import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerWeight: 600,
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '200',
        '400',
        '600',
      ],
    },
  ],
})

export default typography