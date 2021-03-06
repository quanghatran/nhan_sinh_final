import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import React, { useEffect, useState } from "react";
import userAPI from "../../api/userAPI";
import vipServiceApi from "../../api/vipServiceApi";
import DatePicker from "../../components/controls/DatePicker";
import ModalConfirm from "../../components/modalInform/ModalConfirm";
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

const UserService = (props) => {
	const classes = useStyles();

	const { isSlotVipChanged, onSlotVipChange } = props;

	const date = new Date();

	const [linkReport, setLinkReport] = useState("");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState(date);
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");

	const [userInfo, setUserInfo] = useState([]);

	const [isLogin, setIsLogin] = useState(false);

	const [isOpenSuccess, setIsOpenSuccess] = useState(false);
	const [isOpenFailed, setIsOpenFailed] = useState(false);

	const [pending, setPending] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const dataFormCheck = {
			name: name,
			email: email,
			birthDay: moment(birthDay).format("YYYY-MM-DD"),
			phoneNumber: phoneNumber,
			address: address,
		};

		const fetchDemoService = async () => {
			setPending(true);
			try {
				const res = await vipServiceApi.postVipService(dataFormCheck);
				setLinkReport(res.data.linkReportFull);
				onSlotVipChange();

				setPending(false);
				setIsOpenSuccess(true);
				setName("");
				setEmail("");
				setBirthDay("");
				setPhoneNumber("");
				setAddress("");
			} catch (error) {
				setPending(false);
				setIsOpenFailed(true);
			}
		};

		fetchDemoService();
	};

	// get user info
	useEffect(() => {
		const fetchGetUserProfile = async () => {
			try {
				const response = await userAPI.getUserProfile();
				setUserInfo(response.data);
				setIsLogin(true);
			} catch (error) {
				setIsLogin(false);
			}
		};

		fetchGetUserProfile();
	}, [isSlotVipChanged]);

	const handleOnClose = () => {
		setIsOpenSuccess(false);
	};

	const handleOnCloseError = () => {
		setIsOpenFailed(false);
	};

	// content of dialog success
	function ContentDialogSuccess(props) {
		const { email } = props;
		return (
			<React.Fragment>
				<Typography component='h5' style={{ fontSize: "1.2rem" }}>
					C???m ??n b???n ???? s??? d???ng d???ch v??? c???a ch??ng t??i
				</Typography>
				<p>
					N???i dung tra c???u VIP c???a b???n ???? ???????c g???i t???i Email: <b>{email}</b>
				</p>
				<p>
					B???n vui l??ng ki???m tra v??o th?? m???c <b>SPAM </b> n???u nh?? kh??ng th???y
					trong th?? m???c ch??nh.
				</p>
				<p>
					N???u c?? b???t k??? th???c m???c ho???c g??p ?? n??o, vui l??ng li??n h???:{" "}
					<b>0977557868</b> ????? ???????c h??? tr??? chi ti???t.
				</p>
			</React.Fragment>
		);
	}

	// content of dialog failed
	function ContentDialogFailed() {
		return (
			<React.Fragment>
				<Typography component='h4' style={{ fontSize: "1.2rem" }}>
					Tra c???u kh??ng th??nh c??ng
				</Typography>
				<p>
					B???n kh??ng ????? l?????t tra c???u VIP, vui l??ng mua th??m d???ch v???. Ho???c nh???p
					l???i th??ng tin c??c tr?????ng n???i dung ch??nh x??c theo form.
				</p>
				<p>
					N???u c?? b???t k??? th???c m???c ho???c g??p ?? n??o, vui l??ng li??n h???:{" "}
					<b>0977557868</b> ????? ???????c h??? tr??? chi ti???t
				</p>
			</React.Fragment>
		);
	}

	return (
		<div id='userServiceBlock' className='userServiceBlock'>
			<div className='block userServiceBlockWrapper'>
				<div className='container-fluid'>
					<TitleSection titleHeader='Tra c???u VIP' style={{ color: "white" }} />

					{isLogin ? (
						<Typography
							className='VipCountLabel'
							variant='h4'
							component='h5'
							style={{
								textAlign: "center",
								color: "white",
								fontSize: "1.2rem",
							}}>
							B???n c?? <b style={{ color: "#f69320" }}>{userInfo.slotVip}</b> l?????t
							tra vip
							<Button size='large' color='primary' href='#meaningNumerology'>
								Mua th??m l?????t tra VIP
							</Button>
						</Typography>
					) : (
						<Alert
							variant='filled'
							severity='error'
							style={{ marginBottom: "1rem" }}>
							B???n c???n ????ng nh???p ????? th???c hi???n d???ch v??? n??y
						</Alert>
					)}

					<div className='userServiceContent'>
						<div className='serviceFiled'>
							{pending && (
								<div>
									<CircularProgress color='primary' />
									<p>??ang tra c???u - vui l??ng ch??? trong gi??y l??t</p>
								</div>
							)}

							<form className={classes.root} onSubmit={handleSubmit}>
								<Grid container item spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											label='H??? t??n'
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
											label='Ng??y sinh'
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
											label='S??? ??i???n tho???i'
											variant='outlined'
											color='primary'
											name='phoneNumber'
											type='number'
											required={true}
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											fullWidth
											autoComplete='off'
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											label='?????a ch???'
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
								<Typography style={{ margin: "10px 0" }}>
									( B???n c???n nh???p ch??nh x??c c??c th??ng tin ph??a tr??n, ch??ng t??i s???
									g???i b??o c??o v??? n???i dung tra c???u v??o Email m?? b???n ???? nh???p)
								</Typography>
								<Button
									variant='contained'
									color='primary'
									fullWidth
									size='large'
									type='submit'
									endIcon={<SearchIcon />}
									className={classes.mtBtn}>
									Tra C???u VIP
								</Button>
							</form>
							<ModalConfirm
								linkreport={linkReport}
								isOpen={isOpenSuccess}
								succsess={true}
								onClose={handleOnClose}
								contentDialog={<ContentDialogSuccess email={email} />}
								modalTitle={
									<Alert
										icon={<CheckIcon fontSize='inherit' />}
										variant='filled'
										severity='success'
										style={{ justifyContent: "center" }}>
										TRA C???U D???CH V??? VIP TH??NH C??NG
									</Alert>
								}
							/>
							<ModalConfirm
								isOpen={isOpenFailed}
								onClose={handleOnCloseError}
								contentDialog={<ContentDialogFailed />}
								modalTitle={
									<Alert
										icon={<CheckIcon fontSize='inherit' />}
										variant='filled'
										severity='error'
										style={{ justifyContent: "center" }}>
										TRA C???U D???CH V??? VIP KH??NG TH??NH C??NG
									</Alert>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserService;
