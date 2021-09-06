import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import banner1 from "../../../images/imgSlider1.jpg";
import banner2 from "../../../images/imgSlider2.jpg";
import banner3 from "../../../images/imgSlider3.jpg";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sliderImg: {
    backgroundSize: "cover",
    width: "60vw",
    height: "100%",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50vw",
      height: "50vw",
    },
  },
  sliderContainer: {
    width: "75vw",
    height: "700px",
    margin: "100px auto",
    [theme.breakpoints.down("sm")]: {
      height: "60vw",
    },
  },
}));
const NewBanner = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: true,
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
          className={classes.sliderImg}
        ></div>
      ),
    },
    {
      key: 2,
      content: (
        <div
          style={{
            backgroundImage: `url(${banner2})`,
          }}
          className={classes.sliderImg}
        ></div>
      ),
    },
    {
      key: 3,
      content: (
        <div
          style={{
            backgroundImage: `url(${banner3})`,
          }}
          className={classes.sliderImg}
        ></div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
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
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
};
export default NewBanner;
