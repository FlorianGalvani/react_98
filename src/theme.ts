export type ThemeType = typeof theme; // This is the type definition for my theme object.

const theme = {
  font: {
    size: {
      tiny: "14px",
      normal: "16px",
      largeTitle: "32px",
      buttonIcon: "5px"
    },
    weight: {
      normal: 400,
      bold: 800
    }
  },
  colors: {
    layout: {
      body: "#018281",
      elements: "#818181",
      separator: "#2a2a2a",
      accent: "#010081"
    },
    border: {
      light: "#fdffff",
      dark: "#000"
    },
    text: {
      light: "#fdffff",
      dark: "#000"
    }
  },
  breakpoint: {
    /* Desktops and laptops */
    desktop: "1824px",
    /* iPads (landscape) */
    laptop: "1224px",
    /* iPads (portrait) */
    tablet: "1024px",
    /* Smartphones (landscape) */
    mobile: "768px"
  }
};
export default theme;
