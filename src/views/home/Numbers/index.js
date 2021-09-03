import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
	heading: {
		textAlign: "center",
		color: "#fff",
	},
}));
const Numbers = () => {
	const classes = useStyles();
	return (
		<div>
			<Container maxWidth='lg' style={{ marginTop: "50px" }}>
				<Grid container>
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant='h1' className={classes.heading}>
							Ý nghĩa các con số
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Numbers;
