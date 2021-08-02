import React, { useState } from "react";
import Footer from "../../common/footer/Footer";
import HeaderLogin from "../home/headerLogin/HeaderLogin";
import MeaningNumerology from "./MeaningNumerology";
import UserService from "./UserService";

const Userhome = () => {
	const [isSlotVipChanged, setIsSlotVipChanged] = useState(false);

	const handleSlotVipChange = () => {
		setIsSlotVipChanged(true);
	};

	return (
		<div className='Userhome'>
			<HeaderLogin />
			<UserService
				isSlotVipChanged={isSlotVipChanged}
				onSlotVipChange={handleSlotVipChange}
			/>
			<MeaningNumerology
				isSlotVipChanged={isSlotVipChanged}
				onSlotVipChange={handleSlotVipChange}
			/>
			<Footer />
		</div>
	);
};

export default Userhome;
