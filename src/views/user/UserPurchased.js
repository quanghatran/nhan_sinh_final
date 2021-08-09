import {
	Button,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import React, { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import Footer from "../../common/footer/Footer";
import ModalConfirm from "../../components/modalConfirm/ModalConfirm";
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
}));

const UserPurchased = () => {
	const classes = useStyles();
	const [userPurchased, setUserPurchased] = useState([]);

	const [onSuccess, setOnSuccess] = useState(false);
	const [onError, setOnError] = useState(false);

	const [clickedIdService, setClickedIdService] = useState("");
	const [clickedIdBought, setClickedIdBought] = useState("");

	const [openDialog, setOpenDialog] = useState(false);

	useEffect(() => {
		const fetchListServiceUserBought = async () => {
			try {
				const response = await servicesApi.getAllServiceBought();
				setUserPurchased(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchListServiceUserBought();
	}, []);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	// buy service after confirmed
	const handleClickConfirm = (id) => {
		const fetchBuyService = async () => {
			try {
				await servicesApi.postUserBuyService(id);

				setOnSuccess(true);
				setTimeout(() => {
					setOpenDialog(false);
					setOnSuccess(false);
				}, 1200);
			} catch (error) {
				setOnError(true);
				setTimeout(() => {
					setOpenDialog(false);
					setOnError(false);
				}, 1200);
			}
		};

		fetchBuyService();
	};

	// handle open dialog
	const handleOpenDialog = (idBought, idService) => {
		setOpenDialog(true);

		setClickedIdBought(idBought);
		setClickedIdService(idService);
	};

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}>
				<div className='container-fluid'>
					<TitleSection titleHeader='dịch vụ đã mua' />
					<div className='UserPurchased__content'>
						<div>
							{userPurchased.length > 0 && (
								<div>
									<TableContainer component={Paper}>
										<Table className={classes.table} aria-label='simple table'>
											<TableHead
												style={{
													backgroundColor: "#3f51b5",
													textTransform: "upperCase",
												}}>
												<TableRow>
													<TableCell style={{ color: "#fff" }}>
														Tên dịch vụ
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														Ngày mua
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														Giá dịch vụ
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														Lượt tra cứu
													</TableCell>
													<TableCell style={{ width: "10%", color: "#fff" }}>
														Mua thêm
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{userPurchased
													.filter((data) => data.service !== null)
													.map((data) => (
														<TableRow key={data._id}>
															<TableCell>
																<Typography>
																	<span
																		style={{
																			textTransform: "upperCase",
																			fontWeight: "bold",
																			marginRight: "0.5rem",
																		}}>
																		{data.service == null ? (
																			<div>NULL</div>
																		) : (
																			data.service.title
																		)}
																	</span>
																</Typography>
															</TableCell>
															<TableCell>
																{moment(data.createdAt).format("MM/DD/YYYY")}
															</TableCell>
															<TableCell>
																{" "}
																{data.service == null ? (
																	<div>NULL</div>
																) : (
																	data.service.price
																)}
															</TableCell>
															<TableCell style={{ fontWeight: "bold" }}>
																{data.service == null ? (
																	<div>NULL</div>
																) : (
																	data.service.quantity
																)}
															</TableCell>

															<TableCell>
																<Tooltip title='Mua lại dịch vụ này'>
																	{data.service == null ? (
																		<IconButton
																			color='secondary'
																			aria-label='add an alarm'
																			disabled>
																			<AddShoppingCartIcon />
																		</IconButton>
																	) : (
																		<IconButton
																			color='secondary'
																			aria-label='add an alarm'
																			onClick={(e) => {
																				handleOpenDialog(
																					data._id,
																					data.service._id
																				);
																			}}>
																			<AddShoppingCartIcon />
																		</IconButton>
																	)}
																</Tooltip>
															</TableCell>
															{data.service == null ? (
																""
															) : clickedIdService === data.service._id &&
															  clickedIdBought === data._id ? (
																<ModalConfirm
																	isOpen={openDialog}
																	onClose={handleCloseDialog}
																	contentDialog='Xác nhận mua dịch vụ này ?'
																	onClickConfirm={(e) => {
																		handleClickConfirm(data.service._id);
																	}}
																	id={data._id}
																	onSuccess={onSuccess}
																	onError={onError}
																/>
															) : (
																""
															)}
														</TableRow>
													))}
											</TableBody>
										</Table>
									</TableContainer>
								</div>
							)}
							{userPurchased <= 0 && (
								<div>
									<Alert severity='info' style={{ textAlign: "center" }}>
										Bạn chưa mua bất kỳ dịch vụ nào
									</Alert>
									<div style={{ textAlign: "center", margin: "1rem" }}>
										<Button
											variant='contained'
											color='secondary'
											href='/xem-online'
											size='medium'
											endIcon={<AddShoppingCartIcon />}>
											Mua dịch vụ
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default UserPurchased;
