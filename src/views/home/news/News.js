import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/news2.jpg";
import news3 from "../../../images/news3.jpg";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
const useStyles = makeStyles(() => ({
	heading: {
		textAlign: "center",
		color: "#fff",
	},
	item: {
		margin: "20px 0",
	},
	para1: {
		color: "#a0a2ad",
		textAlign: "center",
	},
	title: {
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
		color: "#f69320",
		transition: ".3s all ease",

		"&:hover": {
			color: "#585858",
			textDecoration: "none",
		},
	},
	box: {
		height: "305px",
		padding: "33px 35px",
		backgroundColor: "#242949",
		textAlign: "center",
	},
	icon: {
		fontSize: "3rem",
		color: "#f69320",
	},
	img: {
		width: "100%",
		height: "100%",
		maxHeight: "300px",
		objectFit: "cover",
	},
}));
const News = () => {
	const classes = useStyles();

	return (
		<Container maxWidth='lg' style={{ marginTop: "50px" }}>
			<Grid container>
				<Grid item md={12} sm={12} xs={12}>
					<Typography variant='h1' className={classes.heading}>
						Tin tức và bài viết
					</Typography>
				</Grid>
				<Grid
					item
					container
					md={12}
					alignItems='center'
					justify='center'
					className={classes.item}>
					<Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
						<img src={news1} alt='' className={classes.img} />
					</Grid>
					<Grid
						item
						md={4}
						sm={6}
						xs={12}
						style={{ height: "300px" }}
						className={classes.box}>
						<CameraAltIcon className={classes.icon} />
						<Link to=''>
							<Typography variant='subtitle1' className={classes.title}>
								Love & Astrology
							</Typography>
						</Link>
						<Typography variant='body1' className={classes.para1}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
							modi, qui atque natus libero dolorem veritatis rerum vel fugit
							fugiat.
						</Typography>
					</Grid>
					<Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
						<img src={news2} alt='' className={classes.img} />
					</Grid>
					<Grid
						item
						md={4}
						sm={6}
						xs={12}
						style={{ height: "300px" }}
						className={classes.box}>
						<CameraAltIcon className={classes.icon} />

						<Link to=''>
							<Typography variant='subtitle1' className={classes.title}>
								Love & Astrology
							</Typography>
						</Link>
						<Typography variant='body1' className={classes.para1}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
							modi, qui atque natus libero dolorem veritatis rerum vel fugit
							fugiat.
						</Typography>
					</Grid>
					<Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
						<img src={news3} alt='' className={classes.img} />
					</Grid>
					<Grid
						item
						md={4}
						sm={6}
						xs={12}
						className={classes.box}
						style={{ height: "300px" }}>
						<CreateIcon className={classes.icon} />
						<Link to=''>
							<Typography variant='subtitle1' className={classes.title}>
								Love & Astrology
							</Typography>
						</Link>
						<Typography variant='body1' className={classes.para1}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
							modi, qui atque natus libero dolorem veritatis rerum vel fugit
							fugiat.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default News;
