import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../../../components/titleSection/TitleSection";
import "./SuccessStories.scss";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import success3 from "../../../images/success3.jpg";
const useStyles = makeStyles(() => ({
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "1.5rem",
  },
}));

const MeaningNumbers = ({ data }) => {
  const classes = useStyles();
  return (
    <Container>
      <div id="successStoriesBlock" className="successStoriesBlock ">
        <div className="block successStoriesBlockWrapper ">
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.heading}>
              Câu chuyện thành công
            </Typography>
          </Grid>
          <div className="successStoriesContent">
            <Swiper navigation={true} className="mySwiper">
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="contentWrapper">
                    <Typography
                      variant="h6"
                      component="h3"
                      className="titleContent"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="mainContent"
                    >
                      {item.content}
                    </Typography>
                    <img className="avatarContent" src={item.avatar} alt="" />
                    <Typography
                      variant="body1"
                      component="p"
                      className="nameCharacter"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className="jobCharacter"
                    >
                      {item.career}
                    </Typography>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MeaningNumbers;
