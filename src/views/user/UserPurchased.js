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
import NewFooter from "../../common/newfooter/NewFooter";
import formatCash from "../../components/FormatMoney";
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
					<TitleSection
						titleHeader='D???ch v??? ???? mua'
						style={{ marginTop: "1rem", color: "#000" }}
					/>
					<div className='UserPurchased__content'>
						<div>
							{userPurchased.length > 0 && (
								<div>
									<TableContainer component={Paper}>
										<Table className={classes.table} aria-label='simple table'>
											<TableHead
												style={{
													backgroundColor: "#f69320",
													textTransform: "upperCase",
												}}>
												<TableRow>
													<TableCell style={{ color: "#fff" }}>
														T??n d???ch v???
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														Ng??y mua
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														Gi?? d???ch v???
													</TableCell>
													<TableCell style={{ color: "#fff" }}>
														L?????t tra c???u
													</TableCell>
													<TableCell style={{ width: "10%", color: "#fff" }}>
														Mua th??m
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
																	formatCash("" + data.service.price) + " VN??"
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
																<Tooltip title='Mua l???i d???ch v??? n??y'>
																	{data.service == null ? (
																		<IconButton
																			color='primary'
																			aria-label='add an alarm'
																			disabled>
																			<AddShoppingCartIcon />
																		</IconButton>
																	) : (
																		<IconButton
																			color='primary'
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
																	contentDialog='X??c nh???n mua d???ch v??? n??y ?'
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
										B???n ch??a mua b???t k??? d???ch v??? n??o
									</Alert>
									<div style={{ textAlign: "center", margin: "1rem" }}>
										<Button
											variant='contained'
											color='primary'
											href='/xem-online'
											size='medium'
											endIcon={<AddShoppingCartIcon />}>
											Mua d???ch v???
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<NewFooter />
		</div>
	);
};

export default UserPurchased;
