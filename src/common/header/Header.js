import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import AppBarComponent from "../../components/appBar/AppBar";
import NewNavBar from "../../components/NewNavBar";
import "./Header.scss";
const Header = () => {
	return (
		<React.Fragment>
			{/* <AppBarComponent /> */}
			<NewNavBar />
			<CssBaseline />
		</React.Fragment>
	);
};

export default Header;
