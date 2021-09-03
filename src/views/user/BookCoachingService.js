import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import AnnouncementOutlinedIcon from "@material-ui/icons/AnnouncementOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { Alert } from "@material-ui/lab";
import moment from "moment";
import React, { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import NewFooter from "../../common/newfooter/NewFooter";
import ListCoacher from "../../components/ListCoacher";
import ModalRatingCoaching from "../../components/ModalRatingCoaching";
import TitleSection from "../../components/titleSection/TitleSection";
import HeaderLogin from "../home/headerLogin/HeaderLogin";
import "./UserSearchHistory.css";
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	table: {
		minWidth: 650,
	},
	root: {
		backgroundColor: theme.palette.background.paper,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	grid: {
		padding: theme.spacing(2),
		paddingBottom: theme.spacing(1),
	},
}));

const BookCoachingService = () => {
	const classes = useStyles();

	const [listCoacher, setListCoacher] = useState([]);

	const [isOpenCoachingDialog, setIsOpenCoachingDialog] = useState(false);

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const [isDataChanged, setIsDataChanged] = useState(false);

	const [listUserBooked, setListUserBooked] = useState([]);

	const [clickIdCoaching, setClickIdCoaching] = useState("");

	const handleCloseCoachingDialog = () => {
		setIsOpenCoachingDialog(false);
	};
	const handleOpenCoachingDialog = () => {
		setIsOpenCoachingDialog(true);
	};

	// get list coachers
	useEffect(() => {
		const fetchListCoachers = async () => {
			try {
				const response = await userAPI.getListCoacher();
				setListCoacher(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};
		fetchListCoachers();
	}, []);

	// get list user booked
	useEffect(() => {
		const fetchGetListUserBooked = async () => {
			try {
				const response = await userAPI.getListUserBooked();
				setListUserBooked(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};
		fetchGetListUserBooked();
	}, [isDataChanged]);

	// handle book coaching service
	const idCoacherBooked = (id) => {
		if (id) {
			let dataPost = { coacher: id };
			const fetchBookCoaching = async () => {
				try {
					await userAPI.postBookingCoaching(dataPost);
					setSuccess(true);
					setTimeout(() => {
						setIsOpenCoachingDialog(false);
						setSuccess(false);
						setIsDataChanged(!isDataChanged);
					}, 1500);
				} catch (error) {
					setError(true);
					setTimeout(() => {
						// setIsOpenCoachingDialog(false);
						setError(false);
					}, 1500);
				}
			};

			fetchBookCoaching();
		}
	};

	const [isOpenRatingDialog, setIsOpenRatingDialog] = useState(false);

	const handleOpenRateDialog = (id) => {
		setClickIdCoaching(id);
		setIsOpenRatingDialog(true);
	};

	const handleCloseRatingDialog = () => {
		setIsOpenRatingDialog(false);
	};

	// handle user rating
	const handleRating = (idCoaching, dataRating) => {
		const fetchUserRating = async () => {
			try {
				await userAPI.postRating(idCoaching, dataRating);
				setSuccess(true);
				setTimeout(() => {
					setIsOpenRatingDialog(false);
					setSuccess(false);
					setIsDataChanged(!isDataChanged);
				}, 1500);
			} catch (error) {
				setError(true);
				setTimeout(() => {
					// setIsOpenCoachingDialog(false);
					setError(false);
				}, 1500);
			}
		};

		fetchUserRating();
	};

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}>
				<div className='container-fluid'>
					<TitleSection
						titleHeader='Đặt lịch tư vấn trực tiếp'
						style={{ marginTop: "1rem", color: "#000" }}
					/>
					<div className='UserInformation__content'>
						<Grid item container>
							<Typography
								variant='subtitle1'
								style={{ margin: "1rem 0", fontWeight: "bold" }}>
								Danh sách lịch sử tư vấn trực tiếp
							</Typography>
						</Grid>

						{listUserBooked.length > 0 ? (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label='simple table'>
									<TableHead
										style={{
											backgroundColor: "#f69320",
											textTransform: "upperCase",
										}}>
										<TableRow>
											<TableCell style={{ color: "#fff" }}>STT</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Số điện thoại
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Người đặt lịch
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Trạng thái
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Coacher tư vấn
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Thời gian tư vấn
											</TableCell>
											<TableCell style={{ color: "#fff" }}>Thực hiện</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{listUserBooked.map((useBooked, index) => (
											<TableRow key={index}>
												<TableCell>
													<b>{index + 1}</b>
												</TableCell>
												<TableCell>{useBooked.phoneNumber}</TableCell>
												<TableCell>
													<div style={{ fontWeight: "bold" }}>
														{useBooked.name}
													</div>{" "}
													<div>{useBooked.email}</div>
												</TableCell>
												<TableCell>{useBooked.status}</TableCell>
												<TableCell>
													{useBooked.coacher ? (
														<div>
															<div
																style={{
																	fontWeight: "bold",
																}}>
																{useBooked.coacher.name}
															</div>
															<div>{useBooked.email}</div>
														</div>
													) : (
														"null"
													)}
												</TableCell>
												<TableCell>
													{moment(useBooked.time).format("DD/MM/YYYY")}
												</TableCell>
												<TableCell>
													{useBooked.status === "Đã gặp" &&
														useBooked.comment.length <= 0 && (
															<Tooltip title='Đánh giá dịch vụ'>
																<IconButton
																	color='secondary'
																	aria-label='add an alarm'
																	onClick={(e) => {
																		handleOpenRateDialog(
																			useBooked._id
																			// data.service._id
																		);
																	}}>
																	<AnnouncementOutlinedIcon />
																</IconButton>
															</Tooltip>
														)}

													{useBooked.status === "Đã gặp" &&
														useBooked.comment.length > 0 && (
															<Tooltip title='Đã đánh giá'>
																<IconButton
																	color='default'
																	aria-label='add an alarm'>
																	<CheckBoxOutlinedIcon color='primary' />
																</IconButton>
															</Tooltip>
														)}

													{useBooked.status !== "Đã gặp" && (
														<Tooltip title='Không thể đánh  giá '>
															<IconButton
																color='default'
																aria-label='add an alarm'>
																<AnnouncementOutlinedIcon />
															</IconButton>
														</Tooltip>
													)}
												</TableCell>

												{clickIdCoaching === useBooked._id && (
													<ModalRatingCoaching
														isOpenRatingDialog={isOpenRatingDialog}
														onCloseRatingDialog={handleCloseRatingDialog}
														nameCoacher={useBooked.coacher.name}
														handleRating={handleRating}
														idCoaching={useBooked._id}
														onSuccess={success}
														onError={error}
													/>
												)}
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<Alert severity='info' style={{ textAlign: "center" }}>
								Bạn chưa có lịch đặt tư vấn trực tiếp
							</Alert>
						)}

						<Dialog
							open={isOpenCoachingDialog}
							onClose={handleCloseCoachingDialog}
							aria-labelledby='form-dialog-title'
							fullWidth={true}
							maxWidth='md'>
							<DialogTitle
								id='form-dialog-title'
								style={{
									textTransform: "uppercase",
									textAlign: "center",
									backgroundColor: "rgb(63, 81, 181)",
									color: "#fff",
								}}>
								đặt lịch tư vấn trực tiếp
							</DialogTitle>
							<DialogContent>
								<div className={classes.root}>
									<ListCoacher
										listCoacher={listCoacher}
										success={success}
										error={error}
										idCoacherBooked={idCoacherBooked}
									/>
								</div>
							</DialogContent>

							<DialogActions style={{ justifyContent: "center" }}>
								<Button
									onClick={handleCloseCoachingDialog}
									color='secondary'
									variant='contained'>
									Đóng
								</Button>
							</DialogActions>
						</Dialog>
						<Grid
							container
							direction='row'
							justifyContent='center'
							spacing={0}
							style={{ marginBottom: "3rem" }}>
							<Grid item>
								<Button
									variant='contained'
									color='primary'
									startIcon={<AddIcon />}
									style={{ marginTop: "2rem" }}
									onClick={handleOpenCoachingDialog}>
									ĐẶT LỊCH TƯ VẤN TRỰC TIẾP
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>
			</div>
			<NewFooter />
		</div>
	);
};

export default BookCoachingService;
