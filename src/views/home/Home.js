import React from "react";
import NewFooter from "../../common/newfooter/NewFooter";
import Header from "../../common/header/Header";
import DemoService from "./demoService/DemoService";

import logo from "../../images/body-bg.jpg";
import Particles from "react-particles-js";
import particlesConfig from "./particle-config";
import Welcome from "./welcome/Welcome";
import Prices from "./prices/Prices";
import News from "./news/News";
import Banners from "./banners/Banners";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import SuccessStories from "./SuccessStories";
import Numbers from "./Numbers";
import CardSlide from "./CardSlide";

const AppHome = () => {
	return (
		<React.Fragment>
			<Header />
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

			{/* <CardSlide /> */}

			{/* <Footer /> */}

			<Banners />
			<DemoService />
			<MeaningNumbers />
			<DirectMeetInfo />
			{/* <Numbers /> */}
			<SuccessStories />

			<Welcome />
			<Prices />
			<News />
			<NewFooter />
		</React.Fragment>
	);
};

export default AppHome;
