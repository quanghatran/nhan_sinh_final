import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import React, { useEffect, useState } from "react";
import DatePicker from "../../../components/controls/DatePicker";
import TitleSection from "../../../components/titleSection/TitleSection";
import { useHistory } from "react-router-dom";
import "./DemoService.scss";
import demoServiceApi from "../../../api/demoServiceApi";
import IntroVIPSearch from "../../../components/introVIPSearch/IntroVIPSearch";
import { Typography } from "@material-ui/core";
import userAPI from "../../../api/userAPI";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
		},
	},

	mtBtn: {
		marginTop: "8px",
	},
}));

const DemoService = () => {
	const classes = useStyles();

	// const history = useHistory();

	const formatYmd = (date) => date.toISOString().slice(0, 10);

	const date = new Date();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState(date);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [href, setHref] = useState("");
	const [hrefSearchVip, setHrefSearchVip] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataFormCheck = {
			name: name,
			email: email,
			birthDay: formatYmd(birthDay),
			phoneNumber: phoneNumber,
			address: address,
		};

		const fetchDemoService = () => {
			try {
				demoServiceApi
					.postDemoService(dataFormCheck)
					.then(function (response) {
						setHref("/tra-cuu");
						console.log(JSON.stringify(response.data._id));

						// lay ket qua data._id -> dispatch len store, luu vao redux, qua trang /tra-cuu thi get data theo id da duoc luu
					})
					.catch(function (error) {
						setName("");
						setEmail("");
						setBirthDay("");
						setPhoneNumber("");
						setAddress("");
					});

				// return href;
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchDemoService();
	};

	// get user info
	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				// const response = await userAPI.getUserProfile();
				setHrefSearchVip("/xem-online");
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchGetUserProfile();
	}, []);

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
											color='secondary'
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
											color='secondary'
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
									<Grid item xs={6}>
										<DatePicker
											label='Ngày sinh'
											variant='outlined'
											color='secondary'
											name='birthDay'
											size='medium'
											value={birthDay}
											onChange={(e) => setBirthDay(e.target.value)}
											fullWidth
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											label='Số điện thoại'
											variant='outlined'
											color='secondary'
											name='phoneNumber'
											type='text'
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
											color='secondary'
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

								<Button
									variant='contained'
									color='secondary'
									fullWidth
									size='large'
									type='submit'
									endIcon={<NearMeOutlinedIcon />}
									className={classes.mtBtn}
									href={href ? href : ""}
								>
									Tra Cứu Miễn Phí
								</Button>
							</form>
						</Grid>
						{/* <Grid container item xs={12} sm={1}></Grid> */}

						<Grid container item xs={12} sm={6} style={{ width: "100%" }}>
							<IntroVIPSearch hrefSearchVip={hrefSearchVip} />
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default DemoService;
