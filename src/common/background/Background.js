import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";
import logo from "../../images/body-bg.jpg";
const Background = () => {
  return (
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
  );
};

export default Background;
