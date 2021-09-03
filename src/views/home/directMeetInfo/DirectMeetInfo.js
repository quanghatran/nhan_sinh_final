import { Container, Grid, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./DirectMeetInfo.scss";
const listValueDirectMeet = [
	{
		id: 1,
		content: "Một buổi gặp trực tiếp nhà tư vấn(từ 3 tiếng tới 5 tiếng)",
	},
	{
		id: 2,
		content: "Luận giải Offline tại nhà. (hỗ trợ ở Hà Nội)",
	},
	{
		id: 3,
		content:
			"Luận giải chi tiết những chỉ số quan trọng nhất: ngày sinh, thái độ, đường đời, tài năng sứ mệnh, động lực thỏa mãn, động lực, nhân cách.",
	},
	{
		id: 4,
		content: "Luận giải 4 mốc đỉnh cao của cuộc đời",
	},
	{
		id: 5,
		content: "Luận giải tổng quan cá nhân cả năm",
	},
	{
		id: 6,
		content: "Luận giải những điểm yếu cần khắc phục",
	},
	{
		id: 7,
		content: "Tham vấn tâm lý   ",
	},
];

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: "center",
		color: "#fff",
		marginBottom: "1.5rem",
	},
}));

const DirectMeetInfo = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container>
				<div id='directMeetInfoBlock' className='block directMeetInfoBlock'>
					{/* <div className='container-fluid'> */}
					{/* <TitleSection titleHeader='Lợi ích khi gặp trực tiếp' /> */}
					<Grid item md={12} sm={12} xs={12}>
						<Typography variant='h1' className={classes.heading}>
							Lợi ích khi gặp trực tiếp
						</Typography>
					</Grid>
					<div className='directMeetInfoContent'>
						<ul className='listValueDirectMeet'>
							{listValueDirectMeet.map((value) => (
								<li key={value.id}>
									<p>
										<CheckIcon
											style={{
												paddingTop: "5px",
												marginRight: "10px",
												color: "#f69320",
											}}
										/>{" "}
										{value.content}
									</p>
								</li>
							))}
						</ul>
					</div>
					<div className='infoTransfer'>
						<Typography
							variant='h3'
							component='h3'
							className='infoTransferTitle'>
							Thông tin chuyển khoản thanh toán
						</Typography>
						<div className='infoAccount'>
							<p>Ngân hàng VietcomBank</p>
							<p>Số tài khoản: 1020603988</p>
							<p>Chủ tài khoản: Nguyễn Văn Thanh</p>
							<p
								style={{
									color: "#f69320",
									fontWeight: "bold",
								}}>
								Nội dung chuyển khoản: GAP TRUC TIEP - SĐT (Trong đó: SĐT là số
								điện thoại liên hệ của bạn)
							</p>
							<p
								style={{
									fontWeight: "bold",
								}}>
								Sau khi nhận được tiền, chúng tôi sẽ liên hệ trong vòng 30 phút
								(từ 8h30 sáng đến 18h chiều)
							</p>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default DirectMeetInfo;
