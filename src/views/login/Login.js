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
import loginServiceApi from "../../api/loginServiceApi";
import logo from "../../images/logo_satsi.png";
import "./Login.scss";
import { addUser } from "./loginSlice";

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

const Login = () => {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();

	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [error, setError] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		const dataSignIn = {
			phone: phone,
			password: password,
		};

		const fetchLoginData = async () => {
			try {
				const request = await loginServiceApi.postLogin(dataSignIn);

				localStorage.setItem("user", JSON.stringify(request.data));
				localStorage.setItem("userToken", request.data.token);

				setTimeout(() => {
					const action = addUser(request.data);
					dispatch(action);

					history.push("/xem-online");
				}, 1000);
			} catch (error) {
				setError(true);

				setTimeout(() => {
					setError(false);
					setPhone("");
					setPassword("");
				}, 1500);
			}
		};

		fetchLoginData();
	};

	return (
		<div className='login-wrapper'>
			<div className='loginCover'>
				<div className='container-fluid'>
					<div className='contentLogin'>
						<Typography variant='h4' component='h1' align='center'>
							<Button href='/'>
								<img src={logo} alt='logo' />
							</Button>
							MINH TRIẾT NHÂN SINH
						</Typography>

						<div className='loginFiled'>
							<form className={classes.root} onSubmit={handleSubmitLogin}>
								{error && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}
									>
										Đăng nhập thất bại
									</Alert>
								)}
								<Grid container direction='column'>
									<Grid item>
										<CssTextField
											size='medium'
											variant='outlined'
											margin='normal'
											type='text'
											label='Số điện thoại đăng nhập'
											className={clsx(classes.textField)}
											required
											variant='outlined'
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											// id='custom-css-outlined-input'
											color='secondary'
										/>
									</Grid>

									<Grid item>
										<FormControl
											className={clsx(classes.textField, classes.spaceTop)}
											variant='outlined'
											size='medium'
											color='secondary'
										>
											<InputLabel htmlFor='outlined-adornment-password'>
												Mật khẩu
											</InputLabel>
											<OutlinedInput
												id='outlined-adornment-password'
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
															edge='end'
														>
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
										<div className='navigateBlock'>
											<a className=' forgotPassword' href='#'>
												Quên mật khẩu?
											</a>
										</div>
									</Grid>
								</Grid>

								<Button
									size='large'
									type='submit'
									color='secondary'
									variant='contained'
								>
									đăng nhập
								</Button>
								<div className='navigateBlock signInBlock'>
									<a className='signIn' href='/dang-ky'>
										Đăng ký tài khoản
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

export default Login;
