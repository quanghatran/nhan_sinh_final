import React, { useEffect, useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleSection from "../../components/titleSection/TitleSection";
import HeaderLogin from "../home/headerLogin/HeaderLogin";
import "./UserSearchHistory.css";
import Alert from "@material-ui/lab/Alert";
import servicesApi from "../../api/servicesApi";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import moment from "moment";

const UserPurchased = () => {
	const [userPurchased, setUserPurchased] = useState("");

	useEffect(() => {
		const fetchListServiceUserBought = async () => {
			try {
				const response = await servicesApi.getAllServiceBought();
				console.log(response.data);
				setUserPurchased(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchListServiceUserBought();
	}, []);

	return (
		<div className='UserSearchHistory'>
			<HeaderLogin />
			<div className='UserSearchHistory__container'>
				<div className='container-fluid'>
					<TitleSection titleHeader='dịch vụ đã mua' />
					<div className='UserPurchased__content'>
						<div>
							{userPurchased && (
								<div>
									{userPurchased.map((data) => (
										<Grid item xs={12} sm={4} md={3} key={data._id}>
											<Card
												style={{
													background: "#34495e",
													color: "#fff",
												}}
											>
												<CardContent>
													<Typography
														variant='h6'
														component='h2'
														style={{ fontSize: "1.2rem" }}
													>
														Tên dịch vụ: {data.service.title}
													</Typography>
													<Typography style={{ margin: "0.3rem 0" }}>
														Ngày mua:{" "}
														{moment(data.createdAt).format("MM/DD/YYYY")}
													</Typography>

													<Typography style={{ margin: "0.3rem 0" }}>
														Giá: {data.service.price}
													</Typography>
													<Typography style={{ margin: "0.3rem 0" }}>
														Số lần tra cứu VIP: {data.service.quantity}
													</Typography>
												</CardContent>
											</Card>
										</Grid>
									))}
								</div>
							)}
							{!userPurchased && (
								<Alert severity='info' style={{ textAlign: "center" }}>
									Bạn chưa mua bất kỳ dịch vụ nào
								</Alert>
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
