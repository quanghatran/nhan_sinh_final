import { Button, Grid, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import Alert from "@material-ui/lab/Alert";
import clsx from "clsx";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import forgotPasswordApi from "../../api/forgotPasswordApi";
import logo from "../../images/logo_satsi.png";
import "./ForgotPassword.scss";

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

const ForgotPassword = () => {
	const classes = useStyles();
	const history = useHistory();

	const [email, setEmail] = useState("");

	const [otp, setOtp] = useState("");
	const [password, setPassword] = useState("");

	const [hasOtp, setHasOtp] = useState(false);

	const [isError, setIsError] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);

	const [errorOtp, setErrorOtp] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitGetOtp = (e) => {
		e.preventDefault();

		const data = {
			email: email,
			// password: password,
		};

		const fetchPostToGetOtp = async () => {
			setIsLoading(true);
			try {
				const request = await forgotPasswordApi.postRequestOtp(data);
				if (request) {
					setHasOtp(true);
					setIsLoading(false);
				}
			} catch (error) {
				setIsLoading(false);
				setErrorOtp(true);

				setTimeout(() => {
					setErrorOtp(false);
				}, 1500);
			}
		};

		fetchPostToGetOtp();
	};

	const handleSubmitChangePassword = (e) => {
		e.preventDefault();

		const data = {
			email: email,
			otp: otp,
			password: password,
		};

		const fetchPostNewPasswordRequest = async () => {
			try {
				const request = await forgotPasswordApi.postRequestNewPassword(data);

				if (request) {
					setIsSuccess(true);
					setTimeout(() => {
						setIsSuccess(false);
						history.push("/dang-nhap");
					}, 1500);
				}
			} catch (er) {
				setIsError(true);
				setTimeout(() => {
					setIsError(false);
					setOtp("");
					setPassword("");
				}, 1500);
			}
		};

		fetchPostNewPasswordRequest();
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
										variant='h3'
										component='h1'
										align='center'
										style={{ margin: "1rem 0" }}>
										Minh tri???t nh??n sinh
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='subtitle1'
										align='center'
										style={{ fontStyle: "italic" }}>
										Qu??n m???t kh???u
									</Typography>
								</Grid>
							</Grid>
						</Typography>

						<div className='loginFiled'>
							<form
								className={classes.root}
								onSubmit={
									!hasOtp ? handleSubmitGetOtp : handleSubmitChangePassword
								}>
								{isLoading && <CircularProgress color='primary' />}
								{errorOtp && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										L???y m?? OTP kh??ng th??nh c??ng
									</Alert>
								)}
								{isError && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										C???p nh???t m???t kh???u kh??ng th??nh c??ng
									</Alert>
								)}

								{isSuccess && (
									<Alert
										variant='filled'
										severity='success'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										C???p nh???t m???t kh???u th??nh c??ng
									</Alert>
								)}
								<Grid container direction='column'>
									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											margin='normal'
											type='email'
											label='Email ???? ????ng k??'
											className={clsx(classes.textField)}
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											color='secondary'
											autoComplete='off'
										/>
									</Grid>
								</Grid>
								{hasOtp ? (
									<div>
										<Grid container direction='column'>
											<Grid item>
												<CssTextField
													size='medium'
													variant='outlined'
													margin='normal'
													type='text'
													label='Nh???p m?? OTP'
													className={clsx(classes.textField)}
													required
													value={otp}
													onChange={(e) => setOtp(e.target.value)}
													color='secondary'
													autoComplete='off'
												/>
											</Grid>
											<Grid item>
												<CssTextField
													size='medium'
													variant='outlined'
													margin='normal'
													type='text'
													label='Nh???p m???t kh???u m???i'
													className={clsx(classes.textField)}
													required
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													color='secondary'
													autoComplete='off'
												/>
											</Grid>
										</Grid>
										<Typography
											variant='caption'
											style={{ fontStyle: "italic", marginTop: "1rem" }}>
											M?? OTP ch??? c?? th???i h???n trong 2 ph??t
										</Typography>
										<div>
											<Button
												size='large'
												type='submit'
												color='primary'
												variant='contained'
												style={{ marginTop: "2rem" }}>
												X??C NH???N
											</Button>
										</div>
									</div>
								) : (
									<div>
										<Button
											size='large'
											type='submit'
											color='primary'
											variant='contained'
											disabled={isLoading ? true : false}
											style={{ marginTop: "2rem" }}>
											G???I Y??U C???U
										</Button>
									</div>
								)}
							</form>
							<Button
								href='/dang-nhap'
								style={{ marginTop: "1rem" }}
								startIcon={<KeyboardBackspaceOutlinedIcon />}
								color='secondary'>
								Quay V??? Trang ????ng nh???p
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
