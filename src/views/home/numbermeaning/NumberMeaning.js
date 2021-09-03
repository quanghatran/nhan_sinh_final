import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircleLogo from "../../../images/CircleLogo.png";
import "./NumberMeaning.scss";
const useStyles = makeStyles((theme) => ({
  number: {
    fontSize: "2.5rem",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 53,
    height: 53,
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
  },

  numberWrapper: {
    border: "8px solid white",
    borderRadius: "50%",
    marginRight: "30px",
    backgroundColor: "#f69320",
    "&:hover ": {
      backgroundColor: "#37a4dd",
    },
  },
  numberWrapper2: {
    marginLeft: "30px",
    border: "8px solid white",
    borderRadius: "50%",
    backgroundColor: "#f69320",
    "&:hover ": {
      backgroundColor: "#37a4dd",
    },
  },
  gridItem: {
    marginBottom: "60px",
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
  },
  centerDisplaySM: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      height: 450,
      marginBottom: 50,
    },
    position: "relative",
  },
  centerDisplayMD: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const numbers1 = [
  {
    id: 1,
    number: 1,
    title: "Số 1",
  },
  {
    id: 2,
    number: 2,
    title: "Số 2",
  },
  {
    id: 3,
    number: 3,
    title: "Số 3",
  },
  {
    id: 4,
    number: 4,
    title: "Số 4",
  },
  {
    id: 5,
    number: 5,
    title: "Số 5",
  },
  {
    id: 6,
    number: 6,
    title: "Số 6",
  },
];
const numbers2 = [
  {
    id: 7,
    number: 7,
    title: "Số 7",
  },
  {
    id: 8,
    number: 8,
    title: "Số 8",
  },
  {
    id: 9,
    number: 9,
    title: "Số 9",
  },

  {
    id: 11,
    number: 11,
    title: "Số 11",
  },
  {
    id: 22,
    number: 22,
    title: "Số 22",
  },
];

const NumberMeaning = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Typography variant="h1" className={classes.heading}>
        Lựa chọn con số chủ đạo của bạn
      </Typography>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item sm={12} xs={12} className={classes.centerDisplaySM}>
          <img src={CircleLogo} alt="" className="circleLogo" />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Grid container>
            {numbers1.map((number) => (
              <Grid
                key={number.id}
                item
                container
                md={12}
                className={classes.gridItem}
              >
                <Grid item md={2} className={classes.numberWrapper}>
                  <a href="#meaningsBlock" className={classes.number}>
                    {number.number}
                  </a>
                </Grid>
                <Grid item md={8} className={classes.titleWrapper}>
                  <a href="#meaningsBlock" className={classes.title}>
                    {number.title}
                  </a>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={4}
          className={classes.centerDisplayMD}
          alignItems="start"
          justify="center"
        >
          <Grid item md={12} style={{ position: "relative" }}>
            <img src={CircleLogo} alt="" className="circleLogo" />
          </Grid>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Grid container>
            {numbers2.map((number) => (
              <Grid
                key={number.id}
                item
                container
                md={12}
                className={classes.gridItem}
              >
                <Grid item md={8} className={classes.titleWrapper2}>
                  <a href="#meaningsBlock" className={classes.title}>
                    {number.title}
                  </a>
                </Grid>
                <Grid item md={2} className={classes.numberWrapper2}>
                  <a href="#meaningsBlock" className={classes.number}>
                    {number.number}
                  </a>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NumberMeaning;
