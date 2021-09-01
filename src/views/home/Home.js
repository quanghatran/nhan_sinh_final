import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
// import CardSlide from "./CardSlide";
import DemoService from "./demoService/DemoService";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import Numbers from "./Numbers";
import SuccessStories from "./SuccessStories";

const AppHome = () => {
	return (
		<React.Fragment>
			<Header />
			<Banners />
			{/* <CardSlide /> */}
			<DemoService />
			<MeaningNumbers />
			<DirectMeetInfo />
			<Numbers />
			<SuccessStories />
			<Footer />
		</React.Fragment>
	);
};

export default AppHome;
