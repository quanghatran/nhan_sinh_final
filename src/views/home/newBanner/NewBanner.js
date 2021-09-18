import React, { useState, useRef } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

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
const NewBanner = ({ data }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 1,

    config: config.gentle,
  });
  const animationRef = useRef([]);

  const handleAnimation = (index) => {
    const pos = Math.abs(index % data.length);
    const target = animationRef.current[pos];
    target.classList.add("animate");
    setTimeout(() => {
      target.classList.remove("animate");
    }, 2000);
  };
  let slides = [];
  for (let i = 0; i < data.length; i++) {
    slides.push({
      key: i + 1,
      content: (
        <div
          ref={(el) => (animationRef.current[i] = el)}
          style={{
            backgroundImage: `url(${data[i].linkImage})`,
          }}
          className={classes.sliderImg}
        >
          <div className={classes.textField}>
            <Typography variant="h4" gutterBottom className="heading">
              {data[i].title}
            </Typography>

            <Typography variant="h5" className="paragraph">
              {data[i].detail}
            </Typography>
          </div>
        </div>
      ),
      onClick: () => {
        handleAnimation(i);
        setState({ ...state, goToSlide: i });
      },
    });
  }

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
        handleAnimation(state.goToSlide + 1);
        setState({ ...state, goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        handleAnimation(state.goToSlide - 1);
        setState({ ...state, goToSlide: state.goToSlide - 1 });
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
        onClick={() => {
          handleAnimation(state.goToSlide + 1);
          setState({ ...state, goToSlide: state.goToSlide + 1 });
        }}
      >
        <ArrowForwardIosIcon style={{ width: 40, height: 40 }} />
      </IconButton>
      <IconButton
        onClick={() => {
          handleAnimation(state.goToSlide - 1);
          setState({ ...state, goToSlide: state.goToSlide - 1 });
        }}
        className={classes.backwardButton}
      >
        <ArrowBackIosIcon style={{ width: "40px", height: "40px" }} />
      </IconButton>
    </div>
  );
};
export default NewBanner;
