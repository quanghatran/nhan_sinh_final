import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import React from "react";
import "./TitleSection.scss";
const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: "center",
		color: "#fff",
		marginBottom: "1.5rem",
	},
}));

const TitleSection = (props) => {
	const { titleHeader, style } = props;
	const classes = useStyles();
	return (
		<React.Fragment>
			{/* <div className="titleHolder">
        <h1 className="title" style={style}>
          {titleHeader}
        </h1>
        <p className="subTitle">{subTitle}</p>
      </div> */}
			<Typography variant='h1' className={classes.heading} style={style}>
				{titleHeader}
			</Typography>
		</React.Fragment>
	);
};

export default TitleSection;
