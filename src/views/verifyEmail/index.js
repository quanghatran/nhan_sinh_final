import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import clsx from "clsx";
import React, { useState } from "react";
import signInServiceApi from "../../api/signInServiceApi";
import logo from "../../images/logo_satsi.png";
import "./VerifyEmail.scss";

const useStyles = makeStyles((theme) => ({
	textField: {
		width: "35ch",
	},
	spaceTop: {
		marginTop: "1rem",
	},
}));

const CssTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#fff",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#fff",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#d4d4d4",
			},
			"&:hover fieldset": {
				borderColor: "#d4d4d4",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#fff",
			},
		},
	},
})(TextField);

const VerifyEmail = () => {
	const classes = useStyles();

	const [email, setEmail] = useState("");

	const handleSubmitVerifyOtp = (e) => {
		e.preventDefault();

		const data = {
			email: email,
		};

		console.log(data);

		const fetchPostToGetVerifyOtp = async () => {
			try {
				const request = await signInServiceApi.postVerifyEmail(data);

				console.log(request);
				// if (request) {
				// 	// setIsSuccess(true);
				// 	setTimeout(() => {
				// 		// setIsSuccess(false);
				// 		// history.push("/dang-nhap");
				// 	}, 1500);
				// }
			} catch (er) {
				// setIsError(true);
				// setTimeout(() => {
				// 	// setIsError(false);
				// 	// setOtp("");
				// 	// setPassword("");
				// }, 1500);
				// console.log(er);
			}
		};

		fetchPostToGetVerifyOtp();
	};

	return (
		<div className='login-wrapper'>
			<div className='loginCover'>
				<div className='container-fluid'>
					<div className='contentLogin'>
						<Typography variant='h4' component='h1' align='center'>
							<Grid container>
								<Grid item xs={12}>
									<Button href='/'>
										<img src={logo} alt='logo' />
									</Button>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='h5'
										component='h1'
										align='center'
										style={{ margin: "1rem 0" }}>
										MINH TRIẾT NHÂN SINH
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='subtitle1'
										align='center'
										style={{ fontStyle: "italic" }}>
										Xác thực email
									</Typography>
								</Grid>
							</Grid>
						</Typography>

						<div className='loginFiled'>
							<form className={classes.root} onSubmit={handleSubmitVerifyOtp}>
								{/* {isLoading && <CircularProgress color='secondary' />} */}
								{/* {errorOtp && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										Lấy mã OTP không thành công
									</Alert>
								)}
								{isError && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										Cập nhật mật khẩu không thành công
									</Alert>
								)}

								{isSuccess && (
									<Alert
										variant='filled'
										severity='success'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										Cập nhật mật khẩu thành công
									</Alert>
								)} */}
								<Grid container direction='column'>
									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											margin='normal'
											type='email'
											label='Email đã đăng ký'
											className={clsx(classes.textField)}
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											color='secondary'
											autoComplete='off'
										/>
									</Grid>
								</Grid>
								<Button
									size='large'
									type='submit'
									color='secondary'
									variant='contained'
									// disabled={isLoading ? true : false}
									style={{ marginTop: "2rem" }}>
									GỬI YÊU CẦU
								</Button>
							</form>
							<Button
								href='/dang-nhap'
								style={{ marginTop: "1rem" }}
								startIcon={<KeyboardBackspaceOutlinedIcon />}
								color='secondary'>
								Quay Về Trang đăng nhập
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyEmail;
