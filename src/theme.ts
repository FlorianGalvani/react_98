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
      accent: "#100787"
    },
    border: {
      light: "#fff",
      dark: "#000"
    },
    text: {
      light: "#fff",
      dark: "#000"
    }
  }
};
export default theme;
