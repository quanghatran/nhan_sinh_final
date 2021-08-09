import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import DemoService from "./demoService/DemoService";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";

const AppHome = () => {
	return (
		<React.Fragment>
			<Header />
			<Banners />
			<DemoService />
			<MeaningNumbers />
			<DirectMeetInfo />
			<Footer />
		</React.Fragment>
	);
};

export default AppHome;
