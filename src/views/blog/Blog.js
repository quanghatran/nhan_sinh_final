import React from "react";
import Background from "../../common/background/Background";
import Container from "@material-ui/core/Container";
import Header from "../../common/header/Header";
import Footer from "../../common/newfooter/NewFooter";
import bannerImg from "../../images/imgSlider2.jpg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  banner: {
    background: `url(${bannerImg}) center no-repeat`,
    marginTop: "100px",
    width: "100vw",
    height: "370px",
    backgroundSize: "cover",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
}));
const Blog = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Background />
      <Header />
      <div className={classes.banner}></div>
      <Container maxWidth="lg"></Container>
      <Footer />
    </React.Fragment>
  );
};

export default Blog;
