import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, Button, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Ratings from "react-ratings-declarative";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: 8,
	},
}));
const ModalRatingCoaching = (props) => {
	const classes = useStyles();

	const {
		isOpenRatingDialog,
		onCloseRatingDialog,
		nameCoacher,
		idCoaching,
		handleRating,
		onSuccess,
		onError,
	} = props;

	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const handleSetRating = (newRating) => {
		setRating(newRating);
	};

	const handleSubmitRating = (e) => {
		e.preventDefault();

		let dataRating = { point: "" + rating, comment };
		handleRating(idCoaching, dataRating);
	};

	return (
		<React.Fragment>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={isOpenRatingDialog}
				onClose={onCloseRatingDialog}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={isOpenRatingDialog}>
					<div className={classes.paper}>
						<Typography variant='h5' style={{ marginBottom: "1rem" }}>
							Đánh giá - Coacher:
							<span
								style={{
									fontWeight: "bold",
									margin: "0 5px",
									fontStyle: "italic",
								}}>
								{nameCoacher}
							</span>
						</Typography>
						<Typography variant='body1' style={{ marginBottom: "1rem" }}>
							Chúng tôi xin chân thành cảm ơn bạn đã tin tưởng sử dụng dịch vụ
							<b> Tư vấn trực tiếp</b>
							<br />
							Nhằm nâng cao chất dịch vụ, bạn vui lòng đánh giá dịch đã sử dụng.
						</Typography>
						<form noValidate autoComplete='off' onSubmit={handleSubmitRating}>
							<div>
								<span
									style={{
										fontSize: "1rem",
										fontWeight: "bold",
										marginRight: "1rem",
									}}>
									Mức độ hài lòng
								</span>
								<Ratings
									rating={rating}
									widgetRatedColors='#f39c12'
									widgetHoverColors='#f39c12'
									changeRating={handleSetRating}>
									<Ratings.Widget widgetDimension='30px' />
									<Ratings.Widget widgetDimension='30px' />
									<Ratings.Widget widgetDimension='30px' />
									<Ratings.Widget widgetDimension='30px' />
									<Ratings.Widget widgetDimension='30px' />
								</Ratings>
							</div>
							<TextField
								id='outlined-multiline-static'
								label='Nội dung đánh giá (nếu có)'
								multiline
								fullWidth
								rows={5}
								value={comment}
								onChange={(e) => {
									setComment(e.target.value);
								}}
								variant='outlined'
								style={{ margin: "1rem auto" }}
								type='text'
							/>
							<Button
								color='secondary'
								variant='contained'
								onClick={onCloseRatingDialog}>
								Hủy
							</Button>
							<Button
								style={{ float: "right" }}
								type='submit'
								color='primary'
								variant='contained'>
								Xác nhận
							</Button>
						</form>
						{onSuccess && (
							<Alert
								variant='filled'
								severity='success'
								style={{ marginTop: "1rem", justifyContent: "center" }}>
								Thực hiện đánh giá thành công
							</Alert>
						)}
						{onError && (
							<Alert
								variant='filled'
								severity='error'
								style={{ marginTop: "1rem", justifyContent: "center" }}>
								Thực hiện đánh giá không thành công
							</Alert>
						)}
					</div>
				</Fade>
			</Modal>
		</React.Fragment>
	);
};

export default ModalRatingCoaching;
