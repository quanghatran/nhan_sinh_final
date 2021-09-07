import React from "react";
import NewFooter from "../../common/newfooter/NewFooter";
import Header from "../../common/header/Header";
import DemoService from "./demoService/DemoService";

import Background from "../../common/background/Background";
import Welcome from "./welcome/Welcome";
import Prices from "./prices/Prices";
import News from "./news/News";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import SuccessStories from "./SuccessStories";
import Numbers from "./Numbers";
import CardSlide from "./CardSlide";
import NumberMeaning from "./numbermeaning/NumberMeaning";
import NewBanner from "./newBanner/NewBanner";
const AppHome = () => {
  return (
    <React.Fragment>
      <Header />
      <Background />

      <NewBanner />
      <NumberMeaning />
      <MeaningNumbers />
      <Welcome />

      <DemoService />

      <Prices />
      <DirectMeetInfo />
      <SuccessStories />
      <News />
      <NewFooter />
    </React.Fragment>
  );
};

export default AppHome;
