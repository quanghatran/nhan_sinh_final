import React from "react";
import Footer from "../../common/footer/Footer";
import HeaderLogin from "../home/headerLogin/HeaderLogin";
import MeaningNumerology from "./MeaningNumerology";
import "./Userhome.scss";
import UserService from "./UserService";

const Userhome = () => {
	return (
		<div className='Userhome'>
			<HeaderLogin />
			<UserService />
			<MeaningNumerology />
			<Footer />
		</div>
	);
};

export default Userhome;
