import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import banner1 from "../../../images/imgSlider1.jpg";
import banner2 from "../../../images/imgSlider2.jpg";
import banner3 from "../../../images/imgSlider3.jpg";
import IconButton from "@material-ui/core/IconButton";

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
    [theme.breakpoints.down("md")]: {
      height: "70vw",
      width: "90vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95vw",
      height: "100vw",
    },
  },
  sliderContainer: {
    width: "75vw",
    height: "600px",
    margin: "100px auto",
    position: "relative",
    "&>div:nth-child(2)": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      height: "100vw",
      width: "80vw",
      "&>div:nth-child(2)": {
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "-5%",
        width: "110%",
        zIndex: "2",
        "& img": {
          width: 35,
          height: 60,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      height: "100vw",
      width: "80vw",
      "&>div:nth-child(2)": {
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "-5%",
        width: "110%",
        zIndex: "2",
        "& img": {
          width: 35,
          height: 60,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      height: "100vw",
      width: "80vw",
      "&>div:nth-child(2)": {
        display: "flex",
        position: "absolute",
        top: "40%",
        left: "-7%",
        width: "112%",
        zIndex: "2",
      },
    },
  },
  textField: {
    color: "white",
    zIndex: 1,
    margin: "0 50px",
  },
  navButton: {},
  forwardButton: {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    zIndex: 3,
    transform: "translateY(-50%)",
    right: 0,
    [theme.breakpoints.down("sm")]: {
      right: "-8%",
    },
    [theme.breakpoints.down("md")]: {
      right: "-8%",
    },
  },
  backwardButton: {
    color: "white",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "50%",
    zIndex: 3,
    left: 0,
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      left: "-8%",
    },
    [theme.breakpoints.down("md")]: {
      left: "-7%",
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
            <Typography variant="h4" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>

            <Typography variant="h5" className="paragraph">
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
            <Typography variant="h4" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>
            <Typography variant="h5" className="paragraph">
              Định hướng minh triết, tương lai minh triết là những gì tôi ấp ủ
              qua năm tháng mong được truyền tải tới mọi người.
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
            <Typography variant="h4" gutterBottom className="heading">
              Tổng quan minh triết nhân sinh
            </Typography>
            <Typography variant="h5" className="paragraph">
              Đây là một công trình nghiên cứu của phương Tây được áp dụng vào
              việc định hướng cuộc sống cho bất cứ ai đang chênh vênh trên nẻo
              đường đi tìm sứ mệnh cá nhân.
            </Typography>
            <Typography variant="h5" className="author">
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
      <IconButton
        className={classes.forwardButton}
        onClick={() => setState({ ...state, goToSlide: state.goToSlide + 1 })}
      >
        <ArrowForwardIosIcon style={{ width: 40, height: 40 }} />
      </IconButton>
      <IconButton
        onClick={() => setState({ ...state, goToSlide: state.goToSlide - 1 })}
        className={classes.backwardButton}
      >
        <ArrowBackIosIcon style={{ width: "40px", height: "40px" }} />
      </IconButton>
    </div>
  );
};
export default NewBanner;
