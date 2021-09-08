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
const useStyles = makeStyles((theme) => ({
  para1: {
    color: "#a0a2ad",
    textAlign: "right",
    padding: "2px 0",
    [theme.breakpoints.up("xs")]: {
      textAlign: "justify",
      fontSize: "1.25rem",
    },
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
  aboutSection: {
    marginBottom: "20px",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: 25,
    textAlign: "right",
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
    },
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
    transform: "translateY(5px)",
  },
  infoSection: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },
}));

const NewFooter = () => {
  const classes = useStyles();

  return (
    <div
      className="footer"
      style={{ background: "#242949", padding: "95px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            container
            md={4}
            sm={6}
            xs={12}
            justify="center"
            className={classes.aboutSection}
          >
            <Grid item md={12} sm={12} xs={9}>
              <iframe
                title="Satsi location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.491141912446!2d105.7590120147541!3d20.97294069505785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453b311f4c94d%3A0xa84f3ad42d3983bd!2zU0FUU0kgLSBWSeG7hk4gxJDDgE8gVOG6oE8gS0jhu55JIE5HSEnhu4ZQIFbDgCDhu6hORyBE4bukTkcgS0hPQSBI4buMQyBDw5RORyBOR0jhu4YgQ0FP!5e0!3m2!1svi!2s!4v1622221019649!5m2!1svi!2s"
                width="100%"
                height="275px"
                loading="lazy"
              ></iframe>
            </Grid>
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
          <Grid
            item
            container
            md={4}
            sm={12}
            xs={12}
            className={classes.infoSection}
            justify="center"
          >
            <Grid
              item
              container
              md={12}
              sm={6}
              xs={9}
              style={{ marginBottom: "15px" }}
              justifyContent="space-between"
            >
              <Grid item md={2} sm={2} xs={2}>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item md={9} sm={9} xs={9}>
                <Typography
                  variant="body1"
                  className={classes.para1}
                  style={{ textAlign: "left" }}
                >
                  Địa chỉ :
                </Typography>
                <Typography variant="subtitle1" className={classes.para2}>
                  01- BT9 Văn Khê, Hà Đông, Hà Nội
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              md={12}
              sm={6}
              xs={9}
              style={{ marginBottom: "15px" }}
              justifyContent="space-between"
            >
              <Grid item md={2} sm={2} xs={2}>
                <PhoneIcon className={classes.icon} />
              </Grid>
              <Grid item md={9} sm={9} xs={9}>
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
            <Grid
              item
              container
              md={12}
              sm={6}
              xs={9}
              style={{ marginBottom: "15px" }}
              justifyContent="space-between"
            >
              <Grid item md={2} sm={2} xs={2}>
                <EmailIcon className={classes.icon} />
              </Grid>
              <Grid item md={9} sm={9} xs={9}>
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
            <Grid
              item
              container
              md={12}
              sm={6}
              xs={9}
              style={{ marginBottom: "15px" }}
              justifyContent="space-between"
            >
              <Grid item md={2} sm={2} xs={2}>
                <LanguageIcon className={classes.icon} />
              </Grid>
              <Grid item md={9} sm={9} xs={9}>
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
