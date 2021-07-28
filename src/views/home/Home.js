import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import DemoService from "./demoService/DemoService";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import MeaningNumbers from "./meaningNumbers/MeaningNumbers";
import Testimonial from "./testimonials/Testimonial";

const AppHome = () => {
	return (
		<React.Fragment>
			<Header />
			<Banners />
			<DemoService />
			{/* <Testimonial /> */}
			<MeaningNumbers />
			<DirectMeetInfo />
			<Footer />
		</React.Fragment>
	);
};

export default AppHome;
