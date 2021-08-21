import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React, { useEffect, useState } from "react";
import servicesApi from "../../api/servicesApi";
import ModalConfirm from "../../components/modalConfirm/ModalConfirm";
import TitleSection from "../../components/titleSection/TitleSection";
import "./MeaningNumerology.css";
const listContent = [
	{
		id: 1,
		content:
			"<p> <b style='font-size: 1.25rem'>Minh triết nh&acirc;n sinh</b> l&agrave; một trong c&aacute;c dự &aacute;n mang gi&aacute; trị tinh thần to lớn, với mong muốn được cống hiến c&aacute;c d&ograve;ng gi&aacute; trị minh triết của ch&iacute;nh c&aacute; nh&acirc;n t&iacute;ch luỹ qua c&aacute;c trải nghiệm c&aacute; nh&acirc;n, nghi&ecirc;n cứu khoa học để t&igrave;m ra c&ocirc;ng cụ &aacute;p dụng v&agrave;o việc cho mọi người một định hướng minh triết nhất.</span></p><p>Định hướng minh triết, tương lai minh triết l&agrave; những g&igrave; t&ocirc;i ấp ủ qua năm th&aacute;ng mong được truyền tải tới mọi người. Ch&uacute;c cho c&aacute;c bạn, nhờ v&agrave;o c&ocirc;ng cụ khoa học t&ocirc;i&nbsp; d&agrave;nh thời gian nghi&ecirc;n cứu n&oacute;i ri&ecirc;ng, Vi&ecirc;n&nbsp; Đ&agrave;o tạo khởi nghiệp v&agrave; Ứng Dụng khoa học c&ocirc;ng nghệ cao SATSi n&oacute;i chung, t&igrave;m thấy cho m&igrave;nh ngọn đ&egrave;n dẫn dắt, soi s&aacute;ng những khoảnh khắc mập mờ khi mường tượng tới tương lai, cuộc sống của m&igrave;nh sau n&agrave;y. Sự h&agrave;i l&ograve;ng của c&aacute;c bạn sau khi trải nghiệm sản phẩm v&agrave; dịch vụ tư vấn của t&ocirc;i, l&agrave; động lực v&agrave; niềm hạnh ph&uacute;c lớn lao đỡ bước t&ocirc;i th&ecirc;m quyết liệt tr&ecirc;n h&agrave;nh tr&igrave;nh phụng sự cộng đồng.</span></p>",
	},
	{
		id: 2,
		content:
			"	<p><span>Đ&acirc;y l&agrave; một c&ocirc;ng tr&igrave;nh nghi&ecirc;n cứu của phương T&acirc;y được &aacute;p dụng v&agrave;o việc định hướng cuộc sống cho bất cứ ai đang ch&ecirc;nh v&ecirc;nh tr&ecirc;n nẻo đường đi t&igrave;m sứ mệnh c&aacute; nh&acirc;n. Th&ocirc;ng qua c&aacute;c con số với c&aacute;c dạng năng lượng đi k&egrave;m được t&iacute;nh theo c&ocirc;ng thức ri&ecirc;ng, c&aacute;c bạn sẽ thấy r&otilde; con đường tương lai bao gồm c&ocirc;ng danh, đời sống tinh thần, t&iacute;nh c&aacute;ch, ...v...v... <p>Bức tranh to&agrave;n cảnh cuộc đời bạn hiện ra đầy sắc n&eacute;t. Sự sắp xếp của vũ trụ d&agrave;nh cho </span></em><em><span >bạn&nbsp; nằm to&agrave;n bộ ở đ&acirc;y.</p> </span></em></p><p style='text-align:end'>T&aacute;c </span><em>giả: H&agrave; Nguyễn (Tuệ Hương)</span></p>",
	},
];

const MeaningNumerology = (props) => {
	const { onSlotVipChange } = props;

	const [dataServices, setNotes] = useState([]);

	const [onSuccess, setOnSuccess] = useState(false);
	const [onError, setOnError] = useState(false);

	const [clickedId, setClickedId] = useState("");
	const [openDialog, setOpenDialog] = useState(false);

	// const [slotVipChanged, setSlotVipChanged] = useState(isSlotVipChanged);

	// get list services
	useEffect(() => {
		const fetchListServices = async () => {
			try {
				const response = await servicesApi.getListServices();
				setNotes(response.data);
			} catch (error) {
				console.log("failed to fetch product list: ", error);
			}
		};

		fetchListServices();
	}, []);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	// buy service after confirmed
	const handleClickConfirm = (id) => {
		const fetchBuyService = async () => {
			try {
				await servicesApi.postUserBuyService(id);
				setOnSuccess(true);
				onSlotVipChange();
				setTimeout(() => {
					setOpenDialog(false);
					setOnSuccess(false);
				}, 1200);
			} catch (error) {
				setOnError(true);
				setTimeout(() => {
					setOpenDialog(false);
					setOnError(false);
				}, 1200);
			}
		};

		fetchBuyService();
	};

	// handle open dialog
	const handleOpenDialog = (id) => {
		setOpenDialog(true);
		setClickedId(id);
	};

	return (
		<div id='meaningNumerology' className='meaningNumerology'>
			<div className='block meaningsBlockWrapper'>
				<div className='container-fluid'>
					<TitleSection titleHeader='Danh sách các dịch vụ' />
					<div className='listService'>
						<Grid container spacing={3} justifyContent='center'>
							{dataServices.map((data) => (
								<Grid item xs={12} sm={6} md={4} key={data._id}>
									<Card
										style={{
											background: "#34495e",
											color: "#fff",
										}}>
										<CardContent>
											<Typography
												variant='h6'
												component='h2'
												style={{ fontSize: "1.2rem", textAlign: "center" }}>
												{data.title}
											</Typography>
											<Typography
												style={{ marginBottom: "1rem", marginTop: "0.7rem" }}>
												Giá dịch vụ: <b>{data.price}</b>
											</Typography>
											<Typography
												style={{ marginBottom: "1rem", marginTop: "0.7rem" }}>
												Lượt tra VIP: <b>{data.quantity}</b>
											</Typography>

											<Button
												variant='contained'
												color='secondary'
												size='small'
												style={{ marginTop: "0.7rem" }}
												onClick={(e) => {
													handleOpenDialog(data._id);
												}}>
												Mua dịch vụ
											</Button>
										</CardContent>
									</Card>

									{clickedId === data._id ? (
										<ModalConfirm
											isOpen={openDialog}
											onClose={handleCloseDialog}
											contentDialog='Xác nhận mua dịch vụ này ?'
											onClickConfirm={(e) => {
												handleClickConfirm(data._id);
											}}
											id={data._id}
											onSuccess={onSuccess}
											onError={onError}
										/>
									) : (
										""
									)}
								</Grid>
							))}
						</Grid>
					</div>

					<div
						className='contentMeaningNumerology'
						style={{ marginTop: "3rem" }}>
						<TitleSection titleHeader='Lời ngỏ' />
						<div>
							{listContent.map((content) => (
								<div
									key={content.id}
									style={{ fontSize: "1.1rem", marginBottom: "1rem" }}
									dangerouslySetInnerHTML={{ __html: content.content }}></div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MeaningNumerology;
