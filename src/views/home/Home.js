import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import DemoService from "./demoService/DemoService";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import logo from "../../images/body-bg.jpg";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";
const AppHome = () => {
  return (
    <React.Fragment>
      <div>
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
        ></Particles>
      </div>

      <Header />
      <Banners />
      <DemoService />
      <DirectMeetInfo />
      <Footer />
    </React.Fragment>
  );
};

export default AppHome;
