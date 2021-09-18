import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircleLogo from "../../../images/logorotate3.png";
import "./NumberMeaning.scss";
const useStyles = makeStyles((theme) => ({
  "@keyframes logo": {
    "100%": {
      transform: "rotate(3600deg)",
    },
  },

  title: {
    color: "#a0a2ad",
    textAlign: "justify",
    margin: "10px auto 0",
  },

  numberWrapper: {
    border: "7px solid #fff",
    borderRadius: "50px",

    backgroundColor: "#f69320",
    width: "60px",
    height: "60px",
    "& .number": {
      textAlign: "center",
      color: "#fff",
      fontSize: "30px",
      fontWeight: "bold",
      margin: "0 auto",
    },
    "&:hover ": {
      cursor: "pointer",
      backgroundColor: "#242949",
      transform: "scale(1.05)",
      borderColor: "#f69320",
      "& .number": {
        color: "#f69320",
        transition: "all .3s ease-in-out",
      },
      transition: "all .3s ease-in-out",
    },
  },

  gridItem: {
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },
  },
  titleWrapper: {
    textAlign: "left",
    "&:hover a": {
      color: "#37a4dd",
    },
  },
  titleWrapper2: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
    "&:hover a": {
      color: "#37a4dd",
    },
  },

  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "50px",
  },

  centerDisplayMD: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  circleLogo: {
    width: "500px",
    height: "auto",
    marginTop: "50px",
    animation: "90s linear infinite $logo",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "450px ",
      height: "auto",
    },
  },
  circleLogoSm: {
    display: "none",
    width: "300px",
    height: "auto",
    margin: "50px auto ",
    animation: "90s linear infinite $logo",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.only("sm")]: {
      width: "350px",
      height: "auto",
    },
  },
  loadMore: {
    margin: "0 auto",
    color: "#a09fb0",
    fontSize: "20px",
  },
  numberSix: {
    width: "50%",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  numberSixIpad: {
    width: "50%",
    marginBottom: "20px",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  hideInXS: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mtLeftMobile: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
    },
  },
}));

const NumberMeaning = ({ data }) => {
  const numbers1 = [];
  const numbers2 = [];
  for (let i = 0; i < 5; i++) {
    numbers1.push(data[i]);
    numbers2.push(data[i + 6]);
  }
  console.log(data);
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Typography variant="h1" className={classes.heading}>
        Ý nghĩa các con số
      </Typography>
      <Grid container justifyContent="center">
        <Grid
          item
          sm={12}
          xs={12}
          justifyContent="center"
          className={classes.centerDisplaySM}
        >
          <img src={CircleLogo} alt="" className={classes.circleLogoSm} />
        </Grid>
        <Grid item md={3} sm={5} xs={4}>
          <Grid container>
            {numbers1.map((number, index) => (
              <Grid
                key={index}
                item
                container
                className={classes.gridItem}
                direction="column"
                alignItems="center"
              >
                <Grid item className={classes.numberWrapper}>
                  <p className="number">{number?.number}</p>
                </Grid>
                <Grid item className={classes.titleWrapper}>
                  <p className={classes.title}>{number?.meaning}</p>
                </Grid>
                <Grid>
                  {" "}
                  <p className={classes.loadMore}>...</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          direction="column"
          item
          container
          md={6}
          sm={1}
          xs={12}
          // className={classes.centerDisplayMD}
          className={classes.hideInXS}
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <img src={CircleLogo} alt="" className={classes.circleLogo} />
          </Grid>
          <Grid
            key={6}
            item
            container
            className={classes.numberSix}
            alignItems="center"
            direction="column"
          >
            <Grid item className={classes.numberWrapper}>
              <p className="number">{data[5]?.number}</p>
            </Grid>
            <Grid item className={classes.titleWrapper2}>
              <p className={classes.title}>{data[5]?.meaning}</p>
            </Grid>
            <Grid>
              <p className={classes.loadMore}>...</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={5} xs={4} className={classes.mtLeftMobile}>
          <Grid container>
            {numbers2.map((number, index) => (
              <Grid
                key={index}
                item
                container
                md={12}
                className={classes.gridItem}
                direction="column"
                alignItems="center"
              >
                <Grid item className={classes.numberWrapper}>
                  <p className="number">{number?.number}</p>
                </Grid>
                <Grid item className={classes.titleWrapper2}>
                  <p className={classes.title}>{number?.meaning}</p>
                </Grid>
                <Grid>
                  <p className={classes.loadMore}>...</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          key={6}
          item
          xs={6}
          container
          className={classes.numberSixIpad}
          // alignItems='center'
          direction="column"
        >
          <Grid
            item
            className={classes.numberWrapper}
            style={{ margin: "0 auto" }}
          >
            <p className="number">{data[5]?.number}</p>
          </Grid>
          <Grid item className={classes.titleWrapper2}>
            <p className={classes.title}>{data[5]?.meaning}</p>
          </Grid>
          <Grid>
            <p className={classes.loadMore} style={{ textAlign: "center" }}>
              ...
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NumberMeaning;
