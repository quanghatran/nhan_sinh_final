import { Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./IntroVIPSearch.scss";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: "8px 0",
		},
	},

	mtBtn: {
		margin: "0 auto",
		marginTop: "8px",
	},
}));

const listValue = [
	{
		id: 1,
		content:
			"Tính toán hàng chục nghìn phép tính thần số phức tạp cực nhanh chỉ sau 1 giây để cho ra các tổ hợp chỉ số mà không hề sai sót như tính tay.",
	},
	{
		id: 2,
		content:
			"Chi phí của lượt VIP xem toàn bộ luận giải chỉ bằng 1% so với xem trực tiếp.",
	},
	{
		id: 3,
		content:
			"Xem chi tiết đường đời, công việc, tình duyên, các năm đỉnh cao trong cuộc đời mỗi người để có sự chuẩn bị tốt nhất đón nhận các vận hội trong đời.",
	},
	{
		id: 4,
		content:
			"Lời khuyên cho 3 năm gần nhất 2021, 2022, 2023 bạn nên làm gì để đạt được thành công nhất.",
	},
	{
		id: 5,
		content:
			"Bản Báo Cáo Thần Số Học của bạn dài khoảng 40-50 trang A4 và được lưu trữ VĨNH VIỄN, bạn có thể tải về bất cứ khi nào để in ra giấy.",
	},
	{
		id: 6,
		content: "Và còn nhiều điều nữa...",
	},
];
const IntroVIPSearch = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant='h5' component='h3' className='titleVIP'>
				Giá trị của bản tra cứu VIP
			</Typography>
			<ul className='listValue'>
				{listValue.map((value) => (
					<li key={value.id}>
						<Typography variant='body1' component='p'>
							{value.content}
						</Typography>
					</li>
				))}
			</ul>
			<Button
				variant='contained'
				color='primary'
				type='submit'
				className={classes.mtBtn}
				href='/xem-online'
			>
				Tra Cứu VIP NGAY
			</Button>
		</React.Fragment>
	);
};

export default IntroVIPSearch;
