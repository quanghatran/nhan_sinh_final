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
    textAlign: "justify",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    color: "#a0a2ad",
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
    marginBottom: "5px",
  },
  description: {
    color: "#f69320",
    textAlign: "center",
    fontSize: "22px",
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
    opacity: 0.8,
    "&:hover": {
      backgroundColor: "#f69320",
      opacity: 1,
    },
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
const Welcome = ({ data }) => {
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
              ‘’Minh triết nhân sinh’’ là một trong các dự án mang giá trị tinh
              thần to lớn, với mong muốn được cống hiến các dòng giá trị minh
              triết của chính cá nhân tích luỹ qua các trải nghiệm cá nhân,
              nghiên cứu khoa học để tìm ra công cụ áp dụng vào việc cho mọi
              người một định hướng minh triết nhất.
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
          <Grid item container md={10}>
            {data.map((item, index) => (
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                className={classes.gridItem}
                key={index}
              >
                <div>
                  <Typography variant="h1" className={classes.number}>
                    {item.quantity}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h4" className={classes.description}>
                    {item.content}
                  </Typography>
                </div>
              </Grid>
            ))}
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
              <a href="/dang-ky">Đăng ký thành viên ngay</a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcome;
