import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import AppBarComponent from "../../components/appBar/AppBar";
import "./Header.scss";
const Header = () => {
	return (
		<React.Fragment>
			<AppBarComponent />
			<CssBaseline />
		</React.Fragment>
	);
};

export default Header;
