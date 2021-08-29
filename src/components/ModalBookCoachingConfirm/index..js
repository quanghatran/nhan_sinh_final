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

export default function ModalBookCoachingConfirm(props) {
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
				<div style={{ textAlign: "center" }}>{contentDialog}</div>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<b>
						Để hoàn tất quá trình đặt lịch, bạn cần thanh toán trước dịch vụ
						theo hình thức chuyển khoản
					</b>
					<p>
						Ngân hàng: <b>VietcomBank</b>{" "}
					</p>
					<p>
						Số tài khoản: <b>1020603988</b>
					</p>
					<p>
						Chủ tài khoản: <b>Nguyễn Văn Thanh</b>
					</p>
					<p>
						Nội dung chuyển khoản:{" "}
						<span
							style={{
								color: "#f50057",
								fontWeight: "bold",
							}}>
							DAT LICH TU VAN - Ten - SĐT
						</span>{" "}
						( Trong đó: Ten là tên người đặt lịch, SĐT là số điện thoại liên hệ)
					</p>
					<p
						style={{
							fontWeight: "bold",
						}}>
						Sau khi nhận được thông tin chuyển khoản, chúng tôi sẽ và liên hệ
						với bạn trong vòng tối đa 2 tiếng (từ 8h30 sáng đến 18h chiều)
					</p>
				</DialogContentText>

				{onSuccess && (
					<Alert
						variant='filled'
						severity='success'
						style={{ marginTop: "1rem", justifyContent: "center" }}>
						<strong>Đặt dịch vụ thành công!</strong>
					</Alert>
				)}
				{onError && (
					<Alert
						variant='filled'
						severity='error'
						style={{ marginTop: "1rem", justifyContent: "center" }}>
						<strong>Đặt dịch vụ không thành công!</strong>
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
					Xác nhận đặt lịch
				</Button>
			</DialogActions>
		</Dialog>
	);
}
