import About from "./About";
import Portfolio from "./Portfolio";
import Navigator from "./Navigator";

export const getBody = (name: string | undefined) => {
  switch (name) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "navigator":
      return <Navigator />;
  }
};
