import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  heading: {
    textAlign: "center",
    color: "#fff",
  },
  para1: {
    color: "#a0a2ad",
    textAlign: "center",
  },
  para2: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.25rem",
  },
  number: {
    color: "#f69320",
    fontSize: "4rem",
    textAlign: "center",
  },
  description: {
    color: "#f69320",
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "bold",
  },
  item: {
    margin: "20px 0",
  },
  gridItem: {
    padding: "20px 0",
  },
  btnSubscribe: {
    color: "#fff",
    backgroundColor: "#f69320",
    borderColor: "#f69320",
    padding: "14px 18px",
    fontSize: "14px",
    lineHeight: 1.2,
    borderRadius: "50px",
    borderWidth: "2px",
    fontWeight: 700,
    transition: ".3s ease-out",
  },
  btnContainer: {
    position: "relative",
    padding: "0 30px",
    "&:before": {
      content: "''",
      position: "absolute",
      top: "50%",
      width: "50%",
      right: "100%",
      height: 1,
      marginTop: 1,
      background: "#3d3f55",
      transform: "translateY(-50%)",
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: "50%",
      width: "50%",
      left: "100%",
      height: 1,
      marginTop: 1,
      background: "#3d3f55",
      transform: "translateY(-50%)",
    },
  },
}));
const Welcome = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: "100px" }}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h1" className={classes.heading}>
            Xin chào!
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={12}
          alignItems="center"
          justify="center"
          className={classes.item}
        >
          <Grid item md={8}>
            <Typography variant="body2" className={classes.para1}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
              officiis aut dolore tempore rem molestiae suscipit provident iste,
              quis laboriosam quaerat dolorum doloribus atque ducimus molestias
              cumque veritatis consequuntur iusto quasi quod voluptates.
              Veritatis, sit expedita facere dolore officia ad.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={12}
          alignItems="center"
          justify="center"
          className={classes.item}
        >
          <Grid item md={8}>
            <Typography variant="body1" className={classes.para2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              non culpa ut ad pariatur eos quae reprehenderit illo modi sint?
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          container
          alignItems="center"
          justify="center"
          className={classes.item}
        >
          <Grid item container md={8}>
            <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
              <div>
                <Typography variant="h1" className={classes.number}>
                  12
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" className={classes.description}>
                  Năm kinh nghiệm
                </Typography>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
              <div>
                <Typography variant="h1" className={classes.number}>
                  12
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" className={classes.description}>
                  Năm kinh nghiệm
                </Typography>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
              <div>
                <Typography variant="h1" className={classes.number}>
                  12
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" className={classes.description}>
                  Năm kinh nghiệm
                </Typography>
              </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12} className={classes.gridItem}>
              <div>
                <Typography variant="h1" className={classes.number}>
                  12
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" className={classes.description}>
                  Năm kinh nghiệm
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          container
          alignItems="center"
          justify="center"
          className={classes.item}
        >
          <Grid item md={3} className={classes.btnContainer}>
            <Button
              fullWidth
              variant="contained"
              className={classes.btnSubscribe}
            >
              Đăng ký thành viên ngay
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
