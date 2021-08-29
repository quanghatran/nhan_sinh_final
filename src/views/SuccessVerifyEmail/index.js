import { Button, Grid, Typography } from "@material-ui/core";
import KeyboardBackspaceOutlinedIcon from "@material-ui/icons/KeyboardBackspaceOutlined";
import { Alert } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import userAPI from "../../api/userAPI";
import logo from "../../images/logo_satsi.png";
import "./SuccessVerifyEmail.scss";

const SuccessVerifyEmail = () => {
	let { token } = useParams();

	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				await userAPI.getVerifyEmail(token);
				setSuccess(true);
			} catch (error) {
				console.log("failed to update name", error);
			}
		};

		fetchGetUserProfile();
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
							{success && (
								<Alert
									variant='filled'
									severity='success'
									style={{ marginTop: "1rem", justifyContent: "center" }}>
									Xác thực email hoàn tất, chào mừng bạn tới Minh Triết Nhân
									Sinh.
									<br />
									Vui lòng đăng nhập lại
								</Alert>
							)}

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

export default SuccessVerifyEmail;
