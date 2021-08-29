import { Button, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import Ratings from "react-ratings-declarative";
import formatCash from "../FormatMoney";
import ModalBookCoachingConfirm from "../ModalBookCoachingConfirm/index.";
// import formatCash from "../../../../components/FormatMoney";

const useStyles = makeStyles((theme) => ({
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		width: theme.spacing(9),
		height: theme.spacing(9),
	},
}));

const ListCoacher = (props) => {
	const { listCoacher, success, error, idCoacherBooked } = props;
	const classes = useStyles();

	const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);

	const [idCoacherClicked, setIdCoacherClicked] = useState("");

	const handleOpenModalConfirm = (id) => {
		setIdCoacherClicked(id);
		setIsOpenModalConfirm(true);
	};

	const handleCloseModalConfirm = () => {
		setIsOpenModalConfirm(false);
	};

	const handleClickConfirm = (id) => {
		idCoacherBooked(id);
	};

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				{listCoacher.length > 0 ? (
					listCoacher.map((coacher) => (
						<Grid item xs={12} sm={6} md={4} key={coacher._id}>
							<Card className={classes.root}>
								<CardHeader
									avatar={
										<Avatar
											alt='Remy Sharp'
											src={coacher.avatar}
											style={{
												backgroundPosition: "center",
												boxShadow: ".25rem .5rem 1rem rgba(0,0,0,.3)",
											}}
											className={classes.avatar}
										/>
									}
									title={
										<Typography variant='h6' style={{ fontSize: "1.1rem" }}>
											{coacher.name}
										</Typography>
									}
									subheader={
										<div>
											{/* <Typography variant='body2'>
												Email: {coacher.email}
											</Typography> */}
											{/* <Typography variant='body2'>
												SĐT: {coacher.phone}
											</Typography> */}
											<Typography variant='body2'>
												Giá: {formatCash("" + coacher.price)} vnđ/h
											</Typography>
										</div>
									}
								/>

								<CardContent>
									<Typography
										variant='body2'
										color='textSecondary'
										style={{
											height: "100px",
											overflow: "hidden",
											textOverflow: "ellipsis",
											textAlign: "justify",
										}}
										component='p'>
										{coacher.intro}
									</Typography>
									<div
										style={{
											marginTop: "1rem",
										}}>
										<Ratings
											rating={coacher.avgPoint / 2}
											widgetDimensions='1.3rem'
											widgetSpacings='2px'>
											<Ratings.Widget
												widgetRatedColor='#f39c12'
												widgetEmptyColors='#f39c12'
											/>
											<Ratings.Widget
												widgetRatedColor='#f39c12'
												widgetEmptyColors='#f39c12'
											/>
											<Ratings.Widget
												widgetRatedColor='#f39c12'
												widgetEmptyColors='#f39c12'
											/>
											<Ratings.Widget
												widgetRatedColor='#f39c12'
												widgetEmptyColors='#f39c12'
											/>
											<Ratings.Widget
												widgetRatedColor='#f39c12'
												widgetEmptyColors='#f39c12'
											/>
										</Ratings>
									</div>
								</CardContent>
								<CardActions
									disableSpacing
									style={{ justifyContent: "center" }}>
									<Button
										color='primary'
										style={{ marginRight: "8px" }}
										onClick={() => {
											handleOpenModalConfirm(coacher._id);
										}}>
										Đặt lịch
									</Button>
								</CardActions>
							</Card>

							{idCoacherClicked === coacher._id && (
								<ModalBookCoachingConfirm
									isOpen={isOpenModalConfirm}
									onClose={handleCloseModalConfirm}
									contentDialog={`Xác nhận đặt lịch tư vấn với coacher: ${coacher.name}?`}
									onClickConfirm={(e) => {
										handleClickConfirm(coacher._id);
									}}
									onSuccess={success}
									onError={error}
								/>
							)}
						</Grid>
					))
				) : (
					<Alert severity='success' color='info'>
						Chưa có dữ liệu
					</Alert>
				)}
			</Grid>
		</React.Fragment>
	);
};

export default ListCoacher;
