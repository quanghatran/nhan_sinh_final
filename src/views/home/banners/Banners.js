import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "swiper/swiper.min.css";
import banner1 from "../../../images/banner1nhap.png";
import banner2 from "../../../images/image7.jpg";
import "./Banners.scss";
import { Container, Typography } from "@material-ui/core";

SwiperCore.use([EffectFade, Navigation, Pagination]);

const useStyles = makeStyles((theme) => ({
	iconControl: {
		fontSize: "28px",
		color: "#fff",
		zIndex: 10,
	},
	[theme.breakpoints.down("760")]: {
		iconControl: {
			fontSize: "22px",
		},
	},
	[theme.breakpoints.down("600")]: {
		iconControl: {
			fontSize: "18px",
		},
	},
}));

const Banners = () => {
	const classes = useStyles();

	const listBanner = [
		{
			id: 1,
			name: "banner1",
			image: banner1,
			content:
				"<p> <span style='margin-right: 2rem; font-weight: 400; border-bottom:2px solid #fff'>Lời ngỏ </span> &lsquo;&rsquo;Minh triết nh&acirc;n sinh&rsquo;&rsquo; l&agrave; một trong c&aacute;c dự &aacute;n mang gi&aacute; trị tinh thần to lớn, với mong muốn được cống hiến c&aacute;c d&ograve;ng gi&aacute; trị minh triết của ch&iacute;nh c&aacute; nh&acirc;n t&iacute;ch luỹ qua c&aacute;c trải nghiệm c&aacute; nh&acirc;n, nghi&ecirc;n cứu khoa học để t&igrave;m ra c&ocirc;ng cụ &aacute;p dụng v&agrave;o việc cho mọi người một định hướng minh triết nhất.</span></p><p>Định hướng minh triết, tương lai minh triết l&agrave; những g&igrave; t&ocirc;i ấp ủ qua năm th&aacute;ng mong được truyền tải tới mọi người. Ch&uacute;c cho c&aacute;c bạn, nhờ v&agrave;o c&ocirc;ng cụ khoa học t&ocirc;i&nbsp; d&agrave;nh thời gian nghi&ecirc;n cứu n&oacute;i ri&ecirc;ng, Vi&ecirc;n&nbsp; Đ&agrave;o tạo khởi nghiệp v&agrave; Ứng Dụng khoa học c&ocirc;ng nghệ cao SATSi n&oacute;i chung, t&igrave;m thấy cho m&igrave;nh ngọn đ&egrave;n dẫn dắt, soi s&aacute;ng những khoảnh khắc mập mờ khi mường tượng tới tương lai, cuộc sống của m&igrave;nh sau n&agrave;y. Sự h&agrave;i l&ograve;ng của c&aacute;c bạn sau khi trải nghiệm sản phẩm v&agrave; dịch vụ tư vấn của t&ocirc;i, l&agrave; động lực v&agrave; niềm hạnh ph&uacute;c lớn lao đỡ bước t&ocirc;i th&ecirc;m quyết liệt tr&ecirc;n h&agrave;nh tr&igrave;nh phụng sự cộng đồng.</span></p>",
		},
		{
			id: 2,
			name: "banner2",
			image: banner2,
			content:
				"<p><em><span>Đ&acirc;y l&agrave; một c&ocirc;ng tr&igrave;nh nghi&ecirc;n cứu của phương T&acirc;y được &aacute;p dụng v&agrave;o việc định hướng cuộc sống cho bất cứ ai đang ch&ecirc;nh v&ecirc;nh tr&ecirc;n nẻo đường đi t&igrave;m sứ mệnh c&aacute; nh&acirc;n. Th&ocirc;ng qua c&aacute;c con số với c&aacute;c dạng năng lượng đi k&egrave;m được t&iacute;nh theo c&ocirc;ng thức ri&ecirc;ng, c&aacute;c bạn sẽ thấy r&otilde; con đường tương lai bao gồm c&ocirc;ng danh, đời sống tinh thần, t&iacute;nh c&aacute;ch, ...v...v... <p>Bức tranh to&agrave;n cảnh cuộc đời bạn hiện ra đầy sắc n&eacute;t. Sự sắp xếp của vũ trụ d&agrave;nh cho </span></em><em><span >bạn&nbsp; nằm to&agrave;n bộ ở đ&acirc;y.</p> </span></em></p><p style='text-align:end'>T&aacute;c </span><em>giả: H&agrave; Nguyễn (Tuệ Hương)</span></em></p>",
		},
	];
	return (
		<Container>
			<Swiper
				spaceBetween={30}
				effect={"cube"}
				pagination={{
					clickable: true,
				}}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				className='mySwiper'
				loop={true}
				navigation={{
					nextEl: ".next",
				}}>
				{listBanner.map((banner) => (
					<SwiperSlide className='next' key={banner.id}>
						<div
							id={banner.name}
							className='bannerWrapper'
							style={{ backgroundImage: `url(${banner.image})` }}>
							<div className='introduceWrapper'>
								<div className='introduceBanner'>
									<Typography variant='h2' component='h2' className='title'>
										Tổng quan minh triết nhân sinh
									</Typography>
									<div className='contentWrapper'>
										<div
											className='content'
											dangerouslySetInnerHTML={{
												__html: banner.content,
											}}></div>
									</div>
								</div>
							</div>
							<div className='btn_prev'>
								<ChevronLeftIcon className={classes.iconControl} />
							</div>
							<div className='btn_next'>
								<ChevronRightIcon className={classes.iconControl} />
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default Banners;
