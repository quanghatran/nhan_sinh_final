import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InfoIcon from "@material-ui/icons/Info";
import LockIcon from "@material-ui/icons/Lock";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import userAPI from "../../api/userAPI";
import { getUserProfile, updateName } from "../../app/userSlice";
import Footer from "../../common/footer/Footer";
import ModalDepositMoney from "../../components/modalDepositMoney/ModalDepositMoney";
import TitleSection from "../../components/titleSection/TitleSection";
import { updateUser } from "../../views/login/loginSlice";
import HeaderLogin from "../home/headerLogin/HeaderLogin";
import "./UserInformation.css";

const UserInformation = () => {
	// const user = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const [isOpenInfo, setIsOpenInfo] = useState(false);
	const [isOpenPassword, setIsOpenPassword] = useState(false);
	const [openDialog, setOpenDialog] = useState(false);

	const [userInfo, setUserInfo] = useState([]);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const fetchUserProfilers = React.useCallback(async () => {
		const request = await userAPI.getUserProfile();
		const action = getUserProfile(request.data);
		dispatch(action);
	}, [dispatch]);

	useEffect(() => {
		fetchUserProfilers();
	}, [fetchUserProfilers]);

	const handleClickOpenInfo = () => {
		setIsOpenInfo(true);
	};

	const handleCloseInfo = () => {
		setIsOpenInfo(false);
	};
	const handleClickOpenPassword = () => {
		setIsOpenPassword(true);
	};
	const handleClosePassword = () => {
		setIsOpenPassword(false);
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(updateName(document.getElementById("name").value));
		dispatch(updateUser(document.getElementById("name").value));
	};

	// handle update new name
	const handleUpdateName = (e) => {
		e.preventDefault();
		const data = {
			newName: document.getElementById("name").value,
		};
		try {
			userAPI.patchUserName(data);
			setIsSuccess(true);

			setTimeout(() => {
				setIsSuccess(false);
				setIsOpenInfo(false);
			}, 1500);
		} catch (err) {
			setIsError(true);

			setTimeout(() => {
				setIsError(false);
				setIsOpenInfo(false);
			}, 1500);
			console.log("failed to update name", err);
		}
	};

	// handle change password
	const handleSubmitPassword = (e) => {
		e.preventDefault();

		if (newPassword.length >= 6 && confirmPassword === newPassword) {
			const dataChangePassWord = {
				password: password,
				newPassword: newPassword,
			};

			try {
				userAPI.patchPassword(dataChangePassWord);
				setIsSuccess(true);

				setTimeout(() => {
					setIsSuccess(false);
					setIsOpenInfo(false);
					setIsOpenPassword(false);

					setPassword("");
					setNewPassword("");
					setConfirmPassword("");
				}, 1500);
			} catch (err) {
				setIsError(true);

				setTimeout(() => {
					setIsError(false);
					setIsOpenInfo(false);
					setIsOpenPassword(false);

					setPassword("");
					setNewPassword("");
					setConfirmPassword("");
				}, 1500);
			}
		} else {
			setIsError(true);

			setTimeout(() => {
				setIsError(false);
				setIsOpenInfo(false);
				setIsOpenPassword(false);

				setPassword("");
				setNewPassword("");
				setConfirmPassword("");
			}, 1500);
		}
	};

	// get user info
	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				const response = await userAPI.getUserProfile();
				setUserInfo(response.data);
			} catch (error) {
				console.log("failed to update name", error);
			}
		};

		fetchGetUserProfile();
	}, []);

	const handleOpenDepositInfo = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	// handle change password
	const handleCloseInfoChangePassword = (e) => {
		setIsOpenPassword(false);
	};

	return (
		<div className='UserInformation'>
			<HeaderLogin />
			<div className='UserInformation__container'>
				<div className='container-fluid'>
					<TitleSection titleHeader='Thông tin người dùng' />
					<div className='UserInformation__content'>
						<Grid container spacing={3}>
							<Grid item container>
								<Typography variant='subtitle1'>
									Tên người dùng :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.name}
									</span>
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									Email :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.email}
									</span>
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									Số tiền còn lại :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.money}
									</span>
									<Button
										color='secondary'
										size='large'
										onClick={handleOpenDepositInfo}
									>
										Nạp thêm tiền
									</Button>
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									Số điện thoại (Đăng nhập) :{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.phone}
									</span>
								</Typography>
							</Grid>
							<Grid item container style={{ marginBottom: "3rem" }}>
								<Typography variant='subtitle1'>
									Bạn còn{" "}
									<span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
										{userInfo.slotVip}
									</span>{" "}
									lần sử dụng dịch vụ tra cứu VIP{" "}
									{userInfo.slotVip >= 1 ? (
										<Button color='primary' href='/xem-online' size='large'>
											Tra cứu VIP ngay
										</Button>
									) : (
										""
									)}
									<Button color='secondary' href='/xem-online' size='large'>
										Mua lượt tra VIP
									</Button>
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							direction='row'
							justifyContent='center'
							spacing={0}
							style={{ marginBottom: "3rem" }}
						>
							<Grid item>
								<Button
									variant='contained'
									color='primary'
									startIcon={<InfoIcon />}
									style={{ margin: "5px" }}
									onClick={handleClickOpenInfo}
								>
									Thay đổi thông tin
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant='contained'
									color='secondary'
									startIcon={<LockIcon />}
									onClick={handleClickOpenPassword}
									style={{ margin: "5px" }}
								>
									Thay đổi mật khẩu
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>

				{/* Modal information for user deposit money */}
				<ModalDepositMoney isOpen={openDialog} onClose={handleClose} />

				{/* Info dialog */}
				<Dialog
					open={isOpenInfo}
					onClose={handleCloseInfo}
					aria-labelledby='form-dialog-title'
					fullWidth={true}
					maxWidth={"sm"}
				>
					<form onSubmit={(e) => handleOnSubmit(e)}>
						<DialogTitle
							id='form-dialog-title'
							style={{ textTransform: "uppercase" }}
						>
							Sửa thông tin cá nhân
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin='dense'
								id='name'
								label='Họ và tên'
								type='text'
								fullWidth
								defaultValue={userInfo.name}
							/>

							{isError && (
								<Alert
									variant='filled'
									severity='error'
									style={{ marginTop: "1rem", justifyContent: "center" }}
								>
									Thay đổi thông tin không thành công
								</Alert>
							)}

							{isSuccess && (
								<Alert
									variant='filled'
									severity='success'
									style={{ marginTop: "1rem", justifyContent: "center" }}
								>
									Thay đổi thông tin thành công
								</Alert>
							)}
						</DialogContent>

						<DialogActions>
							<Button onClick={handleCloseInfo} color='secondary'>
								Hủy
							</Button>
							<Button type='submit' onClick={handleUpdateName} color='primary'>
								Xác nhận
							</Button>
						</DialogActions>
					</form>
				</Dialog>

				{/* Password Dialog */}
				<Dialog
					open={isOpenPassword}
					onClose={handleClosePassword}
					aria-labelledby='form-dialog-title'
					fullWidth={true}
					maxWidth={"sm"}
				>
					<form onSubmit={handleSubmitPassword}>
						<DialogTitle
							id='form-dialog-title'
							style={{ textTransform: "uppercase" }}
						>
							Thay đổi mật khẩu
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin='dense'
								id='oldPassword'
								label='Mật khẩu cũ'
								type='password'
								fullWidth
								required
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<TextField
								margin='dense'
								id='newPassword'
								label='Mật khẩu mới'
								type='password'
								fullWidth
								required
								value={newPassword}
								onChange={(e) => {
									setNewPassword(e.target.value);
								}}
							/>
							<TextField
								margin='dense'
								id='newPasswordReType'
								label='Nhập lại mật khẩu'
								type='password'
								fullWidth
								required
								value={confirmPassword}
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
							/>
							{isError && (
								<Alert
									variant='filled'
									severity='error'
									style={{ marginTop: "1rem", justifyContent: "center" }}
								>
									Thay đổi mật khẩu không thành công, độ dài phải lớn hơn hoặc
									bằng 6 ký tự
								</Alert>
							)}

							{isSuccess && (
								<Alert
									variant='filled'
									severity='success'
									style={{ marginTop: "1rem", justifyContent: "center" }}
								>
									Thay đổi mật khẩu thành công
								</Alert>
							)}
						</DialogContent>
						<DialogActions>
							<Button onClick={handleCloseInfoChangePassword} color='secondary'>
								Hủy
							</Button>
							<Button type='submit' color='primary'>
								Xác nhận
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			</div>
			<Footer />
		</div>
	);
};

export default UserInformation;
