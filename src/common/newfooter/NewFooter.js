import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./../../images/logo1.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageIcon from "@material-ui/icons/Language";
const useStyles = makeStyles(() => ({
  para1: {
    color: "#a0a2ad",
    textAlign: "right",
    padding: "2px 0",
  },
  para2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  img: {
    width: "70%",
    height: "70%",
  },
  logoSection: {
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "right",
    fontWeight: "bold",
    color: "#f69320",
    marginBottom: "20px",
  },
  icon: {
    backgroundColor: "#f69320",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "white",
    fontSize: "1rem",
    padding: 10,
  },
}));

const NewFooter = () => {
  const classes = useStyles();

  return (
    <div
      className="footer"
      style={{ marginTop: "50px", background: "#242949", padding: "95px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={4} sm={6} xs={12}>
            <Typography variant="subtitle1" className={classes.title}>
              Về chúng tôi
            </Typography>
            <Typography variant="body1" className={classes.para1}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              placeat accusamus quod perspiciatis itaque omnis voluptates, eaque
              minus minima numquam blanditiis doloribus laborum fugit! Nihil
              tempora consequuntur eligendi iste quas.
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} className={classes.logoSection}>
            <img src={logo} alt="" className={classes.img} />
            <Typography
              variant="body1"
              className={classes.para1}
              style={{ textAlign: "center" }}
            >
              Copyright © 2021 - www.satsi.edu.vn
            </Typography>
            <Typography
              variant="body1"
              className={classes.para1}
              style={{ textAlign: "center" }}
            >
              Bản quyền thuộc về thương hiệu SATSI
            </Typography>
          </Grid>
          <Grid item container md={4} sm={6} xs={12}>
            <Grid item container md={12} style={{ marginBottom: "15px" }}>
              <Grid item md={2}>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item md={10}>
                <Typography
                  variant="body1"
                  className={classes.para1}
                  style={{ textAlign: "left" }}
                >
                  Địa chỉ :
                </Typography>
                <Typography variant="subtitle1" className={classes.para2}>
                  01- BT9 KĐT Văn Khê, Hà Đông, Hà Nội
                </Typography>
              </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "15px" }}>
              <Grid item md={2}>
                <PhoneIcon className={classes.icon} />
              </Grid>
              <Grid item md={10}>
                <Typography
                  variant="body1"
                  className={classes.para1}
                  style={{ textAlign: "left" }}
                >
                  Số điện thoại :
                </Typography>
                <Typography variant="subtitle1" className={classes.para2}>
                  024 223 71 777
                </Typography>
              </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "15px" }}>
              <Grid item md={2}>
                <EmailIcon className={classes.icon} />
              </Grid>
              <Grid item md={10}>
                <Typography
                  variant="body1"
                  className={classes.para1}
                  style={{ textAlign: "left" }}
                >
                  Email :
                </Typography>
                <Typography variant="subtitle1" className={classes.para2}>
                  satsi.edu@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item container md={12} style={{ marginBottom: "15px" }}>
              <Grid item md={2}>
                <LanguageIcon className={classes.icon} />
              </Grid>
              <Grid item md={10}>
                <Typography
                  variant="body1"
                  className={classes.para1}
                  style={{ textAlign: "left" }}
                >
                  Website :
                </Typography>
                <Typography variant="subtitle1" className={classes.para2}>
                  www.satsi.edu.vn
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewFooter;
