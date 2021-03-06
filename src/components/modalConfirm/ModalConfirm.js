import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { Alert } from "@material-ui/lab";
import React from "react";

function PaperComponent(props) {
	return <Paper {...props} />;
}

export default function ModalConfirm(props) {
	const {
		isOpen,
		onClose,
		onClickConfirm,
		id,
		contentDialog,
		onSuccess,
		onError,
	} = props;

	const handleClick = (id) => {
		onClickConfirm(id);
	};

	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			PaperComponent={PaperComponent}
			aria-labelledby='draggable-dialog-title'>
			<DialogTitle style={{ cursor: "move" }} id='draggable-dialog-title'>
				Xác nhận
			</DialogTitle>
			<DialogContent>
				<DialogContentText>{contentDialog}</DialogContentText>
				{onSuccess && (
					<Alert
						variant='filled'
						severity='success'
						style={{ marginTop: "1rem", justifyContent: "center" }}>
						<strong>Mua dịch vụ thành công!</strong>
					</Alert>
				)}
				{onError && (
					<Alert
						variant='filled'
						severity='error'
						style={{ marginTop: "1rem", justifyContent: "center" }}>
						<strong>Mua dịch vụ không thành công!</strong>
					</Alert>
				)}
			</DialogContent>

			<DialogActions style={{ justifyContent: "space-around" }}>
				<Button onClick={onClose} color='secondary' variant='contained'>
					Hủy
				</Button>
				<Button
					onClick={(e) => {
						handleClick(id);
					}}
					color='primary'
					variant='contained'
					type='button'
					autoFocus>
					Xác nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
}
