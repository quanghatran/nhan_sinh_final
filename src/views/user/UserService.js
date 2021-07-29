import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import demoServiceApi from "../../api/demoServiceApi";
import userAPI from "../../api/userAPI";
import DatePicker from "../../components/controls/DatePicker";
import TitleSection from "../../components/titleSection/TitleSection";
import "./UserService.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
			borderRadius: "5px",
		},
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

	const [isLogin, setIsLogin] = useState(false);

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
				console.log(response);
				setUserInfo(response.data);
				setIsLogin(true);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
				setIsLogin(false);
			}
		};

		fetchGetUserProfile();
	}, []);

	return (
		<div id='userServiceBlock' className='userServiceBlock'>
			<div className='block userServiceBlockWrapper'>
				<div className='container-fluid'>
					<TitleSection titleHeader='Tra cứu VIP' style={{ color: "white" }} />

					{isLogin ? (
						<Typography
							className='VipCountLabel'
							variant='h4'
							component='h5'
							style={{
								textAlign: "center",
								color: "white",
								fontSize: "1.2rem",
							}}
						>
							Bạn có <b style={{ color: "#ff5656" }}>{userInfo.slotVip}</b> lượt
							tra vip
							<Button size='large' color='secondary' href='#meaningNumerology'>
								Mua thêm lượt tra VIP
							</Button>
						</Typography>
					) : (
						<Alert
							variant='filled'
							severity='error'
							style={{ marginBottom: "1rem" }}
						>
							Bạn cần đăng nhập để thực hiện dịch vụ này
						</Alert>
					)}

					<div className='userServiceContent'>
						<div className='serviceFiled'>
							<form className={classes.root} onSubmit={handleSubmit}>
								<Grid container item spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											label='Họ tên'
											variant='outlined'
											color='primary'
											name='fullName'
											type='text'
											required={true}
											value={name}
											onChange={(e) => setName(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>

									<Grid item xs={12} sm={6}>
										<TextField
											label='Email'
											variant='outlined'
											color='primary'
											name='email'
											type='email'
											required={true}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
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
											type='text'
											required={true}
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											label='Địa chỉ'
											variant='outlined'
											color='primary'
											name='address'
											type='text'
											required={true}
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
								</Grid>

								<Button
									variant='contained'
									color='primary'
									fullWidth
									size='large'
									type='submit'
									endIcon={<SearchIcon />}
									className={classes.mtBtn}
								>
									Tra Cứu VIP
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserService;
