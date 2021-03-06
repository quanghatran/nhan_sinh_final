import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import React from "react";

function PaperComponent(props) {
	return <Paper {...props} />;
}

export default function ModalConfirm(props) {
	const { linkreport, succsess, isOpen, onClose, contentDialog, modalTitle } =
		props;

	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			PaperComponent={PaperComponent}
			aria-labelledby='draggable-dialog-title'>
			<DialogTitle
				style={{ cursor: "move", textAlign: "center" }}
				id='draggable-dialog-title'>
				{modalTitle}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>{contentDialog}</DialogContentText>
			</DialogContent>

			<DialogActions style={{ justifyContent: "center" }}>
				{succsess && (
					<Button
						color='primary'
						variant='contained'
						href={linkreport}
						target='_blank'>
						Xem chi tiết
					</Button>
				)}
				<Button onClick={onClose} color='secondary' variant='contained'>
					Đóng
				</Button>
			</DialogActions>
		</Dialog>
	);
}
