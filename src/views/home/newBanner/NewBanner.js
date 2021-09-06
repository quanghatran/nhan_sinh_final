import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import banner1 from "../../../images/imgSlider1.jpg";
import banner2 from "../../../images/imgSlider2.jpg";
import banner3 from "../../../images/imgSlider3.jpg";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  sliderImg: {
    backgroundSize: "cover",
    width: "60vw",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    position: "relative",
    backgroundPosition: "center",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: "rgba(0, 0, 0, 0.4)",
      zIndex: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      height: "50vw",
    },
  },
  sliderContainer: {
    width: "75vw",
    height: "600px",
    margin: "100px auto",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: "60vw",
    },
  },
  textField: {
    color: "white",
    zIndex: 1,
    margin: "0 50px",
  },
  navButton: {
    color: "white",
    width: "70px",
    height: "70px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const NewBanner = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 3,

    config: config.gentle,
  });

  let slides = [
    {
      key: 1,
      content: (
        <div
          style={{
            backgroundImage: `url(${banner1})`,
          }}
          className={classes.sliderImg + " sliderDistinguish"}
        >
          <div className={classes.textField}>
            <Typography variant="h3" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>

            <Typography variant="h6" className="paragraph">
              ‘’Minh triết nhân sinh’’ là một trong các dự án mang giá trị tinh
              thần to lớn, với mong muốn được cống hiến các dòng giá trị minh
              triết của chính cá nhân tích luỹ qua các trải nghiệm cá nhân,
              nghiên cứu khoa học để tìm ra công cụ áp dụng vào việc cho mọi
              người một định hướng minh triết nhất.
            </Typography>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div
          style={{
            backgroundImage: `url(${banner2})`,
          }}
          className={classes.sliderImg + " sliderDistinguish"}
        >
          <div className={classes.textField}>
            <Typography variant="h3" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>
            <Typography variant="subtitle1" className="paragraph">
              Định hướng minh triết, tương lai minh triết là những gì tôi ấp ủ
              qua năm tháng mong được truyền tải tới mọi người. Chúc cho các
              bạn, nhờ vào công cụ khoa học tôi dành thời gian nghiên cứu nói
              riêng, Viên Đào tạo khởi nghiệp và Ứng Dụng khoa học công nghệ cao
              SATSi nói chung, tìm thấy cho mình ngọn đèn dẫn dắt, soi sáng
              những khoảnh khắc mập mờ khi mường tượng tới tương lai, cuộc sống
              của mình sau này. Sự hài lòng của các bạn sau khi trải nghiệm sản
              phẩm và dịch vụ tư vấn của tôi, là động lực và niềm hạnh phúc lớn
              lao đỡ bước tôi thêm quyết liệt trên hành trình phụng sự cộng
              đồng.
            </Typography>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div
          style={{
            backgroundImage: `url(${banner3})`,
          }}
          className={classes.sliderImg + " sliderDistinguish"}
        >
          <div className={classes.textField}>
            <Typography variant="h3" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>
            <Typography variant="subtitle1" className="paragraph">
              Đây là một công trình nghiên cứu của phương Tây được áp dụng vào
              việc định hướng cuộc sống cho bất cứ ai đang chênh vênh trên nẻo
              đường đi tìm sứ mệnh cá nhân. Thông qua các con số với các dạng
              năng lượng đi kèm được tính theo công thức riêng, các bạn sẽ thấy
              rõ con đường tương lai bao gồm công danh, đời sống tinh thần, tính
              cách, ...v...v...Bức tranh toàn cảnh cuộc đời bạn hiện ra đầy sắc
              nét. Sự sắp xếp của vũ trụ dành cho nằm toàn bộ ở đây.
            </Typography>
            <Typography variant="subtitle1" className="author">
              Tác giả: Hà Nguyễn (Tuệ Hương)
            </Typography>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: (e) => {
        e.target.classList.add("animate");
        setTimeout(() => {
          e.target.classList.remove("animate");
        }, 2000);
        setState({ goToSlide: index });
      },
    };
  });

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     document.querySelectorAll(".sliderDistinguish").forEach((item, index) => {
  //       item.classList.remove("animate");
  //     });
  //   }, 5000);
  // });
  return (
    <div
      className={classes.sliderContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={false}
        animationConfig={state.config}
      />
      <ArrowForwardIosIcon
        style={{
          right: "-15px",
        }}
        className={classes.navButton}
      />
      <ArrowBackIosIcon style={{ left: 0 }} className={classes.navButton} />
    </div>
  );
};
export default NewBanner;
