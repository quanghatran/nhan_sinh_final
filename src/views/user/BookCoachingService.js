import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Alert } from "@material-ui/lab";
import moment from "moment";
import React, { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import Footer from "../../common/footer/Footer";
import DatePicker from "../../components/controls/DatePicker";
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

	const date = new Date();

	const [listCoacher, setListCoacher] = useState([]);

	const [isOpenCoachingDialog, setIsOpenCoachingDialog] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState(date);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [coacherPerson, setCoacherPerson] = useState("");
	const [time, setTime] = useState(date);

	const [idCoacher, setIdCoacher] = useState("");

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const [isDataChanged, setIsDataChanged] = useState(false);

	const handleCloseCoachingDialog = () => {
		setIsOpenCoachingDialog(false);
	};
	const handleOpenCoachingDialog = () => {
		setIsOpenCoachingDialog(true);
	};

	// submit create booking coaching
	const handleSubmitBookingCoaching = (e) => {
		e.preventDefault();
		const dataBookingCoaching = {
			name: name,
			email: email,
			birthDay: moment(birthDay).format("YYYY-MM-DD"),
			phoneNumber: phoneNumber,
			address: address,
			coacher: coacherPerson,
			time: moment(time).format("YYYY-MM-DD"),
		};

		const fetchPostBookingCoaching = async () => {
			try {
				const response = await userAPI.postBookingCoaching(dataBookingCoaching);
				if (response) {
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
						setName("");
						setEmail("");
						setBirthDay(date);
						setPhoneNumber("");
						setAddress("");
						setCoacherPerson("");
						setTime(date);
						setIsOpenCoachingDialog(false);

						setIsDataChanged(!isDataChanged);
					}, 1500);
				}
			} catch (error) {
				setError(true);
				setTimeout(() => {
					setError(false);
					setTime(date);
				}, 1500);
			}
		};

		fetchPostBookingCoaching();
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

	const [listBookedOfCoacher, setListBookedOfCoacher] = useState([]);

	// let listDateBooked = [];

	const handleChangeIdCoacher = (idCoacher) => {
		setIdCoacher(idCoacher);
	};

	// get list booked of each coacher
	useEffect(() => {
		const fetchGetListCoacherBooked = async () => {
			try {
				const response = await userAPI.getListCoacherBooked(idCoacher);
				setListBookedOfCoacher(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};
		fetchGetListCoacherBooked();
	}, [idCoacher]);

	// function getDateBooked(bookedDate) {
	// 	listDateBooked.push(bookedDate.time);
	// }

	// listBookedOfCoacher.map(getDateBooked);

	// function disableDate(date) {
	// 	console.log(listBookedOfCoacher.time);
	// 	// return moment(date).format("YYYY-MM-DD") === listBookedOfCoacher.time;
	// }

	const handleTimeCoacherBookedChange = (e) => {
		setTime(e.target.value);
	};

	const [listUserBooked, setListUserBooked] = useState([]);

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

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}>
				<div className='container-fluid'>
					<TitleSection
						titleHeader='ĐẶT LỊCH TƯ VẤN TRỰC TIẾP'
						style={{ marginTop: "1rem" }}
					/>
					<div className='UserInformation__content'>
						<Grid item container>
							<Typography variant='subtitle1' style={{ margin: "1rem 0" }}>
								Danh sách lịch tư vấn trực tiếp
							</Typography>
						</Grid>

						{listUserBooked.length > 0 ? (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label='simple table'>
									<TableHead
										style={{
											backgroundColor: "#3f51b5",
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
											<TableCell style={{ color: "#fff" }}>địa chỉ</TableCell>

											<TableCell style={{ color: "#fff" }}>
												Trạng thái
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Coacher tư vấn
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Thời gian tư vấn
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{listUserBooked.map((useBooked, index) => (
											<TableRow key={index}>
												<TableCell>{index + 1}</TableCell>
												<TableCell>{useBooked.phoneNumber}</TableCell>
												<TableCell>
													<div>{useBooked.name}</div>{" "}
													<div>{useBooked.email}</div>
												</TableCell>
												<TableCell>{useBooked.address}</TableCell>
												<TableCell>{useBooked.status}</TableCell>
												<TableCell>{useBooked.coacher.name}</TableCell>
												<TableCell>
													{moment(useBooked.time).format("DD/MM/YYYY")}
												</TableCell>
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
							maxWidth={"sm"}>
							<form onSubmit={handleSubmitBookingCoaching}>
								<DialogTitle
									id='form-dialog-title'
									style={{ textTransform: "uppercase", textAlign: "center" }}>
									đặt lịch tư vấn trực tiếp
								</DialogTitle>
								<DialogContent>
									<div className={classes.root}>
										<Grid container>
											<Grid item xs={12} sm={6} className={classes.grid}>
												<TextField
													autoFocus
													label='Tên người đặt lịch'
													type='text'
													variant='outlined'
													fullWidth
													required
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</Grid>
											<Grid item xs={12} sm={6} className={classes.grid}>
												<TextField
													label='Email'
													variant='outlined'
													type='email'
													fullWidth
													required
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</Grid>
											<Grid item xs={12} sm={6} className={classes.grid}>
												<DatePicker
													label='Ngày sinh'
													variant='outlined'
													color='primary'
													name='birthDay'
													fullWidth
													value={birthDay}
													onChange={(e) => setBirthDay(e.target.value)}
												/>
											</Grid>
											<Grid item xs={12} sm={6} className={classes.grid}>
												<TextField
													label='Số điện thoại'
													variant='outlined'
													type='number'
													fullWidth
													required
													value={phoneNumber}
													onChange={(e) => setPhoneNumber(e.target.value)}
												/>
											</Grid>

											<Grid item xs={12} className={classes.grid}>
												<TextField
													label='Địa chỉ'
													variant='outlined'
													type='text'
													fullWidth
													required
													value={address}
													onChange={(e) => setAddress(e.target.value)}
												/>
											</Grid>

											<Grid item xs={12} sm={6} className={classes.grid}>
												<FormControl variant='outlined' fullWidth>
													<InputLabel id='demo-simple-select-outlined-label'>
														Coacher
													</InputLabel>
													<Select
														labelId='demo-simple-select-outlined-label'
														id='demo-simple-select-outlined'
														defaultValue=''
														value={coacherPerson}
														onChange={(e) => {
															setCoacherPerson(e.target.value);
														}}
														label='Coacher'>
														{listCoacher.length > 0
															? listCoacher.map((coacher) => (
																	<MenuItem
																		key={coacher._id}
																		value={coacher._id}
																		onClick={(e) => {
																			handleChangeIdCoacher(coacher._id);
																		}}>
																		{coacher.name}
																	</MenuItem>
															  ))
															: ""}
													</Select>
												</FormControl>
											</Grid>

											<Grid item xs={12} sm={6} className={classes.grid}>
												<DatePicker
													label='Thời gian tư vấn'
													variant='outlined'
													color='primary'
													name='birthDay'
													fullWidth
													// shouldDisableDate={disableDate}

													value={time}
													onChange={(e) => {
														handleTimeCoacherBookedChange(e);
													}}
												/>
											</Grid>
										</Grid>
									</div>
									{error && (
										<Alert
											variant='filled'
											severity='error'
											style={{ marginTop: "1rem", justifyContent: "center" }}>
											Đặt lịch tư vấn trực tiếp không thành công, vui lòng đặt
											ngày khác
										</Alert>
									)}

									{success && (
										<Alert
											variant='filled'
											severity='success'
											style={{ marginTop: "1rem", justifyContent: "center" }}>
											Đặt lịch tư vấn trực tiếp thành công
										</Alert>
									)}
								</DialogContent>

								<DialogActions>
									<Button onClick={handleCloseCoachingDialog} color='secondary'>
										Hủy
									</Button>
									<Button type='submit' color='primary'>
										Xác nhận
									</Button>
								</DialogActions>
							</form>
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
									color='secondary'
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
			<Footer />
		</div>
	);
};

export default BookCoachingService;
