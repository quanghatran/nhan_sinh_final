import { Button, Grid, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HomeIcon from "@material-ui/icons/Home";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Alert from "@material-ui/lab/Alert";
import clsx from "clsx";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import signInServiceApi from "../../api/signInServiceApi";
import logo from "../../images/logo_satsi.png";
import { signInVerifyEmail } from "./sigInSlice";
import "./SignIn.scss";

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

const SignIn = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordAgain, setShowPasswordAgain] = useState(false);

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [errorPasswordAgain, setErrorPasswordAgain] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleClickShowPasswordAgain = () => {
		setShowPasswordAgain(!showPasswordAgain);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseDownPasswordAgain = (event) => {
		event.preventDefault();
	};

	const handleSubmitSignIn = (e) => {
		e.preventDefault();

		const dataSignIn = {
			name: name,
			email: email,
			phone: phone,
			password: password,
		};

		if (password === passwordAgain) {
			const fetchSignIn = () => {
				try {
					signInServiceApi
						.postSignIn(dataSignIn)
						.then(function (response) {
							if (response.data.email === dataSignIn.email) {
								setSuccess(true);

								const action = signInVerifyEmail(dataSignIn.email);

								dispatch(action);

								setTimeout(() => {
									setSuccess(false);
									history.push("/xac-thuc-email");
								}, 1500);
							} else {
								throw "SĐT hoặc email đã được đăng ký trước";
							}
						})
						.catch(function (error) {
							setErrorMessage(error);
							setError(true);
							setTimeout(() => {
								setError(false);
							}, 1500);
						});
				} catch (error) {
					console.log("failed to fetch product list: ", error);
				}
			};
			fetchSignIn();
		} else {
			setErrorPasswordAgain(true);

			setTimeout(() => {
				setErrorPasswordAgain(false);
			}, 1500);
		}
	};

	return (
		<div className='login-wrapper'>
			<div className='loginCover'>
				<div className='container-fluid'>
					<div className='contentLogin'>
						<Typography variant='h4' component='h1' align='center'>
							<Grid container>
								<Grid item xs={12}>
									{" "}
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
										Đăng ký tài khoản
									</Typography>
								</Grid>
							</Grid>
						</Typography>

						<div className='loginFiled'>
							<form className={classes.root} onSubmit={handleSubmitSignIn}>
								{success && (
									<Alert
										variant='filled'
										severity='success'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										Đăng ký thành công
									</Alert>
								)}
								{error && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										{errorMessage}
									</Alert>
								)}
								{errorPasswordAgain && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}>
										Nhập lại mật khẩu không chính xác
									</Alert>
								)}
								<Grid container direction='column'>
									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											margin='normal'
											label='Họ và tên'
											className={clsx(classes.textField)}
											required
											type='text'
											value={name}
											onChange={(e) => setName(e.target.value)}
											// id='custom-css-outlined-input'
											color='secondary'
										/>
									</Grid>

									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											type='email'
											margin='normal'
											label='Email'
											className={clsx(classes.textField)}
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											// id='custom-css-outlined-input'
											color='secondary'
										/>
									</Grid>

									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											margin='normal'
											type='number'
											label='Số điện thoại đăng nhập'
											className={clsx(classes.textField)}
											required
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											color='secondary'
										/>
									</Grid>

									<Grid item>
										<FormControl
											className={clsx(classes.textField, classes.spaceTop)}
											variant='outlined'
											size='medium'
											color='secondary'>
											<InputLabel htmlFor='outlined-adornment-password-2'>
												Mật khẩu
											</InputLabel>
											<OutlinedInput
												id='outlined-adornment-password-2'
												type={showPassword ? "text" : "password"}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												required
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={handleClickShowPassword}
															onMouseDown={handleMouseDownPassword}
															edge='end'>
															{showPassword ? (
																<Visibility />
															) : (
																<VisibilityOff />
															)}
														</IconButton>
													</InputAdornment>
												}
												labelWidth={70}
											/>
										</FormControl>
									</Grid>

									<Grid item>
										<FormControl
											className={clsx(classes.textField, classes.spaceTop)}
											variant='outlined'
											size='medium'
											color='secondary'>
											<InputLabel htmlFor='outlined-adornment-password-1'>
												Nhập lại mật khẩu
											</InputLabel>
											<OutlinedInput
												id='outlined-adornment-password-1'
												type={showPasswordAgain ? "text" : "password"}
												value={passwordAgain}
												onChange={(e) => setPasswordAgain(e.target.value)}
												required
												endAdornment={
													<InputAdornment position='end'>
														<IconButton
															aria-label='toggle password visibility'
															onClick={handleClickShowPasswordAgain}
															onMouseDown={handleMouseDownPasswordAgain}
															edge='end'>
															{showPasswordAgain ? (
																<Visibility />
															) : (
																<VisibilityOff />
															)}
														</IconButton>
													</InputAdornment>
												}
												labelWidth={70}
											/>
										</FormControl>
									</Grid>
								</Grid>
								<Button
									size='large'
									color='secondary'
									variant='contained'
									type='submit'
									style={{ marginTop: "2rem" }}>
									Đăng Ký
								</Button>
								<div className='navigateBlock signInBlock'>
									<a className='login' href='/dang-nhap'>
										Đã có tài khoản?
									</a>
								</div>
							</form>
							<Button href='/' startIcon={<HomeIcon />} color='secondary'>
								Quay Về Trang Chủ
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
