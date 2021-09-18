import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { HashLink as Link } from "react-router-hash-link";

import CheckIcon from "@material-ui/icons/Check";
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
      margin: "20px 0",
      fontSize: "20px",
      color: "#f69320",
    },
    "& ul": {
      listStyleType: "none",
      paddingLeft: "20px",
    },
    "& li": {
      padding: "3px 0",
    },
  },
  packageDetail: {
    textAlign: "left",
  },
  priceTitle: {
    paddingBottom: "20px",
    borderBottom: "1px solid grey",
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
const Prices = ({ data }) => {
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
          ></Grid>
          <Grid item container md={12} justify="center">
            {data.map((item, index) => (
              <Grid
                item
                md={3}
                sm={7}
                xs={12}
                className={classes.priceTable}
                key={index}
              >
                <div className="exp-pricing-plans-inner">
                  <div className="exp-pricing-plans-top">
                    <Typography variant="h5" className={classes.priceTitle}>
                      {item.title}
                    </Typography>
                    <p className="exp-price-mrp">{item.price}</p>
                  </div>
                  <div className="exp-pricing-plans-mid">
                    <ul className={classes.packageDetail}>
                      {item.details.map((item, index) => (
                        <li key={index}>
                          <p style={{ display: "flex", alignItems: "center" }}>
                            <CheckIcon
                              style={{
                                padding: "5px 0",
                                marginRight: "10px",
                                color: "#f69320",
                              }}
                            />
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={classes.btnPurchase}>
                    <Link
                      to="/xem-online#meaningNumerology"
                      style={{ width: "100%" }}
                    >
                      Mua ngay
                    </Link>
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Prices;
