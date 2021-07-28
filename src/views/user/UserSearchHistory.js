import {
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
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import React, { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import Footer from "../../common/footer/Footer";
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

	const [freeSearch, setFreeSearch] = useState([]);
	const [vipSearch, setVipSearch] = useState([]);

	const [count, setCount] = useState("1");
	// const formatYmd = (date) => date.toISOString().slice(0, 10);

	useEffect(() => {
		const fetchGetFreeSearch = async () => {
			try {
				const response = await servicesApi.getFreeSearchUser();
				setFreeSearch(response.data);
				console.log(response.data);
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

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div
				className='UserSearchHistory__container'
				style={{ marginBottom: "3rem" }}
			>
				<div className='container-fluid'>
					<TitleSection titleHeader='Lịch sử tra cứu' />
					<div className='UserSearchHistory__content'>
						{!freeSearch && !vipSearch ? (
							<Alert severity='info' style={{ textAlign: "center" }}>
								Bạn chưa thực hiện tra dịch vụ tra cứu nào
							</Alert>
						) : (
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label='simple table'>
									<TableHead
										style={{
											backgroundColor: "#3f51b5",
											textTransform: "upperCase",
										}}
									>
										<TableRow>
											<TableCell style={{ width: "5%", color: "#fff" }}>
												ID
											</TableCell>
											<TableCell style={{ color: "#fff" }}>
												Thông tin tra cứu
											</TableCell>
											<TableCell style={{ width: "20%", color: "#fff" }}>
												Thời gian tra cứu
											</TableCell>
											<TableCell style={{ width: "15%", color: "#fff" }}>
												Loại tra cứu
											</TableCell>
											<TableCell style={{ width: "10%", color: "#fff" }}>
												Kết quả{" "}
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{vipSearch.map((data) => (
											<TableRow key={data._id}>
												<TableCell>{count}</TableCell>
												<TableCell>
													<Typography>
														<span
															style={{
																textTransform: "upperCase",
																fontWeight: "bold",
																marginRight: "0.5rem",
															}}
														>
															{data.name}
														</span>
														<span style={{ fontSize: "0.8rem" }}>
															{moment(data.birthDay).format("MM/DD/YYYY")}
														</span>
													</Typography>
													{/* <Typography>{data.name}</Typography> */}
												</TableCell>
												<TableCell>
													{moment(data.createdAt).format("MM/DD/YYYY")}
												</TableCell>
												<TableCell
													style={{ color: "#f50057", fontWeight: "bold" }}
												>
													Free
												</TableCell>
												<TableCell>
													<Tooltip title='Xem chi tiết'>
														<IconButton
															color='primary'
															aria-label='add an alarm'
														>
															<FileCopyOutlinedIcon />
														</IconButton>
													</Tooltip>
												</TableCell>
											</TableRow>
										))}
										{freeSearch.map((data) => (
											<TableRow key={data._id}>
												<TableCell>{count}</TableCell>
												<TableCell>
													<Typography>
														<span
															style={{
																textTransform: "upperCase",
																fontWeight: "bold",
																marginRight: "0.5rem",
															}}
														>
															{data.name}
														</span>
														<span style={{ fontSize: "0.9rem" }}>
															{data.birthDay}
														</span>
													</Typography>
													{/* <Typography>{data.name}</Typography> */}
												</TableCell>
												<TableCell>
													{moment(data.createdAt).format("MM/DD/YYYY")}
												</TableCell>
												<TableCell
													style={{ color: "#3f51b5", fontWeight: "bold" }}
												>
													VIP
												</TableCell>
												<TableCell>Kết quả được gửi về email</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default UserSearchHistory;
