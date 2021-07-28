import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import AppBarLogin from "../../../components/appBarLogin/AppBarLogin";
import "./HeaderLogin.scss";
const HeaderLogin = () => {
	return (
		<React.Fragment>
			<AppBarLogin />
			<CssBaseline />
		</React.Fragment>
	);
};

export default HeaderLogin;
