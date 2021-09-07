import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  heading: {
    textAlign: "center",
    color: "#fff",
  },
  para1: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    color: "#bdc3c7",
  },
  item: {
    margin: "20px 0",
  },
  priceTable: {
    margin: "20px 20px",
    textAlign: "center",
    background: "black",
    border: "1px solid #f69320",
    transition: "all 0.7s",
    borderRadius: "16px",
    padding: "40px 0",
    color: "#fff",

    "& .exp-pricing-plans-top": {
      fontSize: "50px",
    },
    "& .exp-price-mrp": {
      marginBottom: "20px",
      marginTop: 0,
    },
    "& ul": {
      listStyleType: "none",
      padding: 0,
    },
    "& li": {
      padding: "15px 0",
    },
  },
  btnPurchase: {
    color: "#fff",
    borderRadius: "50px",
    width: "70%",
    background: "#f69320",
    padding: "12px 30px",
    transition: "0.4 all ease-in-out",
    opacity: 0.8,
    "&:hover": {
      background: "#f69320",
      opacity: 1,
    },
  },
}));
const Prices = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.heading}>
              Bảng giá
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
                officiis aut dolore tempore rem molestiae suscipit provident
                iste, quis laboriosam quaerat dolorum doloribus atque ducimus
                molestias cumque veritatis consequuntur iusto quasi quod
                voluptates. Veritatis, sit expedita facere dolore officia ad.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md={12} justify="center">
            <Grid item md={3} sm={7} xs={12} className={classes.priceTable}>
              <div className="exp-pricing-plans-inner">
                <div className="exp-pricing-plans-top">
                  <p className="exp-price-mrp">$19</p>
                  <Typography variant="h5">Cá nhân</Typography>
                </div>
                <div className="exp-pricing-plans-mid">
                  <ul className="color-dark-white-09">
                    <li>Daily Horoscope</li>
                    <li>Face Reading</li>
                    <li>Zodiac Consultant</li>
                    <li>Vastu Shastra</li>
                  </ul>
                </div>
                <Button className={classes.btnPurchase}>Mua ngay</Button>
              </div>
            </Grid>
            <Grid item md={3} sm={7} xs={12} className={classes.priceTable}>
              <div className="exp-pricing-plans-inner">
                <div className="exp-pricing-plans-top">
                  <p className="exp-price-mrp">$19</p>
                  <Typography variant="h5">Cá nhân</Typography>
                </div>
                <div className="exp-pricing-plans-mid">
                  <ul className="color-dark-white-09">
                    <li>Daily Horoscope</li>
                    <li>Face Reading</li>
                    <li>Zodiac Consultant</li>
                    <li>Vastu Shastra</li>
                  </ul>
                </div>
                <Button className={classes.btnPurchase}>Mua ngay</Button>
              </div>
            </Grid>
            <Grid item md={3} sm={7} xs={12} className={classes.priceTable}>
              <div className="exp-pricing-plans-inner">
                <div className="exp-pricing-plans-top">
                  <p className="exp-price-mrp">$19</p>
                  <Typography variant="h5">Cá nhân</Typography>
                </div>
                <div className="exp-pricing-plans-mid">
                  <ul className="color-dark-white-09">
                    <li>Daily Horoscope</li>
                    <li>Face Reading</li>
                    <li>Zodiac Consultant</li>
                    <li>Vastu Shastra</li>
                  </ul>
                </div>
                <Button className={classes.btnPurchase}>Mua ngay</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Prices;
