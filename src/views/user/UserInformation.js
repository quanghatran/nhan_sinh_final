import React, { useEffect, useState } from "react";
import Footer from "../../common/footer/Footer";
import "./UserInformation.css";
import TitleSection from "../../components/titleSection/TitleSection";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import LockIcon from "@material-ui/icons/Lock";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import userAPI from "../../api/userAPI";
import { useDispatch } from "react-redux";
import {
	getUserProfile,
	updateName,
	updatePassword,
} from "../../app/userSlice";
import { updateUser } from "../../views/login/loginSlice";
import { useSelector } from "react-redux";
import HeaderLogin from "../home/headerLogin/HeaderLogin";

const UserInformation = () => {
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const [isOpenInfo, setIsOpenInfo] = useState(false);
	const [isOpenPassword, setIsOpenPassword] = useState(false);

	const [userInfo, setUserInfo] = useState([]);

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
	const handleUpdateName = () => {
		const data = {
			newName: document.getElementById("name").value,
		};
		console.log(data);
		try {
			userAPI.patchUserName(data);
		} catch (err) {
			console.log("failed to update name", err);
		}
		setIsOpenInfo(false);
	};
	const updatePassword = () => {
		const data = {
			newPassword: document.getElementById("newPassword"),
			oldPassword: document.getElementById("oldPassword"),
		};
		try {
			const request = userAPI.updatePassword(data);
		} catch (err) {
			console.log("failed to update password", err);
		}
	};
	const handleSubmitPassword = () => {};

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
								</Typography>
							</Grid>
							<Grid item container>
								<Typography variant='subtitle1'>
									Số điện thoại (Tên đăng nhập) :{" "}
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
										<Button color='secondary' href='/xem-online'>
											Tra cứu VIP ngay
										</Button>
									) : (
										""
									)}
								</Typography>
							</Grid>

							{/* <Grid item container>
								<Typography variant='h6'></Typography>
							</Grid> */}
						</Grid>
						<Grid
							container
							direction='row'
							justify='center'
							spacing={0}
							style={{ marginBottom: "3rem" }}
						>
							<Grid item>
								<Button
									variant='contained'
									color='primary'
									startIcon={<InfoIcon />}
									style={{ margin: "0 5px" }}
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
								>
									Thay đổi mật khẩu
								</Button>
							</Grid>
						</Grid>
					</div>
				</div>
				{/* Info dialog */}

				<Dialog
					open={isOpenInfo}
					onClose={handleCloseInfo}
					aria-labelledby='form-dialog-title'
					fullWidth={true}
					maxWidth={"sm"}
				>
					<form onSubmit={(e) => handleOnSubmit(e)}>
						<DialogTitle id='form-dialog-title'>Sửa thông tin</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin='dense'
								id='name'
								label='Họ và tên'
								type='text'
								fullWidth
								defaultValue={user.name}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleCloseInfo} color='primary'>
								Cancel
							</Button>
							<Button type='submit' onClick={handleUpdateName} color='primary'>
								Confirm
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
						<DialogTitle id='form-dialog-title'>Sửa mật khẩu</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin='dense'
								id='oldPassword'
								label='Mật khẩu cũ'
								type='text'
								fullWidth
							/>
							<TextField
								margin='dense'
								id='newPassword'
								label='Mật khẩu mới'
								type='text'
								fullWidth
							/>
							<TextField
								margin='dense'
								id='newPasswordReType'
								label='Nhập lại mật khẩu'
								type='text'
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClosePassword} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleClosePassword} color='primary'>
								Confirm
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
