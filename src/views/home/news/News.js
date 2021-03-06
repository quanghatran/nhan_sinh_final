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
            C?? Th??? B???n Ch??a Bi???t
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
                container
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
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    Con s??? 1 th??? hi???n s??? ?????c l???p, l??nh ?????o v?? ti??n phong. B???n
                    ??ang mang trong m??nh t??? ch???t ...
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem th??m</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={news1} alt="" className={classes.img} />
              </Grid>

              <Grid
                item
                container
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
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    Trong ng??y sinh c?? 3 con s??? 7-8-9 - B???n l?? 1 ng?????i r???t n??ng
                    ?????ng, th??? hi???n s??? nhanh nh???n th??o v??t trong ...
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem th??m</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={news2} alt="" className={classes.img} />
              </Grid>

              <Grid
                item
                container
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
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    S??? ch??? ?????o l?? 9 n??i l??n ??i???u g?? - S??? 9 l?? ng?????i l??nh ?????o v???i
                    l?? t?????ng cho ??i v?? tr??ch nhi???m. S??? 9 lu??n ...
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem th??m</a>
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
                    8. 3 l?? ??o v?? sao b???n c???n c?? ???????ng ?????i s??? 3 s???ng c??ng - S??? 3
                    l?? nh???ng ng?????i r???t vui t????i, lu??n s???ng l???c quan,
                  </Typography>
                  <Grid item md={12} sm={12} xs={12}>
                    <Typography variant="body1" className={classes.link}>
                      <a href="/blog">Xem th??m</a>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={fact1} alt="" className={classes.img} />
              </Grid>
              <Grid
                item
                container
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
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    Top 4 ng??y sinh c?? t??i n??ng l??nh ?????o thi??n b???m - ????y l??
                    nh???ng ng?????i c?? t??nh c??ch m???nh m???, ??c s??ng t???o v?? c?? c?? t??nh
                    ?????c l???p. H??? d??m ngh??,
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem th??m</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={4} sm={6} xs={12} style={{ height: "300px" }}>
                <img src={fact2} alt="" className={classes.img} />
              </Grid>
              <Grid
                item
                container
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
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.para1}>
                    Ng??y sinh c???a b???n thi???u ho??n to??n con s??? 8 - Con s??? 8 l?? con
                    s??? mang t??nh ch??? ?????ng nh???t v???
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1" className={classes.link}>
                    <a href="/blog">Xem th??m</a>
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
