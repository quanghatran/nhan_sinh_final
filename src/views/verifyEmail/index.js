import { Button, CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import { Alert } from "@material-ui/lab";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import loginServiceApi from "../../api/loginServiceApi";
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

	const emailVerify = useSelector((state) => state.login.email);
	const emailSignInVerify = useSelector((state) => state.signIn.email);

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [emailFilled, setEmailFilled] = useState("");

	// handle send verify email when user account is not authorized
	useEffect(() => {
		setIsLoading(true);
		let dataVerify;
		if (emailVerify) {
			dataVerify = {
				email: emailVerify,
			};
		} else if (emailSignInVerify) {
			dataVerify = {
				email: emailSignInVerify,
			};
		}
		setEmailFilled(dataVerify.email);
		const fetchSendEmailVerify = async () => {
			try {
				const requestVerify = await loginServiceApi.postVerifyEmail(dataVerify);

				if (requestVerify.message === "mail sent") {
					setTimeout(() => {
						setSuccess(true);
						setIsLoading(false);
					}, 1500);
				} else {
					throw error;
				}
			} catch (error) {
				setTimeout(() => {
					setError(true);
					setIsLoading(false);
				}, 1500);
			}
		};

		fetchSendEmailVerify();
	}, []);

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
										MINH TRI???T NH??N SINH
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='subtitle1'
										align='center'
										style={{ fontStyle: "italic" }}>
										X??c th???c email
									</Typography>
								</Grid>
							</Grid>
						</Typography>

						<div className='loginFiled'>
							{success && (
								<Alert
									variant='filled'
									severity='success'
									style={{ marginTop: "1rem", justifyContent: "center" }}>
									Y??u c???u x??c th???c th??nh c??ng, ki???m tra email ???? ????ng k?? ????? ho??n
									t???t x??c th???c
								</Alert>
							)}
							{error && (
								<Alert
									variant='filled'
									severity='error'
									style={{ marginTop: "1rem", justifyContent: "center" }}>
									Y??u c???u x??c th???c kh??ng th??nh c??ng, vui l??ng th??? l???i
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
										value={emailFilled}
										disabled
										color='secondary'
										autoComplete='off'
									/>
								</Grid>
							</Grid>
							<div>
								{isLoading ? (
									<div style={{ textAlign: "center", marginTop: "2rem" }}>
										<CircularProgress color='secondary' />
									</div>
								) : (
									<Button
										href='/dang-nhap'
										style={{ marginTop: "1rem" }}
										startIcon={<KeyboardBackspaceOutlinedIcon />}
										color='secondary'>
										Quay V??? Trang ????ng nh???p
									</Button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyEmail;
