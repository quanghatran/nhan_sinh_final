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
import { useHistory } from "react-router-dom";
import signInServiceApi from "../../api/signInServiceApi";
import logo from "../../images/logo_satsi.png";
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

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const history = useHistory();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
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

		const fetchSignIn = () => {
			try {
				signInServiceApi
					.postSignIn(dataSignIn)
					.then(function (response) {
						setSuccess(true);

						setTimeout(() => {
							setSuccess(false);
						}, 1500);
						history.push("/dang-nhap");
					})
					.catch(function (error) {
						setError(true);

						setTimeout(() => {
							setError(false);
							setName("");
							setEmail("");
							setPhone("");
							setPassword("");
						}, 1500);
					});
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchSignIn();
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
							<form className={classes.root} onSubmit={handleSubmitSignIn}>
								{success && (
									<Alert
										variant='filled'
										severity='success'
										style={{ marginTop: "1rem", justifyContent: "center" }}
									>
										Đăng ký thành công
									</Alert>
								)}
								{error && (
									<Alert
										variant='filled'
										severity='error'
										style={{ marginTop: "1rem", justifyContent: "center" }}
									>
										Đăng ký không thành công
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
											variant='outlined'
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
											variant='outlined'
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
								</Grid>
								<Button
									size='large'
									color='secondary'
									variant='contained'
									type='submit'
									style={{ marginTop: "2rem" }}
								>
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
