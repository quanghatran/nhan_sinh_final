import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/news2.jpg";
import news3 from "../../../images/news3.jpg";
import fact1 from "../../../images/fact1.jpg";
import fact2 from "../../../images/fact2.jpg";
import image4 from "../../../images/image4.jpg";

import backgroundImage from "../../../images/bg.jpg";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
const useStyles = makeStyles((theme) => ({
  contain: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    "& .swiper-pagination": {
      bottom: "20px !important",
    },
    "& .swiper-button-prev": {
      color: "#f69320",
      left: "50px",
    },
    "& .swiper-button-next": {
      color: "#f69320",
      right: "50px",
    },
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    margin: "30px auto",
  },
  item: {
    margin: "20px auto 50px",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  link: {
    "& a": {
      display: "block",
      color: "#f69320",
    },
  },
  para1: {
    color: "#a0a2ad",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f69320",
    transition: ".3s all ease",

    "&:hover": {
      color: "#585858",
      textDecoration: "none",
    },
  },
  box: {
    height: "305px",
    padding: "33px 35px",
    backgroundColor: "#242949",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    fontSize: "3rem",
    color: "#f69320",
  },
  img: {
    width: "100%",
    height: "100%",
    maxHeight: "300px",
    objectFit: "cover",
  },
}));
SwiperCore.use([Autoplay]);
const News = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.contain}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h1" className={classes.heading}>
            Có Thể Bạn Chưa Biết
          </Typography>
        </Grid>
        <Swiper
          slidesPerView={1}
          //   spaceBetween={250}
          modules={[Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          speed={2500}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Grid
              item
              container
              md={12}
              alignItems="center"
              justify="center"
              className={classes.item}
            >
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                style={{ height: "300px" }}
                className={classes.box}
              >
                {/* <CameraAltIcon className={classes.icon} />
                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Typography variant="body1" className={classes.para1}>
                  Con số 1 thể hiện sự độc lập, lãnh đạo và tiên phong. Bạn đang
                  mang trong mình tố chất ...
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem thêm</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={news1} alt="" className={classes.img} />
              </Grid>

              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                style={{ height: "300px" }}
                className={classes.box}
              >
                {/* <CameraAltIcon className={classes.icon} />

                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Typography variant="body1" className={classes.para1}>
                  Trong ngày sinh có 3 con số 7-8-9 - Bạn là 1 người rất năng
                  động, thể hiện sự nhanh nhẹn tháo vát trong ...
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem thêm</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={news2} alt="" className={classes.img} />
              </Grid>

              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                className={classes.box}
                style={{ height: "300px" }}
              >
                {/* <CreateIcon className={classes.icon} />
                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Typography variant="body1" className={classes.para1}>
                  Số chủ đạo là 9 nói lên điều gì - Số 9 là người lãnh đạo với
                  lý tưởng cho đi và trách nhiệm. Số 9 luôn ...
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem thêm</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={news3} alt="" className={classes.img} />
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid
              item
              container
              md={12}
              alignItems="center"
              justify="center"
              className={classes.item}
            >
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={image4} alt="" className={classes.img} />
              </Grid>
              <Grid
                item
                container
                md={4}
                sm={6}
                xs={12}
                style={{ height: "300px" }}
                className={classes.box}
                alignItems="center"
              >
                {/* <CameraAltIcon className={classes.icon} />
                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    8. 3 lý đo vì sao bạn cần có đường đời số 3 sống cùng - Số 3
                    là những người rất vui tươi, luôn sống lạc quan,
                  </Typography>
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="body1" className={classes.link}>
                      <a href="/blog">Xem thêm</a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={fact1} alt="" className={classes.img} />
              </Grid>
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                style={{ height: "300px" }}
                className={classes.box}
              >
                {/* <CameraAltIcon className={classes.icon} />

                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Typography variant="body1" className={classes.para1}>
                  Top 4 ngày sinh có tài năng lãnh đạo thiên bẩm - Đây là những
                  người có tính cách mạnh mẽ, óc sáng tạo và có cá tính độc lập.
                  Họ dám nghĩ,
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem thêm</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={fact2} alt="" className={classes.img} />
              </Grid>
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                className={classes.box}
                style={{ height: "300px" }}
              >
                {/* <CreateIcon className={classes.icon} />
                <Link to=''>
                  <Typography variant='subtitle1' className={classes.title}>
                    Love & Astrology
                  </Typography>
                </Link> */}
                <Typography variant="body1" className={classes.para1}>
                  Ngày sinh của bạn thiếu hoàn toàn con số 8 - Con số 8 là con
                  số mang tính chủ động nhất về
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem thêm</a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Container>
  );
};

export default News;
