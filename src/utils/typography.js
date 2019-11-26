import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerWeight: 400,
  headerFontFamily: [
    "Montserrat"
  ],

  bodyFontFamily: ["Montserrat"],
  
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '600',
      ],
    },
    {
      name: 'Raleway',
      styles: [
        '200',
        '400',
        '400i',
        '600',
      ],
    },
  ],
})

export default typography