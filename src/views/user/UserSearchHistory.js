import {
	Button,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Tooltip,
	Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import servicesApi from "../../api/servicesApi";
import NewFooter from "../../common/newfooter/NewFooter";
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

const UserSearchHistory = () => {
	const classes = useStyles();

	const history = useHistory();

	const [freeSearch, setFreeSearch] = useState([]);
	const [vipSearch, setVipSearch] = useState([]);

	useEffect(() => {
		const fetchGetFreeSearch = async () => {
			try {
				const response = await servicesApi.getFreeSearchUser();
				setFreeSearch(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchGetFreeSearch();
	}, []);

	useEffect(() => {
		const fetchGetVipSearch = async () => {
			try {
				const response = await servicesApi.getListVipSearchUser();
				setVipSearch(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchGetVipSearch();
	}, []);

	//get id of free service, and move to free service, fetch data based id by api: /api/searchFree/${id}
	const handleClickWatchDetail = (id) => {
		localStorage.setItem("idFreeSearch", id);
		console.log(id);
		history.push("/tra-cuu");
	};

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}>
				<div className='container-fluid'>
					<TitleSection
						titleHeader='L???ch s??? tra c???u'
						style={{ marginTop: "1rem", color: "#000" }}
					/>
					<div className='UserSearchHistory__content'>
						{freeSearch.length <= 0 && vipSearch <= 0 ? (
							<div>
								<Alert severity='info' style={{ textAlign: "center" }}>
									B???n ch??a th???c hi???n tra d???ch v??? tra c???u n??o
								</Alert>
								<div style={{ textAlign: "center", margin: "1rem" }}>
									<Button
										variant='contained'
										color='primary'
										href='/xem-online'
										size='medium'
										endIcon={<SearchIcon />}>
										Tra c???u
									</Button>
								</div>
							</div>
						) : (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label='simple table'>
									<TableHead
										style={{
											backgroundColor: "#f69320",
											textTransform: "upperCase",
										}}>
										<TableRow>
											<TableCell style={{ color: "#fff" }}>
												Th??ng tin tra c???u
											</TableCell>
											<TableCell style={{ width: "20%", color: "#fff" }}>
												Th???i gian tra c???u
											</TableCell>
											<TableCell style={{ width: "15%", color: "#fff" }}>
												Lo???i tra c???u
											</TableCell>
											<TableCell style={{ width: "10%", color: "#fff" }}>
												K???t qu???{" "}
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{freeSearch.map((data) => (
											<TableRow key={data._id}>
												<TableCell>
													<Typography>
														<span
															style={{
																textTransform: "upperCase",
																fontWeight: "bold",
																marginRight: "0.5rem",
																marginBottom: "0.3rem",
															}}>
															{data.name}
														</span>
														<div style={{ fontSize: "0.9rem" }}>
															{moment(data.birthDay).format("MM/DD/YYYY")}
														</div>
													</Typography>
													{/* <Typography>{data.name}</Typography> */}
												</TableCell>
												<TableCell>
													{moment(data.createdAt).format("MM/DD/YYYY")}
												</TableCell>
												<TableCell style={{ fontWeight: "bold" }}>
													Free
												</TableCell>
												<TableCell>
													<Tooltip title='Xem chi ti???t'>
														<IconButton
															aria-label='add an alarm'
															color='primary'
															onClick={(e) => {
																handleClickWatchDetail(data._id);
															}}>
															<FileCopyOutlinedIcon />
														</IconButton>
													</Tooltip>
												</TableCell>
											</TableRow>
										))}
										{vipSearch.map((data) => (
											<TableRow key={data._id}>
												<TableCell>
													<Typography>
														<span
															style={{
																textTransform: "upperCase",
																fontWeight: "bold",
																marginRight: "0.5rem",
																marginBottom: "0.3rem",
															}}>
															{data.name}
														</span>
														<div style={{ fontSize: "0.9rem" }}>
															{moment(data.birthDay).format("MM/DD/YYYY")}
														</div>
													</Typography>
												</TableCell>
												<TableCell>
													{moment(data.createdAt).format("MM/DD/YYYY")}
												</TableCell>
												<TableCell style={{ fontWeight: "bold" }}>
													VIP
												</TableCell>
												<TableCell>
													<Tooltip title='K???t qu??? ???????c g???i v??? email'>
														<IconButton>
															<VisibilityOffIcon color='disabled' />
														</IconButton>
													</Tooltip>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						)}
					</div>
				</div>
			</div>
			<NewFooter />
		</div>
	);
};

export default UserSearchHistory;
