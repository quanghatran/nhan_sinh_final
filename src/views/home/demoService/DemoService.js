import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import moment from "moment";
import React, { useState } from "react";
import demoServiceApi from "../../../api/demoServiceApi";
import DatePicker from "../../../components/controls/DatePicker";
import IntroVIPSearch from "../../../components/introVIPSearch/IntroVIPSearch";
import TitleSection from "../../../components/titleSection/TitleSection";
import { useHistory } from "react-router-dom";

import "./DemoService.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
		},
	},

	mtBtn: {
		margin: "0 auto",
		marginTop: "8px",
	},
}));

const DemoService = () => {
	const classes = useStyles();
	const history = useHistory();

	// const formatYmd = (date) => date.toISOString().slice(0, 10);

	const date = new Date();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState(date);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataFormCheck = {
			name: name,
			email: email,
			birthDay: moment(birthDay).format("YYYY-MM-DD"),
			phoneNumber: phoneNumber,
			address: address,
		};

		const fetchDemoService = () => {
			try {
				demoServiceApi
					.postDemoService(dataFormCheck)
					.then(function (response) {
						console.log(response.data._id);

						const idFreeSearch = response.data._id;

						localStorage.setItem("idFreeSearch", idFreeSearch);
						history.push("/tra-cuu");
					})
					.catch(function (error) {
						// setName("");
						// setEmail("");
						// setBirthDay("");
						// setPhoneNumber("");
						// setAddress("");
					});
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchDemoService();
	};

	return (
		<div id='demoServiceBlock' className='block demoServiceBlock'>
			<div className='container-fluid'>
				<TitleSection titleHeader='dịch vụ của chúng tôi' />
				<div className='demoServiceContent'>
					<Grid container spacing={3}>
						<Grid item container xs={12} sm={6}>
							<Typography variant='h5' component='h3' className='titleVIP'>
								Tra cứu miễn phí
							</Typography>
							<form className={classes.root} onSubmit={handleSubmit}>
								<Grid container item spacing={2}>
									<Grid item xs={12}>
										<TextField
											label='Họ tên'
											variant='outlined'
											color='primary'
											name='fullName'
											type='text'
											required={true}
											size='medium'
											value={name}
											onChange={(e) => setName(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											label='Email'
											variant='outlined'
											color='primary'
											name='email'
											type='email'
											required={true}
											size='medium'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<DatePicker
											label='Ngày sinh'
											variant='outlined'
											color='primary'
											name='birthDay'
											size='medium'
											value={birthDay}
											onChange={(e) => setBirthDay(e.target.value)}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											label='Số điện thoại'
											variant='outlined'
											color='primary'
											name='phoneNumber'
											type='number'
											required={true}
											size='medium'
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											label='Địa chỉ'
											variant='outlined'
											color='primary'
											name='address'
											type='text'
											required={true}
											size='medium'
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
								</Grid>

								<div style={{ textAlign: "center" }}>
									{" "}
									<Button
										variant='contained'
										color='primary'
										type='submit'
										endIcon={<SearchIcon />}
										className={classes.mtBtn}
									>
										Tra Cứu Miễn Phí
									</Button>
								</div>
							</form>
						</Grid>

						<Grid container item xs={12} sm={6} style={{ width: "100%" }}>
							<IntroVIPSearch />
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default DemoService;
