import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import moment from "moment";
import React, { useState } from "react";
import demoServiceApi from "../../../api/demoServiceApi";
import DatePicker from "../../../components/controls/DatePicker";
import IntroVIPSearch from "../../../components/introVIPSearch/IntroVIPSearch";

import BackgroundImage from "../../../images/bg2.jpg";
import "./DemoService.scss";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "8px 0",
    },
  },

  mtBtn: {
    margin: "0 auto",
    marginTop: "8px",
    color: "white",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "1.5rem",
  },
  gridItem: {
    padding: "12px 8px !important",
  },
  container: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      background: "rgba(0,0,0,0.4)",
      zIndex: 0,
    },
  },
}));

const DemoService = ({ data }) => {
  const classes = useStyles();

  // const formatYmd = (date) => date.toISOString().slice(0, 10);

  const date = new Date();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState(date);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataFormCheck = {
      name: name,
      email: email,
      birthDay: moment(birthDay).format("YYYY-MM-DD"),
      phoneNumber: phoneNumber,
      address: address,
    };

    const fetchDemoService = () => {
      try {
        demoServiceApi
          .postDemoService(dataFormCheck)
          .then(function (response) {
            console.log(response.data._id);

            const idFreeSearch = response.data._id;

            localStorage.setItem("idFreeSearch", idFreeSearch);
            //history.push("/tra-cuu");
          })
          .catch(function (error) {
            // setName("");
            // setEmail("");
            // setBirthDay("");
            // setPhoneNumber("");
            // setAddress("");
          });
      } catch (error) {
        console.log("failed to fetch product list: ", error);
      }
    };

    fetchDemoService();
  };

  return (
    <Container className={classes.container}>
      <div id="demoServiceBlock" className="block demoServiceBlock">
        <Typography variant="h1" className={classes.heading}>
          D???ch v??? c???a ch??ng t??i
        </Typography>

        <div className="demoServiceContent">
          <Grid container spacing={8}>
            <Grid item container md={6} xs={12} sm={6}>
              <Typography variant="h3" component="h3" className="titleVIP">
                Tra c???u mi???n ph??
              </Typography>
              <Grid item md={12} style={{ height: "80%" }}>
                <form className={classes.root} onSubmit={handleSubmit}>
                  <Grid container item spacing={2}>
                    <Grid item xs={12} className={classes.gridItem}>
                      <TextField
                        label="H??? t??n"
                        variant="outlined"
                        name="fullName"
                        type="text"
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        type="email"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                      <DatePicker
                        label="Ng??y sinh"
                        variant="outlined"
                        name="birthDay"
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.gridItem}>
                      <TextField
                        label="S??? ??i???n tho???i"
                        variant="outlined"
                        name="phoneNumber"
                        type="number"
                        required={true}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                      <TextField
                        label="?????a ch???"
                        variant="outlined"
                        name="address"
                        type="text"
                        required={true}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                  </Grid>

                  <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      endIcon={<SearchIcon />}
                      className={classes.mtBtn}
                    >
                      Tra C???u Mi???n Ph??
                    </Button>
                  </div>
                </form>
              </Grid>
            </Grid>

            <Grid
              container
              item
              md={6}
              xs={12}
              sm={6}
              style={{ width: "100%" }}
              justifyContent="center"
            >
              <IntroVIPSearch data={data} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default DemoService;
