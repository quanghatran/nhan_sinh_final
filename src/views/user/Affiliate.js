import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
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
	TextField,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import { Alert } from "@material-ui/lab";
import moment from "moment";
import React, { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import NewFooter from "../../common/newfooter/NewFooter";
import AddingSlotVip from "../../components/AddingSlotVip";
import formatCash from "../../components/FormatMoney";
import StaticSearchChart from "../../components/StaticSearchChart";
import TitleSection from "../../components/titleSection/TitleSection";
import TreeNodeChild from "../../components/TreeNodeChild";
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
}));

const Affiliate = () => {
	const classes = useStyles();

	const [userInfo, setUserInfo] = useState([]);
	const [idLauncher, setIdLauncher] = useState("");
	const [isOpenDialog, setOpenDialog] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [listMembers, setListMembers] = useState([]);

	const [isDataChanged, setIsDataChanged] = useState(false);

	const [clickedOpenAddingSlotVip, setClickedOpenAddingSlotVip] = useState("");

	const [listTree, setListTree] = useState([]);

	// const [clickedOpenChangeMoneyFromID, setClickedOpenChangeMoneyFromID] =
	// 	useState("");
	// const [newMoney, setNewMoney] = useState("");

	const [newSlotVip, setNewSlotVip] = useState("");

	// const [openChangeMoneyForm, setOpenChangeMoneyForm] = useState(false);

	const [openChangeSlotVip, setOpenChangeSlotVip] = useState(false);

	// get user info
	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				const response = await userAPI.getUserProfile();
				setUserInfo(response.data);
			} catch (error) {
				console.log("failed to update name", error);
			}
		};

		fetchGetUserProfile();
	}, [isDataChanged]);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const dataLauncher = {
			reference: idLauncher,
		};

		const fetchPatchAddLauncher = async () => {
			try {
				await userAPI.patchAddIdLauncher(dataLauncher);

				setIsSuccess(true);
				setTimeout(() => {
					setIsSuccess(false);
					setOpenDialog(false);
					setIsDataChanged(!isDataChanged);
				}, 1500);
			} catch (error) {
				setIsError(true);

				setTimeout(() => {
					setIsError(false);
					setOpenDialog(false);
					setIdLauncher("");
				}, 1500);
			}
		};

		fetchPatchAddLauncher();
	};

	// const handleChangeMoneyOpen = (id) => {
	// 	setOpenChangeMoneyForm(true);
	// 	setClickedOpenChangeMoneyFromID(id);
	// };

	// const handleChangeMoneyClose = () => {
	// 	setOpenChangeMoneyForm(false);
	// };

	const handleChangeSlotVipClose = () => {
		setOpenChangeSlotVip(false);
	};

	const handleOpenAddingSlotVip = (id) => {
		setOpenChangeSlotVip(true);
		setClickedOpenAddingSlotVip(id);
	};

	// get membership information
	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				const response = await userAPI.getListMemberShip();
				setListMembers(response.data);
			} catch (error) {
				console.log("failed to update name", error);
			}
		};

		fetchGetUserProfile();
	}, [isDataChanged]);

	useEffect(() => {
		const fetchStatisticDeposit = () => {
			userAPI
				.getTreeUsers()
				.then((response) => {
					setListTree(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchStatisticDeposit();
	}, []);

	// adding new slot vip for user by admin
	const handleSubmitChangeSlotVip = (idUser) => {
		if (idUser && newSlotVip) {
			const dataNewSlotVip = {
				number: newSlotVip,
			};

			const fetchChangeMoney = async () => {
				try {
					await userAPI.postAddingSlotVip(dataNewSlotVip, idUser);
					setIsSuccess(true);

					setTimeout(() => {
						setIsDataChanged(!isDataChanged);
						setOpenChangeSlotVip(false);
						setIsSuccess(false);
					}, 1500);
				} catch (error) {
					setIsError(true);

					setTimeout(() => {
						setIsDataChanged(!isDataChanged);
						setOpenChangeSlotVip(false);
						setIsError(false);
					}, 1500);
				}
			};

			fetchChangeMoney();
		}
	};

	// handle change money of users using async/await technique
	// const handleSubmitChangeMoney = (idUser) => {
	// 	if (idUser && newMoney) {
	// 		const dataNewMoney = {
	// 			number: newMoney,
	// 		};

	// 		const fetchChangeMoney = async () => {
	// 			try {
	// 				await userAPI.postDepositMoney(dataNewMoney, idUser);
	// 				setIsSuccess(true);

	// 				setTimeout(() => {
	// 					setIsDataChanged(!isDataChanged);
	// 					setOpenChangeMoneyForm(false);
	// 					setIsSuccess(false);
	// 				}, 1500);
	// 			} catch (error) {
	// 				setIsError(true);

	// 				setTimeout(() => {
	// 					setIsDataChanged(!isDataChanged);
	// 					setOpenChangeMoneyForm(false);
	// 					setIsError(false);
	// 				}, 1500);
	// 			}
	// 		};

	// 		fetchChangeMoney();
	// 	}
	// };

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}>
				<div className='container-fluid'>
					<TitleSection
						titleHeader='????ng k?? h???p t??c'
						style={{ marginTop: "1rem", color: "#000" }}
					/>
					<div className='UserInformation__content'>
						<Grid container spacing={3}>
							<Grid item container>
								<Typography variant='subtitle1'>
									S??? ti???n c??n l???i :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{formatCash("" + userInfo.money)} VN??
									</span>
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									S??? l?????t tra c???u VIP :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.slotVip}
									</span>{" "}
									- ???????c s??? d???ng t???i ng??y{" "}
									<b>{moment(userInfo.expirySlotVIP).format("DD/MM/YYYY")}</b>
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									M?? gi???i thi???u c???a b???n:{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.phone}
									</span>
								</Typography>
							</Grid>
							<Grid item container>
								{userInfo.reference === "" ? (
									<Typography variant='subtitle1'>
										B???n ch??a c?? m?? ng?????i gi???i thi???u:{" "}
										<Button
											color='primary'
											size='large'
											onClick={() => setOpenDialog(true)}>
											Nh???p m?? ng?????i gi???i thi???u
										</Button>
									</Typography>
								) : (
									<Typography variant='subtitle1'>
										M?? ng?????i gi???i thi???u:{" "}
										<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
											{userInfo.reference}
										</span>
									</Typography>
								)}
							</Grid>
						</Grid>

						<Grid item container>
							<Typography
								variant='subtitle1'
								style={{ margin: "1rem 0", fontWeight: "bold" }}>
								Danh s??ch th??nh vi??n c???p d?????i
							</Typography>
						</Grid>

						{listMembers.length > 0 ? (
							<div>
								<TableContainer component={Paper}>
									<Table className={classes.table} aria-label='simple table'>
										<TableHead
											style={{
												backgroundColor: "#f69320",
												textTransform: "upperCase",
											}}>
											<TableRow>
												<TableCell style={{ color: "#fff" }}>STT</TableCell>
												<TableCell style={{ color: "#fff" }}>S??T</TableCell>
												<TableCell style={{ color: "#fff" }}>H??? t??n</TableCell>
												<TableCell style={{ color: "#fff" }}>
													D???ch v??? ???? mua
												</TableCell>
												<TableCell style={{ color: "#fff" }}>
													L?????t tra c???u VIP
												</TableCell>
												<TableCell style={{ color: "#fff" }}>
													S??? ti???n c??n l???i
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{listMembers.map((member, index) => (
												<TableRow key={member._id}>
													<TableCell>{index + 1}</TableCell>
													<TableCell>{member.phone}</TableCell>
													<TableCell>{member.name}</TableCell>
													<TableCell>{member.serviceBought}</TableCell>
													{/* <TableCell>{member.slotVip}</TableCell> */}
													<TableCell>
														<Grid container alignItems='center'>
															<Grid item style={{ paddingRight: "5px" }}>
																{member.slotVip}
															</Grid>
															<Grid item>
																<Tooltip title='Th??m l?????t tra c???u VIP cho th??nh vi??n'>
																	<IconButton
																		aria-label='deposit'
																		type='button'
																		onClick={() =>
																			handleOpenAddingSlotVip(member._id)
																		}>
																		<AddShoppingCartOutlinedIcon color='primary' />
																	</IconButton>
																</Tooltip>
															</Grid>
														</Grid>
														{member._id === clickedOpenAddingSlotVip ? (
															<AddingSlotVip
																nameUserChange={member.name}
																idUserChange={member._id}
																isOpenForm={openChangeSlotVip}
																onCloseForm={handleChangeSlotVipClose}
																onChangeVipSearch={handleSubmitChangeSlotVip}
																onFormChange={(e) =>
																	setNewSlotVip(e.target.value)
																}
																onSuccess={isSuccess}
																onError={isError}
															/>
														) : (
															""
														)}
													</TableCell>
													<TableCell>
														<Grid container alignItems='center'>
															<Grid item style={{ paddingRight: "5px" }}>
																{formatCash("" + member.money)} VN??
															</Grid>
															{/* <Grid item>
															<Tooltip title='N???p th??m ti???n cho th??nh vi??n'>
																<IconButton
																	aria-label='deposit'
																	type='button'
																	onClick={() =>
																		handleChangeMoneyOpen(member._id)
																	}>
																	<AddOutlinedIcon color='secondary' />
																</IconButton>
															</Tooltip>
														</Grid> */}
														</Grid>
														{/* {member._id === clickedOpenChangeMoneyFromID ? (
														<DepositUserForm
															nameUserChange={member.name}
															idUserChange={member._id}
															isOpenForm={openChangeMoneyForm}
															onCloseForm={handleChangeMoneyClose}
															onChangeMoneyFormSubmit={handleSubmitChangeMoney}
															onFormChange={(e) => setNewMoney(e.target.value)}
															onSuccess={isSuccess}
															onError={isError}
														/>
													) : (
														""
													)} */}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
								<Grid item container>
									<Typography
										variant='subtitle1'
										style={{ margin: "1rem 0", fontWeight: "bold" }}>
										Th???ng k?? ho???t ?????ng th??nh vi??n
									</Typography>
								</Grid>
								<StaticSearchChart />

								<TreeNodeChild listTree={listTree} userInfo={userInfo} />
							</div>
						) : (
							<Alert severity='info' style={{ textAlign: "center" }}>
								B???n ch??a c?? th??nh vi??n c???p d?????i
							</Alert>
						)}

						{/* launcher dialog */}
						<Dialog
							open={isOpenDialog}
							onClose={() => setOpenDialog(false)}
							aria-labelledby='form-dialog-title'
							fullWidth={true}
							maxWidth={"sm"}>
							<form onSubmit={(e) => handleOnSubmit(e)}>
								<DialogTitle
									id='form-dialog-title'
									style={{ textTransform: "uppercase" }}>
									Nh???p m?? ng?????i gi???i thi???u
								</DialogTitle>

								<DialogContentText style={{ padding: "0px 24px" }}>
									B???n s??? nh???n nh???ng quy???n l???i c???a th??nh vi??n, ???????c h??? tr??? t?? v???n
									tr???c ti???p 24/24 t??? ng?????i gi???i thi???u, ???????c c???p ti???n v?? l?????t tra
									c???u VIP t??? ng?????i ng?????i gi???i thi???u.
								</DialogContentText>
								<DialogContent>
									<TextField
										autoFocus
										margin='dense'
										id='name'
										label='M?? ng?????i gi???i thi???u'
										type='number'
										fullWidth
										value={idLauncher}
										onChange={(e) => {
											setIdLauncher(e.target.value);
										}}
									/>

									{isError && (
										<Alert
											variant='filled'
											severity='error'
											style={{ marginTop: "1rem", justifyContent: "center" }}>
											Th??m m?? ng?????i gi???i thi???u kh??ng th??nh c??ng
										</Alert>
									)}

									{isSuccess && (
										<Alert
											variant='filled'
											severity='success'
											style={{ marginTop: "1rem", justifyContent: "center" }}>
											Th??m m?? ng?????i gi???i thi???u th??nh c??ng
										</Alert>
									)}
								</DialogContent>

								<DialogActions>
									<Button
										onClick={() => setOpenDialog(false)}
										color='secondary'>
										H???y
									</Button>
									<Button type='submit' color='primary'>
										X??c nh???n
									</Button>
								</DialogActions>
							</form>
						</Dialog>
					</div>
				</div>
			</div>
			<NewFooter />
		</div>
	);
};

export default Affiliate;
