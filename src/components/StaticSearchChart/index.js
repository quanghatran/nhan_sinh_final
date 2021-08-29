import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import userAPI from "../../api/userAPI";
import RangeDatePicker from "../RangeDatePicker";

const date = new Date();

const initialEndDay = moment(date).format("YYYY-MM-DD");

const initialStartDay = moment().subtract(1, "months").format("YYYY-MM-DD");

const StaticSearchChart = () => {
	const [labelsDayRange, setLabelsDayRange] = useState([]);
	const [countFreeSearch, setCountFreeSearch] = useState([]);
	const [countVipSearch, setCountVipSearch] = useState([]);
	// const [amountDirection, setAmountDirection] = useState([]);

	const [startDay, setStartDay] = useState(initialStartDay);
	const [endDay, setEndDay] = useState(initialEndDay);

	const [isStateChanged, setIsStartChanged] = useState(false);

	const data = {
		labels: labelsDayRange,
		datasets: [
			{
				data: countFreeSearch,
				label: "Tra cứu miễn phí",
				borderColor: "#2c3e50",
				fill: false,
			},
			{
				data: countVipSearch,
				label: "Tra cứu VIP",
				borderColor: "#16a085",
				fill: false,
			},
		],
	};
	const options = {
		legend: {
			display: true,
			position: "bottom",
		},
	};

	// get statistic amount of search free, vip search and direct coaching
	useEffect(() => {
		const fetchStatisticSearchFree = () => {
			userAPI
				.postToGetListSearchFree({
					start: startDay,
					end: endDay,
				})
				.then((response) => {
					// console.log(response.data);
					setLabelsDayRange(response.data.dayRange);
					setCountFreeSearch(response.data.count);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		const fetchStatisticSearchVip = () => {
			userAPI
				.postToGetListSearchVip({
					start: startDay,
					end: endDay,
				})
				.then((response) => {
					setCountVipSearch(response.data.count);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchStatisticSearchFree();
		fetchStatisticSearchVip();
	}, [isStateChanged]);

	const handleFilter = (data) => {
		setIsStartChanged(true);
		setTimeout(() => {
			setIsStartChanged(false);
		}, 1500);

		setStartDay(data.start);
		setEndDay(data.end);
	};

	return (
		<React.Fragment>
			<div className='header'>
				<Typography
					variant='h5'
					style={{ margin: "0rem 0 1rem", textAlign: "center" }}>
					Số lượt tra cứu theo từng ngày
				</Typography>
			</div>
			<Card className='h-100'>
				<CardContent className='pt-0'>
					<div style={{ marginLeft: "2rem", marginBottom: "2rem" }}>
						<RangeDatePicker
							startDay={startDay}
							endDay={endDay}
							onStartDayChange={(e) => {
								setStartDay(e.target.value);
							}}
							onEndDayChange={(e) => {
								setEndDay(e.target.value);
							}}
							onFilter={handleFilter}
						/>
					</div>
					<Line data={data} options={options} />
				</CardContent>
			</Card>
		</React.Fragment>
	);
};

export default StaticSearchChart;
