import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import DemoService from "./demoService/DemoService";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import Particles from "react-particles-js";
import logo from "../../images/body-bg.jpg";
import particlesConfig from "./particlesConfig.json";
const AppHome = () => {
  return (
    <React.Fragment>
      <Particles params={particlesConfig} />
    </React.Fragment>
  );
};

export default AppHome;
