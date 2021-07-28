import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import DatePicker from "../../components/controls/DatePicker";
import TitleSection from "../../components/titleSection/TitleSection";
import { useHistory } from "react-router-dom";
import demoServiceApi from "../../api/demoServiceApi";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import userAPI from "../../api/userAPI";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
			borderRadius: "5px",
		},
	},
	textField: {
		backgroundColor: theme.palette.common.white,
	},
	datePicker: {
		backgroundColor: theme.palette.common.white,
	},
	mtBtn: {
		marginTop: "8px",
	},
}));

const UserService = () => {
	const classes = useStyles();
	const formatYmd = (date) => date.toISOString().slice(0, 10);

	const date = new Date();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState(date);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	const [userInfo, setUserInfo] = useState([]);

	// const href = "tra-cuu";

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataFormCheck = {
			name: name,
			email: email,
			birthDay: formatYmd(birthDay),
			phoneNumber: phoneNumber,
			address: address,
		};

		const fetchDemoService = async () => {
			try {
				const request = await demoServiceApi.postDemoService(dataFormCheck);
				console.log("request: ", request);
				// const href = "./tra-cuu";
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
				const response = await userAPI.getUserProfile();
				setUserInfo(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchGetUserProfile();
	}, []);

	return (
		<div id='userServiceBlock' className='block userServiceBlock'>
			<div
				className='container-fluid'
				style={{
					position: "absolute",
					top: "25%",
					left: "25%",
					transform: "translateX(-15%)",
				}}
			>
				<TitleSection
					titleHeader='dịch vụ của chúng tôi'
					style={{ color: "white" }}
				/>
				<div
					className='VipCountLabel'
					style={{ textAlign: "center", color: "white", fontSize: "1.2rem" }}
				>
					Bạn có <b style={{ color: "#ff5656" }}>{userInfo.slotVip}</b> lượt tra
					vip.
					<Button color='default' href='#meaningNumerology'>
						Mua thêm lượt tra VIP
					</Button>
				</div>
				<div className='userServiceContent'>
					<Grid container spacing={3}>
						<Grid item container>
							<form className={classes.root} onSubmit={handleSubmit}>
								<Grid container item spacing={2}>
									<Grid item xs={6}>
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
											className={classes.textField}
											autoComplete='off'
										/>
									</Grid>

									<Grid item xs={6}>
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
											className={classes.textField}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12}>
										<DatePicker
											label='Ngày sinh'
											variant='outlined'
											color='primary'
											name='birthDay'
											size='medium'
											value={birthDay}
											onChange={(e) => setBirthDay(e.target.value)}
											fullWidth
											className={classes.datePicker}
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											label='Số điện thoại'
											variant='outlined'
											color='primary'
											name='phoneNumber'
											type='text'
											required={true}
											size='medium'
											className={classes.textField}
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											label='Địa chỉ'
											variant='outlined'
											color='primary'
											name='address'
											type='text'
											required={true}
											size='medium'
											className={classes.textField}
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
									endIcon={<SearchIcon />}
									className={classes.mtBtn}
									// href={href ? href : ""}
								>
									Tra Cứu Trả Phí
								</Button>
							</form>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};

export default UserService;
