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

	var slotVipChanged = isSlotVipChanged;

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
				await vipServiceApi.postVipService(dataFormCheck);

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
					Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
				</Typography>
				<p>
					Nội dung tra cứu VIP của bạn đã được gửi tới Email: <b>{email}</b>
				</p>
				<p>
					Bạn vui lòng kiểm tra vào thư mục <b>SPAM </b> nếu như không thấy
					trong thư mục chính.
				</p>
				<p>
					Nếu có bất kỳ thắc mắc hoặc góp ý nào, vui lòng liên hệ:{" "}
					<b>0977557868</b> để được hỗ trợ chi tiết.
				</p>
			</React.Fragment>
		);
	}

	// content of dialog failed
	function ContentDialogFailed() {
		return (
			<React.Fragment>
				<Typography component='h4' style={{ fontSize: "1.2rem" }}>
					Tra cứu không thành công
				</Typography>
				<p>
					Bạn không đủ lượt tra cứu VIP, vui lòng mua thêm dịch vụ. Hoặc nhập
					lại thông tin các trường nội dung chính xác theo form.
				</p>
				<p>
					Nếu có bất kỳ thắc mắc hoặc góp ý nào, vui lòng liên hệ:{" "}
					<b>0977557868</b> để được hỗ trợ chi tiết
				</p>
			</React.Fragment>
		);
	}

	return (
		<div id='userServiceBlock' className='userServiceBlock'>
			<div className='block userServiceBlockWrapper'>
				<div className='container-fluid'>
					<TitleSection titleHeader='Tra cứu VIP' style={{ color: "white" }} />

					{isLogin ? (
						<Typography
							className='VipCountLabel'
							variant='h4'
							component='h5'
							style={{
								textAlign: "center",
								color: "white",
								fontSize: "1.2rem",
							}}
						>
							Bạn có <b style={{ color: "#ff5656" }}>{userInfo.slotVip}</b> lượt
							tra vip
							<Button size='large' color='secondary' href='#meaningNumerology'>
								Mua thêm lượt tra VIP
							</Button>
						</Typography>
					) : (
						<Alert
							variant='filled'
							severity='error'
							style={{ marginBottom: "1rem" }}
						>
							Bạn cần đăng nhập để thực hiện dịch vụ này
						</Alert>
					)}

					<div className='userServiceContent'>
						<div className='serviceFiled'>
							{pending && (
								<div>
									<CircularProgress color='secondary' />
									<p>Đang tra cứu - vui lòng chờ trong giây lát</p>
								</div>
							)}

							<form className={classes.root} onSubmit={handleSubmit}>
								<Grid container item spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											label='Họ tên'
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
											label='Ngày sinh'
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
											label='Số điện thoại'
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
											label='Địa chỉ'
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
									( Bạn cần nhập chính xác các thông tin phía trên, chúng tôi sẽ
									gửi báo cáo về nội dung tra cứu vào Email mà bạn đã nhập)
								</Typography>
								<Button
									variant='contained'
									color='primary'
									fullWidth
									size='large'
									type='submit'
									endIcon={<SearchIcon />}
									className={classes.mtBtn}
								>
									Tra Cứu VIP
								</Button>
							</form>
							<ModalConfirm
								isOpen={isOpenSuccess}
								onClose={handleOnClose}
								contentDialog={<ContentDialogSuccess email={email} />}
								modalTitle={
									<Alert
										icon={<CheckIcon fontSize='inherit' />}
										variant='filled'
										severity='success'
										style={{ justifyContent: "center" }}
									>
										TRA CỨU DỊCH VỤ VIP THÀNH CÔNG
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
										style={{ justifyContent: "center" }}
									>
										TRA CỨU DỊCH VỤ VIP KHÔNG THÀNH CÔNG
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
