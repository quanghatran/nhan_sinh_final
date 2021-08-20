import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "../controls/DatePicker";
const useStyles = makeStyles((theme) => ({
	grid: {
		padding: theme.spacing(2),
		paddingBottom: theme.spacing(1),
		textAlign: "center",
	},
}));
const BookingCoachingFields = (props) => {
	const classes = useStyles();

	const { valuesBooking, onChangeValuesBooking, onSubmitBooking } = props;

	console.log(valuesBooking);

	const handleSubmitBookingCoaching = (e) => {
		e.preventDefault();
		// console.log(object);
		console.log("submited");
		onSubmitBooking();
	};

	return (
		<Grid container>
			<Grid item xs={12} sm={6} className={classes.grid}>
				<TextField
					autoFocus
					label='Tên người đặt'
					type='text'
					variant='outlined'
					fullWidth
					required
					size='small'
					defaultValue={valuesBooking.name}
				/>
			</Grid>
			<Grid item xs={12} sm={6} className={classes.grid}>
				<TextField
					label='Email'
					variant='outlined'
					type='email'
					fullWidth
					required
					size='small'
					value={valuesBooking.email}
					// defaultValue={userInfo.email}
				/>
			</Grid>
			<Grid item xs={12} sm={6} className={classes.grid}>
				<DatePicker
					label='Ngày sinh'
					variant='outlined'
					color='primary'
					name='birthDay'
					fullWidth
					size='small'
					value={valuesBooking.birthDay}
					// onChange={(e) => setBirthDay(e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} sm={6} className={classes.grid}>
				<TextField
					label='Số điện thoại'
					variant='outlined'
					type='number'
					fullWidth
					required
					size='small'
					value={valuesBooking.phoneNumber}

					// defaultValue={userInfo.email}
				/>
			</Grid>

			<Grid item xs={12} className={classes.grid}>
				<TextField
					label='Địa chỉ'
					variant='outlined'
					type='text'
					fullWidth
					required
					size='small'
					value={valuesBooking.address}

					// defaultValue={userInfo.email}
				/>
			</Grid>

			<Grid item xs={12} sm={6} className={classes.grid}>
				<TextField
					label='Coacher'
					variant='outlined'
					type='number'
					fullWidth
					required
					size='small'
					value={valuesBooking.coacher}

					// defaultValue={userInfo.email}
				/>
			</Grid>

			<Grid item xs={12} sm={6} className={classes.grid}>
				<DatePicker
					label='Thời gian coaching'
					variant='outlined'
					color='primary'
					name='birthDay'
					fullWidth
					size='small'
					value={valuesBooking.time}

					// value={birthDay}
					// onChange={(e) => setBirthDay(e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default BookingCoachingFields;
