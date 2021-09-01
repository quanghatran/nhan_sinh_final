import React from "react";
import NewFooter from "../../common/newfooter/NewFooter";
import Header from "../../common/header/Header";
import DemoService from "./demoService/DemoService";

import logo from "../../images/body-bg.jpg";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Welcome from "./welcome/Welcome";
import Prices from "./prices/Prices";
import News from "./news/News";
const theme = createTheme({
  typography: {
    h1: { fontFamily: ["Dancing Script", "cursive"].join(",") },
    h2: { fontFamily: ["Dancing Script", "cursive"].join(",") },
    h3: { fontFamily: ["Dancing Script", "cursive"].join(",") },
    h4: { fontFamily: ["Dancing Script", "cursive"].join(",") },
    h5: { fontFamily: ["Dancing Script", "cursive"].join(",") },
  },
});
const AppHome = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Particles
          params={particlesConfig}
          style={{
            backgroundImage: `url(${logo})`,
            height: "100%",
            position: "fixed",
            zIndex: -10,
            top: 0,
            left: 0,
          }}
        />
        <Header />

        <Welcome />
        <Prices />
        <News />
        <NewFooter />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default AppHome;
